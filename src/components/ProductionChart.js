"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { dia: "Seg", producao: 400 },
  { dia: "Ter", producao: 600 },
  { dia: "Qua", producao: 550 },
  { dia: "Qui", producao: 700 },
  { dia: "Sex", producao: 650 },
]

export default function ProductionChart() {
  return (

    <div className="bg-white p-6 rounded-xl shadow-sm">

      <h3 className="font-bold mb-4">
        Produção da Semana
      </h3>

      <ResponsiveContainer width="100%" height={250}>

        <BarChart data={data}>

          <XAxis dataKey="dia" />
          <YAxis />

          <Tooltip />

          <Bar
            dataKey="producao"
            fill="#3B82F6"
            radius={[5, 5, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  )
}