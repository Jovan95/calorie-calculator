import React from 'react';
import "semantic-ui-css/semantic.min.css";
import "./styles/index.scss";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoggedIn } from './actions/auth';
import decode from 'jwt-decode';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.cCalJWT) {
  const payload = decode(localStorage.cCalJWT);

  const user = {
    token: localStorage.cCalJWT,
    email: payload.email,
    _id: payload._id,
    confirmed: payload.confirmed
   };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route  component={App}/>
    </Provider>
  </BrowserRouter>,
   document.getElementById('root')
);
serviceWorker.unregister();
