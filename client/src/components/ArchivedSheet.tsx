import { useEffect, useRef, useState } from "react";

export function ArchedSheet() {
  const [scrollY, setScrollY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(800);
  const [maxScrollReached, setMaxScrollReached] = useState(0);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroEl = document.getElementById("home");
    if (heroEl) {
      setHeroHeight(heroEl.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setMaxScrollReached(prev => Math.max(prev, window.scrollY));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const TRIGGER_START = heroHeight * 0.015; // 5% through hero (very early)
  const ANIMATION_END = heroHeight - 250;
  const ANIMATION_DURATION = ANIMATION_END - TRIGGER_START;

  // Only animate if we've reached the trigger point at some point
  const hasReachedTrigger = maxScrollReached >= TRIGGER_START;

  let animationProgress = 0;
  if (hasReachedTrigger && scrollY >= TRIGGER_START && scrollY < ANIMATION_END) {
    animationProgress = (scrollY - TRIGGER_START) / ANIMATION_DURATION;
  } else if (hasReachedTrigger && scrollY >= ANIMATION_END) {
    animationProgress = 1;
  }

  const isAnimating = hasReachedTrigger && scrollY >= TRIGGER_START && scrollY < ANIMATION_END;
  const isExpanded = hasReachedTrigger && scrollY >= ANIMATION_END;

  let borderRadius = "0";
  let transform = "translateY(0)";
  let position: "fixed" | "relative" = "relative";
  let boxShadow = "10";
  let width = "100%";
  let height: string | number = "100vh";
  let zIndex = 10; // Lower than navbar
  let clipPath = "none";

  if (isAnimating) {
    // ANIMATION PHASE: Use clip-path to create pill shape without deforming text
    position = "relative";
    const pillWidth = 0.7 + (animationProgress * 0.5); // 0.5 to 1.0 (50% to 100%)
    const radiusPercent = Math.max(75 - (animationProgress * 100), 0); // Start at 100% (fully rounded), flatten to 0%

    // Create clip-path that expands from wider pill to full width
    const leftPercent = (1 - pillWidth) * 50;
    const rightPercent = 100 - leftPercent;
    clipPath = `inset(0 ${leftPercent}% 0 ${leftPercent}% round ${radiusPercent}% ${radiusPercent}% 0 0)`;

    transform = `translateY(-60px)`;
    boxShadow = "0 -4px 24px rgba(0, 0, 0, 0.1)";
    height = "100vh";
    zIndex = 10;
  } else if (isExpanded) {
    // AFTER ANIMATION: Normal full-width section
    position = "relative";
    borderRadius = "0";
    boxShadow = "none";
    transform = "translateY(0)";
    height = "85vh";
    clipPath = "none";
    zIndex = 10;
  } else {
    // BEFORE ANIMATION: Normal section in flow
    position = "relative";
    borderRadius = "0";
    boxShadow = "none";
    transform = "translateY(0)";
    height = "60vh";
    clipPath = "none";
    zIndex = 10;
  }

  return (
    <div
      ref={sheetRef}
      className="bg-white"
      style={{
        position,
        left: "0",
        right: "0",
        borderRadius,
        boxShadow,
        transform,
        transformOrigin: "center top",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
        willChange: "transform, clip-path, box-shadow",
        width,
        height: typeof height === "number" ? `${height}px` : height,
        overflow: "hidden",
        clipPath,
        zIndex,
      }}
    >
      {/* Content Area */}
      <div className="p-8 md:p-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
            01 / THE CITY
          </p>

          <h2
            className="font-serif font-300 leading-tight mb-8"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.5rem, 8vw, 3.75rem)",
              textAlign: "center",
            }}
          >
            WHERE LIFE<br />
            <em style={{ fontStyle: "italic", fontSize: "1em" }}>UNFOLDS.</em>
          </h2>

          <div className="space-y-3 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              Royal Swiss City brings a different kind of presence to Lahore's next horizon. Set within the Ravi Riverfront vision, it pairs a secure, planned setting with generous landscapes, carefully considered streets, and the everyday ease of a complete community.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              It is a place made for morning walks, long weekends, growing families, and the quiet rituals that turn an address into a home.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-1 pt-2 border-t border-gray-200">
              {[
                { label: " ", value: "Gated Community" },
                { label: " ", value: "Riverfront Setting" },
                { label: " ", value: "Solar Infrastructure" },
                { label: " ", value: "Wide Boulevards" },
                { label: " ", value: "Green Spaces" },
                { label: " ", value: "Complete Amenities" },
              ].map((feature, i) => (
                <div key={i}>
                  <p className="text-xs uppercase tracking-wider font-400 text-gray-400 mb-2">
                    {feature.label}
                  </p>
                  <p className="text-1xl font-serif font-300">
                    {feature.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 pt-5 border-t border-gray-200">
              <a
                href="#vision"
                className="inline-block px-20 py-0.5 bg-white text-black text-sm uppercase tracking-wider rounded-full hover:bg-green transition-colors"
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
