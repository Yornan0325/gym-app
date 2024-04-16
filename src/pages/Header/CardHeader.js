import React from "react";

const CardHeader = ({title}) => {
  return (

    <header className="">
      <div className="py-2 mx-4 mb-4 sm:px-6 lg:px-2">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      </div>
    </header>

  );
};

export default CardHeader;