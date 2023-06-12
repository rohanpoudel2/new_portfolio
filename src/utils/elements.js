export const GetProjects = async (element) => {
  try {
    const projectRes = await fetch(`${process.env.WP_API}/${element}?_embed`, { next: { revalidate: 10 } });
    const projectHome = await projectRes.json();
    return JSON.stringify(projectHome);
  } catch (error) {
    return new Error(error);
  }
}