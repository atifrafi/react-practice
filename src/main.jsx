import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import ContactUs from './pages/ContactUs.jsx'
import NotFound from './pages/NotFound.jsx'
import RedirectPage from './pages/RedirectPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';

// for basic routing
// createbrowserrouter 
// routes ko manage krta hai
// const router = createBrowserRouter([
//   { path: "/",
//     element: <App/>,
//     // error element mein 404 error page show karega
//     errorElement: <NotFound/>,
//     children:[
//       {path: "/", element: <Home/>},
//       {path: "contact", element: <ContactUs/>},
//       // * ka matlab kisi bhi random path ju exist nhi krta
//       {path: "*", element: <NotFound/>},
//       {path: "home", element: <RedirectPage/>}
//     ]
//   }
// ])

// for nested routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path: "/dashboard", element: <Dashboard/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // is se pura appliction mein routing karsakta hai
  // routerprovider ko
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
)
