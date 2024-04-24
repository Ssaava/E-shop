import CallIcon from "@mui/icons-material/Call";
import InfoIconOutlined from "@mui/icons-material/InfoOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
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
import logo from "../../assets/logo.png";
import ScrollTop from "../scroll/ScrollTop";
import Categories from "./Header-Components/Categories";
import LinkButton from "./Header-Components/LinkButton";
import Logo from "./Header-Components/Logo";
import PagesLinks from "./Header-Components/PagesLinks";
import ShoppingCart from "./Header-Components/ShoppingCart";

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
    title: "Settings",
    link: "user-settings",
    icon: <Settings fontSize="small" />,
  },
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
          <Logo src={logo} />

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
              aria-controls={open ? "profile menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
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
            sx={{
              maxWidth: "300px",
              width: "100%",
            }}
          >
            {
              <MenuItem>
                <LinkButton
                  toLink={"/sign-in"}
                  handleClose={handleClose}
                  linkStyling={{
                    textDecoration: "none",
                    marginInline: "auto",
                    maxWidth: "200px",
                    width: "100%",
                    background: "transparent",
                  }}
                  buttonStyling={{
                    color: "white",
                    width: "100%",
                    backgroundColor: "blue",
                    "&:hover": { background: "blue", color: "white" },
                  }}
                >
                  Sign In
                </LinkButton>
              </MenuItem>
            }
            {settings.map((setting) => (
              <MenuItem>
                <Link
                  component={NavLink}
                  to={`${setting.link}`}
                  key={setting.title}
                  onClick={handleClose}
                  sx={{
                    textDecoration: "none",
                    color: "grey",
                    "&:hover": { color: "black" },
                  }}
                >
                  <ListItemIcon>{setting.icon}</ListItemIcon>
                  {setting.title}
                </Link>{" "}
              </MenuItem>
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
