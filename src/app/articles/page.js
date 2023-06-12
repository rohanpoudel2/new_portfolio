import styles from "./page.module.scss";
import Article from "@/components/article/Article";
import { GetProjects } from "@/utils/elements";

async function getArticles() {
  const res = await GetProjects("posts");

  if (!res) {
    throw new Error("Failed to fetch Projects Page Data");
  }

  return JSON.parse(res);
}

export const metadata = {
  title: "Rohan Poudel - Articles",
  description: "Read all the articles published by Rohan Poudel. I am to publish one every two week.",
  alternates: {
    canonical: "/articles"
  },
  openGraph: {
    title: "Rohan Poudel - Articles",
    description: "Read all the articles published by Rohan Poudel. I am to publish one every two week.",
    url: `${process.env.SITE_URL}/articles`,
    type: "website",
  }
}

const Articles = async () => {
  const articles = await getArticles();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Latest Articles
      </h1>
      <div className={styles.articles}>
        {articles?.map((article) => (
          <Article data={article} key={article.id} />
        ))}
      </div>
    </div>
  )
}

export default Articles