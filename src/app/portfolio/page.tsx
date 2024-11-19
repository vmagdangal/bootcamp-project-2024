import styles from "./portfolio.module.css"
import Project from "../../../database/projectSchema"
import connectDB from "../../../database/db"

export default async function Home() {

    async function getProjects(){
        await connectDB() // function from db.ts before
    
        try {
                // query for all blogs and sort by date
            const projects = await Project.find().sort({ date: -1 }).orFail()
                // send a response as the blogs as the message
            return projects
        } catch (err) {
            return []
        }
    }

    return(
    <div className={styles.portfolioBox}>
        <h1 className="page-title">Portfolio</h1>
        <p><strong>- Take a look at some of my work! -</strong></p>

        <div className={styles.portfolioFlexbox}>
            {(await getProjects()).map(project =>
                <div className={styles.project} key={project._id}>
                    <a href={project.link}><img src={project.image}/></a>
                    <div className={styles.projectDetails}>
                        <p className="project-name"><strong>{project.name}</strong></p>
                        <p className="project-description">{project.description}</p>
                        <a className="project-details" href={project.link}>Learn More</a>
                    </div>
                </div> 
            )}
        </div>
    </div>
    )
}