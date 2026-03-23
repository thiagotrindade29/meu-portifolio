"use client";

import { useState } from "react";
import supabase from "@/lib/supabase";

export default function AddOPForm({ onAdd }) {

  const [form, setForm] = useState({
    produto: "",
    qtde: "",
    setor: "",
    previsao: "",
    status: "Aguardando",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // busca última OP criada
    const { data: lastOp } = await supabase
      .from("ops")
      .select("numero_op")
      .order("created_at", { ascending: false })
      .limit(1);

    let nextNumber = 1;

    if (lastOp.length > 0) {
      const last = lastOp[0].numero_op.replace("OP-", "");
      nextNumber = parseInt(last) + 1;
    }

    const numero_op = `OP-${String(nextNumber).padStart(4, "0")}`;

    const { data, error } = await supabase
      .from("ops")
      .insert([{ ...form, numero_op }])
      .select();

    if (error) {
      console.error(error);
      return;
    }

    onAdd(data[0]);

    setForm({
      produto: "",
      qtde: "",
      setor: "",
      previsao: "",
      status: "Aguardando",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mt-8 border">
      <h3 className="text-lg font-bold mb-4 text-gray-800">
        Nova Ordem de Produção
      </h3>

      <form onSubmit={handleSubmit} className="grid gap-3">

        <input
          name="produto"
          placeholder="Produto"
          value={form.produto}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          name="qtde"
          type="number"
          placeholder="Quantidade"
          value={form.qtde}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          name="setor"
          placeholder="Setor"
          value={form.setor}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          name="previsao"
          placeholder="Previsão"
          value={form.previsao}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Criar OP
        </button>

      </form>
    </div>
  );
}