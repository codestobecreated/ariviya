"use client";
import React from "react";

export default function OurGuidance() {
  return (
    <div className="our-guidance dark-section parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="our-guidance-content">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Pet Care Guide</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Fun Moments With Cute Pets
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Discover helpful pet care videos, grooming tutorials, training guides, and fun activities designed to keep your pets healthy, active, and happy every day.
                </p>
              </div>

              <div className="our-guidance-list wow fadeInUp" data-wow-delay="0.4s">
                <ul>
                  <li>Premium Quality Pet Products</li>
                  <li>Fast & Reliable Delivery</li>
                  <li>Affordable Prices Every Day</li>
                  <li>Special Offers & Discounts</li>
                </ul>
              </div>

              <div className="our-guidance-content-body wow fadeInUp" data-wow-delay="0.6s">
                <div className="our-guidance-btn">
                  <a href="#products" className="btn-default btn-highlighted">
                    <span>Shop Now</span>
                  </a>
                </div>

                <div className="our-guidance-delivery-box">
                  <div className="icon-box">
                    <img src="/petmart/icon-our-guidance-delivery.svg" alt="Free Delivery" />
                  </div>
                  <div className="our-guidance-delivery-content">
                    <p>For Free Delivery</p>
                    <h3>
                      <a href="tel:123456789">+(00) - 123 456 789</a>
                    </h3>
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
