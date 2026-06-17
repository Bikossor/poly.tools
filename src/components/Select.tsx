import { ChangeEventHandler, ReactNode, SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  children: ReactNode;
  value?: string | readonly string[] | number | undefined;
};

export function Select({ onChange, children, value, ...props }: SelectProps) {
  return (
    <select onChange={onChange} value={value} {...props}>
      {children}
    </select>
  );
}
