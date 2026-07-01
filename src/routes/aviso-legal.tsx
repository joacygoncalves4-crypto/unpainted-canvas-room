import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal — ZP Conservação" },
      { name: "description", content: "Aviso Legal do site institucional da ZP CONSERVACAO E LIMPEZA LTDA, CNPJ 03.073.654/0001-33." },
    ],
    links: [{ rel: "canonical", href: "/aviso-legal" }],
  }),
  component: () => (
    <LegalPage title="Aviso Legal" updated="Janeiro de 2026">
      <h2>1. Identificação</h2>
      <ul>
        <li><strong>Razão Social:</strong> ZP CONSERVACAO E LIMPEZA LTDA</li>
        <li><strong>CNPJ:</strong> 03.073.654/0001-33</li>
        <li><strong>Natureza Jurídica:</strong> 206-2 — Sociedade Empresária Limitada</li>
        <li><strong>Endereço:</strong> Av Pau Brasil Lote, 10 - Sala 1304, Sul (Águas Claras), Brasília - DF, CEP 71.926-000</li>
        <li><strong>Contato:</strong> fiscal@contexdf.com.br — (81) 99592-7036</li>
      </ul>

      <h2>2. Finalidade do Site</h2>
      <p>Este site possui caráter exclusivamente <strong>institucional e informativo</strong>, destinado à apresentação da empresa e dos seus serviços de limpeza, conservação e terceirização de mão de obra.</p>

      <h2>3. Informações</h2>
      <p>Buscamos manter as informações atualizadas e precisas, mas não garantimos ausência total de erros, omissões ou desatualizações. Informações comerciais devem ser confirmadas diretamente pelos canais oficiais de contato.</p>

      <h2>4. Propriedade Intelectual</h2>
      <p>Marca, logotipo, textos, imagens e demais elementos são protegidos pela legislação brasileira de propriedade intelectual. Reprodução exige autorização expressa.</p>

      <h2>5. Limitação de Responsabilidade</h2>
      <p>A ZP Conservação não se responsabiliza por danos decorrentes do uso indevido das informações deste site, de indisponibilidades técnicas ou de conteúdos de terceiros eventualmente referenciados.</p>

      <h2>6. Legislação Aplicável</h2>
      <p>Aplica-se a este Aviso a legislação brasileira, com foro de Brasília - DF para dirimir controvérsias.</p>
    </LegalPage>
  ),
});
