import { Routes, Route } from 'react-router-dom'
import { publicRouter } from './router/publicRouter';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRouter.map(({ path, Component }, index) =>
              <Route key={index} path={path} element={<Component />} />
            )
          }
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
