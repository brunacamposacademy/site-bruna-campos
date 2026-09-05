# Changelog

## v23-gate-final-producao

- Revisados e encurtados os metadados das páginas temáticas, preservando integralmente o conteúdo editorial aprovado.
- Ajustados contraste de textos, botões, foco e estrelas, com cache CSS atualizado para `v23` e rótulos acessíveis nas avaliações.
- Reforçada a configuração Apache segura com 404 explícito, bloqueio de listagem de diretórios e cabeçalhos defensivos.
- Atualizado o checklist de publicação para refletir a página própria de TDAH e o hard stop anterior ao go-live.
- Mantidos `noindex,nofollow`, `robots.txt` de staging e todas as configurações de produção sem ativação.

## v22-paginas-tematicas

- Reconstruída integralmente a página de Ansiedade a partir do conteúdo editorial aprovado.
- Reconstruída integralmente a página de Depressão, incluindo a orientação de crise e o CVV 188.
- Reconstruída a página de Laudo para concurso com avaliação exclusivamente presencial na Barra da Tijuca.
- Criada a página de TDAH em adultos e atualizados os links de navegação e da Home para a nova rota.
- Atualizados metadados, dados estruturados e FAQ schemas para refletir apenas o conteúdo visível dos artigos.
- Incluída a URL de TDAH no sitemap e atualizado o cache do CSS para `?v=22`.

## v21-ajustes-finais-home

- Unificadas as notas máximas do Google e do Doctoralia em uma única faixa de reputação.
- Reorganizados os depoimentos em uma grade estruturada de cards e removido o texto explicativo da seção.
- Ampliadas as fontes do cabeçalho e as fotos das seções de formação e “Sobre mim”, sem o círculo decorativo e com centralização no mobile.
- Refinado o alinhamento vertical dos textos de mídia e igualadas as proporções visuais dos cards de presença digital.
- Atualizado o cache do CSS para `?v=21` em todas as páginas.

## v20-cache-assets

- Adicionado `?v=20` às referências de CSS e da logo SVG para invalidar versões antigas em navegador e CDN.
- Incluída proteção Apache contra acesso HTTP a `.git` e outros arquivos ocultos, preservando `/.well-known/`.

## v20-logo-verde

- Símbolo da marca redesenhado a partir da referência aprovada, com fundo transparente e traço verde da identidade.
- Nova marca aplicada nos cabeçalhos e rodapés de todas as páginas do site.

## v19-refinamento-home

- Refinada a composição editorial da Home, com ajustes em áreas de atendimento, avaliações, formação, mídia, presença digital, modalidades e FAQ.
- Adicionadas imagens WebP locais para atendimento presencial, teleconsulta e conteúdos de mídia.
- Substituído o monograma do cabeçalho por símbolo vetorial em SVG.
- Uniformizado o formato arredondado e preenchido dos CTAs da Home.
- Recomposta a seção de modalidades com dois cards fotográficos lado a lado e legendas sobrepostas.

## v18-autodeploy-test: alteração mínima para validar publicação automática GitHub → Hostinger.

## v17-troca-fotos

- Fotografias da Home e da página Sobre substituídas por novos retratos em WebP otimizado.
- Imagem social e preloads atualizados para os novos arquivos.
- Referências às fotografias antigas removidas das páginas internas.

## v16-baseline

Baseline congelada para o Gate de manutenção via MCP/versionamento.

- Home aprovada.
- Página Sobre aprovada.
- Página Ansiedade aprovada.
- Página Depressão aprovada.
- Página Laudo de saúde mental para concurso aprovada.
- CTAs de agendamento direcionam ao WhatsApp.
- Formulário de agendamento e CRM estão fora do escopo desta versão.
- Staging permanece com `noindex,nofollow` e bloqueio de rastreamento.
