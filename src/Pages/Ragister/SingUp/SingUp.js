import React from "react";
import './SingUp.css'
const SingUp = () => {
  return (
    <div id="singuppage">
    <div className="fullpage">
      <div class="fromContainer">
        <div class="title">Franchises Registration</div>
        <div class="content">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                <span class="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div class="input-box">
                <span class="details">Email</span>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div class="input-box">
                <span class="details">Address</span>
                <input type="text" placeholder="Enter your Address" required />
              </div>
              <div class="input-box">
                <span class="details">State</span>
                <input type="text" placeholder="Enter your State" required />
              </div>
              <div class="input-box">
                <span class="details">City</span>
                <input type="text" placeholder="Enter your City" required />
              </div>
              <div class="input-box">
                <span class="details">Pin Code</span>
                <input type="text" placeholder="Enter your Pincode" required />
              </div>
              <div class="input-box">
                <span class="details">NID</span>
                <input type="file" id="fileupload" placeholder="Enter your email" required />

                  
                {/* </input> */}
                {/* <label for="file">Upload NID</label> */}
              </div>
          
              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password" required />
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            {/* <div class="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                  <span class="dot one"></span>
                  <span class="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span class="dot two"></span>
                  <span class="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span class="dot three"></span>
                  <span class="gender">Prefer not to say</span>
                </label>
              </div>
            </div> */}
            <div class="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SingUp;
