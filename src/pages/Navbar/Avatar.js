import React from "react";

export default function Avatar({props}) {
    const {avatarUrl, name} = props
    return (
        <div className="flex items-center">
        <div className="flex-shrink-0">
            <img
                className="h-8 w-8"
                src={avatarUrl}
                alt="hola"
            />
        </div>
        <div className="hidden md:block">
            <div class="mx-2">
                <h2 class="text-xl text-neutral-100">{name}</h2>
            </div>
            {/* <div className="ml-10 flex items-baseline space-x-4">

                <a
                    href={()=>false}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Calendar
                </a>
            </div> */}
        </div>
    </div>
    );
  }