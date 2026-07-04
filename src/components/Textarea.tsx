import { ChangeEvent, TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = ({ value, ...rest }: TextareaProps) => {
  return <textarea value={value} {...rest} />;
};
