import React from "react";
import { UIButton, UIFormGroup, UIModal } from "src/components/ui";
import { User } from "src/models/user";
import { Formik, Form } from "formik";
import { ValidationUserSchema } from "src/helper";
import styles from "./Add.module.scss";

interface Add {
  newUser: User;
  onAdd: (user: User) => void;
}
const UserAdd: React.FC<Add> = ({
  newUser: { name, photo, description },
  onAdd,
}) => {
  return (
    <UIModal title="Agregar nuevo contacto" onClose={() => console.log("")}>
      <Formik
        initialValues={{ name, photo, description }}
        validationSchema={ValidationUserSchema}
        onSubmit={({ name, description, photo }) => {
          onAdd({ name, description, photo });
        }}
        render={({ errors, status, touched }) => (
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
            />
            <UIFormGroup
              errors={errors}
              label="Description"
              name="description"
              touched={touched}
              component="textarea"
            />
            <div className={styles.buttonWrapper}>
              <UIButton text="Guardar" type="submit" />
            </div>
          </Form>
        )}
      />
    </UIModal>
  );
};

export { UserAdd };
