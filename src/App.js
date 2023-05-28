import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import getRoutes from './Routes';

const router = createBrowserRouter(getRoutes());

function App() {
  return (
    <div className="w-screen h-screen bg-green-500">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
