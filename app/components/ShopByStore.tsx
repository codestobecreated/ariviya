"use client";
import React from "react";
import { COLLECTIONS } from "../data/petmartData";

export default function ShopByStore() {
  const delays = ["0s", "0.2s", "0.4s", "0.6s"];

  return (
    <div className="our-collection">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-xl-6">
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">Shop by Store</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Find Everything Pet Loves
              </h2>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <a href="#" className="btn-default">
                <span>Explore More</span>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="collection-item-list">
              {COLLECTIONS.map((col, idx) => (
                <div
                  className="collection-item wow fadeInUp"
                  data-wow-delay={delays[idx] || "0s"}
                  key={col.id}
                >
                  <div className="collection-item-image">
                    <figure>
                      <img src={`/petmart/${col.image}`} alt={col.title} />
                    </figure>
                  </div>
                  <div className="collection-item-content">
                    <h3>
                      <a href="#">{col.title}</a>
                    </h3>
                    <span>{col.discount}</span>
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
