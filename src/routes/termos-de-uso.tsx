import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — ZP Conservação" },
      { name: "description", content: "Termos de Uso do site da ZP CONSERVACAO E LIMPEZA LTDA, CNPJ 03.073.654/0001-33." },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: () => (
    <LegalPage title="Termos de Uso" updated="Janeiro de 2026">
      <p>Estes Termos de Uso regem o acesso e a utilização do site institucional da <strong>ZP CONSERVACAO E LIMPEZA LTDA</strong>, CNPJ 03.073.654/0001-33, com sede em Av Pau Brasil Lote, 10 - Sala 1304, Sul (Águas Claras), Brasília - DF, CEP 71.926-000.</p>

      <h2>1. Aceitação</h2>
      <p>Ao acessar este site, o usuário declara concordância integral com estes Termos. Caso não concorde, deve interromper imediatamente o uso.</p>

      <h2>2. Objeto</h2>
      <p>Este site tem caráter institucional e visa apresentar os serviços de limpeza, conservação predial e terceirização de mão de obra prestados pela ZP Conservação.</p>

      <h2>3. Propriedade Intelectual</h2>
      <p>Todo o conteúdo — textos, imagens, marcas, logotipos e layout — é de propriedade da ZP CONSERVACAO E LIMPEZA LTDA e protegido pela legislação brasileira. É vedada reprodução sem autorização prévia.</p>

      <h2>4. Uso Permitido</h2>
      <p>O usuário compromete-se a utilizar o site apenas para fins lícitos, sem prejudicar terceiros, comprometer a segurança ou interferir em seu funcionamento.</p>

      <h2>5. Limitação de Responsabilidade</h2>
      <p>A ZP Conservação envida esforços para manter as informações atualizadas, mas não se responsabiliza por eventuais erros, omissões ou indisponibilidade temporária do site.</p>

      <h2>6. Links Externos</h2>
      <p>O site pode conter links para terceiros. Não nos responsabilizamos pelo conteúdo desses sites.</p>

      <h2>7. Alterações</h2>
      <p>Estes Termos podem ser alterados a qualquer momento. A versão vigente é sempre a publicada nesta página.</p>

      <h2>8. Foro</h2>
      <p>Fica eleito o foro de Brasília - DF para dirimir quaisquer questões oriundas destes Termos.</p>

      <h2>9. Contato</h2>
      <p>Dúvidas: <strong>fiscal@contexdf.com.br</strong> — (81) 99592-7036.</p>
    </LegalPage>
  ),
});
