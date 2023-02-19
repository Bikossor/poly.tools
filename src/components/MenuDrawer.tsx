import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { useMenuDrawerStore } from "../Stores";
import { NavLink } from "react-router-dom";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const getColorModeIcon = (isDarkMode: boolean) =>
  isDarkMode ? <SunIcon /> : <MoonIcon />;

const getColorModeLabel = (isDarkMode: boolean) =>
  isDarkMode ? "Switch to light mode" : "Switch to dark mode";

export const MenuDrawer = () => {
  const { close, isOpen } = useMenuDrawerStore(state => ({
    close: state.close,
    isOpen: state.isOpen,
  }));

  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

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
            <Link as={NavLink} to={"/tools/display-calculator"}>
              Display Calculator
            </Link>
            <Link as={NavLink} to={"/tools/sort-lines"}>
              Sort Lines
            </Link>
            <Link as={NavLink} to={"/tools/date"}>
              Date Tools
            </Link>
            <Link as={NavLink} to={"/tools/circular-area"}>
              Circular Area
            </Link>
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <IconButton
            icon={getColorModeIcon(isDarkMode)}
            title={getColorModeLabel(isDarkMode)}
            aria-label={getColorModeLabel(isDarkMode)}
            onClick={() => toggleColorMode()}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
