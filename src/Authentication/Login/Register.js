
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useDispatch, useSelector } from 'react-redux';
import { login, registration } from '../../Redux/features/Auth/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import Image from '../../Images/Mobile login-bro.svg'
export default function Register() {


    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    const onSubmit = async ({ email, password, fname, lname }) => {
        const name = fname + " " + lname;
        dispatch(registration({ email, password, name }))
            .then(res => {
                if (res.payload?.email) {
                    dispatch(login({ email, password }));
                }
            })

    };

    useEffect(() => {
        if (user.email) {
            navigate("/")
        }
    }, [navigate, user.email]);


    return (
        <>
            <div className=' fixed w-full z-50'>
                <Navigation />
            </div>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 flex flex-col justify-center'>
                    <img src={Image} alt="" className=' h-full w-full object-cover' />
                </div>


                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 w-full flex flex-col justify-center">
                    <div className="w-full px-3 md:p-0 md:max-w-md space-y-8 mx-auto ">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src="/logo.png"
                                alt="Your Company"
                            />
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Signup for your account
                            </h2>

                        </div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-8 space-y-6" >

                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="fname" className="sr-only">
                                        First Name
                                    </label>
                                    <input
                                        id="fname"
                                        name="fname"
                                        type="fname"
                                        autoComplete="fname"
                                        required
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                                        placeholder="First Name"

                                        {...register('fname', { required: true, maxLength: 10, minLength:2 })}

                                    />

                                    {errors.fname && errors.fname.type === "required" && <span>First Name is required</span>}
                                    {errors.fname && errors.fname.type === "maxLength" && <span>Max length exceeded</span>}
                                    {errors.fname && errors.fname.type === "minLength" && <span>Min length exceeded</span>}


                                </div>
                                <div>
                                    <label htmlFor="lname" className="sr-only">
                                        First Name
                                    </label>
                                    <input
                                        id="lname"
                                        name="lname"
                                        type="lname"
                                        autoComplete="lname"
                                        required
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 mt-3"
                                        placeholder="Last Name"

                                        {...register('lname', { required: true, maxLength: 10, minLength: 2 })}
                                    />
                                    {errors.lname && errors.lname.type === "required" && <span>Last Name is required</span>}
                                    {errors.lname && errors.lname.type === "maxLength" && <span>Max length exceeded</span>}
                                    {errors.lname && errors.lname.type === "minLength" && <span>Min length exceeded</span>}
                                </div>



                            </div>
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                                        placeholder="Email address"
                                        {...register('email', { required: true, type: 'email' })}
                                    />
                                    {errors.email && errors.email.type === "required" && <span>Email is required</span>}
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 p-3"
                                        placeholder="Password"
                                        {...register('password', { required: true, type: 'password' })}
                                    />
                                    {errors.password && errors.password.type === "required" && <span>Email is required</span>}
                                    {errors.password && errors.password.type === "minLength" && <span>Min length exceeded</span>}
                                </div>
                                <div>
                                    <label htmlFor="rePassword" className="sr-only">
                                        Re password
                                    </label>
                                    <input
                                        id="rePassword"
                                        name="rePassword"
                                        type="password"
                                        required
                                        className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 p-3"
                                        placeholder="Re-Password"
                                        {...register('rePassword', { required: true, type: 'password', minLength: 6 })}
                                    />
                                    {errors.rePassword && errors.rePassword.type === "required" && <span>Email is required</span>}
                                    {errors.rePassword && errors.rePassword.type === "minLength" && <span>Min length exceeded</span>}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        required
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" {...register('checkbox', { required: true, type: 'checkbox', minLength: 6 })}
                                    />
                                    {errors.checkbox && errors.checkbox.type === "required" && <span>Email is required</span>}

                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Signup
                                </button>
                            </div>
                        </form>
                        <p>Already Registered? Please <Link to='/login' className=' text-violet-500'>Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
