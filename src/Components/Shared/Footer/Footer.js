import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { BiCopyright } from 'react-icons/bi';
const Footer = () => {
    return (
        <footer className='  bg-gradient-to-tl from-slate-500 via-slate-700 to-slate-900 pt-36 '>
            <div className='container mx-auto grid grid-cols-12 gap-4  text-center sm:text-left pb-28'>
            <div className=' col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4'>
                <h1 className=' text-2xl font-extrabold font-mono text-amber-400 '>STREET CHILD UK</h1>

                <div className='text-slate-50  font-extrabold leading-loose '>
                    <h4>Street Child </h4>
                    <h4>33 Creechurch Lane </h4>
                    <h4>City of London</h4>
                    <h4>London</h4>
                    <h4>EC3A 5EB</h4>
                    <a href="tel:+ 020 7614 7696" className=' block'>T: 020 7614 7696</a> 
                    <a href="mailto:info@street-child.org" className=' block'>info@street-child.org</a>
                </div>
            </div>
            <div className=' col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4'>
                <h1 className=' text-2xl font-extrabold font-mono text-amber-400 '>EXPLORE</h1>
                <div className=' leading-loose'>
                    <Link to='/' className='  block text-slate-50  font-extrabold   '>About us</Link>
                    <Link to='/' className='  block text-slate-50  font-extrabold   '>Our people</Link>
                    <Link to='/' className='  block text-slate-50  font-extrabold   '>Our reports</Link>
                    <Link to='/' className='  block text-slate-50  font-extrabold   '>Careers</Link>
                    <Link to='/' className='  block text-slate-50  font-extrabold   '>Contact us</Link>
                </div>
            </div>

            <div className=' col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4'>
                <h1 className=' text-2xl font-extrabold font-mono text-amber-400 '>CONNECT WITH US</h1>

                <div className='  text-3xl text-slate-50 pt-4'>
                    <i className='  inline-block pl-0 p-2'> <a href="http://" target="_blank" rel="noopener noreferrer"><BsFacebook /></a> </i>
                    <i className='  inline-block p-2'> <a href="http://" target="_blank" rel="noopener noreferrer"> <BsTwitter /></a></i>
                    <i className='  inline-block p-2'> <a href="http://" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> </i>
                    <i className='  inline-block p-2'> <a href="http://" target="_blank" rel="noopener noreferrer"> <FaInstagramSquare /></a></i>
                    <i className='  inline-block p-2'> <a href="http://" target="_blank" rel="noopener noreferrer"> <BsYoutube /></a></i>
                </div>
            </div>
        </div>
        <p className=' text-white text-center py-5 text-sm bg-gradient-to-b from-slate-500 via-slate-700 to-slate-900 '>Copy Right <BiCopyright className=' inline'/> {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;