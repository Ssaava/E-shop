import { useState, MouseEvent } from "react";
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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./Header-Components/Logo";
import ScrollTop from "../scroll/ScrollTop";
import Divider from "@mui/material/Divider";
import ShoppingCart from "./Header-Components/ShoppingCart";
import { ListItemIcon } from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

const pages = ["Everything", "Women", "Men", "Accessories"];
const settings = [
  { title: "Profile", icon: <PersonAdd fontSize="small" /> },
  { title: "Account", icon: <PersonAdd fontSize="small" /> },
  { title: "Settings", icon: <Settings fontSize="small" /> },
  { title: "Logout", icon: <Logout fontSize="small" /> },
];
const companyInfo = [
  { id: 1, title: "About us" },
  { id: 2, title: "Contact us", marginRight: 2 },
];
function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // end of the arrow

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters id="back-to-top-anchor">
          <Logo />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {companyInfo.map((info) => {
              return (
                <Typography
                  variant="subtitle2"
                  component="a"
                  target="/"
                  key={info.id}
                  sx={{ cursor: "pointer", marginRight: info.marginRight }}
                >
                  {info.title}
                </Typography>
              );
            })}
          </Box>
          <ShoppingCart content="1" />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                // <MenuItem key={setting} onClick={handleCloseUserMenu}>
                //   <Typography textAlign="center">{setting}</Typography>
                // </MenuItem>

                <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                  <ListItemIcon>{setting.icon}</ListItemIcon>
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* display the categories links */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <Divider />
                {companyInfo.map((info) => {
                  return (
                    <MenuItem key={info.id} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        component="a"
                        target="/"
                        sx={{
                          cursor: "pointer",
                          marginRight: info.marginRight,
                        }}
                      >
                        {info.title}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <ScrollTop />
    </AppBar>
  );
}
export default Header;
