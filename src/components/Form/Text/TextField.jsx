import React from "react";
const FormObject = ({
  name,
  pass,
  placeholder,
  value,
  onChange,
}) => {
  return (
        <input
            type={pass?"password":"text"}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
        />
);
};

export default FormObject;
