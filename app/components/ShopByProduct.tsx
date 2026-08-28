"use client";
import React from "react";
import { PRODUCTS, Product } from "../data/petmartData";

interface Props {
  onAddToCart: (p: Product) => void;
  onAddToWishlist: (p: Product) => void;
  onQuickView: (p: Product) => void;
}

export default function ShopByProduct({ onAddToCart, onAddToWishlist, onQuickView }: Props) {
  const delays = ["0s", "0.2s", "0.4s", "0.6s"];

  return (
    <div className="our-products" id="products">
      <div className="container">
        <div className="row section-row">
          <div className="col-xl-12">
            <div className="section-title section-title-center">
              <span className="section-sub-title wow fadeInUp">Shop by Product</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Best Products For Happy Pets
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="product-item-list">
              {PRODUCTS.map((prod, idx) => (
                <div
                  className="product-item wow fadeInUp"
                  data-wow-delay={delays[idx] || "0s"}
                  key={prod.id}
                >
                  <div className="product-item-header">
                    <div className="product-item-image">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          onQuickView(prod);
                        }}
                      >
                        <figure>
                          <img src={`/petmart/${prod.image}`} alt={prod.title} />
                        </figure>
                      </a>
                    </div>
                    <div className="product-item-action">
                      <ul>
                        <li>
                          <button
                            type="button"
                            className="btn-icon-action"
                            title="Add to Cart"
                            onClick={() => onAddToCart(prod)}
                          >
                            <img src="/petmart/icon-cart-primary.svg" alt="Cart" />
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="btn-icon-action"
                            title="Quick View"
                            onClick={() => onQuickView(prod)}
                          >
                            <img src="/petmart/icon-preview.svg" alt="Preview" />
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="btn-icon-action"
                            title="Wishlist"
                            onClick={() => onAddToWishlist(prod)}
                          >
                            <img src="/petmart/icon-wishlist-primary.svg" alt="Wishlist" />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="product-item-body">
                    <div className="product-item-content">
                      <span className="product-item-rating">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </span>
                      <h2 className="product-item-title">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            onQuickView(prod);
                          }}
                        >
                          {prod.title}
                        </a>
                      </h2>
                    </div>
                    <div className="product-item-price">
                      <h3>
                        {prod.price} <span>{prod.originalPrice}</span>
                      </h3>
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
