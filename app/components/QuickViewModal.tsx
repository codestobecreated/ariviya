"use client";

import React, { useState } from "react";
import { Product } from "../data/petmartData";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onAddToWishlist: (product: Product) => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onAddToWishlist,
}: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="quickview-overlay" onClick={onClose}>
      <div
        className="quickview-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="quickview-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="quickview-grid">
          <div className="quickview-image">
            <img src={`/petmart/${product.image}`} alt={product.title} />
          </div>

          <div className="quickview-details">
            <span className="product-rating">{"★".repeat(product.rating)}</span>
            <h2 className="product-title">{product.title}</h2>
            <div className="product-price-box">
              <span className="current-price">{product.price}</span>
              <span className="old-price">{product.originalPrice}</span>
            </div>

            <p className="product-desc">
              {product.description ||
                "Premium quality pet care essential crafted with safe, high-grade materials to keep your pets happy, active, and thriving."}
            </p>

            <div className="quickview-actions">
              <div className="quantity-selector">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button type="button" onClick={() => setQuantity((q) => q + 1)}>
                  +
                </button>
              </div>

              <button
                type="button"
                className="btn-default btn-highlighted"
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
              >
                <span>Add to Cart</span>
              </button>

              <button
                type="button"
                className="btn-default btn-border"
                onClick={() => {
                  onAddToWishlist(product);
                }}
              >
                <span>Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
