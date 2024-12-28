import { NextResponse } from "next/server";
import connect from "@/app/(componnts)/db";
import post from "@/app/(componnts)/post";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};