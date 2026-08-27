# Regras de edição do site

Este repositório é a baseline aprovada do site médico.

## Regra central
Cada solicitação de alteração deve modificar apenas o necessário para cumprir o pedido e preservar todo o restante do site.

## Antes de editar
1. Identificar exatamente quais arquivos e componentes precisam mudar.
2. Não alterar copy, layout, cores, tipografia, SEO, links, schemas ou responsividade fora do escopo solicitado.
3. Manter `noindex,nofollow` e o `robots.txt` de staging até aprovação explícita para produção.

## Depois de editar
1. Verificar links e assets locais.
2. Confirmar apenas um H1 por página.
3. Verificar que os canonicals e metadados não foram alterados sem necessidade.
4. Verificar desktop e mobile quando houver mudança visual.
5. Registrar a alteração no CHANGELOG.md.
6. Criar commit descritivo e reversível.

## Publicação
Não conectar o domínio principal, remover `noindex` ou substituir `robots.txt` pela versão de produção sem aprovação explícita.
