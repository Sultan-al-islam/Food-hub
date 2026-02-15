import React, { useState } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaHeart,
    FaStar,
    FaShareAlt,
} from "react-icons/fa";
import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import pizza1 from "../assets/pizza1.png";
import pizza2 from "../assets/pizza2.png";
import cupcake1 from "../assets/cupcake1.png";
import cupcake2 from "../assets/cupcake2.png";
import icecream1 from "../assets/icecream1.png";
import icecream2 from "../assets/icecream2.png";

const menuItems = [
    { name: "Burger", price: 25.0, icon: "🍔", image1: burger1, image2: burger2 },
    { name: "Pizza", price: 110.0, icon: "🍕", image1: pizza1, image2: pizza2 },
    {
        name: "Cupcake",
        price: 50.0,
        icon: "🧁",
        image1: cupcake1,
        image2: cupcake2,
    },
    {
        name: "Ice Cream",
        price: 20.0,
        icon: "🍦",
        image1: icecream1,
        image2: icecream2,
    },
];

const Om = () => {

    const [selctedItem, setSelectedItem] = useState(menuItems[0])


    return (
        <div className=' min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 px-4 sm:px-6 md:px-8 lg:px-8 flex flex-col md:flex-col lg:flex-row items-center gap-8'>

            {/* Left sidebar */}

            <div className="w-full md:w-3/4 lg:w-1/4 bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-amber-300   ">
                <h1 className=" text-3xl md:text-4xl font-pacifico text-amber-600 mb-4 md:mb-6 text-center "> Our Menu

                </h1>
                <p className=" text-base md:text-lg font-comfortaa text-amber-700 italic mb-4 md:mb-6 text-center">
                    Menu That Always <br /> Makes You Fall in Love

                </p>

                <div className=" space-y-3 md:space-y-4">
                    {menuItems.map((item, index) => (
                        <button key={index} onClick={() => setSelectedItem(item)} className={` flex items-center justify-between w-full p-2 md:p-3 rounded-2xl transition-all duration-300 ${selctedItem.name == item.name ? " bg-amber-600 text-white" : " bg-white text-gray-800 border border-amber-300"} hover:bg-amber-500 hover:text-white shadow-md`}>

                            <div className=" flex items-center space-x-2 md:space-x-3">

                                {/* icon cotainer */}
                                <div className={` w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${selctedItem.name == item.name ? "from-yellow-200 to-orange-500 border-4 border-white shadow-lg scale-105" : " from-gray-200 to-gray-300 border-2 border-transparent"}text-white shadow-md  transition-all duration-300 transform hover:scale-110`}>

                                    <span className="text-lg md:text-xl " >
                                        {item.icon}

                                    </span>


                                </div>
                                <h3 className=" text-sm md:text-base font-semibold ">
                                    {item.name}

                                </h3>

                            </div>

                            <span className=" text-sm md:text-base font-bold">
                                ${item.price}

                            </span>

                        </button>
                    ))}

                </div>

            </div>

            {/* Right side */}

            <div className=" w-full lg:w-3/4 flex flex-col items-center ">
                <div className=" relative flex flex-col md:flex-row gap-4 md:gap-6">

                    <div className=" p-2 md:p-4 rounded-3xl">

                        <img src={selctedItem.image1} alt={`${selctedItem.name} 1`} className=" w-full md:w-[400px] lg:w[450px] h-auto object-cover rounded-xl" />

                    </div>
                    <div className=" p-2 md:p-4 rounded-3xl">

                        <img src={selctedItem.image2} alt={`${selctedItem.name} 1`} className=" w-full md:w-[400px] lg:w[450px] h-auto object-cover rounded-xl" />

                    </div>

                </div>

                <h2 className=" text-2xl md:text-3xl font-comfortaa font-bold mt-4 md:mt-6 text-gray-800">
                    {selctedItem.name}

                </h2>

                <p className=" text-xl md:text-2xl font-semibold text-amber-600 ">
                    ${selctedItem.price}

                </p>

                {/* navigation */}



                <div className="flex items-center gap-6 mt-8">
                    <button
                        onClick={() => {
                            const currentIndex = menuItems.findIndex(item => item.name === selctedItem.name);
                            const prevIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
                            setSelectedItem(menuItems[prevIndex]);
                        }}
                        className="p-4 rounded-full bg-white border border-amber-300 text-amber-600 hover:bg-amber-600 hover:text-white transition-all shadow-md active:scale-95"
                    >
                        <FaChevronLeft size={18} />
                    </button>

                    <button
                        onClick={() => {
                            const currentIndex = menuItems.findIndex(item => item.name === selctedItem.name);
                            const nextIndex = (currentIndex + 1) % menuItems.length;
                            setSelectedItem(menuItems[nextIndex]);
                        }}
                        className="p-4 rounded-full bg-white border border-amber-300 text-amber-600 hover:bg-amber-600 hover:text-white transition-all shadow-md active:scale-95"
                    >
                        <FaChevronRight size={18} />
                    </button>
                </div>

                {/* Additional icon */}

                <div className="flex gap-4 mt-6">
                    <button className="p-3 rounded-full bg-white shadow-md text-red-500 hover:scale-110 transition-transform">
                        <FaHeart size={20} />
                    </button>
                    <button className="p-3 rounded-full bg-white shadow-md text-yellow-500 hover:scale-110 transition-transform">
                        <FaStar size={20} />
                    </button>
                    <button className="p-3 rounded-full bg-white shadow-md text-blue-500 hover:scale-110 transition-transform">
                        <FaShareAlt size={20} />
                    </button>
                </div>




            </div>

        </div>
    )
}

export default Om
