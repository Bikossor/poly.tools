import { CSSProperties, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  variant?: "outline";
  colorScheme?: "green" | "gray" | "blackAlpha" | "red";
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export const Button = ({
  // TODO
  variant,
  // TODO
  colorScheme,
  style,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};
