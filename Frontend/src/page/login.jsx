import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default Login;
