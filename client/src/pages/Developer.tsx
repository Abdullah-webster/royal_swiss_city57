import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X, ArrowDown } from "lucide-react";
import { animateFeaturesSection, animateFooter } from "@/utils/sectionAnimations";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";

const img = { logo: "https://royal-swiss-city-30.vercel.app/logo.png", heroDesktop: "/hero-dev-desktop.jpg", heroMobile: "/hero-dev-mobile.jpg", chairman: "/chairman.png", ceo: "/ceo.png" };
const nav = ["HOME", "THE CITY", "DEVELOPER", "LOCATION", "FAQ", "PARTNER", "DEALER", "ENQUIRE"];
const navMobile = ["HOME", "THE CITY", "DEVELOPER", "PROJECTS", "LOCATION", "FAQ", "PARTNER", "DEALER", "ENQUIRE"];

function Logo() { return <img className="brand-logo" src={img.logo} alt="Royal Swiss City" /> }
function Anchor({ item }: { item: string }) { 
  if (item === "DEVELOPER") {
    return <a href="/developer">{item}</a>
  }
  if (item === "HOME") {
    return <a href="/">{item}</a>
  }
  return <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a> 
}

export default function Developer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [openFooter, setOpenFooter] = useState<string | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const isMobileView = typeof window !== "undefined" ? window.innerWidth <= 760 : false;

  useEffect(() => { 
    let f = 0; 
    const fn = () => { 
      cancelAnimationFrame(f); 
      f = requestAnimationFrame(() => { 
        setScrollY(window.scrollY); 
        setScrolled(window.scrollY > 28) 
      }) 
    }; 
    fn(); 
    window.addEventListener("scroll", fn, { passive: true }); 
    return () => { 
      cancelAnimationFrame(f); 
      window.removeEventListener("scroll", fn) 
    } 
  }, []);

  useEffect(() => { 
    const o = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: .12, rootMargin: "0px 0px -10% 0px" }); 
    document.querySelectorAll(".reveal-section,.reveal-item").forEach(n => o.observe(n)); 
    return () => o.disconnect() 
  }, []);

  useEffect(() => {
    const featuresElement = document.querySelector(".features-section");
    const footerElement = document.querySelector(".walk-footer.reveal-section");

    if (featuresElement) animateFeaturesSection(featuresElement);
    if (footerElement) animateFooter(footerElement);
  }, []);

  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const heroProgress = Math.min(scrollY / Math.max(vh, 800), 1);

  return <main className="walkthrough-page" style={{ "--hero-progress": heroProgress } as React.CSSProperties}>
    <header className={`walk-header ${scrolled ? "is-scrolled" : ""}`}>
      <button className="mobile-menu-trigger" aria-label="Menu" onClick={() => setMenuOpen(true)}><Menu size={22} strokeWidth={1.4} /></button>
      <nav className="desktop-links desktop-links--left">{nav.slice(0, 3).map(item => <Anchor key={item} item={item} />)}</nav>
      <a className="centered-brand" href="/"><Logo /></a>
      <nav className="desktop-links desktop-links--right">{nav.slice(3).map(item => <Anchor key={item} item={item} />)}</nav>
    </header>

    <section id="home" className="walk-hero reveal-section">
      <picture>
        <source media="(max-width: 760px)" srcSet={img.heroMobile} />
        <source media="(min-width: 761px)" srcSet={img.heroDesktop} />
        <img src={img.heroDesktop} alt="Habib Rafiq Engineering - 60 Years of Excellence" />
      </picture>
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="hero-kicker">SIX DECADES OF ENGINEERING EXCELLENCE</p>
        <h1>HABIB<br /><span>RAFIQ</span></h1>
        <p>Transforming vision into reality through innovation, quality, and dedication.<br />Building infrastructure that shapes nations.</p>
        <a href="/projects">EXPLORE OUR PORTFOLIO</a>
      </div>
      <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></div>
    </section>

    <section id="about" className="vision-scene reveal-section" style={{ display: isMobileView ? "block" : "flex", flexDirection: isMobileView ? "column" : "row", gap: isMobileView ? "0" : "6vw", alignItems: isMobileView ? "auto" : "center", maxWidth: "100%", overflow: "hidden" }}>
      <div style={{ flex: isMobileView ? "auto" : "1", maxWidth: "100%", minWidth: "0" }}>
        <div className="section-index">01 / 04</div>
        <div className="vision-copy">
          <p className="section-kicker">OUR LEGACY</p>
          <h2>More than 60 Years<br /><em>of Excellence.</em></h2>
          <p>Habib Rafiq (Pvt.) Limited (HRL) is a leading Pakistan-based engineering and construction company with a distinguished legacy spanning more than six decades. Built on a strong foundation of customer satisfaction, professional excellence, and the successful delivery of projects of national and international importance.</p>
          <p>Over the years, HRL has developed extensive multidisciplinary expertise across civil, mechanical, and electrical engineering, enabling it to undertake and deliver projects of significant scale, complexity, and strategic importance.</p>
          <div className="metric-grid">
            <div className="metric reveal-item"><strong>60+</strong><span>YEARS OF EXPERIENCE</span></div>
            <div className="metric reveal-item"><strong>500+</strong><span>MAJOR PROJECTS</span></div>
            <div className="metric reveal-item"><strong>4</strong><span>REGIONAL OFFICES</span></div>
            <div className="metric reveal-item"><strong>100%</strong><span>ON-TIME DELIVERY</span></div>
          </div>
        </div>
      </div>
      <div style={{ flex: isMobileView ? "auto" : "1", marginTop: isMobileView ? "50px" : "0", maxWidth: "100%", minWidth: "0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <ProjectsCarousel isMobileView={isMobileView} />
      </div>
    </section>

    <section id="capabilities" className="developer-section reveal-section">
      <div className="developer-image">
        <img src="/hrl-building.jpg" alt="HRL Capabilities and Expertise" />
      </div>
      <div className="developer-copy">
        <p className="section-kicker">02 / OUR EXPERTISE</p>
        <h2>MULTIDISCIPLINARY<br /><em>EXCELLENCE.</em></h2>
        <p>HRL's diverse portfolio encompasses infrastructure development, housing and buildings, aviation facilities, industrial plants, power and energy projects, chemicals and petrochemicals, oil and gas developments, and environmental works.</p>
        <div className="stat-line">
          <span>1962<small>JOURNEY BEGAN</small></span>
          <span>6<small>SECTORS</small></span>
        </div>
        <a href="/projects">EXPLORE PROJECTS <ChevronRight size={13} /></a>
      </div>
    </section>

    <section id="sectors" className="features-section reveal-section">
      <p className="section-kicker">03 / AREAS OF EXPERTISE</p>
      <h2>COMPREHENSIVE<br /><em>CAPABILITIES.</em></h2>
      <div className="feature-grid">
        <article className="feature reveal-item" onClick={() => isMobileView && setExpandedFeature(expandedFeature === 0 ? null : 0)} style={{ cursor: isMobileView ? "pointer" : "default" }}><span>01</span><div className="feature-header"><h3>Infrastructure</h3>{isMobileView && <ChevronDown size={16} className="feature-arrow" style={{ transform: expandedFeature === 0 ? "rotate(180deg)" : "rotate(0deg)" }} />}</div><p style={{ display: isMobileView && expandedFeature !== 0 ? "none" : "block" }}>Roads, motorways, bridges, and large-scale land development with integrated utilities, drainage and water systems.</p></article>
        <article className="feature reveal-item" onClick={() => isMobileView && setExpandedFeature(expandedFeature === 1 ? null : 1)} style={{ cursor: isMobileView ? "pointer" : "default" }}><span>02</span><div className="feature-header"><h3>Housing</h3>{isMobileView && <ChevronDown size={16} className="feature-arrow" style={{ transform: expandedFeature === 1 ? "rotate(180deg)" : "rotate(0deg)" }} />}</div><p style={{ display: isMobileView && expandedFeature !== 1 ? "none" : "block" }}>Master-planned communities with complete infrastructure, sewerage, water supply and electrification networks.</p></article>
        <article className="feature reveal-item" onClick={() => isMobileView && setExpandedFeature(expandedFeature === 2 ? null : 2)} style={{ cursor: isMobileView ? "pointer" : "default" }}><span>03</span><div className="feature-header"><h3>Buildings</h3>{isMobileView && <ChevronDown size={16} className="feature-arrow" style={{ transform: expandedFeature === 2 ? "rotate(180deg)" : "rotate(0deg)" }} />}</div><p style={{ display: isMobileView && expandedFeature !== 2 ? "none" : "block" }}>Commercial, residential, institutional and high-rise developments with MEP and comprehensive building services.</p></article>
        <article className="feature reveal-item" onClick={() => isMobileView && setExpandedFeature(expandedFeature === 3 ? null : 3)} style={{ cursor: isMobileView ? "pointer" : "default" }}><span>04</span><div className="feature-header"><h3>Industrial</h3>{isMobileView && <ChevronDown size={16} className="feature-arrow" style={{ transform: expandedFeature === 3 ? "rotate(180deg)" : "rotate(0deg)" }} />}</div><p style={{ display: isMobileView && expandedFeature !== 3 ? "none" : "block" }}>Power plants, refineries, and process-industry facilities with complex mechanical and electrical systems.</p></article>
        <article className="feature reveal-item" onClick={() => isMobileView && setExpandedFeature(expandedFeature === 4 ? null : 4)} style={{ cursor: isMobileView ? "pointer" : "default" }}><span>05</span><div className="feature-header"><h3>Aviation</h3>{isMobileView && <ChevronDown size={16} className="feature-arrow" style={{ transform: expandedFeature === 4 ? "rotate(180deg)" : "rotate(0deg)" }} />}</div><p style={{ display: isMobileView && expandedFeature !== 4 ? "none" : "block" }}>Airports and aviation facilities development including passenger systems and airport infrastructure.</p></article>
        <article className="feature reveal-item" onClick={() => isMobileView && setExpandedFeature(expandedFeature === 5 ? null : 5)} style={{ cursor: isMobileView ? "pointer" : "default" }}><span>06</span><div className="feature-header"><h3>Oil & Gas</h3>{isMobileView && <ChevronDown size={16} className="feature-arrow" style={{ transform: expandedFeature === 5 ? "rotate(180deg)" : "rotate(0deg)" }} />}</div><p style={{ display: isMobileView && expandedFeature !== 5 ? "none" : "block" }}>Oil refineries, upgradation projects and oil and gas infrastructure across Pakistan and Gulf region.</p></article>
        <article className="feature reveal-item" onClick={() => isMobileView && setExpandedFeature(expandedFeature === 6 ? null : 6)} style={{ cursor: isMobileView ? "pointer" : "default" }}><span>07</span><div className="feature-header"><h3>Environmental</h3>{isMobileView && <ChevronDown size={16} className="feature-arrow" style={{ transform: expandedFeature === 6 ? "rotate(180deg)" : "rotate(0deg)" }} />}</div><p style={{ display: isMobileView && expandedFeature !== 6 ? "none" : "block" }}>Wastewater treatment plants, sewage treatment and environmental infrastructure solutions.</p></article>
        <article className="feature reveal-item" onClick={() => isMobileView && setExpandedFeature(expandedFeature === 7 ? null : 7)} style={{ cursor: isMobileView ? "pointer" : "default" }}><span>08</span><div className="feature-header"><h3>Water Resources</h3>{isMobileView && <ChevronDown size={16} className="feature-arrow" style={{ transform: expandedFeature === 7 ? "rotate(180deg)" : "rotate(0deg)" }} />}</div><p style={{ display: isMobileView && expandedFeature !== 7 ? "none" : "block" }}>Canals, reservoirs, water management and utility network engineering across multiple regions.</p></article>
      </div>
    </section>

    <section className="leadership-section reveal-section">
      <div className="leadership-heading">
        <p className="section-kicker">04 / LEADERSHIP & VISION</p>
        <h2>PEOPLE WHO<br /><em>BUILD FORWARD.</em></h2>
        <p>Every enduring place begins with a belief in what it can become. The leadership behind Habib Rafiq carries that belief into every decision — combining six decades of national experience with a clear vision for the future.</p>
      </div>
      <div className="leaders">
        <article className="leader-card reveal-item">
          <img src={img.chairman} alt="Shahid Rafiq" />
          <div>
            <small>CHAIRMAN</small>
            <h3>Shahid Rafiq</h3>
            <p className="leader-quote">"For over six decades, Habib Rafiq (Pvt) Ltd has transformed vision into reality through innovation, quality, and dedication. Renowned for delivering excellence across industrial, infrastructure, power, oil & gas, aviation, and high-rise projects, we have consistently exceeded client expectations. Building on this legacy, we now bring the same expertise to modern housing society — designed with world-class infrastructure, sustainable planning, and premium amenities, reflecting our commitment to exceptional living spaces and lasting value for generations to come."</p>
          </div>
        </article>
        <article className="leader-card reveal-item">
          <img src={img.ceo} alt="Sohaib Hassan" />
          <div>
            <small>CHIEF EXECUTIVE</small>
            <h3>Sohaib Hassan</h3>
            <p className="leader-quote">"It is a privilege to carry forward the legacy of Habib Rafiq Engineering (Pvt) Ltd. For over six decades, we set benchmarks in engineering excellence before expanding into real estate — making quality developments our trademark. Today, we develop well-planned, sustainable communities combining modern infrastructure with affordable living through Royal Swiss City. We remain committed to creating developments that enhance lifestyles and deliver lasting value for homeowners, investors, and future generations."</p>
          </div>
        </article>
        <article className="leader-card reveal-item leader-card--text">
          <div>
            <small>MANAGING DIRECTOR</small>
            <h3>Habib Ahmad</h3>
            <p className="leader-quote">"HRL, once a dream has shaped into an absolute reality. This has taken an enduring 60 years of conviction and untiring efforts to see it grow into a group with one of the biggest market clientele within Pakistan and abroad. The company has seen transformation from the conventional to state of the art and highly demanding mechanized construction. HRL has always been on the forefront to take up jobs and assignments with a cause and service to humanity integrated with innovation and global outlook. The hallmark of these efforts is completion of all projects ahead of agreed time frames."</p>
          </div>
        </article>
      </div>
    </section>

    <footer className="walk-footer reveal-section">
      <Logo />
      <div className="footer-accordions">
        <div>
          <button onClick={() => setOpenFooter(openFooter === "About" ? null : "About")}>ABOUT<ChevronDown size={14} /></button>
          {openFooter === "About" && <p>Habib Rafiq (Pvt.) Limited: 60+ years of engineering excellence delivering projects across infrastructure, housing, buildings, and industrial sectors.</p>}
        </div>
        <div>
          <button onClick={() => setOpenFooter(openFooter === "Services" ? null : "Services")}>SERVICES<ChevronDown size={14} /></button>
          {openFooter === "Services" && <p>Engineering • Procurement • Construction • Project Management • Infrastructure Development</p>}
        </div>
        <div>
          <button onClick={() => setOpenFooter(openFooter === "Contact" ? null : "Contact")}>CONTACT<ChevronDown size={14} /></button>
          {openFooter === "Contact" && <p><a href="tel:+9242111777588">042 111 777 588</a><br /><a href="mailto:royalswisscity@gmail.com">royalswisscity@gmail.com</a></p>}
        </div>
        <div>
          <button onClick={() => setOpenFooter(openFooter === "Links" ? null : "Links")}>LINKS<ChevronDown size={14} /></button>
          {openFooter === "Links" && <p><a href="https://www.habibrafiq.com/" target="_blank" rel="noopener noreferrer">Habib Rafiq Official</a></p>}
        </div>
      </div>
      <div className="footer-contact"><b>Building Tomorrow, Today</b><span>© 2026 HABIB RAFIQ · PRIVACY POLICY · SITEMAP</span></div>
    </footer>

    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <div className="mobile-menu__top">
        <button onClick={() => setMenuOpen(false)} aria-label="Close"><ChevronDown size={22} /></button>
        <button onClick={() => setMenuOpen(false)} aria-label="Close"><X size={22} /></button>
      </div>
      <div className="mobile-menu__links">
        {navMobile.map(item => { const href = item === "DEVELOPER" ? "/developer" : item === "PROJECTS" ? "/projects" : item === "HOME" ? "/" : `#${item.toLowerCase().replaceAll(" ", "-")}`; return <a href={href} onClick={() => setMenuOpen(false)} key={item}>{item}</a> })}
      </div>
      <div className="mobile-menu__bottom">
        <Logo /><span>HABIB RAFIQ</span>
      </div>
    </div>
  </main>
}
