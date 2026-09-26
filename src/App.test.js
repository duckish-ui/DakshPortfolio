import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
jest.mock("./components/Sculpture", () => () => null);
beforeEach(() => {
  window.scrollTo = jest.fn();
  window.matchMedia = jest.fn(() => ({ matches: true }));
});
function open(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}
test("home exposes identity and navigates to projects", () => {
  open("/");
  expect(
    screen.getByRole("heading", { name: /Daksh Mamnani/ }),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("link", { name: /Explore my work/ }));
  expect(screen.getByRole("heading", { name: "My work" })).toBeInTheDocument();
});
test("research filtering links to preserved details and source", () => {
  open("/projects");
  fireEvent.click(screen.getByRole("button", { name: "Research" }));
  fireEvent.click(screen.getByRole("heading", { name: /NASA SEES/ }));
  expect(screen.getByText(/Selected for NASA/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Source code/ })).toHaveAttribute(
    "href",
    "https://github.com/duckish-ui/SEES-Dimensionality-Reduction-for-GLOBE-Dataset",
  );
});
test("all six activities remain discoverable", () => {
  open("/projects");
  fireEvent.click(screen.getByRole("button", { name: "Beyond the code" }));
  expect(screen.getAllByRole("article")).toHaveLength(6);
});
test("unknown projects offer a recovery link", () => {
  open("/project/missing");
  expect(
    screen.getByRole("heading", { name: "Page not found." }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Back home/ })).toHaveAttribute(
    "href",
    "/",
  );
});
