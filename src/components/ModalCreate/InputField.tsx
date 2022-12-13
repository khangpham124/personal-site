import React from "react";
import { ErrorMessage, useField } from "formik";

const InputField = ({
  label,
  handleBlur,
  onFocus,
  prefix,
  placeholder,
  required,
  ...props
}: {
  [x: string]: any;
  name: string;
}) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      {label ? (
        <label className="font-weight-normal" htmlFor={field.name}>
          {label}
          {required ? <span className={`text-err`}>*</span> : null}
        </label>
      ) : (
        ""
      )}

      <div className="d-flex align-items-center mt-2">
        {
          !prefix ? null : <div className="mr-2">{prefix}</div>
        }
        <input
          placeholder={placeholder}
          className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"
            }`}
          {...field}
          {...props}
          autoComplete="off"
          // onBlur={handleBlur}
          onFocus={onFocus}

        />
      </div>
      <ErrorMessage
        component="div"
        name={field.name}
        className={`error ${meta.touched && meta.error && "invalid-feedback"} text-right`}
      />
    </div>
  );
};

export default InputField;
