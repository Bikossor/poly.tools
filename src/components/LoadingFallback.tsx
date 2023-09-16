import { Flex, Spinner, Text } from "@chakra-ui/react";

export const LoadingFallback = () => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <Spinner size="xl" />
      <Text>Loading...</Text>
    </Flex>
  );
};
