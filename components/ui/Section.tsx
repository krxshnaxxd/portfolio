type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`max-w-7xl mx-auto px-8 lg:px-12 ${className}`}>
      {children}
    </section>
  );
}