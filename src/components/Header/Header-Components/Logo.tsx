import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";

import { Link, Typography } from "@mui/material";

export const Logo = () => {
  const [screenWidth, setScreenWidth] = useState({ width: window.innerWidth });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth({ width: window.innerWidth });
    });

    return () => {
      window.removeEventListener("resize", () => console.log("exited"));
    };
  }, []);
  type sizes = {
    xs: string;
    md: string;
  };
  const responsiveDesign: sizes = {
    xs: Number(screenWidth.width) <= 900 ? "none" : "flex",
    md: Number(screenWidth.width) <= 900 ? "flex" : "none",
  };
  return (
    <>
      <Link
        component={NavLink}
        to="/"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <AdbIcon
          sx={{
            display: { responsiveDesign },
            mr: 1,
            color: "white",
          }}
        />{" "}
        {/**my icon goes here */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { responsiveDesign },
            fontFamily: "monospace",
            fontWeight: 700,
            flexGrow: Number(screenWidth.width) <= 900 ? 1 : "unset",
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          E-SHOP
        </Typography>
      </Link>
    </>
  );
};
export default Logo;
