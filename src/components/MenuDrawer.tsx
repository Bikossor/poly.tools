import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useMenuDrawerStore } from "../Stores";

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
        <DrawerBody>{"Drawer content"}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
