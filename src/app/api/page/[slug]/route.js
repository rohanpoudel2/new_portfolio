import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { slug } = params;
    const projectRes = await fetch(`${process.env.WP_API}/pages?slug=${slug}`, { next: { revalidate: 10 } });
    const projectHome = await projectRes.json();
    return new NextResponse(JSON.stringify(projectHome), { status: 200 });
  } catch (error) {
    return new NextResponse("CMS Error", { status: 500 });
  }
}