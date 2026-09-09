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
        <p><strong>Demo:</strong> https://john-crystal-pools-demo-novenworks-abbd0c90.vercel.app</p>
        <p><strong>Phone:</strong> (818) 885-0004 · (310) 477-2828</p>
        <p><strong>Email:</strong> customerservice@johncrystalpools.com</p>
        <p><strong>Mailing:</strong> 9560 Topanga Canyon Blvd, Unit 202, Chatsworth, CA 91311</p>
        <p><strong>GitHub:</strong> https://github.com/Novenworks/John-Crystal-Pools-Demo</p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Original-site observations</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
          <li>Copyright still reads 2021.</li>
          <li>SiteGround challenge + broken JS/CSS often leaves visitors with unstyled HTML.</li>
          <li>Real project photos live in old gallery URLs, not on the homepage.</li>
          <li>Primary CTA is a phone number in the body copy.</li>
          <li>No obvious current agency credit on first-party pages.</li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Redesign improvements</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
          <li>Hero uses their night courtyard pool and states the offer in one sentence.</li>
          <li>Services grouped around buyer decisions.</li>
          <li>Work grid uses first-party project photography.</li>
          <li>Verified phone, email, Chatsworth address. Form opens mailto.</li>
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
          <li>Do not quote the old LA Times “700 projects” figure as a current stat.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Subject lines</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
          <li>John Crystal Pools — a homepage that shows the backyard, not the template</li>
          <li>Speculative redesign: your 1970 story and vanishing-edge work</li>
          <li>Quick note on johncrystalpools.com (2021 copyright, hidden project photos)</li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Cold email</h2>
        <pre className="mt-3 whitespace-pre-wrap rounded-sm bg-white p-4 text-sm">{`John —\n\nI was looking at johncrystalpools.com. The work in the old galleries is the product. The live homepage still carries a 2021 copyright and often no longer renders as a designed site.\n\nNovenworks built a speculative redesign using your own photography and the copy already on your About and Contact pages. It is not a client project.\n\nDemo: https://john-crystal-pools-demo-novenworks-abbd0c90.vercel.app\n\nIf it is useful as a starting point, I am happy to walk through it.\n\nVincent\nNovenworks`}</pre>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Follow-up</h2>
        <pre className="mt-3 whitespace-pre-wrap rounded-sm bg-white p-4 text-sm">{`John — short follow-up on the speculative homepage mock. The live site still hides the project photos behind old gallery URLs. Demo: https://john-crystal-pools-demo-novenworks-abbd0c90.vercel.app`}</pre>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Capture assets</h2>
        <ul className="mt-3 space-y-2 text-sm">
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
