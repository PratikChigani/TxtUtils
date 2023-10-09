import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show mx-3`}
        role="alert"
        style={{ borderRadius: 40, height: 55, padding: 16 }}
      >
        <strong>{`${capitalize(props.alert.type)}: ${
          props.alert.message
        }`}</strong>
      </div>
    )
  );
}

export default Alert;
