import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Specialties from "@/components/Specialties";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

export const dynamic = "force-dynamic";

async function getRestaurant() {
  try {
    return await prisma.restaurant.findFirst({
      where: { slug: "nabas-rote-mengkudu-oeba" },
      include: {
        menuItems: { where: { isActive: true }, orderBy: { sortOrder: "asc" } },
        features: { orderBy: { sortOrder: "asc" } },
        galleryImages: { orderBy: { sortOrder: "asc" } },
        reviews: { orderBy: { sortOrder: "asc" } },
        siteSettings: true,
      },
    });
  } catch {
    return null;
  }
}

export default async function Home() {
  const restaurant = await getRestaurant();

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 font-[Playfair_Display]">
            Nabas Rote Mengkudu Oeba
          </h1>
          <p className="text-gray-500">
            Database belum terhubung. Pastikan file <code className="bg-gray-100 px-1 rounded">.env</code> sudah
            dikonfigurasi, lalu jalankan:
          </p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4 text-sm text-left">
            npx prisma db push{"\n"}npm run db:seed
          </pre>
        </div>
      </div>
    );
  }

  const footerCredit =
    restaurant.siteSettings.find((s: { key: string; value: string }) => s.key === "footerCredit")?.value || "";

  return (
    <>
      <Navbar
        restaurantName="Nabas Rote"
        waNumber={restaurant.waNumber}
      />
      <main>
        <Hero
          name={restaurant.name}
          tagline={restaurant.tagline || ""}
          description={restaurant.description || ""}
          heroImage={restaurant.heroImage || ""}
          waNumber={restaurant.waNumber}
          rating={restaurant.rating}
          reviewCount={restaurant.reviewCount}
        />
        <About />
        <MenuSection
          items={restaurant.menuItems.map((item) => ({
            ...item,
            price: Number(item.price),
          }))}
          waNumber={restaurant.waNumber}
        />
        <Specialties features={restaurant.features} />
        <Gallery images={restaurant.galleryImages} />
        <Reviews reviews={restaurant.reviews} />
        <Contact
          address={restaurant.address || ""}
          phone={restaurant.phone || ""}
          waNumber={restaurant.waNumber}
          mapsUrl={restaurant.mapsUrl || ""}
        />
      </main>
      <Footer
        restaurantName="Nabas Rote"
        description="Rumah makan khas Rote di jantung Kota Kupang. Cita rasa autentik NTT, harga bersahabat."
        footerCredit={footerCredit}
        waNumber={restaurant.waNumber}
        mapsUrl={restaurant.mapsUrl || ""}
      />
      <WaFloat waNumber={restaurant.waNumber} />
    </>
  );
}