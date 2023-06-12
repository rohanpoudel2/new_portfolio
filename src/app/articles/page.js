import styles from "./page.module.scss";
import Article from "@/components/article/Article";

async function getArticles() {
  const res = await fetch(`${process.env.SITE_URL}/api/articles`, { next: { revalidate: 10 } });

  if (!res.ok) {
    throw new Error("Error fetching Articles");
  }

  return res.json();
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