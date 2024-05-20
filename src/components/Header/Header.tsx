import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { MainContext } from "../../layouts/MainLayOut";
import ScrollTop from "../scroll/ScrollTop";
import DrawerLinks from "./Header-Components/DrawerLinks";
import Logo from "./Header-Components/Logo";
import PagesLinks from "./Header-Components/PagesLinks";
import ShoppingCart from "./Header-Components/ShoppingCart";

function Header() {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { headerBackground } = useContext<object>(MainContext);

  const handleCloseDrawer = () => {
    setToggleDrawer(false);
  };

  // remove the avatar if on small devices or window resizing
  // window.addEventListener("resize", () => {
  //   window.innerWidth <= 900 && setAnchorEl(null);
  // });

  // work on the profile menu
  // const open = Boolean(anchorEl);
  // handle useIcon
  // const handleClick = (event: MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <AppBar
      position="static"
      sx={{
        padding: 2,
        ...headerBackground,
        boxShadow: "unset",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters id="back-to-top-anchor">
          <Logo src={logo} />

          <PagesLinks />

          <ShoppingCart content="1" />

          {/* this to be displayed only if user is not logged in */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              component={NavLink}
              to="/sign-in"
              sx={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Sign-In
            </Link>
          </Box>

          {/* Avatar icon needs to be displayed if user logs-in 
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

          for the Avatar Icon of the user
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
          </Menu>  */}

          {/* display the categories links in small devices */}
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
            <DrawerLinks handleCloseDrawer={handleCloseDrawer} />
          </Drawer>
        </Toolbar>
      </Container>
      <ScrollTop />
    </AppBar>
  );
}
export default Header;
