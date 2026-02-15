import React from 'react'
import Wts1 from '../assets/Wts1.png'
import Wts3 from '../assets/Wts3.png'
import { FaUtensils, FaStar, FaHeart, FaShareAlt } from 'react-icons/fa'

const Wts = () => {
    return (
        <section className=' py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-linear-to-br from-orange-50 to-amber-50 relative overflow-hidden'>

            <div className=' container mx-auto px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 relative flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:-gp-12 xl:gap-16 '>

                {/* mobile content */}
                <div className='w-full md:w-1/2 order-2 md:order-1 mb-6 md:mb-10 md:-ml-20 lg:-ml-24 xl:-ml-28 transform hover:-translate-y-2 transition-all duration-300'>
                    <div className=' relative group'>
                        <img src={Wts1} alt="happy customer" className=' w-full h-auto object-cover rounded-2xl shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-300' style={{ maxWidth: "min(100%,640px)" }} />

                        <div className=' absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-6 md:-right-2 bg-white p-2 sm:p-3 md:p-4 rounded-2xl shadow-lg '>
                            <img src={Wts3} alt="" className=' w-10 h-10 sm:w-12 sm:h-12 md:h-14 rounded-b-full  border-4 border-orange-100' />
                        </div>
                    </div>
                </div>

                {/* Right content */}
                <div className=' w-full md:w-1/2 order-1 md:order-2'>
                    <div className=' bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-orange-100 relative overflow-hidden transition-all hover:shadow-2xl'>

                        <div className=' relative z-10'>
                            {/* Badge */}
                            <div className=' flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8'>
                                <FaUtensils className='text-orange-600' />
                                <span className="text-orange-600 font-bold uppercase tracking-widest text-xs sm:text-sm">
                                    Testimonials
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
                                Epicurean Echoes: <br /> Savor the Moments
                            </h2>

                            {/* Stars */}
                            <div className="flex text-orange-400 gap-1 mb-6">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-slate-600 text-base sm:text-lg italic leading-relaxed mb-10">
                                "Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very fast delivery..."
                            </p>

                            {/* Footer Row */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-orange-50 pt-8">
                                {/* Profile Info */}
                                <div className="flex items-center gap-4">
                                    <img src={Wts3} alt="John Carter" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-orange-400 p-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-lg">John Carter</h4>
                                        <p className="text-slate-500 text-sm">Food Enthusiast</p>
                                    </div>
                                </div>

                                {/* Action Buttons from Image */}
                                <div className="flex items-center gap-3">
                                    <button className="p-3 rounded-full bg-white shadow-md text-red-500 hover:scale-110 active:scale-95 transition-all border border-slate-50">
                                        <FaHeart size={18} />
                                    </button>
                                    <button className="p-3 rounded-full bg-white shadow-md text-yellow-500 hover:scale-110 active:scale-95 transition-all border border-slate-50">
                                        <FaStar size={18} />
                                    </button>
                                    <button className="p-3 rounded-full bg-white shadow-md text-blue-500 hover:scale-110 active:scale-95 transition-all border border-slate-50">
                                        <FaShareAlt size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background shapes */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-full -translate-y-12 translate-x-12 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-100 rounded-full translate-y-8 -translate-x-8 opacity-50"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Wts