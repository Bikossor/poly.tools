import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Container, VStack } from "@chakra-ui/react";
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
          <Button onClick={openMenuDrawer}>
            <HamburgerIcon />
          </Button>
        </Container>
        <Container>
          <Outlet />
        </Container>
      </VStack>
      <MenuDrawer />
    </div>
  );
};
