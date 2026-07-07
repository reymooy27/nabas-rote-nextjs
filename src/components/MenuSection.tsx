import AnimateOnScroll from "./AnimateOnScroll";

interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  badge: string | null;
}

interface MenuProps {
  items: MenuItem[];
  waNumber: string;
}

export default function MenuSection({ items, waNumber }: MenuProps) {
  return (
    <section id="menu" className="py-25 bg-gray-50 max-md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[0.85rem] font-semibold text-gold uppercase tracking-[2px] mb-2 text-center">
          Menu Kami
        </p>
        <h2
          className="font-[Playfair_Display] text-spice-dark mb-4 text-center"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.25 }}
        >
          Pilihan Favorit
        </h2>
        <p className="text-gray-600 max-w-[560px] mx-auto mb-12 text-center">
          Masakan rumahan khas Rote & NTT yang menggugah selera. Semua dimasak
          fresh setiap hari.
        </p>
        <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1">
          {items.map((item, i) => (
            <AnimateOnScroll key={item.id} delay={(i % 3) * 0.1}>
              <div className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="relative overflow-hidden h-60">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-106"
                    />
                  )}
                  {item.badge && (
                    <span
                      className={`absolute top-4 left-4 px-3.5 py-1 rounded-full text-[0.75rem] font-semibold uppercase tracking-wide ${
                        item.badge === "Favorit"
                          ? "bg-gold text-white"
                          : "bg-spice text-white"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3
                    className="font-[Playfair_Display] text-[1.3rem] text-spice-dark mb-2"
                    style={{ lineHeight: 1.25 }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-[Playfair_Display] text-[1.3rem] font-bold text-spice">
                      Rp {item.price.toLocaleString("id-ID")}
                    </span>
                    <a
                      href={`https://wa.me/${waNumber}?text=Halo%2C%20saya%20mau%20pesan%20${encodeURIComponent(item.name)}.`}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[0.85rem] font-semibold bg-spice text-white hover:bg-spice-dark transition-colors"
                    >
                      Pesan
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}