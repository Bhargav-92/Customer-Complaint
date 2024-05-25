import Dashboard from "../Components/Admin/scenes/dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import UserLayout from "../layouts/UserLayout";
import React from "react";


export const AuthRoutes = [
    {
        paht: "",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            }
        ] 
    }
]

export const UserRoutes = [
    {
        path: "",
        element: <UserLayout />,
        children: [
            {
                path: "home",
                element: <Home />
            }
        ]
    }
]

export const AdminRoutes = [
    {
        path: "",
        element: <AdminLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />
            }
        ]
    }
]