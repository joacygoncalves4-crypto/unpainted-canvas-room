import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Users, Brush, Sparkles, Building2, CheckCircle2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — ZP Conservação | Limpeza, Conservação e Terceirização" },
      { name: "description", content: "Conheça os serviços da ZP Conservação (CNPJ 03.073.654/0001-33): terceirização de mão de obra, limpeza predial, doméstica e facilities em Brasília - DF." },
      { property: "og:title", content: "Serviços ZP Conservação" },
      { property: "og:description", content: "Terceirização, limpeza predial e doméstica, e facilities no DF." },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

const WHATSAPP_URL = "https://wa.me/556139702400";

const services = [
  {
    icon: Users,
    t: "Gestão e Fornecimento de Recursos Humanos",
    cnae: "78.30-2-00 (Atividade Principal)",
    d: "Terceirização de mão de obra para empresas e órgãos: recrutamento, seleção, gestão de equipes próprias e cumprimento integral da legislação trabalhista e previdenciária.",
    items: ["Auxiliares e operacionais", "Equipes de portaria e recepção", "Gestão de ponto e folha", "Substituição imediata em ausências"],
  },
  {
    icon: Brush,
    t: "Limpeza e Conservação Predial",
    cnae: "81.21-4-00",
    d: "Limpeza diária, periódica e pesada em prédios comerciais, corporativos, condomínios residenciais e clínicas — com produtos adequados e equipe uniformizada.",
    items: ["Limpeza diária de áreas comuns", "Conservação de pisos e vidros", "Higienização de banheiros e copas", "Limpeza pós-obra"],
  },
  {
    icon: Sparkles,
    t: "Limpeza em Domicílios",
    cnae: "81.21-4-00",
    d: "Serviços profissionais de limpeza residencial com profissionais cadastrados, identificados e treinados.",
    items: ["Limpeza padrão e pesada", "Pacotes mensais", "Atendimento pontual ou recorrente", "Profissional uniformizado"],
  },
  {
    icon: Building2,
    t: "Serviços de Apoio e Facilities",
    cnae: "82.99-7-99",
    d: "Outras atividades de apoio às empresas: serviços administrativos, copeiragem, mensageria e suporte operacional.",
    items: ["Copa e copeiragem", "Mensageria interna e externa", "Apoio administrativo", "Gestão integrada de facilities"],
  },
];

function ServicosPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-brand to-teal py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Soluções completas</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">Nossos Serviços</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
            Limpeza, conservação predial, terceirização e facilities — tudo o que sua
            empresa precisa em um só fornecedor.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.t} className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-teal text-white shadow">
                <s.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold">{s.t}</h2>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-teal">CNAE {s.cnae}</div>
              <p className="mt-3 text-foreground/75">{s.d}</p>
              <ul className="mt-5 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-clean" /> {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-to-br from-brand to-teal p-8 text-center text-white md:p-12">
          <h3 className="font-display text-2xl font-bold md:text-3xl">Solicite um orçamento sem compromisso</h3>
          <p className="mt-3 text-white/85">Atendemos toda Brasília e região do DF.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-clean px-6 py-3 font-semibold shadow-lg transition-transform hover:scale-[1.02]">
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
