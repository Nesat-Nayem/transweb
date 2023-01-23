import React from 'react';

const About = () => {
    return (
        <div>
        
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
                <img src="https://i.ibb.co/Z1kkZJs/change.png" alt="" class="top-overlap" />
              </div>
            </div>
          </div>
        </section>

        </div>
    );
};

export default About;