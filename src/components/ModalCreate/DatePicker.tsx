import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, useFormikContext, useField } from "formik";
import styles from "./ModalCreate.module.css";
interface IProps {
  label: string,
  name: string,
  maxDate?: Date
}
const DatePickerField = (props: IProps) => {
  const { label, name, maxDate } = props;
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <>
      <label className="font-weight-normal">{label}</label>
      <div className={styles["input-date-picker"]}>
        <DatePicker
          wrapperClassName={styles.styleDatePicker}
          {...field}
          {...props}
          dateFormat="dd/MM/yyyy"
          maxDate={maxDate}
          selected={field.value}
          onChange={(date) => {
            setFieldValue(field.name, date);
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

export default DatePickerField;
