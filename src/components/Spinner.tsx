import "./Spinner.css";

type SpinnerProps = {
  size?: "sm" | "md" | "lg" | "xl";
};

export const Spinner = ({ size = "md" }: SpinnerProps) => {
  return (
    <div className={`spinner spinner-${size}`}>
      <div className="sr-only">Loading...</div>
    </div>
  );
};
