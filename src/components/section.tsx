type SectionProps = {
  id?: string;
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  label,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-10 md:py-12 ${className}`}>
      <header className="mb-8">
        <p className="site-label">{label}</p>
        <h2 className="site-section-title mt-2">{title}</h2>
        {intro && <p className="site-body mt-3 max-w-lg">{intro}</p>}
      </header>
      {children}
    </section>
  );
}
