import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";

import ivieAvatar from "../../assets/avatar.png";

const Index = () => {
  return (
    <Box sx={{ paddingX: "10%" }}>
      <Box>
        <IconButton sx={{ p: 0, ml: 1, mt: 10 }}>
          <Avatar
            alt="Ivie Image"
            src={ivieAvatar}
            sx={{ width: "15%", height: "auto", border: "7px solid #262a2e" }}
          />
        </IconButton>
        <Box>
          <Typography
            sx={{ marginTop: "6px", ml: 1, color: "#c4cfde", fontSize: "20px" }}
          >
            Ivie Maryann Emwiongbon
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontsize: "18px",
            lineHeight: "30px",
            marginBottom: "100px",
            mt: 3,
            color: "#878e99",
          }}
        >
          © 2023. All rights reserved by Ivie Maryann Emwiongbon.
        </Typography>
      </Box>
    </Box>
  );
};

export default Index;
