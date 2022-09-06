import Order from "../pages/Dashboard/user/Order";
import OrderList from "../pages/Dashboard/user/OrderList";
import Pay from "../pages/Dashboard/user/Pay";
import Review from "../pages/Dashboard/user/Review";

export const userRouter = [
    {path:"order/:id", name:"Order" , Component: Order},
    {path:"orderList", name:"Order List " , Component: OrderList},
    {path:"review", name:"Review" , Component: Review},
    {path:"pay/:id", name:"Pay", Component: Pay}
    
]