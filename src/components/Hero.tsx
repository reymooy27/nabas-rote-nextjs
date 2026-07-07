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
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, var(--color-spice) 0%, var(--color-spice-dark) 60%, var(--color-spice-deep) 100%)",
        paddingTop: "120px",
        paddingBottom: 0,
      }}
    >
      {/* Decorative grain / vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.5), transparent 60%)",
        }}
      />
      {/* Top eyebrow rule */}
      <div className="relative z-10 eyebrow text-gold-light/90 mb-5 mt-4">
        ROTE · NTT · INDONESIA
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[820px] mb-auto px-6">
        <p className="font-script text-gold-light text-3xl md:text-4xl mb-2 leading-none">
          {tagline}
        </p>
        <h1
          className="font-[Playfair_Display] font-extrabold leading-[0.95] mb-6"
          style={{ fontSize: "clamp(3.2rem, 9vw, 6.5rem)" }}
        >
          {nameLines[0]} {nameLines[1]}
          <br />
          <span className="text-gold-light">{nameLines.slice(2).join(" ")}</span>
        </h1>
        <p className="text-lg text-white/88 mb-9 max-w-[540px] mx-auto">
          {description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={`https://wa.me/${waNumber}?text=Halo%20Nabas%20Rote%2C%20saya%20mau%20pesan%20makan.`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[0.95rem] bg-gold text-spice-deep border-2 border-gold hover:bg-gold-light hover:border-gold-light hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,162,78,0.4)] transition-all duration-300"
          >
            Pesan via WhatsApp
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[0.95rem] bg-transparent text-white border-2 border-white/60 hover:bg-white hover:text-spice-dark hover:border-white transition-all duration-300"
          >
            Lihat Menu
          </a>
        </div>
      </div>

      {/* Framed photo (HANBUT editorial motif) */}
      <div className="relative z-10 mt-12 mb-12 px-6 w-full max-w-[760px]">
        <div className="rounded-[24px] overflow-hidden border-[6px] border-gold/30 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <img
            src={heroImage}
            alt={name}
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 flex items-center gap-8 bg-black/20 backdrop-blur-xl border-t border-white/15 px-12 py-7 mt-auto mb-0 w-full justify-center max-md:flex-wrap max-md:gap-5 max-md:px-6 max-md:py-5">
        <div className="text-center">
          <Counter target={rating} />
          <span className="block text-[0.75rem] uppercase tracking-[0.2em] text-white/70">
            Rating
          </span>
        </div>
        <div className="w-px h-10 bg-white/20 max-md:hidden" />
        <div className="text-center">
          <Counter target={reviewCount} suffix="+" />
          <span className="block text-[0.75rem] uppercase tracking-[0.2em] text-white/70">
            Ulasan
          </span>
        </div>
        <div className="w-px h-10 bg-white/20 max-md:hidden" />
        <div className="text-center">
          <Counter target={15} suffix="+" />
          <span className="block text-[0.75rem] uppercase tracking-[0.2em] text-white/70">
            Menu
          </span>
        </div>
        <div className="w-px h-10 bg-white/20 max-md:hidden" />
        <div className="text-center">
          <span className="font-[Playfair_Display] text-[1.8rem] font-bold text-gold-light max-md:text-xl">
            Harian
          </span>
          <span className="block text-[0.75rem] uppercase tracking-[0.2em] text-white/70">
            Buka Setiap
          </span>
        </div>
      </div>
    </section>
  );
}
