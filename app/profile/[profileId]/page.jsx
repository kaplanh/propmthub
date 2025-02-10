"use client";
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
                    // src="/assets/images/logo.svg"
                    src={session?.user.image}
                    alt=""
                />
            </Link>
            <div className="p-5">
                <Link href="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Hello {session?.user.name}
                    </h5>
                </Link>
                <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Congratulations, a prompt has been successfully created.
                    <br />
                    Would you like to create another prompt?
                </h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {session?.user.email}
                </p>
            </div>
        </div>
    );
};
export default Profile;
