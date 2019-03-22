import React from 'react';
import "semantic-ui-css/semantic.min.css";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
   document.getElementById('root')
);

serviceWorker.unregister();
