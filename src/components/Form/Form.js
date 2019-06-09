import React from 'react';
import './Form.css' 

function Form (props) {
      return (
        <form onSubmit={props.submit}>
          <label>
            Know Code?:
            <input className="main-input" type="text" value={props.value} onChange={props.change} />
          </label>
          <button class="btn btn-default" type="submit" value="Submit">ClickToNerd</button>
        </form>
      );
  
  }

export default Form;