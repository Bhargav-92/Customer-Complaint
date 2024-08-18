import Dashboard from '../../page/admin/dashboard/Dashboard';
import Sidebar from '../admin/Sidebar';

const AdminLayout = () => {
  return (
    <div className="flex h-screen ">
      <section className="w-[10%] sm:w-[15%]">
        <Sidebar />
      </section>
      <section className="flex flex-col w-[90%] sm:w-[85%] overflow-auto">
        <Dashboard />
      </section>
    </div>
  );
};

export default AdminLayout;
