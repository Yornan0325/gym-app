/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Avatar from "./Avatar"
 


export default function NavBar(props) {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Avatar props={props} />
                        <div class="flex w-auto items-start ">
                            {/* <!-- Right elements --> */}
                            <div class=" hidden md:block  relative flex items-center">
                               
                                {/* <!-- Container with two dropdown menus --> */}
                                <div class="relative"
                                    data-te-dropdown-ref
                                    data-te-dropdown-alignment="end">
                                    {/* <!-- First dropdown trigger --> */}
                                    <a
                                        class="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                        href={() => false}
                                        id="dropdownMenuButton1"
                                        role="button"
                                        data-te-dropdown-toggle-ref
                                        aria-expanded="false">
                                        {/* <!-- Dropdown trigger icon --> */}
                                        <span class="[&>svg]:w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                class="h-5 w-5">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        {/* <!-- Notification counter --> */}
                                        <span
                                            class="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                                            1
                                        </span>
                                    </a>
                              
                                    {/* <!-- First dropdown menu --> */}
                                    <ul
                                        class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                        aria-labelledby="dropdownMenuButton1"
                                        data-te-dropdown-menu-ref>
                                        {/* <!-- First dropdown menu items --> */}
                                        <li>
                                            <a
                                                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                                href={() => false}
                                                data-te-dropdown-item-ref
                                            >Action</a>
                                        </li>
                                        <li>
                                            <a
                                                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                                href={() => false}
                                                data-te-dropdown-item-ref
                                            >Another action</a>
                                        </li>
                                        <li>
                                            <a
                                                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                                href={() => false}
                                                data-te-dropdown-item-ref
                                            >Something else here</a >
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>


                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <div dir="ltr">
                                    <div class="sm-8">
                                        <a
                                            href={() => false}
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            Reports
                                        </a>
                                    </div>
                                </div>




                                {/* <!-- Container with two dropdown menus --> */}
                                <div dir=" -mr-2 ml-8"
                                    data-te-dropdown-ref
                                    data-te-dropdown-alignment="end">

                                    {/* <!-- First dropdown trigger --> */}

                                    <a
                                        class="hidden-arrow  flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                        href={() => false}
                                        id="dropdownMenuButton1"
                                        role="button"
                                        data-te-dropdown-toggle-ref
                                        aria-expanded="false">
                                        {/* <!-- Dropdown trigger icon --> */}

                                        <span class="[&>svg]:w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                class="h-5 w-5">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>

                                        {/* <!-- Notification counter --> */}
                                        <span
                                            class="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                                            1
                                        </span>
                                    </a>

                                    {/* <!-- First dropdown menu --> */}
                                    <ul
                                        class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                        aria-labelledby="dropdownMenuButton1"
                                        data-te-dropdown-menu-ref>
                                        {/* <!-- First dropdown menu items --> */}
                                        <li>
                                            <a
                                                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                                href={() => false}
                                                data-te-dropdown-item-ref
                                            >Action</a>
                                        </li>
                                        <li>
                                            <a
                                                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                                href={() => false}
                                                data-te-dropdown-item-ref
                                            >Another action</a>
                                        </li>
                                        <li>
                                            <a
                                                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                                href={() => false}
                                                data-te-dropdown-item-ref
                                            >Something else here</a >
                                        </li>
                                    </ul>

                                </div>


                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
            {/* <main> */}
            {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> */}
            {/* <!-- Replace with your content --> */}
            {/* <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div> */}
            {/* <!-- /End replace --> */}
            {/* </div> */}
            {/* // </main> */}
        </div>
    );
}