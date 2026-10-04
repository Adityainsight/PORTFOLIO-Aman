import Link from "next/link";
import type { Project } from "@/content/site";
import { ExternalLink } from "./ExternalLink";

const steps = [["Problem", "problem"], ["Product", "product"], ["Engineering", "engineering"], ["Impact", "impact"]] as const;

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const rows = steps.filter(([, key]) => project.summary[key]);
  return (
    <article className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <p className="text-xs tracking-widest text-muted">{String(index + 1).padStart(2, "0")}{project.draft && " · DRAFT (dev only)"}</p>
      <h3 className="mt-2 text-3xl font-medium tracking-tight">
        <Link href={`/work/${project.slug}`} className="link">{project.name}</Link>
      </h3>
      <p className="mt-2 max-w-xl text-muted">{project.tagline}</p>
      {rows.length > 0 && (
        <dl className="mt-6 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-[7rem_1fr]">
          {rows.map(([label, key]) => (
            <div key={key} className="contents">
              <dt className="text-xs uppercase tracking-widest text-muted sm:pt-0.5">{label}</dt>
              <dd className="max-w-xl">{project.summary[key]}</dd>
            </div>
          ))}
        </dl>
      )}
      <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link href={`/work/${project.slug}`} className="link">Read case study</Link>
        {project.links.map((l) => <ExternalLink key={l.href} href={l.href}>{l.label}</ExternalLink>)}
      </p>
    </article>
  );
}
