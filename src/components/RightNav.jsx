import React from "react";
import styled from "styled-components";


const UL = styled.ul`
    list-style: none;
    flex-flow: row nowrap;
    display: flex;
   
    li {
        padding: 8px 5px;

   }
   @media (max-width: 768px) {
   
    flex-flow: column nowrap;
    background-color: orange;
     position:fixed;
     transform: ${({ open }) => open ? 'translateX(0)':'translateX(100%)'};
    bottom:35.1875rem;
    right:3rem;
    width:200px;
    height:25vh;
    padding-bottom: 3.5rem;
    transition: transform 0.3s ease-in-out;

     li{
        color: #fff;
     }
   }
`;
const RightNav = ({ open }) => {
    return (
        // <div>
        <UL open={open}>
        <li>Change Name</li>
        <li>Email transcript</li>
        <li>Sound On</li>
        <li>Pop out widget</li>
        <li>Add Chat to your website</li>
     </UL>
    //  </div> 
    )
}

export default RightNav;