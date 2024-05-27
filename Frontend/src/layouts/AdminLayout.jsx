import React from "react"
import Sidebar from "../Components/Admin/AdminComponents/Sidebar/Sidebar"
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Dashboard from "../Components/Admin/AdminComponents/Dashboard/Dashboard"
import AdminProfile from "../Components/Admin/AdminComponents/Profile/Profile"  
import FAQ from "../Components/Admin/AdminComponents/Faq/FAQ"
import LineChartComponent from "../Components/Admin/AdminComponents/Charts/LineChart"

export default function AdminLayout({ children }) {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}