

# PRD: BoldPitch

**Domain:** boldpitch.io

## Problem Statement

Freelancers consistently report cold outreach as their #1 emotional blocker to growing their business. They're skilled at their craft but paralyzed when it comes to initiating contact with potential clients. The result: they rely entirely on referrals, undercharge existing clients, and experience feast-or-famine income cycles.

The current alternatives fail them:
- **ChatGPT/free AI tools**: Require prompt engineering skill, produce generic output, offer zero accountability or follow-through structure
- **Sales CRMs (HubSpot, Pipedrive)**: Designed for sales teams, overwhelming for solo operators, no emotional scaffolding
- **Email marketing tools (Mailchimp, ConvertKit)**: Built for newsletters/lists, not 1:1 personalized outreach

**The core design challenge:** Our target users are psychologically resistant to the very action we're helping them take. The product must function as a *confidence engine* — not just a message generator. Every interaction must reduce friction and build momentum, not add another tool to feel guilty about ignoring.

## Target User Persona

**Name:** Maya, 31 — Freelance Brand Designer

- **Experience:** 3+ years freelancing, earns $50K-$90K/year
- **Current client acquisition:** 80% referrals, 20% inbound from portfolio site
- **Pain:** Knows she needs to do outreach but has sent exactly 2 cold emails in 6 months — both took 45 minutes to write and neither got a reply
- **Emotional state:** Feels "salesy" and inauthentic when pitching; fears rejection; compares herself to freelancers who seem to land clients effortlessly
- **Tech comfort:** Uses Figma, Notion, Slack daily — not intimidated by tools, but abandons anything that feels like homework
- **Willingness to pay:** Would pay $19-29/month without hesitation if it demonstrably helped her land 1 extra client per month (~$2K-$8K value)

**Anti-persona (explicitly NOT our user):**
- Agency owners with sales teams
- Freelancers earning <$20K (not yet validated enough to invest)
- Cold email power users who already send 100+ emails/week

## MVP Feature List

### Feature 1: Guided Profile Setup (The "Who You Are" Foundation)
**Why it exists:** AI-generated messages are only as good as the context they have. This also serves as a commitment device — investing 5 minutes in setup increases likelihood of sending a first message.

- Conversational onboarding flow (not a form): "What do you do?", "Who are your best clients?", "What results do you get them?"
- Captures: freelancer specialty, ideal client description, 2-3 past project summaries, tone preference (friendly/professional/casual), name + pronouns
- Stored as a "pitch profile" that feeds all AI generation
- Can be edited anytime from settings
- **Estimate:** 1 day

### Feature 2: Client Prospect Entry (Lightweight "Who to Pitch")
**Why it exists:** Freelancers don't need a CRM — they need a simple list of people they've been *meaning* to reach out to. This externalizes the mental load.

- Simple form: prospect name, company, role, what they do, any personal context ("met at a conference," "saw their rebrand," "found on LinkedIn")
- Optional URL field (company website or LinkedIn) for added context
- List view of all prospects with status: Draft → Ready → Sent → Replied → Won/Lost
- Maximum 50 prospects on free tier (forces focus, not hoarding)
- **Estimate:** 1 day

### Feature 3: AI Message Generator (The Core Value)
**Why it exists:** This is the product. Transform "I don't know what to say" into "This sounds like me, I'll send it."

- Select a prospect → "Generate Pitch" button
- Claude API generates 2 message variants using:
  - Freelancer's pitch profile
  - Prospect context
  - Tone preference
  - Channel selection (email vs. LinkedIn DM — affects length/format)
- Each variant shows:
  - Subject line (for email)
  - Message body (150-300 words for email, 50-100 for LinkedIn)
  - A one-line explanation of the *strategy* behind the message ("This leads with their recent funding round to show you did homework")
- User can: pick one, request a regeneration with feedback ("make it shorter," "less formal," "mention my Shopify experience"), or edit directly in a textarea
- Copy-to-clipboard button (we do NOT send emails — avoids deliverability complexity and keeps the human in the loop)
- After copying, prompt: "Mark as Sent?" — updates prospect status
- **Rate limit:** 20 generations/day (manages API costs; more than enough for real outreach)
- **Estimate:** 2 days

### Feature 4: The "Send One Today" Nudge System
**Why it exists:** Directly addresses the paralysis problem. The goal isn't 50 emails — it's *one* message today. Behavioral science: micro-commitments build momentum.

- Dashboard homepage shows a single card: "Your outreach for today" — suggesting a specific prospect to contact (prioritizes prospects in Draft status, oldest first)
- Daily streak counter: "You've sent outreach 3 days in a row 🔥"
- After marking a message as sent, celebratory micro-interaction (confetti or simple animation + encouraging copy: "That took guts. Most freelancers never send the first one.")
- If user hasn't logged in for 3+ days, optional email nudge: "Hey [name], [prospect name] is still waiting to hear from you. One message today?" (can be disabled)
- **Estimate:** 1 day

### Feature 5: Follow-Up Generator
**Why it exists:** Most freelancers send one message and never follow up. 80% of deals close after the 5th touchpoint. This is where real results come from.

- For prospects marked "Sent" for 5+ days with no reply: surface a follow-up suggestion on dashboard
- "Generate Follow-Up" button — Claude creates a brief, non-pushy follow-up based on original message context
- Supports up to 3 follow-ups per prospect, each with different angles
- Same copy-to-clipboard + mark-as-sent flow
- **Estimate:** 1 day

### Feature 6: Outreach Stats Dashboard
**Why it exists:** Confidence comes from seeing your own data. "I've sent 12 pitches this month" is self-reinforcing even before replies come in.

- Simple metrics: Messages sent (this week / this month / all time), Reply rate, Win rate, Current streak
- Pipeline view: how many prospects at each stage
- No complex analytics — this is a confidence mirror, not a BI tool
- **Estimate:** 0.5 days

### Feature 7: Message Templates Library (Pre-loaded)
**Why it exists:** Some users won't want to enter prospect details before seeing value. Pre-loaded templates show what good outreach looks like and reduce blank-page anxiety.

- 6 pre-written outreach templates by scenario:
  - Cold email to a company you admire
  - Follow-up after networking event
  - Re-engaging a past client
  - Responding to a job post as a freelancer (not applicant)
  - LinkedIn connection request + follow-up
  - Referral-based warm intro
- Each template is editable and can be personalized with AI using the pitch profile
- **Estimate:** 0.5 days

## Non-Goals (Explicitly Out of Scope for MVP)

| Out of Scope | Why |
|---|---|
| **Sending emails from the app** | Deliverability is an entire company-level problem. Copy-to-clipboard keeps us focused and keeps the human in the loop (which actually improves quality). |
| **LinkedIn/email integration** | OAuth complexity, API restrictions (LinkedIn), maintenance burden. Zero value-add for MVP validation. |
| **Prospect research/scraping** | Legal minefield, complex infrastructure. Users know who they want to pitch — they just can't write the message. |
| **Team features / collaboration** | We serve solo freelancers. Period. |
| **Payment / billing in MVP** | Use a simple Stripe checkout link or waitlist for paid tier. Validate engagement first. |
| **Mobile app** | Responsive web is sufficient. Outreach happens at a desk. |
| **A/B testing of messages** | Cool feature, but freelancers send 5-20 messages/month, not 500. Sample sizes are meaningless. |
| **AI tone training on user's past writing** | V2 feature. Tone preference toggle is sufficient for MVP. |

## Technical Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | SSR, API routes, fast iteration |
| **Language** | TypeScript | Type safety across full stack |
| **Styling** | Tailwind CSS | Rapid UI development, consistent design |
| **Database** | Vercel KV (Redis) | Free tier sufficient for MVP (<30MB). Simple key-value fits our data model. |
| **AI** | Anthropic Claude API (claude-3-haiku) | Cost-effective ($0.25/1M input tokens), fast, high-quality copy generation |
| **Auth** | NextAuth.js with Google OAuth | One-click signup, no password management |
| **Deployment** | Vercel (Hobby plan) | Zero-config, automatic deploys, free tier generous |
| **Email nudges** | Resend (free tier: 100 emails/day) | Simple transactional email for nudges |
| **Analytics** | Vercel Analytics (free) + PostHog (free tier) | Basic usage tracking without cost |

**Estimated monthly cost at 200 users:**
- Claude API: ~$5-15/month (20 generations/user/day cap, avg usage ~3/day)
- Vercel KV: Free tier (< 30MB)
- Resend: Free tier
- Vercel hosting: Free (Hobby) or $20 (Pro if needed)
- **Total: $5-35/month**

## API Endpoints

### Auth
```
GET  /api/auth/[...nextauth]     → NextAuth handler (Google OAuth)
```

### Profile
```
GET    /api/profile               → Get current user's pitch profile
PUT    /api/profile               → Create/update pitch profile
       Body: { specialty, idealClient, pastProjects[], tone, name, pronouns }
```

### Prospects
```
GET    /api/prospects              → List all prospects for user (sorted by createdAt)
POST   /api/prospects              → Create new prospect
       Body: { name, company, role, context, url? }
GET    /api/prospects/:id          → Get single prospect with message history
PUT    /api/prospects/:id          → Update prospect (status, details)
DELETE /api/prospects/:id          → Delete prospect
```

### Message Generation
```
POST   /api/generate               → Generate outreach messages
       Body: { prospectId, channel: "email" | "linkedin", isFollowUp: boolean, followUpNumber?: number }
       Response: { variants: [{ subject?, body, strategy }], tokensUsed }

POST   /api/generate/refine        → Refine a generated message
       Body: { prospectId, originalMessage, feedback: string }
       Response: { subject?, body, strategy }
```

### Outreach Actions
```
POST   /api/outreach/mark-sent     → Mark message as sent for a prospect
       Body: { prospectId, messageCopy: string, channel: string }

POST   /api/outreach/mark-replied  → Mark prospect as replied
       Body: { prospectId }

POST   /api/outreach/mark-won      → Mark prospect as won (client acquired)
       Body: { prospectId }

POST   /api/outreach/mark-lost     → Mark prospect as lost
       Body: { prospectId }
```

### Dashboard / Stats
```
GET    /api/stats                   → Get user's outreach statistics
       Response: { sentThisWeek, sentThisMonth, sentAllTime, replyRate,
                   winRate, currentStreak, longestStreak, pipelineCounts }
```

### Nudge
```
GET    /api/nudge/today             → Get today's suggested prospect + motivational copy
       Response: { prospect?, message, streakCount }
```

### Templates
```
GET    /api/templates               → Get pre-loaded template library
       Response: { templates: [{ id, scenario, subject?, body, channel }] }
```

### Rate Limiting (middleware)
```
All /api/generate* routes: 20 requests/user/day via Vercel KV counter
```

## Data Models

All data stored in Vercel KV with the following key patterns and structures:

### User
```typescript
// Key: user:{userId}
interface User {
  id: string;                    // Google OAuth sub
  email: string;
  name: string;
  image?: string;
  createdAt: string;             // ISO 8601
  lastLoginAt: string;
  onboardingComplete: boolean;
}
```

### PitchProfile
```typescript
// Key: profile:{userId}
interface PitchProfile {
  userId: string;
  specialty: string;             // "Brand designer for DTC startups"
  idealClient: string;           // "Series A ecommerce companies..."
  pastProjects: {
    client: string;
    description: string;
    result: string;              // "Increased conversion 23%"
  }[];                           // max 3
  tone: "friendly" | "professional" | "casual";
  name: string;
  pronouns?: string;
  updatedAt: string;
}
```

### Prospect
```typescript
// Key: prospect:{prospectId}
// Index: prospects:{userId} → Set of prospectIds
interface Prospect {
  id: string;                    // nanoid
  userId: string;
  name: string;
  company: string;
  role: string;
  context: string;               // "Saw their rebrand on Dribbble"
  url?: string;
  status: "draft" | "ready" | "sent" | "replied" | "won" | "lost";
  channel?: "email" | "linkedin";
  messages: OutreachMessage[];
  createdAt: string;
  updatedAt: string;
  sentAt?: string;
  repliedAt?: string;
}
```

### OutreachMessage
```typescript
// Stored inline within Prospect.messages[]
interface OutreachMessage {
  id: string;
  type: "initial" | "followup";
  followUpNumber?: number;       // 1, 2, or 3
  subject?: string;              // null for LinkedIn
  body: string;
  strategy: string;              // AI's reasoning
  channel: "email" | "linkedin";
  sentAt?: string;
  generatedAt: string;
}
```

### UserStats
```typescript
// Key: stats:{userId}
interface UserStats {
  currentStreak: number;         // consecutive days with ≥1 send
  longestStreak: number;
  lastSendDate: string;          // YYYY-MM-DD
  totalSent: number;
  totalReplied: number;
  totalWon: number;
  totalLost: number;
  // Weekly/monthly computed from prospect data at read time
}
```

### Rate Limit
```typescript
// Key: ratelimit:{userId}:{YYYY-MM-DD}
// Value: number (generation count)
// TTL: 48 hours (auto-cleanup)
```

## Success Metrics

### Primary (Week 1-2): Activation
| Metric | Target | How Measured |
|---|---|---|
| Onboarding completion rate | >70% of signups | profile:{userId} exists |
| First message generated | >60% of completed onboards | First /api/generate call |
| First message marked "Sent" | >40% of generated | First mark-sent event |

### Primary (Week 3-4): Engagement & Retention
| Metric | Target | How Measured |
|---|---|---|
| Weekly active users (sent ≥1 message) | >35% of signups | stats data |
| Avg messages sent per active user per week | ≥3 | stats data |
| Week-2 retention (returned after first week) | >40% | login + activity data |
| Streak of 3+ days | >25% of active users | UserStats.currentStreak |

### Secondary: Outreach Quality (Month 2+)
| Metric | Target | How Measured |
|---|---|---|
| Self-reported reply rate | >15% | replied / sent ratio |
| Self-reported win rate | >5% | won / sent ratio |
| NPS score |