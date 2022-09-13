import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const OrderList = () => {
    const navigate = useNavigate(); 
    const [user, loading] = useAuthState(auth);
    const { displayName, photoURL, email } = user;

    const { data: orders, isLoading } = useQuery('orders', () => fetch(`https://young-coast-42098.herokuapp.com/order?email=${email}`).then(res => res.json()))

    const payNow = id => {
        navigate(`/dashboard/pay/${id}`)
    }

    if(isLoading){
        return <p> data is loading</p>
    }

    if (loading) {
        return <div>
            <h1>this loading</h1>
        </div>
    }
    return (
        <div>
            <div className='bg-white lg:flex items-center justify-between py-2 px-12 hidden lg:block'>
                <h1 className='text-2xl font-bold'>Order List </h1>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photoURL} alt="" />
                        </div>
                    </div>
                    <h1 className='text-2xl ml-3'>{displayName}</h1>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-20 m-10'>

                {
                    orders.map(({pay, position, price, icon, details, service, _id, }) =>
                        <div key={_id} className="card shadow-2xl">
                            <div className={`flex ${pay === true ? "justify-between" : "justify-center"} items-center p-5`}>
                                <img className='h-24 w-24' src={icon} alt="logo" />
                                <div className={` ${pay === true ? "block":  "hidden"} `}>

                                    {
                                        position === 'done' ?
                                            <p className='bg-[#C6FFE0] py-3 px-10 font-bold text-[#009444]'>Done</p>
                                            :
                                            <p className='bg-[#FFE3E3] py-3 px-8 font-bold text-[#FF4545]'>Pending</p>
                                    }
                                </div>

                            </div>
                            <div className="card-body pt-0 items-center text-center">
                                <h2 className="card-title">{service}</h2>
                                <h3>Price: ${price}</h3>
                                <p>{details}d</p>

                                {pay ||
                                    <div>
                                        <button className='btn btn-sm border-none hover:bg-red-700 mr-2 bg-red-600'>Delete</button>
                                        <button onClick={() => payNow(_id)} className='btn btn-sm'>Pay Naw</button>
                                    </div>
                                }


                            </div>
                        </div>)
                }

            </div>

        </div>
    );
};

export default OrderList;