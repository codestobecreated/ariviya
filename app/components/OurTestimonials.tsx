"use client";
import React, { useState } from "react";
import { TESTIMONIALS } from "../data/petmartData";

export default function OurTestimonials() {
  const [active, setActive] = useState(0);

  return (
    <div className="our-testimonials">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-md-6">
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">Happy Pet Parents</span>
              <h2 className="text-anime-style-3">Real Reviews Real Trust</h2>
            </div>
          </div>

          <div className="col-md-6">
            <div className="google-review-box wow fadeInUp" data-wow-delay="0.2s">
              <div className="google-review-header">
                <div className="icon-box">
                  <img src="/petmart/google-logo.svg" alt="Google Logo" />
                </div>
                <div className="google-review-title">
                  <h3>Reviews</h3>
                </div>
              </div>
              <div className="google-review-content">
                <h2><span className="counter">4.7</span></h2>
                <span className="google-review-rating">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </span>
                <p>(11,152,120)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial-slider">
              <div className="testimonial-grid-wrapper">
                {TESTIMONIALS.map((item, idx) => (
                  <div
                    key={idx}
                    className={`testimonial-item${idx === active ? " active-slide" : ""}`}
                    onClick={() => setActive(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="testimonial-item-content-box">
                      <div className="testimonial-item-rating">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                      <div className="testimonial-item-content">
                        <p>&quot;{item.review}&quot;</p>
                      </div>
                    </div>
                    <div className="testimonial-item-author">
                      <div className="testimonial-author-image">
                        <figure className="image-anime">
                          <img src={`/petmart/${item.image}`} alt={item.name} />
                        </figure>
                      </div>
                      <div className="testimonial-author-content">
                        <h2>{item.name}</h2>
                        <p>{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
