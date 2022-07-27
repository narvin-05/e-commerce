import React from "react";
import styled from "styled-components";
import img from "../assets/grasspic.jpg";
import logo from "../assets/bg_journey.png";
import { AiOutlineDollar } from "react-icons/ai";
import "./Journey.css";

function Journey() {
  return (
    <>
      {/* <h1>Journey</h1> */}
      <Container>
        <Upper>
          <img src={img} />
          <Text>Hello Journey</Text>
        </Upper>
      </Container>
      <LowerContainer>
        <LUpper>
          <img src={logo} />
          
          <LText>
            <div className="first">
              <h3>THE ROOTS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                fugiat sunt consectetur ducimus dolorum perspiciatis, corporis
                eaque vero modi rerum?
              </p>
            </div>
            {/* &nbsp; */}
            <div className="sec">
              <h3>CHAPTER |</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                fugiat sunt consectetur ducimus dolorum perspiciatis, corporis
                eaque vero modi rerum?
              </p>
            </div>
            {/* &nbsp; */}
            <div className="third">
              <h3>CHAPTER ||</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                fugiat sunt consectetur ducimus dolorum perspiciatis, corporis
                eaque vero modi rerum?
              </p>
            </div>
            {/* &nbsp; */}
            <div className="fourth">
              <h3>KICKSUP</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                fugiat sunt consectetur ducimus dolorum perspiciatis, corporis
                eaque vero modi rerum?
              </p>
            </div>
           
          </LText>
        </LUpper>
      </LowerContainer>
    </>
  );
}

export default Journey;

const Container = styled.div`
  /* border: 3px solid black; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
`;

const Upper = styled.div`
  /* border: 3px solid blue; */
  text-align: center;
  justify-content: center;
  display: flex;
  img {
    object-fit: cover;
    width: 900px;
    height: 270px;
  }

`;
const Text = styled.h2`
  font-size: 80px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  text-align: center;
  transform: translate(0%, 70%);
  height: fit-content;
  margin: auto;
`;

const LowerContainer = styled.div`
  /* border: 3px solid black; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
`;

const LUpper = styled.div`
  border: 3px solid blue;
  width: 900px;
  /* align-items: center; */
  /* transform: translate(0%,-5%); */
  /* margin-bottom: 20px; */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;

  /* border-radius:15px;
  border-style:solid;
  border-width:1px;
  border-color:red;
  box-shadow: 0px 0px 15px rgba(255,0,0); */

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  img {
    object-fit: cover;
    width: 900px;
    height: 570px;
    filter: brightness(15%);
  }
`;
const LText = styled.div`
  color: #ffffff;
  text-align: center;
  position: absolute;
  /* display: flex; */
  text-align: center;
  transform: translate(0%, 20%);
  height: fit-content;
  margin: auto;
`;
