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
    //Push the new value from the form into our array 
    this.setState({
      giphButtons: [ ...this.state.giphButtons, this.state.value],
    });
    console.log(`Current Array ${this.state.giphButtons}`);
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
        <div className="container">
          <div className="row">
            <div className="col-md-12 buttons">
              {/* Map over buttons array and display the getters */}
              {
                this.state.giphButtons.map(function (val,i) {
                  // eslint-disable-next-line no-unused-expressions
                  return(
                  <Button 
                  text={val}
                  key={i} 
                  />
                  )
                })
              }
              
              <hr/>
            </div>
            <div className="row">
            <div className="col-md-12 gifs">
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
