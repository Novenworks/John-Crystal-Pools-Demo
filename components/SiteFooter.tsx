export default function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-2xl">John Crystal Pools</p>
          <p className="mt-3 max-w-sm text-sm text-cream/70">Custom pools, spas, water features, landscapes, and hardscapes for Southern California backyards.</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold uppercase tracking-wider text-sand">Visit / write</p>
          <p className="mt-3 text-cream/80">9560 Topanga Canyon Blvd, Unit 202<br />Chatsworth, CA 91311</p>
          <p className="mt-3">
            <a className="hover:text-sand" href="tel:8188850004">(818) 885-0004</a><br />
            <a className="hover:text-sand" href="tel:3104772828">(310) 477-2828</a>
          </p>
          <p className="mt-3"><a className="hover:text-sand" href="mailto:customerservice@johncrystalpools.com">customerservice@johncrystalpools.com</a></p>
        </div>
        <div className="text-sm">
          <p className="font-semibold uppercase tracking-wider text-sand">On the page</p>
          <nav className="mt-3 grid gap-2 text-cream/80">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#about">About</a>
            <a href="#contact">Request an estimate</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-5 text-center text-xs text-cream/50 md:px-8">
        © {new Date().getFullYear()} John Crystal Pools. Photography and marks remain property of their owners. This page is a speculative redesign by Novenworks and is not an official company website.
      </div>
    </footer>
  );
}
