import React from 'react';
import Image from 'next/image';
import styles from "./page.module.css"

type Props = {
    params: { slug: string }
}

async function getBlog(slug: string) {
    try {
        const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
        cache: 'no-store',
        });        
        if (!res.ok) throw new Error('Failed to fetch blog');
        return res.json();
    } catch (err: unknown) {
        console.error(`Error: ${err}`);
        return null;
    }
}

export default async function Blog({ params }: Props) {
    const awaitedParams = await params;
	const slug = awaitedParams.slug;
    const blog = await getBlog(slug); 

    if (!blog) {
        return <div>Blog not found.</div>;
    }

    return (
        <div>
        <h1 className={styles.pageTitle}>{blog.title}</h1>
        <p className={styles.blogDate}>{blog.date}</p>
        <div className={styles.blogDiv}>
            <p>{blog.description}</p>
            <Image 
            className={styles.blogImage}
            src={blog.image} 
            alt={blog.imageAlt}
            width={300}
            height={300}/>
        </div>
        </div>
    );
}
