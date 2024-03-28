import { useState, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
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
import PagesLinks from "./Header-Components/pagesLinks";

import Categories from "./Header-Components/Categories";

const pages = ["Everything", "Women", "Men", "Accessories"];
const settings = [
  {
    title: "Profile",
    link: "user-profile",
    icon: <PersonAdd fontSize="small" />,
  },
  {
    title: "Account",
    link: "user-account",
    icon: <PersonAdd fontSize="small" />,
  },
  {
    title: "Settings",
    link: "user-settings",
    icon: <Settings fontSize="small" />,
  },
  { title: "Logout", link: "log-out", icon: <Logout fontSize="small" /> },
];
const companyInfo = [
  { title: "About us", infolink: "about-us" },
  { title: "Contact us", infolink: "contact-us", marginRight: 2 },
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
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters id="back-to-top-anchor">
          <Logo />

          <PagesLinks pages={pages} handleCloseNavMenu={handleCloseNavMenu} />

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {companyInfo.map((info) => {
              return (
                <Link
                  component={NavLink}
                  to={info.link}
                  key={info.id}
                  sx={{
                    cursor: "pointer",
                    marginRight: info.marginRight,
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {info.title}
                </Link>
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
          <Categories
            anchorElNav={anchorElNav}
            handleCloseNavmanu={handleCloseNavMenu}
            pages={pages}
            companyInfo={companyInfo}
            handleOpenNavMenu={handleOpenNavMenu}
          />
        </Toolbar>
      </Container>
      <ScrollTop />
    </AppBar>
  );
}
export default Header;
