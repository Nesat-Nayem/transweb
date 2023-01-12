import React from 'react';

import { Link, NavLink } from "react-router-dom";
const Main = () => {
  return (
    <div>
      
    <div class="preloader">
      <div class="preloader_image"></div>
    </div>

    {/* <!-- search modal --> */}
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="search_modal"
      id="search_modal"
    >
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">
          <i class="rt-icon2-cross2"></i>
        </span>
      </button>
      <div class="widget widget_search">
        <form
          method="get"
          class="searchform search-form form-inline"
          action="./"
        >
          <div class="form-group">
            <input
              type="text"
              value=""
              name="search"
              class="form-control"
              placeholder="Search keyword"
              id="modal-search-input"
            />
          </div>
          <button type="submit" class="theme_button">Search</button>
        </form>
      </div>
    </div>

    {/* <!-- Unyson messages modal -->
    <div class="modal fade" tabindex="-1" role="dialog" id="messages_modal">
      <div class="fw-messages-wrap ls with_padding">
		</ul>
		--> */}
      {/* </div>
    </div> */}
    {/* // <!-- eof .modal --> */}

    {/* // <!-- wrappers for visual page editor and boxed version of template --> */}
    <div id="canvas">
      <div id="box_wrapper">
        {/* <!-- template sections --> */}

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
                      <div class="form-group-wrap">
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
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <header class="page_header header_white toggler_right">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 display_table">
                <div class="header_left_logo display_table_cell">
                  <a href="./" class="logo top_logo">
                    <img src="https://i.ibb.co/Sd8xhC2/trans23jpg.jpg" alt="" />
                  </a>
                </div>

                <div class="header_mainmenu display_table_cell text-right">
                  {/* <!-- main nav start --> */}
                  <nav class="mainmenu_wrapper">
                    <ul class="mainmenu nav sf-menu">
                      <li class="active">
                        <a href="">Home</a>
                    
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

        <section
          class="ds section_padding_top_15 section_padding_bottom_15 section_bottom_overlap table_section table_section_sm"
        >
          <div class="container">
            <div class="row">
              <div class="col-sm-8">
                <div class="inline-content">
                  <div class="media small-teaser teaser fontsize_14">
                    <div class="media-left media-middle">
                      <div
                        class="teaser_icon border_icon big_bg highlight round size_xsmall"
                      >
                        <i class="fa fa-phone grey"></i>
                      </div>
                    </div>
                    <div class="media-body media-middle">
                      <span class="medium grey">Call 24/7: +123-456-7890</span>
                      <br />
                      <span class="lightgrey"
                        >46 Blair Court, Slater, MO 65349</span
                      >
                    </div>
                  </div>
                  <div class="media small-teaser teaser fontsize_14">
                    <div class="media-left media-middle">
                      <div
                        class="teaser_icon border_icon big_bg highlight round size_xsmall"
                      >
                        <i class="fa fa-clock-o grey"></i>
                      </div>
                    </div>
                    <div class="media-body media-middle">
                      <span class="medium grey">Open Hours:</span>
                      <br />
                      <span class="lightgrey"
                        >Weekdays 8.00-18.00, Sat: off</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 text-sm-right">
                <a href="#" class="theme_button margin_0">Order moving</a>
              </div>
            </div>
          </div>
        </section>

        <section class="intro_section page_mainslider ls ms">
          <div class="flexslider" data-nav="false">
            <ul class="slides">
              <li>
                <img src="https://i.ibb.co/vdbkc7b/Whats-App-Image-2022-12-22-at-12-15-02-PM.jpg" alt="" />
                <div class="container">
                  <div class="row">
                    <div class="col-sm-12 text-right">
                      <div class="slide_description_wrapper">
                        <div class="slide_description text-left">
                          <div class="intro-layer" data-animation="fadeInUp">
                            <h3>Find out why we're</h3>
                            <h2>
                              <span class="highlight">#1</span> Moving CO.
                            </h2>
                          </div>
                          <div class="intro-layer" data-animation="fadeInUp">
                            <p class="grey">
                              <span class="bold">Trans23 Company</span> is a local
                              moving company with experts and professionals, who
                              cater to customer needs with safety, care and
                              love. Call us now:
                              <span class="bold">01 123 456 789</span>
                            </p>
                          </div>
                          <div class="intro-layer" data-animation="fadeInUp">
                            <a href="about.html" class="theme_button color1"
                              >Get free quote</a
                            >
                          </div>
                        </div>
                        {/* <!-- eof .slide_description --> */}
                      </div>
                      {/* <!-- eof .slide_description_wrapper --> */}
                    </div>
                    {/* <!-- eof .col-* --> */}
                  </div>
                  {/* <!-- eof .row --> */}
                </div>
                {/* <!-- eof .container --> */}
              </li>

              <li>
                <img src="https://i.ibb.co/SV5Q1Mh/Whats-App-Image-2022-12-22-at-11-59-47-AM.jpg" alt="" />
                <div class="container">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="slide_description_wrapper">
                        <div class="slide_description">
                          <div class="intro-layer" data-animation="fadeInUp">
                            <h3>
                              Over
                              <span class="highlight">600</span> Reviews
                            </h3>
                            <h2>Five Stars</h2>
                          </div>
                          <div class="intro-layer" data-animation="fadeInUp">
                            <p class="grey">
                              <span class="bold">Trans23 Company</span> is a local
                              moving company with experts and professionals, who
                              cater to customer needs with safety, care and
                              love. Call us now:
                              <span class="bold">01 123 456 789</span>
                            </p>
                          </div>
                          <div class="intro-layer" data-animation="fadeInUp">
                            <a href="about.html" class="theme_button color1"
                              >Get free quote</a
                            >
                          </div>
                        </div>
                        {/* <!-- eof .slide_description --> */}
                      </div>
                      {/* <!-- eof .slide_description_wrapper --> */}
                    </div>
                    {/* <!-- eof .col-* --> */}
                  </div>
                  {/* <!-- eof .row --> */}
                </div>
                {/* <!-- eof .container --> */}
              </li>

              <li class="ds">
                <img src="https://i.ibb.co/TtfPcr1/Whats-App-Image-2022-12-22-at-11-44-47-AM.jpg" alt="" />
                <div class="container">
                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <div class="slide_description_wrapper">
                        <div class="slide_description">
                          <div class="intro-layer" data-animation="fadeInUp">
                            <h3 class="highlight">
                              Commercial &amp; Residential
                            </h3>
                            <h2>Moving Services</h2>
                          </div>
                          <div class="intro-layer" data-animation="fadeInUp">
                            <p class="grey">
                              <span class="bold">Trans23 Company</span> is a local
                              moving company with experts and professionals, who
                              cater to customer needs with safety, care and
                              love. Call us now:
                              <span class="bold">01 123 456 789</span>
                            </p>
                          </div>
                          <div class="intro-layer" data-animation="fadeInUp">
                            <a href="about.html" class="theme_button color1"
                              >Get free quote</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section
          id="services"
          class="ls section_padding_top_150 section_padding_bottom_130"
        >
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <h4 class="thin margin_0 text-uppercase">Welcome to</h4>
                <h2 class="section_header">Our Services</h2>
                <p class="fontsize_20 grey">
                  With professional movers, we provide the following services at
                  affordable rates, to suit your pocket and sooth your mind.
                </p>
              </div>
            </div>
            <div class="row topmargin_30 columns_margin_bottom_30">
              <div class="col-md-4 col-sm-6">
                <div class="teaser text-center">
                  <div class="teaser_icon highlight size_normal">
                    <i class="fa fa-map-marker"></i>
                  </div>
                  <h4 class="text-uppercase weight-black">
                    <a href="service-single.html">Local Moving</a>
                  </h4>
                  <p>
                    We’ll happily transport your household from one location to
                    another.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="teaser text-center">
                  <div class="teaser_icon highlight size_normal">
                    <i class="fa fa-globe" aria-hidden="true"></i>
                  </div>
                  <h4 class="text-uppercase weight-black">
                    <a href="service-single.html">Long Distance Moving</a>
                  </h4>
                  <p>
                    Trans23 will make your long distance moving experience
                    stress-free.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 clear-sm">
                <div class="teaser text-center">
                  <div class="teaser_icon highlight size_normal">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  </div>
                  <h4 class="text-uppercase weight-black">
                    <a href="service-single.html">Moving Kits</a>
                  </h4>
                  <p>
                    We offer several different moving kits so you don’t have to
                    worry about the details.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 clear-md">
                <div class="teaser text-center">
                  <div class="teaser_icon highlight size_normal">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                  </div>
                  <h4 class="text-uppercase weight-black">
                    <a href="service-single.html">Storage Units</a>
                  </h4>
                  <p>
                    Sometimes you just can’t take everything with you when
                    you’re moving.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 clear-sm">
                <div class="teaser text-center">
                  <div class="teaser_icon highlight size_normal">
                    <i class="fa fa-gift" aria-hidden="true"></i>
                  </div>
                  <h4 class="text-uppercase weight-black">
                    <a href="service-single.html">Box Delivery</a>
                  </h4>
                  <p>
                    We have all the packing supplies, including boxes, packing
                    tape and bubble wrap.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="teaser text-center">
                  <div class="teaser_icon highlight size_normal">
                    <i class="fa fa-cubes" aria-hidden="true"></i>
                  </div>
                  <h4 class="text-uppercase weight-black">
                    <a href="service-single.html">Loading / Unloading</a>
                  </h4>
                  <p>
                    We allow our customers to rent the moving truck, and we’ll
                    load and unload.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          class="ls ms page_about background_cover section_padding_top_150 columns_margin_bottom_30"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="media_heading">
                  <div class="media-left media-middle text-uppercase highlight">
                    Hi
                  </div>
                  <div class="media-body media-middle">
                    <h4 class="thin bottommargin_0 text-uppercase">
                      Welcome to the
                    </h4>
                    <h2 class="section_header big">Best Movers</h2>
                  </div>
                </div>
                <p class="fontsize_20 grey">
                  You may see many moving companies, so why choose us?<br />
                  Let us tell you our special features...
                </p>

                <p>
                  <strong>Trans23</strong> located in San Diego; one of the major
                  cities of California. We are a one-stop solution to all your
                  moving problems. From packing to relocating, we offer all that
                  you have in mind when you think of moving.
                </p>

                <ul class="list2 grey checklist">
                  <li>Your requirement is our wish</li>
                  <li>Moving is quick and easy</li>
                  <li>We are affordable</li>
                </ul>

                <p>
                  <a href="about.html" class="theme_button color1 inverse"
                    >about us</a
                  >
                </p>
              </div>
              <div class="col-md-6 text-center bottommargin_0">
                <img src="images/person.png" alt="" class="top-overlap" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="appointment"
          class="ds page_appointment parallax section_padding_top_150 section_padding_bottom_150"
          style={{backgroundPosition: "50% -6px"}}
        >
          <div class="container">
            <div class="row">
              <div
                class="col-sm-12 text-center to_animate animated fadeInUp"
                data-animation="fadeInUp"
              >
                <h4 class="thin margin_0 text-uppercase">Make in</h4>
                <h2 class="section_header">Appointment</h2>

                <form
                  class="contact-form row columns_margin_bottom_20"
                  method="post"
                  action="./"
                >
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="appointment-name"
                        >Full Name
                        <span class="required">*</span>
                      </label>
                      <i class="fa fa-user highlight" aria-hidden="true"></i>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        value=""
                        name="name"
                        id="appointment-name"
                        class="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="appointment-phone"
                        >Phone Number
                        <span class="required">*</span>
                      </label>
                      <i class="fa fa-phone highlight" aria-hidden="true"></i>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        value=""
                        name="appointment-phone"
                        id="appointment-phone"
                        class="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group select-group">
                      <label for="appointment-date"
                        >Date
                        <span class="required">*</span>
                      </label>
                      <i
                        class="fa fa-calendar highlight"
                        aria-hidden="true"
                      ></i>
                      <select
                        aria-required="true"
                        id="appointment-date"
                        name="appointment-date"
                        class="choice empty form-control"
                      >
                        <option
                          value=""
                          disabled=""
                          selected=""
                          data-default=""
                        >
                          Date
                        </option>
                        <option value="1306">13.06</option>
                        <option value="1406">14.06</option>
                        <option value="1506">15.06</option>
                        <option value="1606">16.06</option>
                        <option value="1706">17.06</option>
                        <option value="1806">18.06</option>
                        <option value="1906">19.06</option>
                        <option value="2006">20.06</option>
                      </select>
                      <i
                        class="fa fa-angle-down theme_button"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group select-group">
                      <label for="appointment-time"
                        >Time
                        <span class="required">*</span>
                      </label>
                      <i class="fa fa-clock-o highlight" aria-hidden="true"></i>
                      <select
                        aria-required="true"
                        id="appointment-time"
                        name="appointment-time"
                        class="choice empty form-control"
                      >
                        <option
                          value=""
                          disabled=""
                          selected=""
                          data-default=""
                        >
                          Time
                        </option>
                        <option value="08am">8:00 AM</option>
                        <option value="09am">9:00 AM</option>
                        <option value="10am">10:00 AM</option>
                        <option value="11am">11:00 AM</option>
                        <option value="12am">12:00 PM</option>
                        <option value="13pm">13:00 PM</option>
                        <option value="14pm">14:00 PM</option>
                        <option value="15pm">15:00 PM</option>
                        <option value="16pm">16:00 PM</option>
                        <option value="17pm">17:00 PM</option>
                      </select>
                      <i
                        class="fa fa-angle-down theme_button"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label for="appointment-message">Message</label>
                      <i class="fa fa-pencil highlight" aria-hidden="true"></i>
                      <textarea
                        aria-required="true"
                        rows="3"
                        cols="45"
                        name="appointment-message"
                        id="appointment-message"
                        class="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-sm-12 bottommargin_0">
                    <div class="contact-form-submit topmargin_30">
                      <button
                        type="submit"
                        id="appointment-_submit"
                        name="contact_submit"
                        class="theme_button color1"
                      >
                        Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section
          id="blog"
          class="ls ms section_padding_top_150 section_padding_bottom_130"
        >
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <h4 class="thin margin_0 text-uppercase">Latest news</h4>
                <h2 class="section_header">Blog Posts</h2>
              </div>
            </div>
            <div class="row columns_margin_bottom_20">
              <div class="col-md-4 col-sm-6">
                <article
                  class="vertical-item content-padding big-padding with_background text-center overflow-hidden"
                >
                  <div class="item-media">
                    <img src="images/gallery/05.jpg" alt="" />

                    <div class="media-links">
                      <a href="blog-single-left.html" class="abs-link"></a>
                    </div>
                  </div>
                  <div class="item-content">
                    <span class="entry-date small-text main_bg_color rounded">
                      <time
                        class="entry-date"
                        datetime="2017-03-13T08:50:40+00:00"
                      >
                        June 12, 2017
                      </time>
                    </span>
                    <h4 class="entry-title">
                      <a href="blog-single-left.html"
                        >Super-fast &amp; active team</a
                      >
                    </h4>
                    <p>
                      You would find our team super-fast and active, who put
                      work first, to deliver to you on time.
                    </p>
                  </div>
                </article>
              </div>
              <div class="col-md-4 col-sm-6">
                <article
                  class="vertical-item content-padding big-padding with_background text-center overflow-hidden"
                >
                  <div class="item-media">
                    <img src="images/gallery/06.jpg" alt="" />

                    <div class="media-links">
                      <a href="blog-single-left.html" class="abs-link"></a>
                    </div>
                  </div>
                  <div class="item-content">
                    <span class="entry-date small-text main_bg_color rounded">
                      <time
                        class="entry-date"
                        datetime="2017-03-13T08:50:40+00:00"
                      >
                        June 12, 2017
                      </time>
                    </span>
                    <h4 class="entry-title">
                      <a href="blog-single-left.html"
                        >Professional movers team</a
                      >
                    </h4>
                    <p>
                      Our professional team of movers is trained to provide you
                      with awesome services.
                    </p>
                  </div>
                </article>
              </div>
              <div class="col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-0">
                <article
                  class="vertical-item content-padding big-padding with_background text-center overflow-hidden"
                >
                  <div class="item-media">
                    <img src="images/gallery/07.jpg" alt="" />

                    <div class="media-links">
                      <a href="blog-single-left.html" class="abs-link"></a>
                    </div>
                  </div>
                  <div class="item-content">
                    <span class="entry-date small-text main_bg_color rounded">
                      <time
                        class="entry-date"
                        datetime="2017-03-13T08:50:40+00:00"
                      >
                        June 12, 2017
                      </time>
                    </span>
                    <h4 class="entry-title">
                      <a href="blog-single-left.html">Affordable Price</a>
                    </h4>
                    <p>
                      Often when the price is less, the quality goes down, but
                      that’s not the case with us.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          id="review"
          class="ls section_padding_top_150 section_padding_bottom_150"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-lg-offset-1 text-center">
                <div
                  class="owl-carousel testimonials-owl-dots"
                  data-responsive-lg="3"
                  data-responsive-md="3"
                  data-responsive-sm="3"
                  data-responsive-xs="3"
                  data-center="true"
                  data-loop="true"
                  data-margin="30"
                  data-touch-drag="false"
                  data-mouse-drag="false"
                >
                  <div>
                    <img src="images/faces/01.jpg" alt="" />
                  </div>

                  <div>
                    <img src="images/faces/02.jpg" alt="" />
                  </div>

                  <div>
                    <img src="images/faces/03.jpg" alt="" />
                  </div>
                </div>

                <div
                  class="owl-carousel testimonials-owl-content topmargin_20"
                  data-responsive-lg="1"
                  data-responsive-md="1"
                  data-responsive-sm="1"
                  data-responsive-xs="1"
                  data-loop="true"
                  data-margin="20"
                  data-dots="true"
                  data-nav="false"
                >
                  <blockquote class="with_single_quote text-center">
                    <div class="item-meta">
                      <h3 class="bottommargin_0">Lakisha Knaus</h3>
                      <p class="small-text grey">Customer</p>
                    </div>
                    These guys are the best movers that I have ever used! With
                    all of the positive reviews, how could I go wrong? I called
                    them and had constant communication with Derek via phone and
                    email and felt reassured that everything was going to be
                    taken care of.
                  </blockquote>

                  <blockquote class="with_single_quote text-center">
                    <div class="item-meta">
                      <h3 class="bottommargin_0">Charly Williams</h3>
                      <p class="small-text grey">Customer</p>
                    </div>
                    1st Choice Movers came highly recommended to me from a
                    friend who had booked several moves with this company. I
                    contacted Derek and he emailed me directly with a quote
                    within 20 minutes.
                  </blockquote>

                  <blockquote class="with_single_quote text-center">
                    <div class="item-meta">
                      <h3 class="bottommargin_0">Albert Schneider</h3>
                      <p class="small-text grey">Customer</p>
                    </div>
                    I would 100% recommend 1st Choice Movers again. I had the
                    pleasure of working with Stivan an Ogen who were extremely
                    fast, organized and able to answer all of my questions. I
                    can’t even believe I was considering moving myself, these
                    guys made it so easy.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="faq"
          class="ls section_padding_top_150 section_padding_bottom_150"
        >
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <h4 class="thin margin_0 text-uppercase">FAQ</h4>
                <h2 class="section_header">Frequently Asked Questions</h2>
              </div>
            </div>
            <div
              class="row columns_margin_top_60 to_animate"
              data-animation="fadeInUp"
            >
              <div class="col-md-4">
                <div class="teaser with_border big_padding text-center rounded">
                  <div
                    class="teaser_icon main_bg_color big_icon round offset_icon fontsize_20"
                  >
                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                  </div>
                  <h4 class="medium">Do you move unique or very rare items?</h4>
                  <p>
                    Yes! We move almost all items. Be sure to let your Gorilla
                    Movers representative know ahead of time in case it requires
                    a third mover or special equipment.
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="teaser with_border big_padding text-center rounded">
                  <div
                    class="teaser_icon main_bg_color big_icon round offset_icon fontsize_20"
                  >
                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                  </div>
                  <h4 class="medium">
                    How do you take care of fragile items/antiques?
                  </h4>
                  <p>
                    It’s our mission to move your belongings safely and
                    securely. To ensure your items are moved unharmed, we
                    carefully pad and shrink wrap them.
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="teaser with_border big_padding text-center rounded">
                  <div
                    class="teaser_icon main_bg_color big_icon round offset_icon fontsize_20"
                  >
                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                  </div>
                  <h4 class="medium">
                    Can you pack my stuff or does it have to be packed?
                  </h4>
                  <p>
                    We are happy to pack your stuff! Be sure to tell us prior to
                    the move to ensure efficiency. To minimize costs, customers
                    have the option to pack their belongings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="subscribe"
          class="section_subscribe cs section_padding_top_65 section_padding_bottom_65 table_section table_section_md columns_padding_0"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-8 text-center text-md-left">
                <h3 class="margin_0">
                  Wanna always be updated?
                  <span class="grey">Subscribe to our Newsletter:</span>
                </h3>
              </div>
              <div class="col-md-4 text-center text-md-right">
                <div class="widget widget_mailchimp">
                  <form class="signup" action="./" method="get">
                    <div class="form-group margin_0">
                      <input
                        class="mailchimp_email form-control"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <button type="submit" class="theme_button no_bg_button">
                      Sign Up!
                    </button>
                    <div class="response"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer
          class="page_footer ds section_padding_top_150 section_padding_bottom_100 columns_padding_25"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-12">
                <div class="widget">
                    <h3 style={{marginTop: '10px'}}>Address</h3>
                  <div>
                    <div class="media small-teaser">
                      <div class="media-left media-middle">
                        <i
                        style={{fontSize: '17px' , marginLeft: '2px'}}
                          class="fa fa-map-marker highlight"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div class="media-body media-middle">
                        Mumbai Maharashtra India
                      </div>
                    </div>

                    <div class="media small-teaser">
                      <div class="media-left media-middle">
                        <i style={{  fontSize: "22px"}} class="fa fa-mobile highlight" aria-hidden="true"></i>
                      </div>
                      <div class="media-body media-middle">Call 24/7: +91 90215 57095</div>
                    </div>


                    <div class="media small-teaser">

                      <div class="media-left media-middle">
                        <i
                        style={{ fontSize: '13px',marginLeft:" 5px"}}
                          class="fa fa-envelope-o highlight"
                          aria-hidden="true"
                        ></i>
                      </div>


                      <div class="media-body media-middle darklinks">
                        Info@trans23.com
                      </div>
                    </div>
                  </div>

                  <div class="darklinks topmargin_30">
                    <a
                    style={{borderRadius: "28px"}}
                      href="#"
                      class="social-icon border-icon rounded-icon fa fa-facebook"
                    ></a>
                    <a
             style={{borderRadius: "28px"}}
                      href="#"
                      class="social-icon border-icon rounded-icon  fa fa-twitter"
                    ></a>
                    <a
                  style={{borderRadius: "28px"}}
                      href="#"
                      class="social-icon border-icon rounded-icon fa fa-instagram"
                    ></a>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="widget widget_contact topmargin_10">
                  <h3>Contact Us</h3>
                  <form class="contact-form" method="post" action="./">
                    <p class="form-group">
                      <label for="footer-name"
                        >Name <span class="required">*</span></label
                      >
                      <i class="fa fa-user highlight" aria-hidden="true"></i>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        value=""
                        name="name"
                        id="footer-name"
                        class="form-control"
                        placeholder="Full Name"
                      />
                    </p>
                    <p class="form-group">
                      <label for="footer-email"
                        >Email <span class="required">*</span></label
                      >
                      <i
                        class="fa fa-envelope highlight"
                        aria-hidden="true"
                      ></i>
                      <input
                        type="email"
                        aria-required="true"
                        size="30"
                        value=""
                        name="email"
                        id="footer-email"
                        class="form-control"
                        placeholder="Email Address"
                      />
                    </p>
                    <p class="form-group">
                      <label for="footer-message">Message</label>
                      <i class="fa fa-pencil highlight" aria-hidden="true"></i>
                      <textarea
                        aria-required="true"
                        rows="3"
                        cols="45"
                        name="message"
                        id="footer-message"
                        class="form-control"
                        placeholder="Message"
                      ></textarea>
                    </p>
                    <p class="footer_contact-form-submit topmargin_40">
                      <button
                        type="submit"
                        id="footer_contact_form_submit"
                        name="contact_submit"
                        class="theme_button color1"
                      >
                        Send Message
                      </button>
                    </p>
                  </form>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="widget widget_recent_posts topmargin_10">
                  <h3 class="widget-title">Recent Posts</h3>

                  <ul class="media-list">
                    <li class="media">
                      <div class="media-left media-middle">
                        <img src="images/recent_post1.jpg" alt="" />
                      </div>
                      <div class="media-body media-middle">
                        <h4>
                          <a href="blog-single-left.html">
                            Tail cupim officia short loin frankfurter alcatra
                          </a>
                        </h4>
                        <span class="fontsize_14">
                          <time
                            class="entry-date"
                            datetime="2017-03-13T08:50:40+00:00"
                          >
                            March 12, 2017
                          </time>
                        </span>
                      </div>
                    </li>

                    <li class="media">
                      <div class="media-left media-middle">
                        <img src="images/recent_post2.jpg" alt="" />
                      </div>
                      <div class="media-body media-middle">
                        <h4>
                          <a href="blog-single-left.html">
                            Biltong venison beef swine. Corned beef pork ham
                          </a>
                        </h4>
                        <span class="fontsize_14">
                          <time
                            class="entry-date"
                            datetime="2017-03-13T08:50:40+00:00"
                          >
                            March 13, 2017
                          </time>
                        </span>
                      </div>
                    </li>

                    <li class="media">
                      <div class="media-left media-middle">
                        <img src="images/recent_post3.jpg" alt="" />
                      </div>
                      <div class="media-body media-middle">
                        <h4>
                          <a href="blog-single-left.html">
                            Prosciutto hamburger filet mignon
                          </a>
                        </h4>
                        <span class="fontsize_14">
                          <time
                            class="entry-date"
                            datetime="2017-03-13T08:50:40+00:00"
                          >
                            March 14, 2017
                          </time>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <section class="ls page_copyright section_padding_15">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <p>&copy; Copyright 2023 All Rights Reserved</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- eof #box_wrapper --> */}
    </div>
    {/* <!-- eof #canvas --> */}
    </div>
  );
};

export default Main;