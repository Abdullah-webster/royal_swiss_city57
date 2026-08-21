import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Vision Scene - Morphing clip-path reveal with layered parallax
export const animateVisionScene = (element: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.5,
      markers: false,
    }
  });

  // Morphing clip-path entrance
  tl.fromTo(
    element,
    {
      opacity: 0,
      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    },
    {
      opacity: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 2.5,
      ease: 'power3.inOut',
    },
    0
  );

  // Parallax effect on heading
  tl.fromTo(
    element.querySelector('h2'),
    {
      y: 80,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
    },
    0.3
  );

  // Staggered text reveal with skewed entrance
  tl.fromTo(
    element.querySelectorAll('p:not(.section-kicker)'),
    {
      opacity: 0,
      y: 40,
      skewY: 5,
    },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 1.5,
      stagger: 0.1,
    },
    0.6
  );

  // Metrics with organic grow effect
  tl.fromTo(
    element.querySelectorAll('.metric'),
    {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.3,
      stagger: 0.08,
    },
    1.2
  );
};

// Legacy Section - Organic flowing mask transitions
export const animateLegacySection = (element: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.5,
    }
  });

  // Morphing clip-path for smooth organic entrance
  tl.fromTo(
    element,
    {
      opacity: 0,
      clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
    },
    {
      opacity: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 2.8,
      ease: 'power3.inOut',
    },
    0
  );

  // Copy text flows in
  tl.fromTo(
    element.querySelector('.legacy-copy'),
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.8,
    },
    0.4
  );

  // Cards cascade with organic easing
  const cards = element.querySelectorAll('.legacy-card');
  cards.forEach((card, i) => {
    tl.fromTo(
      card,
      {
        opacity: 0,
        y: 80,
        scale: 0.7,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.6,
        ease: 'power2.out',
      },
      0.8 + i * 0.15
    );
  });
};

// Features Section - Morphing wave reveal
export const animateFeaturesSection = (element: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.3,
    }
  });

  // Wave morphing clip-path
  tl.fromTo(
    element,
    {
      opacity: 0,
      clipPath: 'polygon(0% 30%, 0% 70%, 20% 85%, 40% 70%, 60% 85%, 80% 70%, 100% 30%, 100% 0%, 0% 0%)',
    },
    {
      opacity: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 2.5,
      ease: 'power3.inOut',
    },
    0
  );

  // Heading enters with slight skew
  tl.fromTo(
    element.querySelector('h2'),
    {
      y: 50,
      opacity: 0,
      skewX: -3,
    },
    {
      y: 0,
      opacity: 1,
      skewX: 0,
      duration: 1.5,
    },
    0.3
  );
};

// Partner Strip - Flowing split reveal
export const animatePartnerStrip = (element: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.5,
    }
  });

  // Container opacity
  tl.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.8,
    },
    0
  );

  // Image comes from left with clip-path morph
  const img = element.querySelector('img');
  if (img) {
    tl.fromTo(
      img,
      {
        opacity: 0,
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
      },
      {
        opacity: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 2,
      },
      0.1
    );
  }

  // Text content emerges
  const textDiv = element.querySelector('div');
  if (textDiv) {
    tl.fromTo(
      textDiv,
      {
        opacity: 0,
        x: 60,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
      },
      0.4
    );
  }
};

// Showcase Section - Organic blob reveals
export const animateShowcaseSection = (element: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.2,
    }
  });

  // Section background with blob clip-path
  tl.fromTo(
    element,
    {
      opacity: 0,
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    },
    {
      opacity: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 2.3,
      ease: 'power3.inOut',
    },
    0
  );

  // Heading emerges
  tl.fromTo(
    element.querySelector('.showcase-heading'),
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
    },
    0.3
  );

  // Cards emerge with organic stagger and scale
  const cards = element.querySelectorAll('.showcase-card');
  cards.forEach((card, i) => {
    tl.fromTo(
      card,
      {
        opacity: 0,
        y: 80,
        scale: 0.6,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
        ease: 'back.out(1.1)',
      },
      0.5 + i * 0.12
    );
  });
};

// Enquire Section - Spiral unfold reveal
export const animateEnquireSection = (element: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.4,
    }
  });

  // Simple fade and rise - no clip-path distortion
  tl.fromTo(
    element,
    {
      opacity: 0,
      y: 80,
    },
    {
      opacity: 1,
      y: 0,
      duration: 2.2,
      ease: 'power3.inOut',
    },
    0
  );

  // Heading unfolds
  tl.fromTo(
    element.querySelector('h2'),
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.8,
    },
    0.4
  );

  // Paragraph flows in
  tl.fromTo(
    element.querySelector('p:not(.section-kicker)'),
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.3,
    },
    0.8
  );

  // CTA links with stagger
  tl.fromTo(
    element.querySelectorAll('a'),
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.1,
    },
    1.1
  );
};

// Footer - No animation, just static display
export const animateFooter = (element: Element) => {
  // Footer stays static - no animation
  gsap.set(element, {
    opacity: 1,
    y: 0,
  });
};

export const staggerAnimateCards = (cards: Element[], delayMultiplier = 0.1) => {
  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.6,
      ease: 'power2.out',
      stagger: delayMultiplier,
      scrollTrigger: {
        trigger: cards[0],
        start: 'top 80%',
        end: 'top 30%',
        scrub: 0.8,
      },
    }
  );
};
