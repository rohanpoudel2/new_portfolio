import Image from "next/image";
import styles from "./article.module.scss";
import Link from "next/link";

const Article = ({ data }) => {
  console.log(data)
  return (
    <Link href={`/articles/${data?.id}`}>
      <div className={styles.article}>
        <Image
          src={data?.acf.article_image.sizes.medium_large}
          width={762}
          height={512}
          alt="ArticleImage"
          className={styles.image}
        />
        <h2 className={styles.title}>
          {data?.title.rendered}
        </h2>
      </div>
    </Link>
  )
}

export default Article