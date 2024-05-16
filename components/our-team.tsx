import TestimonialImage01 from '@/public/images/testimonial-01.jpg';
import TestimonialImage02 from '@/public/images/testimonial-02.jpg';
import TestimonialImage03 from '@/public/images/testimonial-03.jpg';
import Image from 'next/image';

export default function OurTeam() {
    return (
        <section id="our-team">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Meet the Crew</h2>
                        <p className="text-xl text-gray-500">
                            Our team consists of a diverse group of individuals, each making significant contributions
                            to our outstanding service provision and our vibrant company culture.
                        </p>
                    </div>

                    {/* Testimonials */}
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
                        {/* 1st testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image
                                        className="rounded-full"
                                        src={'images/testimonial-01.jpg'}
                                        width={48}
                                        height={48}
                                        alt="Testimonial 01"
                                    />
                                    <svg
                                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-orange-600"
                                        viewBox="0 0 24 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                                    </svg>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                — At Floralis, we believe in driving innovation and leading change in the world of
                                technology. We are dedicated to excellence and strive to provide cutting-edge solutions
                                that drive our clients' growth. With a focus on quality and continuous improvement, we
                                are poised for an exciting future filled with endless possibilities.
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">Anastasia V.</cite> -{' '}
                                <span className="text-orange-600">CEO</span>
                            </div>
                        </div>

                        {/* 2nd testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image
                                        className="rounded-full"
                                        src={'images/testimonial-02.jpg'}
                                        width={48}
                                        height={48}
                                        alt="Testimonial 02"
                                    />
                                    <svg
                                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-orange-600"
                                        viewBox="0 0 24 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                                    </svg>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                — We choose to innovate and we are dedicated to researching emerging technologies to
                                accompany and help our clients to adopt comprehensive solutions, choosing the best
                                options for digital transformation.
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">Augusto L.</cite> -{' '}
                                <span className="text-orange-600">COO</span>
                            </div>
                        </div>

                        {/* 3rd testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image
                                        className="rounded-full"
                                        src={'images/testimonial-03.jpg'}
                                        width={48}
                                        height={48}
                                        alt="Testimonial 03"
                                    />
                                    <svg
                                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-orange-600"
                                        viewBox="0 0 24 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                                    </svg>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                — As the Lead Engineer at Floralis, I have the privilege of working at the forefront of
                                technology. Our team is constantly exploring new opportunities and challenges to deliver
                                state-of-the-art solutions to our clients. We are committed to technical excellence and
                                strive to push the boundaries of innovation in every project. It's exciting to be part
                                of a team that is shaping the future of the technology industry.
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">Peter M.</cite> -{' '}
                                <span className="text-orange-600">Lead Engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
