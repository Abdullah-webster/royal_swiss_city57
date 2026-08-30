import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X, ArrowDown, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { HeroCapsuleAnimation } from "@/components/HeroCapsuleAnimation";
import { ShowcaseCarousel } from "@/components/ShowcaseCarousel";
import { animateVisionScene, animateLegacySection, animatePartnerStrip, animateEnquireSection, animateFooter, animateShowcaseSection } from "@/utils/sectionAnimations";

const img = { logo: "https://royal-swiss-city-30.vercel.app/logo.png", hero: "/city-aerial.jpg", city: "/city-aerial.jpg", developer: "/hrl-highrise.jpg", green: "/green-energy.jpg", chairman: "/chairman.png", ceo: "/ceo.png", partnership: "/infrastructure.jpg", residences: "/hrl-roads.jpg", aerial: "/city-aerial.jpg" };
const nav = ["HOME", "THE CITY", "DEVELOPER", "LOCATION", "FAQ", "PARTNER", "DEALER", "ENQUIRE"];
const navMobile = ["HOME", "THE CITY", "DEVELOPER", "PROJECTS", "LOCATION", "FAQ", "PARTNER", "DEALER", "ENQUIRE"];
const footerLinks = ["Residential Plots", "Commercial Plots", "The City", "Developer", "Location", "FAQ", "Partner", "Enquire"];
const footerDescriptions = {
  "Residential Plots": " MARLA 3.5 MARLA 5 MARLA 10 KANAL 1 KANAL 2",
  "Commercial Plots": "MARLA 2\nMARLA 4\nMARLA 8",
  "The City": "Discover a considered way to experience the city at Royal Swiss City.",
  "Developer": "Discover a considered way to experience developer at Royal Swiss City.",
  "Location": "Discover a considered way to experience location at Royal Swiss City.",
  "FAQ": "Discover a considered way to experience faq at Royal Swiss City.",
  "Partner": "Discover a considered way to experience partner at Royal Swiss City.",
  "Enquire": "Discover a considered way to experience enquire at Royal Swiss City."
};
const communityCards = [
  { eyebrow: "THE RIVERFRONT", title: "Invest In Your Future", body: "A structured payment plan, riverfront land, and the credibility of HRL behind every plot. Details available from our sales team.", image: img.aerial },
  { eyebrow: "THE NEIGHBOURHOOD", title: "Become An Austhorized Partner", body: "Join the official Royal Swiss City dealer network. Sales support, marketing materials, and a professional partnership framework.", image: img.city },
  { eyebrow: "THE HOME", title: "Space for what matters.", body: "A Swiss-inspired setting for families, investors, and future generations to make their own.", image: img.residences },
];
const features = ["Gated Community", "Solar Infrastructure", "Riverfront Setting", "Wide Boulevards", "Education & Healthcare", "Retail & Services", "Sports & Recreation", "Water Management"];
const numbers = [{ value: "60+", label: "YEARS OF EXPERIENCE" }, { value: "140,000", label: "ACRES IN THE RAVI VISION" }, { value: "46 KM", label: "RIVERFRONT HORIZON" }, { value: "10M+", label: "FUTURE RESIDENTS" }];
function Logo() { return <img className="brand-logo" src={img.logo} alt="Royal Swiss City" /> }
function Anchor({ item }: { item: string }) {
  if (item === "DEVELOPER") {
    return <a href="/developer">{item}</a>
  }
  if (item === "HOME") {
    return <a href="/">{item}</a>
  }
  if (item === "PROJECTS") {
    return <a href="/projects">{item}</a>
  }
  if (item === "ENQUIRE") {
    return <a href="/enquire">{item}</a>
  }
  return <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>
}
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const [scrollY, setScrollY] = useState(0); const [openFooter, setOpenFooter] = useState<string | null>(null);
  useEffect(() => { let f = 0; const fn = () => { cancelAnimationFrame(f); f = requestAnimationFrame(() => { setScrollY(window.scrollY); setScrolled(window.scrollY > 28) }) }; fn(); window.addEventListener("scroll", fn, { passive: true }); return () => { cancelAnimationFrame(f); window.removeEventListener("scroll", fn) } }, []);
  useEffect(() => { const o = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: .12, rootMargin: "0px 0px -10% 0px" }); document.querySelectorAll(".reveal-section,.reveal-item").forEach(n => o.observe(n)); return () => o.disconnect() }, []);
  useEffect(() => {
    const visionElement = document.querySelector(".vision-scene");
    const legacyElement = document.querySelector(".legacy-section");
    const partnerElement = document.querySelector(".partner-strip");
    const enquireElement = document.querySelector(".enquire-section");
    const footerElement = document.querySelector(".walk-footer.reveal-section");
    const showcaseElement = document.querySelector(".showcase-section");

    if (visionElement) animateVisionScene(visionElement);
    if (legacyElement) animateLegacySection(legacyElement);
    // if (partnerElement) animatePartnerStrip(partnerElement);
    if (enquireElement) animateEnquireSection(enquireElement);
    if (footerElement) animateFooter(footerElement);
    if (showcaseElement) animateShowcaseSection(showcaseElement);
  }, []);
  const vh = typeof window !== "undefined" ? window.innerHeight : 800; const heroProgress = Math.min(scrollY / Math.max(vh, 800), 1);
  return <main className="walkthrough-page home-page" style={{ "--hero-progress": heroProgress } as React.CSSProperties}>
    <header className={`walk-header ${scrolled ? "is-scrolled" : ""}`}><button className="mobile-menu-trigger" aria-label="Menu" onClick={() => setMenuOpen(true)}><Menu size={22} strokeWidth={1.4} /></button><nav className="desktop-links desktop-links--left">{nav.slice(0, 3).map(item => <Anchor key={item} item={item} />)}</nav><a className="centered-brand" href="#home"><Logo /></a><nav className="desktop-links desktop-links--right">{nav.slice(3).map(item => <Anchor key={item} item={item} />)}</nav></header>
    <HeroCapsuleAnimation />

    <section id="vision" className="vision-scene"><div className="section-index">02</div><div className="vision-copy"><p className="section-kicker">THE PLACE</p><h2>THE VISION<br /><em>of ROYAL SWISS CITY</em></h2><p>Lahore is growing toward the Ravi. Around that movement, a new urban idea is taking shape: a greener, more connected city where water, landscape, neighbourhoods, and opportunity belong to the same long view.</p></div><div className="metric-grid">{numbers.map((n, i) => <div className="metric reveal-item" key={n.label} style={{ transitionDelay: `${i * 90}ms` }}><strong>{n.value}</strong><span>{n.label}</span></div>)}</div></section>

    <section id="location" className="showcase-section reveal-section"><div className="showcase-heading"><p className="section-kicker">03 / EXPLORE THE SCALE</p><h2>MORE THAN<br /><em>A PLOT.</em></h2></div><div className="scroll-hint">← SWIPE TO EXPLORE →</div><ShowcaseCarousel cards={communityCards} /></section>

    <section id="developer" className="legacy-section" style={{ backgroundImage: `url(/legacy-desktop.jpg)`, backgroundSize: "cover", backgroundPosition: "center top", backgroundAttachment: "fixed" }}><div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))" }} /><div className="legacy-copy" style={{ position: "relative", zIndex: 2 }}><p className="section-kicker">04 / THE LEGACY</p><h2>60+ Years of LEGACY<br /><em>Crafted by experience.</em></h2><p>Behind Royal Swiss City is a legacy built over six decades. Habib Rafiq and RKS bring the discipline of engineering, infrastructure, and delivery to a new kind of residential address. That experience is felt in the decisions that matter: the scale of the roads, the care in the utilities, the clarity of the masterplan, and the confidence that comes from building for the long term.</p></div></section>

    <section className="legacy-quotes-section reveal-section"><div className="legacy-quotes"><article className="legacy-card reveal-item"><img src={img.chairman} alt="Shahid Rafiq" /><div><small>CHAIRMAN</small><h3>Shahid Rafiq</h3><p className="legacy-quote">"For over six decades, Habib Rafiq (Pvt) Ltd has transformed vision into reality through innovation, quality, and dedication. Renowned for delivering excellence across industrial, infrastructure, power, oil & gas, aviation, and high-rise projects, we have consistently exceeded client expectations. Building on this legacy, we now bring the same expertise to modern housing society — designed with world-class infrastructure, sustainable planning, and premium amenities, reflecting our commitment to exceptional living spaces and lasting value for generations to come."</p></div></article><article className="legacy-card reveal-item"><img src={img.ceo} alt="Sohaib Hassan" /><div><small>CHIEF EXECUTIVE</small><h3>Sohaib Hassan</h3><p className="legacy-quote">"It is a privilege to carry forward the legacy of Habib Rafiq Engineering (Pvt) Ltd. For over six decades, we set benchmarks in engineering excellence before expanding into real estate — making quality developments our trademark. Today, we develop well-planned, sustainable communities combining modern infrastructure with affordable living through Royal Swiss City. We remain committed to creating developments that enhance lifestyles and deliver lasting value for homeowners, investors, and future generations."</p></div></article></div><div style={{ textAlign: "center" }}><a href="/developer" style={{ background: "#c4b08a", color: "#111", border: "none", padding: "12px 28px", borderRadius: "999px", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontWeight: 500, transition: "all 0.3s ease", marginTop: "48px", marginBottom: "48px", opacity: 0, transform: "translateY(20px)" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>LEARN MORE ABOUT HRL</a></div></section>

    <section id="partner" className="partner-strip"><img src={img.partnership} alt="Royal Swiss City partnership network" /><div><p className="section-kicker">06 / PARTNER WITH US</p><h2>A PLACE WORTH<br /><em>REPRESENTING.</em></h2><p>Join the Royal Swiss City partner network and help your clients find a place they'll be proud to call home. We'll give you the tools, support, and information you need to guide them with confidence.</p><a className="outline-cta" href="#enquire" style={{ transition: "all 0.3s ease" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>APPLY FOR PARTNERSHIP</a></div></section>
    <section id="enquire" className="enquire-section reveal-section"><p className="section-kicker">FIND YOUR PLACE IN THE STORY</p><h2>MAKE ROOM<br /><em>FOR WHAT'S NEXT.</em></h2><p>Tell us what you are looking for — a place to live, a place to invest, or a partnership built around Lahore's next chapter. Our team will share the right details, at the right pace.</p><div><a href="tel:+9242111777588">042 111 777 588</a><a href="mailto:royalswisscity@gmail.com">royalswisscity@gmail.com</a><a href="/enquire" style={{ background: "#c4b08a", color: "#111", border: "none", padding: "12px 28px", borderRadius: "999px", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontWeight: 500, transition: "all 0.3s ease" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>ENQUIRE</a></div></section>

    <footer className="walk-footer reveal-section"><div className="footer-accordions">{footerLinks.map(item => <div className={openFooter === item ? "open" : ""} key={item}><button onClick={() => setOpenFooter(openFooter === item ? null : item)}>{item}<ChevronDown size={14} /></button>{openFooter === item && <p style={{ whiteSpace: "pre-line" }}>{footerDescriptions[item as keyof typeof footerDescriptions]}</p>}</div>)}</div><div className="footer-socials"><a href="https://instagram.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Instagram"><Instagram size={24} /></a><a href="https://facebook.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Facebook"><Facebook size={24} /></a><a href="https://tiktok.com/@royalswisscity" target="_blank" rel="noopener noreferrer" title="TikTok"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.34 0 .67.05.98.15V9.41a5.81 5.81 0 0 0-.98-.08 6.04 6.04 0 0 0-6.04 6.04 6.04 6.04 0 0 0 6.04 6.04 6.04 6.04 0 0 0 6.04-6.04v-3.1a7.7 7.7 0 0 0 3.77 1.01V9.81a4.77 4.77 0 0 1-.77-.06z" /></svg></a><a href="https://linkedin.com/company/royalswisscity" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={24} /></a><a href="https://youtube.com/@royalswisscity" target="_blank" rel="noopener noreferrer" title="YouTube"><Youtube size={24} /></a><a href="https://x.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="X"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.694-5.867 6.694h-3.306l7.733-8.835L2.25 2.25h6.814l4.882 6.45L18.244 2.25zM17.083 18.386h1.83L6.959 4.155H5.049l12.034 14.231z" /></svg></a></div><div className="footer-contact"><b>Where life happens.</b><span>© 2026 ROYAL SWISS CITY · PRIVACY POLICY · SITEMAP</span></div></footer>

    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}><div className="mobile-menu__top"><button onClick={() => setMenuOpen(false)} aria-label="Close"><ChevronDown size={22} /></button><button onClick={() => setMenuOpen(false)} aria-label="Close"><X size={22} /></button></div><div className="mobile-menu__links">{navMobile.map(item => { const href = item === "DEVELOPER" ? "/developer" : item === "PROJECTS" ? "/projects" : item === "HOME" ? "/" : `#${item.toLowerCase().replaceAll(" ", "-")}`; return <a href={href} onClick={() => setMenuOpen(false)} key={item}>{item}</a> })}</div></div>
  </main>
}
