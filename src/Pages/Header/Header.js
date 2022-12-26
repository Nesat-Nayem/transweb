import React from 'react';

import { Link, NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
            
        
        <div id="search_dropdown">
          <form
            autocomplete="off"
            role="search"
            method="get"
            class="search-form"
            action=""
          >
            <input
              type="search"
              id="search-form-639da21233477"
              class="search-field"
              placeholder="Search"
              value=""
              name="s"
            />
            <button type="submit" class="search-submit">
              <i class="fa fa-search"></i>
              <span class="screen-reader-text">Search</span>
            </button>

            <label for="search-form-639da21233477" class="screen-reader-text">
              Search for:
            </label>
          </form>
          {/* <!-- .search-form --> */}
        </div>
        {/* <!-- #search_dropdown --> */}
        <button
          id="search_modal_close"
          class="nav-btn"
          aria-controls="search_dropdown"
          aria-expanded="true"
          aria-label="Search Toggler"
        >
          <span></span>
        </button>
     
        {/* <!-- #search_dropdown --> */}
        <button
          id="login_modal_close"
          aria-controls="login_dropdown"
          class="nav-btn"
          aria-expanded="true"
          aria-label="Login Toggler"
        >
          <span></span>
        </button>
        <div id="box" class="box-normal">
          <div id="top-wrap">
            <div id="topline" class="page_topline l m fs-14">
              <div class="container">
                <div class="page_topline_wrap">
                  <div class="divided-content darklinks">
                    <span class="topline_welcome_text">
                      Welcome to Trans23: <span>15 Years Experience</span>
                    </span>
                    <a href="#">How to Find Us</a>
                    <a href="#">Give Feedback</a>
                  </div>
                  <div class="inline-content darklinks">
                    <div class="social-links-wrap">
                      <span class="social-links">
                        <a
                          href="#"
                          target="_blank"
                          class="social-icon social-icon-facebook"
                        >
                          <span class="svg-icon icon-facebook">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1024"
                              height="1024"
                              viewBox="0 0 1024 1024"
                            >
                              <path d="M592 1024v-468h156l24-182h-180v-116c0-52 14-88 90-88h96v-162c-16-4-74-8-140-8-140 0-234 84-234 240v134h-158v182h158v468z"></path>
                            </svg>
                          </span>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          class="social-icon social-icon-twitter"
                        >
                          <span class="svg-icon icon-twitter">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1024"
                              height="1024"
                              viewBox="0 0 1024 1024"
                            >
                              <path d="M920 304c0 8 0 18 0 26 0 278-212 598-598 598-118 0-230-34-322-94 16 2 34 2 50 2 98 0 190-32 262-90-92 0-170-62-198-146 14 4 26 4 40 4 20 0 38-2 56-6-96-20-168-106-168-206 0-2 0-2 0-4 28 16 60 26 94 26-56-36-94-102-94-174 0-38 12-74 30-106 102 128 258 212 432 220-4-16-6-32-6-48 0-116 94-210 210-210 62 0 116 26 154 66 48-10 94-26 134-50-16 48-50 90-92 116 42-6 82-16 120-34-28 42-64 80-104 110z"></path>
                            </svg>
                          </span>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          class="social-icon social-icon-instagram"
                        >
                          <span class="svg-icon icon-instagram">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1024"
                              height="1024"
                              viewBox="0 0 1024 1024"
                            >
                              <path d="M512 92c138 0 152 2 206 4 52 2 78 10 96 16 24 10 42 22 58 38 18 18 30 36 38 58 8 20 16 46 18 96 2 56 4 70 4 208s-2 152-4 206c-2 52-10 78-16 96-10 24-22 42-38 58-18 18-36 30-58 38-20 8-46 16-96 18-56 2-70 4-208 4s-152-2-206-4c-52-2-78-10-96-16-24-10-42-22-58-38-18-18-30-36-38-58-8-20-16-46-18-96-2-56-4-70-4-208s2-152 4-206c2-52 10-78 16-96 10-24 22-42 38-58 18-18 36-30 58-38 20-8 46-16 96-18 56-2 70-4 208-4M512 0c-140 0-156 2-210 4-56 2-94 10-124 22-34 14-64 32-92 60s-46 58-60 92c-12 32-20 68-22 124-2 54-4 70-4 210s2 156 4 210c2 56 10 94 22 124 14 34 32 64 60 92s58 46 92 60c32 12 68 20 124 22 54 2 70 4 210 4s156-2 210-4c56-2 94-10 124-22 34-14 64-32 92-60s46-58 60-92c12-32 20-68 22-124 2-54 4-70 4-210s-2-156-4-210c-2-56-10-94-22-124-14-34-32-64-60-92s-58-46-92-60c-32-12-68-20-124-22-54-2-70-4-210-4zM512 248c-146 0-264 118-264 264s118 264 264 264c146 0 264-118 264-264s-118-264-264-264zM512 684c-94 0-172-78-172-172s78-172 172-172c94 0 172 78 172 172s-78 172-172 172zM846 238c0 34-26 62-60 62s-62-28-62-62c0-34 28-60 62-60s60 26 60 60z"></path>
                            </svg>
                          </span>
                        </a>
                      </span>
                      {/* <!--.social-links--> */}
                    </div>
                    {/* <!-- .social-links-wrap --> */}
                    <form
                      autocomplete="off"
                      role="search"
                      method="get"
                      class="search-form"
                      action=""
                    >
                      <input
                        type="search"
                        id="search-form-639da212339fb"
                        class="search-field"
                        placeholder="Search"
                        value=""
                        name="s"
                      />
                      <button type="submit" class="search-submit">
                        <i class="fa fa-search"></i>
                        <span class="screen-reader-text">Search</span>
                      </button>

                      <label
                        for="search-form-639da212339fb"
                        class="screen-reader-text"
                      >
                        Search for:
                      </label>
                    </form>
                    {/* <!-- .search-form --> */}
                  </div>
                </div>
              </div>
              {/* <!-- .container --> */}
            </div>
            {/* <!-- #topline --> */}
            <div
    
            
            id="header-affix-wrap" class="header-wrap l ">
              <header
                id="header"
                class="header header-1 l fs-14 menu-right always-sticky    has-menu"
              >
                <div class="container">
                  <a
                    class="logo logo-left with-image  "
                    href=""
                    rel="home"
                    itemprop="url"
                  >
                    <img
                      // width="150px !Important"
                      style={{width:"150px", height:"50px"}}
                      // height="50px !Important"
                      src="https://i.ibb.co/Sd8xhC2/trans23jpg.jpg"
                      class="attachment-full size-full"
                      alt=""
                      // decoding="async"
                      // loading="lazy"
                      // srcset="https://i.ibb.co/Sd8xhC2/trans23jpg.jpg"
                      // sizes="(max-width: 152px) 100vw, 152px"
                    />
                  </a>
                  {/* <!-- .logo --> */}
                  <div id="overlay"></div>
                  <nav id="nav_top" class="top-nav" aria-label="Top Menu">
                    <ul id="menu-main-menu" class="top-menu menu-low-items">
                      <li
                        id="menu-item-606"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-305 current_page_item menu-item-606"
                      >
                        <a
                        href='/'
                          aria-current="page"
                          data-hover="Home"
                        >
                          Home
                        </a>
                      </li>
                
                      <li
                        id="menu-item-607"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-607"
                      >
                        <a
                           href="#about"
                          data-hover="Shop"
                        >
                         About
                        </a>
                      </li>
                      <li
                        id="menu-item-607"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-607"
                      >
                        <a
                          href="#services"
                          data-hover="Shop"
                        >
                         Services
                        </a>
                      </li>
                      <li
                        id="menu-item-608"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-608"
                      >
                        <a
                          href="#blog"
                          data-hover="Blog"
                        >
                          Blog
                        </a>
                      </li>
                      <li
                        id="menu-item-597"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-597"
                      >
                        <a
                          href="#contact"
                          data-hover="Contact us"
                        >
                          Contact us
                        </a>
                      </li>
                      <li
                        id="menu-item-597"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-597"
                      >
                        <Link
                          to="singUp"
                          data-hover="Contact us"
                        >
                          CP Register
                        </Link>
                      </li>
                    </ul>
                    <button
                      id="nav_close"
                      class="nav-btn"
                      aria-controls="nav_top"
                      aria-expanded="true"
                      aria-label="Top Menu Close"
                    >
                      <span></span>
                    </button>
                  </nav>
                  {/* <!-- .top-nav --> */}
                  <button
                    id="nav_toggle"
                    class="nav-btn"
                    aria-controls="nav_top"
                    aria-expanded="false"
                    aria-label="Top Menu Toggler"
                  >
                    <span></span>
                  </button>
                </div>
                {/* <!-- .container --> */}
                <hr class="section-hr" />
              </header>
              {/* <!-- #header --> */}
            </div>
{/* header end  */}


        </div>
        </div>
        </div>
    );
};

export default Header;