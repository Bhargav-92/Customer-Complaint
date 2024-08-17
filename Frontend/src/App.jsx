import { Routes } from 'react-router-dom';
import Login from './page/login/Login';
import { ThemeProvider } from './utils/ThemeProvider';
import { Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Register from './page/register/Register';
import ClientDashboard from './page/client/clientDashboard/ClientDashboard';

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Navbar />}>
            <Route index path="/dashboard" element={<ClientDashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
