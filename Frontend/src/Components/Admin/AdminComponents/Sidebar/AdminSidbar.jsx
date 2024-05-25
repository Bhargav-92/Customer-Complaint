import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

const AdminSidbar = () => {
    return (
        <>
            <Sidebar>
                <Menu
                    menuItemStyles={{
                        button: {
                            // the active class will be added automatically by react router
                            // so we can use it to style the active menu item
                            [`&.active`]: {
                                backgroundColor: '#13395e',
                                color: '#b6c8d9',
                            },
                        },
                    }}
                >
                    <MenuItem component={<Link to="/documentation" />}>Line Chart</MenuItem>
                    <MenuItem component={<Link to="/calendar" />}> Pie Chart</MenuItem>
                    <MenuItem component={<Link to="/e-commerce" />}>Complaints</MenuItem>
                    <MenuItem component={<Link to="/e-commerce" />}>Customers</MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}

export default AdminSidbar
