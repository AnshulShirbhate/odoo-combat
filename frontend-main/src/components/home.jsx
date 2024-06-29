import React from 'react'

function Home() {
  return (
    <div>
      		<div className="wrapper">
<div className="mobile-header-top d-block d-md-none">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="header-search-mobile">
                    <div className="table">
                        <div className="table-cell">
                            <ul>
                                <li><a className="search-open" href="#"><i className="zmdi zmdi-search"></i></a></li>
                                <li><a href="login.html"><i className="zmdi zmdi-lock"></i></a></li>
                                <li><a href="my-account.html"><i className="zmdi zmdi-account"></i></a></li>
                                <li><a href="wishlist.html"><i className="zmdi zmdi-favorite"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<header id="sticky-menu" className="header">
    <div className="header-area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 offset-md-4 col-7">
                    <div className="logo text-md-center">
                        <a href="index.html"><img src="img/logo/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-md-4 col-5">
                    <div className="mini-cart text-end">
                        <ul>
                            <li>
                                <a className="cart-icon" href="#">
                                    <i className="zmdi zmdi-shopping-cart"></i>
                                    <span>3</span>
                                </a>
                                <div className="mini-cart-brief text-left">
                                    <div className="cart-items">
                                        <p className="mb-0">You have <span>03 items</span> in your shopping bag</p>
                                    </div>
                                    <div className="all-cart-product clearfix">
                                        <div className="single-cart clearfix">
                                            <div className="cart-photo">
                                                <a href="#"><img src="img/cart/1.jpg" alt="" /></a>
                                            </div>
                                            <div className="cart-info">
                                                <h5><a href="#">dummy product name</a></h5>
                                                <p className="mb-0">Price : $ 100.00</p>
                                                <p className="mb-0">Qty : 02 </p>
                                                <span className="cart-delete"><a href="#"><i className="zmdi zmdi-close"></i></a></span>
                                            </div>
                                        </div>
                                        <div className="single-cart clearfix">
                                            <div className="cart-photo">
                                                <a href="#"><img src="img/cart/2.jpg" alt="" /></a>
                                            </div>
                                            <div className="cart-info">
                                                <h5><a href="#">dummy product name</a></h5>
                                                <p className="mb-0">Price : $ 300.00</p>
                                                <p className="mb-0">Qty : 01 </p>
                                                <span className="cart-delete"><a href="#"><i className="zmdi zmdi-close"></i></a></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-totals">
                                        <h5 className="mb-0">Total <span className="floatright">$500.00</span></h5>
                                    </div>
                                    <div className="cart-bottom  clearfix">
                                        <a href="cart.html" className="button-one floatleft text-uppercase" data-text="View cart">View cart</a>
                                        <a href="checkout.html" className="button-one floatright text-uppercase" data-text="Check out">Check out</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="menu-toggle hamburger hamburger--emphatic d-none d-md-block">
        <div className="hamburger-box">
            <div className="hamburger-inner"></div>
        </div>
    </div>
    <div className="main-menu  d-none d-md-block">
        <nav>
            <ul>
                <li><a href="index.html">home</a>
                    <div className="sub-menu menu-scroll">
                        <ul>
                            <li className="menu-title">Page's</li>
                            <li><a href="index.html">Home Version 1</a></li>
                            <li><a href="index-2.html">Home Version 2</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="shop.html">products</a>
                    <div className="mega-menu menu-scroll">
                        <div className="table">
                            <div className="table-cell">
                                <div className="half-width">
                                    <ul>
                                        <li className="menu-title">best brands</li>
                                        <li><a href="#">henning koppel</a></li>
                                        <li><a href="#">jehs + Laub</a></li>
                                        <li><a href="#">vicke lindstrand</a></li>
                                        <li><a href="#">don chadwick</a></li>
                                        <li><a href="#">akiko kuwahata</a></li>
                                        <li><a href="#">barbro berlin</a></li>
                                        <li><a href="#">cecilia hall</a></li>
                                        <li><a href="#">don chadwick</a></li>
                                    </ul>
                                </div>
                                <div className="half-width">
                                    <ul>
                                        <li className="menu-title">popular brands</li>
                                        <li><a href="#">akiko kuwahata</a></li>
                                        <li><a href="#">barbro berlin</a></li>
                                        <li><a href="#">cecilia hall</a></li>
                                        <li><a href="#">don chadwick</a></li>
                                        <li><a href="#">henning koppel</a></li>
                                        <li><a href="#">jehs + Laub</a></li>
                                        <li><a href="#">vicke lindstrand</a></li>
                                        <li><a href="#">don chadwick</a></li>
                                    </ul>
                                </div>
                                <div className="full-width">
                                    <div className="mega-menu-img">
                                        <a href="single-product.html"><img src="img/megamenu/1.jpg" alt="" /></a>
                                    </div>
                                </div>
                                <div className="pb-80"></div>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a href="#">Shortcodes</a>
                    <div className="sub-menu menu-scroll">
                        <ul>
                            <li className="menu-title">Shortcodes</li>
                            <li><a href="elements-accordions.html">Accordion</a></li>
                            <li><a href="elements-toggles.html">Toggles</a></li>
                            <li><a href="elements-tab.html">Tab</a></li>
                            <li><a href="elements-product-tab.html">Product Tab</a></li>
                            <li><a href="elements-product-tab-2.html">Product Tab 2</a></li>
                            <li><a href="elements-carousel.html">product carousel</a></li>
                            <li><a href="elements-carousel-2.html">product carousel 2</a></li>
                            <li><a href="elements-featured-product.html">Featured Product</a></li>
                            <li><a href="elements-featured-product-2.html">Featured Product 2</a></li>
                            <li><a href="elements-button.html">Button</a></li>
                            <li><a href="elements-table.html">Table</a></li>
                            <li><a href="elements-progress-bars.html">Progress Bar</a></li>
                            <li><a href="elements-blog.html">Blog</a></li>
                            <li><a href="elements-blog-2.html">Blog - 2</a></li>
                            <li><a href="elements-team.html">Team</a></li>
                            <li><a href="elements-footer.html">Footer</a></li>
                            <li><a href="elements-footer-2.html">Footer 2</a></li>
                            <li><a href="elements-map.html">Map</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="shop-sidebar.html">accesories</a></li>
                <li><a href="shop-list.html">lookbook</a></li>
                <li><a href="blog.html">blog</a></li>
                <li><a href="#">pages</a>
                    <div className="sub-menu menu-scroll">
                        <ul>
                            <li className="menu-title">Page's</li>
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                            <li><a href="shop-grid-right-sidebar.html">Shop Right Sidebar</a></li>
                            <li><a href="shop-list.html">Shop List</a></li>
                            <li><a href="shop-list-right-sidebar.html">Shop List right sidebar</a></li>
                            <li><a href="single-product.html">Single Product</a></li>
                            <li><a href="single-product-sidebar.html">Single Product Sidebar</a></li>
                            <li><a href="cart.html">Shopping Cart</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="order.html">Order</a></li>
                            <li><a href="login.html">login / Registration</a></li>
                            <li><a href="my-account.html">My Account</a></li>
                            <li><a href="404.html">404</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="single-blog.html">Single Blog</a></li>
                            <li><a href="single-blog-sidebar.html">Single Blog Sidebar</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="about.html">about us</a></li>
                <li><a href="contact.html">contact</a></li>
            </ul>
        </nav>
    </div>
</header>
<div className="mobile-menu-area">
    <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12 d-block d-md-none">
                <div className="mobile-menu">
                    <nav id="dropdown">
                        <ul>
                            <li><a href="index.html">home</a>
                                <ul>
                                    <li><a href="index.html">Home Version 1</a></li>
                                    <li><a href="index-2.html">Home Version 2</a></li>
                                </ul>
                            </li>
                            <li><a href="shop.html">products</a></li>
                            <li><a href="shop-sidebar.html">accesories</a></li>
                            <li><a href="shop-list.html">lookbook</a></li>
                            <li><a href="blog.html">blog</a></li>
                            <li><a href="#">pages</a>
                                <ul>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                                    <li><a href="shop-list.html">Shop List</a></li>
                                    <li><a href="single-product.html">Single Product</a></li>
                                    <li><a href="single-product-sidebar.html">Single Product Sidebar</a></li>
                                    <li><a href="cart.html">Shopping Cart</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="order.html">Order</a></li>
                                    <li><a href="login.html">login / Registration</a></li>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="404.html">404</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="single-blog.html">Single Blog</a></li>
                                    <li><a href="single-blog-sidebar.html">Single Blog Sidebar</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">about us</a></li>
                            <li><a href="contact.html">contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
<section className="slider-banner-area clearfix">
    <div className="sidebar-social d-none d-md-block">
        <div className="table">
            <div className="table-cell">
                <ul>
                    <li><a href="#" target="_blank" title="Google Plus"><i className="zmdi zmdi-google-plus"></i></a></li>
                    <li><a href="#" target="_blank" title="Twitter"><i className="zmdi zmdi-twitter"></i></a></li>
                    <li><a href="#" target="_blank" title="Facebook"><i className="zmdi zmdi-facebook"></i></a></li>
                    <li><a href="#" target="_blank" title="Linkedin"><i className="zmdi zmdi-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="banner-left floatleft">
        <div className="slider-banner">
            <div className="single-banner banner-1">
                <a className="banner-thumb" href="#"><img src="img/banner/1.jpg" alt="" /></a>
                <span className="pro-label new-label">new</span>
                <span className="price">$50.00</span>
                <div className="banner-brief">
                    <h2 className="banner-title"><a href="#">Product name</a></h2>
                    <p className="mb-0">Furniture</p>
                </div>
                <a href="#" className="button-one font-16px" data-text="Buy now">Buy now</a>
            </div>
            <div className="single-banner banner-2">
                <a className="banner-thumb" href="#"><img src="img/banner/2.jpg" alt="" /></a>
                <div className="banner-brief">
                    <h2 className="banner-title"><a href="#">New Product 2021</a></h2>
                    <p className="hidden-md hidden-sm d-none d-md-block">Lorem Ipsum is simply dummy text of the printing and types sate industry. Lorem Ipsum has been the industry.</p>
                    <a href="#" className="button-one font-16px" data-text="Buy now">Buy now</a>
                </div>
            </div>
        </div>
    </div>
    <div className="slider-right floatleft">
        <div className="slider-area">
            <div className="bend niceties preview-2">
                <div id="ensign-nivoslider" className="slides">
                    <img src="img/slider/slider-1/1.jpg" alt="" title="#slider-direction-1"  />
                    <img src="img/slider/slider-1/2.jpg" alt="" title="#slider-direction-2"  />
                    <img src="img/slider/slider-1/3.jpg" alt="" title="#slider-direction-3"  />
                </div>
                <div id="slider-direction-1" className="t-cn slider-direction">
                    <div className="slider-progress"></div>
                    <div className="slider-content t-lfl s-tb slider-1">
                        <div className="title-container s-tb-c title-compress">
                            <div className="layer-1">
                                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <h2 className="slider-title3 text-uppercase mb-0" >welcome to our</h2>
                                </div>
                                <div className="wow fadeIn" data-wow-duration="1.5s" data-wow-delay="1.5s">
                                    <h2 className="slider-title1 text-uppercase mb-0">furniture</h2>
                                </div>
                                <div className="wow fadeIn" data-wow-duration="2s" data-wow-delay="2.5s">
                                    <h3 className="slider-title2 text-uppercase" >gallery 2021</h3>
                                </div>
                                <div className="wow fadeIn" data-wow-duration="2.5s" data-wow-delay="3.5s">
                                    <a href="#" className="button-one style-2 text-uppercase mt-20" data-text="Shop now">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slider-direction-2" className="slider-direction">
                    <div className="slider-progress"></div>
                    <div className="slider-content t-lfl s-tb slider-1">
                        <div className="title-container s-tb-c title-compress">
                            <div className="layer-1">
                                <div className="wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <h2 className="slider-title3 text-uppercase mb-0" >welcome to our</h2>
                                </div>
                                <div className="wow fadeInUpBig" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                    <h2 className="slider-title1 text-uppercase">furniture</h2>
                                </div>
                                <div className="wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.5s">
                                    <p className="slider-pro-brief">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                </div>
                                <div className="wow fadeInUpBig" data-wow-duration="2.5s" data-wow-delay="0.5s">
                                    <a href="#" className="button-one style-2 text-uppercase mt-20" data-text="Shop now">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slider-direction-3" className="slider-direction">
                    <div className="slider-progress"></div>
                    <div className="slider-content t-lfl s-tb slider-1">
                        <div className="title-container s-tb-c title-compress">
                            <div className="layer-1">
                                <div className="wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <h2 className="slider-title3 text-uppercase mb-0" >welcome to our</h2>
                                </div>
                                <div className="wow fadeInUpBig" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                    <h2 className="slider-title1 text-uppercase mb-0">furniture</h2>
                                </div>
                                <div className="wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.5s">
                                    <h3 className="slider-title2 text-uppercase" >gallery 2021</h3>
                                </div>
                                <div className="wow fadeInUpBig" data-wow-duration="2.5s" data-wow-delay="0.5s">
                                    <p className="slider-pro-brief">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                </div>
                                <div className="wow fadeInUpBig" data-wow-duration="3s" data-wow-delay="0.5s">
                                    <a href="#" className="button-one style-2 text-uppercase mt-20" data-text="Shop now">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="sidebar-account d-none d-md-block">
        <div className="table">
            <div className="table-cell">
                <ul>
                    <li><a className="search-open" href="#" title="Search"><i className="zmdi zmdi-search"></i></a></li>
                    <li><a href="#" title="Login"><i className="zmdi zmdi-lock"></i></a>
                        <div className="customer-login text-left">
                            <form action="#">
                                <h4 className="title-1 title-border text-uppercase mb-30">Registered customers</h4>
                                <p className="text-gray">If you have an account with us, Please login!</p>
                                <input type="text" name="email" placeholder="Email here..." />
                                <input type="password" placeholder="Password" />
                                <p><a className="text-gray" href="#">Forget your password?</a></p>
                                <button className="button-one submit-button mt-15" data-text="login" type="submit">login</button>
                            </form>
                        </div>
                    </li>
                    <li><a href="my-account.html" title="My-Account"><i className="zmdi zmdi-account"></i></a></li>
                    <li><a href="wishlist.html" title="Wishlist"><i className="zmdi zmdi-favorite"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
<div className="sidebar-search animated slideOutUp">
    <div className="table">
        <div className="table-cell">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 p-0">
                        <div className="search-form-wrap">
                            <button className="close-search"><i className="zmdi zmdi-close"></i></button>
                            <form action="#">
                                <input type="text" placeholder="Search here..." />
                                <button className="search-button" type="submit">
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="product-area pt-80 pb-35">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title text-center">
                    <h2 className="title-border">Featured Products</h2>
                </div>
                <div className="product-slider style-1 arrow-left-right">
                    <div className="single-product">
                        <div className="product-img">
                            <span className="pro-label new-label">new</span>
                            <a href="single-product.html"><img src="img/product/1.jpg" alt="" /></a>
                            <div className="product-action clearfix">
                                <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                            </div>
                        </div>
                        <div className="product-info clearfix">
                            <div className="fix">
                                <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                <p className="floatright hidden-sm d-none d-md-block">Furniture</p>
                            </div>
                            <div className="fix">
                                <span className="pro-price floatleft">$ 56.20</span>
                                <span className="pro-rating floatright">
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="single-product">
                        <div className="product-img">
                            <span className="pro-label sale-label">Sale</span>
                            <a href="single-product.html"><img src="img/product/2.jpg" alt="" /></a>
                            <div className="product-action clearfix">
                                <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                            </div>
                        </div>
                        <div className="product-info clearfix">
                            <div className="fix">
                                <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                <p className="floatright hidden-sm d-none d-md-block">Furniture</p>
                            </div>
                            <div className="fix">
                                <span className="pro-price floatleft">$ 56.20</span>
                                <span className="pro-rating floatright">
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="single-product">
                        <div className="product-img">
                            <a href="single-product.html"><img src="img/product/3.jpg" alt="" /></a>
                            <div className="product-action clearfix">
                                <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                            </div>
                        </div>
                        <div className="product-info clearfix">
                            <div className="fix">
                                <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                <p className="floatright hidden-sm d-none d-md-block">Furniture</p>
                            </div>
                            <div className="fix">
                                <span className="pro-price floatleft">$ 56.20</span>
                                <span className="pro-rating floatright">
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="single-product">
                        <div className="product-img">
                            <a href="single-product.html"><img src="img/product/4.jpg" alt="" /></a>
                            <div className="product-action clearfix">
                                <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                            </div>
                        </div>
                        <div className="product-info clearfix">
                            <div className="fix">
                                <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                <p className="floatright hidden-sm d-none d-md-block">Furniture</p>
                            </div>
                            <div className="fix">
                                <span className="pro-price floatleft">$ 56.20</span>
                                <span className="pro-rating floatright">
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="single-product">
                        <div className="product-img">
                            <span className="pro-label new-label">new</span>
                            <a href="single-product.html"><img src="img/product/3.jpg" alt="" /></a>
                            <div className="product-action clearfix">
                                <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                            </div>
                        </div>
                        <div className="product-info clearfix">
                            <div className="fix">
                                <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                <p className="floatright hidden-sm d-none d-md-block">Furniture</p>
                            </div>
                            <div className="fix">
                                <span className="pro-price floatleft">$ 56.20</span>
                                <span className="pro-rating floatright">
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                    <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="discount-product-area">
    <div className="container">
        <div className="row">
            <div className="discount-product-slider dots-bottom-right">
                <div className="col-lg-12">
                    <div className="discount-product">
                        <img src="img/discount/1.jpg" alt="" />
                        <div className="discount-img-brief">
                            <div className="onsale">
                                <span className="onsale-text">On Sale</span>
                                <span className="onsale-price">$ 80.00</span>
                            </div>
                            <div className="discount-info">
                                <h1 className="text-dark-red d-none d-md-block">Discount 50%</h1>
                                <p className="d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does eiusmodes tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venim, quis nostrud exercitation ullamco laboris.</p>
                                <a href="#" className="button-one font-16px style-3 text-uppercase mt-md-5" data-text="Buy now">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="discount-product">
                        <img src="img/discount/2.jpg" alt="" />
                        <div className="discount-img-brief">
                            <div className="onsale">
                                <span className="onsale-text">On Sale</span>
                                <span className="onsale-price">$ 80.00</span>
                            </div>
                            <div className="discount-info">
                                <h1 className="text-dark-red d-none d-md-block">Discount 50%</h1>
                                <p className="d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does eiusmodes tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venim, quis nostrud exercitation ullamco laboris.</p>
                                <a href="#" className="button-one font-16px style-3 text-uppercase mt-md-5" data-text="Buy now">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="discount-product">
                        <img src="img/discount/3.jpg" alt="" />
                        <div className="discount-img-brief">
                            <div className="onsale">
                                <span className="onsale-text">On Sale</span>
                                <span className="onsale-price">$ 80.00</span>
                            </div>
                            <div className="discount-info">
                                <h1 className="text-dark-red d-none d-md-block">Discount 50%</h1>
                                <p className="d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does eiusmodes tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venim, quis nostrud exercitation ullamco laboris.</p>
                                <a href="#" className="button-one font-16px style-3 text-uppercase mt-md-5" data-text="Buy now">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="discount-product">
                        <img src="img/discount/4.jpg" alt="" />
                        <div className="discount-img-brief">
                            <div className="onsale">
                                <span className="onsale-text">On Sale</span>
                                <span className="onsale-price">$ 80.00</span>
                            </div>
                            <div className="discount-info">
                                <h1 className="text-dark-red d-none d-md-block">Discount 50%</h1>
                                <p className="d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does eiusmodes tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venim, quis nostrud exercitation ullamco laboris.</p>
                                <a href="#" className="button-one font-16px style-3 text-uppercase mt-md-5" data-text="Buy now">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="purchase-online-area pt-80">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title text-center">
                    <h2 className="title-border">Purchase Online on Hurst</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 text-center">
                <ul className="tab-menu nav clearfix">
                    <li><a className="active" href="#new-arrivals" data-bs-toggle="tab">New Arrivals</a></li>
                    <li><a href="#best-seller"  data-bs-toggle="tab">Best Seller </a></li>
                    <li><a href="#most-view" data-bs-toggle="tab">Most View </a></li>
                    <li><a href="#discounts" data-bs-toggle="tab">Discounts</a></li>
                </ul>
            </div>
            <div className="col-lg-12">
                <div className="tab-content">
                    <div className="tab-pane active" id="new-arrivals">
                        <div className="row">
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label new-label">new</span>
                                    <a href="single-product.html"><img src="img/product/5.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 56.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label sale-label">Sale</span>
                                    <a href="single-product.html"><img src="img/product/6.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 36.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/3.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 66.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/7.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 57.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label new-label">new</span>
                                    <a href="single-product.html"><img src="img/product/1.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 55.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label sale-label">Sale</span>
                                    <a href="single-product.html"><img src="img/product/2.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 65.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/8.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 60.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/9.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 66.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="best-seller">
                        <div className="row">
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label new-label">new</span>
                                    <a href="single-product.html"><img src="img/product/2.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 56.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label sale-label">Sale</span>
                                    <a href="single-product.html"><img src="img/product/9.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 36.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/8.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 66.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/6.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 57.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label new-label">new</span>
                                    <a href="single-product.html"><img src="img/product/4.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 55.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label sale-label">Sale</span>
                                    <a href="single-product.html"><img src="img/product/3.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 65.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/7.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 60.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/5.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 66.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="most-view">
                        <div className="row">
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label new-label">new</span>
                                    <a href="single-product.html"><img src="img/product/1.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 56.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label sale-label">Sale</span>
                                    <a href="single-product.html"><img src="img/product/3.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 36.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/5.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 66.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/9.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 57.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label new-label">new</span>
                                    <a href="single-product.html"><img src="img/product/7.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 55.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label sale-label">Sale</span>
                                    <a href="single-product.html"><img src="img/product/5.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 65.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/7.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 60.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/8.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 66.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="discounts">
                        <div className="row">
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label new-label">new</span>
                                    <a href="single-product.html"><img src="img/product/8.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 56.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label sale-label">Sale</span>
                                    <a href="single-product.html"><img src="img/product/9.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 36.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/7.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 66.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/6.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 57.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label new-label">new</span>
                                    <a href="single-product.html"><img src="img/product/3.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 55.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <span className="pro-label sale-label">Sale</span>
                                    <a href="single-product.html"><img src="img/product/4.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 65.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/5.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 60.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product col-xl-3 col-lg-4 col-md-6">
                                <div className="product-img">
                                    <a href="single-product.html"><img src="img/product/2.jpg" alt="" /></a>
                                    <div className="product-action clearfix">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
                                        <a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
                                        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
                                        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
                                    </div>
                                </div>
                                <div className="product-info clearfix">
                                    <div className="fix">
                                        <h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
                                        <p className="floatright hidden-sm">Furniture</p>
                                    </div>
                                    <div className="fix">
                                        <span className="pro-price floatleft">$ 66.20</span>
                                        <span className="pro-rating floatright">
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                            <a href="#"><i className="zmdi zmdi-star-half"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="blog-area pt-55">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title text-center">
                    <h2 className="title-border">From The Blog</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="single-blog mt-30">
                    <div className="row">
                        <div className="col-xl-6 col-md-7">
                            <div className="blog-info">
                                <div className="post-meta fix">
                                    <div className="post-date floatleft"><span className="text-dark-red">30</span></div>
                                    <div className="post-year floatleft">
                                        <p className="text-uppercase text-dark-red mb-0">June, 2021</p>
                                        <h4 className="post-title"><a href="#" tabindex="0">Farniture drawing 2021</a></h4>
                                    </div>
                                </div>
                                <div className="like-share fix">
                                    <a href="#"><i className="zmdi zmdi-favorite"></i><span>89 Like</span></a>
                                    <a href="#"><i className="zmdi zmdi-comments"></i><span>59 Comments</span></a>
                                    <a href="#"><i className="zmdi zmdi-share"></i><span>29 Share</span></a>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered If you are going to use a passage  Lorem Ipsum, you alteration in some form.</p>
                                <a href="#" className="button-2 text-dark-red">Read more...</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-5">
                            <div className="blog-photo">
                                <a href="#"><img src="img/blog/1.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="single-blog mt-30">
                    <div className="row">
                        <div className="col-xl-6 col-md-7">
                            <div className="blog-info">
                                <div className="post-meta fix">
                                    <div className="post-date floatleft"><span className="text-dark-red">30</span></div>
                                    <div className="post-year floatleft">
                                        <p className="text-uppercase text-dark-red mb-0">June, 2021</p>
                                        <h4 className="post-title"><a href="#" tabindex="0">Farniture drawing 2021</a></h4>
                                    </div>
                                </div>
                                <div className="like-share fix">
                                    <a href="#"><i className="zmdi zmdi-favorite"></i><span>89 Like</span></a>
                                    <a href="#"><i className="zmdi zmdi-comments"></i><span>59 Comments</span></a>
                                    <a href="#"><i className="zmdi zmdi-share"></i><span>29 Share</span></a>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered If you are going to use a passage  Lorem Ipsum, you alteration in some form.</p>
                                <a href="#" className="button-2 text-dark-red">Read more...</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-5">
                            <div className="blog-photo">
                                <a href="#"><img src="img/blog/2.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="subscribe-area pt-80">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="subscribe">
                    <form action="#">
                        <input type="text" placeholder="Enter your email address"/>
                        <button className="submit-button submit-btn-2 button-one" data-text="subscribe" type="submit" >subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<footer>
    <div className="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-footer">
                        <h3 className="footer-title  title-border">Contact Us</h3>
                        <ul className="footer-contact">
                            <li><span>Address :</span>28 Green Tower, Street Name,<br/>New York City, USA</li>
                            <li><span>Cell-Phone :</span>012345 - 123456789</li>
                            <li><span>Email :</span>your-email@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="single-footer">
                        <h3 className="footer-title  title-border">accounts</h3>
                        <ul className="footer-menu">
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>My Account</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>My Wishlist</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>My Cart</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Sign In</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Check out</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="single-footer">
                        <h3 className="footer-title  title-border">shipping</h3>
                        <ul className="footer-menu">
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>New Products</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Top Sellers</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Manufactirers</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Suppliers</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Specials</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-footer">
                        <h3 className="footer-title  title-border">your choice Products</h3>
                        <div className="footer-product">
                            <div className="row">
                                <div className="col-sm-6 col-12">
                                    <div className="footer-thumb">
                                        <a href="#"><img src="img/footer/1.jpg" alt="" /></a>
                                        <div className="footer-thumb-info">
                                            <p><a href="#">Furniture Product<br/>Name</a></p>
                                            <h4 className="price-3">$ 60.00</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <div className="footer-thumb">
                                        <a href="#"><img src="img/footer/1.jpg" alt="" /></a>
                                        <div className="footer-thumb-info">
                                            <p><a href="#">Furniture Product<br/>Name</a></p>
                                            <h4 className="price-3">$ 60.00</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-area">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="copyright">
                        <p className="mb-0">&copy; <a href="https://themeforest.net/user/codecarnival/portfolio" target="_blank"> CodeCarnival  </a> 2022. All Rights Reserved.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="payment  text-md-end">
                        <a href="#"><img src="img/payment/1.png" alt="" /></a>
                        <a href="#"><img src="img/payment/2.png" alt="" /></a>
                        <a href="#"><img src="img/payment/3.png" alt="" /></a>
                        <a href="#"><img src="img/payment/4.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<div id="quickview-wrapper">
   <div className="modal fade" id="productModal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div className="modal-body">
                    <div className="modal-product">
                        <div className="product-images">
                            <div className="main-image images">
                                <img alt="#" src="img/product/quickview-photo.jpg"/>
                            </div>
                        </div>

                        <div className="product-info">
                            <h1>Aenean eu tristique</h1>
                            <div className="price-box-3">
                                <hr />
                                <div className="s-price-box">
                                    <span className="new-price">$160.00</span>
                                    <span className="old-price">$190.00</span>
                                </div>
                                <hr />
                            </div>
                            <a href="shop.html" className="see-all">See all features</a>
                            <div className="quick-add-to-cart">
                                <form method="post" className="cart">
                                    <div className="numbers-row">
                                        <input type="number" id="french-hens" value="3" min="1" />
                                    </div>
                                    <button className="single_add_to_cart_button" type="submit">Add to cart</button>
                                </form>
                            </div>
                            <div className="quick-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero.
                            </div>
                            <div className="social-sharing">
                                <div className="widget widget_socialsharing_widget">
                                    <h3 className="widget-title-modal">Share this product</h3>
                                    <ul className="social-icons">
                                        <li><a target="_blank" title="Google +" href="#" className="gplus social-icon"><i className="zmdi zmdi-google-plus"></i></a></li>
                                        <li><a target="_blank" title="Twitter" href="#" className="twitter social-icon"><i className="zmdi zmdi-twitter"></i></a></li>
                                        <li><a target="_blank" title="Facebook" href="#" className="facebook social-icon"><i className="zmdi zmdi-facebook"></i></a></li>
                                        <li><a target="_blank" title="LinkedIn" href="#" className="linkedin social-icon"><i className="zmdi zmdi-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
   {/* <!-- END Modal --> */}
</div>
{/* <!-- END QUICKVIEW PRODUCT --> */}

</div>
{/* <!-- WRAPPER END --> */}

{/* <!-- all js here -->
<!-- jquery latest version -->
<script src="js/vendor/jquery-3.6.0.min.js"></script>
<script src="js/vendor/jquery-migrate-3.3.2.min.js"></script>
<!-- bootstrap js -->
<script src="js/bootstrap.bundle.min.js"></script>
<!-- jquery.meanmenu js -->
<script src="js/jquery.meanmenu.js"></script>
<!-- slick.min js -->
<script src="js/slick.min.js"></script>
<!-- jquery.treeview js -->
<script src="js/jquery.treeview.js"></script>
<!-- lightbox.min js -->
<script src="js/lightbox.min.js"></script>
<!-- jquery-ui js -->
<script src="js/jquery-ui.min.js"></script>
<!-- jquery.nivo.slider js -->
<script src="lib/js/jquery.nivo.slider.js"></script>
<script src="lib/home.js"></script>
<!-- jquery.nicescroll.min js -->
<script src="js/jquery.nicescroll.min.js"></script>
<!-- countdon.min js -->
<script src="js/countdon.min.js"></script>
<!-- wow js -->
<script src="js/wow.min.js"></script>
<!-- plugins js -->
<script src="js/plugins.js"></script>
<!-- main js -->
<script src="js/main.min.js"></script> */}
    </div>
  )
}

export default Home
