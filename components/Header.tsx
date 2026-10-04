import Link from "next/link";
import { site } from "@/content/site";
import { ExternalLink } from "./ExternalLink";

const nav = [["Work", "/#work"], ["About", "/#about"], ["Contact", "/#contact"]];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 text-xs uppercase tracking-widest">
        <ul className="flex gap-6">
          {nav.map(([label, href]) => (
            <li key={href}><Link href={href} className="link">{label}</Link></li>
          ))}
        </ul>
        <ul className="hidden gap-6 sm:flex">
          <li><ExternalLink href={site.linkedin}>LinkedIn</ExternalLink></li>
          <li><ExternalLink href={site.github}>GitHub</ExternalLink></li>
        </ul>
      </nav>
    </header>
  );
}
