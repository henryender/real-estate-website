import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from './Logo.svg'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom';




export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "#833ab4", fontFamily: "cursive" }}>
            <Link to='/' style={{textDecoration:'none'}}><img src={Logo} alt='logo' /></Link> <strong>PROXIMA</strong>
          </Typography>
          <div>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              size="large"
              edge="start"
              color=""
              aria-label="menu"
              sx={{ mr: 2, color: '#833ab4' }}
            >
              <MenuIcon fontSize='large' />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}>

              <Link to='/' style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}><HomeIcon sx={{ color: '#833ab4' }} />Home</MenuItem>
              </Link>
              <Link to='buy' style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}><StoreIcon sx={{ color: '#833ab4' }} />Buy/Rent Property</MenuItem>
              </Link>
              </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}