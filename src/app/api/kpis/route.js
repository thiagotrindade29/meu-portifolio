// src/app/api/kpis/route.js
import { json } from "next/response";

export async function GET() {
  const kpis = [
    { titulo: "OPs em Atraso", valor: "14", icone: "bx-time-five", cor: "text-red-500", fundoIcone: "bg-red-100", status: "+2 desde ontem" },
    { titulo: "Eficiência (OEE)", valor: "87.5%", icone: "bx-trending-up", cor: "text-green-500", fundoIcone: "bg-green-100", status: "Meta: 85%" },
    { titulo: "Volume Expedido", valor: "1.240 un", icone: "bx-package", cor: "text-blue-500", fundoIcone: "bg-blue-100", status: "Volume diário" },
    { titulo: "Gargalo Atual", valor: "Setor de Embalagem", icone: "bx-error-circle", cor: "text-orange-500", fundoIcone: "bg-orange-100", status: "Fila: 300 un" }
  ];

  return json({ kpis });
}