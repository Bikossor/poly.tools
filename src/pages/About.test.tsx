import React from "react";
import { render, screen } from "@testing-library/react";
import About from "pages/About";

test("renders About", () => {
  render(<About />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
