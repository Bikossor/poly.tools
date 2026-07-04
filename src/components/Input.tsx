import { ChangeEvent, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  variant?: "filled";
};

export const Input = ({
  value,
  defaultValue,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      {...rest}
    />
  );
};
