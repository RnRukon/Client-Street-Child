import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import imageUploader from '../../../../Utils/ImageUploader/ImageUploader';
import Image from './Image/Bullying-pana.svg'
import { useAddChildMutation } from '../../../../Redux/features/Child/ChildApi';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';

const AddStreetChild = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [addChild, { isError, isSuccess, error }] = useAddChildMutation();


    const onSubmit = async (data) => {

        const photo = await imageUploader(data?.photo[0]);

        const newData = { name: data?.fname + " " + data?.lname, dateOfBirth: data?.dateOfBirth, photo, gender: data.gender }
        await addChild(newData);

    };


    useEffect(() => {
        if (isSuccess) {
            alert("Add Child Success")
            reset()
        } if (isError) {
            alert(error)
        }
    }, [isSuccess, reset, isError, error])
    return (

        <div className=' container mx-auto py-3'>
              <DashboardNavbar pageTitle='Add a Street child'/>
            <div className=' grid grid-cols-12 gap-5'>
                <div className=' col-span-12 md:col-span-6'>
                    <img className=' object-contain' src={Image} alt="" />
                </div>
                <div className=' col-span-12 md:col-span-6'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-8 space-y-6" >

                        <div className=" grid md:grid-cols-12 gap-5  rounded-md shadow-sm">
                            <div className=' col-span-6'>
                                <label htmlFor="fname" className="text-sm">
                                    First Name
                                </label>
                                <input
                                    id="fname"
                                    name="fname"
                                    type="fname"
                                    autoComplete="fname"
                                    required

                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                    placeholder="First Name"
                                    {...register('fname', { required: true, maxLength: 10, minLength: 5 })}


                                />

                                {errors.fname && errors.fname.type === "required" && <span>First Name is required</span>}
                                {errors.fname && errors.fname.type === "maxLength" && <span>Max length exceeded</span>}
                                {errors.fname && errors.fname.type === "minLength" && <span>Min length exceeded</span>}


                            </div>
                            <div className='col-span-6'>
                                <label htmlFor="lname" className="text-sm">
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

                                    {...register('lname', { required: true, maxLength: 10, minLength: 5 })}
                                />
                                {errors.lname && errors.lname.type === "required" && <span>Last Name is required</span>}
                                {errors.lname && errors.lname.type === "maxLength" && <span>Max length exceeded</span>}
                                {errors.lname && errors.lname.type === "minLength" && <span>Min length exceeded</span>}
                            </div>



                        </div>


                        <div className=' grid md:grid-cols-12 gap-5'>

                            <div className=" col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="dateOfBirth" className="text-sm">
                                        Date Of Birth
                                    </label>
                                    <input
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        type="date"
                                        placeholder="Date Of Birth"

                                        {...register('dateOfBirth', { required: true, type: 'date' })}
                                    />
                                    {errors.dateOfBirth && errors.dateOfBirth.type === "required" && <span>Date Of Birth is required</span>}
                                </div>

                            </div>

                            <div className=" col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="photo" className="text-sm">
                                        Photo
                                    </label>
                                    <input
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                        id="photo"
                                        name="photo"
                                        type="file"
                                        placeholder="Photo"

                                        {...register('photo', { required: true, type: 'file' })}
                                    />
                                    {errors.dateOfBirth && errors.dateOfBirth.type === "required" && <span>Date Of Birth is required</span>}
                                </div>

                            </div>
                            <div className=" col-span-6 -space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="gender" className="text-sm">
                                        Gender
                                    </label>
                                    <select
                                        defaultValue='male'
                                        {...register("gender", { required: true })}
                                        required
                                        className="relative block w-full rounded-t-md border-0 py-1.5 bg-white text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 p-3"
                                    >
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.gender && errors.gender.type === "required" && <span>Gender  is required</span>}
                                </div>

                            </div>



                        </div>

                        <div className=' flex justify-end'>
                            <button
                                type="submit"
                                className='py-1 px-10  mt-24 text-slate-50 bg-gradient-to-tr  from-cyan-300  to-cyan-700 hover:bg-gradient-to-tl active:bg-gradient-to-r rounded-lg font-extrabold'
                            >

                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddStreetChild;