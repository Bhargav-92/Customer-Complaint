import React from "react"
import Sidebar from "../Components/Admin/AdminComponents/Sidebar/Sidebar"
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Dashboard from "../Components/Admin/AdminComponents/Dashboard/Dashboard"
import AdminProfile from "../Components/Admin/AdminComponents/Profile/Profile"  
import FAQ from "../Components/Admin/AdminComponents/Faq/FAQ"
import LineChartComponent from "../Components/Admin/AdminComponents/Charts/LineChart"
import PieChartComponent from "../Components/Admin/AdminComponents/Charts/PieChart"

export default function AdminLayout({ children }) {
    return (
        <div>
           <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flexBasis: '18%' }}>
        <Sidebar />
      </div>
      <div style={{ flexBasis: '80%', marginTop: '20px' }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/adminfaq" element={<FAQ />} />
          <Route path="/linechart" element={<LineChartComponent />} />
          <Route path="/piechart" element={<PieChartComponent/>} />
        
          
      
        </Routes>
      </div>
    </div>
        </div>
    )
}