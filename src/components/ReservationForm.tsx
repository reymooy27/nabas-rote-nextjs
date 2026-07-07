"use client";

import { useState } from "react";

interface ReservationFormProps {
  waNumber: string;
}

export default function ReservationForm({ waNumber }: ReservationFormProps) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [pax, setPax] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !date || !pax) {
      alert("Mohon lengkapi data yang diperlukan.");
      return;
    }

    const formatDate = (dateStr: string) => {
      const d = new Date(dateStr);
      return d.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    let waText = `Halo Nabas Rote, saya ingin reservasi meja.\n\n`;
    waText += `Nama: ${name}\n`;
    waText += `Waktu: ${formatDate(date)}\n`;
    waText += `Jumlah Orang: ${pax}\n`;
    if (message.trim()) {
      waText += `\nCatatan: ${message}`;
    }

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-[0.85rem] font-semibold text-gray-800 mb-1.5">
          Nama Lengkap
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama Anda"
          required
          className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm text-gray-800 bg-white outline-none focus:border-spice focus:shadow-[0_0_0_3px_rgba(180,69,39,0.12)] transition-all"
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-[0.85rem] font-semibold text-gray-800 mb-1.5">
          Tanggal & Jam
        </label>
        <input
          type="datetime-local"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm text-gray-800 bg-white outline-none focus:border-spice focus:shadow-[0_0_0_3px_rgba(180,69,39,0.12)] transition-all"
        />
      </div>
      <div>
        <label htmlFor="pax" className="block text-[0.85rem] font-semibold text-gray-800 mb-1.5">
          Jumlah Orang
        </label>
        <select
          id="pax"
          value={pax}
          onChange={(e) => setPax(e.target.value)}
          required
          className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm text-gray-800 bg-white outline-none focus:border-spice focus:shadow-[0_0_0_3px_rgba(180,69,39,0.12)] transition-all"
        >
          <option value="">Pilih jumlah</option>
          <option value="1-2">1–2 orang</option>
          <option value="3-5">3–5 orang</option>
          <option value="6-10">6–10 orang</option>
          <option value="10+">10+ orang (rombongan)</option>
        </select>
      </div>
      <div>
        <label htmlFor="msg" className="block text-[0.85rem] font-semibold text-gray-800 mb-1.5">
          Catatan (opsional)
        </label>
        <textarea
          id="msg"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Menu spesial, alergi makanan, dll..."
          className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm text-gray-800 bg-white outline-none focus:border-spice focus:shadow-[0_0_0_3px_rgba(180,69,39,0.12)] transition-all resize-y min-h-20"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[0.95rem] bg-spice text-white border-2 border-spice hover:bg-spice-dark hover:border-spice-dark transition-all cursor-pointer"
      >
        Kirim via WhatsApp
      </button>
    </form>
  );
}