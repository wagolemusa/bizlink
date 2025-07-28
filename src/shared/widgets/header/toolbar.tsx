'use client'

import { Button } from "@nextui-org/react";
import Link from "next/link";

const Toolbar = () => {
    return(
        <div>
            <Button color="primary" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Start Trial
            </Button>
            <Link href={"/sign-up"}>Login</Link>

        </div>
    )
}

export default Toolbar;
