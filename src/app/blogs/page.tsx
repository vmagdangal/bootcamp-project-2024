import styles from "./page.module.css"
import BlogPreview from "@/components/blogPreview"
import blogData from "../blogData"

export default function Home() {
    return(
        <div>
            <h1 className={styles.pageTitle}>Blog</h1>
            <div id={styles.blogContainer}>
                {blogData.map(blog =>
                    <BlogPreview 
                    key={blog._id}
                    title={blog.title}
                    date={blog.date}
                    description={blog.description}
                    image={blog.image}
                    imageAlt={blog.imageAlt}
                    slug={blog.slug}
                    />
                )}
            </div>
        </div>
    )
}