import { ReactNode } from "react";

type InputLeftAddonProps = {
  children: ReactNode;
};

export function InputLeftAddon({ children }: InputLeftAddonProps) {
  return <div>{children}</div>;
}
