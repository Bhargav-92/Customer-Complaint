import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './page/login/Login';
import { ThemeProvider } from './utils/ThemeProvider';
import Register from './page/register/Register';
import ClientLayout from './component/Layouts/ClientLayout';
import Home from './page/client/clientDashboard/Home';

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
