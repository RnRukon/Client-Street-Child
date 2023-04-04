import React from 'react';
import Image1 from "./image/image1.jpg"
import Image2 from "./image/image2.jpg"
import Image3 from "./image/image3.jpg"
import Image4 from "./image/image4.jpg"
import Image5 from "./image/image5.jpg"
import Image6 from "./image/image6.jpg"
import Image7 from "./image/image7.jpg"
import Image8 from "./image/image8.jpg"
import Image9 from "./image/image9.jpg"
import Image10 from "./image/image10.jpg"
import Image11 from "./image/image11.jpg"
import Image12 from "./image/image12.jpg"
import bg from "./image/bg.jpg"
const Feature1 = () => {
    return (
        <div className=' py-28    bg-gradient-to-br from-slate-200 via-amber-300 to-slate-200 ' >
            <div className=' container mx-auto '>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='  col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6'>
                        <h1 className=' font-extrabold  font-serif text-2xl first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900'>Event</h1>
                        <p className=' text-base  font-serif font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur accusamus optio, cupiditate soluta aut laboriosam impedit itaque atque illo dolorum molestiae omnis, saepe et quidem molestias quos quod. Non dolore ea soluta sint magni! Repudiandae nihil assumenda quas adipisci magnam, error aspernatur quia distinctio! Maxime ducimus consequatur culpa quia, error molestiae? Ut quae iste cupiditate ea possimus, corporis illum. Necessitatibus quam voluptas iure. Veritatis magnam commodi necessitatibus voluptate, ipsam provident ipsa laboriosam impedit pariatur illum illo ad cum repellat id fugit ducimus quam quos sequi accusamus iure aliquid? Quam dolores illo sunt quis consequatur ipsum, iure soluta qui voluptatem voluptatum.</p>
                    </div>
                    <div className=' col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6'>


                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image1} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image2} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image3} alt="" />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image4} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image5} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image6} alt="" />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image7} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image8} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image9} alt="" />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image10} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image11} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={Image12} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature1;