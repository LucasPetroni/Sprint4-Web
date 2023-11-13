import { NextResponse } from "next/server";

export async function GET(resquest, { params }) {
  const response = await fetch(
    "https://run.mocky.io/v3/38fdb4a3-bc14-4202-aae6-a93017eb46bf"
  );
  const result = await response.json();
  return NextResponse.json(result);
}
