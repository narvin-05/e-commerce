import React from 'react'
import styled from 'styled-components'
import logo_img from "../assets/websitelogo.png"
import { AiOutlineUser } from "react-icons/ai";



function Header() {
  return (
    <Nav>
        <Logo src={logo_img}/>
        <NavMenu>
            <a>
                <span>&nbsp;HOME</span>
            </a>

            <a>
                <span>&nbsp;THE JOURNEY</span>
            </a>

            <a>
                <span>&nbsp;TEAM</span>
            </a>

            <a>
                <span>&nbsp;STORE</span>
            </a>

            <a>
                <span>&nbsp;CONTACT</span>
            </a>
        </NavMenu>
        <UserImg>
          <AiOutlineUser style={{height:"40px",width:"30px",alignItem:"center",marginLeft:"10px"}}/> 
        </UserImg>
    </Nav>
  )
}

export default Header;

const Nav = styled.nav` 
    height: 70px;
    background:whitesmoke;
    justify-content: space-around;
    overflow-x: hidden;
    display: flex;        // used to structure 
    align-items: center;  // to center vertically all the content within it
    padding: 0px 36px ;  
`

const Logo = styled.img`
    width: 60px;

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    a{
        margin-left: 25px;
        display: flex;
        align-items: center;  
        padding: 0px 12px;    // top and bottom        right and left
        cursor: pointer;
        color: black;

        img{
            height: 20px;
        }

        span{
            font-size: 15px;
            letter-spacing: 1.45px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                /* background: white; */
                background: black;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s ;
                transform-origin: left center;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }

    }

`

const UserImg = styled.div`
    width:134px;
    /* border: 3px solid black; */
    margin-right: 10px;
    height: 54px;
    align-items: center;
    /* border-radius: 50%; */
    cursor: pointer;
    
`