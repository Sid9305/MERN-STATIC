import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import {App} from './App'; // export 
// import App from './App'; // export default
// import Hello from './components/Hello';
// import from any name if export default 

import Propsprac from './components/Propsprac';

// import Stateprac from './components/Stateprac';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello /> */}
    {/* <App /> */}
    {/* <App />
    <App />
    <App />
    <App></App> */}
    {/* <ComponentName /> */}
    {/* <Stateprac /> */}

    <Propsprac />
  </React.StrictMode>
);

// strictmode : development 
// HTMLElement.render()

