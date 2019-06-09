import React from 'react';
import './Form.css' 

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Know Code?:
            <input className="main-input" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button class="btn btn-default" type="submit" value="Submit">ClickToNerd</button>
        </form>
      );
    }
  }

export default Form;