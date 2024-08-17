import { Outlet } from 'react-router-dom';
import Navbar from '../client/Navbar';

const ClientLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ClientLayout;
