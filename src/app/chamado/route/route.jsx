import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const response = await fetch(
    // "https://run.mocky.io/v3/38fdb4a3-bc14-4202-aae6-a93017eb46bf"
    "http://localhost:8080/agilemodalapi/webapi/chamados"
  );
  const result = await response.json();
  console.log(result, 'oii')
  return NextResponse.json(result);
}
