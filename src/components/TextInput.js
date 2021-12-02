import React from "react";
import "./TextInput.css";
import PropTypes from "prop-types";
const TextInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  children,
  label,
  ...props
}) => {
  return (
    <>
      <label htmlFor={name} style={{ color: "black", textAlign: "left" }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
      />
    </>
  );
};

TextInput.defaultProps = {
  type: "text",
  className: "text-input",
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
