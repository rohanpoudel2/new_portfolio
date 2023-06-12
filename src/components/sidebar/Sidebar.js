import Image from "next/image"
import styles from "./sidebar.module.scss"
import RohanPoudel from "@/../public/images/rohanpoudel.jpg"

const Sidebar = ({ author }) => {

  return (
    <div className={styles.sidebar}>
      <div className={styles.authors}>
        <span className={styles.title}>
          Author
        </span>
        <div className={styles.author}>
          <Image
            src={author[0]?.avatar_urls["96"]}
            width={100}
            height={100}
            alt="AuthorImage"
            className={styles.authorImage}
          />
          <div className={styles.authorDetails}>
            <span className={styles.authorName}>
              {author[0]?.name}
            </span>
            <div className={styles.authorLocation}>
              <i className="fa-solid fa-location-dot"></i>
              {author[0]?.description}
            </div>
          </div>
        </div>
      </div>
      {
        author?.length > 1 &&
        <div className={styles.contributors}>
          <span className={styles.title}>
            Contributors
          </span>
          <div className={styles.author}>
            <Image
              src={RohanPoudel}
              alt="AuthorImage"
              className={styles.authorImage}
            />
            <div className={styles.authorDetails}>
              <span className={styles.authorName}>
                Rohan Poudel
              </span>
              <div className={styles.authorLocation}>
                <i className="fa-solid fa-location-dot"></i>
                Kathmandu
              </div>
            </div>
          </div>
        </div>
      }
      <div className={styles.newsletter}>
        <span className={styles.title}>
          Subscribe to my newsletter
        </span>
        <form className={styles.form}>
          <input type="email" placeholder="Enter your email" required className={styles.input} />
          <button className={styles.button}>Subscribe</button>
        </form>
      </div>
    </div >
  )
}

export default Sidebar