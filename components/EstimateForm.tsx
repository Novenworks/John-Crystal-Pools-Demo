"use client";

import { FormEvent, useState } from "react";

export default function EstimateForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const city = String(data.get("city") || "");
    const project = String(data.get("project") || "");
    const subject = encodeURIComponent(`Estimate request from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity / neighborhood: ${city}\nProject: ${project}\n\nSent from the speculative Novenworks demo form. This opens the visitor's email client — no lead is stored on this demo.`
    );
    window.location.href = `mailto:customerservice@johncrystalpools.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">Name<input name="name" required autoComplete="name" className="h-12 rounded-sm border border-stone/50 bg-white px-3 text-ink outline-none focus:border-water" /></label>
        <label className="grid gap-1 text-sm">Phone<input name="phone" type="tel" required autoComplete="tel" className="h-12 rounded-sm border border-stone/50 bg-white px-3 text-ink outline-none focus:border-water" /></label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">Email<input name="email" type="email" autoComplete="email" className="h-12 rounded-sm border border-stone/50 bg-white px-3 text-ink outline-none focus:border-water" /></label>
        <label className="grid gap-1 text-sm">City / neighborhood<input name="city" className="h-12 rounded-sm border border-stone/50 bg-white px-3 text-ink outline-none focus:border-water" /></label>
      </div>
      <label className="grid gap-1 text-sm">What are you considering?<textarea name="project" rows={4} className="rounded-sm border border-stone/50 bg-white px-3 py-2 text-ink outline-none focus:border-water" placeholder="New pool, remodel, spa, landscape, hardscape…" /></label>
      <button type="submit" className="h-12 rounded-sm bg-water px-6 text-sm font-semibold uppercase tracking-wider text-cream hover:bg-lagoon">Request an Estimate</button>
      <p className="text-xs text-ink/60">Opens your email to customerservice@johncrystalpools.com. Nothing is stored on this demo site.</p>
      {sent && (<p className="text-sm text-water">If your email client did not open, write directly to customerservice@johncrystalpools.com or call (818) 885-0004.</p>)}
    </form>
  );
}
