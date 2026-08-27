import Image from "next/image";
import { CaseStudyIntro } from "@/components/sections/CaseStudyIntro";
import { AnimatedStat } from "@/components/sections/AnimatedStat";
import { NextProject } from "@/components/sections/NextProject";
import { ReadyToRock } from "@/components/sections/ReadyToRock";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Neoke - Nico Balbontin",
};

export default function NeokePage() {
  return (
    <main className="bg-surface-offwhite">
      <CaseStudyIntro
        title="Connecting your personal info with AR"
        description={[
          "Neoke empowers travelers with a digital wallet for identification processes. With Neoke, users can conveniently manage their digital information, providing easy access to hotels, airports, and security checkpoints during their trip.",
          "Neoke presented the goal of designing and integrating an autofill feature for paper forms, that would allow their users to navigate check-in processes also outside of the platform ecosystem.",
        ]}
        role={["UX/UI Design", "Prototype", "Research"]}
        client="Neoke"
        surface="offwhite"
      />

      <section className="aspect-video w-full bg-neutral-lightest">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/6491a66556072f653d0181b0/65645ef0b0669b030c7de147_Neoke1_for_webflow-poster-00001.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/6491a66556072f653d0181b0/65645ef0b0669b030c7de147_Neoke1_for_webflow-transcode.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      <Section spacing="lg" bg="offwhite">
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="type-h3">Research</h2>
            <p className="type-body">
              We conducted a survey to learn about user travel preferences and
              behaviors. The results surprised us, as check-in and form filling
              in hotels particularly weren&apos;t pain points. Instead, booking
              flights, hotels and filling forms in other languages were the
              main concerns.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-3 gap-8">
            <AnimatedStat end={48} suffix="%" label="Travels 3+ per year" />
            <AnimatedStat end={94} suffix="%" label="Stays in hotels" />
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-bold leading-none md:text-5xl">
                0%
              </span>
              <span className="type-small">Check-in challenging</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                img: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672ccf8859fb19b67879d254_Image%20Wrapper.png",
                quote:
                  '"I use Google Maps when I want to go from point A to point B. Sometimes I use it because I don\'t want to think"',
              },
              {
                img: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672ccf89e3991f7df5776912_Rectangle%20384.png",
                quote:
                  '"Wasting time is the main challenge to fill out the form. I want to know what I have to fill in advance, not on the spot"',
              },
              {
                img: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672ccf89cdb826e772bd2583_Rectangle%20383.png",
                quote:
                  '"I booked online through a platform, but I had to fill paper forms at the counter. It took me at least 40 minutes"',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-xl border border-border p-6"
              >
                <Image
                  src={item.img}
                  alt="Research participant"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <p
                  className="type-small"
                  dangerouslySetInnerHTML={{ __html: item.quote }}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" bg="indigoDark">
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="type-h3">Design System</h2>
            <p className="type-body">
              Following the IOS Design guidelines, we developed fundamental
              components and their variations in Figma to construct the user
              interface. This entailed incorporating over 40 icons and creating
              more than 70 new components while ensuring accessibility and
              compliance with WCAG standards.
            </p>
          </div>
          <div className="mb-6 grid grid-cols-2 gap-6">
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672cddcf5ce5560a3b673a1b_Group-39603.png"
              alt="Neoke design system components"
              width={600}
              height={300}
              className="w-full object-cover"
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672cddd05ce5560a3b673a23_Group-39603.png"
              alt="Neoke design system colors"
              width={600}
              height={300}
              className="w-full object-cover"
            />
          </div>
          <Image
            src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672cddd05ce5560a3b673a2f_Frame-39701-1.png"
            alt="Neoke full design system"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </Container>
      </Section>

      <Section spacing="lg" bg="black">
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="type-h3">High Fidelity</h2>
            <p className="type-body">
              We prototyped our solution in Figma, incorporating insights from
              mid-fidelity testing and Style tile guidelines. Our prototype
              focuses on key app features: Check-in process, ARV live
              navigation and wallet navigation.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672ce64b2ff71e18264aa3b8_Navigation.gif"
              alt="Navigation prototype"
              width={400}
              height={700}
              className="w-full rounded-3xl object-cover"
              unoptimized
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672ce67713f5441db29fc35f_Alergy.gif"
              alt="Allergy prototype"
              width={400}
              height={700}
              className="w-full rounded-3xl object-cover"
              unoptimized
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672ce67713f5441db29fc37f_navigation_info2.gif"
              alt="Navigation info prototype"
              width={400}
              height={700}
              className="w-full rounded-3xl object-cover"
              unoptimized
            />
          </div>
        </Container>
      </Section>

      <Section spacing="lg" bg="white">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[auto_1fr]">
            <div className="flex flex-col gap-8">
              <div>
                <p className="type-meta mb-1">Year</p>
                <p className="type-body">2023</p>
              </div>
              <div>
                <p className="type-meta mb-1">Team</p>
                <div className="type-small">
                  <p>Thanos S - Lead Designer</p>
                  <p>Sebastian Honores - CPO</p>
                  <p>Serena Rizzo - PM</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                {
                  end: 4,
                  suffix: "x faster",
                  label: "Speed filling out paper form",
                },
                {
                  end: 90,
                  suffix: "%",
                  label: "Likely to use it for traveling",
                },
                {
                  end: 85,
                  suffix: "%",
                  label: "Likely to use it for other purposes",
                },
                {
                  end: 75,
                  suffix: "%",
                  label: "Recommend this app to others",
                },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <p className="type-meta">{stat.label}</p>
                  <AnimatedStat
                    end={stat.end}
                    suffix={stat.suffix}
                    label=""
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <div className="bg-surface-indigo text-white">
        <NextProject currentSlug="neoke" />
      </div>

      <ReadyToRock variant="dark" />
      <Footer variant="dark" />
    </main>
  );
}
