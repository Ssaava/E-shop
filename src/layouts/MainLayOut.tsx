import { Outlet, useResolvedPath } from "react-router-dom";
import Header from "../components/Header/Header";

import { CssBaseline } from "@mui/material";
import Footer from "../components/Footer/Footer";

import { Dispatch, SetStateAction, useState } from "react";

type ContextType = {
  isLoggingIn: boolean;
  setIsLoggingIn: Dispatch<SetStateAction<boolean>>;
};
const MainLayOut = () => {
  const value = (localStorage.getItem("true") && true) || false;
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(value);
  console.log(useResolvedPath("sign-in"));
  return (
    <>
      <CssBaseline />
      {!isLoggingIn && (
        <Header isLoggingIn={isLoggingIn} setIsLoggingIn={setIsLoggingIn} />
      )}
      <Outlet context={{ isLoggingIn, setIsLoggingIn } satisfies ContextType} />
      {!isLoggingIn && <Footer />}
    </>
  );
};

export default MainLayOut;
