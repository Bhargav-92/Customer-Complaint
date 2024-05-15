import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Customer_logo from '../../../assets/logo/Customer_Complaint.png'

const navbarIcons = {
  alignItems: 'center',
  justifyContent: 'center',
}

const LinkStyle = {
  textDecoration: 'none',
  color: '#000',
  fontWeight: '550'
}

function Layout() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [state, setState] = React.useState(false);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Hamburger Menu List 
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300,
        height: '2rem',
        marginBottom: '1rem'
      }}
      onClick={() => toggleDrawer(anchor, false)}
      onKeyDown={() => toggleDrawer(anchor, false)}
    >
      <List sx={{ margin: '2rem 1rem 0rem 2rem' }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to='/home'>
            <ListItemIcon>
              <Stack sx={{ ...navbarIcons }} spacing={2} direction='row'>
                <HomeIcon style={{ fontSize: '2rem' }} />
                <Typography style={{ letterSpacing: '1px', fontSize: '1.5rem' }}>
                  Dashboard
                </Typography>
              </Stack>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List sx={{ margin: '2rem 1rem 0rem 2rem' }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to='/about'>
            <ListItemIcon>
              <Stack sx={{ ...navbarIcons }} spacing={2} direction='row'>
                <InfoIcon style={{ fontSize: '2rem' }} />
                <Typography style={{ letterSpacing: '1px', fontSize: '1.5rem' }}>
                  Complaint
                </Typography>
              </Stack>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{
        background: "#27293C",
        color: '#fff'
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, alignItems: 'center' }}>
              <img src={Customer_logo} alt="customer_complaint" height={60} width={80} />
              <Typography sx={{ fontWeight: '700', fontSize: '1.2rem' }}>Admin Pannel</Typography>
            </Box>

            {/* Hamburger Menu Icon */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <div>
                {['left'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={toggleDrawer(anchor, true)}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center', flexGrow: 20, mr: 2, }}>
              <img src={Customer_logo} alt="customer_complaint" height={80} width={100} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Box sx={{ marginLeft: 'auto' }}> {/* Adjusted line */}
                <Link to={'/admin/dashboard'}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, ...LinkStyle, color: '#fff' }}
                  >
                    Dashboard
                  </Button>
                </Link>
                <Link to={'/admin/complaints'}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, ...LinkStyle, color: '#fff' }}
                  >
                    Complaints
                  </Button>
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
export default Layout;
