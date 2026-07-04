import { ReactNode } from "react";

type InputRightAddonProps = {
  children: ReactNode;
};

export function InputRightAddon({ children }: InputRightAddonProps) {
  return <div>{children}</div>;
}
