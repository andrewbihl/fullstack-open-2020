import React from "react";

const SuccessMessage = (props) => {
  const { show } = { ...props };
  if (!show) {
    return <></>;
  }
  return <p className="success-message">Success!</p>;
};

export default SuccessMessage;
