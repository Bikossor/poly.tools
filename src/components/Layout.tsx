import { HamburgerIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useMenuDrawerStore } from "../Stores";
import { MenuDrawer } from "./MenuDrawer";
import { Suspense } from "react";
import { LoadingFallback } from "./LoadingFallback";
import { useShallow } from "zustand/shallow";
import { Button } from "./Button";
import { VStack } from "./VStack";

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
          <Button
            title="Open menu"
            aria-label="Open menu"
            onClick={openMenuDrawer}
          >
            <HamburgerIcon />
          </Button>
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
