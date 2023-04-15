import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { HiOutlineUserCircle } from 'react-icons/hi'
import Logout from '../../../Authentication/Login/Logout'



const navigation = [
  { name: 'Home', path: '/', current: true },
  { name: 'About', path: '/about', current: false },
  { name: 'Contact us', path: '/contactUs', current: false },


]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {

  const user = useSelector((state => state?.auth?.user));







  const menu = [
    { name: 'Your Profile', path: '/profile' },
    { name: 'Dashboard', path: '/dashboard' },
  ]




















  return (
    <>

      <div className="min-h-full ">
        <Disclosure as="nav" className=" bg-gradient-to-t from-slate-500 via-slate-700 to-slate-900">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <NavLink to='/'>
                        <img
                          className="h-8 w-8"
                          src="/logo.png"
                          alt=""
                        />
                      </NavLink>
                    </div>

                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">

                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, i) => (
                          <NavLink
                            key={i}
                            to={item?.path}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button as={NavLink} to='/profile' className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            {
                              user?.photoURL ?
                                <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt="" /> :

                                <HiOutlineUserCircle className=' text-white  h-8 w-8 rounded-full' />

                            }
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">



                            <div className="flex items-center bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700">
                              <div className="flex-shrink-0">
                                {
                                  user?.photoURL ?
                                    <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt="" /> :

                                    <HiOutlineUserCircle className=' text-slate-700  h-8 w-8 rounded-full' />

                                }
                              </div>
                              <div className="ml-3">
                                <div className="text-md font-bold  leading-none ">{user?.name}</div>
                                <div className="text-xs font-medium leading-none ">{user?.email}</div>
                              </div>


                            </div>

                            {menu.map((item, i) => (
                              <Menu.Item key={i}>
                                {({ active }) => (
                                  <NavLink
                                    to={item.path}

                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </NavLink>
                                )}
                              </Menu.Item>
                            ))}

                            {!user?.email ? <div>
                              <Menu.Item >
                                {({ active }) => (
                                  <NavLink
                                    to='/register'

                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Register for User
                                  </NavLink>
                                )}
                              </Menu.Item>
                              <Menu.Item >
                                {({ active }) => (
                                  <NavLink
                                    to='/registerOrganization'

                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Registration for Organization
                                  </NavLink>
                                )}
                              </Menu.Item>

                              <Menu.Item >
                                {({ active }) => (
                                  <NavLink
                                    to='/login'

                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Login
                                  </NavLink>
                                )}
                              </Menu.Item>
                            </div>

                              :

                              <Menu.Item>

                                <Logout className='block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100' />
                              </Menu.Item>

                            }

                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex  items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden ">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  <Disclosure.Button as={NavLink} to='/profile' className="flex items-center  my-2 py-2 px-2 text-white rounded hover:bg-slate-600 w-full">
                    <div className="flex-shrink-0 block ">


                      <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt="" />





                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium  ">{user?.name}</div>
                      <div className="text-sm font-medium leading-none ">{user?.email}</div>
                    </div>


                  </Disclosure.Button>
                  <hr />
                  {navigation.map((item, i) => (
                    <Disclosure.Button
                      key={i}
                      as={NavLink}
                      to={item.path}
                      className='block  my-2 py-2 px-2 text-white rounded hover:bg-slate-600 w-full'
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}


                  {!user?.email ? <div>
                    <Disclosure.Button as={NavLink} to='/register'
                      className=" block bg-slate-700 my-2 py-2 px-2 text-white rounded hover:bg-slate-600"
                    >

                      Register for User


                    </Disclosure.Button >
                    <Disclosure.Button as={NavLink} to='/registerOrganization'
                      className=" block  my-2 py-2 px-2 text-white rounded hover:bg-slate-600 w-full"
                    >

                      Registration for Organization


                    </Disclosure.Button>

                    <Disclosure.Button as={NavLink} to='/login'
                      className=" block  my-2 py-2 px-2 text-white rounded hover:bg-slate-600 w-full"
                    >
                      Login
                    </Disclosure.Button>
                  </div>

                    :

                    <Disclosure.Button
                      className=" block bg-slate-700 my-2 py-2 px-2 text-white rounded hover:bg-slate-600 w-full text-left"
                    >

                      <Logout className='bg-none' />

                    </Disclosure.Button>}

                </div>
                <hr />
                <div className=" border-gray-700 pt-4 pb-3">



                  <div className="mt-3 space-y-1 px-2">
                    {menu.map((item, i) => (
                      <div key={i}>

                        <Disclosure.Button
                          as={NavLink}


                          to={item.path}
                          className={`block my-2 py-2 px-2 text-white rounded hover:bg-slate-600 w-full`}
                        >
                          {item.name}
                        </Disclosure.Button>
                      </div>
                    ))}

                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
