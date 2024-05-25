import React from "react"

export default function AdminLayout({children}) {
    return (
        <div>
            <h1>Hello admin</h1>
            {children}
        </div>
    )
}