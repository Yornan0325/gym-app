import React from "react";

const CardBody = ({ children, className }) => {
  return (
    <div className={`p-4 space-y-4 bg-white rounded-b-lg ${className}`}>
      {children}
    </div>
  );
};

export default CardBody;