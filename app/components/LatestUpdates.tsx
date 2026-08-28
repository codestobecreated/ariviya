"use client";
import React from "react";
import { LATEST_UPDATES } from "../data/petmartData";

export default function LatestUpdates() {
  const delays = ["0s", "0.2s", "0.4s"];

  return (
    <div className="latest-updates">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="latest-update-item-list">
              {LATEST_UPDATES.map((item, idx) => (
                <div
                  className="latest-update-item dark-section wow fadeInUp"
                  data-wow-delay={delays[idx] || "0s"}
                  key={item.id}
                >
                  <div className="latest-update-item-image">
                    <figure>
                      <img src={`/petmart/${item.image}`} alt={item.title} />
                    </figure>
                  </div>
                  <div className="latest-update-item-body">
                    <div className="section-title">
                      <span className="section-sub-title">{item.category}</span>
                      <h2>{item.title}</h2>
                    </div>
                    <div className="latest-update-item-btn">
                      <a href="#products" className="btn-default btn-border">
                        <span>Shop Now</span>
                      </a>
                    </div>
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
