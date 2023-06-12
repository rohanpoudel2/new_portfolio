import Image from "next/image"
import styles from "./page.module.scss"
import Newsletter from "@/components/newsletter/Newsletter"
import Link from "next/link"

async function getData() {
  const res = await fetch(`${process.env.SITE_URL}/api/page/home`, { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error("Failed to fetch home data");
  }
  return res.json();
}

export const metadata = {
  title: "Rohan Poudel - 😎",
  description: "Personal Portfolio website of Rohan Poudel. Designed and Developed by yours truly",
  alternates: {
    canonical: '/',
  }
}

const Home = async () => {

  const data = await getData();

  return (
    <>
      <div className={styles.Home}>
        <div className={styles.left}>
          <div className={styles.top}>
            <h1 className={styles.title}>
              {data[0]?.acf.greeting}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: data[0]?.acf.description }} className={styles.desc} />
            <div className={styles.buttons}>
              <button className={styles.button}>
                <Link href="mailto:nsrapoudel@gmail.com">
                  Hire Me
                </Link>
              </button>
              <button className={styles.button}>
                <Link href="/projects">
                  Projects <i className='fa-solid fa-arrow-trend-up'></i>
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <h2 className={styles.subTitle}>
                Articles
              </h2>
              <Link href="/articles">
                <button className={styles.button}>
                  Read More
                </button>
              </Link>
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.articles}>
                {
                  data[0]?.acf.featured_article.map((data) => (
                    <div className={styles.article} key={data.featured.ID}>
                      <Link href={`/articles/${data.featured.ID}`}>
                        <span className={styles.articleTitle}>{data.featured.post_title}</span>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src={data[0]?.acf.rohan_image.url}
            alt={data[0]?.acf.rohan_image.alt}
            width={1000}
            height={1000}
            className={styles.rohanImage}
          />
          <Newsletter />
        </div>
      </div>
    </>
  )
}

export default Home