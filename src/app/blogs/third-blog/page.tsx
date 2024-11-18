import Image from "next/image";
import styles from "./page.module.css"
import blogData from "@/app/blogData"

export default function Home() {
    const thisBlog = blogData[2];

    return(
    <div>
        <h1 className={styles.pageTitle}>{thisBlog.title} - {thisBlog.date}</h1>
        <div className={styles.blogDiv}>
            <p>This is the third blog post that I have for this website! This milestone is my first time using Typescript.</p>
            <Image 
            className={styles.blogImage}
            src={thisBlog.image} 
            alt={thisBlog.imageAlt}
            width={300}
            height={300}/>
            <p>For today's image we have a pixel art of my Airpod case.</p>
        </div>
    </div>
    )
}