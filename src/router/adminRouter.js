import AddService from "../pages/Dashboard/admin/AddService";
import MakeAdmin from "../pages/Dashboard/admin/MakeAdmin";
import ServiceList from "../pages/Dashboard/admin/ServiceList";

export const adminRouter = [
    {path:"serviceList", name:"Service List" , Component: ServiceList},
    {path:"addService", name:"Add Service" , Component: AddService},    
    {path:"makeAdmin", name:"Make Admin" , Component: MakeAdmin},
    
]