import { NextResponse } from "next/server";
import { getDashboardSnapshot } from "@/lib/dataService";

export const revalidate = 5;

export async function GET() {
  const payload = await getDashboardSnapshot();
  return NextResponse.json(payload);
}
