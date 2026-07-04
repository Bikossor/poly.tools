import { ReactNode } from "react";

type InputGroupProps = {
  children: ReactNode;
};

export function InputGroup({ children }: InputGroupProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {children}
    </div>
  );
}
