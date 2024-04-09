import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import InfoIconOutlined from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import { MouseEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import ScrollTop from "../scroll/ScrollTop";
import Categories from "./Header-Components/Categories";
import Logo from "./Header-Components/Logo";
import ShoppingCart from "./Header-Components/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import PagesLinks from "./Header-Components/PagesLinks";

const pages = ["Everything", "Women", "Men", "Accessories"];
type SettingsTypes = {
  title: string;
  link: string;
  icon: JSX.Element;
};
const settings: SettingsTypes[] = [
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
  icon: JSX.Element;
};

const companyInfo: CompanyInfo[] = [
  {
    title: "About us",
    infoLink: "about-us",
    icon: <InfoIconOutlined fontSize="small" />,
  },
  {
    title: "Contact us",
    infoLink: "contact-us",
    icon: <CallIcon fontSize="small" />,
    marginRight: 2,
  },
];

function Header() {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCloseDrawer = () => {
    setToggleDrawer(false);
  };
  window.addEventListener("resize", () => {
    window.innerWidth <= 900 && setAnchorEl(null);
  });

  // work on the profile menu
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        padding: 2,
        background: "rgba(0, 0, 0, 0.05)",
        boxShadow: "unset",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters id="back-to-top-anchor">
          <Logo />

          <PagesLinks pages={pages} />

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {companyInfo.map((info) => {
              return (
                <Link
                  component={NavLink}
                  to={info.infoLink}
                  key={info.title}
                  sx={{
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
          <Tooltip title="Profile">
            <IconButton
              sx={{ p: 0, display: { xs: "none", md: "flex" } }}
              onClick={handleClick}
            >
              <Avatar alt="Remy Sharp" sx={{ color: "black" }} />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {settings.map((setting) => (
              <Link
                component={NavLink}
                to={`${setting.link}`}
                key={setting.title}
                sx={{ textDecoration: "none", color: "grey" }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>{setting.icon}</ListItemIcon>
                  {setting.title}
                </MenuItem>
              </Link>
            ))}
          </Menu>

          {/* display the categories links */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" onClick={() => setToggleDrawer(true)}>
                <MenuIcon
                  sx={{ color: "white", width: "35px", height: "35px" }}
                />
              </IconButton>
            </Box>
          </Box>

          <Drawer
            open={toggleDrawer}
            onClose={() => handleCloseDrawer()}
            anchor="right"
          >
            <Categories
              companyInfo={companyInfo}
              pages={pages}
              handleCloseDrawer={handleCloseDrawer}
            />
          </Drawer>
        </Toolbar>
      </Container>
      <ScrollTop />
    </AppBar>
  );
}
export default Header;
