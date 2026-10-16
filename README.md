# Imagens-exercicio-2
Gerar imagens realistas a partir de diferentes tipos de desenho arquitectonico

## Moradia da Aroeira — ficheiros de modelação

Este repositório reúne o modelo OBJ/MTL e os scripts para Blender e SketchUp preparados no exercício. O modelo é uma **maqueta volumétrica aproximada**, construída por proporção visual, e não um levantamento métrico nem o modelo original dos arquitetos.

**Importante:** as imagens fotorrealistas geradas por IA na conversa não foram renderizadas a partir deste OBJ. O modelo 3D tem um nível de detalhe muito inferior e não reproduz integralmente essas imagens ou o edifício do PDF.

## Estrutura

```text
Imagens-exercicio-2/
├── README.md
├── .gitignore
├── model/
│   ├── Aroeira_approx_model.obj
│   └── Aroeira_approx_model.mtl
├── blender/
│   └── Aroeira_Blender_import.py
├── sketchup/
│   └── Aroeira_SketchUp_generator.rb
└── source/
    ├── README_source.md
    └── originals/
        └── Aroeira_Blender_import.py
```

Não estão incluídos o PDF de referência, as imagens da conversa ou ficheiros nativos `.blend` e `.skp` já gerados. O `.blend` é produzido localmente pelo script Blender; o `.skp` é guardado pelo utilizador depois de executar o gerador SketchUp.

## Utilizar no Blender

1. No GitHub, escolher **Code → Download ZIP** e extrair o ZIP completo. Manter as pastas `blender`, `model` e `source` na mesma pasta principal.
2. Guardar qualquer trabalho aberto e começar preferencialmente num ficheiro novo do Blender.
3. Abrir o espaço **Scripting**. No editor de texto, usar **Open** para abrir `blender/Aroeira_Blender_import.py`.
4. Escolher **Run Script** no editor de texto.
5. O script cria uma cena nova, importa o OBJ, configura unidades métricas, câmara e luzes, e grava uma cópia em `output/Aroeira_Blender.blend`. Se esse nome existir, utiliza um sufixo numérico, sem o substituir.

Não executar `source/originals/Aroeira_Blender_import.py`: é apenas o arquivo da versão anterior.

### Adaptações do script Blender nesta publicação

- Caminhos ajustados à estrutura de pastas do repositório, com verificação da existência do OBJ e MTL antes de criar a cena.
- Criação de uma cena nova em vez de apagar os objetos da cena existente.
- Seleção do importador disponível, separação por grupos e indicação explícita de Z como eixo vertical.
- Reorientação das faces apenas nas malhas importadas; as posições dos vértices e o OBJ original não são alterados.
- Seleção de um identificador EEVEE aceite pela versão instalada, em vez da verificação anterior em `bpy.types`.
- Gravação de uma cópia com nome não existente, na pasta `output`.

O ficheiro guardado contém os dados do ficheiro Blender aberto, incluindo outras cenas que existam; por isso recomenda-se começar num ficheiro novo.

Foi verificada a sintaxe Python, mas **não foi executado o script num Blender real neste ambiente**. O código contempla importadores de gerações diferentes, sem constituir certificação de compatibilidade com todas as versões.

## Utilizar no SketchUp

Usar a aplicação de computador com Ruby Console, num modelo novo/vazio. Abrir a Ruby Console e executar, substituindo o caminho pelo caminho real do ficheiro:

```ruby
load "C:/caminho/Imagens-exercicio-2/sketchup/Aroeira_SketchUp_generator.rb"
```

No Windows, usar barras `/` no caminho. Depois de o modelo ser criado, escolher **File → Save As** e guardar como `.skp`.

O gerador foi conservado tal como no pacote original. Adiciona grupos ao contexto ativo; executá-lo mais de uma vez pode duplicar os elementos. Foi verificada a sintaxe Ruby, mas não a execução dentro do SketchUp.

## Estado e limitações

O OBJ/MTL e o gerador Ruby publicados conservam os ficheiros anteriormente entregues. Não foi feita nesta publicação uma revisão geométrica da moradia. Dimensões, inclinações, níveis e posições são hipóteses; os vãos são painéis simplificados sobre volumes sólidos, sem detalhe construtivo ou distribuição interior completa. Não há texturas de fabricante, telhas individualizadas, vegetação, mobiliário ou pessoas no modelo.

A identificação do PDF, a autoria indicada nas pranchas, as especificações comunicadas pelo utilizador e as hipóteses geométricas estão registadas separadamente em [Referência e limites](source/README_source.md).

## Referências técnicas das instruções

- [GitHub — descarregar o repositório em ZIP](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives).
- [Blender 5.0 — alteração do identificador EEVEE](https://developer.blender.org/docs/release_notes/5.0/python_api/).
