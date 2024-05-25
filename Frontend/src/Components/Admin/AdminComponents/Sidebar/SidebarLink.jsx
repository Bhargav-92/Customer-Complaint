import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const SidebarLink = ({ to, icon, text, open }) => {
  return (
    <ListItem
      button
      component={Link}
      to={to}
      sx={{
        py: open ? 2 : 3,
        px: open ? 2 : 1,
        '&:hover': {
          backgroundColor: '#f57c00',
          color: '#fff',
          borderRadius: '10px',
          '& .MuiListItemIcon-root': {
            color: '#fff',
          }
        }
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: open ? 40 : 20,
          ':hover': {
            color: '#fff'
          }
        }}
      >
        {icon}
      </ListItemIcon>
      {open && <ListItemText primary={text} />}
    </ListItem>
  );
};

export default SidebarLink;
