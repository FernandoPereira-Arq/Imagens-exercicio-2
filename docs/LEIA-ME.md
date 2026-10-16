# Do traço à imagem — IAAA / Exercício 02

Portefólio HTML com os inputs, os nove outputs de imagem e os prompts utilizados nesta conversa. A página distingue as instruções do utilizador, a descrição visual posterior dos resultados e os aspetos a validar.

## Estado da preparação

O código está nesta pasta: `index.html`, `style.css`, `content.js` e `app.js`. **Falta carregar `media.js`**, disponibilizado na conversa. Esse único ficheiro contém as 18 imagens incorporadas (fontes, outputs e cinco excertos do PDF). Enquanto não for carregado, a página apresenta marcadores de imagem e um aviso.

Também foi entregue na conversa uma versão autónoma, `IAAA_do_traco_a_imagem.html`, com tudo incorporado num só ficheiro, para abrir e rever no browser. O ficheiro autónomo não está neste repositório.

## Próximo passo: carregar as imagens

1. Descarregar `media.js` da conversa, conservando exatamente esse nome e a extensão `.js`.
2. Nesta pasta **docs**, selecionar **Add file → Upload files**, escolher `media.js` e confirmar **Commit changes** na branch **main**.
3. Não carregar um ZIP nem colar o texto do ficheiro. Não são necessárias imagens adicionais.

O ficheiro `media.js` tem aproximadamente 6,72 MiB, abaixo do limite de 25 MiB por ficheiro para upload pelo browser.

## Publicar com GitHub Pages

Depois de carregar `media.js`: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: /docs → Save**.

A configuração de Pages e a visibilidade do repositório não foram alteradas. Ainda não há um endereço público verificado desta página.

**Privacidade:** GitHub Free exige um repositório público para Pages. GitHub Pro permite usar um repositório privado como origem, mas o site publicado continua normalmente acessível ao público. Não tornar todo este repositório público sem rever os ficheiros e o histórico já existentes. Uma alternativa gratuita é criar um novo repositório público apenas para o HTML autónomo revisto, renomeado `index.html`, e publicar a partir de `main / (root)`.

## Conteúdo

- Lisboa: esquiço fornecido → imagem realista.
- Paris: vista do modelo digital → imagem realista.
- Aroeira: render inicial → materiais → cobre/telha → blue hour → espreguiçadeiras → vista aérea → revisão pedida com PDF → lado oposto.
- Comparação lado a lado, sobreposição com slider, ampliação, filtros e exportação dos prompts.
- Fonte e output identificados em cada etapa; transcrição dos prompts sem correção da ortografia.

A documentação identifica CSF Arquitectos Associados e Setembro de 2003 nas pranchas da Aroeira. As informações de localização, época, materiais e luz nos prompts não foram verificadas externamente. Os excertos do PDF foram incluídos como referência documental, não como prova de uma reconstrução métrica. A moradia de 2008 é a indicação do utilizador, distinta da data das pranchas.

**As imagens de IA não são renders do OBJ ou do modelo Blender/SketchUp existente neste repositório.** A página não cria um novo modelo 3D.

## Verificação e edição

Testados em Chromium: navegação nas nove etapas, correspondência dos prompts, carregamento das imagens, comparação, ampliação, filtros, exportação de texto e larguras de computador/telemóvel sem transbordo horizontal. Teste feito com HTML carregado diretamente por Playwright; publicação em rede ainda não testada.

Editar os textos dos casos em `content.js`, o aspeto em `style.css`, a estrutura em `index.html` e as interações em `app.js`. Não editar `media.js` manualmente. A página é estática e não depende de serviços externos.

## Fontes das instruções de publicação

- [Criar um site GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configurar a origem da publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Carregar ficheiros pelo browser](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

Instruções verificadas em 16 de outubro de 2026. Rever autoria, autorização de divulgação e elementos identificativos da moradia antes de publicar.
