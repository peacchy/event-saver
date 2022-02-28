import { render, screen } from "@testing-library/react";
import { FormTextField } from "../FormTextField";

describe("First name input", () => {
  test("should render with correct label and name", () => {
    //change it to make more sense
    const onChange = jest.fn();
    const label = "First name";
    const name = "firstName";

    render(
      <FormTextField
        id="name"
        label={label}
        name={name}
        value="value"
        onChange={onChange}
      />
    );
    expect(
      screen.getByRole("textbox", {
        name: /first name/i,
      })
    ).toBeInTheDocument();
  });

  test("should accept only limited number of characters", () => {});
});
