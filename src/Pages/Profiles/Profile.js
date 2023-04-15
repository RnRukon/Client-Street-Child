import React from 'react';
import { useGetMeQuery } from '../../Redux/features/Auth/UserApi';
import ProfilePhotoUpdate from './ProfilePhotoUpdate/ProfilePhotoUpdate';
import ProfileUpdateForm from './ProfileUpdateForm/ProfileUpdateForm';
import Navigation from '../../Components/Shared/Navigation/Navigation';
const Profile = () => {

    const { data: user } = useGetMeQuery();


    return (
        <div>
            <Navigation/>
            <div className='pb-60 '>
                <div className=' '>

                    <header className='py-28 px-3 pb-52 bg-gradient-to-l  from-slate-200 via-teal-400 to-teal-500 ' >
                        <div className=' container mx-auto'>
                            <h1 className=' py-10 text-lg font-extrabold text-yellow-400 capitalize'>{user?.result?.user?.role} Profile</h1>


                            <div className=' md:w-1/2'>
                                <h1 className=' text-2xl  font-extrabold text-slate-50'>Hello {user?.result?.user?.name.split(" ")?.[0]}</h1>
                                <p className=' text-base text-gray-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio molestiae dolores, perferendis esse illo, accusantium maiores adipisci illum praesentium corporis assumenda reprehenderit officiis minus provident maxime! Eveniet voluptatibus at nulla?</p>


                            </div>
                        </div>
                    </header>


                    <div className=' container mx-auto px-3 md:px-0 '>
                        <div className=' grid md:grid-cols-12 gap-5'>
                            <div className=' col-span-7 bg-slate-100 p-5 -mt-40 rounded-3xl'>
                                {/* update profile  info*/}
                                <ProfileUpdateForm />
                            </div>
                            {/* update Profile photo  */}
                            <ProfilePhotoUpdate />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;