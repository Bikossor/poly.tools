import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Code, Link } from "@chakra-ui/react";
import { Heading, ListItem, Text, UnorderedList } from "@components";

export default () => {
  return (
    <>
      <div style={{ paddingBottom: "2rem" }}>
        <Heading as={"h1"} style={{ paddingBottom: "1rem" }}>
          poly.tools
        </Heading>
        <Heading as={"h2"} style={{ paddingBottom: "1rem" }}>
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
      </div>
      <Heading as={"h2"} style={{ paddingBottom: "1rem" }}>
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
          <Link href="https://fontsource.org/" isExternal>
            Fontsource <ExternalLinkIcon mx="2px" />
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
