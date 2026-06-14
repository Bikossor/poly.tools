import { CSSProperties, ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  style?: CSSProperties;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({
  children,
  style,
  as: Component = "h1",
}: HeadingProps) => {
  return <Component style={style}>{children}</Component>;
};
