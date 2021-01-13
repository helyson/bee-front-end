import React from "react";
import { UIButton, UIFormGroup, UIModal } from "src/components/ui";
import { User } from "src/models/user";
import { Formik, Form } from "formik";
import { ValidationUserSchema } from "src/helper";
import styles from "./Add.module.scss";

interface Add {
  isStory?: boolean;
  user?: User;
  title?: string;
  onAdd: (user: User) => void;
  onClose: () => void;
}
const UserAdd: React.FC<Add> = ({
  isStory = false,
  title = "Agregar nuevo contacto",
  user: { name, photo, description } = {
    name: "",
    description: "",
    photo: "",
  },
  onAdd,
  onClose
}) => {
  return (
    <UIModal
      title={title}
      onClose={onClose}
      isStory={isStory}
      hasClose
    >
      <Formik
        initialValues={{ name, photo, description }}
        validationSchema={ValidationUserSchema}
        onSubmit={({ name, description, photo }) => {
          onAdd({ name, description, photo });
        }}
      >
        {({ errors, status, touched }) => (
          <Form>
            <UIFormGroup
              errors={errors}
              label="URL Imagen de perfil"
              name="photo"
              touched={touched}
              isRequired
            />
            <UIFormGroup
              errors={errors}
              label="Nombre"
              name="name"
              touched={touched}
              isRequired
            />
            <UIFormGroup
              errors={errors}
              label="Description"
              name="description"
              touched={touched}
              component="textarea"
              isRequired
            />
            <div className={styles.buttonWrapper}>
              <UIButton
                text="Guardar"
                type="submit"
                testId="submit-btn-element"
              />
            </div>
          </Form>
        )}
      </Formik>
    </UIModal>
  );
};

export { UserAdd };
