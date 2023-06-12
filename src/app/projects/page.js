import styles from "./page.module.scss";
import Project from "@/components/project/Project";
import ProjectsHero from "@/components/projectsHero/ProjectsHero";
import { GetProjects } from "@/utils/elements";
import { GetPage } from "@/utils/page";

async function getPageData() {
  const res = await GetPage("projects");
  if (!res) {
    throw new Error("Failed to fetch home data");
  }
  return JSON.parse(res);
}

async function getProjectsData() {
  const res = await GetProjects("project");

  if (!res) {
    throw new Error("Failed to fetch Projects Page Data");
  }

  return JSON.parse(res);
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
        <ProjectsHero src={data[0]?.acf.hero_image} />
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