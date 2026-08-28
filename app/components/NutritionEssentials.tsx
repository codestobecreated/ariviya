"use client";
import React from "react";

export default function NutritionEssentials() {
  return (
    <div className="nutrition-essentials">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="nutrition-essentials-box">
              {/* Highlighted Item */}
              <div className="nutrition-essentials-item highlighted-item wow fadeInUp">
                <div className="nutrition-essentials-item-image">
                  <figure>
                    <img
                      src="/petmart/nutrition-essentials-highlighted-item-image.jpg"
                      alt="Healthy Care Nutrition"
                    />
                  </figure>
                </div>
                <div className="nutrition-essentials-item-body">
                  <div className="nutrition-essentials-item-content">
                    <h3>Healthy care starts with the right nutrition.</h3>
                    <p>
                      Give your pets the nourishment they deserve premium pet food, healthy treats, and supplements. Support their growth, energy.
                    </p>
                  </div>
                  <div className="nutrition-essentials-item-btn">
                    <a href="#" className="btn-default btn-border">
                      <span>Buy Pet Food</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Item List */}
              <div className="nutrition-essentials-item-list">
                <div
                  className="nutrition-essentials-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="nutrition-essentials-item-image">
                    <figure>
                      <img
                        src="/petmart/nutrition-essentials-item-image-1.jpg"
                        alt="Delicious Treats"
                      />
                    </figure>
                  </div>
                  <div className="nutrition-essentials-item-body">
                    <div className="nutrition-essentials-item-content">
                      <h3>Delicious Treats Pets Crave Every Day</h3>
                    </div>
                    <div className="nutrition-essentials-item-btn">
                      <a href="#" className="btn-default btn-border">
                        <span>Buy Pet Food</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="nutrition-essentials-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="nutrition-essentials-item-image">
                    <figure>
                      <img
                        src="/petmart/nutrition-essentials-item-image-2.jpg"
                        alt="Daily Wellness"
                      />
                    </figure>
                  </div>
                  <div className="nutrition-essentials-item-body">
                    <div className="nutrition-essentials-item-content">
                      <h3>Daily wellness every furry friend</h3>
                    </div>
                    <div className="nutrition-essentials-item-btn">
                      <a href="#" className="btn-default btn-border">
                        <span>Buy Pet Food</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
