import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

import { CssBaseline } from "@mui/material";
import Footer from "../components/Footer/Footer";

import { Dispatch, SetStateAction, useState } from "react";

type ContextType = {
  isLoggingIn: boolean;
  setIsLoggingIn: Dispatch<SetStateAction<boolean>>;
};
const MainLayOut = () => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

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
