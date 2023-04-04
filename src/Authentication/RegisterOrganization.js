import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { login, registration } from '../Redux/features/Auth/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import imageUploader from '../Utils/ImageUploader/ImageUploader';
import { useNavigate } from 'react-router-dom';

const RegisterOrganization = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();



    const onSubmit = async (data) => {
        const photoURL = await imageUploader(data.photo[0]);
        dispatch(registration({ ...data, photoURL, role: 'organization' }))
            .then(res => {
                if (res.payload?.email) {
                    dispatch(login({ email: data.email, password: data.password }));
                }
            })
    };


    useEffect(() => {
        if (user.email) {
            navigate("/")
            reset();
        }
    }, [navigate, user.email, reset])

    return (
        <div className=' container mx-auto h-screen overflow-y-auto p-3'>
            <div className=' grid grid-cols-12 gap-5'>
                <div className=' col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6'>

                </div>
                <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-8 space-y-6" >



                        <div className=' grid md:grid-cols-12 gap-5'>
                            <div className=' col-span-6'>
                                <label htmlFor="name" className="">
                                    Organization Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                    placeholder="Organization Name"
                                    {...register('name', { required: true, minLength: 5 })}


                                />

                                {errors.name && errors.name.type === "required" && <span> Organization Name is required</span>}
                                {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
                                {errors.name && errors.name.type === "minLength" && <span>Min length exceeded</span>}


                            </div>

                            <div className=" col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="email-address" className="">
                                        Organization email
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        placeholder="Organization email"

                                        {...register('email', { required: true, type: 'email' })}
                                    />
                                    {errors.email && errors.email.type === "required" && <span>Email is required</span>}
                                </div>


                            </div>


                        </div>
                        <div className=' grid md:grid-cols-12 gap-5'>
                            <div className="col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="phoneNumber" className="">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        autoComplete="Phone Number"
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        placeholder="Phone Number"

                                        {...register('phoneNumber', { type: 'tel' })}
                                    />

                                </div>


                            </div>
                            <div className=" col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="Founded" className="">
                                        Founded
                                    </label>
                                    <input
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        id="Founded"
                                        name="Founded"
                                        type="date"
                                        placeholder="Founded Year"

                                        {...register('founded', { required: true, type: 'date' })}
                                    />
                                    {errors.dateOfBirth && errors.dateOfBirth.type === "required" && <span>Date Of Birth is required</span>}
                                </div>


                            </div>

                            <div className="col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="postOffice" className="">
                                        Post Office
                                    </label>
                                    <input
                                        id="postOffice"
                                        name="postOffice"
                                        type="text"
                                        autoComplete="postOffice"
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        placeholder="Post Office"

                                        {...register('postOffice', { type: 'text' })}
                                    />

                                </div>


                            </div>
                            <div className="col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="postCode" className="">
                                        Post Code
                                    </label>
                                    <input
                                        id="postCode"
                                        name="postCode"
                                        type="number"
                                        autoComplete="postCode"
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        placeholder="Post Code"

                                        {...register('postCode', { type: 'number' })}
                                    />

                                </div>


                            </div>
                            <div className="col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="district" className="">
                                        District
                                    </label>
                                    <input
                                        id="district"
                                        name="district"
                                        type="text"
                                        autoComplete="district"
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        placeholder="District"

                                        {...register('district', { type: 'text' })}
                                    />

                                </div>


                            </div>
                            <div className="col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="upazila" className="">
                                        Upazila
                                    </label>
                                    <input
                                        id="upazila"
                                        name="upazila"
                                        type="text"
                                        autoComplete="upazila"
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        placeholder="Upazila"

                                        {...register('upazila', { type: 'text' })}
                                    />

                                </div>


                            </div>

                            <div className="col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="division" className="">
                                        Division
                                    </label>
                                    <input
                                        id="division"
                                        name="division"
                                        type="text"
                                        autoComplete="division"
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        placeholder="Division"

                                        {...register('division', { type: 'text' })}
                                    />

                                </div>
                            </div>
                            <div className="col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="seat" className="">
                                        What is the number of seats?
                                    </label>
                                    <input
                                        id="seat"
                                        name="seat"
                                        type="number"
                                        autoComplete="seat"
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        placeholder="What is the number of seats?"

                                        {...register('seat', { type: 'number' })}
                                    />

                                </div>
                            </div>
                            <div className="col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="photo" className="">
                                        Organization Photo
                                    </label>
                                    <input
                                        id="photo"
                                        name="photo"
                                        type="file"
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        placeholder="Organization Photo"

                                        {...register('photo', { type: 'file' })}
                                    />

                                </div>
                            </div>



                            <div className='col-span-6 -space-y-px rounded-md shadow-sm'>
                                <label htmlFor="password" className="">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                    placeholder="Password"
                                    {...register('password', { required: true, type: 'password' })}
                                />
                                {errors.password && errors.password.type === "required" && <span>Email is required</span>}
                                {errors.password && errors.password.type === "minLength" && <span>Min length exceeded</span>}
                            </div>
                            <div className='col-span-6 -space-y-px rounded-md shadow-sm'>
                                <label htmlFor="rePassword" className="">
                                    Re password
                                </label>
                                <input
                                    id="rePassword"
                                    name="rePassword"
                                    type="password"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                    placeholder="Re-Password"
                                    {...register('rePassword', { required: true, type: 'password', minLength: 6 })}
                                />
                                {errors.rePassword && errors.rePassword.type === "required" && <span>Email is required</span>}
                                {errors.rePassword && errors.rePassword.type === "minLength" && <span>Min length exceeded</span>}
                            </div>


                            <div className="col-span-6 -space-y-px rounded-md shadow-sm">
                                <label htmlFor="photo" className=" invisible ">
                                    button
                                </label>
                                <div>

                                    <button
                                        type="submit"
                                        className=' w-full py-1 px-10  text-slate-50 bg-gradient-to-tr  from-cyan-300  to-cyan-700 hover:bg-gradient-to-tl active:bg-gradient-to-r rounded-lg font-extrabold
'
                                    >

                                        Registration
                                    </button>

                                </div>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterOrganization;