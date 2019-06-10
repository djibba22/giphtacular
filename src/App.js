//Import all the goods
import React from "react";
import './App.css';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
//Define the function to be returned
class App extends React.Component {
  /**  Constructor takes in the parents props or any params
      @params props **/
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      giphButtons: ["Javascript", "REACT", "MongoDB"],
      data: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
   /**  Input watching function that updates the value from the form
      @params event **/
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
   /**  Upon submittion from the form add to the array
      @params event **/
  handleSubmit(event) {
    event.preventDefault();
    //Push the new value from the form into our array 
    this.setState({
      giphButtons: [...this.state.giphButtons, this.state.value],
    });
    
  }

  // click function that makes a call to the api
  handleClick(props) {
    fetch("http://api.giphy.com/v1/gifs/search?q=" + props.text + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=12")
      .then(response => response.json())
      .then(data => this.setState({ data }));
   
  }

  render() {
    return (
      <div className="App">
        <h1 className="main_title">GIPHTACULAR</h1>
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
                this.state.giphButtons.map((val, i) => {
                  // eslint-disable-next-line no-unused-expressions
                  return (

                    <Button
                      text={val}
                      key={i}
                      clickHandler={this.handleClick.bind(this)}
                    />

                  )
                })
              }
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 gifs text-center">
              {/* Map over data and display the gifs */}

              {this.state.data != null ?
                this.state.data.data.map(function (item, i) {
                  return (
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
                          if (e.target.getAttribute("data-state") === "still") {
                            //make it animate
                            e.target.setAttribute("src", e.target.getAttribute("data-animate"))
                            e.target.setAttribute("data-state", "animate")
                           
                          }
                          else {
                            //Make it still
                            e.target.setAttribute("src", e.target.getAttribute("data-still"))
                            e.target.setAttribute("data-state", "still")
                            
                          }
                        }}
                      />
                    </div>
                  )
                })

                :


                <img alt="" src="https://media0.giphy.com/media/xl3Biy7X0kRlzlQBx4/giphy.gif?cid=790b76115cfdaf7d504b556a2e5ce24f&rid=giphy.gif"/>




              }


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
