export const restaurant = {
  name: "Nabas Rote Mengkudu Oeba",
  slug: "nabas-rote-mengkudu-oeba",
  tagline: "Cita Rasa Autentik Pulau Rote",
  description:
    "Rumah makan khas Rote di jantung Kota Kupang. Nikmati masakan tradisional NTT dengan bumbu turun-temurun, porsi melimpah, dan harga bersahabat.",
  address:
    "Jl. Alor No.:12, Fatubesi, Kec. Kota Lama, Kota Kupang, NTT",
  phone: "+62 812-3699-9207",
  waNumber: "6281236999207",
  mapsUrl: "https://maps.google.com/?cid=9453886727903730452",
  rating: 4.3,
  reviewCount: 213,
  heroImage:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=85",
};

export const menuItems = [
  {
    id: "menu-1",
    name: "Ikan Kuah Asam",
    description:
      "Ikan segar dimasak kuah asam segar khas Rote dengan sayuran lokal. Perpaduan asam, pedas, dan gurih yang sempurna.",
    price: 35000,
    imageUrl:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=85",
    badge: "Best Seller" as string | null,
  },
  {
    id: "menu-2",
    name: "Jagung Bose",
    description:
      "Makanan tradisional NTT dari jagung, kacang merah, dan santan. Gurih, legit, dan mengenyangkan. Cocok dipadukan dengan ikan bakar.",
    price: 20000,
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=85",
    badge: "Favorit" as string | null,
  },
  {
    id: "menu-3",
    name: "Ikan Bakar Rote",
    description:
      "Ikan bakar arang dengan sambal dabu-dabu dan lalapan segar. Bumbu oles khas yang bikin nagih.",
    price: 40000,
    imageUrl:
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=85",
    badge: null as string | null,
  },
];

const SVG_CLOCK = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/></svg>`;
const SVG_USERS = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const SVG_MONITOR = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`;
const SVG_BOX = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16"/><path d="M2 21h20"/><path d="M12 3v9"/><path d="M8 12h8"/></svg>`;
const SVG_MAP = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
const SVG_HOME = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;

export const features = [
  {
    id: "feat-1",
    title: "Buka Setiap Hari",
    description: "Melayani makan siang & malam, 7 hari seminggu",
    iconSvg: SVG_CLOCK,
  },
  {
    id: "feat-2",
    title: "Cocok untuk Rombongan",
    description: "Tersedia meja besar untuk keluarga & acara kantor",
    iconSvg: SVG_USERS,
  },
  {
    id: "feat-3",
    title: "Takeaway & Delivery",
    description: "Pesan bawa pulang atau antar via WhatsApp",
    iconSvg: SVG_MONITOR,
  },
  {
    id: "feat-4",
    title: "Bahan Segar Harian",
    description: "Ikan & sayur pasar segar, dimasak setiap pagi",
    iconSvg: SVG_BOX,
  },
  {
    id: "feat-5",
    title: "Lokasi Strategis",
    description: "Pusat kota Kupang, mudah dijangkau dari mana saja",
    iconSvg: SVG_MAP,
  },
  {
    id: "feat-6",
    title: "Suasana Nyaman",
    description: "Ruang makan bersih, adem, dan ramah keluarga",
    iconSvg: SVG_HOME,
  },
];

export const galleryImages = [
  {
    id: "gal-1",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=85",
    altText: "Suasana restoran",
    isTall: true,
    isWide: false,
  },
  {
    id: "gal-2",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=85",
    altText: "Hidangan ikan segar",
    isTall: false,
    isWide: false,
  },
  {
    id: "gal-3",
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=85",
    altText: "Plating makanan",
    isTall: false,
    isWide: false,
  },
  {
    id: "gal-4",
    imageUrl:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    altText: "Area makan",
    isTall: false,
    isWide: true,
  },
  {
    id: "gal-5",
    imageUrl:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=85",
    altText: "Sayuran segar",
    isTall: false,
    isWide: false,
  },
  {
    id: "gal-6",
    imageUrl:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=600&q=85",
    altText: "Nasi dan lauk pauk",
    isTall: true,
    isWide: false,
  },
];

export const reviews = [
  {
    id: "rev-1",
    authorName: "Maria S.",
    authorInitials: "MS",
    authorLocation: "Warga Lokal Kupang",
    rating: 5,
    text: "\"Ikan kuah asamnya juara! Segar banget, bumbu asamnya pas, porsinya juga gede. Harga sangat terjangkau untuk kualitas segini. Wajib coba kalau ke Kupang!\"",
  },
  {
    id: "rev-2",
    authorName: "Jefri T.",
    authorInitials: "JT",
    authorLocation: "Pelancong dari Jakarta",
    rating: 5,
    text: "\"Jagung bose-nya enak banget, legit dan gurih. Ditambah ikan bakar, combo yang sempurna. Tempatnya bersih dan pelayanannya ramah. Recommended!\"",
  },
  {
    id: "rev-3",
    authorName: "Rina N.",
    authorInitials: "RN",
    authorLocation: "Karyawan di Kupang",
    rating: 4,
    text: "\"Sering makan siang di sini bareng teman kantor. Menunya variatif, rasa konsisten enak. Cuma kadang agak ramai pas jam makan siang, tapi worth the wait!\"",
  },
];

export const siteSettings = {
  footerCredit: "Webminds Kupang",
  primaryColor: "#b44527",
  accentColor: "#d4a24e",
};
