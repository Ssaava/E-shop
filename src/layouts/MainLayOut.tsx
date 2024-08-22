import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { CssBaseline } from "@mui/material";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const MainLayOut = () => {
  const [bgHeader, setBgHeader] = useState<string>("");
  return (
    <>
      <CssBaseline />
      <Header bgHeader={bgHeader} />
      <Outlet context={[setBgHeader]} />
      <Footer />
    </>
  );
};

export default MainLayOut;
