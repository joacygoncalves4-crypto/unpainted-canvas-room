import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/politica-de-privacidade-geral")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — ZP Conservação" },
      { name: "description", content: "Política de Privacidade geral da ZP CONSERVACAO E LIMPEZA LTDA conforme a LGPD." },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade-geral" }],
  }),
  component: () => (
    <LegalPage title="Política de Privacidade" updated="Janeiro de 2026">
      <p>A <strong>ZP CONSERVACAO E LIMPEZA LTDA</strong>, CNPJ 03.073.654/0001-33, respeita a privacidade dos seus usuários e clientes, em conformidade com a Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018).</p>

      <h2>1. Dados Coletados</h2>
      <ul>
        <li>Dados de identificação (nome, e-mail, telefone, empresa) fornecidos via formulários de contato</li>
        <li>Dados de navegação (endereço IP, navegador, páginas visitadas) coletados por cookies essenciais</li>
      </ul>

      <h2>2. Finalidades</h2>
      <ul>
        <li>Resposta a solicitações e orçamentos</li>
        <li>Envio de informações solicitadas</li>
        <li>Melhoria contínua do site e dos serviços</li>
        <li>Cumprimento de obrigações legais e fiscais</li>
      </ul>

      <h2>3. Base Legal</h2>
      <p>Tratamos dados com base no consentimento, execução de contrato, cumprimento de obrigação legal e legítimo interesse, conforme art. 7º da LGPD.</p>

      <h2>4. Compartilhamento</h2>
      <p>Não comercializamos dados pessoais. Eventualmente compartilhamos com prestadores de serviços essenciais (hospedagem, e-mail), sempre sob obrigação de sigilo.</p>

      <h2>5. Segurança</h2>
      <p>Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, perda ou alteração indevida.</p>

      <h2>6. Retenção</h2>
      <p>Os dados são mantidos pelo tempo necessário às finalidades ou conforme prazos legais (em regra, 5 anos para registros fiscais).</p>

      <h2>7. Direitos do Titular</h2>
      <p>Conforme o art. 18 da LGPD, o titular pode solicitar: confirmação e acesso, correção, anonimização, portabilidade, eliminação, informação sobre compartilhamentos e revogação do consentimento.</p>

      <h2>8. Encarregado (DPO) e Contato</h2>
      <p>Para exercer direitos ou obter esclarecimentos: <strong>fiscal@contexdf.com.br</strong> — (61) 3970-2400.</p>

      <h2>9. Alterações</h2>
      <p>Esta política pode ser atualizada. A data da última atualização está no topo da página.</p>
    </LegalPage>
  ),
});
