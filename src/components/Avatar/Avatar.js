import React from "react";
import Logo from "./Logo";
// const dimentionLogo ="w-12 h-12"

export default function Avatar(props) {
  
  return (
    <div className=" flex items-center justify-center ">
      <div className=" rounded-full overflow-hidden  bg-white">
        <Logo props={props} />
      </div>
     
    </div>
  );
}
