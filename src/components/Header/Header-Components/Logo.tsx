import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { Link, Typography } from "@mui/material";

export const Logo = ({ src }: { src: string }) => {
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
          src={src}
          sx={{ width: 65, objectFit: "cover", marginRight: 2 }}
        />
      </Link>
    </>
  );
};
export default Logo;
