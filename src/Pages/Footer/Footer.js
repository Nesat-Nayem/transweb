import React from 'react';

const Footer = () => {
    return (
        <div>
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
    );
};

export default Footer;