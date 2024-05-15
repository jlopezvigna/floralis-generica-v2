'use client';

import { getLocalStorage, setLocalStorage } from '@/utils/storageHelper';
import { useEffect, useState } from 'react';

declare global {
    interface Window {
        gtag: any;
    }
}

export default function Banner() {
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage('cookie_consent', null);
        console.log('storedCookieConsent', storedCookieConsent);
        setCookieConsent(storedCookieConsent);
    }, [setCookieConsent]);

    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied';

        window.gtag('consent', 'update', {
            analytics_storage: newValue,
        });

        setLocalStorage('cookie_consent', cookieConsent);
    }, [cookieConsent]);

    return (
        <>
            {cookieConsent == null && (
                <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
                    <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
                        <div className="text-slate-500 inline-flex">
                            This website uses cookies to ensure you get the best experience on our website.{' '}
                            <button
                                className="font-medium hover:underline text-slate-50"
                                onClick={() => setCookieConsent(false)}
                            >
                                Decline
                            </button>{' '}
                            <span className="italic px-1.5">or</span>{' '}
                            <button
                                className="font-medium hover:underline text-emerald-400"
                                onClick={() => setCookieConsent(true)}
                            >
                                Allow Coockies
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
