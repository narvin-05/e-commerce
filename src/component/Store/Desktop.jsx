import React from "react";
import styled from "styled-components";
import { FaFilter } from "react-icons/fa";
import "./Desktop.css";
import { BiSearch } from "react-icons/bi";
import img1 from "../../assets/shoe2.png"


function Desktop() {
  return (
    <>
      <Container>
        <Filter>
          <Header>
            <h2>FILTERS</h2>
            <FaFilter
              style={{
                marginTop: "25px",
                marginLeft: "auto",
                marginRight: "28px",
                alignItems: "center",
              }}
            />
          </Header>
          <Body>
            <div style={{ marginLeft: "15px" }}>
              <h2>Cost</h2>
            </div>
            <Input style={{ marginLeft: "15px", marginBottom: "20px" }}>
              <input type="checkbox" value="Pa" />
              <span>Rs. 1500-4001 </span>
              <br />
              <input type="checkbox" value="Paneer" />
              <span>Rs. 4001-7000 </span>
              <br />
              <input type="checkbox" value="Paneer" />
              <span>Rs. 7000+ </span>
              <br />
            </Input>
            <div style={{ marginLeft: "15px" }}>
              <h2>Color</h2>
            </div>
            <Color>
              <div className="size first"></div>
              <div className="size sec "></div>
              <div className="size third"></div>
              <div className="size fourth"></div>
              <div className="size fifth "></div>
            </Color>
            <div style={{ marginLeft: "15px" }}>
              <h2>Design Templates</h2>
            </div>
            <Input style={{ marginLeft: "15px", marginBottom: "20px" }}>
              <input type="checkbox" value="Pa" />
              <span>2 </span>
              <br />
              <input type="checkbox" value="Paneer" />
              <span>3 </span>
              <br />
              <input type="checkbox" value="Paneer" />
              <span>3+ </span>
              <br />
            </Input>
            <div style={{ marginLeft: "15px" }}>
              <h2>Type</h2>
            </div>
            <Input style={{ marginLeft: "15px", marginBottom: "20px" }}>
              <input type="checkbox" value="Pa" />
              <span>Loafers</span>
              <br />
              <input type="checkbox" value="Paneer" />
              <span>Sneakers</span>
              <br />
            </Input>
            <div
              style={{
                marginBottom: "15px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                type="submitt"
                style={{
                  height: "25px",
                  width: "80px",
                  backgroundColor: "black",
                  padding: "0px",
                }}
              >
                <h3 style={{ color: "white", height: "20px", margin: "0px" }}>
                  Apply
                </h3>
              </button>
            </div>
          </Body>
        </Filter>
        <Product>
          <ProductHeader>
            <h1>Shoes</h1>
            <div
              style={{
                float: "left",
                justifyContent: "space-between",
                width: "190px",
              }}
            >
              <BiSearch
                size={25}
                style={{ marginLeft: "auto", alignItems: "center" }}
              />
              <button
                type="submitt"
                style={{
                  height: "25px",
                  marginRight: "10px",
                  width: "80px",
                  padding: "0px",
                  float: "right",
                }}
              >
                <h3 style={{ height: "20px", margin: "0px" }}>Sort by</h3>
              </button>
            </div>
          </ProductHeader>
          <ProductBody>
                <div class="DeskCard">
                <div class="DeskHeader">
                    <img src={img1} alt="rover"   />
                </div>
                <div className="DeskBody" >
                    <div style={{ height:'40px',marginBottom:'auto',marginRight:'auto'}}>
                        <h1 style={{marginTop:'auto'}} >KSL 01</h1>
                        <div style={{display:'flex',width:'300px',height:'40px',transform:'translate(0%,-80%)'}} >
                            <h3>Rs. 2000/- </h3>
                            <span style={{float:'right',margin:'14px',marginLeft:'auto'}} >
                                &#11088;&#11088;&#11088;&#11088;&#11088;
                            </span>
                        </div>
                    </div>
                </div>
                </div>


                <div class="DeskCard">
                <div class="DeskHeader">
                    <img src={img1} alt="rover"   />
                </div>
                <div className="DeskBody" >
                    <div style={{ height:'40px',marginBottom:'auto',marginRight:'auto'}}>
                        <h1 style={{marginTop:'auto'}} >KSL 01</h1>
                        <div style={{display:'flex',width:'300px',height:'40px',transform:'translate(0%,-80%)'}} >
                            <h3>Rs. 2000/- </h3>
                            <span style={{float:'right',margin:'14px',marginLeft:'auto'}} >
                                &#11088;&#11088;&#11088;&#11088;&#11088;
                            </span>
                        </div>
                    </div>
                </div>
                </div>


                <div class="DeskCard">
                <div class="DeskHeader">
                    <img src={img1} alt="rover"   />
                </div>
                <div className="DeskBody" >
                    <div style={{ height:'40px',marginBottom:'auto',marginRight:'auto'}}>
                        <h1 style={{marginTop:'auto'}} >KSL 01</h1>
                        <div style={{display:'flex',width:'300px',height:'40px',transform:'translate(0%,-80%)'}} >
                            <h3>Rs. 2000/- </h3>
                            <span style={{float:'right',margin:'14px',marginLeft:'auto'}} >
                                &#11088;&#11088;&#11088;&#11088;&#11088;
                            </span>
                        </div>
                    </div>
                </div>
                </div>

                <div class="DeskCard">
                <div class="DeskHeader">
                    <img src={img1} alt="rover"   />
                </div>
                <div className="DeskBody" >
                    <div style={{ height:'40px',marginBottom:'auto',marginRight:'auto'}}>
                        <h1 style={{marginTop:'auto'}} >KSL 01</h1>
                        <div style={{display:'flex',width:'300px',height:'40px',transform:'translate(0%,-80%)'}} >
                            <h3>Rs. 2000/- </h3>
                            <span style={{float:'right',margin:'14px',marginLeft:'auto'}} >
                                &#11088;&#11088;&#11088;&#11088;&#11088;
                            </span>
                        </div>
                    </div>
                </div>
                </div>

                <div class="DeskCard">
                <div class="DeskHeader">
                    <img src={img1} alt="rover"   />
                </div>
                <div className="DeskBody" >
                    <div style={{ height:'40px',marginBottom:'auto',marginRight:'auto'}}>
                        <h1 style={{marginTop:'auto'}} >KSL 01</h1>
                        <div style={{display:'flex',width:'300px',height:'40px',transform:'translate(0%,-80%)'}} >
                            <h3>Rs. 2000/- </h3>
                            <span style={{float:'right',margin:'14px',marginLeft:'auto'}} >
                                &#11088;&#11088;&#11088;&#11088;&#11088;
                            </span>
                        </div>
                    </div>
                </div>
                </div>


                <div class="DeskCard">
                <div class="DeskHeader">
                    <img src={img1} alt="rover"   />
                </div>
                <div className="DeskBody" >
                    <div style={{ height:'40px',marginBottom:'auto',marginRight:'auto'}}>
                        <h1 style={{marginTop:'auto'}} >KSL 01</h1>
                        <div style={{display:'flex',width:'300px',height:'40px',transform:'translate(0%,-80%)'}} >
                            <h3>Rs. 2000/- </h3>
                            <span style={{float:'right',margin:'14px',marginLeft:'auto'}} >
                                &#11088;&#11088;&#11088;&#11088;&#11088;
                            </span>
                        </div>
                    </div>
                </div>
                </div>





          </ProductBody>
        </Product>
      </Container>
    </>
  );
}

export default Desktop;

const Container = styled.div`
  border: 3px solid black;
  display: flex;
  /* width: 1220px; */
  overflow-x: hidden;
  /* box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2); */
`;
const Filter = styled.div`
  border: 3px solid blue ;
  /* box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2); */
  width: 400px;
  height: 730px;
`;
const Header = styled.div`
  /* border: 3px solid yellow; */
  display: flex;
  /* height: 600px; */
  h2 {
    margin-left: 20px;
  }
`;

const Body = styled.div`
  /* border: 3px solid orange; */
`;
const Input = styled.div`
  /* border: 3px solid black; */
`;

const Color = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* border: 3px solid black; */
`;

const Product = styled.div`
  /* border: 3px solid green; */
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
`;

const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  height: 120px;
  /* border: 3px solid black; */
  justify-content: space-between;
  h1 {
    margin-left: 20px;
  }
`;

const ProductBody = styled.div`
    /* border: 3px solid black; */
    display: flex;
    width: 1200px;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;
