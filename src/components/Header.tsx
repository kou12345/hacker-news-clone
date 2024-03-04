import { AppBar, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <AppBar
      position="static"
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "64px",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111827",
      }}
    >
      <Typography variant="h6">Hacker News Clone</Typography>
    </AppBar>
  );
};
