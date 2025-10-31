import { HamburgerIcon } from "@chakra-ui/icons";
import { Container, IconButton, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useMenuDrawerStore } from "../Stores";
import { MenuDrawer } from "./MenuDrawer";
import { Suspense } from "react";
import { LoadingFallback } from "./LoadingFallback";
import { useShallow } from "zustand/shallow";

export const Layout = () => {
  const openMenuDrawer = useMenuDrawerStore(useShallow(state => state.open));

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
          <Suspense fallback={<LoadingFallback />}>
            <Outlet />
          </Suspense>
        </Container>
      </VStack>
      <MenuDrawer />
    </div>
  );
};
