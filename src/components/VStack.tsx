import { CSSProperties, ReactNode } from "react";

type VStackProps = {
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  children: ReactNode;
  style?: CSSProperties;
};

export const VStack = ({ align = "start", children, style }: VStackProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
