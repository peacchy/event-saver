import { render, screen } from "@testing-library/react";

import { FormButton } from "../FormButton";

test("the button is active on render", () => {
  render(<FormButton label="Submit" />);

  expect(screen.getByRole("button", { name: /submit/i })).toBeEnabled();
});
