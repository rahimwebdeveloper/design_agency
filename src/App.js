import { Routes, Route } from 'react-router-dom'
import { publicRouter } from './router/publicRouter';
import Dashboard from './pages/Dashboard/Dashboard';
import { adminRouter } from './router/adminRouter';
import { userRouter } from './router/userRouter';

function App() {
  return (
    <>
      <Routes>
        {
          publicRouter.map(({ path, Component }, index) =>
            <Route key={index} path={path} element={<Component />} />
          )
        }
          <Route path='/dashboard' element={<Dashboard />}>
            {
             userRouter.map(({path, Component} ,index) => <Route  key={index} path={path} element={ <Component /> } />)
            }
            <Route element=''>
              {
                adminRouter.map(({path, name, Component}, index) => <Route key={index}  path={path} element={<Component />} />)
              }
            </Route>

          </Route>
       
      </Routes>
    </>
  );
}

export default App;
