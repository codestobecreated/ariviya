"use client";
import React from "react";
import { BLOG_POSTS } from "../data/petmartData";

export default function OurBlog() {
  const delays = ["0s", "0.2s", "0.4s"];

  return (
    <div className="our-blog" id="blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-xl-12">
            <div className="section-title section-title-center">
              <span className="section-sub-title wow fadeInUp">Latest Blog</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Helpful Guides For Pet Owners
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="post-item-list">
              {BLOG_POSTS.map((post, idx) => (
                <div
                  className="post-item wow fadeInUp"
                  data-wow-delay={delays[idx] || "0s"}
                  key={post.id}
                >
                  <div className="post-featured-image">
                    <a href="#" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src={`/petmart/${post.image}`} alt={post.title} />
                      </figure>
                    </a>
                  </div>
                  <div className="post-item-body">
                    <div className="post-item-meta">
                      <ul>
                        <li>{post.date}</li>
                      </ul>
                    </div>
                    <div className="post-item-content">
                      <h2>
                        <a href="#">{post.title}</a>
                      </h2>
                    </div>
                    <div className="post-item-btn">
                      <a href="#" className="readmore-btn">
                        Read More
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
