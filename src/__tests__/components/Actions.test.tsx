import { render, screen, fireEvent } from "@testing-library/react";
import Actions from "../../components/Actions";

describe("Actions Component", () => {
  test("renders Edit button when onEdit is provided", () => {
    render(<Actions onEdit={() => {}} onDelete={() => {}} />);
    expect(screen.getByLabelText("Edit")).toBeInTheDocument();
  });

  test("does not render Edit button when onEdit is not provided", () => {
    render(<Actions onDelete={() => {}} />);
    expect(screen.queryByLabelText("Edit")).not.toBeInTheDocument();
  });

  test("renders Delete button", () => {
    render(<Actions onDelete={() => {}} />);
    expect(screen.getByLabelText("Delete")).toBeInTheDocument();
  });

  test("triggers onEdit when Edit button is clicked", () => {
    const onEdit = jest.fn();
    render(<Actions onEdit={onEdit} onDelete={() => {}} />);

    fireEvent.click(screen.getByLabelText("Edit"));
    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  test("triggers onDelete when Delete button is clicked", () => {
    const onDelete = jest.fn();
    render(<Actions onDelete={onDelete} />);

    fireEvent.click(screen.getByLabelText("Delete"));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
