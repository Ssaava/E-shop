import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

// @ts-ignore
import { CssBaseline } from "@mui/material";
import Footer from "../components/Footer/Footer";


const MainLayOut = () => {
  return (
   <>
       <CssBaseline />
       <Header />
       <Outlet />
       <Footer />
   </>
  );
};

export default MainLayOut;
