import type { ReactNode } from "react";
import { SiteLayout } from "./site-layout";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-brand to-teal py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">{title}</h1>
          <p className="mt-3 text-white/80">Última atualização: {updated}</p>
        </div>
      </section>
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-foreground/85 prose-headings:font-display prose-headings:text-foreground prose-h2:mt-10 prose-h2:text-2xl prose-strong:text-foreground">
          {children}
        </div>
      </article>
    </SiteLayout>
  );
}
