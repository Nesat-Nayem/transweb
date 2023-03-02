import React from "react";
import "./Banner.css";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
const Banner = () => {
  return (
    <>
      <section className="intro_section page_mainslider ls ms">
        <div className="flexslider" data-nav="false">
          <ul className="slides">
            <li className="ds">
              <img
                id="mainImage"
                src="https://i.ibb.co/TtfPcr1/Whats-App-Image-2022-12-22-at-11-44-47-AM.jpg"
                alt=""
              />
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <div className="slide_description_wrapper">
                      <div className="slide_description">
                        <div className="intro-layer" data-animation="fadeInUp">
                          <h3 className="highlight">
                            Commercial &amp; Residential
                          </h3>
                          <h2>Moving Services</h2>
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
                        <div className="intro-layer" data-animation="fadeInUp">
                          <div
                            style={{ marginTop: "27px" }}
                            className="d-flex justify-content-left mt-4 "
                          >
                            <button
                              id="appleapp"
                              type="button"
                              className=" py-3  text-white  ms-4"
                              style={{
                                alignItems: "center",
                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                marginRight: "20px",
                                padding: "10px 41px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <BsApple
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />{" "}
                              app store
                            </button>

                            <button
                              id="Gplay"
                              type="button"
                              className="  py-3  text-white  mr-4"
                              style={{
                                alignItems: "center",

                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                padding: "10px 35px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <FaGooglePlay
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />
                              google-play
                            </button>
                            <button
                              id="Franchies_btn_mobile"
                              type="button"
                              className="py-3  text-white  mr-5"
                              style={{
                                alignItems: "center",
                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                padding: "10px 35px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <AiOutlineLogin
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />
                              FRANCHISES REGISTER
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <img
                id="mainImage"
                src="https://i.ibb.co/SV5Q1Mh/Whats-App-Image-2022-12-22-at-11-59-47-AM.jpg"
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
                        <div className="intro-layer" data-animation="fadeInUp">
                          <div
                            style={{ marginTop: "27px" }}
                            className="d-flex justify-content-left mt-4 "
                          >
                            <button
                              id="appleapp"
                              type="button"
                              className=" py-3  text-white  ms-4"
                              style={{
                                // display: "flex",
                                alignItems: "center",
                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                marginRight: "20px",
                                padding: "10px 41px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <BsApple
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />{" "}
                              app store
                            </button>

                            <button
                              id="Gplay"
                              type="button"
                              className="  py-3  text-white  mr-4"
                              style={{
                                alignItems: "center",

                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                padding: "10px 35px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <FaGooglePlay
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />
                              google-play
                            </button>
                            <button
                              id="Franchies_btn_mobile"
                              type="button"
                              className="py-3  text-white  mr-5"
                              style={{
                                alignItems: "center",
                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                padding: "10px 35px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <AiOutlineLogin
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />
                              FRANCHISES REGISTER
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="ds">
              <img
                id="mainImage"
                src="https://i.ibb.co/vdbkc7b/Whats-App-Image-2022-12-22-at-12-15-02-PM.jpg"
                alt=""
              />
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 text-right">
                    <div className="slide_description_wrapper">
                      <div className="slide_description text-left">
                        <div className="intro-layer" data-animation="fadeInUp">
                          <h3>Find out why we're</h3>
                          <h2>
                            <span className="highlight">#1</span> Moving
                          </h2>
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
                        <div className="intro-layer" data-animation="fadeInUp">
                          <div
                            style={{ marginTop: "27px" }}
                            className="d-flex justify-content-left mt-4 "
                          >
                            <button
                              id="appleapp"
                              type="button"
                              className=" py-3  text-white  ms-4"
                              style={{
                                // display: "flex",
                                alignItems: "center",
                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                marginRight: "20px",
                                padding: "10px 41px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <BsApple
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />{" "}
                              app store
                            </button>

                            <button
                              id="Gplay"
                              type="button"
                              className="  py-3  text-white  mr-4"
                              style={{
                                // display: "flex",
                                alignItems: "center",

                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                padding: "10px 35px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <FaGooglePlay
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />
                              google-play
                            </button>
                            <button
                              id="Franchies_btn_mobile"
                              type="button"
                              className="py-3  text-white  mr-5"
                              style={{
                                alignItems: "center",
                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                padding: "10px 35px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <AiOutlineLogin
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />
                              FRANCHISES REGISTER
                            </button>
                          </div>
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
    </>
  );
};

export default Banner;
