import React from 'react';
import NoteFoundImage from '../../Images/404.gif'
const NoteFoundPage = () => {

    return (
        <div className=' h-screen w-screen flex  justify-center md:items-center'>
            <div>
                <img src={NoteFoundImage} alt=""
                    className=''
                />
                <div className='flex justify-center'>
                    <button
                        onClick={() => window.history.back()}
                        className=' mt-3 text-sm px-10  md:w-96 py-1  text-slate-50 bg-gradient-to-tr  from-cyan-300  to-cyan-700 hover:bg-gradient-to-tl active:bg-gradient-to-r rounded-lg font-extrabold
'>Go To back</button>
                </div>
            </div>
        </div>
    );
};

export default NoteFoundPage;