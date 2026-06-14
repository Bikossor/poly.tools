import { ReactNode } from "react";

type ListItemProps = {
  children: ReactNode;
};

export const ListItem = ({ children }: ListItemProps) => {
  return <li>{children}</li>;
};
