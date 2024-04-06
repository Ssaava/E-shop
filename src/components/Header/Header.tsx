import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { MouseEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import ScrollTop from "../scroll/ScrollTop";
import Logo from "./Header-Components/Logo";
import ShoppingCart from "./Header-Components/ShoppingCart";

import Categories from "./Header-Components/Categories";
import PagesLinks from "./Header-Components/PagesLinks";

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

type CompanyInfo = {
  title: string;
  infoLink: string;
  marginRight?: number;
};

const companyInfo: CompanyInfo[] = [
  { title: "About us", infoLink: "about-us" },
  { title: "Contact us", infoLink: "contact-us", marginRight: 2 },
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
                  to={info.infoLink}
                  key={info.title}
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
            anchorElNav={anchorElNav!}
            handleCloseNavMenu={handleCloseNavMenu}
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
