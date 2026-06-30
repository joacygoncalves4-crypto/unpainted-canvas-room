import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — ZP Conservação | Brasília - DF" },
      { name: "description", content: "Fale com a ZP Conservação (CNPJ 03.073.654/0001-33) por WhatsApp, telefone (61) 3970-2400 ou e-mail fiscal@contexdf.com.br." },
      { property: "og:title", content: "Contato — ZP Conservação" },
      { property: "og:description", content: "WhatsApp, telefone e endereço em Brasília - DF." },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const WHATSAPP_URL = "https://wa.me/556139702400";

function ContatoPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-brand to-teal py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Fale conosco</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">Contato</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">Estamos prontos para atender sua empresa ou condomínio em Brasília e região.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <ContactCard icon={Phone} title="Telefone / WhatsApp" lines={["(61) 3970-2400", "(61) 9870-2400"]} />
            <ContactCard icon={Mail} title="E-mail" lines={["fiscal@contexdf.com.br"]} />
            <ContactCard icon={MapPin} title="Endereço" lines={["Av Pau Brasil Lote, 10 - Sala 1304", "Sul (Águas Claras), Brasília - DF", "CEP 71.926-000"]} />
            <ContactCard icon={Clock} title="Horário de atendimento" lines={["Segunda a sexta: 8h às 18h"]} />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-clean px-6 py-4 font-semibold text-white shadow-lg transition-transform hover:scale-[1.01]">
              <MessageCircle className="h-5 w-5" /> Conversar pelo WhatsApp
            </a>
          </div>

          <div>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <h2 className="font-display text-2xl font-bold">Envie uma mensagem</h2>
              <p className="mt-1 text-sm text-muted-foreground">Retornamos em até 1 dia útil.</p>
              <div className="mt-6 space-y-4">
                <Field label="Nome completo" name="nome" required />
                <Field label="E-mail" name="email" type="email" required />
                <Field label="Telefone / WhatsApp" name="telefone" required />
                <Field label="Empresa (opcional)" name="empresa" />
                <div>
                  <label className="text-sm font-medium">Mensagem</label>
                  <textarea required rows={4} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <button type="submit" className="w-full rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground shadow transition-colors hover:bg-brand/90">
                  Enviar mensagem
                </button>
                {sent && <p className="text-center text-sm text-green-clean">Mensagem registrada — entraremos em contato em breve.</p>}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border shadow">
          <iframe
            title="Localização ZP Conservação"
            src="https://www.google.com/maps?q=Av+Pau+Brasil,+Águas+Claras,+Brasília+-+DF&output=embed"
            className="h-[400px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-teal text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-display font-semibold">{title}</div>
        {lines.map((l) => <div key={l} className="text-sm text-foreground/75">{l}</div>)}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
