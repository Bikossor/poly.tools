import { Flex, Spinner } from "@chakra-ui/react";
import { Text } from "./Text";

export const LoadingFallback = () => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <Spinner size="xl" />
      <Text>Loading...</Text>
    </Flex>
  );
};
