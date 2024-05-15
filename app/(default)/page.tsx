export const metadata = {
    title: 'Floralis Generica | IT Services',
    description:
        'IT Services, IT infrastructure engineer, mobile web solutions, Red hat solutions, asset management software, api management platform, graphql backend',
};

import Hero from '@/components/hero';
import Features from '@/components/features';
import StayInTouch from '@/components/stay-in-touch';
import HowWeWork from '@/components/how-we-work';
import OurTeam from '@/components/our-team';

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <HowWeWork />
            <OurTeam />
            <StayInTouch />
        </>
    );
}
