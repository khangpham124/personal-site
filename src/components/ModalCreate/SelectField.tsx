import React from "react";
import { ErrorMessage, useField } from "formik";
import { useTranslation } from "react-i18next";
import styles from "./ModalCreate.module.css";
import Select from "react-select";

const SelectField = ({
  label,
  name,
  options,
  isSearchable,
  placeholder,
  setValueProp,
  value,
  disabled,
}: {
  [x: string]: any;
  name: string;
}) => {
  const [field, meta, helpers] = useField(name);
  const { t: translator } = useTranslation();

  return (
    <>
      <label className="font-weight-normal">{label}</label>
      <Select
        placeholder={
          placeholder
            ? placeholder
            : `${translator("product_page.text_select")}`
        }
        name={name}
        isDisabled={disabled}
        value={value ? value : field.value}
        onChange={(value: any) => {
          helpers.setValue(value);
          if (setValueProp) {
            setValueProp(value);
          }
        }}
        options={options}
        onBlur={() => helpers.setTouched(true)}
        styles={{
          control: (base: any) => ({
            ...base,
            border: `1px solid ${
              meta.touched && meta.error ? "red" : "#e9ecef"
            }`,
            marginTop: "0.5rem",
          }),
        }}
        isSearchable={isSearchable}
      />
      <ErrorMessage
        component="div"
        name={name}
        className={`error ${
          meta.touched && meta.error && "invalid-feedback"
        } text-right`}
      />
    </>
  );
};
export default SelectField;
