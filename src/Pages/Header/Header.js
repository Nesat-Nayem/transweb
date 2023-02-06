import React from 'react';

import { Link, NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
            
            <section class="page_topline with_search ls ms table_section">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 text-center text-sm-left">
                <p class="divided-content darklinks grey">
                  <span>
                    <strong>Welcome to Trans23:</strong> 15 Years Experience
                  </span>
                  <a href="contact.html">How to Find Us</a>
                  <a href="#">Give Feedback</a>
                </p>
              </div>
              <div class="col-sm-6 text-center text-sm-right">
                <div class="inline-content">
                  <p class="darklinks bottommargin_0">
                    <a
                    style={{  fontSize: '14px' ,fontWeight: 'bold' , marginRight: '15px'}}


                      class="fa fa-facebook"
                      href="#"
                      title="Facebook"
                    ></a>
                    <a
                    style={{   fontSize: '14px',fontWeight: 'bold', marginRight: '15px'}}
                      class="fa fa-twitter"
                      href="#"
                      title="Twitter"
                    ></a>
                    <a
                    style={{  fontSize: '14px'}}
                      class="fa fa-pinterest"
                      href="#"
                      title="Instagram"
                    ></a>
                  </p>
                  <div class="widget widget_search inline-block">
                    <form
                      method="get"
                      class="searchform form-inline"
                      action="./"
                    >
                      {/* <div class="form-group-wrap">
                        <div class="form-group margin_0">
                          <label class="sr-only" for="topline-search"
                            >Search for:</label
                          >
                          <input
                            id="topline-search"
                            type="text"
                            value=""
                            name="search"
                            class="form-control"
                            placeholder="Search"
                          />
                        </div>
                        <button
                          type="submit"
                          class="theme_button color1 no_bg_button"
                        >
                          Search
                        </button>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <header style={{zIndex:"1000 !important"}} class="page_header header_white toggler_right">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 display_table">
                <div class="header_left_logo display_table_cell">
                  <a href="/" class="logo top_logo">
                    <img src="https://i.ibb.co/Sd8xhC2/trans23jpg.jpg" alt="" />
                  </a>
                </div>

                <div class="header_mainmenu display_table_cell text-right">
                  {/* <!-- main nav start --> */}
                  <nav class="mainmenu_wrapper">
                    <ul class="mainmenu nav sf-menu">
                      <li class="active">
                        <a href="/">Home</a>
                    
                      </li>

                      <li>
                        <a href="#about">ABOUT</a>
                       
                      </li>
                      {/* <!-- eof pages --> */}

                      <li>
                        <a href="#services">SERVICES</a>
                      
                        {/* <!-- eof mega menu --> */}
                      </li>
                      {/* <!-- eof features -->

                      <!-- gallery --> */}
                      <li>
                        <a href="#blog">BLOG
                        </a>
                    
                      </li>
                      {/* <!-- eof Gallery -->

                      <!-- blog --> */}
                      <li>
                        <a href="#contact">CONTACT US</a>
                   
                      </li>
                      {/* <!-- eof blog -->

                      <!-- contacts --> */}
                      <li>
                      <Link
                          to="singUp"
                        
                        >CP REGISTER</Link>
                       
                      </li>
                    </ul>
                  </nav>
                  <span class="toggle_menu">
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>




        </div>
    );
};

export default Header;