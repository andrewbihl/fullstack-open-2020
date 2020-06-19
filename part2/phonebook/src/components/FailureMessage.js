import React from "react";

const SuccessMessage = (props) => {
  const { show } = { ...props };
  if (!show) {
    return <></>;
  }
  return <p className="failure-message">Failed.</p>;
};

export default SuccessMessage;
