
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Package.css";





const Packages = (props) => {

  console.log('test props',props)

  
  const navigate = useNavigate();

  function handleClick() {
    navigate("/chackout");
  }




    return (
      <>
   <div className="mainclass" id="mainpackageid">
 <div style={{marginTop:"50px", marginBottom:"30px", display:'flex', flexWrap:'wrap', justifyContent:'flex-start' , columnGap:"30px", }} class="wrapper">


    <div class="table movers">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">29</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Own User Access</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Dashbord For Manage</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Report Analysis </span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
        <li>
          <span class="list-name">24/7 Support</span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button onClick={handleClick} style={{padding: "0px", fontSize: '17px'}}  >Purchase</button></div>
    </div>


    <div class="table courier">
      <div class="ribbon"><span>Recommend</span></div>
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">59</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Own User Access</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Dashbord For Manage</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Report Analysis</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">24/7 Support</span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button onClick={handleClick} style={{padding: "12px", fontSize: '17px', background: 'linear-gradient(135deg, #71b7e6, #9b59b6)'}}>Purchase</button></div>
    </div>


    <div class="table storage">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">99</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Own User Access</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Dashbord For Manage</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Report Analysis</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">24/7 Support</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
      </ul>
      <div class="btn"><button onClick={handleClick} style={{padding: "0px", fontSize: '17px'}} >Purchase</button></div>
    </div>




    <div class="table vehicle">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">29</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Own User Access</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Dashbord For Manage</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Report Analysis </span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
        <li>
          <span class="list-name">24/7 Support</span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button onClick={handleClick}  style={{padding: "0px", fontSize: '17px'}}>Purchase</button></div>
    </div>

    <div class="table allp">
      <div class="ribbon"><span>Recommend</span></div>
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">59</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Own User Access</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Dashbord For Manage</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Report Analysis</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">24/7 Support</span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button onClick={handleClick} style={{padding: "12px", fontSize: '17px', background: 'linear-gradient(135deg, #71b7e6, #9b59b6)'}}>Purchase</button></div>
    </div>





  </div>
      </div>  


      </>              
    );
};

export default Packages;