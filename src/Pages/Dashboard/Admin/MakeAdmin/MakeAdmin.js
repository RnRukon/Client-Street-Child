import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';
import { useMakeAdminMutation } from '../../../../Redux/features/Auth/UserApi';
import { toast } from 'react-hot-toast';

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [makeAdmin, { isSuccess, isLoading, isError, error }] = useMakeAdminMutation();

    const onSubmit = async (data) => {
        await makeAdmin(data);
    };



    useEffect(() => {
        if (isLoading) {
            toast.loading('Loading...', { id: 'makeAdmin' });
        }
        if (isSuccess) {
            toast.success('Make admin is successfully', { id: 'makeAdmin' });
            reset();
        }
        if (isError) {
            toast.error(error, { id: "makeAdmin" });
        }
    }, [isLoading, isSuccess, error, isError, reset]);


    return (
        <div className='container mx-auto py-3'>
            <DashboardNavbar pageTitle='Child List' />
            <div className=' flex justify-center mt-28'>
                <form onSubmit={handleSubmit(onSubmit)} className='' >
                    <div className=" col-span-6 -space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="">
                                Email address <span className='text-red-500'>*</span>
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full rounded-t-md border-0 py-1.5 text-cyan-500 ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-cyan-600 text-xs sm:text-sm sm:leading-6 p-3"
                                placeholder="Email address"

                                {...register('email', { required: true, type: 'email' })}
                            />
                            {errors.email && errors.email.type === "required" && <p className='text-xs text-red-500'>Email is required*</p>}
                        </div>


                    </div>
                    <button type="submit"
                        className='  mt-3 text-sm px-10  md:w-96 py-1  text-slate-50 bg-gradient-to-tr  from-cyan-300  to-cyan-700 hover:bg-gradient-to-tl active:bg-gradient-to-r rounded-lg font-extrabold
'>Make Admin</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;