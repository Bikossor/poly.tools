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
          About
        </Heading>
        <Text>
          <Code colorScheme={"teal"}>poly.tools</Code> is a webapp made by{" "}
          <Link href="https://alichtenthaeler.de/" target={"_blank"}>
            André Lichtenthäler (@Bikossor)
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
          <Link href="https://chakra-ui.com/" target={"_blank"}>
            Chakra UI
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://reactjs.org/" target={"_blank"}>
            React
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://reactrouter.com/" target={"_blank"}>
            React Router
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.typescriptlang.org/" target={"_blank"}>
            TypeScript
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://vitejs.dev/" target={"_blank"}>
            Vite
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://zustand-demo.pmnd.rs/" target={"_blank"}>
            Zustand
          </Link>
        </ListItem>
      </UnorderedList>
    </>
  );
};
