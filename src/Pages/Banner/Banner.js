import React from 'react';

const Banner = () => {
    return (
        <div>

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
                {/* <a href="#" class="theme_button margin_0">Order moving</a> */}
              </div>
            </div>
          </div>
        </section>

        <section class="intro_section page_mainslider ls ms">
          <div class="flexslider" data-nav="false">
            <ul class="slides">


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
                              <span class="highlight">#1</span> Moving
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


            </ul>
          </div>
        </section>

        </div>
    );
};

export default Banner;