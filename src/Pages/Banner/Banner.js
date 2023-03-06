import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="intro_section page_mainslider ">
        <div className="flexslider" data-nav="false">
          <ul className="slides">
            <li className="">
              <img
                id="mainImage"
                src="https://img.staticmb.com/mbcontent/images/uploads/2022/12/packers-and-movers-in-Patna.jpg"
                alt=""
              />
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 text-right">
                    <div className="slide_description_wrapper">
                      <div className="slide_description text-left">
                        <div className="intro-layer" data-animation="fadeInUp">
                          <h3 style={{ color: "#000" }}>Find out why we're</h3>
                          <h2 style={{ color: "#000" }}>
                            <span className="highlight">#1</span> Moving
                          </h2>
                        </div>
                        <div className="intro-layer" data-animation="fadeInUp">
                          <p className="grey" style={{ color: "#000" }}>
                            <span className="bold">Trans23 Company</span> is a
                            local moving company with experts and professionals,
                            who cater to customer needs with safety, care and
                            love. Call us now:
                            <span className="bold">01 123 456 789</span>
                          </p>
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
              <img
                id="mainImage"
                src="https://ombannapackersmovers.com/wp-content/uploads/2022/07/sl3-1.jpg"
                alt=""
              />
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="slide_description_wrapper">
                      <div className="slide_description">
                        <div className="intro-layer" data-animation="fadeInUp">
                          <h3>
                            Over
                            <span className="highlight">600</span> Reviews
                          </h3>
                          <h2>Five Stars</h2>
                        </div>
                        <div className="intro-layer" data-animation="fadeInUp">
                          <p className="grey">
                            <span className="bold">Trans23 Company</span> is a
                            local moving company with experts and professionals,
                            who cater to customer needs with safety, care and
                            love. Call us now:
                            <span className="bold">01 123 456 789</span>
                          </p>
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
    </>
  );
};

export default Banner;
