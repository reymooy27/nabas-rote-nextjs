import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, date, pax, message, waNumber } = body;

    if (!name || !date || !pax || !waNumber) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 }
      );
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
    if (message?.trim()) {
      waText += `\nCatatan: ${message}`;
    }

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

    return NextResponse.json({ success: true, waUrl });
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan" },
      { status: 500 }
    );
  }
}