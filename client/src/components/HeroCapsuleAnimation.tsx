import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const img = { hero: "/city-aerial.jpg" };

// Preload image
const preloadImage = (src: string) => {
  const image = new Image();
  image.src = src;
};

export function HeroCapsuleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload the image immediately
    preloadImage("/where-life-unfolds.jpg");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-capsule-stage",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: ".hero-capsule-pin",
        anticipatePin: 1,
      },
    });

    if (!isMobile) {
      // DESKTOP ANIMATION
      tl.to(".art-capsule-desktop", {
        bottom: "10vh",
        duration: 1,
      });

      tl.to(
        ".art-capsule-desktop",
        {
          width: "76vw",
          height: "38vh",
          bottom: "8vh",
          duration: 1,
        },
        0
      );

      tl.to(
        ".art-content-desktop h2",
        {
          fontSize: "1.8rem",
          duration: 1,
        },
        0
      );

      tl.to(
        ".art-content-desktop p",
        {
          fontSize: "0.8rem",
          opacity: 1,
          duration: 1,
        },
        0
      );

      tl.to(".art-capsule-desktop", {
        width: "100vw",
        height: "100vh",
        bottom: "0vh",
        borderRadius: "0px",
        duration: 1.5,
        ease: "power2.inOut",
      });

      tl.to(
        ".art-content-desktop h2",
        {
          fontSize: "4rem",
          duration: 1.5,
        },
        "-=1.5"
      );

      tl.to(
        ".art-content-desktop p",
        {
          fontSize: "1rem",
          duration: 1.5,
        },
        "-=1.5"
      );

      tl.to(
        ".art-content-desktop",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.35"
      );
    } else {
      // MOBILE ANIMATION (ULTRA SMOOTH)
      tl.to(".art-capsule-mobile", {
        bottom: "0vh",
        duration: 2,
        ease: "none",
      });

      tl.to(".art-capsule-mobile", {
        width: "88vw",
        height: "75vh",
        bottom: "5vh",
        borderRadius: "200px 200px 0px 0px",
        duration: 1.8,
        ease: "none",
      });

      tl.to(".art-capsule-mobile", {
        width: "95vw",
        height: "85vh",
        bottom: "8vh",
        borderRadius: "200px 200px 0px 0px",
        duration: 1.6,
        ease: "none",
      });

      tl.to(".art-capsule-mobile", {
        width: "100vw",
        height: "100vh",
        bottom: "0vh",
        borderRadius: "0px",
        duration: 1.9,
        ease: "none",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-capsule-stage"
      style={{
        height: "320vh",
        position: "relative",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .art-capsule-desktop {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .art-capsule-mobile {
            display: none !important;
          }
        }
      `}</style>
      {/* PRELOAD IMAGE - Render immediately but hide off-screen */}
      

      <div
        className="hero-capsule-pin"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* HERO BACKGROUND - The main hero section */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/EJ8V7zrPcM0?autoplay=1&mute=1&loop=1&playlist=EJ8V7zrPcM0&controls=0&modestbranding=1&rel=0"
            title="Royal Swiss City"
            style={{
              position: "absolute",
              inset: 0,
              border: "none",
            }}
            allow="autoplay; fullscreen"
            frameBorder="0"
          />
          <div
            className="hero-shade"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.65))",
            }}
          />
          <div
            className="hero-copy"
            style={{
              position: "absolute",
              zIndex: 2,
              color: "white",
              textAlign: "center",
              padding: "30px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "90vw",
            }}
          >
            <p
              className="hero-kicker"
              style={{
                fontSize: "clamp(9px, 2vw, 11px)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
                whiteSpace: window.matchMedia("(max-width: 768px)").matches ? "normal" : "nowrap",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              RAVI RIVERFRONT · LAHORE · PAKISTAN
            </p>
            <h1
              style={{
                fontSize: window.matchMedia("(max-width: 768px)").matches ? "clamp(4rem, 12vw, 10rem)" : "clamp(3rem, 8vw, 8rem)",
                fontWeight: 400,
                letterSpacing: "-0.06em",
                lineHeight: 1.1,
                marginBottom: "20px",
                textAlign: "center",
                fontStyle: "normal",
              }}
            >
              ROYAL SWISS CITY
            </h1>
            <p
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                opacity: 0.82,
                marginBottom: "30px",
                display: window.matchMedia("(max-width: 768px)").matches ? "none" : "block",
              }}
            >
              A riverfront community designed for the life ahead.
              <br />
              A new address with space to unfold.
            </p>
            <a
              href="#the-city"
              style={{
                display: "inline-block",
                padding: "12px 28px",
                border: "1px solid rgba(255,255,255,0.7)",
                borderRadius: "999px",
                color: "white",
                textDecoration: "none",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                background: window.matchMedia("(max-width: 768px)").matches ? "#000" : "transparent",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.opacity = "0.7";
                (e.target as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.opacity = "1";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              DISCOVER THE CITY
            </a>
          </div>
          <div
            className="hero-scroll"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "35px",
              transform: "translateX(-50%)",
              color: "white",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </div>
        </div>

        {/* DESKTOP VERSION */}
        <div
          className="art-capsule art-capsule-desktop"
          style={{
            position: "absolute",
            zIndex: 20,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "hidden",
            willChange: "width, height, bottom, border-radius",
            display: "block",
            bottom: "-18vh",
            width: "30vw",
            height: "18vh",
            borderRadius: "999px",
            background: "white",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <div
            className="art-content-desktop"
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr",
              gap: "0",
              color: "#111",
            }}
          >
            {/* TEXT ON LEFT - Always rendered */}
            <div
              className="art-content-fullscreen-text"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "60px 40px",
                color: "#111",
                opacity: 1,
                transition: "opacity 0.3s ease",
                gridColumn: 1,
                gridRow: 1,
                pointerEvents: "auto",
              }}
            >
              <div style={{ maxWidth: "400px" }}>
                <h2
                  style={{
                    fontSize: "4rem",
                    fontWeight: 400,
                    letterSpacing: "-0.06em",
                    marginBottom: "20px",
                    color: "#111",
                    lineHeight: 1.1,
                    fontFamily: "var(--serif)",
                  }}
                >
                  Where Life Unfolds
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "#333",
                    marginTop: "20px",
                  }}
                >
                  Royal Swiss City brings a different kind of presence to
                  Lahore's next horizon. Set within the Ravi Riverfront vision,
                  it pairs a secure, planned setting with generous landscapes,
                  carefully considered streets, and the everyday ease of a
                  complete community.
                </p>
                <a
                  href="#"
                  style={{
                    display: "inline-block",
                    marginTop: "32px",
                    padding: "15px 28px",
                    border: "2px solid #111",
                    borderRadius: "999px",
                    color: "#111",
                    textDecoration: "none",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    background: "transparent",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.opacity = "0.7";
                    (e.target as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.opacity = "1";
                    (e.target as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  Discover More
                </a>
              </div>
            </div>

            {/* IMAGE ON RIGHT - Always rendered and visible */}
            <div
              className="art-content-fullscreen-image"
              style={{
                overflow: "hidden",
                background: "#f0f0f0",
                opacity: 1,
                transition: "opacity 0.3s ease",
                gridColumn: 2,
                gridRow: 1,
              }}
            >
              <img
                src="/where-life-unfolds.jpg"
                alt="Where Life Unfolds"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div
          className="art-capsule art-capsule-mobile"
          style={{
            position: "absolute",
            zIndex: 20,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "hidden",
            willChange: "width, height, bottom, border-radius",
            display: "block",
            bottom: "-65vh",
            width: "85vw",
            height: "65vh",
            borderRadius: "200px 200px 0px 0px",
            background: "white",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <div
            className="art-content-mobile"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#111",
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            <div
              className="art-content-inner"
              style={{
                width: "100%",
                padding: "34px 22px",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(2.2rem, 10vw, 4rem)",
                  marginBottom: "14px",
                  color: "#111",
                  letterSpacing: "-0.04em",
                  fontFamily: "var(--serif)",
                  fontWeight: 300,
                }}
              >
                Where Life Unfolds
              </h2>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.65,
                  maxWidth: "100%",
                  color: "#333",
                }}
              >
                Royal Swiss City brings a different kind of presence to
                Lahore's next horizon. Set within the Ravi Riverfront vision,
                it pairs a secure, planned setting with generous landscapes,
                carefully considered streets, and the everyday ease of a
                complete community.
              </p>
              <a
                className="discover"
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: "22px",
                  padding: "12px 22px",
                  border: "2px solid #111",
                  borderRadius: "999px",
                  color: "#111",
                  textDecoration: "none",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.opacity = "0.7";
                  (e.target as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.opacity = "1";
                  (e.target as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
