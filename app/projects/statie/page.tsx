import Image from "next/image";
import { CaseStudyIntro } from "@/components/sections/CaseStudyIntro";
import { NextProject } from "@/components/sections/NextProject";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "StatieApp - Nico Balbontin",
};

const insights = [
  {
    icon: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672902cfec09f3973375703e_layout-left-2-line.svg",
    title: "Machine reliability and availability",
    body: "A recurring issue in the user feedback is the unreliability and insufficient capacity of reverse vending machines, leading to frustration.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672902ce91ed29ffe4922e1c_seedling-line.svg",
    title: "Environmental over Financial Motivation",
    body: "Financial rewards don't appear to provide strong enough incentives to offset the inconvenient process many users experience. The primary motivator seems to be reducing environmental waste.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672902cf6551cea521223b0d_alarm-line.svg",
    title: "Desire for efficient systems",
    body: "There's demand for improving the entire process with modern features such as real-time machine availability, more RVMs around cities, and digital receipts.",
  },
];

export default function StatiePage() {
  return (
    <main>
      <CaseStudyIntro
        title="Making recycling easier for users in a rush."
        description={[
          "Working in collaboration with Statiegeld Nederland and Mr. Fill, we developed an app designed to help users recycle their cans and bottles more efficiently in Amsterdam.",
          "My goal was to establish a cohesive visual identity for Statieapp across all digital touchpoints while enhancing the overall user experience of the app itself.",
        ]}
        role={["UX/UI Design", "Animations", "Brand Identity", "Website"]}
        client="StatieApp"
        surface="statie"
      />

      <section className="aspect-video w-full bg-neutral-lightest">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/67250045a34b9360992cb365%2F672a683cd52430d6380d7e10_STATIEAPP_HEROVID-poster-00001.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/67250045a34b9360992cb365%2F672a683cd52430d6380d7e10_STATIEAPP_HEROVID-transcode.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      <Section spacing="lg" bg="statie">
        <Container>
          <h2 className="type-h3 mb-8">The problem</h2>
          <p className="type-body mb-10 max-w-3xl">
            Since Statigeld introduced its deposit return system, users have
            faced several unexpected challenges. These problems have created
            frustration and are limiting the system&apos;s overall effectiveness in
            promoting recycling.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <Image
                src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6729026f18a5e74cebb0f566_emotion-unhappy-line.svg"
                alt=""
                width={24}
                height={24}
                className="mt-1 shrink-0 opacity-60"
              />
              <div>
                <h3 className="mb-2 font-semibold opacity-60">
                  Machine malfunctions and delays
                </h3>
                <p className="type-small">
                  Make the user flow very obvious and easy to understand. More
                  cognitive thinking adds more friction.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/67261abebfc24b3f5b420606_hand-heart-line.svg"
                alt=""
                width={24}
                height={24}
                className="mt-1 shrink-0 opacity-60"
              />
              <div>
                <h3 className="mb-2 font-semibold opacity-60">
                  Unappealing reward system
                </h3>
                <p className="type-small">
                  Instead of showing all products, think of categories.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        spacing="none"
        bg="statie"
        className="pb-[var(--ds-spacing-section-lg)] max-[767px]:pb-16"
      >
        <Container>
          <Image
            src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6729018ba471c6a5c995fe2c_Frame%2039762.jpg"
            alt="StatieApp overview"
            width={1200}
            height={700}
            className="w-full rounded-xl object-cover"
          />
        </Container>
      </Section>

      <Section spacing="lg" bg="statieAlt">
        <Container>
          <h2 className="type-h3 mb-4">Main Insights</h2>
          <p className="type-body mb-12 max-w-2xl">
            After conducting many interviews with users and stakeholders, we
            identified several key pain points that present valuable
            opportunities for improvement.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {insights.map((item) => (
              <div key={item.title} className="flex gap-4">
                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="mt-1 shrink-0 opacity-60"
                />
                <div>
                  <h3 className="mb-2 text-base font-semibold opacity-60">
                    {item.title}
                  </h3>
                  <p className="type-small">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        spacing="none"
        bg="statieAlt"
        className="pb-[var(--ds-spacing-section-lg)] max-[767px]:pb-16"
      >
        <Container>
          <div className="mb-6 grid grid-cols-2 gap-6">
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/67290210093b9b3c6959ee0e_dude_cleaning.jpg"
              alt="User research"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover"
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6729021ef1d1f97c864502fc_linewaiting.jpg"
              alt="Line waiting"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section spacing="lg" bg="statieAlt">
        <Container className="text-center">
          <h2 className="type-h1 mx-auto max-w-3xl">
            <span className="text-[#4d65ff]">How might</span> we streamline
            the recycling process to make it a quick, and rewarding experience
            for users?
          </h2>
        </Container>
      </Section>

      <Section spacing="lg" bg="statieBlue">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="type-h3">Ideation</h2>
            <p className="type-body">
              After conducting many exploratory interviews and doing usability
              tests with the current page, we concluded that designing distinct
              user flows for both pre- and post-purchase stages is essential.
              This underscored the importance of organizing and prioritizing
              information to create a successful, user-centered website.
            </p>
          </div>
        </Container>
      </Section>

      <Section
        spacing="none"
        bg="statieBlue"
        className="pb-[var(--ds-spacing-section-lg)] max-[767px]:pb-16"
      >
        <Container>
          <div className="mb-6 grid grid-cols-2 gap-6">
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/67290365ddd321c5845ef607_statieapplogo.png"
              alt="StatieApp logo"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover"
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6729031a7cad8079d1d6b4f6_statie_app_logo.png"
              alt="StatieApp logo variation"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <Image
            src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6729031ae2333effa57a8319_Colors.png"
            alt="Color palette"
            width={1200}
            height={700}
            className="w-full rounded-xl object-cover"
          />
        </Container>
      </Section>

      <Section
        spacing="none"
        bg="statieBlue"
        className="pb-[var(--ds-spacing-section-lg)] max-[767px]:pb-16"
      >
        <Container>
          <div className="grid grid-cols-2 gap-6">
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672e39835291b9cd24c18af7_Statieapp_mockup_export.gif"
              alt="App prototype 1"
              width={600}
              height={800}
              className="w-full rounded-2xl object-cover"
              unoptimized
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672e39ac4e6f6aff1193394a_Statieapp_mockup_export_1.gif"
              alt="App prototype 2"
              width={600}
              height={800}
              className="w-full rounded-2xl object-cover"
              unoptimized
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672e39e07ae862524b2bf033_Statieapp_mockup_export_2.gif"
              alt="App prototype 3"
              width={600}
              height={800}
              className="w-full rounded-2xl object-cover"
              unoptimized
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672e3a9927a9ee35395e60fc_Statieapp_mockup_export_3.gif"
              alt="App prototype 4"
              width={600}
              height={800}
              className="w-full rounded-2xl object-cover"
              unoptimized
            />
          </div>
        </Container>
      </Section>

      <Section spacing="lg" bg="statieBlue">
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="type-h3">Website</h2>
            <p className="type-body">
              After completing the app, I was tasked with creating a website to
              encourage users to download and explore it. The primary goal was
              to showcase a premium product experience, capturing users&apos;
              attention while providing a concise overview of the app&apos;s
              functionality and key benefits.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6729031a6e29bc270a8da040_statieapp_website.png"
              alt="StatieApp website"
              width={1200}
              height={700}
              className="w-full rounded-xl object-cover"
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6729031a317f88103c165d65_Frame%201597880507.png"
              alt="StatieApp website detail"
              width={1200}
              height={700}
              className="w-full rounded-xl object-cover"
            />
          </div>
        </Container>
      </Section>

      <div className="bg-surface-indigo text-white">
        <NextProject currentSlug="statie" />
      </div>

      <Footer variant="light" />
    </main>
  );
}
