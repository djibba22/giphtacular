import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Actually render the application to the DOM or virtual DOM.
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
