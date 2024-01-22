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
import { useState } from "react";
import { MyMenu } from "./MyMenu";
import Link from "next/link";
import { IconComp } from "./IconComp";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

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
        sx={{ my: 2, color: "#000", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        Smm-Consulting
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
    <Box sx={{ display: "flex", backgroundColor: "#F1E8E8" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#F1E8E8" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
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
              justifyContent: { xs: "space-between", md: "flex-start" },
              height: "40px",
              textAlign: { xs: "right", sm: "left" },
            }}
          >
            <Link
              href={`/`}
              style={{
                textDecoration: "none",
                color: "#000",
                marginRight: "15px",
              }}
            >
              Smm-Consulting
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