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

  // Principles enter once, then remain still. The pause is more legible than a continuous scrub.
  gsap.utils.toArray<HTMLElement>(".principle-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      { y: 54, opacity: 0, scale: 0.965, filter: "blur(7px)" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.95,
        delay: index * 0.08,
        ease: "expo.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  });

  // Article slices arrive like suspended frames, then hold perfectly still.
  const focusIndex = document.getElementById("article-focus-index");
  const articleRows = gsap.utils.toArray<HTMLElement>(".article-row");
  const setArticleFocus = (focusedRow: HTMLElement) => {
    articleRows.forEach((candidate) => candidate.classList.toggle("is-focus", candidate === focusedRow));
    if (focusIndex) focusIndex.textContent = focusedRow.dataset.articleIndex || "";
  };

  articleRows.forEach((row, index) => {
    gsap.fromTo(
      row,
      { y: 86, opacity: 0, scale: 0.935, rotateX: 7, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1.18,
        delay: Math.min(index, 2) * 0.06,
        ease: "expo.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    ScrollTrigger.create({
      trigger: row,
      start: "center 72%",
      end: "center 28%",
      onEnter: () => setArticleFocus(row),
      onEnterBack: () => setArticleFocus(row),
      onLeave: () => row.classList.remove("is-focus"),
      onLeaveBack: () => row.classList.remove("is-focus"),
    });
  });

  // Case cards use the same one-shot slow-motion entrance.
  gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      { y: 82, opacity: 0, scale: 0.94, rotateX: 7, filter: "blur(9px)" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1.05,
        delay: (index % 2) * 0.09,
        ease: "expo.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  });

  // Judgements settle into focus without tracking every scroll pixel.
  gsap.utils.toArray<HTMLElement>(".thought-item").forEach((item, index) => {
    gsap.fromTo(
      item,
      { y: 58, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.95,
        delay: Math.min(index, 2) * 0.06,
        ease: "expo.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: item,
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  });
}
