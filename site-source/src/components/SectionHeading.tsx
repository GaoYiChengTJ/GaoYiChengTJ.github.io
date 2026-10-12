interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="font-serif-display text-[1.7rem] font-semibold tracking-tight text-foreground">
        {children}
      </h2>
      <div className="mt-3 h-[2px] w-10 bg-foreground/80" />
    </div>
  );
}
