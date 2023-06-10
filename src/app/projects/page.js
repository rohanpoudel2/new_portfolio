import Image from "next/image";
import styles from "./page.module.scss";
import HeroImage from "@/../public/images/projects.jpeg";

const Projects = () => {
  return (
    <div className={styles.project}>
      <div className={styles.hero}>
        <Image
          src={HeroImage}
          alt="Hero Image"
          className={styles.image}
        />
        <div className={styles.projectNumberBox}>
          <span>
            Projects
          </span>
          <span className={styles.projectNumber}>
            (10)
          </span>
        </div>
      </div>
    </div>
  )
}

export default Projects