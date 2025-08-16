import Link from "next/link";
import React from "react";
import FooterLogo from "./footer.logo";


const Footer = () => {
    return (
        <footer className="w-full bg-black text-white pt-10">
            <div className="w-[95%] md:flex m-auto py-5">
                <div className="w-full md:w-[40%]">
                    <Link href={"/"}>
                        <FooterLogo />
                    </Link>
                    <br />
                    <p className="text-1xl py-2">
                        Get linkedup with your customers directly to there inbox.
                    </p>
                    <br />
                    <div className="flex items-center w-full pt-1">
                        <input type="email" name="" id="" placeholder="Enter your email" className="bg-transparent w-full md:w-[50%] border h-[42px] px-2 rounded-r-[0] outline-none" />
                        <button className="w-[90px] cursor-pointer rounded-r h-[43px] bg-blue-500 text-xl outline-none">
                            submit
                        </button>
                    </div>
                    <br />
                    <p className="text-xs">
                        By subscribing you agree to with our Policy and provide consent to receive updates
                        from our company
                    </p>
                </div>
                <div className="w-full md:w-[60%] flex md:justify-end justify-center py-5 ">
                    <div className="md:w-[50%] flex justify-around">
                        <div>
                            <ul>
                                <li className="text-xl pb-4 cursor-pointer">Create</li>
                                <li className="text-xl pb-4 cursor-pointer">Promote</li>
                                <li className="text-xl pb-4 cursor-pointer">Grow</li>
                                <li className="text-xl pb-4 cursor-pointer">Monitize</li>
                                <li className="text-xl pb-4 cursor-pointer">Analayze</li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li className="text-xl pb-4 cursor-pointer">Carrers</li>
                                <li className="text-xl pb-4 cursor-pointer">Pricing</li>
                                <li className="text-xl pb-4 cursor-pointer">Shop</li>
                                <li className="text-xl pb-4 cursor-pointer">Compare</li>
                                <li className="text-xl pb-4 cursor-pointer">Love</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-lg text-center py-10">
                2025 Bizlink, Inc, All rights reserved.

            </p>
        </footer>
    )
}

export default Footer;
