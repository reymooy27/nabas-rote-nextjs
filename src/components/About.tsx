import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="py-25 max-md:py-16 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-8">
          <AnimateOnScroll>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=85"
                alt="Suasana Nabas Rote Mengkudu Oeba"
                loading="lazy"
                className="rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] w-full h-[480px] object-cover max-md:h-[320px]"
              />
              <div className="absolute -bottom-6 -right-4 bg-spice text-cream px-6 py-4 rounded-[16px] shadow-lg hidden md:block">
                <p className="font-script text-gold-light text-2xl leading-none">
                  rasa pulau
                </p>
                <p className="eyebrow text-cream/90 text-[0.7rem] mt-1">
                  Since Family Recipe
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div>
              <p className="eyebrow text-gold mb-2">Tentang Kami</p>
              <p className="font-script text-spice text-3xl mb-1 leading-none">
                Masakan Rote,
              </p>
              <h2
                className="font-[Playfair_Display] text-spice-deep font-bold mb-5"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}
              >
                Hati Kupang
              </h2>
              <p className="text-gray-600 mb-4">
                Nabas Rote Mengkudu Oeba hadir membawa cita rasa khas pulau Rote
                ke meja makan Anda di Kota Kupang. Resep kami diwariskan
                turun-temurun, menggunakan bahan segar pilihan dan bumbu lokal
                yang kaya rasa.
              </p>
              <p className="text-gray-600 mb-4">
                Berlokasi strategis di Jl. Alor No.12, Fatubesi — pusat kota
                Kupang. Cocok untuk makan siang bersama keluarga, acara kantor,
                atau sekadar menikmati makan malam autentik NTT.
              </p>
              <div className="flex flex-col gap-3 mt-6">
                {[
                  "Resep autentik turun-temurun",
                  "Bahan segar setiap hari",
                  "Porsi besar, harga bersahabat",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-spice font-medium">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="flex-shrink-0 text-gold"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
