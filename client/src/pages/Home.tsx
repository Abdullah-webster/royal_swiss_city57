import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X, ArrowDown, Instagram, Facebook, Linkedin, Youtube, Leaf, Droplets, Recycle, Users } from "lucide-react";
import { HeroCapsuleAnimation } from "@/components/HeroCapsuleAnimation";
import { ShowcaseCarousel } from "@/components/ShowcaseCarousel";
import { animateLegacySection, animateFooter, animateShowcaseSection } from "@/utils/sectionAnimations";

const img = { logo: "https://royal-swiss-city-30.vercel.app/logo.png", hero: "/city-aerial.jpg", city: "/city-aerial.jpg", developer: "/hrl-highrise.jpg", green: "/green-energy.jpg", chairman: "/chairman.png", ceo: "/ceo.png", partnership: "/hand_shaking.jpg", residences: "/hrl-roads.jpg", aerial: "/city-aerial.jpg" };
const nav = ["HOME", "THE CITY", "DEVELOPER", "LOCATION", "FAQ", "PARTNER", "DEALER", "ENQUIRE"];
const navMobile = ["HOME", "THE CITY", "DEVELOPER", "PROJECTS", "LOCATION", "FAQ", "PARTNER", "DEALER", "ENQUIRE"];
const footerLinks = ["Residential Plots", "Commercial Plots", "The City", "Developer", "Location", "FAQ", "Partner", "Enquire"];
const footerDescriptions = {
  "Residential Plots": "Discover a range of residential plot sizes to suit your needs. Choose from MARLA 3.5, MARLA 5, MARLA 10, KANAL 1, and KANAL 2 options designed for modern living.",
  "Commercial Plots": "Explore commercial plot opportunities perfect for your business. Available in MARLA 2, MARLA 4, and MARLA 8 to accommodate various commercial ventures.",
  "The City": "Discover a considered way to experience the city at Royal Swiss City.",
  "Developer": "Discover a considered way to experience developer at Royal Swiss City.",
  "Location": "Discover a considered way to experience location at Royal Swiss City.",
  "FAQ": "Discover a considered way to experience faq at Royal Swiss City.",
  "Partner": "Discover a considered way to experience partner at Royal Swiss City.",
  "Enquire": "Discover a considered way to experience enquire at Royal Swiss City."
};
const communityCards = [
  { eyebrow: "BUILDINGS", title: "Convention Center Islamabad", body: "An EPC contract completed in record 11 months with 2,000 seats capacity and 18,000 m² area featuring advanced audio-visual facilities.", image: "/convention-centre-islamabad.webp" },
  { eyebrow: "BUILDINGS", title: "Bahria Icon Tower", body: "A 60-storey mixed-use development in Karachi with 30 residential floors and titanium glass façade.", image: "/bahria-icon-tower-karachi.webp" },
  { eyebrow: "INFRASTRUCTURE", title: "Lahore Ring Road Package 3", body: "Major infrastructure upgrade featuring extensive earthwork and complete electrification works.", image: "/lahore-ring-road-package-3-wide.webp" },
  { eyebrow: "BUILDINGS", title: "101 Tower Lahore", body: "A premium high-rise building combining residential and commercial spaces with modern architectural design and comprehensive MEP services.", image: "/101-tower-lahore.webp" },
  { eyebrow: "BUILDINGS", title: "Grand Jamia Mosque", body: "Majestic mosque with 70,000 person capacity including open compound, four 165-ft minarets, and 20 surrounding domes.", image: "/grand-jamia-mosque-bahria-town-lahore.webp" },
];
const features = ["Gated Community", "Solar Infrastructure", "Riverfront Setting", "Wide Boulevards", "Education & Healthcare", "Retail & Services", "Sports & Recreation", "Water Management"];
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
const dealersData = [
  { name: "Aurelia Estates International", type: "Sales Partner", location: "Gulberg III, Lahore", description: "Virtual Reality Private Tours & AI Valuations: Specializes in high-net-worth foreign buyers and overseas Pakistanis by offering live, guided 8K VR walkthroughs and algorithmic yield predictions for early-stage off-plan investments.", logo: "/Aurelia Estates International.svg" },
  { name: "Vanguard Capital Real Estate", type: "Sales Partner", location: "DHA Phase 6, Lahore", description: "Bespoke Portfolio Structuring: Focuses on institutional investors and commercial buyers, providing customized land-swap models and automated quarterly dividend tracking for high-density plots.", logo: "/Vanguard Capital Real Estate.svg" },
  { name: "Mirage Luxury Partners", type: "Sales Partner", location: "E-11, Islamabad", description: "Concierge Interior & Architectural Customization: Partners directly with European interior designers, allowing residential buyers to select turnkey architectural customization packages right at the point of plot purchase.", logo: "/Mirage Luxury Partners.svg" },
  { name: "Partner Name 4", type: "Sales Partner", location: "Multan, Pakistan", description: "Authorized dealer offering comprehensive property solutions and investment opportunities." },
  { name: "Partner Name 5", type: "Sales Partner", location: "Faisalabad, Pakistan", description: "Dedicated real estate professional with in-depth knowledge of Royal Swiss City developments." },
  { name: "Partner Name 6", type: "Sales Partner", location: "Peshawar, Pakistan", description: "Trusted property advisor serving clients in Northern Pakistan with premium properties." },
  { name: "Partner Name 7", type: "Sales Partner", location: "Rawalpindi, Pakistan", description: "Authorized sales partner committed to excellence in property consultation and support." },
  { name: "Partner Name 8", type: "Sales Partner", location: "Sialkot, Pakistan", description: "Professional dealer offering tailored solutions for residential and commercial investments." },
  { name: "Partner Name 9", type: "Sales Partner", location: "Gujranwala, Pakistan", description: "Experienced property consultant dedicated to client satisfaction and market expertise." },
  { name: "Partner Name 10", type: "Sales Partner", location: "Hyderabad, Pakistan", description: "Trusted partner providing comprehensive property guidance and investment support." },
  { name: "Partner Name 11", type: "Sales Partner", location: "Quetta, Pakistan", description: "Authorized dealer serving clients with professional property advisory services." },
  { name: "Partner Name 12", type: "Sales Partner", location: "Sukkur, Pakistan", description: "Dedicated real estate professional with commitment to client success and satisfaction." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const [scrollY, setScrollY] = useState(0); const [openFooter, setOpenFooter] = useState<string | null>(null); const [dealersSlideIndex, setDealersSlideIndex] = useState(0); const [selectedDealer, setSelectedDealer] = useState<any>(null);
  useEffect(() => { let f = 0; const fn = () => { cancelAnimationFrame(f); f = requestAnimationFrame(() => { setScrollY(window.scrollY); setScrolled(window.scrollY > 28) }) }; fn(); window.addEventListener("scroll", fn, { passive: true }); return () => { cancelAnimationFrame(f); window.removeEventListener("scroll", fn) } }, []);
  useEffect(() => { const o = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: .12, rootMargin: "0px 0px -70% 0px" }); document.querySelectorAll(".reveal-section,.reveal-item").forEach(n => o.observe(n)); return () => o.disconnect() }, []);
  useEffect(() => {
    const legacyElement = document.querySelector(".legacy-section");
    const footerElement = document.querySelector(".walk-footer.reveal-section");
    const showcaseElement = document.querySelector(".showcase-section");

    if (legacyElement) animateLegacySection(legacyElement);
    if (footerElement) animateFooter(footerElement);
    if (showcaseElement) animateShowcaseSection(showcaseElement);
  }, []);
  const vh = typeof window !== "undefined" ? window.innerHeight : 800; const heroProgress = Math.min(scrollY / Math.max(vh, 800), 1);
  return <main className="walkthrough-page home-page" style={{ "--hero-progress": heroProgress } as React.CSSProperties}>
    <header className={`walk-header ${scrolled ? "is-scrolled" : ""}`}><button className="mobile-menu-trigger" aria-label="Menu" onClick={() => setMenuOpen(true)}><Menu size={22} strokeWidth={1.4} /></button><nav className="desktop-links desktop-links--left">{nav.slice(0, 3).map(item => <Anchor key={item} item={item} />)}</nav><a className="centered-brand" href="#home"><Logo /></a><nav className="desktop-links desktop-links--right">{nav.slice(3).map(item => <Anchor key={item} item={item} />)}</nav></header>
    <HeroCapsuleAnimation />

    <section id="location" className="showcase-section reveal-section"><div className="showcase-heading"><p className="section-kicker">THE LEGACY</p><h2><span className="showcase-number">60+</span> <br /> Years of Legacy<br /><em>Crafted by experience.</em></h2><p>Behind Royal Swiss City is a legacy built over six decades. Habib Rafiq and RKS bring the discipline of engineering, infrastructure, and delivery to a new kind of residential address. That experience is felt in the decisions that matter: the scale of the roads, the care in the utilities, the clarity of the masterplan, and the confidence that comes from building for the long term.</p></div><ShowcaseCarousel cards={communityCards} /><div style={{ textAlign: "center" }}><a href="/projects" style={{ background: "#c4b08a", color: "#111", border: "none", padding: "12px 28px", borderRadius: "999px", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontWeight: 500, transition: "all 0.3s ease", marginTop: "32px", marginBottom: "24px" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>VIEW ALL PROJECTS</a></div></section>

    <section className="legacy-quotes-section reveal-section">
      {/* Section Header */}
      <div className="legacy-section-header">
        <div className="header-title">
          
          <h2>LEADERSHIP & LEGACY</h2>
        </div>
        <p className="header-subtitle">TWO GENERATIONS. ONE ENDURING VISION.</p>
        <div className="header-divider">
          <span></span>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
            <circle cx="4" cy="4" r="4"/>
          </svg>
          <span></span>
        </div>
      </div>

      {/* Leadership Cards */}
      <div className="legacy-quotes">
        {/* Chairman Card */}
        <article className="legacy-card legacy-card--chairman reveal-item">
          <div className="legacy-card__image-wrapper">
            <img src={img.chairman} alt="Shahid Rafiq" />
            <div className="legacy-card__image-label">
              <span>YEARS OF TRUST, QUALITY & EXCELLENCE</span>
            </div>
          </div>
          <div className="legacy-card__divider"></div>
          <div className="legacy-card__content">
            <small>CHAIRMAN</small>
            <h3>THE LEGACY THAT SHAPED OUR JOURNEY</h3>
            <div className="legacy-card__decoration">
              <span></span>
              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                <circle cx="3" cy="3" r="3"/>
              </svg>
              <span></span>
            </div>
            <div className="legacy-card__quote-section">
              <div className="legacy-card__quote-mark">"</div>
              <p className="legacy-quote">Building on this legacy, we now bring the same expertise to modern housing.</p>
            </div>
            <p className="legacy-card__body">For over six decades, Habib Rafiq (Pvt) Ltd has transformed vision into reality through innovation, quality, and dedication. Renowned for delivering excellence across industrial, infrastructure, power, oil & gas, aviation, and high-rise projects, we have consistently exceeded client expectations. Building on this legacy, we now bring the same expertise to modern housing society — designed with world-class infrastructure, sustainable planning, and premium amenities, reflecting our commitment to exceptional living spaces and lasting value for generations to come.</p>
            <div className="legacy-card__signature">
              <p><strong>Shahid Rafiq</strong></p>
              <p>CHAIRMAN, HABIB RAFIQ (PVT.) LTD.</p>
            </div>
            <div className="legacy-card__watermark">HRL</div>
          </div>
        </article>

        {/* CEO Card */}
        <article className="legacy-card legacy-card--ceo reveal-item">
          <div className="legacy-card__image-wrapper legacy-card__image-wrapper--right">
            <img src={img.ceo} alt="Sohaib Hassan" />
            <div className="legacy-card__image-label legacy-card__image-label--ceo">
              <span>A VISION FOR TODAY. A PROMISE FOR TOMORROW.</span>
            </div>
          </div>
          <div className="legacy-card__divider legacy-card__divider--right"></div>
          <div className="legacy-card__content legacy-card__content--left">
            <small>CHIEF EXECUTIVE</small>
            <h3>THE VISION THAT SHAPES OUR FUTURE</h3>
            <div className="legacy-card__decoration">
              <span></span>
              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                <circle cx="3" cy="3" r="3"/>
              </svg>
              <span></span>
            </div>
            <div className="legacy-card__quote-section">
              <div className="legacy-card__quote-mark">"</div>
              <p className="legacy-quote">We are creating spaces where future generations can thrive.</p>
            </div>
            <p className="legacy-card__body">It is a privilege to carry forward the legacy of Habib Rafiq Engineering (Pvt) Ltd. For over six decades, we set benchmarks in engineering excellence before expanding into real estate — making quality developments our trademark. Today, we develop well-planned, sustainable communities combining modern infrastructure with affordable living through Royal Swiss City. We remain committed to creating developments that enhance lifestyles and deliver lasting value for homeowners, investors, and future generations.</p>
            <div className="legacy-card__signature">
              <p><strong>Sohaib Hassan</strong></p>
              <p>CHIEF EXECUTIVE</p>
            </div>
          </div>
        </article>
      </div>

      {/* Timeline Section */}
      <div className="legacy-timeline">
        <div className="timeline-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeWidth="1.5"/>
            <polyline points="9 22 9 12 15 12 15 22" strokeWidth="1.5"/>
          </svg>
          <p><strong>60+ YEARS OF LEGACY</strong></p>
        </div>
        <div className="timeline-connector"></div>
        <div className="timeline-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 21h18M3 7v13M21 7v13M5 3h14v4H5z" strokeWidth="1.5"/>
            <line x1="9" y1="11" x2="9" y2="17" strokeWidth="1.5"/>
            <line x1="13" y1="11" x2="13" y2="17" strokeWidth="1.5"/>
            <line x1="17" y1="11" x2="17" y2="17" strokeWidth="1.5"/>
          </svg>
          <p><strong>A FUTURE BUILT TO LAST</strong></p>
        </div>
      </div>

      <div style={{ textAlign: "center" }}><a href="/developer" style={{ background: "#c4b08a", color: "#111", border: "none", padding: "12px 28px", borderRadius: "999px", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontWeight: 500, transition: "all 0.3s ease", marginTop: "48px", marginBottom: "0px" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>LEARN MORE ABOUT HRL</a></div>
    </section>

    <section className="future-section reveal-section"><div style={{ display: "flex", flexDirection: "row", gap: "6vw", alignItems: "center", maxWidth: "100%", overflow: "hidden" }}><img src={img.green} alt="Green Energy" style={{ flex: "0 0 35%", minWidth: 0, objectFit: "cover", width: "100%", height: "400px" }} /><div style={{ flex: 1, minWidth: 0 }}><p className="section-kicker">THE FUTURE</p><h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(45px, 6vw, 85px)", fontWeight: 300, lineHeight: 0.84, marginBottom: "20px", color: "#111" }}>Built around<br /><em>sustainable living.</em></h2><p style={{ fontSize: "14px", lineHeight: 1.75, color: "#6b645c", maxWidth: "430px" }}>Royal Swiss City is designed with environmental responsibility at its core. From solar infrastructure to water management systems, every element reflects our commitment to creating a sustainable community for generations to come.</p></div></div>
    
    {/* Sustainability Icons */}
    <div className="sustainability-icons-grid" style={{ display: "grid", gridTemplateColumns: window.innerWidth <= 370 ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: window.innerWidth <= 370 ? "12px" : "30px", marginTop: "60px", marginBottom: "60px", textAlign: "center", padding: window.innerWidth <= 370 ? "0 12px" : "0" }}>
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "60px", height: "60px", borderRadius: "50%", border: "1.5px solid #c7b162ff", marginBottom: "12px" }}>
          <Leaf size={28} color="#c7b162ff" strokeWidth={1.5} />
        </div>
        <h3 style={{ fontSize: "11px", fontWeight: 600, color: "#111", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>GREEN SPACES</h3>
        <p style={{ fontSize: "10px", color: "#6b645c", margin: "0", lineHeight: 1.4 }}>For a healthier life</p>
      </div>
      
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "60px", height: "60px", borderRadius: "50%", border: "1.5px solid #c7b162ff", marginBottom: "12px" }}>
          <Droplets size={28} color="#c7b162ff" strokeWidth={1.5} />
        </div>
        <h3 style={{ fontSize: "11px", fontWeight: 600, color: "#111", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>WATER SENSITIVE</h3>
        <p style={{ fontSize: "10px", color: "#6b645c", margin: "0", lineHeight: 1.4 }}>Sustainable systems</p>
      </div>
      
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "60px", height: "60px", borderRadius: "50%", border: "1.5px solid #c7b162ff", marginBottom: "12px" }}>
          <Recycle size={28} color="#c7b162ff" strokeWidth={1.5} />
        </div>
        <h3 style={{ fontSize: "11px", fontWeight: 600, color: "#111", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>CLEAN ENERGY</h3>
        <p style={{ fontSize: "10px", color: "#6b645c", margin: "0", lineHeight: 1.4 }}>For a better future</p>
      </div>
      
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "60px", height: "60px", borderRadius: "50%", border: "1.5px solid #c7b162ff", marginBottom: "12px" }}>
          <Users size={28} color="#c7b162ff" strokeWidth={1.5} />
        </div>
        <h3 style={{ fontSize: "11px", fontWeight: 600, color: "#111", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>COMMUNITY FIRST</h3>
        <p style={{ fontSize: "10px", color: "#6b645c", margin: "0", lineHeight: 1.4 }}>Stronger together</p>
      </div>
    </div>
    </section>

    <section style={{ background: "linear-gradient(135deg, #fae3bb 0%, #c9bfb3 50%, #d6d0c6 100%)", padding: "60px 0 80px 0" }}>
    <div style={{ maxWidth: "100%", margin: "0 auto", paddingLeft: "8vw", paddingRight: "8vw" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c4b08a", margin: "0 0 12px 0", fontWeight: 500 }}>THE OPPORTUNITY</p>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontFamily: "var(--serif)", fontWeight: 300, color: "#111", margin: "0", lineHeight: 1.2 }}>YOUR PLACE IN<br />WHAT COMES NEXT</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: window.innerWidth <= 370 ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: window.innerWidth <= 370 ? "8px" : "12px", marginBottom: "40px", overflowX: window.innerWidth <= 370 ? "auto" : undefined, padding: window.innerWidth <= 370 ? "0 8px" : "0", margin: window.innerWidth <= 370 ? "0 -8px 40px -8px" : "0" }} className="mobile-plot-options"><div style={{ background: "#fff", padding: "18px 12px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 8px" }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg><p style={{ fontSize: "8px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#999", margin: "0 0 6px 0" }}>RESIDENTIAL</p><h3 style={{ fontSize: "12px", fontWeight: 400, color: "#111", margin: "0" }}>MARLA 3.5</h3></div><div style={{ background: "#fff", padding: "18px 12px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 8px" }}><path d="M3 10l1.05-3.15a1 1 0 0 1 .95-.85h14a1 1 0 0 1 .95.85L21 10M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9M9 14h1M14 14h1M9 18h1M14 18h1" /></svg><p style={{ fontSize: "8px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#999", margin: "0 0 6px 0" }}>RESIDENTIAL</p><h3 style={{ fontSize: "12px", fontWeight: 400, color: "#111", margin: "0" }}>MARLA 5</h3></div><div style={{ background: "#fff", padding: "18px 12px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 8px" }}><path d="M3 21h18M3 7v13M21 7v13M5 3h14v4H5z" /><line x1="9" y1="11" x2="9" y2="17" /><line x1="13" y1="11" x2="13" y2="17" /><line x1="17" y1="11" x2="17" y2="17" /></svg><p style={{ fontSize: "8px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#999", margin: "0 0 6px 0" }}>COMMERCIAL</p><h3 style={{ fontSize: "12px", fontWeight: 400, color: "#111", margin: "0" }}>MARLA 2</h3></div><div style={{ background: "#fff", padding: "18px 12px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 8px" }}><path d="M3 21h18M3 7v13M21 7v13M5 3h14v4H5z" /><line x1="7" y1="11" x2="7" y2="17" /><line x1="11" y1="11" x2="11" y2="17" /><line x1="15" y1="11" x2="15" y2="17" /><line x1="19" y1="11" x2="19" y2="17" /></svg><p style={{ fontSize: "8px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#999", margin: "0 0 6px 0" }}>COMMERCIAL</p><h3 style={{ fontSize: "12px", fontWeight: 400, color: "#111", margin: "0" }}>MARLA 4</h3></div></div><div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "40px" }} className="desktop-plot-options"><div style={{ background: "#fff", padding: "25px 15px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 12px" }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg><p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", margin: "0 0 8px 0" }}>RESIDENTIAL</p><h3 style={{ fontSize: "16px", fontWeight: 400, color: "#111", margin: "0" }}>MARLA 3.5</h3></div><div style={{ background: "#fff", padding: "25px 15px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 12px" }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg><p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", margin: "0 0 8px 0" }}>RESIDENTIAL</p><h3 style={{ fontSize: "16px", fontWeight: 400, color: "#111", margin: "0" }}>MARLA 5</h3></div><div style={{ background: "#fff", padding: "25px 15px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 12px" }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg><p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", margin: "0 0 8px 0" }}>RESIDENTIAL</p><h3 style={{ fontSize: "16px", fontWeight: 400, color: "#111", margin: "0" }}>MARLA 10</h3></div><div style={{ background: "#fff", padding: "25px 15px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 12px" }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg><p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", margin: "0 0 8px 0" }}>RESIDENTIAL</p><h3 style={{ fontSize: "16px", fontWeight: 400, color: "#111", margin: "0" }}>KANAL 1</h3></div><div style={{ background: "#fff", padding: "25px 15px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 12px" }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg><p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", margin: "0 0 8px 0" }}>RESIDENTIAL</p><h3 style={{ fontSize: "16px", fontWeight: 400, color: "#111", margin: "0" }}>KANAL 2</h3></div><div style={{ background: "#fff", padding: "25px 15px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 12px" }}><path d="M3 21h18M3 7v13M21 7v13M5 3h14v4H5z" /><line x1="9" y1="11" x2="9" y2="17" /><line x1="13" y1="11" x2="13" y2="17" /><line x1="17" y1="11" x2="17" y2="17" /></svg><p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", margin: "0 0 8px 0" }}>COMMERCIAL</p><h3 style={{ fontSize: "16px", fontWeight: 400, color: "#111", margin: "0" }}>MARLA 2</h3></div><div style={{ background: "#fff", padding: "25px 15px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 12px" }}><path d="M3 21h18M3 7v13M21 7v13M5 3h14v4H5z" /><line x1="9" y1="11" x2="9" y2="17" /><line x1="13" y1="11" x2="13" y2="17" /><line x1="17" y1="11" x2="17" y2="17" /></svg><p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", margin: "0 0 8px 0" }}>COMMERCIAL</p><h3 style={{ fontSize: "16px", fontWeight: 400, color: "#111", margin: "0" }}>MARLA 4</h3></div><div style={{ background: "#fff", padding: "25px 15px", textAlign: "center", borderRadius: "8px", border: "1px solid #e0d9d1" }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 12px" }}><path d="M3 21h18M3 7v13M21 7v13M5 3h14v4H5z" /><line x1="9" y1="11" x2="9" y2="17" /><line x1="13" y1="11" x2="13" y2="17" /><line x1="17" y1="11" x2="17" y2="17" /></svg><p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", margin: "0 0 8px 0" }}>COMMERCIAL</p><h3 style={{ fontSize: "16px", fontWeight: 400, color: "#111", margin: "0" }}>MARLA 8</h3></div></div><div style={{ textAlign: "center" }}><a href="/enquire" style={{ background: "#c4b08a", color: "#111", border: "none", padding: "12px 28px", borderRadius: "999px", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontWeight: 500, transition: "all 0.3s ease" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>EXPLORE ALL OPTIONS</a></div>
    </div>
    </section>

    <section id="partner" className="partner-strip"><img src={img.partnership} alt="Royal Swiss City partnership network" /><div><p className="section-kicker">PARTNERSHIP</p><h2>PARTNER WITH US<br /></h2><p>Join the Royal Swiss City partner network and help your clients find a place they'll be proud to call home. We'll give you the tools, support, and information you need to guide them with confidence.</p><a className="outline-cta" href="#enquire" style={{ transition: "all 0.3s ease" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>APPLY FOR PARTNERSHIP</a><div style={{ marginTop: "60px" }}><h3 style={{ fontSize: "16px", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "30px", color: "#111" }}>AUTHORIZED DEALERS & SALES PARTNERS</h3><div style={{ display: "flex", gap: "20px", opacity: 1, transform: "translateY(0)", transition: "opacity 0.4s ease, transform 0.4s ease" }} className="dealers-carousel"><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", width: "100%" }} className="dealers-slide-desktop">{dealersData.slice(dealersSlideIndex, dealersSlideIndex + 4).map((dealer, i) => <div key={i} onClick={() => setSelectedDealer(dealer)} style={{ background: "#fff", padding: "20px", borderRadius: "8px", border: "1px solid #e0d9d1", textAlign: "center", cursor: "pointer", transition: "all 0.3s ease", position: "relative" }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}><div style={{ width: "60px", height: "60px", background: "#f1f1f1", borderRadius: "8px", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>{dealer.logo ? <img src={dealer.logo} alt={dealer.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} /> : <span style={{ fontSize: "12px", color: "#999" }}>Logo</span>}</div><p style={{ fontSize: "12px", fontWeight: 500, color: "#111", margin: "0 0 6px 0" }}>{dealer.name}</p><p style={{ fontSize: "10px", color: "#999", margin: "0 0 12px 0" }}>{dealer.type}</p><p style={{ fontSize: "8px", color: "#c4b08a", margin: "0", fontStyle: "italic" }}>TAP FOR MORE DETAILS</p></div>)}</div><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px", width: "100%" }} className="dealers-slide-mobile">{dealersData.slice(dealersSlideIndex, dealersSlideIndex + 2).map((dealer, i) => <div key={i} onClick={() => setSelectedDealer(dealer)} style={{ background: "#fff", padding: "16px", borderRadius: "8px", border: "1px solid #e0d9d1", textAlign: "center", cursor: "pointer", transition: "all 0.3s ease" }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}><div style={{ width: "50px", height: "50px", background: "#f1f1f1", borderRadius: "8px", margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>{dealer.logo ? <img src={dealer.logo} alt={dealer.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} /> : <span style={{ fontSize: "10px", color: "#999" }}>Logo</span>}</div><p style={{ fontSize: "10px", fontWeight: 500, color: "#111", margin: "0 0 4px 0" }}>{dealer.name}</p><p style={{ fontSize: "8px", color: "#999", margin: "0 0 8px 0" }}>{dealer.type}</p><p style={{ fontSize: "7px", color: "#c4b08a", margin: "0", fontStyle: "italic" }}>TAP FOR MORE</p></div>)}</div></div><div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "30px" }}><button onClick={() => setDealersSlideIndex(Math.max(0, dealersSlideIndex - (window.innerWidth <= 768 ? 2 : 4)))} style={{ background: "none", color: "#111", border: "1px solid #111", padding: "10px 20px", borderRadius: "999px", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s ease", fontWeight: 500 }} onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#111"; (e.target as HTMLElement).style.color = "#fff"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "none"; (e.target as HTMLElement).style.color = "#111"; }}>← PREV</button><button onClick={() => setDealersSlideIndex(Math.min(dealersData.length - (window.innerWidth <= 768 ? 2 : 4), dealersSlideIndex + (window.innerWidth <= 768 ? 2 : 4)))} style={{ background: "none", color: "#111", border: "1px solid #111", padding: "10px 20px", borderRadius: "999px", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s ease", fontWeight: 500 }} onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#111"; (e.target as HTMLElement).style.color = "#fff"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "none"; (e.target as HTMLElement).style.color = "#111"; }}>NEXT →</button></div><div style={{ textAlign: "center", marginTop: "20px" }}><a href="/partner" style={{ background: "none", color: "#111", border: "1px solid #111", padding: "12px 28px", borderRadius: "999px", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontWeight: 500, transition: "all 0.3s ease" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#111"; (e.target as HTMLElement).style.color = "#fff"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "none"; (e.target as HTMLElement).style.color = "#111"; }}>LOCATE A DEALER NEAR YOU</a></div></div></div></section>
    <footer className="walk-footer reveal-section"><div className="footer-accordions">{footerLinks.map(item => {
      let learnMoreLink = "";
      if (item === "Residential Plots") learnMoreLink = "#residential";
      else if (item === "Commercial Plots") learnMoreLink = "#commercial";
      else if (item === "The City") learnMoreLink = "/#the-city";
      else if (item === "Developer") learnMoreLink = "/developer";
      else if (item === "Location") learnMoreLink = "/#location";
      else if (item === "FAQ") learnMoreLink = "/#faq";
      else if (item === "Partner") learnMoreLink = "/#partner";
      else if (item === "Enquire") learnMoreLink = "/enquire";
      
      return <div className={openFooter === item ? "open" : ""} key={item}><button onClick={() => setOpenFooter(openFooter === item ? null : item)}>{item}<ChevronDown size={14} /></button>{openFooter === item && <div><p style={{ whiteSpace: "pre-line" }}>{footerDescriptions[item as keyof typeof footerDescriptions]}</p>{learnMoreLink && <a href={learnMoreLink} style={{ display: "inline-block", marginTop: "12px", color: "#c4b08a", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", fontWeight: 500, transition: "all 0.3s ease" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>LEARN MORE →</a>}</div>}</div>
    })}</div><div className="footer-socials"><a href="https://instagram.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Instagram"><Instagram size={24} /></a><a href="https://facebook.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Facebook"><Facebook size={24} /></a><a href="https://tiktok.com/@royalswisscity" target="_blank" rel="noopener noreferrer" title="TikTok"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.34 0 .67.05.98.15V9.41a5.81 5.81 0 0 0-.98-.08 6.04 6.04 0 0 0-6.04 6.04 6.04 6.04 0 0 0 6.04 6.04 6.04 6.04 0 0 0 6.04-6.04v-3.1a7.7 7.7 0 0 0 3.77 1.01V9.81a4.77 4.77 0 0 1-.77-.06z" /></svg></a><a href="https://linkedin.com/company/royalswisscity" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={24} /></a><a href="https://youtube.com/@royalswisscity" target="_blank" rel="noopener noreferrer" title="YouTube"><Youtube size={24} /></a><a href="https://x.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="X"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.694-5.867 6.694h-3.306l7.733-8.835L2.25 2.25h6.814l4.882 6.45L18.244 2.25zM17.083 18.386h1.83L6.959 4.155H5.049l12.034 14.231z" /></svg></a></div><div className="footer-contact"><b>Where life happens.</b><span>© 2026 ROYAL SWISS CITY · PRIVACY POLICY · SITEMAP</span></div></footer>

    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}><div className="mobile-menu__top"><button onClick={() => setMenuOpen(false)} aria-label="Close"><ChevronDown size={22} /></button><button onClick={() => setMenuOpen(false)} aria-label="Close"><X size={22} /></button></div><div className="mobile-menu__links">{navMobile.map(item => { const href = item === "DEVELOPER" ? "/developer" : item === "PROJECTS" ? "/projects" : item === "HOME" ? "/" : `#${item.toLowerCase().replaceAll(" ", "-")}`; return <a href={href} onClick={() => setMenuOpen(false)} key={item}>{item}</a> })}</div></div>

    {selectedDealer && (
      <div className="dealer-modal-overlay" onClick={() => setSelectedDealer(null)}>
        <div className="dealer-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setSelectedDealer(null)}><X size={24} /></button>
          <div className="modal-content">
            <div style={{ width: "100px", height: "100px", background: "#f1f1f1", borderRadius: "12px", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>{selectedDealer.logo ? <img src={selectedDealer.logo} alt={selectedDealer.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} /> : <span style={{ fontSize: "14px", color: "#999" }}>Logo</span>}</div>
            <h2>{selectedDealer.name}</h2>
            <p className="modal-type">{selectedDealer.type}</p>
            <p className="modal-location">{selectedDealer.location}</p>
            <p className="modal-description">{selectedDealer.description}</p>
            <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexDirection: "column" }}>
              <a href="tel:+9242111777588" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#c4b08a", fontSize: "12px", textDecoration: "none", fontWeight: 500, transition: "all 0.3s ease" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>042 111 777 588</a>
              <a href="mailto:royalswisscity@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#c4b08a", fontSize: "12px", textDecoration: "none", fontWeight: 500, transition: "all 0.3s ease" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>royalswisscity@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    )}
  </main>
}
