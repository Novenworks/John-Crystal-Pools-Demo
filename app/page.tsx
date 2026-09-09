import EstimateForm from "@/components/EstimateForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const img = {
  night: "https://web.archive.org/web/20171025183727im_/http://johncrystalpools.com/images/front/s01.jpg",
  edge: "https://web.archive.org/web/20171025183727im_/http://johncrystalpools.com/images/front/s05.jpg",
  living: "https://web.archive.org/web/20171025183727im_/http://johncrystalpools.com/images/front/s03.jpg",
  vanish1: "https://web.archive.org/web/20160527193626im_/http://johncrystalpools.com/images/g-beverly-hills-vanishing-edge-pool-design-spa-with-custom-tile/s01.jpg",
  vanish2: "https://web.archive.org/web/20160527193631im_/http://johncrystalpools.com/images/g-beverly-hills-vanishing-edge-pool-design-spa-with-custom-tile/s02.jpg",
  vanish7: "https://web.archive.org/web/20160527200410im_/http://johncrystalpools.com/images/g-beverly-hills-vanishing-edge-pool-design-spa-with-custom-tile/s07.jpg",
  water: "https://web.archive.org/web/20160527201216im_/http://johncrystalpools.com/images/g-beverly-hills-pool-spa-design-custom-water-feature/s01.jpg",
  outdoor: "https://web.archive.org/web/20160527193613im_/http://johncrystalpools.com/images/g-los-angeles-outdoor-living-spaces-with-pool-spa-custom-tile/s01.jpg",
};

const projects = [
  { src: img.night, title: "Night courtyard pool", loc: "Southern California", note: "Perimeter-edge water plane against the house" },
  { src: img.edge, title: "Vanishing-edge spillway", loc: "Beverly Hills", note: "Custom tile edge with raised spa terrace" },
  { src: img.vanish2, title: "Vanishing-edge pool & spa", loc: "Beverly Hills", note: "Tile finish, quiet waterline, structured planting" },
  { src: img.vanish7, title: "Spa and water sheet", loc: "Beverly Hills", note: "Elevated spa working with the pool edge" },
  { src: img.water, title: "Pool, spa & water feature", loc: "Beverly Hills", note: "Water as architecture, not an accessory" },
  { src: img.outdoor, title: "Outdoor living with pool", loc: "Los Angeles", note: "Pool, terrace, and landscape as one room" },
];

export default function HomePage() {
  return (
    <div id="top">
      <SiteHeader />
      <section className="relative min-h-[88vh] bg-ink text-cream">
        <img src={img.night} alt="Night-lit custom pool wrapping a Southern California residence" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/15" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <p className="text-xs uppercase tracking-[0.28em] text-sand">Los Angeles · Ventura County</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] md:text-6xl">Build the Backyard Around the Way You Want to Live</h1>
          <p className="mt-5 max-w-xl text-base text-cream/85 md:text-lg">Custom pools, spas, water features, landscapes, and hardscapes — designed as one outdoor environment, not a checklist of trades.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex h-12 items-center rounded-sm bg-cream px-6 text-sm font-semibold uppercase tracking-wider text-ink hover:bg-sand">Request an Estimate</a>
            <a href="#work" className="inline-flex h-12 items-center rounded-sm border border-cream/50 px-6 text-sm font-semibold uppercase tracking-wider text-cream hover:bg-cream/10">View Our Work</a>
          </div>
        </div>
      </section>
      <section className="border-y border-stone/30 bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 text-sm md:grid-cols-4 md:px-8">
          <div><p className="font-serif text-2xl text-water">1970</p><p className="mt-1 text-ink/70">John Crystal began his pool career as a service technician</p></div>
          <div><p className="font-serif text-2xl text-water">Total Concept</p><p className="mt-1 text-ink/70">In-house staff with pool, landscape, and hardscape specialists</p></div>
          <div><p className="font-serif text-2xl text-water">Los Angeles Times</p><p className="mt-1 text-ink/70">Company featured in a published lifestyle profile</p></div>
          <div><p className="font-serif text-2xl text-water">Westside + Valley</p><p className="mt-1 text-ink/70">Work shown from Beverly Hills to Santa Monica and the Valley</p></div>
        </div>
      </section>
      <section id="services" className="bg-cream px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-water">What we build</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl md:text-5xl">The finished backyard is the product</h2>
          <p className="mt-4 max-w-2xl text-ink/75">John Crystal Pools is a Southern California design-and-build company for distinctive pools, spas, water features, landscapes, and hardscapes — including new construction and remodeling.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Custom pools", body: "Perimeter overflow, vanishing edge, lap pools, and tightly fitted yards." },
              { title: "Spas & water features", body: "Elevated spas, tile spillways, and water sheets that finish the edge." },
              { title: "Landscapes & hardscapes", body: "Decks, terraces, planting, and masonry as part of the outdoor room." },
              { title: "Remodeling", body: "Rebuild an existing pool when the structure can stay and the finish needs to change." },
              { title: "Outdoor living", body: "BBQ islands, fire features, and terraces planned with the water." },
              { title: "Total Concept", body: "Pool designers, landscapers, and hardscape specialists as one project team." },
            ].map((s) => (
              <article key={s.title} className="border border-stone/40 bg-white p-6">
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="work" className="bg-slatepool px-5 py-20 text-cream md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-sand">Selected work</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Completed environments</h2>
          <p className="mt-4 max-w-2xl text-cream/75">Photographs from the company’s own project library.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <figure key={p.src} className="overflow-hidden bg-ink">
                <div className="aspect-[16/9] overflow-hidden"><img src={p.src} alt={`${p.title} — ${p.loc}`} className="h-full w-full object-cover" /></div>
                <figcaption className="p-4">
                  <p className="font-serif text-xl">{p.title}</p>
                  <p className="mt-1 text-sm text-sand">{p.loc}</p>
                  <p className="mt-1 text-sm text-cream/70">{p.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2">
        <img src={img.edge} alt="Custom tile vanishing edge with water sheet" className="h-full min-h-[320px] w-full object-cover" />
        <div id="approach" className="flex flex-col justify-center bg-cream px-6 py-16 md:px-14">
          <p className="text-xs uppercase tracking-[0.28em] text-water">How a project starts</p>
          <h2 className="mt-3 font-serif text-4xl">A simple, truthful sequence</h2>
          <ol className="mt-8 space-y-5 text-ink/80">
            <li><span className="font-semibold text-ink">1. Walk the yard.</span> Access, grade, the house, and how the space will be used.</li>
            <li><span className="font-semibold text-ink">2. Design the environment.</span> Pool, spa, hardscape, and planting together.</li>
            <li><span className="font-semibold text-ink">3. Build the water and the room around it.</span> One job, not three disconnected vendors.</li>
          </ol>
        </div>
      </section>
      <section id="about" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.28em] text-water">The company</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">A pool career that started in 1970</h2>
            <div className="mt-6 space-y-4 text-ink/80">
              <p>John Crystal began as a pool service technician. The company moved into construction and remodeling, then landscapes and hardscapes.</p>
              <p>The firm describes its method as Total Concept: in-house staff working with landscapers, pool designers, and hardscape specialists.</p>
              <p>The company has been profiled in the Los Angeles Times. First-party materials also note Architectural Digest features.</p>
            </div>
          </div>
          <aside className="border border-stone/40 bg-cream p-7 lg:col-span-5">
            <p className="font-serif text-2xl">Who this work is for</p>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              <li>New custom pools or serious remodels</li>
              <li>Westside and Valley properties</li>
              <li>Projects that need water, stone, and planting resolved together</li>
            </ul>
            <p className="mt-6 text-sm text-ink/70">Los Angeles County, Ventura County, Malibu, Brentwood, Bel Air, Beverly Hills, Pacific Palisades, and West Los Angeles.</p>
          </aside>
        </div>
      </section>
      <section className="relative min-h-[420px] text-cream">
        <img src={img.vanish1} alt="Beverly Hills vanishing-edge pool" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-end px-5 py-16 md:px-8">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-sand">Southern California</p>
            <h2 className="mt-3 font-serif text-4xl">If the yard has to work as a second living room, start with the water.</h2>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-cream px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-water">Start a conversation</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Request an estimate</h2>
            <p className="mt-4 max-w-md text-ink/75">Call, email, or send a short note. Numbers and address from johncrystalpools.com.</p>
            <div className="mt-8 space-y-3 text-ink">
              <p><a className="text-lg font-semibold hover:text-water" href="tel:8188850004">(818) 885-0004</a></p>
              <p><a className="hover:text-water" href="tel:3104772828">(310) 477-2828</a></p>
              <p><a className="hover:text-water" href="mailto:customerservice@johncrystalpools.com">customerservice@johncrystalpools.com</a></p>
              <p className="pt-2 text-sm text-ink/70">9560 Topanga Canyon Blvd, Unit 202<br />Chatsworth, CA 91311</p>
            </div>
          </div>
          <div className="border border-stone/40 bg-white p-6 md:p-8"><EstimateForm /></div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
