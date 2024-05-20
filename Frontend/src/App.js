import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Complaints from './Components/Admin/Complaints/Complaints';
import Appbar from './Components/Appbar/Appbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Complaint from './Pages/Complaint';
import MyComplaint from './Pages/MyComplaint';
import Faq from './Pages/Faq';
import SignIn from './Pages/Login';
import Register from './Pages/Register';
import Layout from './Components/Admin/AdminLayout/Layout';
import Nopage from './Pages/Nopage';
import Profile from './Pages/Profile';
// import Chatbot from './Components/ComplaintChatBot/ComplaintChatBot';
// import ProtectedRoutes from './Components/ProtectedRouter/ProtectedRoute';



function App() {

  {/* Auth Routes */ }
  const AuthRoutes = (
    <Routes>
      <Route path="/" index element={<SignIn />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )

  {/* Admin routes */ }
  const admin = (
    <Routes>
      <Route path='*' element={<Nopage />} />
      <Route path="/admin" element={<Layout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/complaints" element={<Complaints />} />
      </Route>
    </Routes>
  )

  {/* client routes */ }
  const client = (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/complaint' element={<Complaint />} />
      <Route path='/mycomplaint' element={<MyComplaint />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/profile' element={<Profile />} />

    </Routes>
  )

  return (
    <>
    {
      
    }
    </>
  );
}

// Higher-order component to wrap Appbar with Chatbot
// const AppWithChatbot = () => (
//   <>
//     <Appbar />
//     <Chatbot />
//     <ProtectedRoutes />
//   </>

// );

export default App;
