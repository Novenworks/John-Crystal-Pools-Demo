import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outreach brief | John Crystal Pools demo",
  robots: { index: false, follow: false },
};

export default function OutreachPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 text-ink">
      <p className="text-xs uppercase tracking-[0.25em] text-water">Novenworks · operator only</p>
      <h1 className="mt-3 font-serif text-4xl">John Crystal Pools — outreach brief</h1>
      <p className="mt-3 text-sm text-ink/70">Unlinked, noindex. Not part of the prospect-facing site.</p>

      <section className="mt-10 space-y-2 text-sm">
        <h2 className="font-serif text-2xl">Snapshot</h2>
        <p><strong>Business:</strong> John Crystal Pools — custom pools, spas, water features, landscapes, hardscapes.</p>
        <p><strong>Original URL:</strong> <a className="underline" href="https://johncrystalpools.com/">https://johncrystalpools.com/</a></p>
        <p><strong>Demo:</strong> https://john-crystal-pools-demo.vercel.app</p>
        <p><strong>Phone:</strong> (818) 885-0004 · (310) 477-2828</p>
        <p><strong>Email:</strong> customerservice@johncrystalpools.com</p>
        <p><strong>Mailing:</strong> 9560 Topanga Canyon Blvd, Unit 202, Chatsworth, CA 91311</p>
        <p><strong>GitHub:</strong> https://github.com/Novenworks/John-Crystal-Pools-Demo</p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Original-site observations (verified 2026-10-06)</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
          <li>Lead observation for outreach: the footer/copyright on johncrystalpools.com still reads 2021 (fetched 2026-10-06).</li>
          <li>The contact page lists email and two phone numbers but no contact form (fetched 2026-10-06).</li>
          <li>An automated headless Chromium visit returned a SiteGround robot-challenge page instead of the homepage. This is an automated-browser result only; do not claim real visitors see it.</li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Redesign improvements</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
          <li>Hero uses their night courtyard pool and states the offer in one sentence.</li>
          <li>Services grouped around buyer decisions.</li>
          <li>Work grid uses first-party project photography.</li>
          <li>Verified phone, email, Chatsworth address. Form opens a pre-filled email to the published address; nothing is stored.</li>
          <li>Proof limited to 1970 start, Total Concept, LA Times, named geography.</li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Talking points</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          <li>The work is high-ticket and visual; the current site no longer shows it that way.</li>
          <li>Total Concept is already on their About page.</li>
          <li>This is a speculative demo, not a hired engagement.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">What not to say</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          <li>Do not insult the existing site, designer, or agency.</li>
          <li>Do not imply Novenworks was hired or owns the photography.</li>
          <li>Do not invent ROI, SEO, leads, reviews, staff size, warranties, or prices.</li>
          <li>Do not claim current CSLB status.</li>
          <li>Do not promise a timeline, price, support period, or outcome.</li>
          <li>Do not quote the old LA Times “700 projects” figure as a current stat.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Subject lines</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
            <li>John, I made something for John Crystal Pools</li>
            <li>had an idea for John Crystal Pools</li>
            <li>quick thing I built for John Crystal Pools</li>
          </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Contact channel</h2>
        <p className="mt-3 text-sm">Published business email customerservice@johncrystalpools.com, listed on https://johncrystalpools.com/contactus.htm (checked 2026-10-06). Nothing has been sent. Recipient is the business inbox; confirm John Crystal is the decision-maker when replying.</p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Cold email (send the demo root URL, never /outreach)</h2>
        <pre className="mt-3 whitespace-pre-wrap rounded-sm bg-white p-4 text-sm">
            {`Hi John,

I was looking at johncrystalpools.com and noticed the copyright still reads 2021, even though the project photography is the kind of work that sells itself.

I built a concept homepage so you can see what it could look like: https://john-crystal-pools-demo.vercel.app

The idea is that a homeowner lands on your photography first, sees how Total Concept works, and has a clear way to call or email you for an estimate.

What you would get is a done-for-you package: the copy, the build, mobile polish, your existing email and phone connected as the estimate path, technical setup, and launch. I handle the work. You review and approve.

Want me to send over the full breakdown of what you get and what it costs?

Vincent, Novenworks`}
          </pre>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Capture assets</h2>
        <div className="mt-4 space-y-8 text-sm">
          <figure>
            <img src="/outreach/before-original-desktop.png" alt="BEFORE: johncrystalpools.com at 1440px, served as the SiteGround robot-challenge page" className="w-full border border-stone/40" />
            <figcaption className="mt-2 text-ink/70">BEFORE — live johncrystalpools.com at 1440×900, captured 2026-09-27. The host returned its SiteGround robot-challenge page (HTTP 202) instead of the homepage; shown as served, not a reconstructed theme.</figcaption>
          </figure>
          <figure>
            <img src="/outreach/after-desktop.png" alt="AFTER: demo homepage at 1440px" className="w-full border border-stone/40" />
            <figcaption className="mt-2 text-ink/70">AFTER — demo homepage, desktop 1440×900.</figcaption>
          </figure>
          <figure>
            <img src="/outreach/after-mobile.png" alt="AFTER: demo homepage at 390px mobile" className="mx-auto w-full max-w-[320px] border border-stone/40" />
            <figcaption className="mt-2 text-center text-ink/70">AFTER — demo homepage, mobile 390×844.</figcaption>
          </figure>
        </div>
        <ul className="mt-6 space-y-2 text-sm">
          <li><a className="underline" href="/outreach/before-original-desktop.png">BEFORE original desktop</a></li>
          <li><a className="underline" href="/outreach/after-desktop.png">AFTER desktop</a></li>
          <li><a className="underline" href="/outreach/after-mobile.png">AFTER mobile</a></li>
          <li><a className="underline" href="/outreach/after-scroll.gif">AFTER scroll GIF</a></li>
          <li><a className="underline" href="/outreach/after-scroll.mp4">AFTER scroll MP4</a></li>
        </ul>
      </section>
    </main>
  );
}
