import { ReactNode } from "react";

type CodeProps = {
  children: ReactNode;
  colorScheme?: "green" | "gray" | "blackAlpha" | "red" | "teal";
};

export const Code = ({ children }: CodeProps) => {
  return <code>{children}</code>;
};
