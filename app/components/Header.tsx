"use client";

import React, { useState, useEffect } from "react";

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart?: () => void;
  onOpenWishlist?: () => void;
}

export default function Header({ cartCount, wishlistCount, onOpenCart, onOpenWishlist }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [shopOpen, setShopOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    const close = () => { setShopOpen(false); setAccountOpen(false); setPagesOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          {/* ── Action Box ── */}
          <div className="header-action-box">
            <a className="navbar-brand" href="#">
              <img src="/images/Ariviya.png" alt="Ariviya Logo" style={{ height: "58px", width: "auto" }} />
            </a>

            <div className="header-search-form-box">
              <form className="header-search-form" onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search By Products..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="header-search-btn" aria-label="Search">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="header-action-details mobile-hide">
              <ul>
                <li><a href="#"><img src="/petmart/icon-user-primary.svg" alt="Account" />Account</a></li>
                <li>
                  <a href="#" onClick={e => { e.preventDefault(); onOpenWishlist?.(); }} className="badge-link">
                    <img src="/petmart/icon-wishlist-primary.svg" alt="Wishlist" />Wishlist
                    {wishlistCount > 0 && <span className="action-badge">{wishlistCount}</span>}
                  </a>
                </li>
                <li>
                  <a href="#" onClick={e => { e.preventDefault(); onOpenCart?.(); }} className="badge-link">
                    <img src="/petmart/icon-cart-primary.svg" alt="Cart" />Cart
                    {cartCount > 0 && <span className="action-badge">{cartCount}</span>}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Main Menu ── */}
          <div className="main-menu ">
            <div className={`collapse navbar-collapse${mobileMenuOpen ? " show" : ""}`}>
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav" id="menu">
                  <li className="nav-item"><a className="nav-link" href="#">Home</a></li>

                  {/* Shop Mega Menu */}
                  <li className="nav-item mega-menu submenu position-static" onClick={e => { e.stopPropagation(); setShopOpen(p => !p); setAccountOpen(false); setPagesOpen(false); }}>
                    <a className="nav-link" href="#">Shop</a>
                    <ul className={`dropdown-menu${shopOpen ? " show" : ""}`}>
                      <li className="mega-menu-box">
                        <div className="mega-menu-links-box">
                          <div className="mega-menu-link">
                            <h2>Categories</h2>
                            <ul>
                              {["Dog Essentials","Cat Care Products","Bird Supplies","Fish & Aquarium","Rabbit Accessories","Small Pet Needs"].map(c => (
                                <li key={c}><a href="#">{c}</a></li>
                              ))}
                            </ul>
                          </div>
                          <div className="mega-menu-link">
                            <h2>Shop Features</h2>
                            <ul>
                              {["Best Sellers","New Arrivals","Featured Products","Special Offers","Pet Care Tips","Customer Favorites"].map(c => (
                                <li key={c}><a href="#">{c}</a></li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mega-menu-items-list">
                          <div className="mega-menu-item">
                            <div className="mega-menu-item-image"><a href="#"><figure className="image-anime"><img src="/petmart/mega-menu-item-image-1.jpg" alt="Healthy Nutrition" /></figure></a></div>
                            <div className="mega-menu-item-content"><h2><a href="#">Healthy Nutrition</a></h2><p>Premium meals for stronger and happier pets.</p></div>
                          </div>
                          <div className="mega-menu-item">
                            <div className="mega-menu-item-image"><a href="#"><figure className="image-anime"><img src="/petmart/mega-menu-item-image-2.jpg" alt="Fun Playtime" /></figure></a></div>
                            <div className="mega-menu-item-content"><h2><a href="#">Fun Playtime</a></h2><p>Interactive toys that keep pets active and entertained.</p></div>
                          </div>
                          <div className="mega-menu-item big-offer-box">
                            <div className="mega-menu-item-image"><figure><img src="/petmart/mega-menu-item-image-3.jpg" alt="Big Sale" /></figure></div>
                            <div className="mega-menu-item-content"><span>-special offer-</span><h2>Big Sale</h2><h3>50% Off</h3></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>

                  {/* My Account dropdown */}
                  <li className="nav-item submenu" onClick={e => { e.stopPropagation(); setAccountOpen(p => !p); setShopOpen(false); setPagesOpen(false); }}>
                    <a className="nav-link" href="#">My Account</a>
                    <ul className={`dropdown-menu${accountOpen ? " show" : ""}`}>
                      {["Login / Register","Forgot Password","My Account","My Order","My Download"].map(l => (
                        <li key={l} className="nav-item"><a className="nav-link" href="#">{l}</a></li>
                      ))}
                    </ul>
                  </li>

                  {/* Pages dropdown */}
                  <li className="nav-item submenu" onClick={e => { e.stopPropagation(); setPagesOpen(p => !p); setShopOpen(false); setAccountOpen(false); }}>
                    <a className="nav-link" href="#">Pages</a>
                    <ul className={`dropdown-menu${pagesOpen ? " show" : ""}`}>
                      {["Wishlist","Cart","Checkout","About Us","Testimonials","FAQs"].map(l => (
                        <li key={l} className="nav-item"><a className="nav-link" href="#">{l}</a></li>
                      ))}
                    </ul>
                  </li>

                  <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
                </ul>
              </div>

              <div className="header-contact-info">
                <ul>
                  <li><img src="/petmart/icon-phone-white.svg" alt="" /><a href="tel:123456789">+91 - 123 456 789</a></li>
                  <li><img src="/petmart/icon-mail-white.svg" alt="" /><a href="mailto:support@domain.com">support@domain.com</a></li>
                </ul>
              </div>
            </div>

            {/* Hamburger */}
            <div
              className={`navbar-toggle${mobileMenuOpen ? " open" : ""}`}
              onClick={() => setMobileMenuOpen(p => !p)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
