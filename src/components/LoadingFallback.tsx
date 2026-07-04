import { Spinner } from "@components";
import { Text } from "./Text";

export const LoadingFallback = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Spinner size="xl" />
      <Text>Loading...</Text>
    </div>
  );
};
