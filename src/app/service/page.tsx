import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { InkReveal } from "@/components/InkReveal";
import { CustomCursor } from "@/components/CustomCursor";
import { GrainCanvas } from "@/components/GrainCanvas";

export const metadata: Metadata = {
  title: "SERVICE | KAISEI SADATOKI | Portfolio-V4",
};

const serviceItems = [
  {
    number: "[01]",
    title: "DESIGN",
    titleJa: "画面設計",
    image: "/images/service-design.jpg",
    description:
      "I design websites that work seamlessly across all devices, from smartphones to desktops. Clean, modern, and minimal visuals are my specialty. I also take on simple graphic design work such as business cards.",
  },
  {
    number: "[02]",
    title: "DEVELOPMENT",
    titleJa: "機能実装",
    image: "/images/service-development.jpg",
    description:
      "I handle everything from static site development using HTML or Astro to full website builds with WordPress. I also take on implementation-only projects based on completed designs. All builds are responsive and implemented with care.",
  },
  {
    number: "[03]",
    title: "MOTION",
    titleJa: "体験設計",
    image: "/images/service-motion.jpg",
    description:
      "I add smooth motion to websites through hover interactions and scroll animations. By bringing movement into the experience, I aim to create a sense of depth that goes beyond static visuals and leave a lasting impression that a design file alone cannot capture.",
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
            titleJa="提供物"
            titleEn="service"
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
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={455}
                        height={366}
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
