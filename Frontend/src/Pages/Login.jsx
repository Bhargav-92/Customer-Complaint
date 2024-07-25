import React from 'react';

const Login = () => {
  return (
    <>
      <div>
        <h1>Sign In</h1>
        <h5>We Provide Seamless Complaint Register Portal</h5>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="jhon@gmail.com" />
          </div>
          <div>
            <label htmlFor="email">Password</label>
            <input type="text" placeholder="must have at least 6 characters" />
          </div>
          <button type="submit" className=" text-center ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
