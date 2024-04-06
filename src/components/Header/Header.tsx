import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ScrollTop from "../scroll/ScrollTop";
import Categories from "./Header-Components/Categories";
import Logo from "./Header-Components/Logo";
import ShoppingCart from "./Header-Components/ShoppingCart";

import PagesLinks from "./Header-Components/PagesLinks";
import ProfileIcon from "./Header-Components/ProfileIcon";

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
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const handleCloseDrawer = () => {
    setToggleDrawer(false);
  };
  return (
    <AppBar>
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
          <ProfileIcon />

          {/* display the categories links */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" onClick={() => setToggleDrawer(true)}>
                <MenuIcon />
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
              settings={settings}
            />
          </Drawer>
        </Toolbar>
      </Container>
      <ScrollTop />
    </AppBar>
  );
}
export default Header;
