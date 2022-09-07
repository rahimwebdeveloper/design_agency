import Order from "../pages/Dashboard/user/Order";
import OrderList from "../pages/Dashboard/user/OrderList";
import Review from "../pages/Dashboard/user/Review";
import Pay from "../pages/Payment/Pay";

export const userRouter = [
    {path:"order/:id", name:"Order" , Component: Order},
    {path:"orderList", name:"Order List " , Component: OrderList},
    {path:"review", name:"Review" , Component: Review},
    {path:"pay/:id", name:"Pay", Component: Pay}
    
]