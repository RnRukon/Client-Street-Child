import React from 'react';
import Image2 from "../Features/image/image11.jpg"
import Image13 from "../Features/image/image13.jpeg"
import Image14 from "../Features/image/image14.jpg"
import Image15 from "../Features/image/image15.jpg"
const Services = () => {
    return (
        <div className=' pb-28    bg-gradient-to-l  from-slate-200 via-teal-500 to-slate-200 '>
            <div className=' container mx-auto '>
                <h1 className=' font-extrabold  font-serif text-6xl  text-yellow-300   py-10 text-center'>Our Service</h1>
                <div className='grid grid-cols-12 gap-4'>
                    <div className=' col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6'>
                        <img className=' w-full' src={Image2} alt="" />
                    </div>
                    <div className='  col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6'>

                        <div className=' grid  grid-cols-12 gap-5'>
                            <div className=' col-span-12  bg-gradient-to-l  from-slate-200 via-teal-500 to-slate-200 p-5'>
                                <div className=' grid grid-cols-12 gap-4'>
                                    <img className='col-span-4 ' src={Image13} alt="" />
                                    <div className='col-span-8'>

                                        <h1 className=' text-2xl font-extrabold text-yellow-400 first-letter:text-3xl'>Education</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, officia similique adipisci consequatur quia voluptatum reprehenderit quo debitis. Obcaecati, excepturi.</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' col-span-12  bg-gradient-to-l  from-slate-200 via-teal-500 to-slate-200 p-5'>
                                <div className=' grid grid-cols-12 gap-4'>
                                    <img className='col-span-4 ' src={Image14} alt="" />
                                    <div className='col-span-8'>

                                        <h1 className=' text-2xl font-extrabold text-yellow-400 first-letter:text-3xl'>Food</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, officia similique adipisci consequatur quia voluptatum reprehenderit quo debitis. Obcaecati, excepturi.</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' col-span-12  bg-gradient-to-l  from-slate-200 via-teal-500 to-slate-200 p-5'>
                                <div className=' grid grid-cols-12 gap-4'>
                                    <img className='col-span-4 ' src={Image15} alt="" />
                                    <div className='col-span-8'>

                                        <h1 className=' text-2xl font-extrabold text-yellow-400 first-letter:text-3xl'>Clothing</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, officia similique adipisci consequatur quia voluptatum reprehenderit quo debitis. Obcaecati, excepturi.</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;