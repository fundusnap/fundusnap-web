import {
  Header,
  Hero,
  Features,
  HowItWorks,
  About,
  Achievements,
  Download,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <Achievements />
        <Download />
      </main>
      <Footer />
    </>
  );
}
