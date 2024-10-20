import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom';


describe("App", () => {
  test("タイトルがあること", async () => {
    render(<App />);
    await waitFor(() => {
      const title = screen.getByTestId("title");
      expect(title).toBeInTheDocument();
    })
  });
});
