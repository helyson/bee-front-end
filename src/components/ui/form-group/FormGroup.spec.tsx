import { act, cleanup, fireEvent, render } from "@testing-library/react";
import { Formik, Form } from "formik";
import React from "react";
import { ValidationUserSchema } from "src/helper";
import { UIFormGroup } from "..";

describe(" <UIFormGroup />", () => {
  let input: HTMLInputElement;
  let dangerText: HTMLSpanElement;
  let containerCopy: HTMLElement
  afterEach(cleanup);
  beforeEach(() => {
    const { queryByTestId, container } = render(
      <Formik
        initialValues={{ name }}
        validationSchema={ValidationUserSchema}
        onSubmit={() => {}}
      >
        {({ errors, status, touched }) => (
          <Form>
            <UIFormGroup
              errors={errors}
              label="Description"
              name="description"
              touched={touched}
              component="textarea"
              isRequired
            />
          </Form>
        )}
      </Formik>
    );
    containerCopy= container;
    dangerText = queryByTestId("danger-text-element") as HTMLSpanElement;
    input = queryByTestId("field-element") as HTMLInputElement;
  });
  test("should be render only input ", () => {
    expect(input).toBeInTheDocument();
    expect(dangerText).toBeInTheDocument();
  });
  test("should be render errors", () => {
    const onChange = { target: { value: "new value" } };
    expect(input.value).toBe("");
    fireEvent.focus(input);
    fireEvent.change(input, onChange);
    expect(containerCopy.firstChild).not.toHaveClass('beetrack-text-danger')
  });
  test("should be render FormGroup basic", () => {
    const { getByText } = render(
      <Formik
        initialValues={{ name }}
        validationSchema={ValidationUserSchema}
        onSubmit={() => {}}
      >
        {({ errors, status, touched }) => (
          <Form>
            <UIFormGroup
              errors={errors}
              label="Nombre"
              name="name"
              touched={touched}
            />
          </Form>
        )}
      </Formik>
    );
    expect(getByText("Nombre")).toBeInTheDocument;
  });
});
