"use client";
import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="main-footer dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="about-footer">
                <div className="footer-logo">
                  <img src="/images/Ariviya.png" alt="Ariviya Logo" style={{ height: "100px", width: "auto", filter: "brightness(0) invert(1)" }} />
                </div>
                <div className="about-footer-content">
                  <p>
                    Your trusted destination for premium pet food, toys, grooming essentials, accessories,
                  </p>
                </div>
              </div>

              <div className="footer-newsletter-box">
                <h2>Subscribe to our newsletter:</h2>
                <form id="newslettersForm" onSubmit={handleSubscribe}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="mail"
                      className="form-control"
                      id="mail"
                      placeholder="Enter your e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn-default btn-highlighted">
                      <span>{subscribed ? "Subscribed!" : "subscribe"}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="footer-links-box">
              <div className="footer-links">
                <h2>Quick Links</h2>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#products">Shop</a></li>
                  <li><a href="#categories">Categories</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#blog">Blog</a></li>
                </ul>
              </div>

              <div className="footer-links">
                <h2>Product Categories</h2>
                <ul>
                  <li><a href="#categories">Dog Essentials</a></li>
                  <li><a href="#categories">Cat Care Products</a></li>
                  <li><a href="#categories">Bird Supplies</a></li>
                  <li><a href="#categories">Aquarium Products</a></li>
                  <li><a href="#categories">Small Pet Accessories</a></li>
                </ul>
              </div>

              <div className="footer-links">
                <h2>Customer Support</h2>
                <ul>
                  <li><a href="#">Return Policy</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms And Conditions</a></li>
                  <li><a href="#">Order Tracking</a></li>
                  <li><a href="#">Shipping Information</a></li>
                </ul>
              </div>

              <div className="footer-links footer-contact-box">
                <h2>Contact Information</h2>
                <div className="footer-contact-items-list">
                  <div className="footer-contact-item">
                    <div className="icon-box">
                      <img src="/petmart/icon-phone-accent.svg" alt="Phone" />
                    </div>
                    <div className="footer-contact-item-content">
                      <p>Phone Number</p>
                      <h3>
                        <a href="tel:+123456789">+123 456 789</a>
                      </h3>
                    </div>
                  </div>

                  <div className="footer-contact-item">
                    <div className="icon-box">
                      <img src="/petmart/icon-mail-accent.svg" alt="Mail" />
                    </div>
                    <div className="footer-contact-item-content">
                      <p>Email Address</p>
                      <h3>
                        <a href="mailto:support@domainname.com">support@domainname.com</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright-box">
                <div className="footer-copyright-text">
                  <p>Copyright (c) 2026 All Rights Reserved.</p>
                </div>

                <div className="footer-payment-options">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="/petmart/icon-payment-options-1.svg" alt="Visa" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/petmart/icon-payment-options-2.svg" alt="MasterCard" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/petmart/icon-payment-options-3.svg" alt="PayPal" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/petmart/icon-payment-options-4.svg" alt="Amex" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/petmart/icon-payment-options-5.svg" alt="Discover" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/petmart/icon-payment-options-6.svg" alt="ApplePay" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
