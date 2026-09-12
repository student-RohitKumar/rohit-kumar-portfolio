import { FloatingNav } from "@/components/navigation/floating-nav";
import { HeroSection } from "@/components/hero/hero-section";
import { VisualStorySection } from "@/components/about/visual-story-section";
import { IntroStatementSection } from "@/components/about/intro-statement-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { HowIBuildSection } from "@/components/about/how-i-build-section";
import { NumbersSection } from "@/components/about/numbers-section";
import { AboutSection } from "@/components/about/about-section";
import { LinksSection } from "@/components/contact/links-section";
import { ContactSection } from "@/components/contact/contact-section";
import { LenisProvider } from "@/components/animations/lenis-provider";
import { ScrollAnimations } from "@/components/animations/scroll-animations";
import { CustomCursor } from "@/components/animations/custom-cursor";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rohit Kumar",
  jobTitle: "AI Engineer",
  url: "https://rohitkumar.dev/",
  email: "mailto:rohitcloud8543@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kanpur",
    addressCountry: "India",
  },
  sameAs: [
    "https://www.linkedin.com/in/rohit-kumar-437514330/",
    "https://github.com/student-RohitKumar",
    "https://www.nextaitoday.in/",
  ],
  description:
    "AI Engineer building production RAG systems, AI products, and intelligent developer experiences.",
};

export default function HomePage() {
  return (
    <LenisProvider>
      <FloatingNav />
      <CustomCursor />
      <main className="bg-[#070707] text-zinc-100">
        <HeroSection />
        <VisualStorySection />
        <IntroStatementSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <HowIBuildSection />
        <NumbersSection />
        <AboutSection />
        <LinksSection />
        <ContactSection />
      </main>
      <ScrollAnimations />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
    </LenisProvider>
  );
}
