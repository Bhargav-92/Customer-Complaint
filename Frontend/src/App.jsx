import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './page/Login/Login';
import { ThemeProvider } from './utils/ThemeProvider';
import Register from './page/register/Register';
import ClientLayout from './component/Layouts/ClientLayout';
import Home from './page/client/clientDashboard/Home';
import AdminLayout from './component/Layouts/AdminLayout';
import Dashboard from './page/admin/dashboard/Dashboard';
import Charts from './page/admin/charts/Charts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
      exact: true,
    },
    {
      path: '/register',
      element: <Register />,
      exact: true,
    },
    {
      path: '/',
      element: <ClientLayout />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
      ],
      exact: true,
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'charts',
          element: <Charts />,
        },
      ],
      exact: true,
    },
  ]);

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
