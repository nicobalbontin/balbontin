import Image from "next/image";
import { CaseStudyIntro } from "@/components/sections/CaseStudyIntro";
import { AnimatedStat } from "@/components/sections/AnimatedStat";
import { NextProject } from "@/components/sections/NextProject";
import { ReadyToRock } from "@/components/sections/ReadyToRock";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Here & Now - Nico Balbontin",
};

const hmwCards = [
  "How might we enhance customer retention in meditation apps?",
  "How might we help busy individuals manage stress efficiently?",
  "How to ensure emotional and user consistency in our product?",
];

export default function HereNowPage() {
  return (
    <main>
      <CaseStudyIntro
        title="Tracking your mental health with an app."
        description={[
          "Before the 2020 pandemic, the World Health Organization reported that more than 920 million people were affected by mental disorders, with anxiety and depression being the most prevalent conditions.",
          "Our team embraced the task of developing a mobile wellness tracking app as an opportunity to contribute to mental health.",
        ]}
        role={["UX/UI Design", "Prototype", "Research"]}
        client="Here & Now"
        surface="inkSoft"
      />

      <section className="aspect-video w-full bg-neutral-lightest">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/6491a66556072f653d0181b0/656476777c01b4c70f387c93_Here and now01_forwebflow-poster-00001.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/6491a66556072f653d0181b0/656476777c01b4c70f387c93_Here and now01_forwebflow-transcode.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      <Section spacing="lg" bg="inkSoft">
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="type-h3">Research</h2>
            <p className="type-body">
              We gathered over 100 responses with individuals who have
              previously used meditation apps. Our findings revealed that while
              people were aware of the benefits of meditation and experienced
              improvements in their well-being, they struggled to sustain the
              habit of meditation after deleting the app.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <AnimatedStat
              end={82}
              suffix="%"
              label="Meditated before to reduce stress and anxiety"
            />
            <AnimatedStat
              end={55}
              suffix="%"
              label="Users have used Headspace and Calm in the past"
            />
            <AnimatedStat
              end={40}
              suffix="%"
              label="Meditated before, but not in the last 30 days"
            />
          </div>
        </Container>
      </Section>

      <Section
        spacing="none"
        bg="inkSoft"
        className="pb-[var(--ds-spacing-section-lg)] max-[767px]:pb-16"
      >
        <Container>
          <Image
            src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672d18d741aaa58975da49eb_655bb1fc1ce9dc561a406db3_userjourney_herenow2.png"
            alt="User journey map"
            width={1200}
            height={700}
            className="w-full rounded-xl object-cover"
          />
        </Container>
      </Section>

      <Section spacing="lg" bg="violet">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {hmwCards.map((card, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-2xl bg-white/5 p-6"
              >
                <span className="text-3xl font-bold text-white/20">
                  {i + 1}
                </span>
                <p className="text-base font-semibold leading-relaxed">
                  {card}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" bg="indigo" className="text-center">
        <Container size="sm">
          <h2 className="type-h1">
            <span className="text-[#ff6b9d]">MVP</span>
            <br />
            An app that provides{" "}
            <span className="text-[#ff6b9d]">
              personalized meditations and analytics that encourages users to
              stay.
            </span>
          </h2>
        </Container>
      </Section>

      <Section spacing="lg" bg="indigo">
        <Container>
          <div className="grid grid-cols-3 gap-6">
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672d1bcced9719da7d555c78_02_.gif"
              alt="Here & Now prototype 1"
              width={400}
              height={700}
              className="w-full rounded-3xl object-cover"
              unoptimized
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672d1be6a617ed3cb4bc4093_03.gif"
              alt="Here & Now prototype 2"
              width={400}
              height={700}
              className="w-full rounded-3xl object-cover"
              unoptimized
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672d1beea4520c3a1158c803_01.gif"
              alt="Here & Now prototype 3"
              width={400}
              height={700}
              className="w-full rounded-3xl object-cover"
              unoptimized
            />
          </div>
        </Container>
      </Section>

      <section className="aspect-video w-full bg-neutral-lightest">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/6491a66556072f653d0181b0/65648e19f3285f84e05c8d78_Here and now_graphics_webflow-poster-00001.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/6491a66556072f653d0181b0/65648e19f3285f84e05c8d78_Here and now_graphics_webflow-transcode.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672d1c928a7d484c13df2c39_background2.jpg"
          alt="Here & Now meditation background"
          fill
          className="object-cover"
        />
      </section>

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
                <p className="type-small">
                  Sophiko Javakhidze - Research
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { end: 70, suffix: "%", label: "Prefers custom meditations" },
                {
                  end: 65,
                  suffix: "%",
                  label: "Would recommend this app to others",
                },
                {
                  end: 90,
                  suffix: "%",
                  label: "Likely to use for other purposes",
                },
                { end: 75, suffix: "%", label: "Recommend this app to others" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <p className="type-meta">{stat.label}</p>
                  <AnimatedStat end={stat.end} suffix={stat.suffix} label="" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <div className="bg-surface-ink-soft text-white">
        <NextProject currentSlug="here-now" />
      </div>

      <ReadyToRock variant="dark" />
      <Footer variant="dark" />
    </main>
  );
}
