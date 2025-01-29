import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Filter from "./pages/Filter";
import Data from "./pages/Data";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
