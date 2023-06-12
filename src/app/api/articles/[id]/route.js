import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    console.log(`${process.env.WP_API}/posts/${id}?_embed`)
    const articlesRes = await fetch(`${process.env.WP_API}/posts/${id}?_embed`, { next: { revalidate: 10 } });
    if (!articlesRes.ok) {
      return new NextResponse("NOT FOUND", { status: 404 });
    }
    const articles = await articlesRes.json();
    return new NextResponse(JSON.stringify(articles), { status: 200 });
  } catch (error) {
    return new NextResponse("CMS Error", { status: 500 });
  }
}