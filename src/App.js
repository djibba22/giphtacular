import {React} from 'react';

import './App.css';
import Form from './components/Form/Form';
import Button from './components/Button/Button';

class App extends React.Component  {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Form/>
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
