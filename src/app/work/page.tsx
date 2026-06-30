import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { InkReveal } from "@/components/InkReveal";
import { CustomCursor } from "@/components/CustomCursor";
import { GrainCanvas } from "@/components/GrainCanvas";

export const metadata: Metadata = {
  title: "WORK | KAISEI SADATOKI | Portfolio-V4",
};

const workItems = [
  {
    title: "NOOTSPACES",
    description:
      "I designed and developed a media website to document my thoughts and ideas. The design focuses on a modern aesthetic, with a slightly playful tone to reflect a media-style experience.",
    year: "2026",
    stack: "Astro",
    role: "Design & Development",
    linkHref: "https://nootspaces.vercel.app/",
    linkLabel: "Launch Website",
    image: "/images/nootspaces.jpg",
  },
  {
    title: "Business Card",
    description:
      "I designed my own business card. As I worked on the design, I wanted to pay attention to the paper as well, so I actually visited a printing company and selected the type of paper myself.",
    year: "2026",
    stack: "―",
    role: "Design",
    linkHref: "https://www.instagram.com/p/DVf2TkiE-cX/?img_index=1",
    linkLabel: "Detail on Instagram",
    image: "/images/businesscard.jpg",
  },
  {
    title: "Portfolio-V3",
    description:
      "This is version 3 of my portfolio site. I challenged myself with an international award for the first time. Rather than focusing on being user-first, I aim to create a design that lets people feel the thoughts I hold within myself.",
    year: "2025",
    stack: "Astro",
    role: "Design & Development",
    linkHref: "https://kaiseisadatoki-v3.vercel.app/",
    linkLabel: "Launch Website",
    image: "/images/portfolio-v3.jpg",
  },
];

export default function WorkPage() {
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
            titleJa="制作実績"
            titleEn="work"
            label="My projects so far"
          />
        </InkReveal>

        <section className="p-work-list">
          <div className="p-work-list__wrapper l-wrapper">
            {workItems.map((item, idx) => (
              <InkReveal key={item.title}>
                <article className="p-work-list__item">
                  <div className="p-work-list__info">
                    <h2 className="p-work-list__info-title text-3xl ink-anim">
                      {item.title}
                    </h2>
                    <p className="p-work-list__info-desc text-base-site ink-anim">
                      {item.description}
                    </p>
                    <div className="p-work-list__info-detail">
                      <div className="p-work-list__info-year">
                        <span className="text-xs-site ink-anim">Year</span>
                        <p className="text-base-site ink-anim">{item.year}</p>
                      </div>
                      <div className="p-work-list__info-stack">
                        <span className="text-xs-site ink-anim">Stack</span>
                        <p className="text-base-site ink-anim">{item.stack}</p>
                      </div>
                      <div className="p-work-list__info-role">
                        <span className="text-xs-site ink-anim">Role</span>
                        <p className="text-base-site ink-anim">{item.role}</p>
                      </div>
                    </div>
                    <a
                      className="p-work-list__link"
                      href={item.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="p-work-list__link-circle">
                        <div className="p-work-list__link-dot"></div>
                      </div>
                      <p className="text-base-site p-work-list__link-text">
                        {item.linkLabel}
                      </p>
                    </a>
                  </div>
                  <div className="p-work-list__img">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={576}
                      height={420}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                </article>
              </InkReveal>
            ))}
          </div>
        </section>
      </main>
      <InkReveal>
        <Footer />
      </InkReveal>
    </>
  );
}
