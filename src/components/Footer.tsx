interface FooterProps {
  restaurantName: string;
  description: string;
  footerCredit: string;
  waNumber: string;
  mapsUrl: string;
}

export default function Footer({
  restaurantName,
  description,
  footerCredit,
  waNumber,
  mapsUrl,
}: FooterProps) {
  const navLinks = [
    { href: "#about", label: "Tentang" },
    { href: "#menu", label: "Menu" },
    { href: "#specialties", label: "Keunggulan" },
    { href: "#gallery", label: "Galeri" },
  ];

  const contactLinks = [
    { href: `https://wa.me/${waNumber}`, label: "WhatsApp" },
    { href: mapsUrl, label: "Google Maps", target: "_blank" },
  ];

  return (
    <footer
      className="text-cream py-16 pb-8"
      style={{
        background:
          "linear-gradient(160deg, var(--color-spice-dark), var(--color-spice-deep))",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-12 pb-10 border-b border-white/15 max-md:grid-cols-1 max-md:gap-8">
          <div>
            <h3 className="font-[Playfair_Display] text-2xl text-white mb-1">
              {restaurantName}
            </h3>
            <p className="font-script text-gold-light text-2xl mb-3 -mt-1">
              rasa pulau rote
            </p>
            <p className="text-sm leading-relaxed text-cream/80">{description}</p>
          </div>
          <div>
            <h4 className="font-[DM_Sans] text-sm font-semibold text-gold-light uppercase tracking-[0.2em] mb-4">
              Menu
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-[DM_Sans] text-sm font-semibold text-gold-light uppercase tracking-[0.2em] mb-4">
              Kontak
            </h4>
            <ul className="space-y-2.5">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.target}
                    rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="text-sm text-cream/70 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 text-sm max-md:flex-col max-md:gap-2 max-md:text-center text-cream/70">
          <p>&copy; 2026 {restaurantName}. All rights reserved.</p>
          <p className="text-gold-light font-medium">
            Website by <strong>{footerCredit}</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
