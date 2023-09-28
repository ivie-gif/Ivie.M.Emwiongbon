import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CancelIcon from "@mui/icons-material/Cancel"
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import linkedInImage from "../assets/linkedInImage.png";
import githubImage from "../assets/gitupScreenshot.png";

const sideNav = [
  { text: "Home", path: "/", id: "/" },
  { text: "Skills", path: "/skills", id: "/skills" },
  { text: "Projects", path: "/projects", id: "/skills" },
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
        height: "auto",
        backgroundColor: "#191b1e",
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
      <List sx={{ pb: 10 }}>
        {["Home", "Skills", "Project", "Contact"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon sx={{color: 'white'}}>
                Home
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <BorderDivs /> */}
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
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
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
        sx={{ background: "#191b1e" }}
      >
        {list()}
      </Drawer>
    </Box>
  );
}
