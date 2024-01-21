"use client";
import { ItServices, OurStory } from "@/data/navItem";
import { Box, Link, Menu, MenuItem, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { MouseEvent, useState } from "react";

export const MyMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentSubMenu, setCurrentSubMenu] = useState<string | null>(null);
  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentSubMenu(null);
  };
  const handleMenuClick = (
    event: MouseEvent<HTMLButtonElement>,
    submenu: string
  ) => {
    setAnchorEl(event.currentTarget);
    setCurrentSubMenu(submenu);
  };
  return (
    <>
      {ItServices.map((item, index) => (
        <div key={index}>
          {item.menu === "Our Story" ? (
            <>
              <Button
                color="inherit"
                onClick={(e) => handleMenuClick(e, item.menu)}
                sx={{
                  color: "#000"
                }}
              >
                {item.menu}
              </Button>
              {currentSubMenu === item.menu && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    sx: {
                      width: "100%",
                      display: "flex",
                      padding: { xs: "3px", sm: "15px" },
                      flexDirection: "column",
                      color: "#000"
                    },
                  }}
                >
                  {OurStory[0].dropdown.map((submenu) => (
                    <>
                      <MenuItem
                        key={submenu.menuItem}
                        component={Link}
                        href={`/${submenu.slug}`}
                        onClick={handleMenuClose}
                        sx={{
                          padding: { xs: "12px", sm: "15px" },
                          borderRadius: "5px",
                          fontWeight: "bold",
                          fontSize: { xs: "12px", sm: "16px" },
                          color: "#000"
                        }}
                      >
                        {submenu.menuItem}
                      </MenuItem>
                      <MenuItem
                        onClick={handleMenuClose}
                        sx={{
                          padding: { xs: "12px", sm: "15px" },
                          borderRadius: "5px",
                          fontWeight: "bold",
                          fontSize: { xs: "12px", sm: "16px" },
                        }}
                      >
                        <a style={{
                          color: "#000",
                          textDecoration: "none"
                        }} href="https://mairasuiunushova.ru" target="_blank">Maira Suiunyshova CEO</a>
                      </MenuItem>
                    </>
                  ))}
                </Menu>
              )}
            </>
          ) : (
            <>
              {item.slug ? (
                <Link href={`${item.slug}`}>
                  <Button
                    sx={{
                      color: "#000",
                    }}
                    onClick={(e) => handleMenuClick(e, item.menu)}
                  >
                    {item.menu}
                  </Button>
                </Link>
              ) : (
                <Button
                  color="inherit"
                  onClick={(e) => handleMenuClick(e, item.menu)}
                  sx={{
                    color: "#000",
                  }}
                >
                  {item.menu}
                </Button>
              )}

              {item.dropdown && currentSubMenu === item.menu && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    sx: {
                      width: { xs: "50%", sm: "100%" },
                      display: "flex",
                      padding: { xs: "0", sm: "15px" },
                      flexDirection: { xs: "column", sm: "row" },
                    },
                  }}
                >
                  {item.dropdown.map((submenu) => (
                    <Box
                      key={submenu.menuHead}
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#000",
                        }}
                        href={`
                          ${submenu.slug}
                        `}
                      >
                        <Typography
                          key={submenu.menuHead}
                          onClick={handleMenuClose}
                          sx={{
                            padding: "15px",
                            fontWeight: "900",
                            borderBottom: "1px solid #000",
                            ":hover": {
                              backgroundColor: "#F9F5EC",
                              cursor: "pointer",
                            },
                            fontSize: { xs: "14px", sm: "16px" },
                          }}
                        >
                          {submenu.menuHead}
                        </Typography>
                      </Link>
                      {submenu.submenu?.map((menuItem, menuItemIndex) => (
                        <MenuItem
                          key={menuItemIndex}
                          component={Link}
                          href={`/${menuItem.pageSlug}#${menuItem.slug}`}
                          onClick={handleMenuClose}
                          sx={{
                            padding: { xs: "7px", sm: "16px" },
                            borderRadius: "5px",
                            fontWeight: "bold",
                            fontSize: { xs: "12px", sm: "16px" },
                          }}
                        >
                          {menuItem.menuItem}
                        </MenuItem>
                      ))}
                    </Box>
                  ))}
                </Menu>
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
};
