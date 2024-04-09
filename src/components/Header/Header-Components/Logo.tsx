import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

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
        noWrap
        sx={{
          display: { responsiveDesign },
          alignItems: "center",
          flexGrow: Number(screenWidth.width <= 900 ? 1 : "unset"),
        }}
      >
        <Typography
          component="img"
          src={logo}
          sx={{ width: 150, objectFit: "cover" }}
        />
      </Link>
    </>
  );
};
export default Logo;
