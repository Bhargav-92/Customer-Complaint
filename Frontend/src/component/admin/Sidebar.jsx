import logo from '/logo.svg';
import { TbLayoutDashboardFilled } from 'react-icons/tb';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-3 w-full h-full justify-between">
        <div className="flex flex-col gap-10 px-4 mt-4">
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="Logo" className="w-[4rem]" />
            <div className="hidden md:flex">
              <h1 className="text-sm lg:text-lg font-bold">
                Customer Complaint
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-5 text-md sm:text-sm lg:text-lg">
            <div className="flex items-center gap-2">
              <div>
                <TbLayoutDashboardFilled />
              </div>
              <Link to={'/admin'}>
                <div className="hidden sm:flex hover:text-slate-100 cursor-pointer">
                  Dashboard
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <BiSolidBarChartSquare />
              </div>
              <Link to={'charts'}>
                <div className="hidden sm:flex hover:text-slate-100 cursor-pointer">
                  Charts
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <HiUsers />
              </div>
              <div className="hidden sm:flex hover:text-slate-100 cursor-pointer">
                Users
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-md sm:text-xs md:text-sm lg:text-lg px-4 gap-4 mb-10 ">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="hidden sm:flex font-medium">admin@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
