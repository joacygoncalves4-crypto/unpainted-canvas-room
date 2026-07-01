import { Link } from "@tanstack/react-router";
import { Sparkles, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-teal text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="font-display text-lg font-bold">ZP Conservação</div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              <strong className="text-background">ZP CONSERVACAO E LIMPEZA LTDA</strong>
              <br />
              CNPJ: 03.073.654/0001-33
              <br />
              Sociedade Empresária Limitada — Ativa desde 1999
            </p>
            <div className="mt-4 space-y-2 text-sm text-background/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <span>Av Pau Brasil Lote, 10 - Sala 1304, Sul (Águas Claras), Brasília - DF, CEP 71.926-000</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-teal" />
                <span>(81) 99592-7036</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-teal" />
                <a href="mailto:fiscal@contexdf.com.br" className="hover:text-background">fiscal@contexdf.com.br</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-background">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li><Link to="/" className="hover:text-background">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-background">Sobre</Link></li>
              <li><Link to="/servicos" className="hover:text-background">Serviços</Link></li>
              <li><Link to="/contato" className="hover:text-background">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-background">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li><Link to="/termos-de-uso" className="hover:text-background">Termos de Uso</Link></li>
              <li><Link to="/politica-de-privacidade-geral" className="hover:text-background">Política de Privacidade</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-background">Privacidade WhatsApp</Link></li>
              <li><Link to="/aviso-legal" className="hover:text-background">Aviso Legal</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs text-background/60">
          © 2026 ZP CONSERVACAO E LIMPEZA LTDA — CNPJ 03.073.654/0001-33. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
