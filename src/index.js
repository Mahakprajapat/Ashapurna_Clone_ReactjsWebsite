import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/About/Aboutus';
import Ourjourney from './Pages/About/Ourjourney';
import Managment from './Pages/About/Managment';
import Ourteam from './Pages/About/Ourteam';
import Socialrep from './Pages/About/Socialrep';
import Newsletter from './Pages/About/Newsletter';
import Nri from './Pages/About/Nri';
import Jodhpurinvest from './Pages/About/Jodhpurinvest';
import Mediaandevent from './Pages/Mediaandevent';
import Contactus from './Pages/Contactus';
import Rentallease from './Pages/Project/Rentallease';
import Residental from './Pages/Project/Residental';
import Commercial from './Pages/Project/Commercial';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter ([
  
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/aboutus",
    element:<Aboutus/>
  },
  {
    path:"/Ourjourney",
    element:<Ourjourney/>
  },
  {
    path:"/Managment",
    element:<Managment/>
  },
  {
    path:"/ourteam",
    element:<Ourteam/>
  },
  {
    path:"/Socialrep",
    element:<Socialrep/>
  },
  {
    path: "/Newsletter",
    element:<Newsletter/>
  },
  {
    path: "/Nri",
    element:<Nri/>
  },
  {
    path: "/Jodhpurinvest",
    element:<Jodhpurinvest/>
  },
  {
    path:"/Residential",
    element:<Residental/>
  },
  {
    path:"/Commercial",
    element:<Commercial/>
  },
  {
    path: "/Mediaandevent",
    element:<Mediaandevent/>
  },
  {
    path: "/Contactus",
    element:<Contactus/>
  },
  {
    path:"Rentallease",
    element:<Rentallease/>
  }
  

  
]);
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
