import { NextResponse } from "next/server";

export async function GET() {
  const kpis = [
    { label: "OPs Hoje", value: 12 },
    { label: "Em Produção", value: 5 },
    { label: "Finalizadas", value: 7 },
  ];
  return NextResponse.json(kpis);
}