import { Link } from '@inertiajs/react'; // o usa `react-router-dom` si no usas Inertia
import { useState } from 'react';

const Header = ({ auth }: { auth: any }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-10 bg-white/80 shadow-sm backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo + Nombre */}
                <div className="flex items-center space-x-2">
                    <svg
                        className="h-10 w-10 text-[#A0E7E5]"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="text-xl font-bold text-gray-800 sm:text-2xl">
                        Naturly
                    </span>
                </div>

                {/* Menú en desktop */}
                <nav className="hidden space-x-8 md:flex">
                    <Link
                        href="#"
                        className="font-medium text-gray-700 transition hover:text-[#A0E7E5]"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="#"
                        className="font-medium text-gray-700 transition hover:text-[#A0E7E5]"
                    >
                        Dietas
                    </Link>
                    <Link
                        href="#"
                        className="font-medium text-gray-700 transition hover:text-[#A0E7E5]"
                    >
                        Calculadora
                    </Link>
                    <Link
                        href="#"
                        className="font-medium text-gray-700 transition hover:text-[#A0E7E5]"
                    >
                        Recetas
                    </Link>
                    <Link
                        href="#"
                        className="font-medium text-gray-700 transition hover:text-[#A0E7E5]"
                    >
                        Blog
                    </Link>
                </nav>

                {/* Botones de sesión (desktop) */}
                <div className="hidden items-center space-x-4 md:flex">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="rounded-full bg-[#FBE7C6] px-4 py-2 font-medium text-gray-800 transition hover:bg-[#f5d8a7]"
                        >
                            Mi Cuenta
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="px-4 py-2 font-medium text-gray-700 transition hover:text-[#A0E7E5]"
                            >
                                Iniciar Sesión
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-full bg-[#FBE7C6] px-4 py-2 font-medium text-gray-800 transition hover:bg-[#f5d8a7]"
                            >
                                Registrarse
                            </Link>
                        </>
                    )}
                </div>

                {/* Botón hamburguesa */}
                <button
                    className="text-gray-700 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Menú móvil desplegable */}
            {menuOpen && (
                <div className="space-y-3 bg-white/90 px-4 py-4 shadow backdrop-blur-sm md:hidden">
                    <nav className="flex flex-col space-y-2">
                        <Link
                            href="#"
                            className="font-medium text-gray-700 hover:text-[#A0E7E5]"
                        >
                            Inicio
                        </Link>
                        <Link
                            href="#"
                            className="font-medium text-gray-700 hover:text-[#A0E7E5]"
                        >
                            Dietas
                        </Link>
                        <Link
                            href="#"
                            className="font-medium text-gray-700 hover:text-[#A0E7E5]"
                        >
                            Calculadora
                        </Link>
                        <Link
                            href="#"
                            className="font-medium text-gray-700 hover:text-[#A0E7E5]"
                        >
                            Recetas
                        </Link>
                        <Link
                            href="#"
                            className="font-medium text-gray-700 hover:text-[#A0E7E5]"
                        >
                            Blog
                        </Link>
                    </nav>

                    <div className="mt-4 flex flex-col space-y-2">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-full bg-[#FBE7C6] px-4 py-2 font-medium text-gray-800 transition hover:bg-[#f5d8a7]"
                            >
                                Mi Cuenta
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 font-medium text-gray-700 transition hover:text-[#A0E7E5]"
                                >
                                    Iniciar Sesión
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-full bg-[#FBE7C6] px-4 py-2 font-medium text-gray-800 transition hover:bg-[#f5d8a7]"
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
