"use client";
import React, { useState, useEffect } from "react";

export default function LimitedOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 12,
    minutes: 34,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="limited-offer dark-section parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="limited-offer-box wow fadeInUp">
              <div className="limited-offer-header">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Get 10% off With Code: WOOFY10
                  </h2>
                </div>

                <div className="limited-offer-countdown">
                  <div className="countdown">
                    <div className="counter-box">
                      <span className="days">{formatNum(timeLeft.days)}</span>
                      <p>Days</p>
                    </div>
                    <div className="counter-box">
                      <span className="hours">{formatNum(timeLeft.hours)}</span>
                      <p>Hours</p>
                    </div>
                    <div className="counter-box">
                      <span className="minutes">{formatNum(timeLeft.minutes)}</span>
                      <p>Minutes</p>
                    </div>
                    <div className="counter-box">
                      <span className="seconds">{formatNum(timeLeft.seconds)}</span>
                      <p>Seconds</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="limited-offer-body">
                <div className="limited-offer-content">
                  <p>
                    Discover premium products for dogs, cats, birds, fish, and small pets with carefully selected essentials
                  </p>
                </div>

                <div className="limited-offer-btn">
                  <a href="#products" className="btn-default btn-highlighted">
                    <span>Shop Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
