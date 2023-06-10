import Image from "next/image";
import styles from "./article.module.scss";
import ArticleImage from "@/../public/images/article.jpeg"
import Link from "next/link";

const Article = () => {
  return (
    <Link href="/articles/helo">
      <div className={styles.article}>
        <Image
          src={ArticleImage}
          alt="ArticleImage"
          className={styles.image}
        />
        <h2 className={styles.title}>
          Drinking Coffee made me a better developer.
        </h2>
      </div>
    </Link>
  )
}

export default Article