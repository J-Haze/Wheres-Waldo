import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var firebaseConfig = {
  apiKey: "AIzaSyDmPVWlnNYu82nh4vhq2hMqqmR7mKHAmRc",
  authDomain: "where-s-waldo-e9b35.firebaseapp.com",
  databaseURL: "https://where-s-waldo-e9b35.firebaseio.com",
  projectId: "where-s-waldo-e9b35",
  storageBucket: "where-s-waldo-e9b35.appspot.com",
  // messagingSenderId: "SENDER_ID",
  // appId: "APP_ID",
  // measurementId: "G-MEASUREMENT_ID",
};
firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
