import styles from "./page.module.css"
import BlogPreview from "@/components/blogPreview"
import blogData from "../blogData"
import connectDB from "../../../database/db"
import Blog from "../../../database/blogSchema"

export default async function Home() {

    async function getBlogs(){
        await connectDB() // function from db.ts before
    
        try {
                // query for all blogs and sort by date
            const blogs = await Blog.find().sort({ date: -1 }).orFail()
                // send a response as the blogs as the message
            return blogs
        } catch (err) {
            return []
        }
    }

    return(
        <div>
            <h1 className={styles.pageTitle}>Blog</h1>
            <div id={styles.blogContainer}>
                {(await getBlogs()).map(blog =>
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