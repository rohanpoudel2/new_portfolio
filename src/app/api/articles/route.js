import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const articlesRes = await fetch(`${process.env.WP_API}/posts?_embed`, { next: { revalidate: 10 } });
    const articles = await articlesRes.json();
    return new NextResponse(JSON.stringify(articles), { status: 200 });
  } catch (error) {
    return new NextResponse("CMS Error", { status: 500 });
  }
}