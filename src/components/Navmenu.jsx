import React from "react";
import Styled from 'styled-components';
import RightNav from "./RightNav";
import Burger from "./Berger";

const Nav = Styled.nav`
      width:80%;
      height:30px;
      // border-bottom:2px solid #f1f1f1;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
    }
 ` ;
const NavMenu  = () => {
    return( 
         <Nav>
     
    {/* <div className="logo"> 
     {/* Navbar */}
{/*     
      </div>  */} 
     {/* <ul>
        <li>Change Name</li>
        <li>Email transcript</li>
        <li>Sound On</li>
        <li>Pop out widget</li>
        <li>Add Chat to your website</li>
     </ul> */}

       <Burger /> 

        <RightNav/>  

     </Nav>
    )
}

export default NavMenu;