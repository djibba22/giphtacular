import React from "react";

import './App.css';
import Form from './components/Form/Form';
import Button from './components/Button/Button';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      giphButtons:[]
    };

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
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Form 
          change={this.handleChange}
          submit={this.handleSubmit}
          value={this.state.value}
          />
        </header>
        <div class="container">
          <div class="row">
            <div class="col-md-12 buttons">
              <h1>Buttons Across Here</h1>
              <Button/>
              <hr/>
            </div>
            <div class="row">
            <div class="col-md-12 gifs">
            <h1>Giphs in Here</h1>
              <hr/>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
