import { AppBar, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <AppBar
      position="static"
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "64px",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">Footer</Typography>
    </AppBar>
  );
};
