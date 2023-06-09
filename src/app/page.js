import Image from "next/image"
import styles from "./page.module.scss"
import RohanPoudel from "@/../public/images/rohanpoudel.webp"
import Newsletter from "@/components/newsletter/Newsletter"

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.left}>
        <div className={styles.top}>
          <h1 className={styles.title}>
            नमस्ते! I Am <br /> Rohan Poudel
          </h1>
          <p className={styles.desc}>
            I am a driven individual, continuously seeking new knowledge. I recently graduated with a Bachelor's (Hons) in Computing, gaining valuable experience through coursework and diverse projects. Proficient in languages such as JavaScript, C#, PHP, and Java, as well as frameworks like NextJS and Laravel, I excel both individually and as part of a team, paying great attention to detail. My portfolio showcases my work, highlighting my qualifications and strengths. I am eager to contribute my skills to a forward-thinking team and would welcome the opportunity to discuss how I can be a valuable addition.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Hire Me</button>
            <button className={styles.button}>Projects ↗</button>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <h2 className={styles.subTitle}>
              Articles
            </h2>
            <button className={styles.button}>
              Read More
            </button>
          </div>
          <div className={styles.bottomRight}>
            <div className={styles.articles}>
              <div className={styles.article}>
                <span className={styles.articleTitle}>This is a demo article</span>
              </div>
              <div className={styles.article}>
                <span className={styles.articleTitle}>This is a demo article</span>
              </div>
              <div className={styles.article}>
                <span className={styles.articleTitle}>This is a demo article</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src={RohanPoudel}
          alt="Rohan Poudel"
          className={styles.rohanImage}
        />
        <Newsletter />
      </div>
    </div>
  )
}

export default Home