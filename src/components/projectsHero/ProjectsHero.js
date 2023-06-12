"use client"
import { Skeleton } from "@mui/material";
import styles from "./projectshero.module.scss"
import Image from "next/image";
import { useState } from "react";

const ProjectsHero = ({ src }) => {

  const [load, setLoading] = useState(false);

  return (
    <>
      {
        !load && (
          <Skeleton animation="wave" className={styles.skeleton} />
        )
      }
      <Image
        src={src}
        alt="Hero Image"
        width={1920}
        height={1080}
        className={styles.image}
        onLoad={() => setLoading(true)}
      />
    </>
  )
}

export default ProjectsHero