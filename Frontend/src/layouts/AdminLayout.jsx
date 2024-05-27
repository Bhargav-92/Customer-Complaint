import React from "react"
import Sidebar from "../Components/Admin/AdminComponents/Sidebar/Sidebar"
import Appbar from "../Components/Admin/AdminComponents/Appbar/Appbar"
import './layout.css'

export default function AdminLayout({ children }) {
    return (
        <div>
            <div className="app">
                <Sidebar />
                <div className="content">
                    <Appbar />
                    {children}
                </div>
            </div>
        </div>
    )
}