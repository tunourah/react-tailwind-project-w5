

import { createBrowserRouter } from "react-router-dom";

import About from "../pages/About";
import App from "../App";
import Header from "../components/Header";
import Contact from "../pages/Contact";
 

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        
    },
    {
        path: "/home",
        element: <Header />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

export default Router;
