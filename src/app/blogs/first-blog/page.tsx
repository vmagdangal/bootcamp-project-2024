import Image from "next/image";
import styles from "./page.module.css"
import blogData from "@/app/blogData"

export default function Home() {
    const thisBlog = blogData[0];

    return(
    <div>
        <h1 className={styles.pageTitle}>{thisBlog.title} - {thisBlog.date}</h1>
        <div className={styles.blogDiv}>
            <p>This is the first blog post that I have for this website! This milestone is my first time using Typescript.</p>
            <Image 
            className={styles.blogImage}
            src={thisBlog.image} 
            alt={thisBlog.imageAlt}
            width={300}
            height={300}/>
            <p>I needed an image, so here's an additional image of a <a href="https://bulbapedia.bulbagarden.net/wiki/Budew_(Pok%C3%A9mon)" target="_blank">Budew</a> that I made.</p>
        </div>
    </div>
    )
}