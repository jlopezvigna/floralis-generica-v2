export const metadata = {
    title: 'Blogs - Floralis Generica',
    description:
        'At Floralis Generica, your hub for IT services, developments, integrations, AI, and beyond, we delve into how technology drives the Digital Transformation of businesses. Explore how to optimize your enterprise with our innovative solutions.',
};

import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

export default function Page() {
    const BLOG_DIR = 'app/markdown';

    const files = fs.readdirSync(path.join(BLOG_DIR));

    const blogs = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');

        const { data: frontMatter } = matter(fileContent);
        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', ''),
        };
    });
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4">Floralis Blog</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {blogs
                            .sort((a, b) => {
                                const date1 = new Date(b.meta.date);
                                const date2 = new Date(a.meta.date);
                                return date1.getTime() - date2.getTime();
                            })
                            .map((blog) => (
                                <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                                    <div className="py-2 flex justify-center align-middle gap-2">
                                        <div className="relative">
                                            <picture className="rounded-md overflow-hidden block">
                                                <Image
                                                    className="hover:scale-125 transition-all duration-500"
                                                    aria-hidden="true"
                                                    src={blog.meta.image}
                                                    priority
                                                    width={400}
                                                    height={400}
                                                    style={{ height: 'auto' }}
                                                    alt={blog.meta.title}
                                                />
                                            </picture>
                                            <h3 className="text-base font-blod text-gray-900 font-medium my-2">
                                                {blog.meta.title}
                                            </h3>
                                            <span className="text-xs text-gray-900 bg-white rounded-md py-1 px-2 absolute top-2 right-2">
                                                <p>{blog.meta.date}</p>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
