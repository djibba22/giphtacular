import React from "react";
import './Button.css';


function Button (props) {
    return(
     <button 
     className="btn btn-default giph_button"
     onClick={() => props.clickHandler(props)}>
     {props.text}
     </button>
    );
}

export default Button;