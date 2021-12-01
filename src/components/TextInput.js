import React from "react";

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
      <label htmlFor={name}>{label}</label>
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

export default TextInput.defaultProps = {
  type: "text",
  className: "",
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};
