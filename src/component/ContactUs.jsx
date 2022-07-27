import React from "react";
import "./ContactUs.css";


import insta from "../assets/insta.png" 
import twitter from "../assets/twitter.png" 
import Facebook from "../assets/facebook.png" 




function ContactUs() {
  return (
    <>
      <div className="ContactContainer">
        <div className="ContactCard">
          <div className="ContactHeader">
            <h1>REACT US AT</h1>
          </div>
          <div className="ContactBody">
              <div className="first">
                  <h3>support@kicksup.com</h3>
                  <p>For any technical support</p>
              </div>
              <div className="first">
                  <h3>info@kicksup.com</h3>
                  <p>For any information</p>
              </div>
              <div className="first">
                  <h3>feedback@kicksup.com</h3>
                  <p>to send your feedback</p>
              </div>
              <div className="first">
                  <h3>jobs@kicksup.com</h3>
                  <p>to work with us</p>
              </div>
              
          </div>
          
        </div>


      </div>
    </>
  );
}

export default ContactUs;
