"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: "cat-meals",
    subtitle: "Latest Arrivals",
    line1: "Delicious Meals",
    line2: "Your Furry",
    line3: "Friends",
    btnText: "Shop Now",
    img: "/images/cat.webp",
    alt: "Cute Tabby Kitten",
  },
  {
    id: "dog-glasses",
    subtitle: "Latest Arrivals",
    line1: "Where Being Pet",
    line2: "Just The Best",
    line3: "Pet Shop",
    btnText: "Shop Now",
    img: "/images/dog.webp",
    alt: "Dog wearing glasses",
  },
  {
    id: "cow-needs",
    subtitle: "Latest Arrivals",
    line1: "Everything Your",
    line2: "Pet Needs",
    line3: "Today",
    btnText: "Shop Now",
    img: "/images/cow.webp",
    alt: "Cow / Farm Pet Needs",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="hero-carousel-section" className="relative w-full overflow-hidden bg-[#EDEDEC] min-h-[650px] md:min-h-[720px] lg:min-h-[750px] flex items-center select-none">

      {/* Top Left Organic Soft Gray Shape */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#DCDCDC]/70 rounded-br-[120px] pointer-events-none z-10" />

      {/* Bottom Left Food Bowl Line Art Doodle */}
      <div className="absolute bottom-4 left-4 sm:left-8 z-20 pointer-events-none">
        <svg width="110" height="110" viewBox="0 0 100 100" fill="none">
          {/* Bowl base and food stack line art */}
          <path d="M15 68 C15 88, 85 88, 85 68 L80 50 C80 50, 50 42, 20 50 Z" stroke="#142442" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="white" />
          <path d="M22 52 C22 35, 40 20, 50 20 C60 20, 78 35, 78 52 Z" stroke="#142442" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="white" />
          <circle cx="50" cy="32" r="3" fill="#142442" />
          <circle cx="38" cy="40" r="2.5" fill="#142442" />
          <circle cx="62" cy="40" r="2.5" fill="#142442" />
          <circle cx="48" cy="44" r="3" fill="#142442" />
          <circle cx="32" cy="46" r="2.5" fill="#142442" />
          <circle cx="66" cy="46" r="2.5" fill="#142442" />
          <path d="M15 68 C15 78, 85 78, 85 68" stroke="#142442" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-11 md:h-11 bg-white hover:bg-[#6C47D1] hover:text-white rounded-full shadow-md flex items-center justify-center text-[#161824] transition-all duration-300 hover:scale-110 border border-slate-100 cursor-pointer"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-11 md:h-11 bg-white hover:bg-[#6C47D1] hover:text-white rounded-full shadow-md flex items-center justify-center text-[#161824] transition-all duration-300 hover:scale-110 border border-slate-100 cursor-pointer"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>

      {/* Slides Wrapper */}
      <div className="w-full relative z-10 h-full">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`relative w-full min-h-[650px] md:min-h-[720px] lg:min-h-[750px] flex items-center transition-all duration-700 ${
                isActive ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              {/* Full Width & 100% Full Height Background Image Layer */}
              <div
                className="absolute inset-0 w-full h-full bg-no-repeat bg-cover pointer-events-none"
                style={{
                  backgroundImage: `url('${slide.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "right center",
                }}
              >
                {/* Gradient Overlay for Left Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#EDEDEC] via-[#EDEDEC]/90 to-transparent w-full md:w-3/5"></div>
              </div>

              {/* Left Content Area */}
              <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 relative z-20 py-12 md:py-16">
                <div className="w-full md:w-[55%] lg:w-[60%] space-y-5 md:space-y-7">

                  {/* Orange Subtitle */}
                  <span className="text-[#FA7829] font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide block">
                    Latest Arrivals
                  </span>

                  {/* Large Wide Black Title */}
                  <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[82px] xl:text-[96px] font-black text-[#050505] leading-[1.06] tracking-normal">
                    Everything Your<br />
                    Pet Needs<br />
                    Today
                  </h1>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <a
                      href="#featured-products"
                      className="bg-[#6B38D5] hover:bg-[#572AC3] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg inline-flex items-center text-lg sm:text-xl hover:scale-105"
                    >
                      <span>Shop Now</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          );
        })}

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center space-x-2.5 my-4 z-30 relative">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                index === activeSlide
                  ? "w-7 h-2.5 bg-[#6B38D5] shadow-sm"
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-[#6B38D5]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* SVG White Wave Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-8 sm:h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>

    </section>
  );
}

