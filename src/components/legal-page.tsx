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
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-foreground/80 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:text-foreground/80 [&_strong]:text-foreground">
        {children}
      </article>
    </SiteLayout>
  );
}
