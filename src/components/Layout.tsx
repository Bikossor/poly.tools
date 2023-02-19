import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Container, IconButton, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useMenuDrawerStore } from "../Stores";
import { MenuDrawer } from "./MenuDrawer";

export const Layout = () => {
  const openMenuDrawer = useMenuDrawerStore(state => state.open);

  return (
    <div style={{ height: "100vh" }}>
      <VStack>
        <Container
          display={"flex"}
          alignItems={"center"}
          height={16}
          position={"relative"}
        >
          <IconButton
            icon={<HamburgerIcon />}
            title="Open menu"
            aria-label="Open menu"
            onClick={openMenuDrawer}
          />
        </Container>
        <Container>
          <Outlet />
        </Container>
      </VStack>
      <MenuDrawer />
    </div>
  );
};
