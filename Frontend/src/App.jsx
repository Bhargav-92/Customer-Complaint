import { Routes } from 'react-router-dom';
import Hero from './component/Hero';
import Error from './page/Error';
import Login from './page/Login';
import { ThemeProvider } from './utils/ThemeProvider';
import { Route } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route paht="/" element={<Navbar />}>
            <Route path="/home" element={<Hero />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
