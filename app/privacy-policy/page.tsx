export const metadata = {
    title: 'Privacy Policy - Floralis Generica',
    description:
        'Privacy Policy At Floralis Gnerica, We Take Your Privacy Very Seriously Please read our privacy statement concerning any information we may collect"',
};

import style from '@/app/css/additional-styles/post.module.css';

export default function Page() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4">Privacy Policy</h1>
                    </div>
                    <div className={style.post}>
                        <p>
                            This Privacy Policy describes how Floralis Generica LLC collects, uses, and shares personal
                            information when you visit{' '}
                            <a href="https://floralisgenerica.com">https://floralisgenerica.com</a>.
                        </p>
                        <h4>Information We Collect</h4>
                        <p>We may collect certain personal information when you visit our Site, including:</p>
                        <ul>
                            <li>
                                Log Information: We collect log information about your visit to our Site, including the
                                type of browser you use, access times, pages viewed, your IP address, and the website
                                you visited before navigating to our Site.
                            </li>
                            <li>
                                Device Information: We collect information about the device you use to access our Site,
                                including the hardware model, operating system, and unique device identifiers.
                            </li>
                            <li>
                                Cookies: We use cookies and similar tracking technologies to track activity on our Site
                                and store certain information. Cookies are files with a small amount of data which may
                                include an anonymous unique identifier.
                            </li>
                        </ul>
                        <h4>How We Use Your Information</h4>
                        <p>We use the personal information we collect to:</p>
                        <ul>
                            <li>Provide, maintain, and improve our Site;</li>
                            <li>Respond to your inquiries and customer service requests;</li>
                            <li>
                                Communicate with you about products, services, offers, promotions, and events offered by
                                us;
                            </li>
                            <li>Monitor and analyze trends, usage, and activities in connection with our Site;</li>
                            <li>
                                Detect, investigate, and prevent fraudulent transactions and other illegal activities.
                            </li>
                        </ul>
                        <h4>Sharing Your Information</h4>
                        <p>
                            We may share your personal information with third parties who provide services on our behalf
                            or with whom we have partnered to offer a service.
                        </p>
                        <h4>Your Choices</h4>
                        <p>
                            You can choose not to provide us with certain information, but this may limit your ability
                            to access or use certain features of our Site.
                        </p>
                        <h4>Changes to This Privacy Policy</h4>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by
                            posting the new Privacy Policy on this page.
                        </p>
                        <h4>Contact Us</h4>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at{' '}
                            <a href="mailto:info@floralisgenerica.com">info@floralisgenerica.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
