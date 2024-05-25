import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, IconButton, Toolbar, Box, Hidden, Avatar, Typography, AppBar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import PeopleIcon from '@mui/icons-material/People';
import ReportIcon from '@mui/icons-material/Report';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Function to handle keydown event for the Shift key combinations
  const handleKeyDown = (event) => {
    if (event.shiftKey && event.key === '>') {
      setOpen(true);
    } else if (event.shiftKey && event.key === '<') {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for keydown event
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon sx={{ color: '#000' }} /> },
    { text: 'Line Chart', icon: <ShowChartIcon sx={{ color: '#000' }} /> },
    { text: 'Pie Chart', icon: <PieChartIcon sx={{ color: '#000' }} /> },
    { text: 'Profile', icon: <AccountCircleIcon sx={{ color: '#000' }} /> },
    { text: 'FAQ', icon: <HelpIcon sx={{ color: '#000' }} /> },
    { text: 'All users', icon: <PeopleIcon sx={{ color: '#000' }} /> },
    { text: 'All Complaints', icon: <ReportIcon sx={{ color: '#000' }}/> },
  ];

  const drawer = (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black', borderBottom: '1px solid #777', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon sx={{ color: '#f57c00' }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Customer Complaint Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Divider />
      {open && (
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <Avatar alt="Profile Picture" src="" sx={{ width: 60, height: 60, mx: 'auto', my: 1 }} />
          <Typography variant="body1">Username</Typography>
        </Box>
      )}
      <Divider sx={{ border: '1px dashed #e67e22' }} />
      <List sx={{ p: open ? 1 : 0 }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              sx={{
                py: open ? 1 : 0.5,
                px: open ? 2 : 1,
                '&:hover': {
                  backgroundColor: 'orange',
                  color: 'white',
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  }
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: open ? 40 : 20 }}>
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', width: 'auto' }}>
      <Hidden mdUp implementation="css">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: 2, mt: 2, color: 'black' }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: 200 },
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
