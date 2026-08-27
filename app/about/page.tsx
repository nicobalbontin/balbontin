import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Footer } from "@/components/layout/Footer";
import { ReadyToRock } from "@/components/sections/ReadyToRock";

export const metadata = {
  title: "About - Nico Balbontin",
};

const aboutImages = [
  {
    src: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672e3eca7a668d04e25d6cee_01.jpg",
    alt: "About photo 1",
  },
  {
    src: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672e3ec97a668d04e25d6c8d_01_.jpg",
    alt: "About photo 2",
  },
  {
    src: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672e3ec97a668d04e25d6cc5_Design%20sprints%20need%20iteration%20_%20Inside%20Design%20Blog.jpeg",
    alt: "Design sprints",
  },
  {
    src: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672e3eca7a668d04e25d6cfa_03.jpg",
    alt: "About photo 3",
  },
  {
    src: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672e3eca7a668d04e25d6d27_01_.jpg",
    alt: "About photo 4",
  },
  {
    src: "https://cdn.prod.website-files.com/67250045a34b9360992cb365/672e3eca7a668d04e25d6cd5_03_.jpg",
    alt: "About photo 5",
  },
];

const facts = [
  {
    emoji: "🎨",
    title: "Playing with Procreate",
    body: "I've recently begun exploring Procreate and refining my drawing skills on my iPad. It's been an incredibly immersive experience, and I'm eager to improve my illustration abilities. My aim is to inject more personality into the products I design.",
    link: null,
  },
  {
    emoji: "🎬",
    title: "Documentaries",
    body: "I get a real kick out of simplifying intricate problems or ideas into captivating stories that resonate with a wide audience. The thrill of crafting a tale that sparks online discussions is incredibly satisfying.",
    link: { href: "https://nbalbontin.myportfolio.com", label: "Examples of my work" },
  },
  {
    emoji: "🧘",
    title: "Meditation",
    body: "In a world filled with constant distractions, and endless thoughts, meditation is my go-to for staying focused and unleashing my creativity. Recently, I did a life-changing 10-day silent retreat, and I can't wait to do more in the future.",
    link: null,
  },
  {
    emoji: "📚",
    title: "Reading",
    body: "Working in front of a computer all day can be exhausting, so to unwind, I love snuggling up on my couch with a good ol' paper book. I will have a list of books soon.",
    link: null,
  },
  {
    emoji: "🕺",
    title: "Dancing",
    body: "I've always been an extrovert, and parties have been my way of recharging. But you know what's been an absolute blast in the past year? Non-stop salsa dancing!",
    link: null,
  },
];

export default function AboutPage() {
  return (
    <main>
      <header className="overflow-hidden bg-surface-cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 py-[var(--ds-spacing-section-lg)] max-[767px]:py-16 md:grid-cols-2">
            <div>
              <h1 className="type-h1 mb-6">
                <span className="gradient-text">A bit about myself</span>
                <br />
                without talking too much
              </h1>
              <div className="flex flex-col gap-5">
                <p className="type-body">
                  Even though I enjoy designing alone while listening to movie
                  soundtracks, I also appreciate the collaborative aspect of the
                  process of design. As an extroverted person, I find
                  fulfillment in collaborating with others and translating user
                  insights while working with a motivated team. I enjoy the
                  chaos of running design sprints and eventually translate
                  something complicated into a simple product.
                </p>
                <p className="type-body">
                  Outside of design, I was born in Chile, studied marketing in
                  New York, where I worked for many agencies, and now reside in
                  Amsterdam. Rain doesn&apos;t scare me, and neither does the
                  language; speaking Dutch is entirely possible. On a lighter
                  note, I am trying to become proficient at tennis, so when I
                  am not busy following the mouse of my computer screen, I am
                  following a tennis ball in the court.
                </p>
              </div>
            </div>

            <div className="relative flex h-[28rem] gap-4 overflow-hidden md:h-[36rem]">
              <div className="flex flex-col gap-4 animate-[loop-vertically_22s_linear_infinite]">
                {[...aboutImages.slice(0, 3), ...aboutImages.slice(0, 3)].map(
                  (img, i) => (
                    <Image
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      width={200}
                      height={270}
                      className="w-full rounded-lg object-cover"
                    />
                  )
                )}
              </div>
              <div className="flex flex-col gap-4 animate-[loop-vertically_18s_linear_infinite_reverse]">
                {[...aboutImages.slice(3), ...aboutImages.slice(3)].map(
                  (img, i) => (
                    <Image
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      width={200}
                      height={270}
                      className="w-full rounded-lg object-cover"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </Container>
      </header>

      <Section spacing="lg" bg="black" aria-labelledby="facts-heading">
        <Container>
          <div className="mb-10">
            <p className="type-meta opacity-60">Would you like to know more?</p>
            <h2 id="facts-heading" className="type-h2 mt-2">
              Here are some random facts...
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact) => (
              <div
                key={fact.title}
                className="flex flex-col gap-4 rounded-2xl bg-white/5 p-6"
              >
                <span className="text-3xl" role="img" aria-label={fact.title}>
                  {fact.emoji}
                </span>
                <h3 className="text-lg font-semibold">{fact.title}</h3>
                <p className="type-small">{fact.body}</p>
                {fact.link && (
                  <a
                    href={fact.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium underline underline-offset-4 hover:opacity-70"
                  >
                    {fact.link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ReadyToRock variant="light" />
      <Footer variant="light" />
    </main>
  );
}
