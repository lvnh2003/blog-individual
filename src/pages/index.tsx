
import Layout from "@/components/layout/layout";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
    </Layout>
  );
}
