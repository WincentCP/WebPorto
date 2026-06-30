import Link from "next/link";
import { TextMarquee } from "@/components/TextMarquee";
import { LiveClock } from "@/components/LiveClock";
import { InkReveal } from "@/components/InkReveal";
import { CustomCursor } from "@/components/CustomCursor";
import { GrainCanvas } from "@/components/GrainCanvas";

const menuItems = [
  { number: "01", label: "About", href: "/about" },
  { number: "02", label: "Services", href: "/service" },
  { number: "03", label: "Works", href: "/work" },
  { number: "04", label: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <>
      <GrainCanvas />
      <CustomCursor />
      <main style={{ width: "100%" }}>
        <section className="p-top-body" style={{ width: "100%", height: "100svh" }}>
          <div
            className="l-wrapper"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              paddingTop: "clamp(40px, 31.549px + 2.254vw, 64px)",
              paddingBottom: "clamp(40px, 31.549px + 2.254vw, 64px)",
            }}
          >
            {/* Marquee */}
            <div style={{ marginBottom: "clamp(48px, 48px, 80px)" }}>
              <TextMarquee />
            </div>

            {/* Main content area */}
            <InkReveal
              className=""
            >
              <div
                style={{
                  position: "relative",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Head section */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: "auto",
                  }}
                  className="top-head"
                >
                  <h1
                    className="text-6xl ink-anim"
                    style={{ gridColumn: "1 / -1", gridRow: "1 / 2" }}
                  >
                    WINCENT<br className="br-sp" />COLEUS PHAN
                  </h1>
                  <p
                    className="text-lg ink-anim"
                    style={{
                      gridColumn: "1 / -1",
                      gridRow: "2 / 3",
                      marginBottom: 40,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Graphic Designer
                    <br />
                    Based in Medan, Indonesia
                  </p>
                  <div
                    className="text-base-site ink-anim"
                    style={{
                      gridColumn: "1 / 4",
                      gridRow: "3 / 4",
                      display: "flex",
                      maxWidth: 500,
                    }}
                  >
                    Hello, I&apos;m Wincent Coleus Phan, a brand designer based in
                    Medan, Indonesia. I help businesses build clear, memorable
                    visual identities and create marketing designs that communicate
                    with purpose. My work spans brand identity, social media,
                    event visuals, and promotional design, with a focus on strong
                    typography, thoughtful composition, and refined visual systems.
                  </div>
                </div>

                {/* Bottom section */}
                <div
                  className="top-bottom"
                  style={{
                    marginTop: "auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: "repeat(2, auto)",
                    rowGap: 40,
                  }}
                >
                  {/* Version */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gridColumn: "1 / 3",
                      gridRow: "1 / 2",
                    }}
                  >
                    <span className="text-xs-site ink-anim">Version</span>
                    <span className="text-base-site ink-anim">
                      Portfolio — V1
                    </span>
                  </div>

                  {/* Local Time */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gridColumn: "3 / 5",
                      gridRow: "1 / 2",
                    }}
                  >
                    <span className="text-xs-site ink-anim">Local Time</span>
                    <LiveClock />
                  </div>

                  {/* Menu */}
                  <div
                    style={{
                      gridColumn: "1 / 3",
                      gridRow: "2 / 3",
                    }}
                    className="top-menu"
                  >
                    <p
                      className="text-sm-site ink-anim"
                      style={{ marginBottom: 8 }}
                    >
                      [Menu]
                    </p>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      {menuItems.map((item) => (
                        <li
                          key={item.href}
                          style={{ display: "flex", gap: 40 }}
                        >
                          <span
                            className="text-base-site ink-anim"
                            style={{ fontVariantNumeric: "tabular-nums" }}
                          >
                            {item.number}
                          </span>
                          <Link
                            className="text-base-site ink-anim"
                            href={item.href}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Next Page */}
                  <div
                    className="top-next"
                    style={{
                      gridColumn: "3 / 5",
                      gridRow: "2 / 3",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        border: "solid 1px var(--coral)",
                        position: "relative",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          backgroundColor: "var(--coral)",
                        }}
                      />
                    </div>
                    <Link className="text-base-site ink-anim" href="/about">
                      Next Page
                    </Link>
                  </div>
                </div>

                {/* Social links - absolute positioned on right */}
                <div
                  style={{
                    position: "absolute",
                    top: "20%",
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                  className="top-social"
                >
                  <a
                    className="text-base-site ink-anim"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ writingMode: "vertical-lr" }}
                  >
                    Instagram
                  </a>
                  <a
                    className="text-base-site ink-anim"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ writingMode: "vertical-lr" }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </InkReveal>
          </div>
        </section>
      </main>
    </>
  );
}
