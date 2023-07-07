import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../../Firebase/firebase.config';
import { useGetMeQuery, useUpdateProfileInfoMutation } from '../../../Redux/features/Auth/UserApi';
import { toast } from 'react-hot-toast';
const ProfileUpdateForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const { data } = useGetMeQuery();

    const [updateProfile, { isSuccess, isLoading, isError, error }] = useUpdateProfileInfoMutation();

    const [edit, setEdit] = useState(true);

    const user = data?.result?.user;

    useEffect(() => {
        if (isLoading) {
            toast.loading('Loading...', { id: 'update' })
            setEdit(true)
        }
        if (isSuccess) {
            toast.success('Update success', { id: 'update' })
        }
        if (isError) {
            toast.error(error, { id: "update" })
        }
    }, [isLoading, isSuccess, error, isError])

    useEffect(() => {
        const name = user?.name;
        const splitName = name?.split(' ');
        let resetUser = { ...user, fname: splitName?.[0], lname: splitName?.[1] };
        reset(resetUser);
    }, [reset, user])




    const onSubmit = async (data) => {
        const name = data.fname + " " + data.lname;
        data.name = name;
        await updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            updateProfile(data);
        })
    };

    return (
        <div>
            <div className=' flex justify-between '>
                <h3>My Account</h3>
                <button onClick={() => setEdit(!edit)} className='active:text-teal-500'>Edit</button>
            </div>
            <hr />
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-6" >

                    {user?.role !== "organization" ? <div className=" grid md:grid-cols-12 gap-5  rounded-md shadow-sm">
                        <div className=' col-span-6'>
                            <label htmlFor="fname" className="">
                                First Name
                            </label>
                            <input
                                id="fname"
                                name="fname"
                                type="fname"
                                autoComplete="fname"
                                required
                                disabled={edit}
                                className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                placeholder="First Name"
                                {...register('fname', { required: true, minLength: 5 })}


                            />

                            {errors.fname && errors.fname.type === "required" && <span>First Name is required</span>}
                            {errors.fname && errors.fname.type === "maxLength" && <span>Max length exceeded</span>}
                            {errors.fname && errors.fname.type === "minLength" && <span>Min length exceeded</span>}


                        </div>
                        <div className='col-span-6'>
                            <label htmlFor="lname" className="">
                                Last Name
                            </label>
                            <input
                                id="lname"
                                name="lname"
                                type="lname"
                                autoComplete="lname"
                                required
                                className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                placeholder="Last Name"
                                disabled={edit}
                                {...register('lname', { required: true })}
                            />
                            {errors.lname && errors.lname.type === "required" && <span>Last Name is required</span>}
                            {errors.lname && errors.lname.type === "maxLength" && <span>Max length exceeded</span>}
                            {errors.lname && errors.lname.type === "minLength" && <span>Min length exceeded</span>}
                        </div>

                    </div> :
                        <div className=' col-span-6'>
                            <label htmlFor="fname" className="">
                            Organization Name
                            </label>
                            <input
                                id="fname"
                                name="fname"
                                type="fname"
                                autoComplete="fname"
                                required
                                disabled={edit}
                                className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                placeholder="First Name"
                                {...register('fname', { required: true, minLength: 5 })}


                            />

                            {errors.fname && errors.fname.type === "required" && <span>First Name is required</span>}
                            {errors.fname && errors.fname.type === "maxLength" && <span>Max length exceeded</span>}
                            {errors.fname && errors.fname.type === "minLength" && <span>Min length exceeded</span>}


                        </div>
                    }

                    <div className=' grid md:grid-cols-12 gap-5'>
                        <div className=" col-span-6 -space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                    placeholder="Email address"
                                    disabled={edit}
                                    {...register('email', { required: true, type: 'email' })}
                                />
                                {errors.email && errors.email.type === "required" && <span>Email is required</span>}
                            </div>


                        </div>
                        <div className=" col-span-6 -space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="Seat" className="">
                                Seat
                                </label>
                                <input
                                    id="Seat"
                                    name="Seat"
                                    type="number"
                                    autoComplete="Seat"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                    placeholder="Seat number"
                                    disabled={edit}
                                    {...register('seat', { required: true, type: 'number' })}
                                />
                                {errors.seat && errors.seat.type === "required" && <span>seat is required</span>}
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
                                    disabled={edit}
                                    {...register('phoneNumber', { type: 'tel' })}
                                />

                            </div>


                        </div>

                        
                        <div className=" col-span-6 -space-y-px rounded-md shadow-sm">
                            {
                                user?.role === "user" &&
                                <div>
                                    <label htmlFor="dateOfBirth" className="">
                                        Date Of Birth
                                    </label>
                                    <input
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        type="date"
                                        placeholder="Date Of Birth"
                                        disabled={edit}
                                        {...register('dateOfBirth', { required: true, type: 'date' })}
                                    />
                                    {errors.dateOfBirth && errors.dateOfBirth.type === "required" && <span>Date Of Birth is required</span>}
                                </div>
                            }
                            {
                                user?.role === "organization" &&
                                <div>
                                    <label htmlFor="founded" className="">
                                        Founded
                                    </label>
                                    <input
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        id="founded"
                                        name="founded"
                                        type="date"
                                        defaultValue={user?.founded}
                                        placeholder="Founded"
                                        disabled={edit}
                                        {...register('founded', { required: true, type: 'date' })}
                                    />
                                    {errors.founded && errors.founded.type === "required" && <span>founded field is required</span>}
                                </div>
                            }



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
                                    disabled={edit}
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
                                    disabled={edit}
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
                                    disabled={edit}
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
                                    disabled={edit}
                                    {...register('upazila', { type: 'text' })}
                                />

                            </div>


                        </div>
                        <div className="col-span-6 -space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="policeStation" className="">
                                    Police Station
                                </label>
                                <input
                                    id="policeStation"
                                    name="policeStation"
                                    type="text"
                                    autoComplete="policeStation"
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset  focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                    placeholder="Police Station"
                                    disabled={edit}
                                    {...register('policeStation', { type: 'text' })}
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
                                    disabled={edit}
                                    {...register('division', { type: 'text' })}
                                />

                            </div>


                        </div>

                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={edit}
                            className=' py-1 px-10  mt-24 text-slate-50 bg-gradient-to-tr  from-cyan-300  to-cyan-700 hover:bg-gradient-to-tl active:bg-gradient-to-r rounded-lg font-extrabold
'
                        >

                            Update now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdateForm;