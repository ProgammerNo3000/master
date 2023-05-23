import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { Greeting } from "./Greeting" 
// import { User } from "./User"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App />
    <App />
    <Greeting timeOfDay="morning"/>
    <Greeting timeofDay="good afternoon"/>
    <Greeting timeOfDay="evening"/> 
      
  </React.StrictMode>
);



