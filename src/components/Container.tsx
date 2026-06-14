import { CSSProperties, ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
};

export const Container = ({ children, className, style }: ContainerProps) => {
  return (
    <div
      style={{
        width: "100%",
        marginInlineStart: "auto",
        marginInlineEnd: "auto",
        maxWidth: "60ch",
        paddingInlineStart: "1rem",
        paddingInlineEnd: "1rem",
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
