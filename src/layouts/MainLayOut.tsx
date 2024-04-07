import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayOut;
