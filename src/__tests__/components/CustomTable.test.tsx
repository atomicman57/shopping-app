import { render, screen } from "@testing-library/react";
import CustomTable from "../../components/CustomTable";

describe("CustomTable Component", () => {
  test("renders the table with headers and rows", () => {
    const headers = ["Header 1", "Header 2"];
    const rows = [
      {
        key: "row1",
        data: ["Cell 1", "Cell 2"],
      },
      {
        key: "row2",
        data: ["Cell 3", "Cell 4"],
      },
    ];

    render(<CustomTable headers={headers} rows={rows} />);

    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });

    rows.forEach((row) => {
      row.data.forEach((cell) => {
        expect(screen.getByText(cell)).toBeInTheDocument();
      });
    });
  });
});
