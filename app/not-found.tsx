import PageIllustration from '@/components/page-illustration';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="grow">
            <PageIllustration />
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        {/* Page header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <Image
                                className="mx-auto md:max-w-none rounded-full"
                                src={'images/dog-not-found.jpeg'}
                                width={250}
                                height={250}
                                alt="Features 01"
                            />
                            <h2 className="h1 mb-4">Oops! That page doesn’t exist.</h2>
                            <span> Try searching or go to </span>{' '}
                            <Link
                                className="text-orange-500 hover:text-orange-800 transition duration-150 ease-in-out"
                                href="/"
                            >
                                Floralis home page
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
