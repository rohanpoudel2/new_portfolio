import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const footerRes = await fetch(`${process.env.WP_API}/footer?_embed`);
    const footer = await footerRes.json();
    return new NextResponse(JSON.stringify(footer), { status: 200 });
  } catch (error) {
    return new NextResponse("CMS Error", { status: 500 });
  }
}