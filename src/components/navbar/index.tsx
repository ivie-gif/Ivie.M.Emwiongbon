import * as React from 'react';
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
import MenuItem from '@mui/material/MenuItem';
import CustomButton from '../../shared/button'

import ivieAvatar from '../../assets/avatar.png'

const pages = ['Home', 'Skills', 'Projects', 'Resume'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static"  sx={{backgroundColor: '#212529'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <Box sx={{ flexGrow: 0, display: 'flex'}}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Ivie Image" src={ivieAvatar} sx={{border: '7px solid #262a2e'}} />
              </IconButton>
            <Box>
            <Typography sx={{mt: 2, ml: 2, color: '#c4cfde',}}>
                INBIO
            </Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, position: 'fixed', right: '0px', color:'#ff014f' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{position: 'relative', right: '0px'}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, position: 'fixed', right: '50px' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ mx: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
        <CustomButton variant='text' sx={{color: '#ff014f', outline: '2px solid #212529', boxShadow: '15px 15px 20px #1c1e22, -10px -10px 19px #262a2e', backgroundColor: 'linear-gradient(145deg, #1e2024, #23272b)'}}>
            Contact
        </CustomButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;