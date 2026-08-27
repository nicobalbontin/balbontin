import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectGrid, SkillChips } from "@/components/sections/ProjectGrid";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Nico Balbontin - Designer & Storyteller",
};

export default function HomePage() {
  return (
    <main>
      <header className="bg-surface-white">
        <Container className="py-[var(--ds-spacing-section-xxl)] max-[767px]:py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="type-display mb-6">
                <span className="gradient-text">I am Nico.</span>
                <br />I like to design
                <br />&amp; tell stories
              </h1>
              <p className="type-body mb-8">
                I am a designer with a strong interest in visual storytelling
                with years of experience working both with agencies and
                start-ups.
              </p>
              <Button href="#work" label="See my work" variant="primary" />
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/assets/images/672ba28cf723b3757c4ccc6b_663a404f3eafa7f3b1c41f21_profile-p-800.png.png"
                alt="Nico Balbontin"
                width={800}
                height={790}
                className="w-full object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </header>

      <Section id="work" spacing="lg" bg="ink" aria-labelledby="work-heading">
        <Container>
          <div className="mb-10 text-center">
            <h2 id="work-heading" className="type-h2">
              I design apps, websites &amp; more...
            </h2>
          </div>

          <SkillChips />
          <ProjectGrid />

          <div className="mt-6 grid grid-cols-1 gap-6">
            <div className="overflow-hidden">
              <Image
                src="/assets/images/672e4ca67f708fec19f1f53f_Frame 1000002607.jpg"
                alt="Project preview"
                width={1200}
                height={800}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden">
                <Image
                  src="/assets/images/672e4cea0d0d16bffe27246b_Frame 1410091416.png"
                  alt="Project gallery 1"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/assets/images/672e4ceb0d0d16bffe27260c_Frame 1410091417.png"
                  alt="Project gallery 2"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer variant="light" />
    </main>
  );
}
