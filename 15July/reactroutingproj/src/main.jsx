import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import 
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import About from "./components/About.jsx";


const router = createBrowserRouter([{
  path : '/',
  element: <App />
},{
  path : '/about',
  element: <About />
},{
  path : '/contact',
  element: <h1>Contact Page</h1>
}])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} >
    </RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
