/* Integração Grupo 9. Carregar depois de media.js/content.js e antes de app.js.
   As seis imagens ex1/ex2 devem ser copiadas da pasta imagens do repositório de Ana.
   Dados da colega transcritos do index.html, blob 2eb5847caaafb352666d3a8d7d7a69d9254d2ddf.
   Não atribui autoria arquitetónica nem a execução individual do novo caso a um membro.
*/
(() => {
  'use strict';
  window.IAAA_MEDIA = window.IAAA_MEDIA || {};
  Object.assign(window.IAAA_MEDIA, {
  "ana-alcado": "imagens/ex1-alcado.png",
  "ana-casas-output": "imagens/ex1-resultado.png",
  "ana-maquete": "imagens/ex2-maquete.png",
  "ana-planta": "imagens/ex2-planta.png",
  "ana-museu-v1": "imagens/ex2-resultado-1.png",
  "ana-museu-v2": "imagens/ex2-resultado-2.png",
  "faculdade-esquico": "imagens/faculdade-esquico.webp",
  "faculdade-v1": "imagens/faculdade-01.webp",
  "faculdade-v2": "imagens/faculdade-02.webp",
  "faculdade-v3": "imagens/faculdade-03.webp"
});
  const additions = [
  {
    "id": "ana-casas-gemini",
    "group": "Casas de campo",
    "date": "Data não documentada",
    "title": "Do alçado à paisagem",
    "subtitle": "Quatro casas de campo em madeira · exercício com Gemini",
    "type": "Alçado + prompt → resultado Gemini",
    "before": "ana-alcado",
    "after": "ana-casas-output",
    "beforeLabel": "Alçado de referência",
    "afterLabel": "Resultado publicado · Gemini",
    "source": "Exercício 01 da página de Ana Nascimento Silva. A fonte identifica um alçado e o Gemini como ferramenta. O texto do prompt foi transcrito do HTML publicado, incluindo campos entre parênteses retos e exemplos não preenchidos. A data de geração e a autoria arquitetónica não estão documentadas nessa página.",
    "sourceUrl": "https://anamariansilva.github.io/iaaa/#exercicio-01",
    "output": "ex1-resultado.png",
    "prompt": "Prompt para Embelezar Alçado de 4 Casas de Campo em Madeira:\n\"[Estilo de Renderização: ex: Fotorrealista], alçado frontal plano e perfeitamente ortográfico das minhas 4 casas de campo de refúgio em madeira.\nMateriais: A madeira deve ter [Textura desejada: ex: ripas verticais de cedro envelhecido, troncos rústicos, madeira carbonizada (Shou Sugi Ban)], com juntas metálicas sutis e discretas. Os telhados são de [Material do Telhado: ex: chapa metálica escura, telhas cerâmicas, telhado verde/vivo]. As janelas e portas têm caixilharias de [Material da Caixilharia: ex: alumínio preto, madeira na mesma cor] e vidros [Tipo de Vidro: ex: transparentes, refletindo a natureza].\nAmbiente: Separa as casas 3 metros umas das outras e adiciona vegetação entre elas. As casas estão integradas numa paisagem de [Tipo de Paisagem: ex: encosta de montanha, pinhal denso, campo aberto] sob um céu [Tipo de Céu: ex: limpo de fim de tarde, nublado suave]. No primeiro plano, existe vegetação rasteira [Tipo de Vegetação: ex: arbustos autóctones, relva silvestre] e [Adicionar detalhes: ex: um pequeno caminho de pedra, lenha empilhada].\nIluminação e Atmosfera: A luz é [Luz desejada: ex: 'golden hour' quente e suave, luz solar direta criando sombras dramáticas]. Uma luz quente e acolhedora emana do interior através das janelas. A atmosfera é de [Atmosfera desejada: ex: isolamento tranquilo, conforto rústico].\nDetalhes Técnicos: Alta resolução, renderizado em [Ferramenta: ex: Octane Render, V-Ray], [Adicionar estilo de traço se desejar: ex: com linhas de contorno finas e precisas para realçar a estrutura], [Opcional: Figuras humanas em escala minimalista para referência].\"",
    "intent": "Embelezar o alçado frontal de quatro casas de campo em madeira, articulando materiais, espaçamento pedido de 3 m, paisagem e atmosfera. Preserva-se o prompt publicado sem escolher por conta própria entre os exemplos.",
    "observed": "A página de origem apresenta um alçado como referência e uma imagem identificada como resultado do Gemini. Esta descrição regista a sequência documentada pela colega; não é uma medição do output.",
    "caution": "O prompt publicado conserva alternativas e instruções-modelo. Não é possível saber, apenas pela página, quais terão sido concretizadas antes da geração. Conferir a ortogonalidade, a separação entre casas e a fidelidade ao alçado.",
    "specs": [
      [
        "Ferramenta indicada",
        "Gemini"
      ],
      [
        "Fonte documental",
        "Página de Ana Nascimento Silva"
      ],
      [
        "Pedido geométrico",
        "Alçado frontal ortográfico; separação de 3 m"
      ]
    ],
    "refs": []
  },
  {
    "id": "ana-museu-v1",
    "group": "Montijo",
    "date": "Data não documentada",
    "title": "Museu: o primeiro pedido",
    "subtitle": "Museu de barcos no Montijo · versão 01",
    "type": "Maquete física + planta → resultado ChatGPT",
    "before": "ana-maquete",
    "after": "ana-museu-v1",
    "beforeLabel": "Maquete física · referência comum",
    "afterLabel": "Resultado publicado · versão 01",
    "source": "Exercício 02 da página de Ana Nascimento Silva. A maquete física e a planta de localização são apresentadas como referências comuns às duas tentativas. A planta é mostrada abaixo e integra o input desta versão.",
    "sourceUrl": "https://anamariansilva.github.io/iaaa/#exercicio-02",
    "output": "ex2-resultado-1.png",
    "prompt": "Faz um render com base nesta maquete e nesta planta. Este projeto está situado no Montijo rodeado de  água. É um museu de barcos e teve como referência de materialidades a ópera de Oslo. Em termos de dimensão, a parte mais alta do museu tem 20 metros.",
    "intent": "Gerar um render de um museu de barcos rodeado de água, com materialidades inspiradas na Ópera de Oslo e uma altura máxima indicada de 20 m.",
    "observed": "A colega publica esta imagem como o primeiro resultado do ChatGPT, associado ao prompt inicial. A página permite confrontá-lo com a maquete e a planta de referência.",
    "caution": "Montijo, a referência à Ópera de Oslo e os 20 m são dados do pedido. O aspeto do render não comprova uma altura medida nem a fidelidade de implantação; avaliar ambas contra as referências.",
    "specs": [
      [
        "Ferramenta indicada",
        "ChatGPT"
      ],
      [
        "Fontes de entrada",
        "Maquete + planta"
      ],
      [
        "Versão do prompt",
        "Inicial"
      ]
    ],
    "refs": [
      [
        "ana-planta",
        "Planta de localização · input comum"
      ]
    ],
    "referenceCredit": "Ana Nascimento Silva · página IAAA · exercício 02",
    "refsNote": "A maquete e a planta são inputs comuns às versões 01 e 02; a versão 02 não é apresentada na fonte como edição do primeiro render."
  },
  {
    "id": "ana-museu-v2",
    "group": "Montijo",
    "date": "Data não documentada",
    "title": "Museu: desenvolver o prompt",
    "subtitle": "Museu de barcos no Montijo · versão 02",
    "type": "Mesma maquete e planta + prompt desenvolvido",
    "before": "ana-maquete",
    "after": "ana-museu-v2",
    "beforeLabel": "Mesma maquete física",
    "afterLabel": "Resultado publicado · versão 02",
    "source": "Exercício 02 da página de Ana Nascimento Silva. Esta segunda tentativa usa as mesmas referências (maquete e planta), com um prompt de maior detalhe. O output da versão 01 surge apenas como comparação, não como fonte de entrada comprovada.",
    "sourceUrl": "https://anamariansilva.github.io/iaaa/#exercicio-02",
    "output": "ex2-resultado-2.png",
    "prompt": "Prompt para Renderização de um Museu de Barcos no Montijo\nEstilo de Renderização: Cria um render arquitetónico fotorrealista com base na maquete 3D e na planta fornecidas. Respeita a geometria, a volumetria, as proporções e a organização do projeto original, sem alterar a arquitetura. O projeto é um museu de barcos situado no Montijo, implantado sobre a água, com uma altura máxima de 20 metros.\nMateriais e Texturas: Utiliza como referência a Ópera de Oslo, com revestimentos em pedra natural clara, de textura subtil e acabamento mate. Integra grandes superfícies envidraçadas com caixilharias metálicas discretas, criando uma relação visual entre o interior do museu e a paisagem aquática.\nAmbiente e Envolvente: O edifício está rodeado pela água do estuário do Tejo, com reflexos naturais e pequenas ondulações. Ao fundo, inclui a linha do horizonte e a paisagem ribeirinha do Montijo. A envolvente deve ser simples e natural, destacando a arquitetura e a sua integração na água.\nIluminação e Atmosfera: Utiliza luz natural suave, com um céu parcialmente nublado ou a luz quente do final da tarde. Valoriza as texturas dos materiais, os reflexos na água e as sombras do edifício, criando uma atmosfera serena e contemporânea.\nDetalhes Técnicos: Renderização de alta resolução, com materiais realistas, iluminação natural e qualidade de fotografia profissional de arquitetura. Inclui algumas figuras humanas e, se adequado, barcos para dar escala ao edifício.\nInstrução Fundamental: Mantém rigorosamente a forma, a volumetria e a implantação da maquete e da planta fornecidas. Desenvolve apenas os materiais, a iluminação e a envolvente, utilizando a Ópera de Oslo como referência material e arquitetónica.",
    "intent": "Explicitar geometria, volumetria, proporções e implantação a preservar; desenvolver pedra natural clara, vidro, luz e paisagem aquática sem alterar a arquitetura.",
    "observed": "A página de origem apresenta um segundo resultado e coloca as duas versões lado a lado. A sua leitura destaca a passagem de um prompt inicial para outro mais desenvolvido, sem estabelecer uma melhoria quantificada.",
    "caution": "Não confundir um prompt mais detalhado com garantia de fidelidade. Verificar a correspondência entre o render, a maquete e a planta; a imagem anterior abaixo é apenas um termo de comparação.",
    "specs": [
      [
        "Ferramenta indicada",
        "ChatGPT"
      ],
      [
        "Fontes de entrada",
        "Mesma maquete + mesma planta"
      ],
      [
        "Versão do prompt",
        "Desenvolvido"
      ]
    ],
    "refs": [
      [
        "ana-planta",
        "Planta de localização · input comum"
      ],
      [
        "ana-museu-v1",
        "Versão 01 · comparação, não input"
      ]
    ],
    "referenceCredit": "Ana Nascimento Silva · página IAAA · exercício 02",
    "refsNote": "As duas tentativas são documentadas como respostas a prompts diferentes aplicados às mesmas referências."
  },
  {
    "id": "faculdade-inicial",
    "group": "Faculdade",
    "date": "Partilhado em 17 out 2026",
    "title": "Do esquiço à faculdade",
    "subtitle": "Edifício universitário · contexto descrito no prompt",
    "type": "Esquiço + prompt estruturado → imagem realista",
    "before": "faculdade-esquico",
    "after": "faculdade-v1",
    "beforeLabel": "Esquiço fornecido",
    "afterLabel": "Primeiro resultado fornecido",
    "source": "Caso adicional fornecido nesta conversa com um esquiço e três outputs, acompanhados por três prompts. A associação das imagens às etapas segue a ordem em que foram apresentadas. A localização e o programa são registados conforme o prompt, sem verificação externa. O pedido de pesquisa não equivale a prova de pesquisa efetuada.",
    "output": "Campus universitário moderno ao sol.png",
    "prompt": "BUILDING\nthis is an educational building, a university.\n\nCONTEXT\nthis building is located in “Cidade Universitária”, In Lisbon. search online for visual references. i want some human presence.\n\nMATERIAL\nthe building should have a light limestone. there are some stairs leading from the ground floor to the entrance. there are a lot of glass windows around.\n\nLIGHT\nso this is going to be a daytime scene. vibrant atmosphere. like a beautiful summer day.\n\nSTYLE\ni want a photorealistic image emulating the style os corona renderer\n\nPRESERVE\ni want to preserve the rhythm of the facade",
    "intent": "Especificar programa, contexto, materiais, luz, estilo e preservação do ritmo da fachada. Pedir calcário claro, vidro, escadas e presença humana numa cena diurna de verão.",
    "observed": "Na imagem fornecida surgem revestimento claro, pilares, faixas envidraçadas, escadaria e pessoas. O elemento horizontal comprido do corpo elevado aparece como uma grelha, motivo da correção seguinte.",
    "caution": "Corona Renderer é uma referência de aspeto pedida, não a confirmação do motor usado. O resultado visual não verifica a localização indicada ou as proporções do edifício; confrontar vãos, pilares e acessos com o esquiço.",
    "specs": [
      [
        "Matéria pedida",
        "Calcário claro e vidro"
      ],
      [
        "Luz pedida",
        "Dia de verão"
      ],
      [
        "Preservar",
        "Ritmo da fachada"
      ]
    ],
    "refs": []
  },
  {
    "id": "faculdade-placa",
    "group": "Faculdade",
    "date": "Partilhado em 17 out 2026",
    "title": "Corrigir a leitura da fachada",
    "subtitle": "Faculdade · placa, varanda e corrimão",
    "type": "Resultado anterior + correção textual",
    "before": "faculdade-v1",
    "after": "faculdade-v2",
    "beforeLabel": "Primeiro resultado",
    "afterLabel": "Segundo resultado fornecido",
    "source": "Segundo prompt e segundo output do caso universitário fornecidos nesta conversa. O texto menciona marcações vermelha, laranja e azul, mas a imagem com essas anotações não foi fornecida. Mostra-se o primeiro output sem afirmar que contém essas marcações.",
    "output": "Faculdade de Arquitetura em Lisboa-2.png",
    "prompt": "The \"fence\" is actually a plaque with the name of the faculty: \"Faculty of Architecture at the University of Lisbon\" and is much smaller (as shown in the red drawing). The facade material continues onto the balcony, which is surrounded by orange in the drawing, as does the handrail, drawn in blue.",
    "intent": "Substituir a leitura de uma vedação/grelha por uma pequena placa com o nome da faculdade. Pedir continuidade do material da fachada na varanda e no corrimão.",
    "observed": "O segundo output apresenta uma placa pequena em vez do elemento horizontal comprido. A leitura da zona da varanda é alterada face ao primeiro resultado.",
    "caution": "Sem a imagem anotada não é possível confirmar os limites exatos das zonas apontadas no prompt. Registar o pedido de continuidade material sem presumir execução perfeita; a cota da varanda motiva uma nova correção.",
    "specs": [
      [
        "Correção semântica",
        "Grelha/vedação → placa"
      ],
      [
        "Texto pedido",
        "Faculty of Architecture at the University of Lisbon"
      ],
      [
        "Referência em falta",
        "Imagem com as marcações de cor"
      ]
    ],
    "refs": []
  },
  {
    "id": "faculdade-final",
    "group": "Faculdade",
    "date": "Partilhado em 17 out 2026",
    "title": "Restituir a altura da varanda",
    "subtitle": "Faculdade · terceira etapa / final fornecido",
    "type": "Segundo resultado + correção da altura",
    "before": "faculdade-v2",
    "after": "faculdade-v3",
    "beforeLabel": "Segundo resultado",
    "afterLabel": "Terceiro resultado · final fornecido",
    "source": "Terceiro prompt e último dos três outputs fornecidos pelo utilizador para este caso. A imagem adicional gerada posteriormente nesta conversa não integra esta sequência, porque não corresponde a um novo pedido de geração do utilizador.",
    "output": "Faculdade de Arquitetura em Lisboa.png",
    "prompt": "The balcony is to remain at the same height as the rest, as it was before.",
    "intent": "Manter a varanda à mesma altura do restante conjunto, como estava antes, sem reabrir o pedido geral de materialidade e atmosfera.",
    "observed": "O terceiro output volta a alterar a zona da varanda/acesso e conserva a placa pequena na fachada. É apresentado aqui como o final fornecido, não como aprovação métrica do projeto.",
    "caution": "Uma perspetiva gerada não permite certificar cotas. Verificar o alinhamento da varanda com o primeiro resultado e com o desenho; “final” identifica a posição na sequência, não uma validação técnica.",
    "specs": [
      [
        "Correção pedida",
        "Altura da varanda"
      ],
      [
        "Contexto herdado",
        "Placa e materialidade"
      ],
      [
        "Estado",
        "Último output fornecido"
      ]
    ],
    "refs": [
      [
        "faculdade-v1",
        "Primeiro output · comparação de altura"
      ]
    ],
    "referenceCredit": "Grupo 9 · imagens fornecidas nesta conversa",
    "refsNote": "A altura deve ser confrontada com a versão inicial. Não foram disponibilizadas cotas ou uma imagem com marcações coloridas."
  }
];
  const existing = window.IAAA_CASES || [];
  const ids = new Set(existing.map(c => c.id));
  additions.forEach(c => { if (!ids.has(c.id)) { existing.push(c); ids.add(c.id); } });
  existing.forEach((c, index) => { c.number = String(index + 1).padStart(2, '0'); });
  window.IAAA_CASES = existing;
})();
