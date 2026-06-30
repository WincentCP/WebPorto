import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { InkReveal } from "@/components/InkReveal";
import { CustomCursor } from "@/components/CustomCursor";
import { GrainCanvas } from "@/components/GrainCanvas";

export const metadata: Metadata = {
  title: "CONTACT | KAISEI SADATOKI | Portfolio-V4",
};

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/s-kaisei/" },
  { label: "Instagram", href: "https://www.instagram.com/kaiseee_i_j/" },
  { label: "Awwwards", href: "https://www.awwwards.com/kaiseisadatoki/" },
];

export default function ContactPage() {
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
            titleJa="連絡先"
            titleEn="contact"
            label="Get in touch"
          />
        </InkReveal>

        <section className="p-contact">
          <div className="p-contact__wrapper l-wrapper">
            <InkReveal className="p-contact__img">
              <div style={{ position: "relative" }}>
                <Image
                  src="/images/contact.png"
                  alt="Contact Kaisei Sadatoki"
                  width={600}
                  height={600}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </InkReveal>
            <InkReveal className="p-contact__info">
              <p className="p-contact__desc text-base-site ink-anim">
                Thank you for looking at my website. If you have any ideas,
                projects, or things that you would like to work on together,
                feel free to reach out. I&apos;m looking forward to meeting new
                people and hearing new ideas from you.
              </p>
              <div className="p-contact__inquiry">
                <div className="p-contact__inquiry-mail">
                  <p className="p-contact__inquiry-label text-sm-site ink-anim">
                    [Mail]
                  </p>
                  <a
                    className="text-base-site ink-anim"
                    href="mailto:k25ts09@outlook.jp"
                  >
                    k25ts09@outlook.jp
                  </a>
                </div>
                <div className="p-contact__inquiry-social">
                  <p className="p-contact__inquiry-label text-sm-site ink-anim">
                    [Social]
                  </p>
                  <ul className="p-contact__social">
                    {socialLinks.map((link) => (
                      <li key={link.href} className="p-contact__social-list">
                        <a
                          className="text-base-site p-contact__social-link ink-anim"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </InkReveal>
          </div>
        </section>
      </main>
      <InkReveal>
        <Footer />
      </InkReveal>
    </>
  );
}
