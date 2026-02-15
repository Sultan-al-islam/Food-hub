import React from 'react';
import wws1 from "../assets/wws1.png";
import wws2 from "../assets/wws2.png";
import wws3 from "../assets/wws3.png";

const Wws = () => {
    const services = [
        {
            img: wws1,
            title: "One-Tap Ordering 📲",
            text: "Skip the hassle! With just one tap, your cravings are on their way to your doorstep!",
        },
        {
            img: wws2,
            title: "Flash-Speed Delivery ⚡",
            text: "We don’t just deliver food, we deliver happiness—hot & fresh, faster than ever!",
        },
        {
            img: wws3,
            title: "Five-Star Quality ⭐",
            text: "Every bite is a masterpiece! Only the best ingredients for an unforgettable experience.",
        },
    ];

    return (
        <div className='w-full min-h-screen bg-gradient-to-r from-red-50 to-yellow-50 px-4 sm:px-6 lg:px-20 py-12 md:py-20 xl:py-24'>
            <div className='mx-auto text-center max-w-7xl'>
                {/* Fixed typo in "animate-fade-in" and "lgh:text-4xl" */}
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 uppercase font-poppins tracking-widest mb-3'>
                    What we Serve
                </h2>

                <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 font-poppins leading-tight mb-8 md:mb-12 lg:mb-16'>
                    Delicious Delivered <br className='hidden sm:block' />
                    Just The Way You Love 🍕 🚀
                </h1>

                {/* Fixed "gird" typo to "grid" */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12'>
                    {services.map((service, index) => (
                        <div key={index} className='group relative rounded-xl p-4 sm:p-6 transition-all duration-300 hover:bg-white hover:shadow-xl'>
                            <div className='overflow-hidden rounded-lg'>
                                <img 
                                    src={service.img} 
                                    alt={service.title} 
                                    className='w-full h-48 sm:h-56 lg:h-64 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3' 
                                />
                            </div>

                            <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600 mt-4 sm:mt-6 font-poppins'>
                                {service.title}
                            </h3>
                            
                            {/* Added the missing text description */}
                            <p className='text-gray-600 mt-3 text-sm sm:text-base leading-relaxed'>
                                {service.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Wws;