import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Admin/AdminLayout/Layout';
import Complaints from './Components/Admin/Complaints/Complaints';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Appbar from './Components/Appbar/Appbar';
import AuthContext from './Components/AuthContext/AuthContext';
import AuthProvider from './Components/AuthContext/AuthProvider';
import ComplaintChatBot from './Components/ComplaintChatBot/ComplaintChatBot';
import About from './Pages/About';
import Complaint from './Pages/Complaint';
import Faq from './Pages/Faq';
import Home from './Pages/Home';
import SignIn from './Pages/Login';
import MyComplaint from './Pages/MyComplaint';
import Nopage from './Pages/Nopage';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import { useContext } from 'react';

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { isAuthenticated } = useContext(AuthContext);

  const AppBarwithChatBot = () => (
    <>
      <Appbar />
      <ComplaintChatBot />
    </>
  );

  const AuthRoutes = (
    <Routes>
      <Route index path="/" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );

  const Admin = (
    <Routes>
      <Route path="*" element={<Nopage />} />
      <Route element={<Layout />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/complaints" element={<Complaints />} />
      </Route>
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

  return isAuthenticated === 'user' ? Client : isAuthenticated === 'Admin' ? Admin : AuthRoutes
}

export default App;
