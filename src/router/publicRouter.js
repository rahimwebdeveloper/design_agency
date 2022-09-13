import Feedback from "../pages/Home/Feedback";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services";
import Login from "../pages/Login/Login";

export const publicRouter = [
    {path:"/", name:"Home", Component: Home},
    {path: "/login", name:"Home", Component: Login},
    {path: "/projects", name:"Project", Component: Services},
    {path: "/review", name:"Review", Component: Feedback},
]