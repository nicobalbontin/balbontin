import Image from "next/image";
import { CaseStudyIntro } from "@/components/sections/CaseStudyIntro";
import { NextProject } from "@/components/sections/NextProject";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "HeatTransformers - Nico Balbontin",
};

const insights = [
  {
    icon: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/67261abe4999bb6a4e4308d2_emotion-normal-line.svg",
    title: "Do not make users think",
    body: "Make the user flow very obvious and easy to understand. More cognitive thinking adds more friction. Give one M&M at a time: Users do not mind clicking, but thinking is a problem.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/67261abe971e4c01b9f0ee56_layout-5-line.svg",
    title: "Give fewer options and think of bundles",
    body: "Instead of showing all products, think of categories. In this case, it is First Hybrid or all Electric. Everything else comes below.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/67261abedc59efafc1c75632_line-chart-fill.svg",
    title: "Present information gradually",
    body: "Main key points first, and add detailed information as the user deepens in the flow. Give one M&M at a time: Users do not mind clicking, but thinking is a problem.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/67261abebfc24b3f5b420606_hand-heart-line.svg",
    title: "First give, then ask",
    body: "Show your unique solution to users before asking them to do something. First introduce yourself, then talk about benefits, explain what you offer to them before you ask to fill a form or give you more specific information.",
  },
];

export default function HeatTransformersPage() {
  return (
    <main>
      <CaseStudyIntro
        title="Simplifying the buying process of heat pumps"
        description={[
          "HeatTransformers is the first digital company in the Netherlands dedicated exclusively to the sale, consultation, installation, and servicing of heat pumps. However, selecting the right heat pump is complex, as each model varies and every home has unique requirements.",
          "I was brought into this project to redesign their entire website, creating a streamlined and user-friendly experience to simplify a traditionally complicated purchasing process.",
        ]}
        role={["UX/UI Design", "Website redesign", "Animations"]}
        client="HeatTransformers"
        surface="ht"
      />

      <section className="aspect-video w-full bg-surface-ht">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/67250045a34b9360992cb365%2F672e16fdc9fbcac28738e19e_HT-Hero-poster-00001.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/67250045a34b9360992cb365%2F672e16fdc9fbcac28738e19e_HT-Hero-transcode.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      <Section spacing="lg" bg="ht">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="type-h3">The problem</h2>
            <div className="flex flex-col gap-4">
              <p className="type-body">
                HeatTransformers is the first digital company in the
                Netherlands dedicated exclusively to the sale, consultation,
                installation, and servicing of heat pumps. However, selecting
                the right heat pump is complex, as each model varies and every
                home has unique requirements.
              </p>
              <ul className="flex flex-col gap-3 type-body">
                <li>
                  The website is heavily product-focused, which makes it
                  difficult for potential buyers to find relevant information
                  and make informed choices.
                </li>
                <li>
                  Although the site offers quality products, it lacks a
                  user-friendly journey to guide users through their unique
                  needs, eligibility, and suitability.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="none" bg="ht" className="pb-[var(--ds-spacing-section-lg)] max-[767px]:pb-16">
        <Container>
          <Image
            src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6725eecfdecf325d8c29896b_Frame%2039762.png"
            alt="HeatTransformers wireframes"
            width={1200}
            height={700}
            className="w-full rounded-xl object-cover"
          />
        </Container>
      </Section>

      <Section spacing="lg" bg="ht">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="type-h3">Jobs to be done</h2>
            <div className="flex flex-col gap-4">
              <p className="type-body">
                After conducting many exploratory interviews and doing
                usability tests with the current page, we concluded that
                designing distinct user flows for both pre- and post-purchase
                stages is essential. This underscored the importance of
                organizing and prioritizing information to create a successful,
                user-centered website.
              </p>
              <ul className="flex flex-col gap-3 type-body">
                <li>
                  Educate and inspire prospective customers toward a
                  sustainable transition.
                </li>
                <li>
                  Provide a streamlined, personalized purchase journey and
                  support system.
                </li>
                <li>
                  Enable installers and build trust with proven quality and
                  savings guarantees.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="none" bg="ht" className="pb-[var(--ds-spacing-section-lg)] max-[767px]:pb-16">
        <Container>
          <div className="grid grid-cols-2 gap-6">
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6725f15421cb1e4811c8e9cc_All-%20E_1.gif"
              alt="HeatTransformers desktop prototype"
              width={600}
              height={400}
              className="w-full rounded-xl object-cover"
              unoptimized
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/672619716a85fdbae2c81e08_HT_MOBILE3.gif"
              alt="HeatTransformers mobile prototype"
              width={600}
              height={400}
              className="w-full rounded-xl object-cover"
              unoptimized
            />
          </div>
          <div className="mt-6">
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6725efd6b3d50e7135e9b6c6_Frame%2039762.jpg"
              alt="HeatTransformers final design"
              width={1200}
              height={700}
              className="w-full rounded-xl object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section spacing="lg" bg="ht">
        <Container>
          <h2 className="type-h3 mb-4">Main insights</h2>
          <p className="type-body mb-12 max-w-2xl">
            Redesigning the page was a challenging task, particularly when it
            came to organizing information and establishing a clear hierarchy
            for diverse user needs. After the page went live, I gathered
            several key takeaways from the experience.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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

      <Section spacing="none" bg="ht" className="pb-[var(--ds-spacing-section-lg)] max-[767px]:pb-16">
        <Container>
          <Image
            src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6728a3114e544539ab752cc8_Mobile%20sample.jpg"
            alt="Mobile sample screens"
            width={1200}
            height={700}
            className="mb-6 w-full rounded-xl object-cover"
          />
          <div className="grid grid-cols-2 gap-6">
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6728a40608a7d61e9f7b4c47_Sample%20Phone.jpg"
              alt="Sample phone screens"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover"
            />
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6728a40630be4e4c95d86174_Sample_Icons.jpg"
              alt="Sample icons"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </Container>
      </Section>

      <div className="bg-surface-ht">
        <NextProject currentSlug="heat-transformers" />
      </div>

      <Footer variant="light" />
    </main>
  );
}
