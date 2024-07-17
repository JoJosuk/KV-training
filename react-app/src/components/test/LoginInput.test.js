import React from "react";
import { fireEvent, render } from "@testing-library/react";
import LoginInput from "../LoginInput";
describe("check if input works properly", () => {
  test("check if Input renders correctly ", () => {
    const { getByTestId } = render(<LoginInput />);
    const element = getByTestId("input-container");
    expect(element).toBeTruthy();
  });
  test("check if Placeholder works properly ", () => {
    const { getByPlaceholderText } = render(
      <LoginInput inputPlaceholder={"hello"} />
    );
    getByPlaceholderText("hello");
  });

  test("Check if label is working properly", () => {
    const { getByLabelText } = render(
      <LoginInput labelContent={"test"} id={"testid"} />
    );
    getByLabelText("test");
  });

  test("check if value is working properly", () => {
    const onChange = jest.fn();
    const { getByDisplayValue } = render(
      <LoginInput id={"testid"} value="hello" />
    );
    const element = getByDisplayValue("hello");
    expect(element).toBeTruthy();
  });
  test("check if value is changing properly", () => {
    let letval = "";
    const onChange = jest.fn((e) => {
      letval = e.target.value;
    });
    const { getByTestId } = render(
      <LoginInput id={"testid"} value={letval} onValueChange={onChange} />
    );
    const element = getByTestId("input-container");
    fireEvent.change(element, { target: { value: "new value" } });

    expect(letval).toBe("new value");
  });
  test("check snapshot is matched properly", () => {
    const onValueChange = jest.fn();
    const { asFragment } = render(
      <LoginInput
        id={"testid"}
        inputPlaceholder={"placeholder"}
        labelContent={"label"}
        name={"name"}
        type={"text"}
        value={"value"}
        onValueChange={onValueChange}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });
});
