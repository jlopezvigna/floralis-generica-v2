'use client';
// import FloralisLogo from '@/public/images/logo/floralis-color.png';
import { AppRoute } from '@/routesEnum';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Top area: Blocks */}
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
                        {/* 1st block */}
                        <div className="md:col-span-4 lg:col-span-5">
                            <div className="mb-2">
                                {/* Logo */}
                                <Link href="/" className="inline-block" aria-label="Floralis Generica Logo">
                                    <Image
                                        aria-hidden="true"
                                        src={'images/logo/floralis-color.png'}
                                        height={0}
                                        width={0}
                                        style={{ width: '40px', height: 'auto' }}
                                        alt="Floralis Generica Logo"
                                    />
                                </Link>
                            </div>
                            <div className="text-gray-500">
                                We're a software development company that's all about embracing the future with AI. We
                                build projects that make waves worldwide, catering to a diverse range of clients and
                                their unique ideas.
                            </div>
                        </div>

                        <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
                            {/* 3th block */}
                            <div className="text-sm">
                                <h6 className="text-gray-600 font-medium text-base mb-1">Company</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link
                                            href="/#our-services"
                                            className="text-gray-500 hover:text-gray-300 transition duration-150 ease-in-out"
                                        >
                                            Our Services
                                        </Link>
                                    </li>
                                    {/* TODO: Create success cases section */}
                                    {/* <li className="mb-1">
                                        <Link
                                            href="#success-cases"
                                            className="text-gray-500 hover:text-gray-300 transition duration-150 ease-in-out"
                                        >
                                            Success Cases
                                        </Link>
                                    </li> */}
                                    <li className="mb-1">
                                        <Link
                                            href="#how-we-work"
                                            className="text-gray-500 hover:text-gray-300 transition duration-150 ease-in-out"
                                        >
                                            How we work
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link
                                            href="#our-team"
                                            className="text-gray-500 hover:text-gray-300 transition duration-150 ease-in-out"
                                        >
                                            Our Team
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-sm">
                                <h6 className="text-gray-600 font-medium text-base mb-1">Resources</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link
                                            href={`${AppRoute.BLOGS}`}
                                            className="text-gray-500 hover:text-gray-300 transition duration-150 ease-in-out"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link
                                            href={`${AppRoute.PRIVACY_POLICY}`}
                                            className="text-gray-500 hover:text-gray-300 transition duration-150 ease-in-out"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom area */}
                    <div className="md:flex md:items-center md:justify-between">
                        {/* Social links */}
                        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                            <li className="ml-4">
                                <a
                                    target="_blanck"
                                    // TODO: Replace for the .env
                                    // href={`${process.env.LINKEDIN}`}
                                    href="https://www.linkedin.com/company/floralis-generica-corp/"
                                    className="flex justify-center items-center text-orange-600 bg-gray-800 hover:text-gray-100 hover:bg-orange-600 rounded-full transition duration-150 ease-in-out"
                                    aria-label="Linkedin"
                                    rel="noreferrer"
                                >
                                    <svg
                                        className="w-8 h-8 fill-current text-white"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>

                        {/* Copyrights note */}
                        <div className="text-gray-400 text-sm mr-4">&copy; Floralis Generica. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
