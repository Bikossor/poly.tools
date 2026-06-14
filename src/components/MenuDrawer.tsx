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
  Code,
} from "@chakra-ui/react";
import { useMenuDrawerStore } from "../Stores";
import { NavLink } from "react-router-dom";
import { SunIcon, MoonIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { version } from "../../package.json";
import { useShallow } from "zustand/shallow";
import { Text } from "./Text";
import { Button } from "./Button";

const getColorModeIcon = (isDarkMode: boolean) =>
  isDarkMode ? <SunIcon /> : <MoonIcon />;

const getColorModeLabel = (isDarkMode: boolean) =>
  isDarkMode ? "Switch to light mode" : "Switch to dark mode";

export const MenuDrawer = () => {
  const { close, isOpen } = useMenuDrawerStore(
    useShallow(state => ({
      close: state.close,
      isOpen: state.isOpen,
    })),
  );

  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <Drawer placement={"left"} onClose={close} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          display="flex"
          alignItems="center"
          borderBottomWidth="1px"
        >
          <Text style={{ flex: 1 }}>{"poly.tools"}</Text>
          <Code colorScheme="teal">{`v${version}`}</Code>
        </DrawerHeader>
        <DrawerBody>
          <Flex borderBottomWidth="1px" direction={"column"}>
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
            <Link as={NavLink} to={"/tools/raid-calculator"}>
              RAID Calculator
            </Link>
            <Link as={NavLink} to={"/tools/optical-media-speed-calculator"}>
              Optical Media Speed Calculator
            </Link>
            <Link as={NavLink} to={"/tools/ram-bandwidth"}>
              RAM Bandwidth
            </Link>
          </Flex>
          <Flex direction={"column"}>
            <Link href={"https://github.com/Bikossor/poly.tools"} isExternal>
              GitHub Repo <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
              href={
                "https://github.com/Bikossor/poly.tools/blob/main/CHANGELOG.md"
              }
              isExternal
            >
              Changelog <ExternalLinkIcon mx="2px" />
            </Link>
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Button
            title={getColorModeLabel(isDarkMode)}
            aria-label={getColorModeLabel(isDarkMode)}
            onClick={() => toggleColorMode()}
          >
            {getColorModeIcon(isDarkMode)}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
