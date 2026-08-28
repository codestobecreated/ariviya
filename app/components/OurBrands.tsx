"use client";
import React from "react";
import { BRANDS } from "../data/petmartData";

export default function OurBrands() {
  const delays = ["0s", "0.2s", "0.4s", "0.6s", "0.8s", "1s"];

  return (
    <div className="our-brands">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <span className="section-sub-title wow fadeInUp">Pet Brands</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Top Quality Brands
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="our-brands-item-list">
              {BRANDS.map((brand, idx) => (
                <div
                  className="our-brands-item wow fadeInUp"
                  data-wow-delay={delays[idx] || "0s"}
                  key={brand.id}
                >
                  <div className="our-brands-item-image">
                    <a href="#" data-cursor-text="View">
                      <figure>
                        <img src={`/petmart/${brand.image}`} alt="Pet Brand" />
                      </figure>
                    </a>
                  </div>
                  <div className="our-brands-item-content">
                    <p>
                      Up To <span>{brand.discount}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
