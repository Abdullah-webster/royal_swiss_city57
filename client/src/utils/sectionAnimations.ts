import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Vision Scene - Organic blob reveal (SAME AS SHOWCASE)
export const animateVisionScene = (element: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.2,
    }
  });

  // Simple fade in and scale - NO clip-path for full width
  tl.fromTo(
    element,
    {
      opacity: 0,
      transform: 'translateY(120px) scale(0.88)',
    },
    {
      opacity: 1,
      transform: 'translateY(0) scale(1)',
      duration: 2.3,
      ease: 'power3.inOut',
    },
    0
  );

  // Heading emerges
  tl.fromTo(
    element.querySelector('h2'),
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

  // Staggered text reveal
  tl.fromTo(
    element.querySelectorAll('p:not(.section-kicker)'),
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
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
      scale: 0.6,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.4,
      ease: 'back.out(1.1)',
      stagger: 0.08,
    },
    0.5
  );
};

// Legacy Section - EXACT SAME AS SHOWCASE
export const animateLegacySection = (element: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.2,
    }
  });

  // Simple fade and scale - NO clip-path for full width
  tl.fromTo(
    element,
    {
      opacity: 0,
      transform: 'translateY(60px)',
    },
    {
      opacity: 1,
      transform: 'translateY(0)',
      duration: 2.3,
      ease: 'power3.inOut',
    },
    0
  );

  // Heading emerges
  tl.fromTo(
    element.querySelector('.showcase-heading, .legacy-copy, h2'),
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
  const cards = element.querySelectorAll('.showcase-card, .legacy-card, .metric, article, div > div');
  if (cards.length > 0) {
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
  }
};

// Features Section - EXACT SAME AS SHOWCASE
export const animateFeaturesSection = (element: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.2,
    }
  });

  // Simple fade and scale - NO clip-path for full width
  tl.fromTo(
    element,
    {
      opacity: 0,
      transform: 'translateY(60px)',
    },
    {
      opacity: 1,
      transform: 'translateY(0)',
      duration: 2.3,
      ease: 'power3.inOut',
    },
    0
  );

  // Heading emerges
  tl.fromTo(
    element.querySelector('.showcase-heading, h2'),
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
  const cards = element.querySelectorAll('.showcase-card, .feature-card');
  if (cards.length > 0) {
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
  }
};

// Partner Strip - EXACT SAME AS SHOWCASE
export const animatePartnerStrip = (element: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.2,
    }
  });

  // Simple fade and scale - NO clip-path for full width
  tl.fromTo(
    element,
    {
      opacity: 0,
      transform: 'translateY(60px)',
    },
    {
      opacity: 1,
      transform: 'translateY(0)',
      duration: 2.3,
      ease: 'power3.inOut',
    },
    0
  );

  // Heading emerges
  tl.fromTo(
    element.querySelector('.showcase-heading, h2'),
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

  // Cards/elements emerge with organic stagger and scale
  const items = element.querySelectorAll('.showcase-card, img, div, p, a');
  if (items.length > 0) {
    items.forEach((item, i) => {
      tl.fromTo(
        item,
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

// Enquire Section - Organic blob reveal (SAME AS SHOWCASE)
export const animateEnquireSection = (element: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.2,
    }
  });

  // Simple fade and scale - NO clip-path for full width
  tl.fromTo(
    element,
    {
      opacity: 0,
      transform: 'translateY(60px)',
    },
    {
      opacity: 1,
      transform: 'translateY(0)',
      duration: 2.3,
      ease: 'power3.inOut',
    },
    0
  );

  // Heading unfolds
  tl.fromTo(
    element.querySelector('h2'),
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
    0.5
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
    0.6
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
