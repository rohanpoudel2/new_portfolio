import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const categoriesRes = await fetch(`${process.env.WP_API}/categories?_embed`);
    const category = await categoriesRes.json();
    return new NextResponse(JSON.stringify(category), { status: 200 });
  } catch (error) {
    return new NextResponse("CMS Error", { status: 500 });
  }
}