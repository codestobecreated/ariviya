"use client";
import React from "react";
import { CATEGORIES } from "../data/petmartData";

export default function ShopByCategory() {
  const delays = ["0s", "0.2s", "0.4s", "0.6s", "0.8s", "1s", "1.2s"];

  return (
    <div className="our-category" id="categories">
      <div className="container">
        <div className="row section-row">
          <div className="col-xl-12">
            <div className="section-title section-title-center">
              <span className="section-sub-title wow fadeInUp">Shop by Category</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Best Products For Happy Pets
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="category-item-list">
              {CATEGORIES.map((cat, idx) => (
                <div
                  className="category-item wow fadeInUp"
                  data-wow-delay={delays[idx] || `${idx * 0.2}s`}
                  key={cat.id}
                >
                  <div className="category-item-image">
                    <a href="#" data-cursor-text="View">
                      <figure>
                        <img src={`/petmart/${cat.image}`} alt={cat.title} />
                      </figure>
                    </a>
                  </div>
                  <div className="category-item-content">
                    <h3>
                      <a href="#">{cat.title}</a>
                    </h3>
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
