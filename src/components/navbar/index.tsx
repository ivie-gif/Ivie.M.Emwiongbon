import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CustomButton from "../../shared/button";
import { Link } from "react-router-dom";

import Drawer from '../../shared/drawer'

import ivieAvatar from "../../assets/avatar.png";

const pages = [
  { text: "Home", path: "/", id: "/" },
  { text: "Skills", path: "/skills", id: "/skills" },
  { text: "Projects", path: "/projects", id: "/skills" },
];

const ResponsiveAppBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (openStatus: boolean) => () => {
    setOpen(openStatus);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [scrolling, setScrolling] = useState(false);

  // Adding a scroll event listener to update the AppBar's background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleaning up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      className={`scrolled ${scrolling ? "scrolled" : ""}`}
      sx={{
        backgroundColor: "#212529",
        zIndex: 3,
        boxShadow: "none",
        transition: "background-color 0.3s ease",

        "&.scrolled": {
          backgroundColor: 'rgba(33, 36, 40, 0.8705882353)',
          backdropFilter: 'blur(15px)',
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, display: "flex", pt: 2, pb: 2}}>
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Ivie Image"
                src={ivieAvatar}
                sx={{ border: "7px solid #262a2e" }}
              />
            </IconButton>
            <Box>
              <Typography sx={{ mt: 2, ml: 2, color: "#c4cfde" }}>
                INBIO
              </Typography>
            </Box>
          </Box>

          {/* mobile navaigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              position: "fixed",
              right: "0px",
              color: "#ff014f",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Drawer />
            </IconButton>

          </Box>
         


         {/* big screen navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              position: "fixed",
              right: "50px",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ mx: 2, color: "#c4cfde", display: "block" }}
              >
                <a
                  href={page.path}
                  id={page.id}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    borderBottom: "none",
                  }}
                >
                  {page.text}
                </a>
              </Button>
            ))}
            <CustomButton
              variant="text"
              sx={{
                color: "#ff014f",
                outline: "2px solid #212529",
                boxShadow: "15px 15px 20px #1c1e22, -10px -10px 19px #262a2e",
                backgroundColor: "linear-gradient(145deg, #1e2024, #23272b)",
              }}
            >
              Contact
            </CustomButton>
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
  );
};
export default ResponsiveAppBar;
