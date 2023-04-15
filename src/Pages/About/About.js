import React from 'react';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import Image1 from '../../Components/Features/image/image1.jpg'
import './about.style.css'
import Footer from '../../Components/Shared/Footer/Footer';
const About = () => {
    return (
        <div>
            <div className=' fixed w-full z-50'>
                <Navigation />
            </div>

            <div className=''>
                <div

                    className='aboutBanner bg-fixed text-center h-96 flex justify-center  items-center  py-72  text-slate-50  '>
                    <div className=' md:w-6/12 px-3'>
                        <h1 className=' text-5xl font-bold md:font-extrabold capitalize py-6'>About us</h1>
                        <p className=' text-base capitalize  md:text-3xl font-bold py-16'>Street Child works with local organisations to ensure every child has access to an education.</p>
                    </div>
                </div>
            </div>


            <div className='  '>

                <div className=' flex justify-center py-28  md:py-48  bg-amber-50'>
                    <div className='  text-center md:w-6/12  container mx-auto '>
                        <h1 className=' md:text-5xl font-bold md:font-extrabold capitalize py-6 '>our purpose</h1>
                        <p className=' text-base capitalize  md:text-3xl font-bold py-16'>TO SEE ALL CHILDREN SAFE, IN SCHOOL AND LEARNING - ESPECIALLY IN LOW RESOURCE ENVIRONMENTS AND EMERGENCIES. </p>
                    </div>
                </div>



                <div className=' py-40 bg-amber-100 px-3'>
                    <div className='grid grid-cols-12 gap-4 container mx-auto'>
                        <div className=' col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 flex flex-col justify-center'>
                            <img className=' w-full' src={Image1} alt="" />
                        </div>
                        <div className='  col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 flex flex-col justify-center'>
                            <h1 className=' font-extrabold  font-serif text-2xl first-letter:text-6xl text-yellow-300  mb-10'>what we do</h1>
                            <p className=' text-lg'>We are experts in education, economic empowerment and protection programming. Our interventions are integrated to confront challenges, assuring safety as we afford access to schooling.

                                By coupling instantaneous change for children with an increase in the capacities of caregivers, communities and schools we support children to be safe, in school and learning in the long term.</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;