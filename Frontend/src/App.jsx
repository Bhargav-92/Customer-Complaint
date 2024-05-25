import React, {useEffect} from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Appbar from "./Components/Appbar/Appbar";
import AuthContext from "./Components/AuthContext/AuthContext";
import AuthProvider from "./Components/AuthContext/AuthProvider";
import ComplaintChatBot from "./Components/ComplaintChatBot/ComplaintChatBot";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import About from "./Pages/About";
import Complaint from "./Pages/Complaint";
import Faq from "./Pages/Faq";
import Home from "./Pages/Home";
import SignIn from "./Pages/Login";
import MyComplaint from "./Pages/MyComplaint";
import Nopage from "./Pages/Nopage";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import { useContext } from "react";
import { useState } from "react";
import Topbar from "./Components/Admin/scenes/global/Topbar";
import ProSideBar from "./Components/Admin/scenes/global/ProSideBar";
import Dashboard from "./Components/Admin/scenes/dashboard/index";
import Loader from "./Components/Loader/Loader";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {

    return (
        <AuthProvider>
        <AppContent />
      </AuthProvider>
    );
}

function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()
  const { isAuthenticated, role } = useContext(AuthContext);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  console.log('isAuthenticated', isAuthenticated)
  console.log('role', role)

  const AppBarwithChatBot = () => ( 
    <>
      <Appbar />
      <ComplaintChatBot />
    </>
  );

  const AuthRoutes = (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );

  const Admin = (
      // <ColorModeContext.Provider value={colorMode}>
      //   <ThemeProvider theme={theme}>
      //     <CssBaseline />
      //     <div className="app">
      //       <ProSideBar isSidebar={isSidebar} />
      //       <main className="content">
      //         <Topbar setIsSidebar={setIsSidebar} />
      //         <Routes>
      //           <Route path="/admin" element={<Dashboard />} />
      //           <Route path="/listofusers" element={<ListOfusers />} />
      //           <Route
      //             path="/listofcomplaints"
      //             element={<ListOfComplaints />}
      //           />
      //           <Route path="/line" element={<Line />} />
      //           <Route path="/faq" element={<FAQ />} />
      //         </Routes>
      //       </main>
      //     </div>
      //   </ThemeProvider>
      // </ColorModeContext.Provider>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />}/>
      
    </Routes>
  );

  const Client = (

      <Routes>
        <Route element={<AppBarwithChatBot />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/mycomplaint" element={<MyComplaint />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
  );

  return role === "admin" ? <AdminLayout>
    {Admin}
  </AdminLayout> : role === "user" ? <UserLayout>
    {Client}
  </UserLayout> : <AuthLayout>
    {AuthRoutes}
  </AuthLayout>;
}

export default App;