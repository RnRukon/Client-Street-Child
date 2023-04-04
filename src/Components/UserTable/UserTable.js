import React from 'react';
import GoogleMaps from '../GoogleMap/GoogleMap';

const UserTable = ({child}) => {
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

            <div className='col-span-6 mt-3'>
                <iframe className=' w-full h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid" frameBorder="0" allowFullScreen="" aria-hidden="true" tabIndex="0"></iframe>

                <GoogleMaps />
            </div>
        </div>
    );
};

export default UserTable;