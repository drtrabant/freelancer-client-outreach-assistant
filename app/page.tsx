'use client';

import { useState, useRef, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimateIn({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight text-stone-900">
          Bold<span className="text-amber-700">Pitch</span>
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm text-stone-600">
          <a href="#how-it-works" className="hover:text-stone-900 transition-colors">
            How it works
          </a>
          <a href="#features" className="hover:text-stone-900 transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-stone-900 transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-stone-900 transition-colors">
            FAQ
          </a>
        </div>
        <a
          href="#hero-cta"
          className="text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 px-5 py-2.5 rounded-full transition-colors"
        >
          Get early access
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmed = email.trim();
    if (!trimmed) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 bg-stone-50">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <AnimateIn>
          <p className="text-sm font-medium text-amber-700 tracking-wide uppercase mb-6">
            For freelancers who are great at their craft
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-stone-900 leading-[1.1] tracking-tight mb-6">
            Stop dreading outreach.
            <br />
            <span className="text-stone-500">Start landing clients.</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-lg sm:text-xl text-stone-500 max-w-xl mx-auto leading-relaxed mb-10">
            You shouldn&apos;t need to feel &ldquo;salesy&rdquo; to grow your business.
            BoldPitch writes personalized outreach that sounds like you — so you can
            hit send without the stomachache.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div id="hero-cta" className="max-w-md mx-auto">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-6 py-5 text-emerald-800">
                <p className="font-medium">You&apos;re on the list! 🎉</p>
                <p className="text-sm mt-1 text-emerald-600">
                  We&apos;ll let you know as soon as BoldPitch is ready.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maya@freelancer.com"
                    required
                    className="w-full px-5 py-3.5 rounded-full border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition-all text-sm"
                  />
                  {error && (
                    <p className="text-red-600 text-xs mt-2 pl-5">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-7 py-3.5 rounded-full bg-stone-900 text-white font-medium text-sm hover:bg-stone-800 disabled:opacity-60 transition-all whitespace-nowrap"
                >
                  {loading ? 'Joining...' : 'Get early access'}
                </button>
              </form>
            )}
            <p className="text-xs text-stone-400 mt-4">
              No spam, no hustle-bro energy. Just early access + a calmer way to find clients.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      'I spent 45 minutes writing one cold email and it was terrible. BoldPitch helped me send 5 genuine pitches in the same time — and one turned into a $4K project.',
    name: 'Sarah K.',
    role: 'Freelance UX Writer',
    avatar: 'SK',
  },
  {
    quote:
      'For the first time, my outreach actually sounds like me. Not like a LinkedIn robot. I\'ve had three replies this week alone.',
    name: 'James T.',
    role: 'Independent Brand Strategist',
    avatar: 'JT',
  },
  {
    quote:
      'I always knew what I wanted to say but could never get it out without sounding desperate. This tool gets it.',
    name: 'Priya M.',
    role: 'Freelance Web Developer',
    avatar: 'PM',
  },
];

function SocialProof() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <p className="text-center text-sm font-medium text-amber-700 tracking-wide uppercase mb-4">
            From freelancers like you
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight mb-16">
            &ldquo;I finally don&apos;t dread Monday outreach.&rdquo;
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1}>
              <div className="bg-stone-50 rounded-2xl p-8 h-full flex flex-col border border-stone-100">
                <blockquote className="text-stone-600 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-stone-200">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-sm font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900">{t.name}</p>
                    <p className="text-xs text-stone-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: '01',
    title: 'Describe your ideal client',
    description:
      'Tell us who you help, what you do best, and how you like to sound. A 5-minute conversational setup — not a form.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Get a personalized pitch',
    description:
      'Add a prospect and we\'ll generate outreach that sounds like you on your best day — warm, specific, and genuine.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d