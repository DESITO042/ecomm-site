import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './home/home.jsx'
import Blog from './blog/Blog.jsx'
import Shop from './shop/Shop.jsx'
import './index.css'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SingleProduct from './shop/SingleProduct.jsx'
import CartPage from './shop/CartPage.jsx'
import SingleBlog from './blog/SingleBlog.jsx'
import About from './about/About.jsx'
import Contact from './contact/Contact.jsx'
import Login from './components/Login.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import PrivateRoutes from './PrivateRoutes/PrivateRoutes.jsx'
import SignUp from './components/SignUp.jsx'


const router = createBrowserRouter([
   {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Home />},
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/blog/:id",
        element: <SingleBlog/>
      },
      {
        path: "/cart-page",
        element: <PrivateRoutes><CartPage/></PrivateRoutes>
      },
       {
        path: "shop/:id",
        element: <SingleProduct/>
      },
      
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
     
     <AuthProvider>
       <RouterProvider router={router} />
     </AuthProvider>
  
)


