'use client';

import * as React from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'success';

const fieldClasses =
  'mt-2 block w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition-colors placeholder:text-slate-500 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20';

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>('idle');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const body = [
      'New enquiry from the website',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      '',
      message,
    ].join('\n');

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `[Website enquiry] ${subject}`,
    )}&body=${encodeURIComponent(body)}`;

    // Hands the composed message to the visitor's email client, addressed to
    // the site inbox. Replace with a POST to your own endpoint once you have
    // a backend (Formspree, Resend route handler, etc.).
    setStatus('success');
    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
    >
      <h2 className="text-2xl">Send us a message</h2>
      <p className="mt-2 text-sm text-slate-600">
        Tell us about your project and we&rsquo;ll respond within one business
        day.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold text-navy-700"
          >
            Name <span className="text-slate-500">(required)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Wanjiku"
            className={fieldClasses}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold text-navy-700"
          >
            Email <span className="text-slate-500">(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.co.ke"
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="subject"
          className="text-sm font-semibold text-navy-700"
        >
          Subject <span className="text-slate-500">(required)</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="New commercial fit-out — Westlands"
          className={fieldClasses}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-navy-700"
        >
          Message <span className="text-slate-500">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about the site, scope and target start date."
          className={cn(fieldClasses, 'resize-y')}
        />
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-navy-700 px-6 text-base font-semibold text-white transition-colors hover:bg-navy-800 active:bg-navy-900 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Message
      </button>

      <p
        role="status"
        aria-live="polite"
        className="mt-4 text-sm text-slate-600"
      >
        {status === 'success' ? (
          <span className="inline-flex items-center gap-2 text-navy-700">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Your email app is opening with your message addressed to us.
            Hit send there and we&rsquo;ll reply within one business day.
          </span>
        ) : null}
      </p>
    </form>
  );
}
