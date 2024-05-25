import React from "react"
import Sidebar from "../Components/Admin/AdminComponents/Sidebar/Sidebar"

export default function AdminLayout({children}) {
    return (
        <div>
            <Sidebar/>

            {/* <h1>Hello admin</h1>
            {children} */}
        </div>
    )
}