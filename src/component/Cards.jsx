import React from "react";
import img1 from "../assets/tonikroos.jpg";
import img2 from "../assets/christiano.jpg";
import img4 from "../assets/ikercasillas.jpg";
import img3 from "../assets/james.jpg";
import img5 from "../assets/zidane.jpg";

import LinkedIn from "../assets/linkedin.png" 
import Medium from "../assets/medium.png" 
import Facebook from "../assets/facebook.png" 


function Temp() {
  return (
    <>
      <div class="container">
            <div class="card">
                <div class="card-header">
                    <img src={img1} alt="rover" />
                </div>
                <div class="card-body">
                    <h1>Toni</h1>
                    <h3>Product Developer</h3>
                </div>
                <div class="socail_icons" >
                    <img src={LinkedIn}/>
                    <img src={Medium}/>
                    <img src={Facebook}/>
                </div>
            </div>



            <div class="card">
            <div class="card-header">
                <img src={img2}  alt="rover" />
            </div>
            <div class="card-body">
                <h1>Cris</h1>
                <h3>Financial Operations</h3>
            </div>
            <div class="socail_icons" >
                    <img src={LinkedIn}/>
                    <img src={Medium}/>
                    <img src={Facebook}/>
                </div>
            </div>

            <div class="card">
            <div class="card-header">
                <img src={img4} alt="rover" />
            </div>
            <div class="card-body">
                <h1>Zidan </h1>
                <h3>Management </h3>
            </div>
            <div class="socail_icons" >
                    <img src={LinkedIn}/>
                    <img src={Medium}/>
                    <img src={Facebook}/>
                </div>
            </div>


            <div class="card">
            <div class="card-header">
                <img src={img5} alt="rover" />
            </div>
            <div class="card-body">
                <h1>James</h1>
                <h3>Product Designer</h3>
            </div>
            <div class="socail_icons" >
                    <img src={LinkedIn}/>
                    <img src={Medium}/>
                    <img src={Facebook}/>
                </div>
            </div>

            <div class="card">
            <div class="card-header">
                <img src={img3} alt="rover" />
            </div>
            <div class="card-body">
                <h1>Iker  </h1>
                <h3>Marketing</h3>
            </div>
            <div class="socail_icons" >
                    <img src={LinkedIn}/>
                    <img src={Medium}/>
                    <img src={Facebook}/>
                </div>
            </div>


      </div>
    </>
  );
}

export default Temp;
