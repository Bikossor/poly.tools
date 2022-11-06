import { Button } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useMenuDrawerStore } from "../Stores";
import { MenuDrawer } from "./MenuDrawer";

export const Layout = () => {
  const openMenuDrawer = useMenuDrawerStore(state => state.open);

  return (
    <>
      <Button onClick={openMenuDrawer}>Open Menu</Button>
      <MenuDrawer />
      <Outlet />
    </>
  );
};
