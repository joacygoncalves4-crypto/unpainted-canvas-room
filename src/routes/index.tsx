import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Sparkles, Brush, Building2, Users, ShieldCheck, CheckCircle2, MessageCircle, Phone, Mail, MapPin, Award, Clock, Scale } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZP Conservação | Limpeza, Conservação e Terceirização em Brasília - DF" },
      { name: "description", content: "ZP CONSERVACAO E LIMPEZA LTDA — CNPJ 03.073.654/0001-33. Empresa ativa desde 1999 em Brasília, especializada em limpeza, conservação predial e terceirização de mão de obra." },
      { property: "og:title", content: "ZP Conservação | Limpeza e Terceirização em Brasília - DF" },
      { property: "og:description", content: "Mais de 25 anos de mercado em limpeza, conservação e gestão de recursos humanos. CNPJ 03.073.654/0001-33." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const WHATSAPP_URL = "https://wa.me/556139702400";

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-teal text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Atuante desde 1999
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Limpeza, conservação e terceirização de mão de obra em Brasília
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              A <strong>ZP Conservação</strong> entrega soluções completas em facilities,
              limpeza predial e gestão de recursos humanos para empresas e condomínios — com
              mais de 25 anos de experiência, regularidade fiscal e equipe treinada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-green-clean px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]">
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
              <Link to="/servicos" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
                Conhecer serviços
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 text-center">
              <div><div className="font-display text-3xl font-bold">25+</div><div className="text-xs text-white/70">anos de mercado</div></div>
              <div><div className="font-display text-3xl font-bold">100%</div><div className="text-xs text-white/70">conformidade LGPD</div></div>
              <div><div className="font-display text-3xl font-bold">DF</div><div className="text-xs text-white/70">cobertura local</div></div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur" />
            <div className="relative grid grid-cols-2 gap-4 p-6">
              {[
                { icon: Brush, t: "Limpeza Predial" },
                { icon: Building2, t: "Conservação" },
                { icon: Users, t: "Terceirização" },
                { icon: ShieldCheck, t: "Compliance" },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl bg-white/15 p-6 backdrop-blur transition-transform hover:scale-105">
                  <c.icon className="h-8 w-8 text-white" />
                  <div className="mt-3 font-display font-semibold">{c.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">Sobre a ZP</span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Sólida há mais de 25 anos em Brasília</h2>
            <p className="mt-5 text-foreground/80">
              A <strong>ZP CONSERVACAO E LIMPEZA LTDA</strong> nasceu em 1999 com o propósito
              de oferecer serviços profissionais de limpeza, conservação predial e gestão
              de recursos humanos para empresas, condomínios e órgãos do Distrito Federal.
            </p>
            <p className="mt-4 text-foreground/80">
              Atuamos com transparência, regularidade fiscal e trabalhista, equipe uniformizada
              e treinada — sempre alinhados às melhores práticas do setor de facilities.
            </p>
            <Link to="/sobre" className="mt-6 inline-flex font-semibold text-brand hover:underline">Saiba mais sobre nós →</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, t: "Empresa ATIVA", d: "desde 27/08/2005" },
              { icon: Clock, t: "Fundada em 1999", d: "06/04/1999" },
              { icon: Scale, t: "LTDA", d: "Sociedade Empresária" },
              { icon: ShieldCheck, t: "CNPJ regular", d: "03.073.654/0001-33" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                <c.icon className="h-7 w-7 text-teal" />
                <div className="mt-3 font-display font-semibold">{c.t}</div>
                <div className="text-xs text-muted-foreground">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">O que fazemos</span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Nossos Serviços</h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/70">Soluções integradas em limpeza, conservação e gestão de pessoas para o seu negócio.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, t: "Terceirização de Mão de Obra", d: "Fornecimento e gestão de recursos humanos para terceiros (CNAE 78.30-2-00).", c: "from-brand to-teal" },
              { icon: Brush, t: "Limpeza Predial", d: "Limpeza em prédios comerciais, corporativos e condomínios (CNAE 81.21-4-00).", c: "from-teal to-green-clean" },
              { icon: Sparkles, t: "Limpeza Doméstica", d: "Serviços de limpeza em domicílios com profissionais qualificados.", c: "from-green-clean to-teal" },
              { icon: Building2, t: "Facilities & Apoio", d: "Outras atividades de apoio às empresas (CNAE 82.99-7-99).", c: "from-brand to-green-clean" },
            ].map((s) => (
              <div key={s.t} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.c} text-white shadow`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS / COMPLIANCE */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/40 p-8 md:p-12">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">Confiabilidade e Compliance</span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Por que escolher a ZP Conservação</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Empresa registrada e ATIVA desde 1999 — mais de 25 anos de mercado",
              "Conformidade integral com a LGPD (Lei 13.709/2018)",
              "Regularidade trabalhista e fiscal na terceirização de mão de obra",
              "Equipe treinada, uniformizada e identificada",
              "Atendimento ético e transparência fiscal",
              "Cobertura completa em Brasília e Distrito Federal",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3 rounded-xl bg-background/60 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-clean" />
                <span className="text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DADOS INSTITUCIONAIS */}
      <section className="bg-foreground/5 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-bold md:text-3xl">Dados Institucionais</h2>
          <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-card p-6 text-sm md:grid-cols-2 md:p-8">
            <Row k="Razão Social" v="ZP CONSERVACAO E LIMPEZA LTDA" />
            <Row k="Nome Fantasia" v="ZP Conservação" />
            <Row k="CNPJ" v="03.073.654/0001-33" />
            <Row k="Natureza Jurídica" v="206-2 — Sociedade Empresária Limitada" />
            <Row k="Data de Abertura" v="06/04/1999" />
            <Row k="Situação Cadastral" v="ATIVA desde 27/08/2005" />
            <Row k="Atividade Principal" v="78.30-2-00 — Fornecimento e gestão de RH para terceiros" />
            <Row k="Endereço" v="Av Pau Brasil Lote, 10 - Sala 1304, Sul (Águas Claras), Brasília - DF" />
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl bg-gradient-to-br from-brand to-teal p-8 text-white shadow-xl md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Vamos conversar?</h2>
            <p className="mt-4 text-white/85">Solicite um orçamento de limpeza, conservação ou terceirização de mão de obra — atendemos toda a região do DF.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> (61) 3970-2400 / (61) 9870-2400</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> fiscal@contexdf.com.br</div>
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4" /> Av Pau Brasil Lote, 10 - Sala 1304, Águas Claras, Brasília - DF</div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-clean px-6 py-4 text-base font-semibold shadow-lg transition-transform hover:scale-[1.02]">
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp agora
            </a>
            <Link to="/contato" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/15 px-6 py-4 text-base font-semibold backdrop-blur hover:bg-white/25">
              Página de contato
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-border/60 py-2 last:border-0">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}
