import styles from "./page.module.scss";
import Category from "@/components/category/Category";
import Article from "@/components/article/Article";

const Articles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
      <h1 className={styles.title}>
        Latest Articles
      </h1>
      <div className={styles.articles}>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  )
}

export default Articles