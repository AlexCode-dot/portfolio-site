import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { getFeaturedProjects } from "@/lib/projects";

export default async function HomePage() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection projects={projects} />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
