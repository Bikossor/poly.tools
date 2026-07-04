import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useColorMode,
} from "@chakra-ui/react";
import { useMenuDrawerStore } from "../Stores";
import { NavLink, Link } from "react-router-dom";
import { SunIcon, MoonIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { version } from "../../package.json";
import { useShallow } from "zustand/shallow";
import { Text, Code, Button } from "@components";

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
          <div
            style={{
              display: "flex",
              borderBottomWidth: "1px",
              flexDirection: "column",
            }}
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/tools/display-calculator"}>
              Display Calculator
            </NavLink>
            <NavLink to={"/tools/sort-lines"}>Sort Lines</NavLink>
            <NavLink to={"/tools/date"}>Date Tools</NavLink>
            <NavLink to={"/tools/circular-area"}>Circular Area</NavLink>
            <NavLink to={"/tools/raid-calculator"}>RAID Calculator</NavLink>
            <NavLink to={"/tools/optical-media-speed-calculator"}>
              Optical Media Speed Calculator
            </NavLink>
            <NavLink to={"/tools/ram-bandwidth"}>RAM Bandwidth</NavLink>
          </div>
          <div style={{ flexDirection: "column" }}>
            <Link to={"https://github.com/Bikossor/poly.tools"} target="_blank">
              GitHub Repo <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
              to={
                "https://github.com/Bikossor/poly.tools/blob/main/CHANGELOG.md"
              }
              target="_blank"
            >
              Changelog <ExternalLinkIcon mx="2px" />
            </Link>
          </div>
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
