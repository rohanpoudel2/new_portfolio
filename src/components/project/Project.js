import Image from "next/image";
import styles from "./project.module.scss";
import ProjectImage from "@/../public/images/poudel-motors.png"

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.left}>
        <h2 className={styles.project_name}>
          Poudel Motors
        </h2>
        <div className={styles.project_type}>
          <span>Type</span>
          <span>Website</span>
        </div>
        <div className={styles.project_desc}>
          <span className={styles.label}>
            Description
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel dolore iusto laudantium, quidem debitis adipisci quam. Eligendi odio nisi placeat, pariatur vitae facilis rerum distinctio. Impedit consequuntur officiis quod.
          </p>
        </div>
        <div className={styles.technologies}>
          <span className={styles.technology}>
            HTML
          </span>
          <span className={styles.technology}>
            CSS
          </span>
          <span className={styles.technology}>
            JS
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src={ProjectImage}
          alt="Poudel Motors"
          className={styles.image}
        />
        <div className={styles.link}>
          <div className={styles.icon}>
            ↗
          </div>
          <div className={styles.text}>
            View Project
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project