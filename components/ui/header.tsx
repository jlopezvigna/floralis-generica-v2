import FloralisLogo from '@/public/images/logo/floralis-color.png';
import Image from 'next/image';
import Link from 'next/link';
import CustomLink from '@/components/custom-link';
import BookMeeting from '@/components/ui/book-meeting';
import MobileMenu from '@/components/ui/mobile-menu';

export default function Header() {
    return (
        <header className="fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50">
            <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6">
                <div className="flex items-center justify-between">
                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        {/* Logo */}
                        <Link href="/" className="block" aria-label="Floralis Generica Logo">
                            <Image
                                aria-hidden="true"
                                src={'/images/logo/floralis-color.png'}
                                height={0}
                                width={0}
                                style={{ width: '40px', height: 'auto' }}
                                alt="Floralis Generica Logo"
                            />
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li>
                                <CustomLink
                                    href="#our-services"
                                    className="font-medium text-gray-900 hover:underline px-4 flex items-center transition duration-150 ease-in-out"
                                >
                                    Our Services
                                </CustomLink>
                            </li>
                            {/* TODO: Create success cases section */}
                            {/* <li>
                                <CustomLink
                                    href="#success-cases"
                                    className="font-medium text-gray-900 hover:underline px-4 flex items-center transition duration-150 ease-in-out"
                                >
                                    Success Cases
                                </CustomLink>
                            </li> */}
                            <li>
                                <CustomLink
                                    href="#how-we-work"
                                    className="font-medium text-gray-900 hover:underline px-4 flex items-center transition duration-150 ease-in-out"
                                >
                                    How we work
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink
                                    href="#our-team"
                                    className="font-medium text-gray-900 hover:underline px-4 flex items-center transition duration-150 ease-in-out"
                                >
                                    Our Team
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink
                                    href="/blogs"
                                    className="font-medium text-gray-900 hover:underline px-4 flex items-center transition duration-150 ease-in-out"
                                >
                                    Blogs
                                </CustomLink>
                            </li>
                            <li className="px-4">
                                <BookMeeting />
                            </li>
                        </ul>
                    </nav>

                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
