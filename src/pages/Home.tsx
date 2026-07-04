import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Code, Heading, ListItem, Text, UnorderedList } from "@components";

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
          <Link to="https://alichtenthaeler.de/" target="_blank">
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
          <Link to="https://chakra-ui.com/" target="_blank">
            Chakra UI <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="https://fontsource.org/" target="_blank">
            Fontsource <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="https://reactjs.org/" target="_blank">
            React <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="https://reactrouter.com/" target="_blank">
            React Router <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="https://www.typescriptlang.org/" target="_blank">
            TypeScript <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="https://vitejs.dev/" target="_blank">
            Vite <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="https://zustand-demo.pmnd.rs/" target="_blank">
            Zustand <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
    </>
  );
};
