import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { InkReveal } from "@/components/InkReveal";
import { CustomCursor } from "@/components/CustomCursor";
import { GrainCanvas } from "@/components/GrainCanvas";

export const metadata: Metadata = {
  title: "ABOUT | WINCENT COLEUS PHAN | Portfolio — V1",
};

const profileItems = [
  {
    label: "[Profile]",
    content:
      "I'm a graphic designer from Medan, Indonesia, passionate about building brands that are both visually compelling and strategically effective. I create brand identities, social media campaigns, marketing materials, event visuals, and promotional assets that help businesses communicate with clarity and consistency. I'm always exploring new creative approaches, refining my craft, and collaborating with clients from different industries. I'm currently available for freelance projects, full-time opportunities, and international collaborations.",
  },
  {
    label: "[Expertise]",
    content: "Brand Identity, Visual Identity Systems, Social Media Design, Marketing Design, Event Visuals, Print Design, Adobe Creative Suite, Figma",
  },
  {
    label: "[Experience]",
    content:
      "Head of Graphic Designer — FAIV Agency\nHead of Perception and Reasoning Development - Student Executive Board UPH Medan Campus 24/25\nHead of Design & Publications - Ambassadors of UPH Medan Campus 24/25\nBrand Designer for Multiple Businesses",
  },
  {
    label: "[Language]",
    content: "Indonesian, English",
  },
];

const approachItems = [
  {
    title: "Clarity",
    description:
      "I believe good design begins with a clear message. Every visual element should support the story a brand wants to tell, making communication simple, memorable, and purposeful.",
  },
  {
    title: "Strategy",
    description:
      "Design is more than aesthetics. I approach every project by understanding the audience, business goals, and brand personality before translating them into a cohesive visual system that delivers real value.",
  },
  {
    title: "Craftsmanship",
    description:
      "I care deeply about typography, spacing, composition, and consistency. Small details create a stronger overall experience, and I enjoy refining every element until it feels balanced and intentional.",
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
            titleEn="I'm<br />brand<br />&amp; graphic<br />designer."
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
                  alt="Wincent Coleus Phan"
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
                  20
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
              <div style={{ marginBottom: 96, textAlign: "right" }}>
                <h2 className="text-6xl ink-anim">philosophy</h2>
                <p className="text-lg ink-anim">
                  Design Philosophy
                </p>
              </div>
              <div className="about-approach-list" style={{ textAlign: "right" }}>
                {approachItems.map((item) => (
                  <div
                    key={item.title}
                    style={{ marginBottom: 48, textAlign: "right" }}
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
