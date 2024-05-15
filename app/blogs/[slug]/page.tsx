export const metadata = {
    title: 'Blogs - Floralis Generica',
    description: 'Page description',
};

import style from '@/app/css/additional-styles/post.module.css';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import path from 'path';

const BLOG_DIR = 'app/markdown';

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join(BLOG_DIR));

    const paths = files.map((filename) => ({
        slug: filename.replace('.mdx', ''),
    }));

    return paths;
}

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(path.join(BLOG_DIR, slug + '.mdx'), 'utf-8');

    const { data: fontMatter, content } = matter(markdownFile);

    return {
        fontMatter,
        slug,
        content,
    };
}

export default function Page({ params }: any) {
    const props = getPost(params);
    return (
        <article className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4">{props.fontMatter.title}</h1>
                        <div className="w-full h-80 relative">
                            <Image
                                src={props.fontMatter.articleImage}
                                layout="fill"
                                objectFit="cover"
                                alt={props.fontMatter.title}
                            />
                        </div>
                        <div className={style.post}>
                            <MDXRemote source={props.content}></MDXRemote>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
