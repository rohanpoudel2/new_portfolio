import Image from "next/image";
import styles from "./page.module.scss";
import Project from "@/components/project/Project";

async function getPageData() {
  const res = await fetch(`${process.env.SITE_URL}/api/page/projects`);

  if (!res.ok) {
    throw new Error("Failed to fetch Projects Page Data");
  }

  return res.json();
}

async function getProjectsData() {
  const res = await fetch(`${process.env.SITE_URL}/api/projects`, { next: { revalidate: 10 } });

  if (!res.ok) {
    throw new Error("Failed to fetch Projects Page Data");
  }

  return res.json();
}

export const metadata = {
  title: "Rohan Poudel - Projects",
  description: "Some of the projects that I had built along the journey. Look around for updates, I am constantly creating new stuff.",
  alternates: {
    canonical: "/projects"
  },
  openGraph: {
    title: "Rohan Poudel - Projects",
    description: "Some of the projects that I had built along the journey. Look around for updates, I am constantly creating new stuff.",
    url: `${process.env.SITE_URL}/projects`,
    type: "website",
  }
}

const Projects = async () => {

  const data = await getPageData();
  const projects = await getProjectsData();

  return (
    <div className={styles.project}>
      <h1 style={{ display: "none" }}>Rohan Poudel Projects</h1>
      <div className={styles.hero}>
        <Image
          src={data[0]?.acf.hero_image}
          alt="Hero Image"
          width={1920}
          height={1080}
          className={styles.image}
        />
        <div className={styles.projectNumberBox}>
          <span>
            Projects
          </span>
          <span className={styles.projectNumber}>
            ({projects?.length})
          </span>
        </div>
      </div>
      <div className={styles.projects}>
        {
          projects?.map((project, index) => (
            <Project data={project} key={index} />
          ))
        }
      </div>
      <div className={styles.endtext}>
        {data[0]?.acf.end_text}
      </div>
    </div>
  )
}

export default Projects