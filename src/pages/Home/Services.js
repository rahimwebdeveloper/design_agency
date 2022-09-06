import { useQuery } from 'react-query';
import Service from './Service';

const Services = () => {

  const { data: services, isLoading } = useQuery('users', () => fetch('http://localhost:5000/service').then(res => res.json()))
  
  if (isLoading) {
    return <p>data is loading</p>
  }

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