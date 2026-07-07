import Counter from "./Counter";

interface HeroProps {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  waNumber: string;
  rating: number;
  reviewCount: number;
}

export default function Hero({
  name,
  tagline,
  description,
  heroImage,
  waNumber,
  rating,
  reviewCount,
}: HeroProps) {
  const nameLines = name.split(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url('${heroImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "120px",
        paddingBottom: 0,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(140,53,32,0.75)] to-[rgba(17,24,39,0.9)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[720px] mb-auto pt-10 px-6">
        <p className="text-sm tracking-[3px] uppercase text-gold-light mb-4 font-semibold">
          {tagline}
        </p>
        <h1
          className="font-[Playfair_Display] font-bold leading-[1.1] mb-5"
          style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
        >
          {nameLines[0]} {nameLines[1]}
          <br />
          {nameLines.slice(2).join(" ")}
        </h1>
        <p className="text-lg text-white/85 mb-9 max-w-[520px] mx-auto">
          {description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={`https://wa.me/${waNumber}?text=Halo%20Nabas%20Rote%2C%20saya%20mau%20pesan%20makan.`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[0.95rem] bg-spice text-white border-2 border-spice hover:bg-spice-dark hover:border-spice-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(180,69,39,0.35)] transition-all duration-300"
          >
            Pesan via WhatsApp
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[0.95rem] bg-transparent text-white border-2 border-white/60 hover:bg-white hover:text-spice hover:border-white transition-all duration-300"
          >
            Lihat Menu
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 flex items-center gap-8 bg-white/10 backdrop-blur-xl border border-white/15 rounded-[20px] px-12 py-7 mt-auto mb-12 max-md:flex-wrap max-md:gap-5 max-md:px-6 max-md:py-5 max-md:justify-center">
        <div className="text-center">
          <Counter target={rating} />
          <span className="block text-[0.8rem] uppercase tracking-wide text-white/70">Rating</span>
        </div>
        <div className="w-px h-10 bg-white/20 max-md:hidden" />
        <div className="text-center">
          <Counter target={reviewCount} suffix="+" />
          <span className="block text-[0.8rem] uppercase tracking-wide text-white/70">Ulasan</span>
        </div>
        <div className="w-px h-10 bg-white/20 max-md:hidden" />
        <div className="text-center">
          <Counter target={15} suffix="+" />
          <span className="block text-[0.8rem] uppercase tracking-wide text-white/70">Menu</span>
        </div>
        <div className="w-px h-10 bg-white/20 max-md:hidden" />
        <div className="text-center">
          <span className="font-[Playfair_Display] text-[1.8rem] font-bold text-gold-light max-md:text-xl">
            Harian
          </span>
          <span className="block text-[0.8rem] uppercase tracking-wide text-white/70">Buka Setiap</span>
        </div>
      </div>
    </section>
  );
}