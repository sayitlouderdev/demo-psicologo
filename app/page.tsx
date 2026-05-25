import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TherapyQuiz } from "@/components/TherapyQuiz";
import { Approach } from "@/components/Approach";
import { OnlineTherapy } from "@/components/OnlineTherapy";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ProcessSteps />
        <TherapyQuiz />
        <Approach />
        <OnlineTherapy />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
