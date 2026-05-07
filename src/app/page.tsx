import {
  Header,
  Hero,
  Features,
  HowItWorks,
  About,
  Achievements,
  Download,
  Footer,
  DomainNotice,
} from "@/components";

export default function Home() {
  return (
    <>
      <DomainNotice />
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
