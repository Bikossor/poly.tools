import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useMenuDrawerStore } from "../Stores";
import { NavLink } from "react-router-dom";

export const MenuDrawer = () => {
  const { close, isOpen } = useMenuDrawerStore(state => ({
    close: state.close,
    isOpen: state.isOpen,
  }));

  return (
    <Drawer placement={"left"} onClose={close} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">{"poly.tools"}</DrawerHeader>
        <DrawerBody>
          <Flex direction={"column"}>
            <Link as={NavLink} to={"/"}>
              Home
            </Link>
            <Link as={NavLink} to={"/about"}>
              About
            </Link>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
