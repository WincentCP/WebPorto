export function TextMarquee() {
  const text = "I'm available and open to international work.";

  return (
    <div className="c-textloop">
      {Array.from({ length: 5 }).map((_, containerIdx) => (
        <div key={containerIdx} className="c-textloop__container">
          {Array.from({ length: 5 }).map((_, spanIdx) => (
            <span key={spanIdx} className="text-sm-site">
              {text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
