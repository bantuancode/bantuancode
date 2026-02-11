import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";
import { FAQ } from "@/components/sections/home/FAQ";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { Hero } from "@/components/sections/home/Hero";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { Portfolio } from "@/components/sections/home/Portfolio";
import { Services } from "@/components/sections/home/Services";
import { SocialProof } from "@/components/sections/home/SocialProof";
import { TechStack } from "@/components/sections/home/TechStack";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { ValueProposition } from "@/components/sections/home/ValueProposition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Coding untuk Mahasiswa IT - Mulai Rp 200.000",
  description:
    "Bantuancode hadir untuk membantu mahasiswa IT menyelesaikan tugas coding. Web, mobile, machine learning, cybersecurity, IoT. Cepat, berkualitas, terjangkau.",
  alternates: {
    canonical: "https://bantuancode.my.id",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <TechStack />
      <HowItWorks />
      <ValueProposition />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
