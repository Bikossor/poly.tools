type FormLabelProps = {
  children: React.ReactNode;
};

export function FormLabel({ children }: FormLabelProps) {
  return <label>{children}</label>;
}
