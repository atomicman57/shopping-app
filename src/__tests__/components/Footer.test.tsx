import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer Component", () => {
  test("renders the footer with the copyright text", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyrightText = `© ${currentYear} Prismic Supermarket. All rights reserved.`;

    expect(screen.getByText(copyrightText)).toBeInTheDocument();
  });
});
