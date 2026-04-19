import { Locale } from './types';

export const ptBR: Locale = {
  lang: 'pt-BR',
  dir: 'ltr',
  meta: {
    title: 'Assistir TikTok Sem App – Abrir Links do TikTok no Navegador',
    description: 'Assista TikTok sem baixar o app. Cole qualquer link do TikTok e abra diretamente no navegador — sem download, sem login. Funciona no iPhone, Android e desktop.',
  },
  hero: {
    h1: 'Assistir TikTok',
    h1Highlight: 'Sem App',
    subtitle: 'Abra qualquer link do TikTok diretamente no navegador — sem instalar app, sem redirecionamento para a App Store, sem login. Funciona no iPhone, Android e desktop.',
  },
  tool: {
    label: 'Cole seu link do TikTok',
    placeholder: 'https://www.tiktok.com/@username/video/12345678',
    button: 'Assistir Agora',
    processing: 'Processando...',
    error: 'Por favor, insira um link válido do TikTok (ex: https://www.tiktok.com/@user/video/123 ou https://vm.tiktok.com/...)',
    ready: 'Seu Link para o Navegador Está Pronto!',
    readyNote: 'Links encurtados serão redirecionados automaticamente pelo TikTok. Clique abaixo para abrir no navegador.',
    readyNoteFull: 'Removemos todos os parâmetros de rastreamento e gatilhos de redirecionamento do app.',
    openLink: 'Abrir Link Limpo',
    copyLink: 'Copiar Link',
  },
  faq: {
    title: 'Perguntas Frequentes',
    subtitle: 'Tudo que você precisa saber sobre assistir TikTok sem o app.',
    items: [
      { q: 'Posso assistir TikTok sem instalar o app?', a: 'Sim. Esta ferramenta permite assistir vídeos públicos do TikTok diretamente no navegador sem baixar o app.' },
      { q: 'Por que links do TikTok redirecionam para a App Store?', a: 'O TikTok usa deep links e parâmetros de redirecionamento que ativam a App Store. Nossa ferramenta remove esses parâmetros.' },
      { q: 'Funciona no Safari do iPhone?', a: 'Sim. Funciona no Safari, Chrome, Firefox e na maioria dos navegadores móveis no iOS e Android.' },
      { q: 'Preciso de uma conta no TikTok?', a: 'Não. Vídeos públicos do TikTok podem ser assistidos sem conta ou login.' },
      { q: 'Esta ferramenta é segura?', a: 'Sim. Não armazenamos seu histórico ou os links que você cola. Todo o processamento acontece no seu navegador.' },
      { q: 'Como assistir TikTok no PC sem o app?', a: 'Cole seu link do TikTok na ferramenta acima e clique em Abrir. O vídeo abrirá diretamente no seu navegador desktop.' },
      { q: 'Funciona com links curtos do TikTok (vm.tiktok.com)?', a: 'Sim. A ferramenta lida com links padrão tiktok.com, links curtos vm.tiktok.com e t.tiktok.com.' },
      { q: 'Posso assistir TikTok sem app no Android?', a: 'Sim. Abra esta página no Chrome ou qualquer navegador Android, cole seu link do TikTok e o vídeo tocará sem abrir o app.' },
    ],
  },
  seo: {
    h2Open: 'Abrir Links do TikTok Diretamente no Navegador',
    pOpen: 'Links do TikTok frequentemente forçam usuários a abrir o app ou redirecionar para a App Store. Nossa ferramenta ajuda você a assistir vídeos do TikTok diretamente no navegador.',
    h2Why: 'Por Que o TikTok Te Força a Baixar o App',
    pWhy: 'O TikTok usa parâmetros de redirecionamento especiais que ativam a abertura automática do app. Nossa ferramenta os remove para que os vídeos abram diretamente no navegador.',
    h2PC: 'Assistir TikTok no PC Sem App',
    pPC: 'No desktop, links do TikTok frequentemente pedem para baixar o app. Nossa ferramenta contorna isso gerando uma URL de incorporação direta.',
    h2NoAccount: 'Assistir TikTok Sem Conta',
    pNoAccount: 'Vídeos públicos do TikTok são acessíveis sem fazer login. Esta ferramenta nunca pede suas credenciais.',
  },
  tools: {
    sectionTitle: 'Mais Ferramentas TikTok',
    sectionSubtitle: 'Utilitários gratuitos para trabalhar com links e perfis do TikTok.',
  },
  nav: { noApp: 'Sem App', privacy: 'Focado em Privacidade', mobile: 'Otimizado para Mobile' },
};
