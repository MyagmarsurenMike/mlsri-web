import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function FooterComp() {
    return (
        <footer className="bg-blue-950 text-white pt-8">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center">
                            <Image
                                src="/logo.png"
                                className="mr-3"
                                alt="Logo"
                                width={100}
                                height={100}
                            />
                            <div>
                                <span className="text-3xl font-bold">ХНХИС</span>
                                <p className="text-sm mt-2">Улаанбаатар хот, Чингэлтэй дүүрэг, 5-р хороо, 9/1 </p>
                                <p className="text-sm">(Тэнгис кино театрын баруун хойно)</p>
                                <p className="text-sm mt-2">#000000</p>
                                <p className="text-sm">#000000</p>
                                <p className="text-sm">#000000</p>
                                <p className="text-sm">#000000</p>
                                <p className="text-sm">info@u</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-lg font-semibold uppercase">Сошиал холбоос</h2>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <a href="#" className="flex items-center justify-start gap-2 text-a hover:underline text-white">
                                        <FaInstagram /> 
                                        <p>Instagram</p>
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center justify-start gap-2 text-a hover:underline text-white">
                                        <FaFacebook /> 
                                        <p>Facebook</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-start gap-2 text-a hover:underline text-white">
                                        <IoMail /> 
                                        <p>Mail</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-semibold uppercase">Чухал холбоос 2</h2>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <a href="#" className="text-a hover:underline text-white">text</a>
                                </li>
                                <li>
                                    <a href="#" className="text-a hover:underline text-white">text</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-semibold uppercase">Чухал холбоос 3</h2>
                            <ul className="font-medium">
                                <li>
                                    <a href="#" className="text-a hover:underline text-white">text</a>
                                </li>
                                <li>
                                    <a href="#" className="text-a hover:underline text-white">text</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-600 lg:my-8" />
                <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-300">
                        © 2023 ХНХИС 
                    </span>
                </div>    
            </div>
        </footer>
    );
}