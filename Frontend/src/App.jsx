import { Routes } from 'react-router-dom';
import Hero from './component/Hero';
import Login from './page/login/Login';
import { ThemeProvider } from './utils/ThemeProvider';
import { Route } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Navbar />}>
            <Route index path="/dashboard" element={<Hero />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
