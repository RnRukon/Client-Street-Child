import React from 'react';
import {TfiControlForward,TfiControlBackward} from 'react-icons/tfi';

const DashboardNavbar = ({ pageTitle }) => {


    return (
        <div className=' bg-gradient-to-t from-slate-500 via-slate-700 to-slate-900 py-5 text-white px-7 rounded-2xl flex justify-between'>
            <h4 className=' text-base capitalize '> {pageTitle}</h4>
            <div className='flex gap-3'>
                <button onClick={() => window.history.back()}
                className=' text-sm px-2 rounded-full hover:bg-slate-500 active:bg-slate-600 '
                ><TfiControlBackward/></button>
                <button onClick={() => window.history.forward()}
                className=' text-sm px-2 rounded-full hover:bg-slate-500 active:bg-slate-600 '
                ><TfiControlForward/></button>
            </div>
        </div>
    );
};

export default DashboardNavbar;