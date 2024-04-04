import About from "@/components/About/About";
import HowWork from "@/components/HowWork/HowWork";
import Services from "@/components/Services/Services";
import TechnicalSol from "@/components/technicalSol/TechnicalSol";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <About />
      <HowWork />
      <Services />
      <TechnicalSol />
    </>
  );
}
