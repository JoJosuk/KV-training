import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "../Button";
describe("check if button works properly", () => {
  test("Check if Button rendered correctly ", () => {
    const { getByTestId } = render(<Button />);
    const element = getByTestId("button-component");

    expect(element).toBeTruthy();
  });

  test("check if text displayed properly", () => {
    const text = "Click";
    const { getByText } = render(<Button buttonContent={text} />);
    getByText(text);
  });

  test("check if onClick is triggered", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button loggedin={onClick} />);
    const element = getByTestId("button-component");

    fireEvent.click(element);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("check if the snapshot is matched properly", () => {
    const onClick = jest.fn();
    const text = "Click";

    const { asFragment } = render(
      <Button buttonContent={text} loggedin={onClick} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
