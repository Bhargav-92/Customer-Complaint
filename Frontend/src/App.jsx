import { Routes } from "react-router-dom";
import Hero from "./component/Hero";
import Login from "./page/login";
import { ThemeProvider } from "./utils/ThemeProvider";
import { Route } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <ThemeProvider>
        <Hero />
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Navbar />}>
            <Route path="/dashboard" element={<Hero />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
