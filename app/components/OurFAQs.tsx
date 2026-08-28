"use client";
import React, { useState } from "react";
import { FAQS } from "../data/petmartData";

export default function OurFAQs() {
  const [openId, setOpenId] = useState<string>("faq1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  const delays = ["0s", "0.2s", "0.4s", "0.6s", "0.8s"];

  return (
    <div className="our-faqs" id="faqs">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="faq-content-box">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">
                  Frequently Asked Questions
                </span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Helpful Answers For Pet Owners Everywhere
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Find answers to common questions about pet care, products, shipping, and returns everything you need to keep your furry friends happy and healthy.
                </p>
              </div>

              <div className="faq-content-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="#" className="btn-default">
                  <span>View all FAQ's</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="faq-accordion" id="accordion">
              {FAQS.map((faq, idx) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay={delays[idx] || "0s"}
                    key={faq.id}
                  >
                    <h2 className="accordion-header" id={`heading${idx + 1}`}>
                      <button
                        className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        aria-expanded={isOpen}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
