import AnimateOnScroll from "./AnimateOnScroll";
import ReservationForm from "./ReservationForm";

interface ContactProps {
  address: string;
  phone: string;
  waNumber: string;
  mapsUrl: string;
}

export default function Contact({ address, phone, waNumber, mapsUrl }: ContactProps) {
  return (
    <section id="contact" className="py-25 bg-gray-50 max-md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[0.85rem] font-semibold text-gold uppercase tracking-[2px] mb-2 text-center">
          Hubungi Kami
        </p>
        <h2
          className="font-[Playfair_Display] text-spice-dark mb-12 text-center"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.25 }}
        >
          Pesan & Tanya
        </h2>
        <div className="grid grid-cols-2 gap-12 items-start max-md:grid-cols-1 max-md:gap-8">
          {/* Info */}
          <AnimateOnScroll>
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 text-spice mt-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong className="block text-spice-dark text-[0.95rem] mb-0.5">
                    Alamat
                  </strong>
                  <p className="text-gray-600 text-sm">{address}</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 text-spice mt-1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <strong className="block text-spice-dark text-[0.95rem] mb-0.5">
                    Telepon / WhatsApp
                  </strong>
                  <p className="text-gray-600 text-sm">
                    <a
                      href={`https://wa.me/${waNumber}`}
                      className="text-spice font-medium hover:underline"
                    >
                      {phone}
                    </a>
                  </p>
                </div>
              </div>
              {/* Maps */}
              <div className="flex gap-4 items-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 text-spice mt-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong className="block text-spice-dark text-[0.95rem] mb-0.5">
                    Google Maps
                  </strong>
                  <p className="text-gray-600 text-sm">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-spice font-medium hover:underline"
                    >
                      Buka di Google Maps →
                    </a>
                  </p>
                </div>
              </div>
              {/* Map embed */}
              <div className="mt-2">
                <iframe
                  src="https://maps.google.com/maps?q=-10.1788,123.6070&z=15&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: 12 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll delay={0.1}>
            <div className="bg-white p-9 rounded-[20px] shadow-md max-md:p-6">
              <ReservationForm waNumber={waNumber} />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}