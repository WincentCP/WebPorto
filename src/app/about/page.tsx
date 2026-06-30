import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { InkReveal } from "@/components/InkReveal";
import { CustomCursor } from "@/components/CustomCursor";
import { GrainCanvas } from "@/components/GrainCanvas";

export const metadata: Metadata = {
  title: "ABOUT | KAISEI SADATOKI | Portfolio-V4",
};

const profileItems = [
  {
    label: "[Profile]",
    content:
      "I just started learning out of curiosity and developed a passion for this field through continued study and project work. I'm currently working independently and also interested in international opportunities and working with overseas clients.",
  },
  {
    label: "[Stack]",
    content: "HTML, (S)CSS, JavaScript, WordPress, Astro, Figma",
  },
  {
    label: "[Award]",
    content:
      "WD AWARDS FAVORITE × 1\nCSS WINNER STAR × 2\nCSS Design Award SPECIAL KUDOS × 1",
  },
  {
    label: "[Language]",
    content: "Japanese, English",
  },
];

const approachItems = [
  {
    title: "Communication",
    description:
      "I believe good work starts with open conversation. I make it a point to share any concerns, questions, or uncertainties rather than letting them go unspoken, and I value relationships where both sides can express themselves freely. My goal is for the people I work with to feel glad they did and to want to work together again. I believe that's what leads to better work.",
  },
  {
    title: "Precision",
    description:
      "I pay close attention to every detail. This means reproducing designs faithfully down to the finest details, as well as researching anything I'm unsure about and suggesting better approaches when I see them. I believe that being able to dedicate time and care to each project is one of the strengths of working independently.",
  },
  {
    title: "Exploration",
    description:
      "I enjoy facing different designs and requirements with every project. I find myself drawn to the process of encountering things I don't know yet, and I think that's what makes this work exciting. Rather than going through the motions, I value approaching each project with fresh eyes and genuine curiosity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <GrainCanvas />
      <CustomCursor />
      <InkReveal>
        <Header />
      </InkReveal>
      <main style={{ width: "100%" }}>
        <InkReveal>
          <PageHeader
            titleJa="自己紹介"
            titleEn="I&#39;m<br />front-end<br />developer<br />&amp; designer"
            label="About me"
          />
        </InkReveal>

        {/* About Info Section */}
        <InkReveal>
          <section
            style={{ width: "100%", marginBottom: "clamp(96px, 96px, 160px)" }}
          >
            <div
              className="l-wrapper"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                rowGap: 64,
                gridTemplateRows: "repeat(2, auto)",
              }}
            >
              {/* Photo */}
              <div
                style={{
                  gridColumn: "1 / 3",
                  gridRow: "1 / 2",
                  overflow: "hidden",
                }}
                className="about-img"
              >
                <Image
                  src="/images/about-info.jpg"
                  alt="Kaisei Sadatoki"
                  width={600}
                  height={800}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Age */}
              <div
                className="about-age"
                style={{
                  paddingLeft: 16,
                  gridColumn: "3 / 5",
                  gridRow: "1 / 2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span className="text-sm-site ink-anim">[Age]</span>
                <span
                  className="ink-anim"
                  style={{
                    textAlign: "right",
                    fontSize: "clamp(6rem, 2.7391rem + 13.913vw, 25rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.07em",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  23
                </span>
              </div>

              {/* Profile section */}
              <div
                style={{
                  gridColumn: "1 / 5",
                  gridRow: "2 / 3",
                }}
                className="about-profile"
              >
                <h2
                  className="text-3xl ink-anim"
                  style={{
                    fontFamily: "var(--font-nightwatch), 'The Night Watch', serif",
                    marginBottom: 40,
                  }}
                >
                  info
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(1, 1fr)",
                    gridTemplateRows: "repeat(4, auto)",
                    rowGap: 48,
                  }}
                  className="about-profile-grid"
                >
                  {profileItems.map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                      }}
                    >
                      <span className="text-sm-site ink-anim">
                        {item.label}
                      </span>
                      <p
                        className="text-base-site ink-anim"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </InkReveal>

        {/* Approach Section */}
        <InkReveal>
          <section
            style={{
              width: "100%",
              padding: "64px 0",
              color: "var(--cream)",
              marginBottom: 96,
              backgroundImage: "url(/images/about-bg-mobile.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "40%",
              position: "relative",
              overflow: "hidden",
            }}
            className="about-approach"
          >
            {/* Desktop background */}
            <div className="about-approach-bg-desktop">
              <Image
                src="/images/about-bg-desktop.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="l-wrapper" style={{ position: "relative" }}>
              <div style={{ marginBottom: 96 }}>
                <h2 className="text-6xl ink-anim">approach</h2>
                <p className="text-lg ink-anim">
                  Things that I value while working on projects
                </p>
              </div>
              <div className="about-approach-list">
                {approachItems.map((item) => (
                  <div
                    key={item.title}
                    style={{ marginBottom: 48 }}
                    className="about-approach-item"
                  >
                    <h3
                      className="text-3xl ink-anim"
                      style={{ marginBottom: 16 }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-base-site ink-anim">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </InkReveal>
      </main>
      <InkReveal>
        <Footer />
      </InkReveal>
    </>
  );
}
