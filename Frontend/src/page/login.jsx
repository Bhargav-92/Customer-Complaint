import { useNavigate } from 'react-router-dom';
import LoginImg from '/public/login.png';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-[10rem]">
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold">Login</h1>
          <p className="py-4">Welcome back! Please enter your details</p>
          <div>
            <form className="form-control ">
              <label className="input input-bordered flex items-center gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow required:"
                  placeholder="email"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input type="password" className="grow" placeholder="****" />
              </label>
              <button
                className="btn btn-primary mt-3  capitalize text-sm lg:text-xl"
                onClick={() => navigate('/home')}
              >
                continue
              </button>
              <p className="py-5">
                {"Don't have an account ?"}{' '}
                <span
                  className="text-primary  cursor-pointer"
                  onClick={() => navigate('/register')}
                >
                  Sign Up
                </span>{' '}
              </p>
            </form>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src={LoginImg}
            className="max-w-sm rounded-lg shadow-2xl h-[20rem] w-[40rem] hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
