import { useField } from "formik";
import React from "react";

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="login__label" htmlFor={props.id || props.name}>
        {label}
      </label>

      <input className="login__input" {...field} {...props} />
      {meta.touched && meta.error && (
        <span className="login__error">{meta.error}</span>
      )}
    </>
  );
};
