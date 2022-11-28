import React, { useState } from "react";
import "./dropdown.css";
import { bool,func } from 'prop-types';
import {Divide as Hamburger} from 'hamburger-react';
import ChName from "./ChName";


// const ddl = ddl-link
// `background-color: orange;  
//  width:90%;
//  height:90px;
//  justify-content: space-between;
//  display: ${hamburgerOpen ? 'inline' : 'none'};
//   /* display: none;  */ 
// `



const Dropdown = () =>{

  const [isOpen, setOpen] = useState(false)
  //  const [ddlOpen, setddlOpen] = useState(false)
/** click even down */
  //  const [ ddl, setddl] = useState('')
  //  const isAnonymos = true;
   
  //  const handleClick = event => {
  //    event.currentTarget.disabled = true;
  //    console.log('Hamburger clicked');

  //  }


  //   setHamburgerOpen(!hamburgerOpen)
  

    return(
        <div className="cover">
          <div className="ddlmenu ">
             <Hamburger  color="rgb(255, 255, 255)" toggled={isOpen}
            size="32" rounded toggle={setOpen}/>
          {/* <Hamburger disabled={!menuOpen}>clicked</Hamburger> */}
          </div>
          <ddl>
          
          <ul className="ddl-link ">
           {/* <li><link to ='#'>Change Name</link></li>
           <li><link to ='#'>Email transcript</link></li>
           <li><link to ='#'>Sound On</link></li>
           <li><link to ='#'>Pop out widget</link></li>
           <li><link to ='#'>Add Chat to your website</link></li> */}
           <li>< a href="/ChName">Change Name</a></li>
            <li><a href="/EmailTranst">Email transcript</a></li>
            <li><a href=" /Sound">Sound On</a></li>
            <li><a href="#">Pop out widget</a></li>
            <li><a href="#">Add Chat to your website</a></li>
           </ul>
        </ddl>
        
        </div>
         

    )
}
Dropdown.propTypes = {
  isOpen:Boolean.isRequired,
  setOpen:func.isRequired,
};

export default Dropdown;
