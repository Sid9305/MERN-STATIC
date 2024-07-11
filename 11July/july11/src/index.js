import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import EventHandling from './components/EventHandling';
// import ConditionalRendering from './components/ConditionalRendering';
import Parent from './components/ConditionalRendering';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <EventHandling/> */}
    {/* <ConditionalRendering/> */}
    {/* <Parent/> */}
  </React.StrictMode>
);

