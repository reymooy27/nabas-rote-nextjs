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
import {
  restaurant,
  menuItems,
  features,
  galleryImages,
  reviews,
  siteSettings,
} from "@/data/restaurant";

export default function Home() {
  return (
    <>
      <Navbar
        restaurantName="Nabas Rote"
        waNumber={restaurant.waNumber}
      />
      <main>
        <Hero
          name={restaurant.name}
          tagline={restaurant.tagline}
          description={restaurant.description}
          heroImage={restaurant.heroImage}
          waNumber={restaurant.waNumber}
          rating={restaurant.rating}
          reviewCount={restaurant.reviewCount}
        />
        <About />
        <MenuSection items={menuItems} waNumber={restaurant.waNumber} />
        <Specialties features={features} />
        <Gallery images={galleryImages} />
        <Reviews reviews={reviews} />
        <Contact
          address={restaurant.address}
          phone={restaurant.phone}
          waNumber={restaurant.waNumber}
          mapsUrl={restaurant.mapsUrl}
        />
      </main>
      <Footer
        restaurantName="Nabas Rote"
        description="Rumah makan khas Rote di jantung Kota Kupang. Cita rasa autentik NTT, harga bersahabat."
        footerCredit={siteSettings.footerCredit}
        waNumber={restaurant.waNumber}
        mapsUrl={restaurant.mapsUrl}
      />
      <WaFloat waNumber={restaurant.waNumber} />
    </>
  );
}
