import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
  Toolbar,
  Box,
  Hidden,
  Avatar,
  Typography,
  AppBar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";
import PeopleIcon from "@mui/icons-material/People";
import ReportIcon from "@mui/icons-material/Report";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Function to handle keydown event for the Shift key combinations
  const handleKeyDown = (event) => {
    if (event.shiftKey && event.key === ">") {
      setOpen(true);
    } else if (event.shiftKey && event.key === "<") {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for keydown event
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon sx={{ color: "#000" }} />,
      path: "/dashboard",
    },
    {
      text: "Line Chart",
      icon: <ShowChartIcon sx={{ color: "#000" }} />,
      path: "/linechart",
    },
    {
      text: "Pie Chart",
      icon: <PieChartIcon sx={{ color: "#000" }} />,
      path: "/piechart",
    },
    {
      text: "Profile",
      icon: <AccountCircleIcon sx={{ color: "#000" }} />,
      path: "/adminprofile",
    },
    {
      text: "FAQ",
      icon: <HelpIcon sx={{ color: "#000" }} />,
      path: "/adminfaq",
    },
    {
      text: "All users",
      icon: <PeopleIcon sx={{ color: "#000" }} />,
      path: "/allusers",
    },
    {
      text: "All Complaints",
      icon: <ReportIcon sx={{ color: "#000" }} />,
      path: "/allcomplaints",
    },
  ];

  const drawer = (
    <div>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          borderBottom: "1px solid #AAAA",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon sx={{ color: "#f57c00" }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} pl={3}>
            Customer Complaint Admin
          </Typography>
          <PermIdentityIcon  height={'2rem'} />
        </Toolbar>
      </AppBar>
      <Toolbar />

      {open && (
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Avatar
            alt="Profile Picture"
            src=""
            sx={{ width: 60, height: 60, mx: "auto", my: 1 }}
          />
          <Typography variant="body1">Username</Typography>
        </Box>
      )}

      <List sx={{ p: open ? 1 : 0, paddingTop: "2rem" }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <SidebarLink
              to={item.path}
              icon={item.icon}
              text={item.text}
              open={open}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Hidden mdUp implementation="css">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: 2, mt: 2, color: "black" }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: "25%" },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            flexBasis: "auto",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              flexBasis: "auto",
              transition: "width 0.2s",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          flexBasis: "90%",
          width: { xs: "100%", md: `calc(100% - 30%)` },
          transition: "width 0.2s",
          p: 3,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Sidebar;
