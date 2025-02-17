'use client'
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
const Profile = () => {
    const { data: session } = useSession();
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Link href="/">
                <img
                    className="rounded-t-lg"
                    src="/assets/images/logo.svg"
                    // src={session?.user.image}
                    alt=""
                />
            </Link>
            <div className="p-5">
                <Link href="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Hello,
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    I'm a Fullstack Developer. <br />
                    Let's shape the digital landscape together!
                </p>
                <Link
                    href="https://kaplanh.github.io/Portfolio/english.html"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read More About Me
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};
export default Profile;
