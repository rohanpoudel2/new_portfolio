import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";
import { GetProjects } from "@/utils/elements";

async function getData() {
  const res = await GetProjects("footer");

  if (!res) {
    throw new Error("Failed to fetch footer data");
  }

  return JSON.parse(res);
}

const Footer = async () => {

  const data = await getData();

  return (
    <div className={styles.footer}>
      <p className={styles.footer_text}>
        {data[0]?.acf.footer_text}
      </p>
      <div className={styles.social_links}>
        {
          data[0]?.acf.social_links.map((data, index) => (
            <Link href={data.social_link} target="_blank" key={index}>
              <div className={styles.social_link}>
                <Image
                  src={data.social_image}
                  alt="Rohan Poudel Social"
                  className={styles.img}
                  width={50}
                  height={50}
                />
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Footer