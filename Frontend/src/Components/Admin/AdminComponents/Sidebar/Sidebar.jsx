import React, { useState, useEffect } from 'react';
import { Drawer, List, Divider, Box, Hidden, Avatar, Typography, IconButton, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import PeopleIcon from '@mui/icons-material/People';
import ReportIcon from '@mui/icons-material/Report';
import MenuIcon from '@mui/icons-material/Menu';
import SidebarLink from './SidebarLink';

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const [open, setOpen] = useState(true);

  const handleKeyDown = (event) => {
    if (event.shiftKey && event.key === '>') {
      setOpen(true);
    } else if (event.shiftKey && event.key === '<') {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon sx={{ color: '#000' }} />, path: '/' },
    { text: 'Line Chart', icon: <ShowChartIcon sx={{ color: '#000' }} />, path: '/admin/line' },
    { text: 'Pie Chart', icon: <PieChartIcon sx={{ color: '#000' }} />, path: '/admin/pie' },
    { text: 'Profile', icon: <AccountCircleIcon sx={{ color: '#000' }} />, path: '/admin/profile' },
    { text: 'FAQ', icon: <HelpIcon sx={{ color: '#000' }} />, path: '/admin/faq' },
    { text: 'All users', icon: <PeopleIcon sx={{ color: '#000' }} />, path: '/admin/users' },
    { text: 'All Complaints', icon: <ReportIcon sx={{ color: '#000' }} />, path: '/admin/complaints' },
  ];

  const drawer = (
    <div>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon sx={{ color: '#f57c00'}} />
      </IconButton>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        {open && (
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <Avatar alt="Profile Picture" src="" sx={{ width: 60, height: 60, mx: 'auto', my: 1 }} />
            <Typography variant="body1">Username</Typography>
          </Box>
        )}
      </Box>
      <List sx={{ p: open ? 1 : 0, paddingTop: '2rem' }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <SidebarLink to={item.path} icon={item.icon} text={item.text} open={open} />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', width: 'auto' }}>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            [`& .MuiDrawer-paper`]: { width: 200, transition: 'width 0.4s' },
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
            width: open ? 200 : 60,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: open ? 200 : 60, transition: 'width 0.2s' },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </Box>
  );
};

export default Sidebar;
