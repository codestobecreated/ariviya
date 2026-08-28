"use client";
import React from "react";
import { SMART_SAVINGS } from "../data/petmartData";

export default function SmartSavings() {
  const delays = ["0s", "0.2s"];

  return (
    <div className="smart-savings">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="smart-savings-item-list">
              {SMART_SAVINGS.map((item, idx) => (
                <div
                  className="smart-savings-item wow fadeInUp"
                  data-wow-delay={delays[idx] || "0s"}
                  key={item.id}
                >
                  <div className="smart-savings-item-image">
                    <figure>
                      <img src={`/petmart/${item.image}`} alt={item.title} />
                    </figure>
                  </div>
                  <div className="smart-savings-item-body">
                    <div className="smart-savings-item-tag">
                      <p>Saving</p>
                      <h3>
                        <span className="counter">{item.tagPercent}</span>%
                      </h3>
                    </div>
                    <div className="smart-savings-item-content-box">
                      <div className="smart-savings-item-content">
                        <p>{item.subtitle}</p>
                        <h3>
                          <a href="#">{item.title}</a>
                        </h3>
                      </div>
                      <div className="smart-savings-item-btn">
                        <a href="#products" className="btn-default btn-border">
                          <span>Shop Now</span>
                        </a>
                      </div>
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
