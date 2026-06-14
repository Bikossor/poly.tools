import {
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEventHandler,
  ReactNode,
} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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
  ...rest
}: ButtonProps) => {
  return (
    <button onClick={onClick} style={style} {...rest}>
      {children}
    </button>
  );
};
