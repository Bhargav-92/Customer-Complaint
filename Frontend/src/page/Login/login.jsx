import loginImeg from '/login.png';

const Login = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6">Welcome to customer complaint system !!!</p>
            <form className="space-y-4">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full "
                  required
                />
                <div className="flex justify-between mt-5">
                  <label className="label cursor-pointer gap-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                    <span className="label-text">Remember me</span>
                  </label>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full text-lg ">
                  Login
                </button>
              </div>
            </form>
          </div>
          <img
            src={loginImeg}
            className="max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
