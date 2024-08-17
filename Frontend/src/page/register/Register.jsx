import { useNavigate } from 'react-router-dom';
import loginImeg from '/public/login.png';

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-20">
          <img
            src={loginImeg}
            className="max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Register</h1>
            <p className="py-6">To continue to complaint system</p>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered w-full "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered w-full "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="phone"
                  className="input input-bordered w-full "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered w-full "
                  required
                />
              </div>
              <div className="flex justify-between mt-5">
                <label className="label cursor-pointer gap-3">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <span className="label-text">
                    I agree to all Term and conditions
                  </span>
                </label>
              </div>
              <div className="form-control ">
                <button className="btn btn-primary w-full text-lg">
                  Continue
                </button>
              </div>
              <div onClick={() => navigate('/')}>
                <label className="mt-2 cursor-pointer">
                  Have an account ?
                  <span className="text-[#7480FF] font-bold"> Log In</span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
