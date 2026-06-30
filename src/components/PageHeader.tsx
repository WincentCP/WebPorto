interface PageHeaderProps {
  titleJa: string;
  titleEn: string;
  label: string;
  showCircle?: boolean;
}

export function PageHeader({
  titleJa,
  titleEn,
  label,
  showCircle = false,
}: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="page-header__wrapper l-wrapper">
        <p className="text-7xl page-header__titleja ink-anim">{titleJa}</p>
        <h1
          className="text-6xl ink-anim"
          style={{ marginBottom: 0 }}
          dangerouslySetInnerHTML={{ __html: titleEn }}
        />
        <p className="page-header__label text-lg ink-anim" style={{ marginTop: 24 }}>{label}</p>
        <div className="page-header__scroll">
          <span className="text-sm-site page-header__scroll-text">Scroll</span>
          <span className="text-sm-site page-header__scroll-text page-header__scroll-text--clone">
            Scroll
          </span>
        </div>
        <div className="page-header__border">
          {showCircle && <div className="page-header__border-circle" />}
        </div>
      </div>
    </div>
  );
}
