import './css/style.css';

import { Inter, Architects_Daughter } from 'next/font/google';

import Header from '@/components/ui/header';
import Banner from '@/components/banner';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const architects_daughter = Architects_Daughter({
    subsets: ['latin'],
    variable: '--font-architects-daughter',
    weight: '400',
    display: 'swap',
});

export const metadata = {
    title: 'Floralis Generica | IT Services',
    description:
        'IT Services, IT infrastructure engineer, mobile web solutions, Red hat solutions, asset management software, api management platform, graphql backend',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID as string} />
            <body
                suppressHydrationWarning={true}
                className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased text-gray-900 tracking-tight bg-[#F3F5F8]`}
            >
                <div className="flex flex-col min-h-screen overflow-hidden">
                    <Header />
                    {children}
                    <Banner />
                </div>
            </body>
        </html>
    );
}
