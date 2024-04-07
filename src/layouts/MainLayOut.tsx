import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { CssBaseline } from "@mui/material";

const MainLayOut = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayOut;
