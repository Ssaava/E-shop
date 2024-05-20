import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

import { CssBaseline } from "@mui/material";
import Footer from "../components/Footer/Footer";
import { createContext, useState } from "react";

const MainContext = createContext<object>({});
const MainLayOut = () => {
  const [headerBackground, setHeaderBackground] = useState<object>({
    background: "rgba(0, 0, 0, 0.05)",
  });
  return (
    <MainContext.Provider value={{ headerBackground, setHeaderBackground }}>
      <CssBaseline />
      <Header />
      <Outlet />
      <Footer />
    </MainContext.Provider>
  );
};

export default MainLayOut;
export { MainContext };
