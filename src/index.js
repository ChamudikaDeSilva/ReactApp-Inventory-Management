import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';

const rootElement = document.getElementById('root');
rootElement.style.backgroundColor = '#9EC8B9'; // Set the background color

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
