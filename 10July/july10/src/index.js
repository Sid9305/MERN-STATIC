import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import EventHandling from './components/EventHandling';
import Counter from './components/Counter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <EventHandling /> */}
    <Counter></Counter>
  </React.StrictMode>
);

