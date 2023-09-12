import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type cardProps = {
  children: ReactNode;
  style?: any;
};

function Card({ children }: cardProps) {
  return (
    <Box
      style={{
        borderRadius: "20px",
        padding: "16px",
        width: "100%",
        height: "100%",
        marginBottom: '12px',
        boxShadow: "15px 15px 20px #1c1e22, -10px -10px 19px #262a2e",
        backgroundColor: "linear-gradient(145deg, #1e2024, #23272b)",
      }}
    >
      {children}
    </Box>
  );
}

export default Card;
