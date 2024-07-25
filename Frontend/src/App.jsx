import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
