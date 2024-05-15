import Button from '@/components/ui/button';
import CalendarTimeline from '@/public/images/calendar-timeline.svg';
import Calendar from '@/public/images/calendar.svg';
import Image from 'next/image';

export default function StayInTouch() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* CTA box */}
                <div
                    className="relative bg-orange-600 py-10 px-8 md:py-16 md:px-12 rounded-xl overflow-hidden"
                    data-aos="fade-up"
                >
                    {/* Background illustration */}
                    <Image
                        className="absolute right-[6px] top-[20px] lg:block hidden pointer-events-none"
                        aria-hidden="true"
                        src={CalendarTimeline}
                        width={250}
                        height={250}
                        alt="Calendar Timeline"
                    />
                    <Image
                        className="absolute right-[18%] top-0 rotate-[-5deg] lg:block hidden pointer-events-none"
                        aria-hidden="true"
                        src={Calendar}
                        width={250}
                        height={250}
                        alt="Calendar"
                    />

                    <div className="relative flex flex-col lg:flex-row justify-between items-center">
                        {/* CTA content */}
                        <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                            <h3 className="h3 text-white mb-2">Stay in touch</h3>
                            <p className="text-orange-200 text-lg">
                                Ready to develop your ideas? Book a meeting with us to start working in your next new
                                project.
                            </p>
                            <div className="flex flex-col md:flex-row mt-2 max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                                <Button variant="outline" href={`mailto:${process.env.EMAIL_URL}`}>
                                    Email us
                                    <svg
                                        className="ml-2"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 -4.15 57.875 57.875"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="Group_37"
                                            data-name="Group 37"
                                            transform="translate(-1209.722 -1357.465)"
                                        >
                                            <path
                                                id="Path_95"
                                                data-name="Path 95"
                                                d="M1224.729,1387.963v16.4l26.032-28.734Z"
                                                fill="#FFEBD9"
                                                stroke="#D94500"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                            />
                                            <path
                                                id="Path_96"
                                                data-name="Path 96"
                                                d="M1228.118,1390.522l37.479-30.686-17.1,45.207Z"
                                                fill="#FFEBD9"
                                                stroke="#D94500"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                            />
                                            <path
                                                id="Path_97"
                                                data-name="Path 97"
                                                d="M1211.722,1378.673l16.4,11.712,37.479-30.92Z"
                                                fill="#FFEBD9"
                                                stroke="#D94500"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                            />
                                        </g>
                                    </svg>
                                </Button>
                            </div>
                        </div>

                        {/* CTA form */}
                        {/* <div className="w-full lg:w-1/2">
                            <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                                <Button variant="outline" href={`mailto:${process.env.EMAIL_URL}`}>
                                    Email us
                                    <svg
                                        className="ml-2"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 -4.15 57.875 57.875"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="Group_37"
                                            data-name="Group 37"
                                            transform="translate(-1209.722 -1357.465)"
                                        >
                                            <path
                                                id="Path_95"
                                                data-name="Path 95"
                                                d="M1224.729,1387.963v16.4l26.032-28.734Z"
                                                fill="#FFEBD9"
                                                stroke="#D94500"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                            />
                                            <path
                                                id="Path_96"
                                                data-name="Path 96"
                                                d="M1228.118,1390.522l37.479-30.686-17.1,45.207Z"
                                                fill="#FFEBD9"
                                                stroke="#D94500"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                            />
                                            <path
                                                id="Path_97"
                                                data-name="Path 97"
                                                d="M1211.722,1378.673l16.4,11.712,37.479-30.92Z"
                                                fill="#FFEBD9"
                                                stroke="#D94500"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                            />
                                        </g>
                                    </svg>
                                </Button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
