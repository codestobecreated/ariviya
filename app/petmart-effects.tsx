"use client";

import { useEffect } from "react";

export default function PetmartEffects() {
  useEffect(() => {
    document.body.classList.add("page-loaded");

    const menu = document.querySelector<HTMLElement>(".main-menu .navbar-collapse");
    const navList = document.querySelector<HTMLElement>(".main-menu .navbar-nav");
    if (menu) {
      menu.style.display = "flex";
      menu.style.visibility = "visible";
      menu.style.opacity = "1";
    }
    if (navList) {
      navList.style.display = "flex";
      navList.style.visibility = "visible";
      navList.style.opacity = "1";
    }

    const animated = Array.from(document.querySelectorAll<HTMLElement>(".wow, .text-anime-style-2, .text-anime-style-3"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    animated.forEach((el, index) => {
      const delay = el.getAttribute("data-wow-delay");
      if (delay) el.style.transitionDelay = delay;
      else if (el.closest(".our-testimonials")) el.style.transitionDelay = `${Math.min(index * 45, 220)}ms`;
      observer.observe(el);
    });

    const accordionButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".accordion-button"));
    const onAccordionClick = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const targetId = button.getAttribute("data-target") || button.getAttribute("aria-controls");
      if (!targetId) return;

      accordionButtons.forEach((other) => {
        const otherId = other.getAttribute("data-target") || other.getAttribute("aria-controls");
        const panel = otherId ? document.getElementById(otherId) : null;
        const isCurrent = other === button;
        other.classList.toggle("collapsed", !isCurrent);
        other.setAttribute("aria-expanded", String(isCurrent));
        if (panel) {
          panel.classList.toggle("show", isCurrent);
          panel.style.display = isCurrent ? "block" : "none";
        }
      });
    };
    accordionButtons.forEach((button) => button.addEventListener("click", onAccordionClick));

    const end = new Date("2026-12-31T23:59:59").getTime();
    const updateCountdown = () => {
      const distance = Math.max(0, end - Date.now());
      const days = Math.floor(distance / 86400000);
      const hours = Math.floor((distance % 86400000) / 3600000);
      const minutes = Math.floor((distance % 3600000) / 60000);
      const seconds = Math.floor((distance % 60000) / 1000);
      const set = (selector: string, value: number) => {
        document.querySelectorAll<HTMLElement>(selector).forEach((el) => { el.textContent = String(value).padStart(2, "0"); });
      };
      set(".days", days);
      set(".hours", hours);
      set(".minutes", minutes);
      set(".seconds", seconds);
    };
    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);

    return () => {
      observer.disconnect();
      accordionButtons.forEach((button) => button.removeEventListener("click", onAccordionClick));
      window.clearInterval(timer);
    };
  }, []);

  return null;
}
