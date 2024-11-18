import styles from "./portfolio.module.css"

export default function Home() {
    return(
    <div className={styles.portfolioBox}>
        <h1 className="page-title">Portfolio</h1>
        <p><strong>- Take a look at some of my work! -</strong></p>
        <div className={styles.portfolioFlexbox}>
            <div className={styles.project}>
                <a href="index.html"><img src="/projectThumb.jpg"/></a>
                <div className={styles.projectDetails}>
                    <p className="project-name"><strong>Personal Website</strong></p>
                    <p className="project-description">A personal website featuring a portfolio and resume</p>
                    <a className="project-details" href="index.html">Learn More</a>
                </div>
            </div>
            <div className={styles.project}>
                <a href="https://www.figma.com/design/w8pRbeRdOxWCoOxvgXAeTj/Prototyping?node-id=6-58&t=PBfcwNXF4mbrpabV-1" target="_blank"><img src="/asiplusThumb.jpg"/></a>
                <div className={styles.projectDetails}>
                    <p className="project-name"><strong>ASI+ HiFi Prototype (CSC484 Group Final)</strong></p>
                    <p className="project-description">A Figma prototype to redesign Cal Poly's ASI app.</p>
                    <a className="project-details" href="https://www.figma.com/design/w8pRbeRdOxWCoOxvgXAeTj/Prototyping?node-id=6-58&t=PBfcwNXF4mbrpabV-1" target="_blank">Learn More</a>
                </div>
            </div>
            <div className={styles.project}>
                <a href="https://www.figma.com/design/jUJKHNTxq0zYL2suYVEAQM/Recipea-Wireframes?node-id=0-1&t=6Y40SeMKZIHWHimR-1" target="_blank"><img src="/recipeaThumb.jpg"/></a>
                <div className={styles.projectDetails}>
                    <p className="project-name"><strong>Recipea (Figma Prototype for Cal Poly UXFest)</strong></p>
                    <p className="project-description">A Figma prototype AI cooking app for a designathon.</p>
                    <a className="project-details" href="https://www.figma.com/design/jUJKHNTxq0zYL2suYVEAQM/Recipea-Wireframes?node-id=0-1&t=6Y40SeMKZIHWHimR-1" target="_blank">Learn More</a>
                </div>
            </div>
            <div className={styles.project}>
                <a href="https://github.com/vinampud/OrganizZen" target="_blank"><img src="/organizzenThumb.jpg"/></a>
                <div className={styles.projectDetails}>
                    <p className="project-name"><strong>OrganizZen (CSC307 Group Final)</strong></p>
                    <p className="project-description">A sleek and aesthetic to-do list web app!</p>
                    <a className="project-details" href="https://github.com/vinampud/OrganizZen" target="_blank">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    )
}