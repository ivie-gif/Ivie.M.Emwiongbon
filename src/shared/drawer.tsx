import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CancelIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography, Avatar } from "@mui/material";
import linkedInImage from "../assets/linkedInImage.png";
import githubImage from "../assets/gitupScreenshot.png";
import Link from "@mui/material/Link"

import ivieAvatar from "../assets/avatar.png";

const sideNav = [
  { text: "Home", path: "#", id: "/" },
  { text: "Skills", path: "#skill" },
  { text: "Projects", path: "#project"},
  { text: "Contact", path: "#contact"},
];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (openStatus: boolean) => () => {
    setOpen(openStatus);
  };

  const list = () => (
    <Box
      sx={{
        width: { lg: 375, xs: 310, md: 310 },
        height: "100vh",
        color: "#c4cfde",
        fontSize: "14px",
        fontWeight: 500,
        textTransform: "uppercase",
        pl: 2,
        
       
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", pt: 5, pb: 3, }}>
        <Box>
          <Avatar
            alt="Ivie Image"
            src={ivieAvatar}
            sx={{ width: "32%", height: "auto", border: "7px solid #262a2e" }}
          />
        </Box>
        <Box>
          <CancelIcon
            sx={{
              mt: 2,
              p: 2,
              mr: 2,
              backgroundColor: "#212529",
              alignSelf: "right",
              color: '#ff014f',
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>
            <Typography sx={{
                  fontSize: '16px',
                  lineHeight: '29px',
                  color: '#878e99',
                  p: 1,
                  textTransform: 'none',
                  pb: 4,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              
            }}>
            Crafting Digital Dreams, One Line of Code at a Time. I'll be very happy to connect with you :) 
            </Typography>
      <List sx={{ pb: 10 , pt: 4}}>
        {sideNav.map((sideNav) => (
          <ListItem key={sideNav.path} disablePadding>
            <ListItemButton>
              <Link href={sideNav.path}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    borderBottom: "none",
                  }}
                >
                  {sideNav.text}
                  </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography
        sx={{
          color: "#c4cfde",
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textAlign: "left",
          pt: 5,
          pl: 2,
          pr: 2,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        Find Me
      </Typography>
      <Box sx={{ display: "flex", pl: 2 }}>
        <a
          href="http://www.linkedin.com/in/ivie-maryann-emwiongbon"
          target="_blank"
        >
          <Typography
            style={{
              width: "10%",
            }}
          >
            <img
              alt="Ivie Image"
              src={linkedInImage}
              style={{
                padding: "5px 10px",
                backgroundColor: "#212428",
              }}
            />
          </Typography>
        </a>
        <a href="https://github.com/ivie-gif" target="_blank">
          <Typography
            style={{
              marginLeft: "20px",
              backgroundColor: "#212428",
            }}
          >
            <img
              alt="Ivie Image"
              src={githubImage}
              style={{
                width: "40%",
                marginTop: "15px",
                margin: "15px -43px 9px 17px",
              }}
            />
          </Typography>
        </a>
      </Box>
    </Box>
  );

  return (
    <Box>
      <MenuIcon sx={{ right: "20px" }} onClick={toggleDrawer(true)}>
        Open Drawer
      </MenuIcon>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': {
          backgroundColor: '#191b1e'
        }}}
      >
        {list()}
      </Drawer>
    </Box>
  );
}
