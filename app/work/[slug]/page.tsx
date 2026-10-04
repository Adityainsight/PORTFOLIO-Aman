import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { projects, visibleProjects } from "@/content/site";

export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };

const find = (slug: string) => visibleProjects().find((p) => p.slug === slug);
export const generateStaticParams = () => visibleProjects().map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = find((await params).slug);
  return p ? { title: p.name, description: p.tagline } : {};
}

export default async function CaseStudy({ params }: Props) {
  const project = find((await params).slug);
  if (!project) notFound();
  const dev = process.env.NODE_ENV !== "production";
  return (
    <article>
      <header className="mx-auto max-w-5xl px-5 pb-16 pt-16 md:pt-24">
        <Link href="/#work" className="link text-xs uppercase tracking-widest text-muted">← Selected work</Link>
        <h1 className="rise mt-6 text-4xl font-medium tracking-tight sm:text-6xl">{project.name}</h1>
        <p className="rise mt-4 max-w-xl text-lg [animation-delay:80ms]">{project.tagline}</p>
        {project.role && <p className="mt-3 text-sm text-muted">Role: {project.role}</p>}
        {dev && project.missing && (
          <aside className="mt-8 max-w-xl border border-dashed border-ink/40 p-4 text-sm">
            Dev only. Still needed in content/site.ts: {project.missing.join(", ")}.
          </aside>
        )}
      </header>
      {project.blocks.map((b, i) => (
        <Section key={b.heading} id={`s${i}`} label={b.heading}>
          <div className="max-w-xl space-y-4">{b.body.map((t) => <p key={t}>{t}</p>)}</div>
        </Section>
      ))}
      {project.links.length > 0 && (
        <Section id="links" label="Links">
          <p className="flex flex-wrap gap-x-6 gap-y-2">{project.links.map((l) => <ExternalLink key={l.href} href={l.href}>{l.label}</ExternalLink>)}</p>
        </Section>
      )}
    </article>
  );
}
