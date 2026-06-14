import { CSSProperties, ElementType, ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  style?: CSSProperties;
  /**
   * Optional element type to use for the text component. Defaults to `"p"` which is the same default as `chakra-ui` v2.
   */
  as?: ElementType;
};

export const Text = ({ as: Component = "p", children, style }: TextProps) => {
  return <Component style={style}>{children}</Component>;
};
