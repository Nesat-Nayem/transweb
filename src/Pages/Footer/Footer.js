import React from 'react';

const Footer = () => {
    return (
        <div>
             <footer id="footer" class="footer footer-1 i fs-16 ">
            <hr class="section-hr" />
            <div class="container pt-8 pb-6">
              <div class="layout-cols-3 layout-gap-50">
                <aside class="footer-widgets grid-wrapper">
                  <div
                    id="theme-meta-3"
                    class="widget-odd widget-first widget-1 grid-item widget widget_theme_meta"
                  >
                    <div class="widget-theme-meta-default ">
                      {/* <div class="theme-meta-img wp-block-image">
                        <img
                          src="wp-content/uploads/2022/04/logo.png"
                          alt=""
                        />
                      </div> */}
                       <h2 class="widget-title">Address</h2>

                    {/* <p style={{color:"red !important"}} class="sub-title">
                        Trans23 located in San Diego one of the major cities of
                        California. We are a one-stop solution to all your
                        moving problems.
                      </p> */}
                      {/* <!-- .sub-title--> */}
                      <div class="theme-meta">
                        <span class="icon-inline">
                          <span class="svg-icon icon-map-marker-outline">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                            </svg>
                          </span>

                          <span>
                            <span>Mumbai Maharashtra India</span>
                          </span>
                        </span>
                        <span style={{marginLeft:"3px"}} class="icon-inline">
                          <span class="svg-icon icon-phone-outline">
                            <svg
                              width="10"
                              height="17"
                              viewBox="0 0 10 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.5 1.5C7.89782 1.5 8.27936 1.65804 8.56066 1.93934C8.84196 2.22064 9 2.60218 9 3V14C9 14.3978 8.84196 14.7794 8.56066 15.0607C8.27936 15.342 7.89782 15.5 7.5 15.5H2.5C2.10218 15.5 1.72064 15.342 1.43934 15.0607C1.15804 14.7794 1 14.3978 1 14V3C1 2.60218 1.15804 2.22064 1.43934 1.93934C1.72064 1.65804 2.10218 1.5 2.5 1.5H7.5ZM8 2H2C1.86739 2 1.74021 2.05268 1.64645 2.14645C1.55268 2.24021 1.5 2.36739 1.5 2.5V14.5C1.5 14.776 1.724 15 2 15H8C8.13261 15 8.25979 14.9473 8.35355 14.8536C8.44732 14.7598 8.5 14.6326 8.5 14.5V2.5C8.5 2.36739 8.44732 2.24021 8.35355 2.14645C8.25979 2.05268 8.13261 2 8 2ZM5.49867 12.5C5.63127 12.4998 5.75852 12.5523 5.85242 12.646C5.94631 12.7396 5.99916 12.8667 5.99933 12.9993C5.99951 13.1319 5.947 13.2592 5.85336 13.3531C5.75972 13.447 5.63261 13.4998 5.5 13.5L4.50067 13.5027C4.36806 13.5028 4.24081 13.4503 4.14692 13.3567C4.05303 13.263 4.00018 13.1359 4 13.0033C3.99982 12.8707 4.05233 12.7435 4.14598 12.6496C4.23962 12.5557 4.36673 12.5028 4.49933 12.5027L5.49867 12.5Z" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.5 0.5C8.88071 0.5 10 1.61929 10 3V14C10 15.3807 8.88071 16.5 7.5 16.5H2.5C1.11929 16.5 0 15.3807 0 14V3C0 1.61929 1.11929 0.5 2.5 0.5H7.5ZM8.5 2H1.5V15H8.5V2Z"
                              />
                            </svg>
                          </span>
                          <span>
                            <strong>Call 24/7: </strong>
                            <span>+91 90215 57095</span>
                          </span>
                        </span>
                        <span class="icon-inline">
                          <span class="svg-icon icon-email-outline">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z" />
                            </svg>
                          </span>
                          <span>
                            <a href="mailto:mover@test.com">Info@trans23.com</a>
                          </span>
                        </span>
                      </div>
                      {/* <!-- .theme-meta --> */}
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
                        //   target="_blank"
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
                        //   target="_blank"
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
                    {/* <!-- .widget-theme-meta-default --> */}
                  </div>
                  <div
                    id="block-16"
                    class="widget-even widget-2 grid-item widget widget_block"
                  >
                    <div class="wp-block-group">
                      <div class="wp-block-group__inner-container">
                        <h2 class="widget-title">Contact Us</h2>

                        <p>
                          <div
                            // role="form"
                            class="wpcf7"
                            id="wpcf7-f5-o3"
                            // lang="en-US"
                            // dir="ltr"
                          >
                            <div class="screen-reader-response">
                              <p
                                // role="status"
                                // aria-live="polite"
                                // aria-atomic="true"
                              ></p>
                              <ul></ul>
                            </div>
                            <form
                            //   action="/mover-v2/#wpcf7-f5-o3"
                            //   method="post"
                              class="wpcf7-form init"
                            //   novalidate="novalidate"
                            //   data-status="init"
                            >
                              <div style={{ display: "none" }}>
                                <input type="hidden" name="_wpcf7" value="5" />
                                <input
                                  type="hidden"
                                //   name="_wpcf7_version"
                                  value="5.6.3"
                                />
                                <input
                                  type="hidden"
                                //   name="_wpcf7_locale"
                                  value="en_US"
                                />
                                <input
                                  type="hidden"
                                //   name="_wpcf7_unit_tag"
                                  value="wpcf7-f5-o3"
                                />
                                <input
                                  type="hidden"
                                //   name="_wpcf7_container_post"
                                  value="0"
                                />
                                <input
                                  type="hidden"
                                //   name="_wpcf7_posted_data_hash"
                                  value=""
                                />
                              </div>
                              <div class="form-with-icons">
                                <p>
                                  <span
                                    class="wpcf7-form-control-wrap"
                                    // data-name="your-name"
                                  >
                                    <input
                                      type="text"
                                      name="your-name"
                                    //   value=""
                                    //   size="40"
                                      class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                    //   aria-required="true"
                                    //   aria-invalid="false"
                                      placeholder="Full Name"
                                    />
                                  </span>
                                  <i class="fa fa-user highlight"></i>
                                </p>
                                <p>
                                  <span
                                    class="wpcf7-form-control-wrap"
                                    // data-name="your-email"
                                  >
                                    <input
                                      type="email"
                                      name="your-email"
                                      value=""
                                      size="40"
                                      class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                                    //   aria-required="true"
                                    //   aria-invalid="false"
                                      placeholder="Email address"
                                    />
                                  </span>
                                  <i class="fa fa-envelope highlight"></i>
                                </p>
                                <p>
                                  <span
                                    class="wpcf7-form-control-wrap"
                                    data-name="your-message"
                                  >
                                    <textarea
                                      name="your-message"
                                      cols="45"
                                      rows="3"
                                      class="wpcf7-form-control wpcf7-textarea form-control"
                                    //   aria-invalid="false"
                                      placeholder="Message"
                                    ></textarea>
                                  </span>
                                  <i class="fa fa-pencil highlight"></i>
                                </p>
                                <p>
                                  <input
                                    type="submit"
                                    value="Send Message"
                                    class="wpcf7-form-control has-spinner wpcf7-submit theme_button color1 topmargin_40"
                                  />
                                </p>
                              </div>
                              <div
                                class="wpcf7-response-output"
                                aria-hidden="true"
                              ></div>
                            </form>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    id="custom-posts-4"
                    class="widget-odd widget-last widget-3 grid-item widget widget_custom_posts"
                  >
                    <div class="widget-posts-default  layout-default layout-gap- ">
                      <h3 class="widget-title">
                        <span>
                          <span style={{marginRight:"10px"}} class="widget-title-word widget-title-word-1">
                            Recent
                          </span>
                          <span class="widget-title-word widget-title-word-2">
                            Posts
                          </span>
                        </span>
                      </h3>
                      <ul class="posts-list">
                        <li class="list-has-post-thumbnail">
                          <a
                            class="posts-list-thumbnail"
                            href="meatball-drumstick-ham-porchetta-doner-pastrami/"
                          >
                            <img
                              width="150"
                              height="150"
                              src="wp-content/uploads/2022/04/bottom-150x150.jpg"
                              class="attachment-thumbnail size-thumbnail wp-post-image"
                              alt="Meatball drumstick ham porchetta doner pastrami"
                            //   loading="lazy"
                            />
                            <span class="svg-icon icon-video">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.4211 7.02541C14.193 7.45856 14.193 8.54144 13.4211 8.97459L4.73684 13.8476C3.96491 14.2807 3 13.7393 3 12.873L3 3.12704C3 2.26074 3.96491 1.7193 4.73684 2.15245L13.4211 7.02541Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </a>
                          <div class="item-content">
                            <h3 class="post-title">
                              <a href="meatball-drumstick-ham-porchetta-doner-pastrami/">
                                Meatball drumstick ham porchetta doner pastrami
                              </a>
                            </h3>
                            <div class="icon-inline-wrap">
                              <span class="icon-inline post-date">
                                April 26, 2022
                              </span>
                            </div>
                          </div>
                        </li>
                        <li class="list-has-post-thumbnail">
                          <a
                            class="posts-list-thumbnail"
                            href="turkey-spare-ribs-short-loin-venison-rump-ground/"
                          >
                            <img
                              width="150"
                              height="150"
                              src="wp-content/uploads/2022/04/02-5-150x150.jpg"
                              class="attachment-thumbnail size-thumbnail wp-post-image"
                              alt="Turkey spare ribs short loin venison rump ground"
                            //   loading="lazy"
                            />
                            <span class="svg-icon icon-image">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                              </svg>
                            </span>
                          </a>
                          <div class="item-content">
                            <h3 class="post-title">
                              <a href="turkey-spare-ribs-short-loin-venison-rump-ground/">
                                Turkey spare ribs short loin venison rump ground
                              </a>
                            </h3>
                            <div class="icon-inline-wrap">
                              <span class="icon-inline post-date">
                                April 26, 2022
                              </span>
                            </div>
                          </div>
                        </li>
                        <li class="list-has-post-thumbnail">
                          <a
                            class="posts-list-thumbnail"
                            href="swine-ground-round-pork-chop-pastrami-ball-tip/"
                          >
                            <img
                              width="150"
                              height="150"
                              src="wp-content/uploads/2022/04/03-5-150x150.jpg"
                              class="attachment-thumbnail size-thumbnail wp-post-image"
                              alt="Swine ground round pork chop pastrami ball tip"
                              loading="lazy"
                            />
                            <span class="svg-icon icon-image">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                              </svg>
                            </span>
                          </a>
                          <div class="item-content">
                            <h3 class="post-title">
                              <a href="swine-ground-round-pork-chop-pastrami-ball-tip/">
                                Swine ground round pork chop pastrami ball tip
                              </a>
                            </h3>
                            <div class="icon-inline-wrap">
                              <span class="icon-inline post-date">
                                April 26, 2022
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- .widget-posts-default --> */}
                  </div>
                </aside>
                {/* <!-- .footer-widgets> --> */}
              </div>
            </div>
            {/* <!-- .container --> */}
          </footer>
          {/* <!-- #footer --> */}
          <div id="copyright" class="copyright  fs-12 ">
            <div class="container pt-1 pb-1">
              <div class="copyright-text text-center">
                © Copyright <span class="copyright-year">2022</span> All rights
                reserved
              </div>
            </div>
            {/* <!-- .container --> */}
          </div>
          {/* <!-- #copyright --> */}    
        </div>
    );
};

export default Footer;