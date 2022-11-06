import { Button } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useMenuDrawerStore } from "../Stores";
import { MenuDrawer } from "./MenuDrawer";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Layout = () => {
  const openMenuDrawer = useMenuDrawerStore(state => state.open);

  return (
    <div style={{ height: "100vh" }}>
      <Button
        onClick={openMenuDrawer}
        style={{ position: "fixed", left: "1rem", top: "1rem" }}
      >
        <HamburgerIcon />
      </Button>
      <MenuDrawer />
      <main
        style={{
          paddingInline: "5rem",
          maxWidth: "40rem",
          marginInline: "auto",
          marginBlock: "4rem",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};
