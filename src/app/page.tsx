import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProgramOverview } from "@/components/sections/program";
import { StatisticsSection } from "@/components/sections/statistics";
import { CurriculumSection } from "@/components/sections/curriculum";
import { ExperientialLearning } from "@/components/sections/experiential";
import { InnovationLabs } from "@/components/sections/innovation-labs";
import { MentorshipSection } from "@/components/sections/mentorship";
import { CsrImpactSection } from "@/components/sections/csr-impact";
import { WhySparkSection } from "@/components/sections/why-spark";
import { RoadmapSection } from "@/components/sections/roadmap";
import { GallerySection } from "@/components/sections/gallery";
import { PartnersSection } from "@/components/sections/partners";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatisticsSection />
      <ProgramOverview />
      <CurriculumSection />
      <ExperientialLearning />
      <InnovationLabs />
      <MentorshipSection />
      <CsrImpactSection />
      <WhySparkSection />
      <RoadmapSection />
      <GallerySection />
      <PartnersSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
