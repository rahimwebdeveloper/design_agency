import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import Footer from './Footer';
import Navbar from './Navbar';
import Service from './Service';

const Services = ({ home, size }) => {

  const { data: services, isLoading } = useQuery('users', () => fetch('https://young-coast-42098.herokuapp.com/service').then(res => res.json()))

  if (isLoading ) {
    return <Loading />
  }

  return (
    <> {
      home || <Navbar />
    }

      <div className='mt-10 mx-10 lg:mx-[135px]'>
        <h1 className='text-4xl font-bold text-center'>Provide awesome <span className='text-accent'>services</span></h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 mt-20'>

          {
            services.slice(0, size).map(service => <Service
              key={service._id}
              service={service}
            ></Service>)
          }

        </div>
        {
          home && (
            <div className='bg-primary mt-5 p-2 text-center font-bold'>
              Please Visit the Project sections to. <Link to="/projects" className='underline' >See More</Link>
            </div>
          )}
      </div>
      {
        home || <Footer />
      }
    </>
  );
};

export default Services;