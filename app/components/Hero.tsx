"use client";
import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="hero-content">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp" style={{ color: "#5FA886" }}>Everything Your Pets Need Daily</span>
                <h1 className="text-anime-style-3">Save Up To 50% On Pet Essentials</h1>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Discover premium pet products including food, toys, grooming essentials, and accessories designed to keep your pets healthy and happy every day.
                </p>
              </div>
              <div className="hero-content-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="#products" className="btn-default btn-border"><span>Shop Now</span></a>
                <a href="#categories" className="btn-default"><span>Explore Collection</span></a>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="hero-image">
              <figure>
                <img src="/petmart/hero-image.png" alt="Pet Essentials Hero" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
