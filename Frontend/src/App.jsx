import { Routes } from 'react-router-dom';
import Hero from './page/Hero';
import Error from './page/Error';
import Login from './page/Login';
import { ThemeProvider } from './utils/ThemeProvider';
import { Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Register from './page/Register';

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route paht="/" element={<Navbar />}>
            <Route index path="/home" element={<Hero />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
