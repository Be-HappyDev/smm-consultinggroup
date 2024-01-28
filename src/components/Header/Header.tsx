/* eslint-disable @next/next/no-img-element */
"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MyMenu } from "./MyMenu";
import Link from "next/link";
import { IconComp } from "./IconComp";
import { cstyles } from "@/configs/globalStyle";

import styles from "./Header.module.css";
import { useState } from "react";

interface Props {
  window?: () => Window;
}

const drawerWidth = 300;

export const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        onClick={handleDrawerToggle}
        variant="h6"
        sx={{
          my: 2,
          color: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontWeight: cstyles.fontWeights.bold,
        }}
      >
        <Link
          href={`/`}
          style={{
            textDecoration: "none",
            color: "#3FBBE9",
            marginRight: "15px",
            fontWeight: cstyles.fontWeights.bold,
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            src="/images/fulllogo.png"
            alt="logo"
            style={{ width: "55px", height: "100%", objectFit: "cover" }}
          />
          <span className={styles.logo}>SMM Consulting Group</span>
        </Link>
        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <IconComp />
        </Box>
      </Typography>
      <Divider />
      <List>
        <MyMenu />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#fff" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "var(--bg-color)" }}>
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-end", md: "space-between" },
              height: "40px",
              textAlign: { xs: "right", sm: "left" },
            }}
          >
            <Link
              href={`/`}
              style={{
                textDecoration: "none",
                color: "#3FBBE9",
                marginRight: "15px",
                fontWeight: cstyles.fontWeights.bold,
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src="/images/fulllogo.png"
                alt="logo"
                style={{ width: "55px", height: "100%", objectFit: "cover" }}
              />
              <span className={styles.logo}>SMM Consulting Group</span>
            </Link>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <IconComp />
            </Box>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <MyMenu />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
