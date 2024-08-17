import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './page/login/Login';
import { ThemeProvider } from './utils/ThemeProvider';
import Register from './page/register/Register';
import ClientLayout from './component/Layouts/ClientLayout';

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
      element: <ClientLayout />,
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
