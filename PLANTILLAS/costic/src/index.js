import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
// Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/vendors/iconic-fonts/font-awesome/css/all.min.css';
import './assets/vendors/iconic-fonts/flat-icons/flaticon.css';
import './assets/vendors/iconic-fonts/cryptocoins/cryptocoins.css';
import './assets/vendors/iconic-fonts/cryptocoins/cryptocoins-colors.css';
import './assets/css/animate.min.css';
import './assets/css/style.css';

//solo prueba, luego elimino
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = process.env.REACT_APP_API_URL


ReactDOM.render(
  <BrowserRouter basename={'/themes/themeforest/react/costic'}>
     <ToastContainer />
    <App />
  </BrowserRouter>,
  document.getElementById('costic')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
