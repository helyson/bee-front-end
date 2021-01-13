import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./FormGroup.module.scss";

interface FormGroup {
  errors: any;
  isRequired?: boolean;
  label: string;
  name: string;
  touched: any;
  type?: string;
  component?: string;
  rows?: number;
}
const UIFormGroup: React.FC<FormGroup> = ({
  component,
  errors,
  isRequired = false,
  label,
  name,
  touched,
  type = "text",
  rows = 3,
}) => {
  return (
    <div
      className={`beetrack-input-container beetrack-text-graydark ${styles.container}`}
    >
      <label htmlFor={name} className={styles.label}>
        <span className={styles.labelText}>{label}</span>
        {isRequired && (
          <span
            data-testid="danger-text-element"
            className="beetrack-text-danger"
          >
            *
          </span>
        )}
      </label>
      <Field
        component={component}
        name={name}
        type={type}
        className={errors[name] && touched[name] ? `${styles.errorInput}` : ""}
        rows={rows}
        data-testid="field-element"
      />
      <ErrorMessage
        name={name}
        component="div"
        className={`${styles.errorText} beetrack-text-danger`}
        data-testid="error-message-element"
      />
    </div>
  );
};

export { UIFormGroup };
