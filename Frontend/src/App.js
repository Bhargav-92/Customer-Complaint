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
import Chatbot from './Components/ComplaintChatBot/ComplaintChatBot';
import { AuthProvider } from './Pages/AuthContext';
import PrivateRoute from './Components/ProtectedRoutes/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" index element={<SignIn />} /> {/* Sign-in page is the default page */}
          <Route path='/register' element={<Register />} />

          {/* client routes */}
          <Route path='/' element={<AppWithChatbot />}>
            <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path='/about' element={<PrivateRoute><About /></PrivateRoute>} />
            <Route path='/complaint' element={<PrivateRoute><Complaint /></PrivateRoute>} />
            <Route path='/mycomplaint' element={<PrivateRoute><MyComplaint /></PrivateRoute>} />
            <Route path='/faq' element={<PrivateRoute><Faq /></PrivateRoute>} />
            <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          </Route>
          <Route path='*' element={<Nopage />} />

          {/* Admin routes */}
          <Route path="/admin" element={<Layout />}>
            <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/admin/complaints" element={<PrivateRoute><Complaints /></PrivateRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

// Higher-order component to wrap Appbar with Chatbot
const AppWithChatbot = () => (
  <>
    <Appbar />
    <Chatbot />
  </>
);

export default App;
