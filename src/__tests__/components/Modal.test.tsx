import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ModalComponent from "../../components/Modal";

describe("ModalComponent", () => {
  const onCloseMock = jest.fn();

  const renderModal = (isOpen: boolean) => {
    render(
      <ModalComponent
        isOpen={isOpen}
        onClose={onCloseMock}
        title="Test Modal"
        footer={<button>Footer Button</button>}
      >
        <div>Modal content</div>
      </ModalComponent>
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the modal when isOpen is true", () => {
    renderModal(true);
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
    expect(screen.getByText("Footer Button")).toBeInTheDocument();
  });

  it("does not render the modal when isOpen is false", () => {
    renderModal(false);
    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
    expect(screen.queryByText("Footer Button")).not.toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    renderModal(true);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
