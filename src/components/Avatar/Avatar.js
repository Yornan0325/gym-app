import React from "react";
import Logo from "./Logo"
// const dimentionLogo ="w-12 h-12"

export default function Avatar(props) {
    const { name, dimention } = props
    return (
        <div className=" flex items-center justify-center ">

            <div className=" rounded-full overflow-hidden  bg-white">
                <Logo dimention={dimention}/> 
            </div>
            <div className="hidden md:block">
                <div class="mx-2">
                    <h2 class="text-xl text-neutral-100">{name}</h2>
                </div>
            </div>
        </div>
    );
}