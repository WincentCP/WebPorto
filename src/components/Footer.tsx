import Link from "next/link";

const menuItems = [
  { label: "Top", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Works", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const socialItems = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="l-wrapper footer__wrapper">
        <div className="footer__head">
          <div className="footer__head-wrapper">
            <div className="footer__menu">
              <p className="footer__head-label text-sm-site">[Menu]</p>
              <ul className="footer__menu-list">
                {menuItems.map((item) => (
                  <li key={item.href} className="footer__list-item">
                    <Link
                      className="text-base-site footer__list-link"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__social">
              <p className="footer__head-label text-sm-site">[Social]</p>
              <ul className="footer__social-list">
                {socialItems.map((item) => (
                  <li key={item.href} className="footer__social-item">
                    <a
                      className="text-base-site footer__social-link"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__mail">
              <p className="footer__head-label text-sm-site">[Mail]</p>
              <p>
                <a className="text-base-site" href="mailto:wincentcoleusphan@gmail.com">
                  wincentcoleusphan@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="footer__credit">
            <p className="footer__head-label text-sm-site">[Credit]</p>
            <p className="text-base-site">
              Designed &amp; Developed by{" "}
              <span className="footer__credit-name">Wincent Coleus Phan</span>
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <h2 className="footer__title">
            <span className="text-wrapper"> thank you </span>
          </h2>
        </div>
      </div>
    </footer>
  );
}
