import resumestyles from "./page.module.css";

export default function Home() {
  return (
    <div className={resumestyles.resumeBox}>
        <h1 className="page-title">Resume</h1>
        <a id={resumestyles.resumeDownload} href="/vmagdang_resume.pdf" download>Download Resume</a>
        <div className="resume">
            <section className={resumestyles.section}>
                <h2 className="section-title">Education</h2>
                <div className="entry">
                    <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
                    <p className="entry-info"><em>California Polytechnic State University, San Luis Obispo</em></p>
                    <p className="entry-description">June 2025</p>
                </div>
            </section>

            <section className={resumestyles.section}>
                <h2 className="section-title">Experience</h2>
                <div className="entry">
                    <h3 className="entry-title">Instructional Student Assistant</h3>
                    <p className="entry-info">California Polytechnic State University, San Luis Obispo<br/><em>April 2024 - June 2024</em></p>
                    <p className="entry-description">● Worked alongside instructors for a class on databases, relational models, and using SQL queries on MySQL Workbench.<br/>
                        ● Assisted and gave feedback to instructors to update existing class content to provide a better
                        educational experience for students.<br/>
                        ● Utilized a deep understanding of SQL to grade college-level coursework and give feedback on SQL queries
                        for dozens of students.</p>
                </div>
                <div className="entry">
                    <h3 className="entry-title">Student Assistant - Food Service</h3>
                    <p className="entry-info">Cal Poly Dining<br/><em>January 2024 - June 2023</em></p>
                    <p className="entry-description">● Demonstrated excellent teamwork, time management, customer service, and communication skills</p>
                </div>
            </section>

            <section className={resumestyles.section}>
                <h2 className="section-title">Projects</h2>
                <div className="entry">
                    <h3 className="entry-title">OrganizZen</h3>
                    <p className="entry-info">Intro to Software Engineering Final<br/><em>Utilized Tools: Figma, Javascript, React, Node.JS, Express.JS, MongoDB, Microsoft Azure, AGILE Development</em></p>
                    <p className="entry-description">● Created a web application that helps users manage tasks during their daily lives<br/>
                        ● Used Figma to create a high-fidelity prototype and gathered feedback to improve design<br/>
                        ● Fully set up a backend to save data between user sessions, then hosted on Azure</p>
                </div>
                <div className="entry">
                    <h3 className="entry-title">Recipea</h3>
                    <p className="entry-info">UXFest Designathon Entry<br/><em>Utilized Tools: Figma, Google Forms</em></p>
                    <p className="entry-description">● Worked alongside a team to design mobile app in Figma that generates cooking recipes<br/>
                        ● Responsible for conducting user testing and providing feedback to the rest of the team<br/>
                        ● Designed a responsive sign-up page in Figma based on feedback from peers and users</p>
                </div>
                <div className="entry">
                    <h3 className="entry-title">BobaBot</h3>
                    <p className="entry-info">Personal Project<br/><em>Utilized Tools: Javascript, discord.js</em></p>
                    <p className="entry-description">● Created a bot on the Discord social platform that allows users to play a game where they run a virtual boba shop<br/>
                        ● Allowed users to use buttons and chat messages to navigate menus and unlock new ingredients</p>
                </div>
            </section>

            <section className={resumestyles.section}>
                <h2 className="section-title">Coursework</h2>
                <ul className="course-list">
                    <li>User-Centered Interface Design and Development</li>
                    <li>Introduction to Database Systems</li>
                    <li>Introduction to Software Engineering</li>
                    <li>Programming Languages</li>
                    <li>Introduction to Computer Security</li>
                    <li>Systems Programming</li>
                    <li>Design and Analysis of Algorithms</li> 
                    <li>Data Structures</li> 
                    <li>Computer Architecture</li> 
                    <li>Project-Based Object-Oriented Programming and Design</li>
                </ul>
            </section>

            <section className={resumestyles.section}>
                <h2 className="section-title">Skills</h2>
                <ul className="skill-list">
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>Racket</li>
                    <li>SQL</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Figma</li>
                    <li>Git</li>
                    <li>Microsoft Office</li>
                    <li>Google Workspace</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                </ul>
            </section>
        </div>
    </div>
  );
}
