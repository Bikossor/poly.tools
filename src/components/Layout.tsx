import { Button } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useMenuDrawerStore } from "../Stores";
import { MenuDrawer } from "./MenuDrawer";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Layout = () => {
  const openMenuDrawer = useMenuDrawerStore(state => state.open);

  return (
    <div style={{ height: "100vh" }}>
      <Button onClick={openMenuDrawer}>
        <HamburgerIcon />
      </Button>
      <MenuDrawer />
      <main
        style={{
          paddingInline: "1rem",
          maxWidth: "40rem",
          marginInline: "auto",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};
