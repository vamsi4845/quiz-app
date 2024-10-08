import Community from "@/components/Community";
import FeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full bg-[#0F0F10] text-[#E7E7E4]">
      <section className="w-full min-h-screen px-5 flex flex-col">
        <Navbar />
        <HeroSection />
      </section>
      <FeaturesSection />
      <Community />
      <Footer />
    </main>
  );
}
