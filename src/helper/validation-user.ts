import * as Yup from "yup";

const ValidationUserSchema = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("description is required"),
    photo: Yup.string().required("Url de imagen is required"),
  });
  return schema;
};

export { ValidationUserSchema };
