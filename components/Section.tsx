export function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-14 border-t border-line py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-12">
        <h2 id={`${id}-h`} className="text-xs uppercase tracking-widest text-muted md:col-span-3">{label}</h2>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
