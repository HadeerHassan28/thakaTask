import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import TechnicalSol from "@/components/technicalSol/TechnicalSol";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <About />
      <Services />
      <TechnicalSol />
    </>
  );
}
