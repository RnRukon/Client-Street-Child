import React from 'react';
import GoogleMaps from '../GoogleMap/GoogleMap';

const UserTable = ({ child }) => {
    return (
        <div className="   md:col-span-8 grid grid-cols-6 border  p-2">

            {/* ---------------------------- */}
            <div className=' col-span-2 border p-1 m-1'>

                <h1 className=' text-base'>Photo: </h1>

            </div>
            <div className='col-span-4 border  p-1 m-1'>
                <img className=' h-16 w-16 rounded-full' src={child?.photoURL} alt="" />
            </div>
            {/* ---------------------------- */}
            <div className=' col-span-2 border p-1 m-1'>

                <h1 className=' text-base'>Name: </h1>

            </div>
            <div className='col-span-4 border  p-1 m-1'>
                <h1 className=' text-base'>{child?.name}</h1>
            </div>

            {/* ------------------------------------- */}
            <div className=' col-span-2 border p-1 m-1'>

                <h1 className=' text-sm'>Email: </h1>

            </div>
            <div className='col-span-4 border  p-1 m-1'>
                <h1 className=' text-sm'><a href={`mailto:${child?.email}`}>{child?.email}</a></h1>
            </div>

            {/* ------------------------------------- */}
            <div className=' col-span-2 border p-1 m-1'>

                <h1 className=' text-sm'>Phone: </h1>

            </div>
            <div className='col-span-4 border  p-1 m-1'>
                <h1 className=' text-sm'><a href={`tel:+${child?.phoneNumber}`}>{child?.phoneNumber}</a></h1>
            </div>

            {/* ------------------------------------- */}
            <div className=' col-span-2 border p-1 m-1'>

                <h1 className=' text-sm'>Post Office: </h1>

            </div>
            <div className='col-span-4 border  p-1 m-1'>
                <h1 className=' text-sm'>{child?.postOffice} ({child?.postCode})</h1>
            </div>

            {/* ------------------------------------- */}
            <div className=' col-span-2 border p-1 m-1'>

                <h1 className=' text-sm'>District: </h1>

            </div>
            <div className='col-span-4 border  p-1 m-1'>
                <h1 className=' text-sm'>{child?.district} </h1>
            </div>

            {/* ------------------------------------- */}
            <div className=' col-span-2 border p-1 m-1'>

                <h1 className=' text-sm'>Upazila: </h1>

            </div>
            <div className='col-span-4 border  p-1 m-1'>
                <h1 className=' text-sm'>{child?.upazila} </h1>
            </div>

            {/* ------------------------------------- */}
            <div className=' col-span-2 border p-1 m-1'>

                <h1 className=' text-sm'>Division: </h1>

            </div>
            <div className='col-span-4 border  p-1 m-1'>
                <h1 className=' text-sm'>{child?.division} </h1>
            </div>

            {/* ------------------------------------- */}

            <div className='col-span-6 mt-3 h-96'>

                <GoogleMaps location={child?.district}/>
            </div>
        </div>
    );
};

export default UserTable;