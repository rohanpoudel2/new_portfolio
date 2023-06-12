"use client"
import Image from "next/image";
import styles from "./article.module.scss";
import Link from "next/link";
import { useState } from "react";
import { Skeleton } from "@mui/material";

const Article = ({ data }) => {

  const [load, setLoad] = useState(false);

  return (
    <Link href={`/articles/${data?.id}`}>
      <div className={styles.article}>
        {
          !load &&
          <Skeleton animation="wave" className={styles.skeleton} />
        }
        <Image
          src={data?.acf.article_image.sizes.medium_large}
          width={762}
          height={512}
          alt="ArticleImage"
          className={styles.image}
          onLoad={() => setLoad(true)}
        />
        <h2 className={styles.title}>
          {data?.title.rendered}
        </h2>
      </div>
    </Link>
  )
}

export default Article