import axios from 'axios';
import  React, { useEffect, useState } from 'react';
import service1 from '../../assets/images/icons/service1.png'
import service2 from '../../assets/images/icons/service2.png'
import service3 from '../../assets/images/icons/service3.png'
import Service from './Service';

const Services = () => {
     const [services, setServices] = useState([]);

     console.log(services)

     useEffect(() => {
        axios.get('http://localhost:5000/service')
            .then(data => setServices(data.data))
     },[])


    return (
        <div className='mt-52 mx-[135px]'>
            <h1 className='text-4xl font-bold text-center'>Provide awesome <span className='text-accent'>services</span></h1>

            <div className='grid lg:grid-cols-3 gap-20 mt-20'>
              
              {
                services.map(service => <Service 
                    key={service.id}
                    service={service}
                ></Service>)
              }

            </div>

        </div>
    );
};

export default Services;