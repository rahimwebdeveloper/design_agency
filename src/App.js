import { Routes, Route } from 'react-router-dom'
import { publicRouter } from './router/publicRouter';
import Dashboard from './pages/Dashboard/Dashboard';
import { adminRouter } from './router/adminRouter';
import { userRouter } from './router/userRouter';
import PrivateRouters from './authentication/PrivateRouters';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminRouters from './authentication/AdminRouters';

function App() {
  return (
    <div className='max-w-screen-2xl'>
      <Routes>
        {
          publicRouter.map(({ path, Component }, index) =>
            <Route key={index} path={path} element={<Component />} />
          )
        }
        <Route element={<PrivateRouters />} >
          <Route path='/dashboard' element={<Dashboard />}>
            {
              userRouter.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
            }
            <Route element={<AdminRouters />}>
              {
                adminRouter.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
              }
            </Route>

          </Route>
        </Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
