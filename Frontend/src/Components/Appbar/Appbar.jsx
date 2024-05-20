import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import Customer_logo from '../../assets/logo/Customer_Complaint.png'


const settings = ['Profile', 'Dashboard', 'Logout'];
const navbarIcons = {
  alignItems: 'center',
  justifyContent: 'center',
}
const LinkStyle = {
  textDecoration: 'none',
  color: '#000',
  fontWeight: '550'
}

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [state, setState] = React.useState(false);
  const [name, setName] = useState();

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSettingClick = (setting) => {
    switch (setting) {
      case 'Profile':
        navigate('/profile');
        handleCloseUserMenu();
        break;
      case 'Dashboard':
        navigate('/home');
        handleCloseUserMenu();
        break;
      case 'Logout':
        localStorage.clear();
        localStorage.removeItem('User') 
        navigate('/')
        handleCloseUserMenu();
        break;

      default:
        break;
    }
  }

  // Function to capitalize the first letter of each word
  const capitalizeWords = (string) => string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) setName(capitalizeWords(name));
  }, []);


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
                  Home
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
                  About
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
          <ListItemButton component={Link} to='/complaint'>
            <ListItemIcon>
              <Stack sx={{ ...navbarIcons }} spacing={2} direction='row'>
                <SupportAgentIcon style={{ fontSize: '2rem' }} />
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
      <List sx={{ margin: '2rem 1rem 0rem 2rem' }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to='/mycomplaint'>
            <ListItemIcon>
              <Stack sx={{ ...navbarIcons }} spacing={2} direction='row'>
                <FormatListBulletedIcon style={{ fontSize: '2rem' }} />
                <Typography style={{ letterSpacing: '1px', fontSize: '1.5rem' }}>
                  MyComplanits
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
          <ListItemButton component={Link} to='/faq'>
            <ListItemIcon>
              <Stack sx={{ ...navbarIcons }} spacing={2} direction='row'>
                <LiveHelpIcon style={{ fontSize: '2rem' }} />
                <Typography style={{ letterSpacing: '1px', fontSize: '1.5rem' }}>
                  Faq
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
      <AppBar position="absolute" sx={{
        background: "#fff",
        color: '#000'
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <img src={Customer_logo} alt="customer_complaint" height={60} width={80} />
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
              <Link to={'/home'}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, ...LinkStyle }}
                >
                  Home
                </Button>
              </Link>
              <Link to={'/about'}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, ...LinkStyle }}
                >
                  About
                </Button>
              </Link>
              <Link to={'/complaint'}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, ...LinkStyle }}
                >
                  Complaint
                </Button>
              </Link>
              <Link to={'/mycomplaint'}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, ...LinkStyle }}
                >
                  My Complaints
                </Button>
              </Link>
              <Link to={'/faq'}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, ...LinkStyle }}
                >
                  Faq
                </Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Stack direction={'column'}>
                  <Stack direction={'column'} sx={{ margin: "1rem 1rem", alignItems: 'flex-start' }} >
                    <Typography textAlign="center" sx={{ fontWeight: 700 }} >{name}</Typography>
                  </Stack>
                  <hr style={{
                    border: ".1px solid #555"
                  }} />
                  <div style={{ padding: ".1rem 0rem" }}>
                    {settings.map((setting, index) => (
                      <MenuItem key={index} onClick={() => handleSettingClick(setting)} sx={{
                        width: 200
                      }}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </div>
                </Stack>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
export default Navbar;