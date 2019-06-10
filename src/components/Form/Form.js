import React from 'react';
import './Form.css' 

function Form (props) {
      return (
        <form onSubmit={props.submit}>
          <label>
            <input className="main-input" type="text" value={props.value} onChange={props.change} />
          </label>
          <button className="btn btn-default" type="submit" value="Submit">ClickToNerd</button>
        </form>
      );
  
  }

export default Form;