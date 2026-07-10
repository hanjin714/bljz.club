import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function registerScrollAnimations() {
  // Stats — progressive reveal with stagger
  gsap.fromTo(
    ".stat-item",
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#about .stat-item",
        start: "top 85%",
      },
    }
  );

  // Article rows — sequential slide-in
  gsap.utils.toArray<HTMLElement>(".article-row").forEach((row, index) => {
    gsap.fromTo(
      row,
      { x: index % 2 === 0 ? -90 : 90, opacity: 0.38, scale: 0.94, rotateY: index % 2 === 0 ? -10 : 10 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: row,
          start: "top bottom",
          end: "center 54%",
          scrub: 0.8,
        },
      }
    );
  });

  // Project cards — fade up stagger
  gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      { y: 90, opacity: 0.34, scale: 0.9, rotateX: -12 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "center 58%",
          scrub: 0.9,
        },
        delay: index * 0.03,
      }
    );
  });

  // Thought items — reveal along timeline
  gsap.utils.toArray<HTMLElement>(".thought-item").forEach((item, index) => {
    gsap.fromTo(
      item,
      { x: -70, opacity: 0.3, filter: "blur(5px)" },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "center 60%",
          scrub: 0.8,
        },
        delay: index * 0.02,
      }
    );
  });
}
