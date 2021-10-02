import React from "react";
import { render, screen } from "@testing-library/react";
import HttpStatus404 from "./HttpStatus404";

test("renders HttpStatus404", () => {
  render(<HttpStatus404 />);
  const linkElement = screen.getByText(/404/i);
  expect(linkElement).toBeInTheDocument();
});
