// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//  LIB > GLOBAL-COMPOSABLES-HOOKS
//  >> USE-ANIMATED-SCROLLING.TS
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { atom, useAtom } from 'jotai';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { useOnMounted, useOnUnmounted } from './fantumwave-hooks/FantumWave'; // Importing wrappers
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type AnimationOptions = {
  threshold?: number; // Threshold at which observer triggers (0.0–1.0)
  rootMargin?: string; // Margin around the viewport (e.g., '0px 0px -50px 0px')
};
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Atom to store visibility states for sections by ID
const sectionVisibilityAtom = atom<Record<string, boolean>>({});

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export function useAnimatedScrolling(options: AnimationOptions = {}) {
  const [sectionVisibility, updateSectionVisibility] = useAtom(sectionVisibilityAtom);

  // Initialize and observe sections on mount
  useOnMounted(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Update visibility for each observed entry
      updateSectionVisibility((prevVisibility) => {
        const newVisibility = { ...prevVisibility };
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (sectionId) {
            newVisibility[sectionId] = entry.isIntersecting;
          }
        });
        return newVisibility;
      });
    };

    // Set up IntersectionObserver with provided options
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: options.threshold || 0.5,
      rootMargin: options.rootMargin || '0px',
    });

    // Observe all elements with `data-animate-section` attribute
    const sections = document.querySelectorAll<HTMLElement>('[data-animate-section]');
    sections.forEach((section) => {
      const sectionId = section.id;
      if (sectionId) {
        // Initialize all sections as invisible
        updateSectionVisibility((prev) => ({ ...prev, [sectionId]: false }));
        observer.observe(section); // Start observing the section
      }
    });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  });

  // Cleanup logic for unmount
  useOnUnmounted(() => {
    console.log('useAnimatedScrolling cleanup executed'); // Ensure cleanup works
  });

  // Utility to compute animation classes based on visibility
  const computeAnimateSection = (sectionId: string) => {
    const isVisible = sectionVisibility[sectionId] || false; // Default to false if undefined

    return twMerge(
      clsx(
        'transition-all duration-500 ease-out transform-gpu',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1',
      ),
    );
  };

  return {
    computeAnimateSection,
  };
}

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
