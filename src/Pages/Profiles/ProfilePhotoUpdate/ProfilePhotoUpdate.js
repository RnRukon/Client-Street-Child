import React from 'react';

import ProfileImage from '../image/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png'
import auth from '../../../Firebase/firebase.config';
import imageUploader from '../../../Utils/ImageUploader/ImageUploader';
import { useGetMeQuery, useUpdateProfileInfoMutation } from '../../../Redux/features/Auth/UserApi';
const ProfilePhotoUpdate = () => {
    const { data: user } = useGetMeQuery();

   
    const [updateProfile] = useUpdateProfileInfoMutation();

    const handlePhotoChange = async (data) => {

        const photoURL = await imageUploader(data);

        await updateProfile(auth.currentUser, {
            photoURL
        }).then(() => {
            updateProfile({ photoURL });
        })
    }


    return (
        <div className=' col-span-7 md:col-span-5 p-5 bg-slate-100 mt-40 md:-mt-20 rounded-3xl'>
            <div className='  flex justify-center'>
                <img className=' w-80 h-80 rounded-full -mt-44 shadow-2xl shadow-green-300' src={user?.result?.user?.photoURL || ProfileImage} alt="" />
            </div>
            <div className=' text-center pt-6'>
                <div className="flex w-full  items-center justify-center bg-grey-lighter">
                    <label className="    mt-24 text-slate-50 bg-gradient-to-tr  from-orange-300  to-orange-700 hover:bg-gradient-to-tl active:bg-gradient-to-r rounded-lg font-extrabold
flex flex-col items-center px-4  py-3 hover:bg bg-white text-blue shadow-lg tracking-wide uppercase border border-blue cursor-pointer  ">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-xs leading-normal">Choose your profile photo</span>
                        <input onChange={(e) => handlePhotoChange(e?.target.files[0])} type='file' accept='.png,.jpg,.jpeg ' className="hidden" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ProfilePhotoUpdate;