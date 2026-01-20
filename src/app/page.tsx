import {
  Header,
  Hero,
  Features,
  HowItWorks,
  About,
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
        <Download />
      </main>
      <Footer />
    </>
  );
}
