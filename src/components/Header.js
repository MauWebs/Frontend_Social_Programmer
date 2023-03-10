import { Fragment } from 'react';
import { Popover, Transition, Menu } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { AiFillHome, AiFillPlusSquare } from "react-icons/ai";
import { logout } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import programador from '../media/programador.png';
import authenticated_User from '../media/user.png';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {

    //Const

    const userLogin = useSelector(state => state.userLogin);

    const { userInfo } = userLogin;

    const dispatch = useDispatch();

    const logoutHandler = () => (
        dispatch(logout())
    )


    return (

        <Popover className="relative bg-white">

            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

                    <div className="flex justify-start lg:w-0 lg:flex-1">

                        <a href="#">

                            <span className="sr-only">Persona o Empresa</span>

                            <img
                                className="h-12 w-auto sm:h-12"
                                src={programador}
                                alt="" />

                        </a>

                    </div>

                    <div className="-my-2 -mr-2 md:hidden">

                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">

                            <span className="sr-only">Open menu</span>

                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />

                        </Popover.Button>

                    </div>

                    {userInfo ?

                        <>

                            <Popover.Group as="nav" className="hidden space-x-10 md:flex">

                                <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    <AiFillHome size={30} />
                                </a>

                                <a href="/addblog" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    <AiFillPlusSquare size={30} />
                                </a>

                                <Menu as="div" className="relative ml-3">

                                    <div>

                                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">

                                            <span className="sr-only">Abrir menu de usuario</span>

                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={authenticated_User}
                                                alt="Persona o empresa" />

                                        </Menu.Button>

                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">

                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                            <Menu.Item>

                                                {({ active }) => (
                                                    <a
                                                        style={{ textDecoration: 'none' }}
                                                        href="/myprofile"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                        Tu perfil
                                                    </a>
                                                )}

                                            </Menu.Item>

                                            <Menu.Item>

                                                {({ active }) => (
                                                    <a
                                                        onClick={logoutHandler}
                                                        style={{ textDecoration: 'none', cursor: 'pointer' }}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                        Cerrar sesi??n
                                                    </a>
                                                )}

                                            </Menu.Item>

                                        </Menu.Items>

                                    </Transition>

                                </Menu>

                            </Popover.Group>

                        </>

                        :

                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">

                            <a href="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                Iniciar sesi??n
                            </a>

                            <a
                                href="/register"
                                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                Registrarse
                            </a>

                        </div>

                    }

                </div>

            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">

                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">

                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">

                        <div className="space-y-6 py-6 px-10">

                            {userInfo ?

                                <>

                                    <div className="grid grid-cols-3 gap-y-4 gap-x-8">

                                        <a href="/" className="px-7 text-base font-medium text-gray-900 hover:text-gray-700">
                                            <AiFillHome size={30} />
                                        </a>

                                        <a href="/addblog" className="px-4 text-base font-medium text-gray-900 hover:text-gray-700">
                                            <AiFillPlusSquare size={30} />
                                        </a>

                                        <Menu as="div" className="relative ml-3">

                                            <div>

                                                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">

                                                    <span className="sr-only">Abrir menu de usuario</span>

                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={authenticated_User}
                                                        alt="Persona o empresa" />

                                                </Menu.Button>

                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95">

                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                                    <Menu.Item>

                                                        {({ active }) => (
                                                            <a
                                                                style={{ textDecoration: 'none' }}
                                                                href="/myprofile"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                                Tu perfil
                                                            </a>
                                                        )}

                                                    </Menu.Item>

                                                    <Menu.Item>

                                                        {({ active }) => (
                                                            <a
                                                                onClick={logoutHandler}
                                                                style={{ textDecoration: 'none', cursor: 'pointer' }}
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                                Cerrar sesi??n
                                                            </a>
                                                        )}

                                                    </Menu.Item>

                                                </Menu.Items>

                                            </Transition>

                                        </Menu>

                                    </div>

                                </>

                                :

                                <div>

                                    <a
                                        href="/register"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                        Registrarse
                                    </a>

                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        ??Ya tienes una cuenta?{' '}

                                        <a href="/login" className="text-indigo-600 hover:text-indigo-500">
                                            Iniciar sesi??n
                                        </a>

                                    </p>

                                </div>

                            }

                        </div>

                    </div>

                </Popover.Panel>

            </Transition>

        </Popover>

    )

}