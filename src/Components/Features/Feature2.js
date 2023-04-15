import React from 'react';
import Image2 from "./image/image5.jpg"
const Feature2 = () => {
    return (
        <div className=' py-28    bg-gradient-to-l  from-slate-200 via-violet-500 to-slate-200 '>
            <div className=' container mx-auto px-3 '>
                <div className='grid grid-cols-12 gap-4'>
                    <div className=' col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 flex flex-col justify-center'>
                        <img className=' w-full' src={Image2} alt="" />
                    </div>
                    <div className='  col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 flex flex-col justify-center'>
                        <h1 className=' font-extrabold  font-serif text-2xl first-letter:text-6xl text-yellow-300  mb-10'>TAKE ON A CHALLENGE</h1>
                        <p className=' text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur accusamus optio, cupiditate soluta aut laboriosam impedit itaque atque illo dolorum molestiae omnis, saepe et quidem molestias quos quod. Non dolore ea soluta sint magni! Repudiandae nihil assumenda quas adipisci magnam, error aspernatur quia distinctio! Maxime ducimus consequatur culpa quia, error molestiae? Ut quae iste cupiditate ea possimus, corporis illum. Necessitatibus quam voluptas iure. Veritatis magnam commodi necessitatibus voluptate, ipsam provident ipsa laboriosam impedit pariatur illum illo ad cum repellat id fugit ducimus quam quos sequi accusamus iure aliquid? Quam dolores illo sunt quis consequatur ipsum, iure soluta qui voluptatem voluptatum.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature2;