import { fireEvent, render, screen, within } from "@testing-library/react";
import { allProjects } from "./data/projects";
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
  expect(screen.getByRole("heading", { name: "GMU" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("heading", { name: "NASA" }));
  expect(screen.getByText(/YData Profiling to clean/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Source code/ })).toHaveAttribute(
    "href",
    "https://github.com/duckish-ui/SEES-Dimensionality-Reduction-for-GLOBE-Dataset",
  );
});
test("beyond the code includes four activities without FBLA or teaching assistant", () => {
  open("/projects");
  fireEvent.click(screen.getByRole("button", { name: "Beyond the code" }));
  expect(screen.getAllByRole("article")).toHaveLength(4);
  expect(screen.queryByText(/FBLA|Teaching Assistant/)).not.toBeInTheDocument();
});
test("GutHealth opens with its screenshot and retains technology and repository details", () => {
  open("/projects");
  fireEvent.click(screen.getByRole("heading", { name: "GutHealth" }));
  expect(screen.getByRole("heading", { name: "Why" })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Tools & technologies" }),
  ).toBeInTheDocument();
  expect(screen.getByText("FastAPI")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Source code/ })).toHaveAttribute(
    "href",
    "https://github.com/duckish-ui/GutHealth",
  );
  expect(screen.getByRole("img", { name: /GutHealth/ })).toHaveAttribute(
    "src",
    allProjects.guthealth.imgUrl,
  );
  expect(screen.queryByText(/Highlights|Timeline/)).not.toBeInTheDocument();
});
test.each(["Projects", "Experience", "Research", "Beyond the code"])(
  "%s cards show technology previews and image backgrounds",
  (category) => {
    open("/projects");
    fireEvent.click(screen.getByRole("button", { name: category }));
    for (const card of screen.getAllByRole("article")) {
      const title = within(card).getByRole("heading").textContent;
      const project = Object.values(allProjects).find(
        (item) => item.title === title,
      );
      expect(
        within(card).getByText(project.technologies.slice(0, 4).join(" / ")),
      ).toBeInTheDocument();
      expect(card.querySelector(".card-background")).toHaveAttribute(
        "src",
        project.imgUrl,
      );
    }
  },
);
test("experience links to the updated frontend internship role", () => {
  open("/projects");
  fireEvent.click(screen.getByRole("button", { name: "Experience" }));
  expect(
    screen.getByRole("heading", { name: "SMUD / SETA" }),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("heading", { name: "NoteAgent" }));
  expect(
    screen.getByText(/Software Engineer Intern \(Frontend\)/),
  ).toBeInTheDocument();
  expect(screen.queryByText(/Highlights|Timeline/)).not.toBeInTheDocument();
});
test("About introduces Berkeley without graduation dates or the old research summary", () => {
  open("/about");
  expect(
    screen.getByText(/I study Applied Mathematics at UC Berkeley/),
  ).toBeInTheDocument();
  expect(
    screen.queryByText(/NASA|Santa Cruz|graduat|2028|FBLA|Teaching Assistant/i),
  ).not.toBeInTheDocument();
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
