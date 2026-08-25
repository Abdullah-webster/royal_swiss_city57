import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";

export function ShowcaseCarousel({ cards }: { cards: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => setIsMobile(window.innerWidth <= 760);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    if (isMobile) {
      // Mobile: calculate based on 70vw width
      const cardWidth = window.innerWidth * 0.7;
      const gap = 14;
      const cardTotalWidth = cardWidth + gap;

      // Rotate to next card every 4 seconds
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, 4000);

      // Animate to the current card position
      gsap.to(container, {
        x: -(currentIndex * cardTotalWidth),
        duration: 0.8,
        ease: "power2.inOut",
      });

      return () => clearInterval(interval);
    } else {
      // Desktop: fixed 1000px cards (landscape, much bigger)
      const cardWidth = 1000;
      const gap = 25;
      const cardTotalWidth = cardWidth + gap;

      // Rotate to next card every 4 seconds
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, 4000);

      // Animate to the current card position
      gsap.to(container, {
        x: -(currentIndex * cardTotalWidth),
        duration: 0.8,
        ease: "power2.inOut",
      });

      return () => clearInterval(interval);
    }
  }, [currentIndex, cards.length, isMobile]);

  const containerMaxWidth = isMobile ? "70vw" : "1000px";

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        maxWidth: containerMaxWidth,
        position: "relative",
        margin: "0 auto",
      }}
    >
      <div
        ref={containerRef}
        className="showcase-rail"
        style={{
          display: "flex",
          gap: isMobile ? "14px" : "25px",
          willChange: "transform",
          width: "fit-content",
        }}
      >
        {cards.map((card, i) => (
          <article 
            className="showcase-card" 
            key={`${card.title}-${i}`}
          >
            <img src={card.image} alt={card.title} />
            <div>
              <span>0{(i % cards.length) + 1} / {cards.length}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <a href="#highlights">
                EXPLORE <ChevronRight size={13} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
