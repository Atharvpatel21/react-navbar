import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

import {Divide as Hamburger} from 'hamburger-react';

const StyledBurger = styled.div`
   width: 2rem;
   height: 2rem;
   postion: fixed;
   top: 15px;
   right: 20px;
    display: flex;
  
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index:20; 

//    display: none;

    @media (max-width: 768px) {
     display: flex;
     justify-content: space-around;
     flex-flow: column nowrap;
    
   }


    div {
         width: 2rem;
         height: 0.25rem;
         background-color:#fff;
         background-color: ${({ open }) => open ? '#ccc' : '#fff'};
         border-radius:10px;
         transform-origion: 1px;
         transition: all 0.3s linear;

         &:nth-child(1) {
                  transform:${( { open }) => open ? 'rotate(45deg)': 'rotate(0))'};
        }
        &:nth-child(2) {
                  transform: ${( { open }) => open ? 'translateX(100%)': 'translateX(0)'};
                  opacity: ${({ open }) => open ? 0 : 1 };
                 }
            
       &:nth-child(3) {
                  transform:${( { open }) => open ? 'rotate(135deg)': 'rotate(0))'};
        }
    }

// `;

const Burger = () => {
    
    // const [isOpen, setOpen] = useState(false)

     const [open, setOpen] = useState(false)

     return (
        <>
          {/* <Hamburger  color="rgb(255, 255, 255)" toggled={isOpen}
            size="32" rounded toggle={setOpen} /> */}
        <StyledBurger open={open} onClick={() => setOpen(!open)} >  
            <div />
            
            <div />
            
            <div />
       
        </StyledBurger>

         {/* <RightNav open={open}/>  */}
        </>
     )
}

export default Burger;