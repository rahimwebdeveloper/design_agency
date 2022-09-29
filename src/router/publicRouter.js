import Feedback from "../pages/Home/Feedback";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services";
import ForgetPassword from "../pages/Login/ForgetPassword";
import Login from "../pages/Login/Login";
import LoginPass from "../pages/Login/LoginPass";
import SingUp from "../pages/Login/SingUp";

export const publicRouter = [
    {path:"/", name:"Home", Component: Home},
    {path: "/login", name:"login", Component: Login},
    {path: "/projects", name:"Project", Component: Services},
    {path: "/review", name:"Review", Component: Feedback},
    {path: "/login_Email", name:"Login", Component: LoginPass},
    {path: "/forget_password", name:"Login", Component: ForgetPassword},
    {path: "/singUp", name:"Login", Component: SingUp},
]