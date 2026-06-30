import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/556139702400";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/", label: "Home" },
    { to: "/sobre", label: "Sobre" },
    { to: "/servicos", label: "Serviços" },
    { to: "/contato", label: "Contato" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-teal text-brand-foreground shadow">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-foreground">ZP Conservação</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Limpeza & Terceirização</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "text-brand bg-muted" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-green-clean px-4 py-2 text-sm font-semibold text-white shadow transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-green-clean px-4 py-2 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
