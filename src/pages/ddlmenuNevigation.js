// import '.Dropdown.css';
import Dropdown from './Dropdown';
import { useState } from 'react';
import {Hamburger} from 'hamburger-react'

import { bool } from 'prop-types';

const ddlmenuNevigation = ( {open}) => {
  
   
     
    return (
        <ddl>
            
      {/* <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        Change Name
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Email transcript
        </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Sound On */}
        {/* </a> */}
        <ddl>
          
          <ul className="ddl-link active">
           {/* <li><link to ='#'>Change Name</link></li>
           <li><link to ='#'>Email transcript</link></li>
           <li><link to ='#'>Sound On</link></li>
           <li><link to ='#'>Pop out widget</link></li>
           <li><link to ='#'>Add Chat to your website</link></li> */}
           <li><a href="#">Change Name</a></li>
            <li><a href="#">Email transcript</a></li>
            <li><a href="#">Sound On</a></li>
            <li><a href="#">Pop out widget</a></li>
            <li><a href="#">Add Chat to your website</a></li>
           </ul>
        </ddl>
    </ddl>
        
    )
}

ddlmenuNevigation.propTypes ={
    open:Boolean.isRequired,
}





export default ddlmenuNevigation;