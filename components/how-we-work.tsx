// import FeatImage01 from '@/public/images/features-03-image-01.png';
import FeatImage02 from '@/public/images/features-03-image-02.png';
import FeatImage03 from '@/public/images/features-03-image-03.png';
import Image from 'next/image';

export default function HowWeWork() {
    return (
        <section id="how-we-work">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                            Reach goals that matter
                        </div>
                        <h1 className="h2 mb-4">Your Goals, Our Focus</h1>
                        <p className="text-xl text-gray-500">
                            See how our services are shaped to match your objectives. We customize every solution to fit
                            your needs precisely, ensuring your success is our top priority.
                        </p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">
                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <Image
                                    className="max-w-full mx-auto md:max-w-none h-auto"
                                    src={'images/features-03-image-01.png'}
                                    width={540}
                                    height={405}
                                    alt="Features 01"
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-orange-600 mb-2">
                                        We connect with you to grasp your needs.
                                    </div>
                                    <h3 className="h3 mb-3">Understanding Your Challenges</h3>
                                    <p className="text-xl text-gray-500 mb-4">
                                        We delve into your vision, goals, and challenges to align our solutions with
                                        your specific expectations and requirements.
                                    </p>
                                    <ul className="text-lg text-gray-500 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Conduct thorough interviews to understand your objectives</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Analyze market trends and competitor strategies</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Customize our approach to fit your unique needs</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up"
                            >
                                <Image
                                    className="max-w-full mx-auto md:max-w-none h-auto"
                                    src={'images/features-03-image-02.png'}
                                    width={540}
                                    height={405}
                                    alt="Features 02"
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-left"
                            >
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <div className="font-architects-daughter text-xl text-orange-600 mb-2">
                                        We craft tailored solutions for your project
                                    </div>
                                    <h3 className="h3 mb-3">Designing to Fit You</h3>
                                    <p className="text-xl text-gray-500 mb-4">
                                        Leveraging our expertise and creativity, we develop bespoke strategies and
                                        solutions that maximize your project's potential and fit seamlessly with your
                                        requirements.
                                    </p>
                                    <ul className="text-lg text-gray-500 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Brainstorm innovative ideas tailored to your project</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Create prototypes for feedback and refinement</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Deliver a final product that exceeds your expectations</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <Image
                                    className="max-w-full mx-auto md:max-w-none h-auto"
                                    src={'images/features-03-image-03.png'}
                                    width={540}
                                    height={405}
                                    alt="Features 03"
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-orange-600 mb-2">
                                        We work together at every stage of the process
                                    </div>
                                    <h3 className="h3 mb-3">Collaboration in Action</h3>
                                    <p className="text-xl text-gray-500 mb-4">
                                        We maintain open, collaborative communication throughout the process, ensuring
                                        you're involved and satisfied every step of the way. Your feedback is essential
                                        for refining and perfecting our delivery.
                                    </p>
                                    <ul className="text-lg text-gray-500 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Schedule regular progress meetings to keep you updated</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Provide easy channels for feedback and suggestions</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Adapt our approach based on your evolving needs and preferences</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
