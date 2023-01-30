import { render, screen, toBeInTheDocument } from "@testing-library/react";
import { App } from "./App";

test("Home render the right text", () => {
  render(<App />);
  const linkElement = screen.getByText("Watowatch");
  expect(linkElement).toBeInTheDocument();
});
