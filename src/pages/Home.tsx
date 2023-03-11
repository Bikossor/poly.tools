import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Code,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Box pb={8}>
        <Heading as={"h1"} pb={4}>
          poly.tools
        </Heading>
        <Heading as={"h2"} pb={4}>
          About
        </Heading>
        <Text>
          <Code colorScheme={"teal"}>poly.tools</Code> is a webapp made by{" "}
          <Link href="https://alichtenthaeler.de/" isExternal>
            André Lichtenthäler (@Bikossor) <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          for all the small tools you could need. It's modern, free of charge
          and free of advertising.
        </Text>
      </Box>
      <Heading as={"h2"} pb={4}>
        Tech Stack
      </Heading>
      <Text>
        <Code colorScheme={"teal"}>poly.tools</Code> is build with the following
        technologies:
      </Text>
      <UnorderedList>
        <ListItem>
          <Link href="https://chakra-ui.com/" isExternal>
            Chakra UI <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://reactjs.org/" isExternal>
            React <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://reactrouter.com/" isExternal>
            React Router <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.typescriptlang.org/" isExternal>
            TypeScript <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://vitejs.dev/" isExternal>
            Vite <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://zustand-demo.pmnd.rs/" isExternal>
            Zustand <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
    </>
  );
};
