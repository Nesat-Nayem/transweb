import React from 'react';

import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
const DownloadApps = () => {
    return (
        <div>
                 {/* start apps downlod section  */}

      <section style={{ background: "#F3F4F6" , paddingBottom:"100px"}}>
        <div className="container">
          <div className="row clearfix">
            {/* <!-- Image Column --> */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img src="https://i.ibb.co/P1PHxLB/Whats-App-Image-2022-12-22-at-11-08-01-AM.jpg" alt="" />
                </div>
              </div>
            </div>

            {/* <!-- Content Column --> */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h2
                    className="my-4"
                    style={{
                      color: "#9CA3AF",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Easy And Perfect Solution Trans23 App
                  </h2>
                </div>
                <div className="text">
                  <p style={{ fontSize: "1.125rem" }}>
                    Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Nulla Placeat Deserunt Saepe Repudiandae Veniam Soluta
                    Minima Dolor Hic Aperiam Iure.
                    <br />
                    <br />
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.
                    Laudantium, Quaerat. Dolorem Ratione Saepe Magni Quo
                    Inventore Porro Ab Voluptates Eos, Nam Eius Provident
                    Accusantium, Quia Similique Est, Repellendus Et Reiciendis.
                  </p>
                </div>
                <div  className=" clearfix ">
                  <div className="d-flex justify-content-left mt-4 ">
                    {/* <div className='row'>
                      <div className='col-12'> */}
                      <button
                      type="button"
                      className=" py-3  text-white  ms-4"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "43px",
                        background: "linear-gradient(90deg, #814096, #F83292)",
                        border: "none",
                        marginRight:"20px",
                        padding: "10px 41px",
                        fontSize: "18px",
                        borderRadius: "25px",
                      }}
                    >
                      
                      <BsApple style={{marginRight:"10px"}} className="mr-2" /> app store
                    </button>
                      {/* </div>
                      <div  className='col-12'> */}
                      <button
                      type="button"
                      className="  py-3  text-white  mr-4"
                      style={{
                        display: "flex",
                        alignItems: "center",
                    
                        height: "43px",
                        background: "linear-gradient(90deg, #814096, #F83292)",
                        border: "none",
                        padding: "10px 35px",
                        fontSize: "18px",
                        borderRadius: "25px",
                      }}
                    >
                      
                      <FaGooglePlay style={{marginRight:"10px"}} className="mr-2" />
                      google-play
                    </button>
                      {/* </div> */}
                    {/* </div> */}
          
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end apps downlod section  */} 
        </div>
    );
};

export default DownloadApps;