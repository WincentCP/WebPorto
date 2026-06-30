import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { InkReveal } from "@/components/InkReveal";
import { CustomCursor } from "@/components/CustomCursor";
import { GrainCanvas } from "@/components/GrainCanvas";

export const metadata: Metadata = {
  title: "WORKS | WINCENT COLEUS PHAN | Portfolio — V1",
};

const workItems = [
  {
    title: "Brand Identity",
    description:
      "Developing distinctive visual identities through logos, typography, color systems, and brand applications.",
    linkHref: "#branding",
    linkLabel: "Explore Collection",
    image: "/images/nootspaces.jpg",
  },
  {
    title: "Social Media Design",
    description:
      "Creating engaging social media content that helps brands communicate consistently across digital platforms.",
    linkHref: "#social-media",
    linkLabel: "Explore Collection",
    image: "/images/businesscard.jpg",
  },
  {
    title: "Marketing Design",
    description:
      "Designing promotional materials for both print and digital media, including posters, banners, brochures, catalogs, menus, and advertisements.",
    linkHref: "#marketing",
    linkLabel: "Explore Collection",
    image: "/images/portfolio-v3.jpg",
  },
  {
    title: "Event Visuals",
    description:
      "Crafting cohesive visual assets for campaigns, university events, and brand activations across every touchpoint.",
    linkHref: "#event-visuals",
    linkLabel: "Explore Collection",
    image: "/images/work-event.png",
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
            titleJa="制作實績"
            titleEn="Works"
            label="A curated collection of design work across branding, digital, and print."
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
                    {/* Only show details if any of year, stack, or role is provided */}
                    {"year" in item && (
                      <div className="p-work-list__info-detail">
                        <div className="p-work-list__info-year">
                          <span className="text-xs-site ink-anim">Year</span>
                          <p className="text-base-site ink-anim">{(item as any).year}</p>
                        </div>
                        <div className="p-work-list__info-stack">
                          <span className="text-xs-site ink-anim">Stack</span>
                          <p className="text-base-site ink-anim">{(item as any).stack}</p>
                        </div>
                        <div className="p-work-list__info-role">
                          <span className="text-xs-site ink-anim">Role</span>
                          <p className="text-base-site ink-anim">{(item as any).role}</p>
                        </div>
                      </div>
                    )}
                    <a
                      className="p-work-list__link"
                      href={item.linkHref}
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
                    <img
                      src={item.image}
                      alt={item.title}
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
