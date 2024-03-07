import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const GetStarted = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="flex flex-col text-white m-4">
            <div className="mt-16 rounded-xl bg-blue-700 align-middle flex-col px-8 py-4 ">
                <div className="m-2 justify-center text-3xl">
                    <h1 className="text-center p-8 font-sans">
                        Get Started with Koinx for FREE
                    </h1>
                </div>
                <div className="px-8">
                    <p className="text-center">
                        With our range of features that you can equip for free, KoinX
                        allows you to be more educated and aware of your tax reports,
                    </p>
                </div>
                <div className="flex justify-center align-middle m-5 mt-5">
                    <img src="src\assets\KoinX-removebg-preview.png" alt="Get Started" />
                </div>
                <div className="flex align-middle justify-center mb-8">
                    <button
                        className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-10 rounded-lg border border-gray-300 mb-4"
                        onClick={scrollToTop}
                    >
                        Get Started for FREE →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted