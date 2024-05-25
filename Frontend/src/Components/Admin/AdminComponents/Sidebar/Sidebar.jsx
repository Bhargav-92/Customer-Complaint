import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, IconButton, Toolbar, Box, Hidden, Avatar, Typography } from '@mui/material';
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

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Line Chart', icon: <ShowChartIcon /> },
    { text: 'Pie Chart', icon: <PieChartIcon /> },
    { text: 'Profile', icon: <AccountCircleIcon /> },
    { text: 'FAQ', icon: <HelpIcon /> },
    { text: 'All users', icon: <PeopleIcon /> },
    { text: 'All Complaints', icon: <ReportIcon /> },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <IconButton onClick={() => setOpen(!open)} sx={{ mr: 1 }}>
          <MenuIcon sx={{ color: '#f57c00', textDecoration: 'none', '&:hover': { outline: 'none', textDecoration: 'none', cursor: 'pointer' } }} />
        </IconButton>
      </Toolbar>
      <Divider />
      {open && (
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <Avatar alt="Profile Picture" src="" sx={{ width: 60, height: 60, mx: 'auto', my: 1 }} />
          <Typography variant="body1">Username</Typography>
        </Box>
      )}
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem 
              button 
              sx={{
                '&:hover': {
                  backgroundColor: 'orange',
                  color: 'white',
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  }
                }
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Hidden mdUp implementation="css">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: 1, mt: 2, color: 'black' }}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
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
            width: open ? 240 : 60,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: open ? 240 : 60, transition: 'width 0.2s' },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </Box>
  );
};

export default Sidebar;
