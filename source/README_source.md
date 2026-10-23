# Referência e limites da reconstrução

## Documento fornecido na conversa

- Ficheiro: `013_aroeira_Imagens-03_09_22.pdf`.
- Título apresentado: **Moradia na Aroeira** (designação generalizada para este portefólio).
- Referência de localização: **Aroeira, Portugal** (identificação do lote omitida).
- Autoria indicada: **CSF Arquitectos Associados**.
- Data indicada: **Setembro de 2003**.
- 29 páginas com perspetivas exteriores e interiores.

O título familiar e a referência ao lote foram generalizados nesta cópia pública; os restantes dados documentais mantêm a proveniência.

As páginas 2–7 mostram a frente de acesso e as relações com o terreno; as páginas 8–20 mostram o jardim, os volumes, as coberturas, o alpendre e a piscina; as páginas 21–29 mostram espaços interiores e escadas.

O PDF não está incluído nesta publicação. As imagens geradas por IA na conversa também não estão incluídas.

## Informação do utilizador, distinta do documento

Na conversa, o utilizador descreveu a moradia como sendo de 2008 e pediu paredes brancas, arenito castanho-claro bujardado, madeira nos elementos do piso superior e no forro do alpendre, elementos de chaminés/ventilação/queda em cobre e telha plana Coelho da Silva. Foram ainda pedidos ensaios de luz de julho, blue hour, presença humana, rotação de perspetiva e vista aérea.

A data das pranchas e a data comunicada pelo utilizador são aqui registadas separadamente, sem deduzir uma cronologia de construção.

## O que os ficheiros 3D representam

O modelo publicado é a **maqueta volumétrica simplificada anteriormente gerada na conversa**, não o modelo original dos arquitetos. O OBJ e o gerador Ruby conservam as hipóteses geométricas anteriores; esta publicação não constitui uma nova reconstrução nem uma validação da sua fidelidade ao PDF.

O código usa, por exemplo, 18 × 6 m para o corpo principal do piso térreo, alturas de 3,0 m e 2,8 m e uma piscina de 10 × 4,5 m. Estes valores são hipóteses de modelação e **não medidas retiradas do PDF**.

Os vãos são painéis sobre volumes sólidos, sem aberturas construtivas completas. Não há distribuição interior completa, topografia levantada, detalhe de telhas, materiais de fabricante, mobiliário, vegetação ou pessoas. A geometria, os níveis, as coberturas e a posição dos elementos precisam de revisão com plantas e cortes cotados.

As imagens fotorrealistas produzidas por IA são interpretações visuais. Não foram renderizadas a partir deste OBJ e não comprovam a sua geometria.

## Rastreabilidade

`originals/Aroeira_Blender_import.py` conserva o script Blender anteriormente entregue. É uma cópia de arquivo, **não o script recomendado para execução**: apaga objetos da cena ativa, pressupõe os ficheiros na mesma pasta e tem limitações na seleção do motor EEVEE.

Para utilização, consultar `../blender/Aroeira_Blender_import.py` e o README principal, onde estão descritas as adaptações realizadas.
