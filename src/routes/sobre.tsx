import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Target, Eye, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — ZP Conservação | Empresa atuante desde 1999 em Brasília" },
      { name: "description", content: "História, missão, visão e valores da ZP CONSERVACAO E LIMPEZA LTDA, CNPJ 03.073.654/0001-33, com mais de 25 anos no DF." },
      { property: "og:title", content: "Sobre a ZP Conservação" },
      { property: "og:description", content: "Mais de 25 anos prestando serviços de limpeza, conservação e terceirização no DF." },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-brand to-teal py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Sobre a empresa</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">Mais de 25 anos cuidando do seu ambiente</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
            Fundada em 06/04/1999, a ZP CONSERVACAO E LIMPEZA LTDA é referência em Brasília
            em limpeza, conservação predial e terceirização de mão de obra.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-foreground/80">
          <h2 className="font-display text-3xl font-bold">Nossa História</h2>
          <p>
            Desde 1999, a ZP Conservação cresceu junto com Brasília. Iniciamos com serviços
            de limpeza predial e, ao longo de mais de duas décadas, expandimos nosso portfólio
            para incluir conservação, gestão de facilities e fornecimento de recursos humanos
            para terceiros — sempre prezando pela qualidade, ética e regularidade fiscal e trabalhista.
          </p>
          <p>
            Hoje atendemos empresas, condomínios e órgãos no Distrito Federal com equipes
            uniformizadas, treinadas e gestão profissional em cada contrato.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, t: "Missão", d: "Entregar serviços de limpeza, conservação e gestão de pessoas com excelência, ética e segurança jurídica." },
            { icon: Eye, t: "Visão", d: "Ser a empresa de facilities e terceirização mais confiável e reconhecida do Distrito Federal." },
            { icon: Heart, t: "Valores", d: "Transparência, respeito ao colaborador, compromisso com o cliente, conformidade legal e responsabilidade social." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-teal text-white">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{v.t}</h3>
              <p className="mt-2 text-foreground/70">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-8">
          <div className="flex items-start gap-4">
            <Award className="h-10 w-10 shrink-0 text-teal" />
            <div>
              <h3 className="font-display text-xl font-bold">Empresa ATIVA e regular</h3>
              <p className="mt-2 text-foreground/80">
                ZP CONSERVACAO E LIMPEZA LTDA — CNPJ 03.073.654/0001-33 — Sociedade Empresária
                Limitada (Natureza Jurídica 206-2), com situação cadastral ATIVA desde 27/08/2005,
                sede em Brasília - DF.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
