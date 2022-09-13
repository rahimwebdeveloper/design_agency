import { useQuery } from 'react-query';
import Service from './Service';

const Services = () => {

  const { data: services, isLoading } = useQuery('users', () => fetch('https://young-coast-42098.herokuapp.com/service').then(res => res.json()))
  
  if (isLoading) {
    return <p>data is loading</p>
  }

  return (
    <div className='mt-52 mx-10 lg:mx-[135px]'>
      <h1 className='text-4xl font-bold text-center'>Provide awesome <span className='text-accent'>services</span></h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 mt-20'>

        {
          services.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }

      </div>

    </div>
  );
};

export default Services;