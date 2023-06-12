import Image from "next/image";
import styles from "./project.module.scss";
import Link from "next/link";

const Project = ({ data }) => {
  return (
    <div className={styles.project}>
      <div className={styles.left}>
        <h2 className={styles.project_name}>
          {data?.acf.project_name}
        </h2>
        <div className={styles.project_type}>
          <span>Type</span>
          <span>{data?.acf.project_type}</span>
        </div>
        <div className={styles.project_desc}>
          <span className={styles.label}>
            Description
          </span>
          <div dangerouslySetInnerHTML={{ __html: data?.acf.project_description }} className={styles.desc} />
        </div>
        <div className={styles.technologies}>
          {
            data?.acf.technologies.map((technology, index) => (
              <span className={styles.technology} key={index}>
                {technology.name}
              </span>
            ))
          }
        </div>
      </div>
      <div className={styles.right}>
        <Image
          width={1920}
          height={1080}
          src={data?.acf.project_image}
          alt="Poudel Motors"
          className={styles.image}
        />
        <Link href={data?.acf.project_link} className={styles.link} target="__blank">
          <div className={styles.icon}>
            <i className='fa-solid fa-arrow-trend-up'></i>
          </div>
          <div className={styles.text}>
            View Project
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Project