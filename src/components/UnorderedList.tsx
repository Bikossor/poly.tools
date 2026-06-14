import { ReactNode } from "react";

type UnorderedListProps = {
  children: ReactNode;
};

export const UnorderedList = ({ children }: UnorderedListProps) => {
  return <ul>{children}</ul>;
};
