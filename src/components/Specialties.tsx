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
    <section id="specialties" className="py-25 bg-cream max-md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[0.85rem] font-semibold text-gold uppercase tracking-[2px] mb-2 text-center">
          Keunggulan Kami
        </p>
        <h2
          className="font-[Playfair_Display] text-spice-dark mb-12 text-center"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.25 }}
        >
          Kenapa Pilih Nabas Rote?
        </h2>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {features.map((feat, i) => (
            <AnimateOnScroll key={feat.id} delay={(i % 3) * 0.1}>
              <div className="bg-white p-8 rounded-[20px] text-center border border-gray-200 hover:-translate-y-1 hover:shadow-md hover:border-gold transition-all duration-300">
                <div
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-4xl text-white"
                  style={{
                    background: "linear-gradient(135deg, var(--color-spice), var(--color-spice-light))",
                  }}
                >
                  <div
                    className="[&_svg]:w-8 [&_svg]:h-8"
                    dangerouslySetInnerHTML={{ __html: feat.iconSvg }}
                  />
                </div>
                <h4
                  className="font-[Playfair_Display] text-[1.1rem] text-spice-dark mb-2"
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