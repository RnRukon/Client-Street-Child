import React from 'react';
import Image2 from '../Features/image/image8.jpg'
const NewsMedia = () => {
    return (
        <div>


            <div className='   py-28   bg-gradient-to-l  from-slate-300 via-red-100 to-slate-400 '>

                <div className=' container mx-auto px-3 '>
                    <h1 className=' text-center font-extrabold  font-serif text-3xl pb-28 first-letter:text-6xl'>
                        NEWS AND MEDIA
                    </h1>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className=' col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 flex flex-col justify-center'>
                            <img className=' w-full' src={Image2} alt="" />
                        </div>
                        <div className='  col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 flex flex-col justify-center'>
                            <p className=' text-base font-serif '>{new Date().toDateString()}</p>
                            <h1 className=' font-extrabold  font-serif text-2xl mt-10'>Press Feature: Ghana launches $30M education outcomes fund </h1>
                            <p className=' text-base'>The world’s largest education outcomes fund — $30 million to get out-of-school children into the classroom and improve learning levels at primary schools — has finally kicked off in Ghana.</p>

                            <div>
                             {/*    <button className=' py-4 px-10  mt-24 text-slate-50 bg-gradient-to-tr  from-amber-500  to-amber-700 hover:bg-gradient-to-tl active:bg-gradient-to-r rounded-lg font-extrabold
'>Find out more</button> */}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsMedia;