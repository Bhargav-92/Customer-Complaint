import { useNavigate } from 'react-router-dom';
import LoginImg from '/login.png';

const Register = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-[10rem]">
        <div className="flex justify-end">
          <img
            src={LoginImg}
            className="max-w-sm rounded-lg shadow-2xl h-[20rem] w-[40rem] hidden lg:block"
          />
        </div>
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold">Create an account</h1>
          <p className="py-4">to Continue to Complaint System</p>

          <div>
            <form className="form-control mt-4">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" />
              </label>
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
                <input type="text" className="grow" placeholder="Email" />
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
              <label className="input input-bordered flex items-center gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  className="h-4 w-4 opacity-70"
                  fill="currentColor"
                >
                  <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z M 9 17 C 10.105 17 11 17.895 11 19 C 11 20.104 10.105 21 9 21 C 7.895 21 7 20.104 7 19 C 7 17.895 7.895 17 9 17 z M 15 17 C 16.105 17 17 17.895 17 19 C 17 20.104 16.105 21 15 21 C 13.895 21 13 20.104 13 19 C 13 17.895 13.895 17 15 17 z M 21 17 C 22.105 17 23 17.895 23 19 C 23 20.104 22.105 21 21 21 C 19.895 21 19 20.104 19 19 C 19 17.895 19.895 17 21 17 z"></path>
                </svg>
                <input type="password" className="grow" placeholder="****" />
              </label>
              <button
                className="btn btn-primary mt-3 capitalize text-sm lg:text-xl"
                onClick={handleClick}
              >
                continue
              </button>
              <p className="py-5">
                {'Already have an account ?'}{' '}
                <span
                  className="text-primary  cursor-pointer"
                  onClick={() => navigate('/')}
                >
                  Sign In
                </span>{' '}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
