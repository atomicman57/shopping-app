import { render, screen } from "@testing-library/react";
import Empty from "../../components/Empty";

describe("Empty Component", () => {
  test("renders the message prop", () => {
    const message = "No data available";
    render(<Empty message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test("renders with the correct styles", () => {
    const message = "No data available";
    render(<Empty message={message} />);

    const messageElement = screen.getByText(message);

    expect(messageElement).toHaveStyle({
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "xl",
    });
  });
});
