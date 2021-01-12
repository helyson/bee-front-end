import React from "react";
import { Formik, Form } from "formik";
import { StoryBookWrapper, ValidationUserSchema } from "src/helper";
import { UIFormGroup } from "./FormGroup";

export default {
  title: "UI Form Group",
  component: UIFormGroup,
};

export const Basic: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <Formik
      initialValues={{ name }}
      validationSchema={ValidationUserSchema}
      onSubmit={() => {}}
      render={({ errors, status, touched }) => (
        <Form>
          <UIFormGroup
            errors={errors}
            label="Nombre"
            name="name"
            touched={touched}
          />
        </Form>
      )}
    />
  </StoryBookWrapper>
);

export const FormRequireTextArea: React.VFC<{}> = () => (
  <StoryBookWrapper>
    <Formik
      initialValues={{ name }}
      validationSchema={ValidationUserSchema}
      onSubmit={() => {}}
      render={({ errors, status, touched }) => (
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
    />
  </StoryBookWrapper>
);
