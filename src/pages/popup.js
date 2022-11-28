import React from "react";
import './popup.css';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div  className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}><img src="./images/icons8-close-40.png" class="close-icon"/></button>
                { props.children }
            </div>


        </div>
    ): "";
}

export default Popup