typescript
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const WAITLIST_FILE = path.join(process.cwd(), "data", "waitlist.json");
const MAX_EMAIL_LENGTH = 320;

interface WaitlistEntry {
  email: string;
  joinedAt: string;
  ip: string | null;
}

async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(WAITLIST_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeWaitlist(entries: WaitlistEntry[]): Promise<void> {
  const dir = path.dirname(WAITLIST_FILE);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body.email !== "string") {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { success: false, error: "Email address is too long." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const entries = await readWaitlist();

    const alreadyExists = entries.some((entry) => entry.email === email);
    if (alreadyExists) {
      // Return success to avoid leaking whether an email is already registered
      return NextResponse.json(
        {
          success: true,
          message: "You're on the list! We'll be in touch soon.",
        },
        { status: 200 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      null;

    const newEntry: WaitlistEntry = {
      email,
      joinedAt: new Date().toISOString(),
      ip,
    };

    entries.push(newEntry);
    await writeWaitlist(entries);

    console.log(`[Waitlist] New signup: ${email} at ${newEntry.joinedAt}`);

    return NextResponse.json(
      {
        success: true,
        message: "You're on the list! We'll be in touch soon.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Waitlist] Error processing signup:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}