import { ChangeEvent, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, onChange, ...rest }: InputProps) => {
  return <input type="text" value={value} onChange={onChange} {...rest} />;
};
