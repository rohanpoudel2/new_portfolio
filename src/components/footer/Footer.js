import Image from "next/image";
import styles from "./footer.module.scss";
import Facebook from "../../../public/images/facebook.png"
import Instagram from "../../../public/images/instagram.png"
import LinkedIn from "../../../public/images/linkedin.png"
import Github from "../../../public/images/github.png"
import Twitter from "../../../public/images/twitter.png"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer_text}>
        Crafted with ❤️ by yours truly.
      </p>
      <div className={styles.social_links}>
        <div className={styles.social_link}>
          <Image
            src={Github}
            alt="Rohan Poudel Github"
            className={styles.img}
          />
        </div>
        <div className={styles.social_link}>
          <Image
            src={LinkedIn}
            alt="Rohan Poudel LinkedIn"
            className={styles.img}
          />
        </div>
        <div className={styles.social_link}>
          <Image
            src={Twitter}
            alt="Rohan Poudel Twitter"
            className={styles.img}
          />
        </div>
        <div className={styles.social_link}>
          <Image
            src={Facebook}
            alt="Rohan Poudel Facebook"
            className={styles.img}
          />
        </div>
        <div className={styles.social_link}>
          <Image
            src={Instagram}
            alt="Rohan Poudel Instagram"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer