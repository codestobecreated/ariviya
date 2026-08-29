export const petmartHtml = `<!-- Preloader Start -->
<div class="preloader">
  <div class="loading-container">
    <div class="loading"></div>
    <div id="loading-icon"><img src="/images/Ariviya.png" alt="Ariviya Logo" /></div>
  </div>
</div>
<!-- Preloader End -->

<!-- Header Start -->
<header class="main-header">
  <div class="header-sticky">
    <nav class="navbar navbar-expand-lg">
      <div class="header-action-box">
        <!-- Logo Start -->
        <a class="navbar-brand" href="#">
          <img src="/images/Ariviya.png" alt="Ariviya Logo" style="height:80px;width:auto;" />
        </a>
        <!-- Logo End -->

        <!-- Header Search Form Box Start -->
        <div class="header-search-form-box">
          <!-- Header Search Form Start -->
          <form
            class="header-search-form"
            id="headerForm"
            action="#"
            method="POST"
          >
            <div class="form-group">
              <input
                type="text"
                name="product"
                class="form-control"
                placeholder="Search By Products..."
                required
              />
              <button
                type="submit"
                class="header-search-btn"
                aria-label="Search"
              >
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <circle cx="11" cy="11" r="7.5" />
                  <path d="m16.5 16.5 5 5" />
                </svg>
              </button>
            </div>
          </form>
          <!-- Header Search Form End -->
        </div>
        <!-- Header Search Form Box End -->

        <!-- Header Action Details Start -->
        <div class="header-action-details mobile-hide">
          <ul>
            <li>
              <a href="#"
                ><img src="/images/icon-user-primary.svg" alt="" />Account</a
              >
            </li>
            <li>
              <a href="#"
                ><img
                  src="/images/icon-wishlist-primary.svg"
                  alt=""
                />Wishlist</a
              >
            </li>
            <li>
              <a href="#"
                ><img src="/images/icon-cart-primary.svg" alt="" />Cart</a
              >
            </li>
          </ul>
        </div>
        <!-- Header Action Details End -->
      </div>

      <!-- Main Menu Start -->
      <div class="main-menu">
        <div class="collapse navbar-collapse">
          <div class="nav-menu-wrapper">
            <ul class="navbar-nav mr-auto" id="menu">
              <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
              <li class="nav-item mega-menu submenu position-static">
                <a class="nav-link" href="#"
                  >Shop
                  <span class="nav-chevron" aria-hidden="true"
                    ><svg viewBox="0 0 12 7" focusable="false">
                      <path d="M1 1l5 5 5-5" /></svg></span
                ></a>
                <!-- Dropdown Menu Start -->
                <ul class="dropdown-menu">
                  <!-- Mega Menu Box Start -->
                  <li class="mega-menu-box">
                    <div class="mega-menu-links-box">
                      <!-- Mega Menu Link Start -->
                      <div class="mega-menu-link">
                        <h2>Categories</h2>
                        <ul>
                          <li><a href="#">Dog Essentials</a></li>
                          <li><a href="#">Cat Care Products</a></li>
                          <li><a href="#">Bird Supplies</a></li>
                          <li><a href="#">Fish & Aquarium</a></li>
                          <li><a href="#">Rabbit Accessories</a></li>
                          <li><a href="#">Small Pet Needs</a></li>
                        </ul>
                      </div>
                      <!-- Mega Menu Link End -->

                      <!-- Mega Menu Link Start -->
                      <div class="mega-menu-link">
                        <h2>Shop Features</h2>
                        <ul>
                          <li><a href="#">Best Sellers</a></li>
                          <li><a href="#">New Arrivals</a></li>
                          <li><a href="#">Featured Products</a></li>
                          <li><a href="#">Special Offers</a></li>
                          <li><a href="#">Pet Care Tips</a></li>
                          <li><a href="#">Customer Favorites</a></li>
                        </ul>
                      </div>
                      <!-- Mega Menu Link End -->
                    </div>

                    <!-- Mega Menu Items List Start -->
                    <div class="mega-menu-items-list">
                      <!-- Mega Menu Item Start -->
                      <div class="mega-menu-item">
                        <!-- Mega Menu Item Image Start -->
                        <div class="mega-menu-item-image">
                          <a href="#">
                            <figure class="image-anime">
                              <img
                                src="/images/mega-menu-item-image-1.jpg"
                                alt=""
                              />
                            </figure>
                          </a>
                        </div>
                        <!-- Mega Menu Item Image End -->

                        <!-- Mega Menu Item Content Start -->
                        <div class="mega-menu-item-content">
                          <h2><a href="#">Healthy Nutrition</a></h2>
                          <p>Premium meals for stronger and happier pets.</p>
                        </div>
                        <!-- Mega Menu Item Content End -->
                      </div>
                      <!-- Mega Menu Item End -->

                      <!-- Mega Menu Item Start -->
                      <div class="mega-menu-item">
                        <!-- Mega Menu Item Image Start -->
                        <div class="mega-menu-item-image">
                          <a href="#">
                            <figure class="image-anime">
                              <img
                                src="/images/mega-menu-item-image-2.jpg"
                                alt=""
                              />
                            </figure>
                          </a>
                        </div>
                        <!-- Mega Menu Item Image End -->

                        <!-- Mega Menu Item Content Start -->
                        <div class="mega-menu-item-content">
                          <h2><a href="#">Fun Playtime</a></h2>
                          <p>
                            Interactive toys that keep pets active and
                            entertained.
                          </p>
                        </div>
                        <!-- Mega Menu Item Content End -->
                      </div>
                      <!-- Mega Menu Item End -->

                      <!-- Mega Menu Item Start -->
                      <div class="mega-menu-item big-offer-box">
                        <!-- Mega Menu Item Image Start -->
                        <div class="mega-menu-item-image">
                          <figure>
                            <img
                              src="/images/mega-menu-item-image-3.jpg"
                              alt=""
                            />
                          </figure>
                        </div>
                        <!-- Mega Menu Item Image End -->

                        <!-- Mega Menu Item Content Start -->
                        <div class="mega-menu-item-content">
                          <span>-special offer-</span>
                          <h2>Big Sale</h2>
                          <h3>50% Off</h3>
                        </div>
                        <!-- Mega Menu Item Content End -->
                      </div>
                      <!-- Mega Menu Item End -->
                    </div>
                    <!-- Mega Menu Items List End -->
                  </li>
                  <!-- Mega Menu Box End -->
                </ul>
                <!-- Dropdown Menu End -->
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blog">Blog</a>
              </li>
              <li class="nav-item submenu">
                <a class="nav-link" href="#"
                  >My Account
                  <span class="nav-chevron" aria-hidden="true"
                    ><svg viewBox="0 0 12 7" focusable="false">
                      <path d="M1 1l5 5 5-5" /></svg></span
                ></a>
                <ul>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Login / Register</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Forgot Password</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">My Account</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">My Order</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">My Download</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item submenu">
                <a class="nav-link" href="#"
                  >Pages
                  <span class="nav-chevron" aria-hidden="true"
                    ><svg viewBox="0 0 12 7" focusable="false">
                      <path d="M1 1l5 5 5-5" /></svg></span
                ></a>
                <ul>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Wishlist</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Cart</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Checkout</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Order Received</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Testimonials</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">FAQs</a>
                  </li>
                  <li class="nav-item"><a class="nav-link" href="#">404</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
              <li>
                <span class="header-action-details desktop-hide">
                  <a href="#">Account</a>
                  <a href="#">Wishlist</a>
                  <a href="#">Cart</a>
                </span>
              </li>
            </ul>
          </div>
          <!-- Header Contact Info Start -->
          <div class="header-contact-info">
            <ul>
              <li>
                <img src="/images/icon-phone-white.svg" alt="" />
                <a href="tel:123456789">+91 - 123 456 789</a>
              </li>
              <li>
                <img src="/images/icon-mail-white.svg" alt="" />
                <a href="mailto:support@domain.com">support@domain.com</a>
              </li>
            </ul>
          </div>
          <!-- Header Contact Info End -->
        </div>
        <div class="navbar-toggle"></div>
      </div>
      <!-- Main Menu End -->
    </nav>
    <div class="responsive-menu"></div>
  </div>
</header>
<!-- Header End -->

<!-- Hero Section Start -->
<div class="hero">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6">
        <!-- Hero Contant Start -->
        <div class="hero-content">
          <!-- Section Title Start -->
          <div class="section-title">
            <span class="section-sub-title wow fadeInUp"
              >Everything Your Pets Need Daily</span
            >
            <h1 class="text-anime-style-3" data-cursor="-opaque">
              Save Up To 50% On Pet Essentials
            </h1>
            <p class="wow fadeInUp" data-wow-delay="0.2s">
              Discover premium pet products including food, toys, grooming
              essentials, and accessories designed to keep your pets healthy and
              happy every day.
            </p>
          </div>
          <!-- Section Title End -->

          <!-- Hero Content Button Start -->
          <div class="hero-content-btn wow fadeInUp" data-wow-delay="0.4s">
            <a href="#" class="btn-default btn-border"><span>Shop Now</span></a>
            <a href="#" class="btn-default"><span>Explore Collection</span></a>
          </div>
          <!-- Hero Content Button End -->
        </div>
        <!-- Hero Contant End -->
      </div>

      <div class="col-xl-6">
        <!-- Hero Image Start -->
        <div class="hero-image">
          <figure>
            <img src="/images/hero-image.png" alt="" />
          </figure>
        </div>
        <!-- Hero Image End -->
      </div>
    </div>
  </div>
</div>
<!-- Hero Section End -->

<!-- Our Category Section Start -->
<div class="our-category">
  <div class="container">
    <div class="row section-row">
      <div class="col-xl-12">
        <!-- Section Title Start -->
        <div class="section-title section-title-center">
          <span class="section-sub-title wow fadeInUp">Shop by Category</span>
          <h2 class="text-anime-style-3" data-cursor="-opaque">
            Best Products For Happy Pets
          </h2>
        </div>
        <!-- Section Title End -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <!-- Category Item List Start -->
        <div class="category-item-list">
          <!-- Category Item Start -->
          <div class="category-item wow fadeInUp">
            <div class="category-item-image">
              <a href="#">
                <figure>
                  <img src="/images/category-item-image-1.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="category-item-content">
              <h3><a href="#">Dogs</a></h3>
            </div>
          </div>
          <!-- Category Item End -->

          <!-- Category Item Start -->
          <div class="category-item wow fadeInUp" data-wow-delay="0.2s">
            <div class="category-item-image">
              <a href="#">
                <figure>
                  <img src="/images/category-item-image-2.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="category-item-content">
              <h3><a href="#">Cats</a></h3>
            </div>
          </div>
          <!-- Category Item End -->

          <!-- Category Item Start -->
          <div class="category-item wow fadeInUp" data-wow-delay="0.4s">
            <div class="category-item-image">
              <a href="#">
                <figure>
                  <img src="/images/category-item-image-3.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="category-item-content">
              <h3><a href="#">Birds</a></h3>
            </div>
          </div>
          <!-- Category Item End -->

          <!-- Category Item Start -->
          <div class="category-item wow fadeInUp" data-wow-delay="0.6s">
            <div class="category-item-image">
              <a href="#">
                <figure>
                  <img src="/images/category-item-image-4.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="category-item-content">
              <h3><a href="#">Rabbits</a></h3>
            </div>
          </div>
          <!-- Category Item End -->

          <!-- Category Item Start -->
          <div class="category-item wow fadeInUp" data-wow-delay="0.8s">
            <div class="category-item-image">
              <a href="#">
                <figure>
                  <img src="/images/category-item-image-5.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="category-item-content">
              <h3><a href="#">Hamsters</a></h3>
            </div>
          </div>
          <!-- Category Item End -->

          <!-- Category Item Start -->
          <div class="category-item wow fadeInUp" data-wow-delay="1s">
            <div class="category-item-image">
              <a href="#">
                <figure>
                  <img src="/images/category-item-image-6.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="category-item-content">
              <h3><a href="#">Fish</a></h3>
            </div>
          </div>
          <!-- Category Item End -->

          <!-- Category Item Start -->
          <div class="category-item wow fadeInUp" data-wow-delay="1.2s">
            <div class="category-item-image">
              <a href="#">
                <figure>
                  <img src="/images/category-item-image-7.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="category-item-content">
              <h3><a href="#">Ferrets</a></h3>
            </div>
          </div>
          <!-- Category Item End -->
        </div>
        <!-- Category Item List End -->
      </div>
    </div>
  </div>
</div>
<!-- Our Category Section End -->

<!-- Our Collection Section Start -->
<div class="our-collection">
  <div class="container">
    <div class="row section-row align-items-center">
      <div class="col-xl-6">
        <!-- Section Title Start -->
        <div class="section-title">
          <span class="section-sub-title wow fadeInUp">Shop by Store</span>
          <h2 class="text-anime-style-3" data-cursor="-opaque">
            Find Everything Pet Loves
          </h2>
        </div>
        <!-- Section Title End -->
      </div>

      <div class="col-xl-6">
        <!-- Section Button Start -->
        <div class="section-btn wow fadeInUp" data-wow-delay="0.2s">
          <a href="#" class="btn-default"><span>Explore More</span></a>
        </div>
        <!-- Section Button End -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <!-- Collection Item List Start -->
        <div class="collection-item-list">
          <!-- Collection Item Start -->
          <div class="collection-item wow fadeInUp">
            <div class="collection-item-image">
              <figure>
                <img src="/images/collection-item-image-1.jpg" alt="" />
              </figure>
            </div>
            <div class="collection-item-content">
              <h3><a href="#">Paw Style Corner</a></h3>
              <span>10% Off</span>
            </div>
          </div>
          <!-- Collection Item End -->

          <!-- Collection Item Start -->
          <div class="collection-item wow fadeInUp" data-wow-delay="0.2s">
            <div class="collection-item-image">
              <figure>
                <img src="/images/collection-item-image-2.jpg" alt="" />
              </figure>
            </div>
            <div class="collection-item-content">
              <h3><a href="#">Adventure Hub</a></h3>
              <span>20% Off</span>
            </div>
          </div>
          <!-- Collection Item End -->

          <!-- Collection Item Start -->
          <div class="collection-item wow fadeInUp" data-wow-delay="0.4s">
            <div class="collection-item-image">
              <figure>
                <img src="/images/collection-item-image-3.jpg" alt="" />
              </figure>
            </div>
            <div class="collection-item-content">
              <h3><a href="#">Premium Essentials</a></h3>
              <span>15% Off</span>
            </div>
          </div>
          <!-- Collection Item End -->

          <!-- Collection Item Start -->
          <div class="collection-item wow fadeInUp" data-wow-delay="0.6s">
            <div class="collection-item-image">
              <figure>
                <img src="/images/collection-item-image-4.jpg" alt="" />
              </figure>
            </div>
            <div class="collection-item-content">
              <h3><a href="#">Gentle Pet Care</a></h3>
              <span>05% Off</span>
            </div>
          </div>
          <!-- Collection Item End -->
        </div>
        <!-- Collection Item List End -->
      </div>
    </div>
  </div>
</div>
<!-- Our Collection Section End -->

<!-- Nutrition Essentials Section Start -->
<div class="nutrition-essentials">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <!-- Nutrition Essentials Box Start -->
        <div class="nutrition-essentials-box">
          <!-- Nutrition Essentials Highlighted Item Start -->
          <div class="nutrition-essentials-item highlighted-item wow fadeInUp">
            <div class="nutrition-essentials-item-image">
              <figure>
                <img
                  src="/images/nutrition-essentials-highlighted-item-image.jpg"
                  alt=""
                />
              </figure>
            </div>
            <div class="nutrition-essentials-item-body">
              <div class="nutrition-essentials-item-content">
                <h3>Healthy care starts with the right nutrition.</h3>
                <p>
                  Give your pets the nourishment they deserve premium pet food,
                  healthy treats, and supplements. Support their growth, energy.
                </p>
              </div>
              <div class="nutrition-essentials-item-btn">
                <a href="#" class="btn-default btn-border"
                  ><span>Buy Pet Food</span></a
                >
              </div>
            </div>
          </div>
          <!-- Nutrition Essentials Highlighted Item End -->

          <!-- Nutrition Essentials Item List Start -->
          <div class="nutrition-essentials-item-list">
            <!-- Nutrition Essentials Item Start -->
            <div
              class="nutrition-essentials-item wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="nutrition-essentials-item-image">
                <figure>
                  <img
                    src="/images/nutrition-essentials-item-image-1.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div class="nutrition-essentials-item-body">
                <div class="nutrition-essentials-item-content">
                  <h3>Delicious Treats Pets Crave Every Day</h3>
                </div>
                <div class="nutrition-essentials-item-btn">
                  <a href="#" class="btn-default btn-border"
                    ><span>Buy Pet Food</span></a
                  >
                </div>
              </div>
            </div>
            <!-- Nutrition Essentials Item End -->

            <!-- Nutrition Essentials Item Start -->
            <div
              class="nutrition-essentials-item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div class="nutrition-essentials-item-image">
                <figure>
                  <img
                    src="/images/nutrition-essentials-item-image-2.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div class="nutrition-essentials-item-body">
                <div class="nutrition-essentials-item-content">
                  <h3>Daily wellness every furry friend</h3>
                </div>
                <div class="nutrition-essentials-item-btn">
                  <a href="#" class="btn-default btn-border"
                    ><span>Buy Pet Food</span></a
                  >
                </div>
              </div>
            </div>
            <!-- Nutrition Essentials Item End -->
          </div>
          <!-- Nutrition Essentials Item List End -->
        </div>
        <!-- Nutrition Essentials Box End -->
      </div>
    </div>
  </div>
</div>
<!-- Nutrition Essentials Section End -->

<!-- Our Products Section Start -->
<div class="our-products">
  <div class="container">
    <div class="row section-row">
      <div class="col-xl-12">
        <!-- Section Title Start -->
        <div class="section-title section-title-center">
          <span class="section-sub-title wow fadeInUp">Shop by Product</span>
          <h2 class="text-anime-style-3" data-cursor="-opaque">
            Best Products For Happy Pets
          </h2>
        </div>
        <!-- Section Title End -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <!-- Product Item List Start -->
        <div class="product-item-list">
          <!-- Product Item Start -->
          <div class="product-item wow fadeInUp">
            <div class="product-item-header">
              <div class="product-item-image">
                <a href="#">
                  <figure>
                    <img src="/images/product-image-1.jpg" alt="" />
                  </figure>
                </a>
              </div>
              <div class="product-item-action">
                <ul>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-cart-primary.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-preview.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-wishlist-primary.svg" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-item-body">
              <div class="product-item-content">
                <span class="product-item-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <h2 class="product-item-title">
                  <a href="#">Puppy Care Food</a>
                </h2>
              </div>
              <div class="product-item-price">
                <h3>$15.00 <span>$25.00</span></h3>
              </div>
            </div>
          </div>
          <!-- Product Item End -->

          <!-- Product Item Start -->
          <div class="product-item wow fadeInUp" data-wow-delay="0.2s">
            <div class="product-item-header">
              <div class="product-item-image">
                <a href="#">
                  <figure>
                    <img src="/images/product-image-2.jpg" alt="" />
                  </figure>
                </a>
              </div>
              <div class="product-item-action">
                <ul>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-cart-primary.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-preview.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-wishlist-primary.svg" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-item-body">
              <div class="product-item-content">
                <span class="product-item-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <h2 class="product-item-title">
                  <a href="#">Smart Feeding Bowl</a>
                </h2>
              </div>
              <div class="product-item-price">
                <h3>$18.00 <span>$20.00</span></h3>
              </div>
            </div>
          </div>
          <!-- Product Item End -->

          <!-- Product Item Start -->
          <div class="product-item wow fadeInUp" data-wow-delay="0.4s">
            <div class="product-item-header">
              <div class="product-item-image">
                <a href="#">
                  <figure>
                    <img src="/images/product-image-3.jpg" alt="" />
                  </figure>
                </a>
              </div>
              <div class="product-item-action">
                <ul>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-cart-primary.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-preview.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-wishlist-primary.svg" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-item-body">
              <div class="product-item-content">
                <span class="product-item-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <h2 class="product-item-title">
                  <a href="#">Pet Care Shampoo</a>
                </h2>
              </div>
              <div class="product-item-price">
                <h3>$24.00 <span>$30.00</span></h3>
              </div>
            </div>
          </div>
          <!-- Product Item End -->

          <!-- Product Item Start -->
          <div class="product-item wow fadeInUp" data-wow-delay="0.6s">
            <div class="product-item-header">
              <div class="product-item-image">
                <a href="#">
                  <figure>
                    <img src="/images/product-image-4.jpg" alt="" />
                  </figure>
                </a>
              </div>
              <div class="product-item-action">
                <ul>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-cart-primary.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-preview.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="/images/icon-wishlist-primary.svg" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-item-body">
              <div class="product-item-content">
                <span class="product-item-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <h2 class="product-item-title">
                  <a href="#">Soft Puppy Blanket</a>
                </h2>
              </div>
              <div class="product-item-price">
                <h3>$18.00 <span>$22.00</span></h3>
              </div>
            </div>
          </div>
          <!-- Product Item End -->
        </div>
        <!-- Product Item List End -->
      </div>
    </div>
  </div>
</div>
<!-- Our Products Section End -->

<!-- Our Guidance Section Start -->
<div class="our-guidance dark-section parallaxie">
  <div class="container">
    <div class="row">
      <div class="col-xl-6 col-lg-7">
        <!-- Our Guidance Content Start -->
        <div class="our-guidance-content">
          <!-- Section Title Start -->
          <div class="section-title">
            <span class="section-sub-title wow fadeInUp">Pet Care Guide</span>
            <h2 class="text-anime-style-3" data-cursor="-opaque">
              Fun Moments With Cute Pets
            </h2>
            <p class="wow fadeInUp" data-wow-delay="0.2s">
              Discover helpful pet care videos, grooming tutorials, training
              guides, and fun activities designed to keep your pets healthy,
              active, and happy every day.
            </p>
          </div>
          <!-- Section Title End -->

          <!-- Our Guidance List Start -->
          <div class="our-guidance-list wow fadeInUp" data-wow-delay="0.4s">
            <ul>
              <li>Premium Quality Pet Products</li>
              <li>Fast & Reliable Delivery</li>
              <li>Affordable Prices Every Day</li>
              <li>Special Offers & Discounts</li>
            </ul>
          </div>
          <!-- Our Guidance List End -->

          <!-- Our Guidance Content Body Start -->
          <div
            class="our-guidance-content-body wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <!-- Our Guidance Button Start -->
            <div class="our-guidance-btn">
              <a href="#" class="btn-default btn-highlighted"
                ><span>Shop Now</span></a
              >
            </div>
            <!-- Our Guidance Button End -->

            <!-- Our Guidance Delivery Body Start -->
            <div class="our-guidance-delivery-box">
              <div class="icon-box">
                <img src="/images/icon-our-guidance-delivery.svg" alt="" />
              </div>
              <div class="our-guidance-delivery-content">
                <p>For Free Delivery</p>
                <h3><a href="tel:123456789">+(00) - 123 456 789</a></h3>
              </div>
            </div>
            <!-- Our Guidance Delivery Body End -->
          </div>
          <!-- Our Guidance Content Body End -->
        </div>
        <!-- Our Guidance Content End -->
      </div>
    </div>
  </div>
</div>
<!-- Our Guidance Section End -->

<!-- Our Featured Products Section Start -->
<div class="our-featured-products">
  <div class="container">
    <div class="row section-row">
      <div class="col-xl-12">
        <!-- Section Title Start -->
        <div class="section-title section-title-center">
          <span class="section-sub-title wow fadeInUp">Shop by Product</span>
          <h2 class="text-anime-style-3" data-cursor="-opaque">
            Best Products For Happy Pets
          </h2>
        </div>
        <!-- Section Title End -->
      </div>
    </div>

    <div class="row">
      <div class="col-xl-12">
        <!-- Our Featured Content Box Start -->
        <div class="our-featured-content-box">
          <!-- Featured Offer Box Start -->
          <div class="featured-offer-box wow fadeInUp">
            <!-- Featured Offer Image Start -->
            <div class="featured-offer-image">
              <figure>
                <img src="/images/featured-offer-image.jpg" alt="" />
              </figure>
            </div>
            <!-- Featured Offer Image End -->

            <!-- Featured Offer Content Start -->
            <div class="featured-offer-content">
              <!-- Section Title Start -->
              <div class="section-title section-title-center">
                <span class="section-sub-title">Up To 50% Off</span>
                <h2>Big Savings for Your Best Friend</h2>
                <p>
                  Enjoy exclusive discounts on pet food, toys, grooming, and
                  accessories. Quality pet care products.
                </p>
              </div>
              <!-- Section Title End -->

              <!-- Featured Offer Button Start -->
              <div class="featured-offer-btn">
                <a href="#" class="btn-default"><span>Shop Pet Food</span></a>
              </div>
              <!-- Featured Offer Button End -->
            </div>
            <!-- Featured Offer Content End -->
          </div>
          <!-- Featured Offer Box End -->

          <!-- Featured Product Item List Start -->
          <div class="product-item-list featured-product-item-list">
            <!-- Product Item Start -->
            <div class="product-item wow fadeInUp" data-wow-delay="0.2s">
              <div class="product-item-header">
                <div class="product-item-image">
                  <a href="#">
                    <figure>
                      <img src="/images/featured-product-image-1.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div class="product-item-action">
                  <ul>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-cart-primary.svg" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-preview.svg" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-wishlist-primary.svg" alt=""
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="product-item-body">
                <div class="product-item-content">
                  <span class="product-item-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <h2 class="product-item-title">
                    <a href="#">Puppy Care Food</a>
                  </h2>
                </div>
                <div class="product-item-price">
                  <h3>$15.00 <span>$25.00</span></h3>
                </div>
              </div>
            </div>
            <!-- Product Item End -->

            <!-- Product Item Start -->
            <div class="product-item wow fadeInUp" data-wow-delay="0.4s">
              <div class="product-item-header">
                <div class="product-item-image">
                  <a href="#">
                    <figure>
                      <img src="/images/featured-product-image-2.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div class="product-item-action">
                  <ul>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-cart-primary.svg" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-preview.svg" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-wishlist-primary.svg" alt=""
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="product-item-body">
                <div class="product-item-content">
                  <span class="product-item-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <h2 class="product-item-title">
                    <a href="#">Cat Scratching Tree</a>
                  </h2>
                </div>
                <div class="product-item-price">
                  <h3>$35.00 <span>$40.00</span></h3>
                </div>
              </div>
            </div>
            <!-- Product Item End -->

            <!-- Product Item Start -->
            <div class="product-item wow fadeInUp" data-wow-delay="0.6s">
              <div class="product-item-header">
                <div class="product-item-image">
                  <a href="#">
                    <figure>
                      <img src="/images/featured-product-image-3.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div class="product-item-action">
                  <ul>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-cart-primary.svg" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-preview.svg" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-wishlist-primary.svg" alt=""
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="product-item-body">
                <div class="product-item-content">
                  <span class="product-item-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <h2 class="product-item-title">
                    <a href="#">HappyTail Dog Toy</a>
                  </h2>
                </div>
                <div class="product-item-price">
                  <h3>$24.00 <span>$30.00</span></h3>
                </div>
              </div>
            </div>
            <!-- Product Item End -->

            <!-- Product Item Start -->
            <div class="product-item wow fadeInUp" data-wow-delay="0.8s">
              <div class="product-item-header">
                <div class="product-item-image">
                  <a href="#">
                    <figure>
                      <img src="/images/featured-product-image-4.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div class="product-item-action">
                  <ul>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-cart-primary.svg" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-preview.svg" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="/images/icon-wishlist-primary.svg" alt=""
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="product-item-body">
                <div class="product-item-content">
                  <span class="product-item-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <h2 class="product-item-title">
                    <a href="#">Tiny Hamster House</a>
                  </h2>
                </div>
                <div class="product-item-price">
                  <h3>$18.00 <span>$22.00</span></h3>
                </div>
              </div>
            </div>
            <!-- Product Item End -->
          </div>
          <!-- Featured Product Item List End -->
        </div>
        <!-- Our Featured Content Box End -->
      </div>
    </div>
  </div>
</div>
<!-- Our Featured Products Section End -->

<!-- Our Testimonials Section Start -->
<div class="our-testimonials">
  <div class="container">
    <div class="row section-row align-items-center">
      <div class="col-md-6">
        <!-- Section Title Start -->
        <div class="section-title">
          <span class="section-sub-title wow fadeInUp">Happy Pet Parents</span>
          <h2 class="text-anime-style-3" data-cursor="-opaque">
            Real Reviews Real Trust
          </h2>
        </div>
        <!-- Section Title End -->
      </div>

      <div class="col-md-6">
        <!-- Google Review Box Start -->
        <div class="google-review-box wow fadeInUp" data-wow-delay="0.2s">
          <!-- Google Review Header Start -->
          <div class="google-review-header">
            <div class="icon-box">
              <img src="/images/google-logo.svg" alt="" />
            </div>
            <div class="google-review-title">
              <h3>Reviews</h3>
            </div>
          </div>
          <!-- Google Review Header End -->

          <!-- Google Review Content Start -->
          <div class="google-review-content">
            <h2><span class="counter">4.7</span></h2>
            <span class="google-review-rating">
              <i class="fa fa-solid fa-star"></i>
              <i class="fa fa-solid fa-star"></i>
              <i class="fa fa-solid fa-star"></i>
              <i class="fa fa-solid fa-star"></i>
              <i class="fa fa-solid fa-star"></i>
            </span>
            <p>(11,152,120)</p>
          </div>
          <!-- Google Review Content End -->
        </div>
        <!-- Google Review Box End -->
      </div>
    </div>

    <div class="row">
      <div class="col-xl-12">
        <!-- Testimonial Slider Start -->
        <div class="testimonial-slider">
          <div class="swiper">
            <div class="swiper-wrapper" data-cursor-text="Drag">
              <!-- Testimonial Slide Start -->
              <div class="swiper-slide">
                <!-- Testimonial Item Start -->
                <div class="testimonial-item">
                  <div class="testimonial-item-content-box">
                    <div class="testimonial-item-rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="testimonial-item-content">
                      <p>
                        "The pet food quality is amazing, and my dog absolutely
                        loves it. Fast delivery and great customer service every
                        time!"
                      </p>
                    </div>
                  </div>
                  <div class="testimonial-item-author">
                    <div class="testimonial-author-image">
                      <figure class="image-anime">
                        <img src="/images/author-1.jpg" alt="" />
                      </figure>
                    </div>
                    <div class="testimonial-author-content">
                      <h2>Sophia Miller</h2>
                      <p>Pet Owner</p>
                    </div>
                  </div>
                </div>
                <!-- Testimonial Item End -->
              </div>
              <!-- Testimonial Slide End -->

              <!-- Testimonial Slide Start -->
              <div class="swiper-slide">
                <!-- Testimonial Item Start -->
                <div class="testimonial-item">
                  <div class="testimonial-item-content-box">
                    <div class="testimonial-item-rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="testimonial-item-content">
                      <p>
                        "The pet food quality is amazing, and my dog absolutely
                        loves it. Fast delivery and great customer service every
                        time!"
                      </p>
                    </div>
                  </div>
                  <div class="testimonial-item-author">
                    <div class="testimonial-author-image">
                      <figure class="image-anime">
                        <img src="/images/author-2.jpg" alt="" />
                      </figure>
                    </div>
                    <div class="testimonial-author-content">
                      <h2>Daniel Carter</h2>
                      <p>Dog Trainer</p>
                    </div>
                  </div>
                </div>
                <!-- Testimonial Item End -->
              </div>
              <!-- Testimonial Slide End -->

              <!-- Testimonial Slide Start -->
              <div class="swiper-slide">
                <!-- Testimonial Item Start -->
                <div class="testimonial-item">
                  <div class="testimonial-item-content-box">
                    <div class="testimonial-item-rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="testimonial-item-content">
                      <p>
                        "The pet food quality is amazing, and my dog absolutely
                        loves it. Fast delivery and great customer service every
                        time!"
                      </p>
                    </div>
                  </div>
                  <div class="testimonial-item-author">
                    <div class="testimonial-author-image">
                      <figure class="image-anime">
                        <img src="/images/author-3.jpg" alt="" />
                      </figure>
                    </div>
                    <div class="testimonial-author-content">
                      <h2>Emma Wilson</h2>
                      <p>Animal Specialist</p>
                    </div>
                  </div>
                </div>
                <!-- Testimonial Item End -->
              </div>
              <!-- Testimonial Slide End -->

              <!-- Testimonial Slide Start -->
              <div class="swiper-slide">
                <!-- Testimonial Item Start -->
                <div class="testimonial-item">
                  <div class="testimonial-item-content-box">
                    <div class="testimonial-item-rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="testimonial-item-content">
                      <p>
                        "The pet food quality is amazing, and my dog absolutely
                        loves it. Fast delivery and great customer service every
                        time!"
                      </p>
                    </div>
                  </div>
                  <div class="testimonial-item-author">
                    <div class="testimonial-author-image">
                      <figure class="image-anime">
                        <img src="/images/author-4.jpg" alt="" />
                      </figure>
                    </div>
                    <div class="testimonial-author-content">
                      <h2>James Anderson</h2>
                      <p>Pet Groomer</p>
                    </div>
                  </div>
                </div>
                <!-- Testimonial Item End -->
              </div>
              <!-- Testimonial Slide End -->

              <!-- Testimonial Slide Start -->
              <div class="swiper-slide">
                <!-- Testimonial Item Start -->
                <div class="testimonial-item">
                  <div class="testimonial-item-content-box">
                    <div class="testimonial-item-rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="testimonial-item-content">
                      <p>
                        "The pet food quality is amazing, and my dog absolutely
                        loves it. Fast delivery and great customer service every
                        time!"
                      </p>
                    </div>
                  </div>
                  <div class="testimonial-item-author">
                    <div class="testimonial-author-image">
                      <figure class="image-anime">
                        <img src="/images/author-5.jpg" alt="" />
                      </figure>
                    </div>
                    <div class="testimonial-author-content">
                      <h2>Guy Hawkins</h2>
                      <p>Pet Owner</p>
                    </div>
                  </div>
                </div>
                <!-- Testimonial Item End -->
              </div>
              <!-- Testimonial Slide End -->
            </div>
          </div>
        </div>
        <!-- Testimonial Slider End -->
      </div>
    </div>
  </div>
</div>
<!-- Our Testimonials Section End -->

<!-- Smart Savings Section Start -->
<div class="smart-savings">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <!-- Smart Savings Item List Start -->
        <div class="smart-savings-item-list">
          <!-- Smart Savings Item Start -->
          <div class="smart-savings-item wow fadeInUp">
            <div class="smart-savings-item-image">
              <figure>
                <img src="/images/smart-savings-item-image-1.jpg" alt="" />
              </figure>
            </div>
            <div class="smart-savings-item-body">
              <div class="smart-savings-item-tag">
                <p>Saving</p>
                <h3><span class="counter">20</span>%</h3>
              </div>
              <div class="smart-savings-item-content-box">
                <div class="smart-savings-item-content">
                  <p>Back in Stock</p>
                  <h3><a href="#">Adored by Dogs</a></h3>
                </div>
                <div class="smart-savings-item-btn">
                  <a href="#" class="btn-default btn-border"
                    ><span>Shop Now</span></a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Smart Savings Item End -->

          <!-- Smart Savings Item Start -->
          <div class="smart-savings-item wow fadeInUp" data-wow-delay="0.2s">
            <div class="smart-savings-item-image">
              <figure>
                <img src="/images/smart-savings-item-image-2.jpg" alt="" />
              </figure>
            </div>
            <div class="smart-savings-item-body">
              <div class="smart-savings-item-tag">
                <p>Saving</p>
                <h3><span class="counter">30</span>%</h3>
              </div>
              <div class="smart-savings-item-content-box">
                <div class="smart-savings-item-content">
                  <p>Adored By Dog</p>
                  <h3><a href="#">Fresh Dog Food</a></h3>
                </div>
                <div class="smart-savings-item-btn">
                  <a href="#" class="btn-default btn-border"
                    ><span>Shop Now</span></a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Smart Savings Item End -->
        </div>
        <!-- Smart Savings Item List End -->
      </div>
    </div>
  </div>
</div>
<!-- Smart Savings Section End -->

<!-- Limited Offer Section Start -->
<div class="limited-offer dark-section parallaxie">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <!-- Limited Offer Box Start -->
        <div class="limited-offer-box wow fadeInUp">
          <!-- Limited Offer Header Start -->
          <div class="limited-offer-header">
            <!-- Section Title Start -->
            <div class="section-title">
              <h2 class="text-anime-style-2" data-cursor="-opaque">
                Get 10% off With Code: WOOFY10
              </h2>
            </div>
            <!-- Section Title End -->

            <!-- Limited Offer Countdown Start -->
            <div class="limited-offer-countdown">
              <div class="countdown" data-date="2026-06-22 23:59:59">
                <div class="counter-box">
                  <span class="days">00</span>
                  <p>Days</p>
                </div>
                <div class="counter-box">
                  <span class="hours">00</span>
                  <p>Hours</p>
                </div>
                <div class="counter-box">
                  <span class="minutes">00</span>
                  <p>Minutes</p>
                </div>
                <div class="counter-box">
                  <span class="seconds">00</span>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
            <!-- Limited Offer Countdown End -->
          </div>
          <!-- Limited Offer Header End -->

          <!-- Limited Offer Body Start -->
          <div class="limited-offer-body">
            <!-- Limited Offer Content Start -->
            <div class="limited-offer-content">
              <p>
                Discover premium products for dogs, cats, birds, fish, and small
                pets with carefully selected essentials
              </p>
            </div>
            <!-- Limited Offer Content End -->

            <!-- Limited Offer Button Start -->
            <div class="limited-offer-btn">
              <a href="#" class="btn-default btn-highlighted"
                ><span>Shop Now</span></a
              >
            </div>
            <!-- Limited Offer Button End -->
          </div>
          <!-- Limited Offer Body End -->
        </div>
        <!-- Limited Offer Box End -->
      </div>
    </div>
  </div>
</div>
<!-- Limited Offer Section End -->

<!-- Our Brands Section Start -->
<div class="our-brands">
  <div class="container">
    <div class="row section-row">
      <div class="col-lg-12">
        <!-- Section Title Start -->
        <div class="section-title section-title-center">
          <span class="section-sub-title wow fadeInUp">Pet Brands</span>
          <h2 class="text-anime-style-3" data-cursor="-opaque">
            Top Quality Brands
          </h2>
        </div>
        <!-- Section Title End -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <!-- Our Brands Item List Start -->
        <div class="our-brands-item-list">
          <!-- Our Brands Item Start -->
          <div class="our-brands-item wow fadeInUp">
            <div class="our-brands-item-image">
              <a href="#">
                <figure>
                  <img src="/images/our-brands-item-image-1.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="our-brands-item-content">
              <p>Up To <span>20% Off</span></p>
            </div>
          </div>
          <!-- Our Brands Item End -->

          <!-- Our Brands Item Start -->
          <div class="our-brands-item wow fadeInUp" data-wow-delay="0.2s">
            <div class="our-brands-item-image">
              <a href="#">
                <figure>
                  <img src="/images/our-brands-item-image-2.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="our-brands-item-content">
              <p>Up To <span>30% Off</span></p>
            </div>
          </div>
          <!-- Our Brands Item End -->

          <!-- Our Brands Item Start -->
          <div class="our-brands-item wow fadeInUp" data-wow-delay="0.4s">
            <div class="our-brands-item-image">
              <a href="#">
                <figure>
                  <img src="/images/our-brands-item-image-3.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="our-brands-item-content">
              <p>Up To <span>10% Off</span></p>
            </div>
          </div>
          <!-- Our Brands Item End -->

          <!-- Our Brands Item Start -->
          <div class="our-brands-item wow fadeInUp" data-wow-delay="0.6s">
            <div class="our-brands-item-image">
              <a href="#">
                <figure>
                  <img src="/images/our-brands-item-image-4.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="our-brands-item-content">
              <p>Up To <span>8% Off</span></p>
            </div>
          </div>
          <!-- Our Brands Item End -->

          <!-- Our Brands Item Start -->
          <div class="our-brands-item wow fadeInUp" data-wow-delay="0.8s">
            <div class="our-brands-item-image">
              <a href="#">
                <figure>
                  <img src="/images/our-brands-item-image-5.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="our-brands-item-content">
              <p>Up To <span>25% Off</span></p>
            </div>
          </div>
          <!-- Our Brands Item End -->

          <!-- Our Brands Item Start -->
          <div class="our-brands-item wow fadeInUp" data-wow-delay="1s">
            <div class="our-brands-item-image">
              <a href="#">
                <figure>
                  <img src="/images/our-brands-item-image-6.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="our-brands-item-content">
              <p>Up To <span>28% Off</span></p>
            </div>
          </div>
          <!-- Our Brands Item End -->
        </div>
        <!-- Our Brands Item List End -->
      </div>
    </div>
  </div>
</div>
<!-- Our Brands Section End -->

<!-- Latest Updates Section Start -->
<div class="latest-updates">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <!-- Latest Updates Item List Start -->
        <div class="latest-update-item-list">
          <!-- Latest Updates Item Start -->
          <div class="latest-update-item dark-section wow fadeInUp">
            <div class="latest-update-item-image">
              <figure>
                <img src="/images/latest-update-item-image-1.jpg" alt="" />
              </figure>
            </div>
            <div class="latest-update-item-body">
              <div class="section-title">
                <span class="section-sub-title">Featured</span>
                <h2>Up To 50% Off Pet Food</h2>
              </div>
              <div class="latest-update-item-btn">
                <a href="#" class="btn-default btn-border"
                  ><span>Shop Now</span></a
                >
              </div>
            </div>
          </div>
          <!-- Latest Updates Item End -->

          <!-- Latest Updates Item Start -->
          <div
            class="latest-update-item dark-section wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="latest-update-item-image">
              <figure>
                <img src="/images/latest-update-item-image-2.jpg" alt="" />
              </figure>
            </div>
            <div class="latest-update-item-body">
              <div class="section-title">
                <span class="section-sub-title">New Trending</span>
                <h2>Buy One Get One Free</h2>
              </div>
              <div class="latest-update-item-btn">
                <a href="#" class="btn-default btn-border"
                  ><span>Shop Now</span></a
                >
              </div>
            </div>
          </div>
          <!-- Latest Updates Item End -->

          <!-- Latest Updates Item Start -->
          <div
            class="latest-update-item dark-section wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div class="latest-update-item-image">
              <figure>
                <img src="/images/latest-update-item-image-3.jpg" alt="" />
              </figure>
            </div>
            <div class="latest-update-item-body">
              <div class="section-title">
                <span class="section-sub-title">Premium</span>
                <h2>Free Delivery On Every Order</h2>
              </div>
              <div class="latest-update-item-btn">
                <a href="#" class="btn-default btn-border"
                  ><span>Shop Now</span></a
                >
              </div>
            </div>
          </div>
          <!-- Latest Updates Item End -->
        </div>
        <!-- Latest Updates Item List End -->
      </div>
    </div>
  </div>
</div>
<!-- Latest Updates Section End -->

<!-- Our FAQ's Section Start -->
<div class="our-faqs">
  <div class="container">
    <div class="row">
      <div class="col-xl-5">
        <!-- FAQ Content Box Start -->
        <div class="faq-content-box">
          <!-- Section Title Start -->
          <div class="section-title">
            <span class="section-sub-title wow fadeInUp"
              >Frequently Asked Questions</span
            >
            <h2 class="text-anime-style-3" data-cursor="-opaque">
              Helpful Answers For Pet Owners Everywhere
            </h2>
            <p class="wow fadeInUp" data-wow-delay="0.2s">
              Find answers to common questions about pet care, products,
              shipping, and returns—everything you need to keep your furry
              friends happy and healthy.
            </p>
          </div>
          <!-- Section Title End -->

          <!-- FAQ Content Button Start -->
          <div class="faq-content-btn wow fadeInUp" data-wow-delay="0.4s">
            <a href="#" class="btn-default"><span>View all FAQ's</span></a>
          </div>
          <!-- FAQ Content Button End -->
        </div>
        <!-- FAQ Content Box End -->
      </div>

      <div class="col-xl-7">
        <!-- FAQ Accordion Start -->
        <div class="faq-accordion" id="accordion">
          <!-- FAQ Item Start -->
          <div class="accordion-item wow fadeInUp">
            <h2 class="accordion-header" id="heading1">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                Q1. What products do you offer for pets?
              </button>
            </h2>
            <div
              id="collapse1"
              class="accordion-collapse collapse show"
              role="region"
              aria-labelledby="heading1"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <p>
                  We provide pet food, toys, grooming products, accessories,
                  beds, feeders, aquarium supplies, and healthcare essentials
                  for all pets.
                </p>
              </div>
            </div>
          </div>
          <!-- FAQ Item End -->

          <!-- FAQ Item Start -->
          <div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
            <h2 class="accordion-header" id="heading2">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                Q2. Are your pet products safe to use?
              </button>
            </h2>
            <div
              id="collapse2"
              class="accordion-collapse collapse"
              role="region"
              aria-labelledby="heading2"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <p>
                  We provide pet food, toys, grooming products, accessories,
                  beds, feeders, aquarium supplies, and healthcare essentials
                  for all pets.
                </p>
              </div>
            </div>
          </div>
          <!-- FAQ Item End -->

          <!-- FAQ Item Start -->
          <div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
            <h2 class="accordion-header" id="heading3">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="true"
                aria-controls="collapse3"
              >
                Q3. Do you offer products for all pet types?
              </button>
            </h2>
            <div
              id="collapse3"
              class="accordion-collapse collapse"
              role="region"
              aria-labelledby="heading3"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <p>
                  We provide pet food, toys, grooming products, accessories,
                  beds, feeders, aquarium supplies, and healthcare essentials
                  for all pets.
                </p>
              </div>
            </div>
          </div>
          <!-- FAQ Item End -->

          <!-- FAQ Item Start -->
          <div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
            <h2 class="accordion-header" id="heading4">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                Q4. Can I find grooming essentials here?
              </button>
            </h2>
            <div
              id="collapse4"
              class="accordion-collapse collapse"
              role="region"
              aria-labelledby="heading4"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <p>
                  We provide pet food, toys, grooming products, accessories,
                  beds, feeders, aquarium supplies, and healthcare essentials
                  for all pets.
                </p>
              </div>
            </div>
          </div>
          <!-- FAQ Item End -->

          <!-- FAQ Item Start -->
          <div class="accordion-item wow fadeInUp" data-wow-delay="0.8s">
            <h2 class="accordion-header" id="heading5">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
              >
                Q5. Do you provide home delivery service?
              </button>
            </h2>
            <div
              id="collapse5"
              class="accordion-collapse collapse"
              role="region"
              aria-labelledby="heading5"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <p>
                  We provide pet food, toys, grooming products, accessories,
                  beds, feeders, aquarium supplies, and healthcare essentials
                  for all pets.
                </p>
              </div>
            </div>
          </div>
          <!-- FAQ Item End -->
        </div>
        <!-- FAQ Accordion End -->
      </div>
    </div>
  </div>
</div>
<!-- Our FAQ's Section End -->

<!-- Our Blog Section Start -->
<div class="our-blog">
  <div class="container">
    <div class="row section-row">
      <div class="col-xl-12">
        <!-- Section Title Start -->
        <div class="section-title section-title-center">
          <span class="section-sub-title wow fadeInUp">Latest Blog</span>
          <h2 class="text-anime-style-3" data-cursor="-opaque">
            Helpful Guides For Pet Owners
          </h2>
        </div>
        <!-- Section Title End -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <!-- Post Item List Start -->
        <div class="post-item-list">
          <!-- Post Item Start -->
          <div class="post-item wow fadeInUp">
            <div class="post-featured-image">
              <a href="#">
                <figure class="image-anime">
                  <img src="/images/post-1.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="post-item-body">
              <div class="post-item-meta">
                <ul>
                  <li>May 8,2026</li>
                </ul>
              </div>
              <div class="post-item-content">
                <h2>
                  <a href="#">Premium Nutrition For Happy Growing Puppies</a>
                </h2>
              </div>
              <div class="post-item-btn">
                <a href="#" class="readmore-btn">Read More</a>
              </div>
            </div>
          </div>
          <!-- Post Item End -->

          <!-- Post Item Start -->
          <div class="post-item wow fadeInUp" data-wow-delay="0.2s">
            <div class="post-featured-image">
              <a href="#">
                <figure class="image-anime">
                  <img src="/images/post-2.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="post-item-body">
              <div class="post-item-meta">
                <ul>
                  <li>May 6,2026</li>
                </ul>
              </div>
              <div class="post-item-content">
                <h2>
                  <a href="#">Healthy Grooming Routine For Happy Fluffy Dogs</a>
                </h2>
              </div>
              <div class="post-item-btn">
                <a href="#" class="readmore-btn">Read More</a>
              </div>
            </div>
          </div>
          <!-- Post Item End -->

          <!-- Post Item Start -->
          <div class="post-item wow fadeInUp" data-wow-delay="0.4s">
            <div class="post-featured-image">
              <a href="#">
                <figure class="image-anime">
                  <img src="/images/post-3.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div class="post-item-body">
              <div class="post-item-meta">
                <ul>
                  <li>May 4,2026</li>
                </ul>
              </div>
              <div class="post-item-content">
                <h2>
                  <a href="#"
                    >Creating Comfortable Homes For Happy Indoor Pets</a
                  >
                </h2>
              </div>
              <div class="post-item-btn">
                <a href="#" class="readmore-btn">Read More</a>
              </div>
            </div>
          </div>
          <!-- Post Item End -->
        </div>
        <!-- Post Item List End -->
      </div>
    </div>
  </div>
</div>
<!-- Our Blog Section End -->

<!-- Main Footer Start -->
<footer class="main-footer dark-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <!-- Footer Header Start -->
        <div class="footer-header">
          <!-- About Footer Start -->
          <div class="about-footer">
            <!-- Footer Logo Start -->
            <div class="footer-logo">
              <img src="/images/Ariviya.png" alt="Ariviya Logo" style="height:48px;width:auto;filter:brightness(0) invert(1);" />
            </div>
            <!-- Footer Logo End -->

            <!-- About Footer Content Start -->
            <div class="about-footer-content">
              <p>
                Your trusted destination for premium pet food, toys, grooming
                essentials, accessories,
              </p>
            </div>
            <!-- About Footer Content End -->
          </div>
          <!-- About Footer End -->

          <!-- Footer Newsletter Form Start -->
          <div class="footer-newsletter-box">
            <h2>Subscribe to our newsletter:</h2>
            <form id="newslettersForm" action="#" method="POST">
              <div class="form-group">
                <input
                  type="email"
                  name="mail"
                  class="form-control"
                  id="mail"
                  placeholder="Enter your e-mail"
                  required
                />
                <button type="submit" class="btn-default btn-highlighted">
                  <span>subscribe</span>
                </button>
              </div>
            </form>
          </div>
          <!-- Footer Newsletter Form End -->
        </div>
        <!-- Footer Header end -->
      </div>

      <div class="col-lg-12">
        <!-- Footer Links Box Start -->
        <div class="footer-links-box">
          <!-- Footer Links Start -->
          <div class="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <!-- Footer Links End -->

          <!-- Footer Links Start -->
          <div class="footer-links">
            <h2>Product Categories</h2>
            <ul>
              <li><a href="#">Dog Essentials</a></li>
              <li><a href="#">Cat Care Products</a></li>
              <li><a href="#">Bird Supplies</a></li>
              <li><a href="#">Aquarium Products</a></li>
              <li><a href="#">Small Pet Accessories</a></li>
            </ul>
          </div>
          <!-- Footer Links End -->

          <!-- Footer Links Start -->
          <div class="footer-links">
            <h2>Customer Support</h2>
            <ul>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms And Conditions</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Shipping Information</a></li>
            </ul>
          </div>
          <!-- Footer Links End -->

          <!-- Footer Links Start -->
          <div class="footer-links footer-contact-box">
            <h2>Contact Information</h2>
            <!-- Footer Contact Item List Start -->
            <div class="footer-contact-items-list">
              <!-- Footer Contact Item Start -->
              <div class="footer-contact-item">
                <div class="icon-box">
                  <img src="/images/icon-phone-accent.svg" alt="" />
                </div>
                <div class="footer-contact-item-content">
                  <p>Phone Number</p>
                  <h3><a href="tel:+123456789">+123 456 789</a></h3>
                </div>
              </div>
              <!-- Footer Contact Item End -->

              <!-- Footer Contact Item Start -->
              <div class="footer-contact-item">
                <div class="icon-box">
                  <img src="/images/icon-mail-accent.svg" alt="" />
                </div>
                <div class="footer-contact-item-content">
                  <p>Email Address</p>
                  <h3>
                    <a href="mailto:support@domainname.com"
                      >support@domain.com</a
                    >
                  </h3>
                </div>
              </div>
              <!-- Footer Contact Item End -->
            </div>
            <!-- Footer Contact Item List End -->
          </div>
          <!-- Footer Links End -->
        </div>
        <!-- Footer Links Box End -->
      </div>
    </div>
  </div>

  <!-- Footer Copyright Start -->
  <div class="footer-copyright">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- Footer Copyright Box Start -->
          <div class="footer-copyright-box">
            <!-- Footer Copyright Text Start -->
            <div class="footer-copyright-text">
              <p>Copyright © 2026 All Rights Reserved.</p>
            </div>
            <!-- Footer Copyright Text End -->

            <!-- Footer Payment Options Start -->
            <div class="footer-payment-options">
              <ul>
                <li>
                  <a href="#"
                    ><img src="/images/icon-payment-options-1.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/images/icon-payment-options-2.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/images/icon-payment-options-3.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/images/icon-payment-options-4.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/images/icon-payment-options-5.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="/images/icon-payment-options-6.svg" alt=""
                  /></a>
                </li>
              </ul>
            </div>
            <!-- Footer Payment Options End -->
          </div>
          <!-- Footer Copyright Box End -->
        </div>
      </div>
    </div>
  </div>
  <!-- Footer Copyright End -->
</footer>
<!-- Main Footer End -->`;
