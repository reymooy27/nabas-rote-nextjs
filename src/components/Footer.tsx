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
    <footer className="bg-gray-900 text-gray-400 py-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-12 pb-10 border-b border-white/8 max-md:grid-cols-1 max-md:gap-8">
          <div>
            <h3 className="font-[Playfair_Display] text-2xl text-white mb-3">
              {restaurantName}
            </h3>
            <p className="text-sm leading-relaxed">{description}</p>
          </div>
          <div>
            <h4 className="font-[DM_Sans] text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Menu
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-[DM_Sans] text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kontak
            </h4>
            <ul className="space-y-2.5">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.target}
                    rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 text-sm max-md:flex-col max-md:gap-2 max-md:text-center">
          <p>&copy; 2026 {restaurantName}. All rights reserved.</p>
          <p className="text-gold font-medium">
            Website by <strong>{footerCredit}</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}