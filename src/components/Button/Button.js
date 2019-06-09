import React from "react";

function Button (props) {
    return(
     <button 
     className="btn btn-danger"
     onClick={() => props.clickHandler(props)}>
     {props.text}
     </button>
    );
}

export default Button;