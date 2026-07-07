import AnimateOnScroll from "./AnimateOnScroll";

interface Feature {
  id: string;
  title: string;
  description: string | null;
  iconSvg: string;
}

interface SpecialtiesProps {
  features: Feature[];
}

export default function Specialties({ features }: SpecialtiesProps) {
  return (
    <section id="specialties" className="py-25 bg-cream-deep max-md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="eyebrow text-gold mb-2 text-center">Keunggulan Kami</p>
        <h2
          className="font-[Playfair_Display] text-spice-deep font-bold mb-3 text-center"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}
        >
          Kenapa Pilih Nabas Rote?
        </h2>
        <p className="text-center text-gray-600 max-w-[560px] mx-auto mb-12">
          Tiga hal yang membuat setiap kunjungan terasa seperti pulang ke rumah.
        </p>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {features.map((feat, i) => (
            <AnimateOnScroll key={feat.id} delay={(i % 3) * 0.1}>
              <div className="bg-cream p-8 rounded-[20px] text-center border border-gold/20 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(180,69,39,0.12)] hover:border-gold/50 transition-all duration-300">
                <div
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-4xl text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-spice), var(--color-spice-deep))",
                  }}
                >
                  <div
                    className="[&_svg]:w-8 [&_svg]:h-8"
                    dangerouslySetInnerHTML={{ __html: feat.iconSvg }}
                  />
                </div>
                <h4
                  className="font-[Playfair_Display] text-[1.2rem] text-spice-deep mb-2 font-semibold"
                  style={{ lineHeight: 1.25 }}
                >
                  {feat.title}
                </h4>
                <p className="text-gray-600 text-[0.85rem]">{feat.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
