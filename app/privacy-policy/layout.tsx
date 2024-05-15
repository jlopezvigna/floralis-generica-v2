import PageIllustration from '@/components/page-illustration';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="grow">
            <PageIllustration />

            {children}
        </main>
    );
}
