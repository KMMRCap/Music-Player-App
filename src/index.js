import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/main.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Context } from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Context>
        <App />
      </Context>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
