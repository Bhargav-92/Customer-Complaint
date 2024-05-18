// src/App.js
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


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<SignIn />}  />      
          <Route path='/register' element={<Register />} />

          {/* Client routes */}
          <Route path='/' element={<AppWithChatbot />}>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/complaint' element={<Complaint />} />
            <Route path='/mycomplaint' element={<MyComplaint />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='*' element={<Nopage />} />

          {/* Admin routes */}
          <Route path="/admin" element={<Layout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/complaints" element={<Complaints />} />
          </Route>
        </Routes>
      </BrowserRouter>
 
  );
}

// Higher-order component to wrap Appbar with Chatbot
const AppWithChatbot = () => (
  <>
    <Appbar />
    {/* <Chatbot /> */}
  </>
);

export default App;
