import Image from "next/image";
import styles from "./page.module.scss";
import Sidebar from "@/components/sidebar/Sidebar";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`${process.env.SITE_URL}/api/articles/${id}`, { next: { revalidate: 10 } });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Article = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);

  return (
    <div className={styles.article}>
      <div className={styles.top}>
        <div className={styles.category}>
          {data?._embedded["wp:term"][0][0].name}
        </div>
        <h1 className={styles.title}>
          {data?.title.rendered}
        </h1>
        <h2 className={styles.subTitle}>
          {data?.acf.subtitle}
        </h2>
      </div>
      <div className={styles.imageContainer}>
        <Image
          width={1200}
          height={1200}
          src={data?.acf.article_image.url}
          alt={data?.acf.article_image.alt}
          className={styles.image}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div dangerouslySetInnerHTML={{ __html: data?.content.rendered }} className={styles.desc} />
        </div>
        <div className={styles.right}>
          <Sidebar author={data?._embedded.author} />
        </div>
      </div>
    </div>
  )
}

export default Article