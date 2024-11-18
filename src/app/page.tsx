import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homeBox}>
        <h1 className="page-title">Hey there!</h1>
        <div className={styles.about}>
            <div className={styles.aboutImage}>
                <img src="/self.jpg" alt="image of me"/>
            </div>
            <div className="about-text">
                <p>My name is <strong>Vinpatrik</strong>, but Vin works too! I'm a 4th year CSC major and I love combining art and computer science to make fun things for people and with people.<br/><br/>
                I have a lot of experience with SQL, and I have a bit of experience with full stack web development. Regardless of that experience, I'm <strong>always</strong> ready to learn!<br/><br/>
                Unrelated to programming, I enjoy taking pictures of wildlife and keeping up with video games!</p><br/>
                <p>I'm always looking to utilize my skills in a way that can be of use to the world.</p>
                <hr/>
                <p>| <a href="https://github.com/vmagdangal/" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/vinpatrik-magdangal-23269b222/" target="_blank">LinkedIn</a> |</p>
            </div>
        </div>
        <img id={styles.seaLionImg} src="/sealion.jpg"/>
    </div>
  );
}