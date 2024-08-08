import Hero from './component/Hero';
import Login from './page/Login';
import { ThemeProvider } from './utils/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <Login />
        <Hero />
      </ThemeProvider>
    </>
  );
}

export default App;
