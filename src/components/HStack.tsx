import { CSSProperties, ReactNode } from "react";

type HStackProps = {
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  children: ReactNode;
  style?: CSSProperties;
};

export const HStack = ({ align = "start", children, style }: HStackProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: align,
        gap: "0.5rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
