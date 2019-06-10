import React from "react";

import './App.css';
import Form from './components/Form/Form';
import Button from './components/Button/Button';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      giphButtons:["Javascript","REACT","MongoDB"],
      data: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //Push the new value from the form into our array 
    this.setState({
      giphButtons: [ ...this.state.giphButtons, this.state.value],
    });
    console.log(`Current Array ${this.state.giphButtons}`);
  }

  // click function that makes a call to the api
  handleClick(props){
    fetch("http://api.giphy.com/v1/gifs/search?q=" + props.text + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10")
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log(this.state.data);
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
                this.state.giphButtons.map((val,i) => {
                  // eslint-disable-next-line no-unused-expressions
                  return(
                    
                      <Button 
                        text={val}
                        key={i}
                        clickHandler={this.handleClick.bind(this)}
                      />
                    
                  )
                })
              }
              
              <hr/>
            </div>
            <div className="row">
            <div className="col-md-12 gifs">
             {/* Map over data and display the gifs */}
             
                {this.state.data != null ?
                  this.state.data.data.map(function (item,i){
                    return(
                      <div className="giph_div" key={i}>
                        <img
                          data-state="still"
                          data-still={item.images.fixed_height_still.url}
                          data-animate={item.images.fixed_height.url} 
                          key={i} 
                          alt="" 
                          src={item.images.fixed_height_still.url}
                          onClick={(e) => {
                            //Check for still
                            if(e.target.getAttribute("data-state") === "still"){
                              //make it animate
                            e.target.setAttribute("src",e.target.getAttribute("data-animate"))
                            e.target.setAttribute("data-state","animate")
                            console.log(e.target.getAttribute("data-state"))
                            }
                            else{
                              //Make it still
                              e.target.setAttribute("src",e.target.getAttribute("data-still"))
                              e.target.setAttribute("data-state","still")
                              console.log(e.target.getAttribute("data-state"))
                            }
                          }}
                        />
                      </div>
                    )
                  })
                : <h1>Make Your Choice</h1>
              }

              
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
