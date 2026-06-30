import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { InkReveal } from "@/components/InkReveal";
import { CustomCursor } from "@/components/CustomCursor";
import { GrainCanvas } from "@/components/GrainCanvas";

export const metadata: Metadata = {
  title: "SERVICES | WINCENT COLEUS PHAN | Portfolio — V1",
};

const serviceItems = [
  {
    number: "[01]",
    title: "Brand Identity",
    titleJa: "品牌識別",
    image: "/images/service-design.jpg",
    description:
      "I develop distinctive visual identities that help brands communicate with clarity, consistency, and purpose. From logo systems and typography to color palettes and brand guidelines, every element is designed to create a memorable and lasting impression.",
  },
  {
    number: "[02]",
    title: "Social Media Design",
    titleJa: "社群設計",
    image: "/images/service-development.jpg",
    description:
      "I create engaging social media visuals that strengthen a brand's presence across digital platforms. Every post, carousel, story, and campaign is designed to communicate effectively while remaining visually cohesive.",
  },
  {
    number: "[03]",
    title: "Marketing Design",
    titleJa: "行銷設計",
    image: "/images/service-motion.jpg",
    description:
      "I design promotional materials for both digital and print media, including posters, banners, brochures, catalogs, menus, advertisements, and presentation decks that support business and marketing goals.",
  },
  {
    number: "[04]",
    title: "Event Visuals",
    titleJa: "活動視覺",
    image: "/images/service-event.png",
    description:
      "I craft visual assets for events, from promotional campaigns and stage graphics to certificates, merchandise, and supporting collateral, ensuring a unified visual experience across every touchpoint.",
  },
];

export default function ServicePage() {
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
            titleJa="提供服務"
            titleEn="Services"
            label="What I can do"
          />
        </InkReveal>

        <section className="p-service-list">
          <div className="p-service-list__wrapper l-wrapper">
            {serviceItems.map((item, idx) => (
              <InkReveal key={item.title}>
                <article className="p-service-list__item">
                  <div className="p-service-list__item-num text-3xl ink-anim">
                    {item.number}
                  </div>
                  <h2 className="p-service-list__item-title text-3xl ink-anim">
                    {item.title}
                  </h2>
                  <div className="p-service-list__item-content">
                    <div className="p-service-list__item-img">
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
                    <p className="p-service-list__item-desc text-base-site ink-anim">
                      {item.description}
                    </p>
                  </div>
                  <p className="p-service-list__item-titleja text-7xl js-ink">
                    {item.titleJa}
                  </p>
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
