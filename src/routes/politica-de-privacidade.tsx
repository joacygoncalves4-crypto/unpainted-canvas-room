import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade WhatsApp — ZP Conservação" },
      { name: "description", content: "Política de privacidade específica para o WhatsApp Business da ZP CONSERVACAO E LIMPEZA LTDA, em conformidade com a LGPD e os requisitos do Meta." },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: () => (
    <LegalPage title="Política de Privacidade — WhatsApp Business" updated="Janeiro de 2026">
      <h2>1. Introdução</h2>
      <p>Esta Política de Privacidade aplica-se especificamente ao atendimento prestado pela <strong>ZP CONSERVACAO E LIMPEZA LTDA</strong> através do <strong>WhatsApp Business</strong>, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018) e com os requisitos da API do WhatsApp Business da Meta Platforms.</p>
      <ul>
        <li><strong>Razão Social:</strong> ZP CONSERVACAO E LIMPEZA LTDA</li>
        <li><strong>CNPJ:</strong> 03.073.654/0001-33</li>
        <li><strong>Endereço:</strong> Av Pau Brasil Lote, 10 - Sala 1304, Sul (Águas Claras), Brasília - DF, CEP 71.926-000</li>
        <li><strong>Contato:</strong> fiscal@contexdf.com.br — (81) 99592-7036</li>
      </ul>

      <h2>2. Dados Coletados via WhatsApp</h2>
      <ul>
        <li>Número de telefone do WhatsApp</li>
        <li>Nome de perfil exibido</li>
        <li>Mensagens enviadas (texto, imagens, áudio, documentos)</li>
        <li>Data e hora das interações</li>
        <li>Metadados técnicos da conversa</li>
      </ul>

      <h2>3. Finalidade do Tratamento</h2>
      <ul>
        <li>Atendimento ao cliente e suporte</li>
        <li>Solicitações de orçamento de limpeza, conservação e terceirização</li>
        <li>Agendamento e confirmação de serviços</li>
        <li>Envio de informações operacionais sobre contratos firmados</li>
        <li>Cumprimento de obrigações legais</li>
      </ul>

      <h2>4. Compartilhamento de Dados</h2>
      <p>Os dados trocados via WhatsApp são processados pela <strong>Meta Platforms (WhatsApp)</strong> conforme as políticas próprias do aplicativo, necessárias ao funcionamento do serviço. <strong>Não comercializamos nem cedemos dados a terceiros</strong> para fins de marketing.</p>

      <h2>5. Segurança</h2>
      <p>As mensagens transmitidas pelo WhatsApp possuem <strong>criptografia de ponta a ponta</strong> nativa da plataforma. Internamente, o acesso às conversas é restrito aos colaboradores autorizados e treinados em proteção de dados.</p>

      <h2>6. Retenção</h2>
      <ul>
        <li><strong>Mensagens e conversas:</strong> 12 meses, salvo necessidade legal de retenção superior</li>
        <li><strong>Registros vinculados a contratos e fiscais:</strong> 5 anos, conforme exigência da legislação tributária</li>
      </ul>

      <h2>7. Direitos do Titular (LGPD)</h2>
      <p>Conforme art. 18 da LGPD, você pode solicitar a qualquer momento: confirmação e acesso aos dados, correção, anonimização, portabilidade, eliminação, informações sobre compartilhamentos e revogação do consentimento.</p>

      <h2>8. Atualizações desta Política</h2>
      <p>Esta política pode ser atualizada para refletir mudanças legais, técnicas ou operacionais. A versão vigente estará sempre disponível nesta URL.</p>

      <h2>9. Conformidade</h2>
      <p>Esta política observa integralmente: (a) Lei Geral de Proteção de Dados — Lei nº 13.709/2018; (b) requisitos do <strong>Meta Business Manager</strong> e da <strong>API do WhatsApp Business</strong>.</p>

      <h2>10. Contato</h2>
      <p>Para exercer direitos ou esclarecer dúvidas sobre esta política: <strong>fiscal@contexdf.com.br</strong> — (81) 99592-7036.</p>
    </LegalPage>
  ),
});
