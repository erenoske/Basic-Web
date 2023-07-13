import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";

const routes = createBrowserRouter ([
    {
        path: '/' ,
        element: <Home />
    }
])

export default routes