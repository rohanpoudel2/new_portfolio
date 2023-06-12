"use client"
import Image from "next/image"
import Skeleton from '@mui/material/Skeleton';
import { useState } from "react";
import styles from "./HomeImage.module.scss";

const HomeImage = ({ src, alt }) => {

  const [load, setLoading] = useState(false);

  return (
    <>
      {!load && (
        <Skeleton animation="wave" className={styles.skeleton} />
      )}
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className={styles.rohanImage}
        onLoad={() => setLoading(true)}
      />

    </>
  )
}

export default HomeImage