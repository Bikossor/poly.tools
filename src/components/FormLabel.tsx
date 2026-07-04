type FormLabelProps = {
  children: React.ReactNode;
};

export function FormLabel({ children }: FormLabelProps) {
  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </label>
  );
}
