import React from "react";
import Cards from "./Cards";
import styled from "styled-components";
import "./Cards.css"

function Team() {
  return (
    <>
      <Container>
        <p>
          Without bonding and coordination, every project is a failure. Look at
          who makes KICKSUP great ;)
        </p>    
      </Container>
      <Cards/>
      <div className="lower" >
            <h1>
            and You! ;)
            </h1> 
      </div>
    </>
  );
}

export default Team;

const Container = styled.div`
  /* border: 3px solid black; */
  margin-top: 20px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
