import React from 'react';
import age from '../../Hooks/useAgeCalculation';


const ChildCard = ({data}) => {


    return (
        <div className=' shadow-lg p-5 rounded-3xl grid  gap-2 md:grid-cols-6 bg-gradient-to-b md:bg-gradient-to-r from-green-100 from-10% via-green-400 via-30% to-emerald-600 to-90%  shadow-slate-500'>
            <div className='col-span-6 md:col-span-2   flex justify-center md:justify-start '>
                <img className=' h-28 w-28 object-cover rounded-full' src={data?.photo} alt="" />
            </div>
            <div className='col-span-6 md:col-span-4 text-start md:text-start'>
                <h1 className=' text-base'>{data?.name}</h1>
                <p className=' text-xs'> <span className=' font-extrabold'>Date Of Birth:</span> {new Date(data?.dateOfBirth).toDateString()}</p>
                {<p className=' text-xs'> <span className=' font-extrabold'>Age:</span> {age(new Date(data?.dateOfBirth))}</p>}
                {<p className=' text-xs'> <span className=' font-extrabold'>Gender:</span> {data?.gender}</p>}
                <p><span className=' text-sm font-extrabold'>Status:</span>  <span
                    className={` text-sm ${data?.status === 'pending' && `bg-amber-400 `} ${data?.status === "approved" && "bg-green-400"} ${data?.status === "rejected" && "bg-red-400"} px-2 rounded-full text-xs`}>{data?.status.toUpperCase()} </span></p>
                <p><span className=' text-sm font-extrabold'>Police Verify:</span>  <span
                    className={`  text-xs ${data?.policeVerifyStatus === 'pending' && 'bg-amber-400'} ${data?.status === "verified" && "bg-green-400"} ${data?.status === "rejected" && "bg-red-400"} px-2 rounded-full`}>{data?.status.toUpperCase()}</span></p>
            </div>
        </div>
    );
};

export default ChildCard;