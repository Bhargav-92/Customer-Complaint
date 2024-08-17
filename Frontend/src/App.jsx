import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import Login from './page/login/Login';
import { ThemeProvider } from './utils/ThemeProvider';
import Register from './page/register/Register';
import ClientDashboard from './page/client/clientDashboard/ClientDashboard';
import AdminLayouts from './component/Layouts/AdminLayouts';

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
      path: '/home',
      element: <ClientDashboard />,
      exact: true,
    },
    {
      path: '/dashboard',
      element: <AdminLayouts />,
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
