import React from "react";
import { NumberFormatValues } from "react-number-format";
import NumberFormat from "react-number-format";
import { ErrorMessage, Field, useField } from "formik";
import styles from "./ModalCreate.module.css";

const FormikTextNumber = (props): React.ReactElement => {
  const { name, label, ...rest } = props;

  const [, { touched, value, error }, { setValue }] = useField(name);
  const isError = Boolean(error) && touched;

  const handleChange = (values: NumberFormatValues) => {
    setValue(values?.floatValue ?? "");
  };

  const MIN_LIMIT = 1;

  return (
    <>
      <label className="font-weight-normal">{label}</label>
      <div className={`${styles["input-currrency"]} mt-2`}>
        <NumberFormat
          {...rest}
          thousandSeparator={true}
          suffix=" VND"
          name={name}
          value={value}
          error={isError}
          helperText={isError ? error : undefined}
          onValueChange={handleChange}
          isAllowed={(values) => {
            const { value } = values;
            return Number(value) > Number(MIN_LIMIT);
          }}
        />
      </div>
      <ErrorMessage
        component="div"
        name={name}
        className={styles["text--error"]}
      />
    </>
  );
};

export default FormikTextNumber;
