import Link from "next/link";

const navItems = [
  { label: "Top", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <p className="header__logo-text ink-anim">KAISEI SADATOKI</p>
        <span className="header__logo-label ink-anim">
          WEB DESIGN / DEVELOPMENT
        </span>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          {navItems.map((item) => (
            <li key={item.href} className="header__list-item">
              <Link className="text-base-site header__list-link" href={item.href}>
                <span className="header__list-hover">[</span>
                <span className="ink-anim">{item.label}</span>
                <span className="header__list-hover">]</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
