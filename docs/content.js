/* Prompts transcritos da conversa. Ortografia e mistura de idiomas preservadas. */
window.IAAA_CASES = [
{
 id:'lisboa', group:'Lisboa', number:'01', date:'08 out 2026', title:'Do esquiço à rua', subtitle:'Avenidas Novas · Lisboa', type:'Esquiço à mão → imagem realista',
 before:'lisboa-fonte', after:'lisboa-output', beforeLabel:'Esquiço fornecido', afterLabel:'Visualização gerada por IA',
 source:'Desenho de observação fornecido pelo utilizador nesta conversa. Edifício situado nas Avenidas Novas, segundo a descrição do prompt; endereço e autoria arquitetónica não identificados.',
 output:'sunny_art_deco_corner_in_lisbon.png',
 prompt:'isto é o desenho feito a vista do seguinte edificio: Edificio: Lisboa nas avenidas novas, edificio habitacional com comercio e servicos no piso 0, perspectiva Noroeste sueste.  é um edificio de meio do seculo 20 ou inicio da segunda metade do seculo 20. cor azul claro. inclui human prsence.Material: edificio em betao e alvenaria com molduras em pedra lioz bujardado. Light: luz das 14h em dia de ceu limpo em julho. Style: Realista. Preserve:  a traca do edificio e estilo da epoca mas com ambiente actual. Faz um render realista do edificio',
 intent:'Transformar um desenho de observação numa imagem com aparência fotográfica, especificando materiais, luz, ocupação e contexto urbano atual, sem perder a traça do edifício.',
 observed:'O resultado retém a esquina arredondada e as varandas sobrepostas. Acrescenta reboco azul-claro, elementos claros em pedra, comércio, automóveis, vegetação e pessoas.',
 caution:'A placa toponímica, os nomes das lojas e a envolvente são elementos gerados, não provas da localização real. A repetição dos vãos e as proporções devem ser verificadas contra o esquiço.',
 specs:[['Matéria','Azul-claro + lioz bujardado'],['Luz pedida','Julho · 14h · céu limpo'],['Preservar','Traça e linguagem da época']], refs:[]
},
{
 id:'paris', group:'Paris', number:'02', date:'08 out 2026', title:'Dar matéria ao volume', subtitle:'Próximo do Bois de Boulogne · Paris', type:'Vista de modelo 3D → imagem realista',
 before:'paris-fonte', after:'paris-output', beforeLabel:'Vista do modelo fornecida', afterLabel:'Visualização gerada por IA',
 source:'Imagem de um modelo tridimensional fornecida pelo utilizador. Paris, proximidade do Bois de Boulogne e construção no final dos anos 1920 são informações do prompt, não identificações verificadas externamente.',
 output:'autumn_modernist_house_by_the_park.png',
 prompt:'this is a modernist building built in late 20s of the 20th century. Edificio: Paris close to bois de bologne, edificio exclusivamente habitacional, perspectiva Noroeste sueste.  é um edificio de final da decada de 20  20 do seculo 20. cor beje claro. inclui human prsence.Material: edificio em betao e alvenaria com molduras de caixilharia de aluminio pretas. Light: luz das 14h em dia de ceu meio nublado no outono. . Style: Realista. Preserve:  a traca do edificio e estilo da epoca mas com ambiente actual. Faz um render realista do edificio',
 intent:'Passar de uma representação sem contexto para uma cena habitada, articulando linguagem modernista, reboco bege-claro, caixilharia preta e ambiente de outono.',
 observed:'Aparecem texturas de fachada, reflexos, vegetação outonal e pessoas. O resultado evoca o volume curvo e o envidraçado horizontal presentes na fonte.',
 caution:'O enquadramento, os muros e alguns detalhes dos volumes mudam. A imagem final não constitui uma reconstrução geométrica rigorosa do modelo fornecido.',
 specs:[['Matéria','Bege-claro + caixilharia preta'],['Luz pedida','Outono · 14h · parcialmente nublado'],['Preservar','Traça modernista dos anos 1920']], refs:[]
},
{
 id:'aroeira-dia', group:'Aroeira', number:'03', date:'08 out 2026', title:'Reinterpretar um render', subtitle:'Moradia na Herdade da Aroeira', type:'Render de referência → imagem realista',
 before:'aroeira-fonte', after:'aroeira-dia', beforeLabel:'Render fornecido', afterLabel:'Primeira visualização gerada',
 source:'Render fornecido pelo utilizador nesta conversa, também reconhecível na página 8 do PDF «013_aroeira_Imagens-03_09_22.pdf». As pranchas atribuem o projeto a CSF Arquitectos Associados e apresentam a data Setembro de 2003. O prompt indica uma moradia de 2008; registam-se as duas indicações sem as equiparar.',
 output:'mediterranean_villa_among_the_pines.png',
 prompt:'faz agora um render realista desta moradia na herdade da aroeira.  Edificio: moradia exclusivamente habitacional 0, perspectiva sudeste noroeste.  é uma moradia de 2008 coloca paredes brancas, planos com revestimento em pedra de arenito castanho claro bujardado. inclui human prsence. Material: edificio em betao e alvenaria com molduras em pedra arenito bujardado foro de janelas do piso superior em dadeira e forro interior do alpendre em madeira. Light: luz das 14h em dia de ceu limpo em julho. Style: Realista. Preserve:  a traca do edificio e estilo da epoca. Faz um render realista do edificio',
 intent:'Melhorar a aparência visual do render e alterar a paleta de materiais: paredes brancas, arenito claro e madeira. Acrescentar presença humana sob luz de verão.',
 observed:'O resultado conserva a leitura de dois pisos, alpendre, jardim com pinheiros e piscina. As paredes amarelas passam a brancas e a cena ganha materiais, mobiliário e pessoas com maior detalhe visual.',
 caution:'O aparelho da pedra fica mais irregular do que na fonte e nem todos os vãos ou elementos se mantêm. O aspeto da superfície não confirma tecnicamente o acabamento bujardado solicitado.',
 specs:[['Matéria','Branco + arenito claro + madeira'],['Luz pedida','Julho · 14h · céu limpo'],['Preservar','Traça e estilo da moradia']], refs:[['pdf-10','PDF · página 10'],['pdf-16','PDF · página 16']]
},
{
 id:'aroeira-cobre', group:'Aroeira', number:'04', date:'08 out 2026', title:'Afinar os materiais', subtitle:'Aroeira · segunda iteração', type:'Imagem anterior + instrução de materiais',
 before:'aroeira-dia', after:'aroeira-cobre', beforeLabel:'Primeira visualização', afterLabel:'Resultado da revisão de materiais',
 source:'A visualização anterior da moradia e o contexto material definido no primeiro prompt. Esta etapa acrescenta uma instrução específica, sem fornecer uma nova vista do edifício.',
 output:'sunlit_copper_tiled_pine_villa.png',
 prompt:'as chamines e tubos de ventilação e tubos de queda sao em cobre e a talha é telha plana coelho da silva. Refaz com esta informação mantendo tudo o restante',
 intent:'Restringir a revisão aos elementos em cobre e à telha plana Coelho da Silva, mantendo o restante resultado.',
 observed:'Os tubos verticais apresentam um tom acobreado e a textura da cobertura é revista. O jardim, o enquadramento e a presença humana permanecem visualmente próximos da versão anterior.',
 caution:'Continua visível uma chaminé revestida a pedra. A imagem não permite confirmar o modelo comercial da telha; o pedido de materiais não ficou integralmente demonstrado.',
 specs:[['Alteração','Chaminés e tubos em cobre'],['Cobertura pedida','Telha plana Coelho da Silva'],['Contexto herdado','Composição e luz da etapa anterior']], refs:[]
},
{
 id:'aroeira-azul', group:'Aroeira', number:'05', date:'12 out 2026', title:'Mudar a atmosfera', subtitle:'Aroeira · blue hour', type:'Imagem diurna → ambiente crepuscular',
 before:'aroeira-cobre', after:'aroeira-azul', beforeLabel:'Versão diurna', afterLabel:'Resultado em blue hour',
 source:'Resultado da revisão de materiais da etapa 04. Mantém-se o contexto acumulado da moradia, sendo pedidas apenas outra atmosfera e uma alteração de perspetiva.',
 output:'twilight_luxury_villa_by_the_pool.png',
 prompt:'faz agora uma alteração. coloca no contexto da blue hour e roda 15 graus a perspectiva',
 intent:'Explorar o contraste entre céu azul crepuscular e iluminação artificial quente, pedindo também uma rotação de 15° da perspetiva.',
 observed:'O céu escurece, os interiores acendem-se e aparecem luzes no jardim e na piscina. O enquadramento é alterado, mantendo reconhecível o conjunto.',
 caution:'A imagem não comprova uma rotação exata de 15°. A iluminação é uma interpretação visual, não um estudo luminotécnico; persistem desvios face à telha plana e à chaminé em cobre pedidas anteriormente.',
 specs:[['Atmosfera','Blue hour'],['Câmara pedida','Rotação de 15°'],['Contexto herdado','Moradia e materiais']], refs:[]
},
{
 id:'aroeira-cadeiras', group:'Aroeira', number:'06', date:'12 out 2026', title:'Editar uma zona assinalada', subtitle:'Aroeira · edição localizada', type:'Imagem anotada → alteração de mobiliário',
 before:'aroeira-marcacao', after:'aroeira-cadeiras', beforeLabel:'Fonte com marcação do utilizador', afterLabel:'Resultado da edição localizada',
 source:'A imagem em blue hour, reenviada pelo utilizador com um contorno vermelho em torno das espreguiçadeiras. A marcação define a zona sobre a qual incide o pedido.',
 output:'a_cinematic_dusk_evening_exterior_architectural_re.png',
 prompt:'roda 90 graus as cadeiras assinaladas',
 intent:'Usar a anotação gráfica para delimitar o objeto da edição e rodar as cadeiras 90°, preservando a cena restante.',
 observed:'A marcação vermelha deixa de aparecer e o grupo de espreguiçadeiras é recomposto. O contexto da casa e da piscina mantém-se próximo da imagem anterior.',
 caution:'Não é visível uma rotação inequívoca e rigorosa de 90°. A composição do grupo também muda: editar localmente não equivale a rodar objetos num modelo 3D controlado.',
 specs:[['Seleção','Contorno vermelho na fonte'],['Ação pedida','Rodar as cadeiras 90°'],['Contexto herdado','Blue hour']], refs:[]
},
{
 id:'aroeira-aerea', group:'Aroeira', number:'07', date:'12 out 2026', title:'Subir o ponto de vista', subtitle:'Aroeira · perspetiva aérea', type:'Vista de jardim → vista aérea inferida',
 before:'aroeira-cadeiras', after:'aroeira-aerea', beforeLabel:'Última vista de jardim', afterLabel:'Perspetiva aérea gerada',
 source:'Última imagem da sequência e descrição acumulada da moradia. Nesta etapa ainda não tinha sido anexado o PDF com outras perspetivas.',
 output:'a_cinematic_high_resolution_dusk_evening_aerial_o.png',
 prompt:'yyda me uma perspectiva aerea',
 intent:'Observar o edifício de cima sem voltar a descrever materiais e atmosfera, utilizando o contexto da conversa.',
 observed:'A vista aérea torna visíveis coberturas, disposição aparente dos volumes, piscina, jardim e uma estrada no fundo.',
 caution:'As zonas antes ocultas são completadas por inferência. A nova cobertura, a implantação e a relação com a estrada não devem ser tomadas como informação medida do edifício.',
 specs:[['Câmara pedida','Perspetiva aérea'],['Contexto herdado','Imagem anterior e blue hour'],['Informação nova','Superfícies antes ocultas']], refs:[]
},
{
 id:'aroeira-pdf', group:'Aroeira', number:'08', date:'12 out 2026', title:'Introduzir mais referências', subtitle:'Aroeira · confronto com o PDF', type:'Vista aérea + PDF de referência → revisão',
 before:'aroeira-aerea', after:'aroeira-pdf', beforeLabel:'Primeira perspetiva aérea', afterLabel:'Revisão apresentada no chat',
 source:'Imagem aérea da etapa 07 e PDF fornecido pelo utilizador: «013_aroeira_Imagens-03_09_22.pdf», 29 páginas, com vistas exteriores e interiores. Os excertos abaixo documentam referências disponíveis no ficheiro; não constituem um registo técnico dos dados efetivamente processados pelo gerador.',
 output:'twilight_mediterranean_villa_with_pool.png',
 prompt:'rectifica a ultima imagem tendo em conta o ficheiro pdf anexo que tem varias imagens do mesmo edificio em perspectivas diferentes',
 intent:'Pedir uma revisão da última imagem à luz de um conjunto adicional de vistas do mesmo projeto.',
 observed:'O resultado revê a configuração aparente das coberturas, a varanda e a organização do alpendre, mantendo a atmosfera crepuscular.',
 caution:'O PDF fornece referências visuais, mas o resultado continua a conter soluções inferidas. A relação entre coberturas, vãos e materiais exige comparação com as pranchas: esta revisão não valida uma reconstrução métrica.',
 specs:[['Nova referência','PDF · 29 páginas'],['Objetivo','Retificar a última vista aérea'],['Contexto herdado','Materiais e atmosfera']], refs:[['pdf-10','PDF · página 10'],['pdf-12','PDF · página 12'],['pdf-16','PDF · página 16']]
},
{
 id:'aroeira-oposto', group:'Aroeira', number:'09', date:'12 out 2026', title:'Olhar do lado oposto', subtitle:'Aroeira · acesso e fachada da rua', type:'Contexto acumulado + PDF → outra perspetiva',
 before:'pdf-02', after:'aroeira-oposto', beforeLabel:'Referência documental · PDF, p. 2', afterLabel:'Perspetiva oposta gerada',
 source:'Pedido feito após a revisão da vista aérea e a entrega do PDF. Mostra-se a página 2 como referência documental comparável da fachada de acesso; a imagem anterior do chat era a vista aérea da etapa 08.',
 output:'twilight_luxury_house_among_pines.png',
 prompt:'da me agora uma perspectiva do lado oposto do edificio',
 intent:'Gerar uma vista da fachada oposta à do jardim, mantendo o contexto arquitetónico e a atmosfera já definidos.',
 observed:'O resultado mostra o lado da garagem e do acesso, com uma cobertura dominante, envidraçado alto, automóveis e iluminação exterior.',
 caution:'A geometria da garagem, os muros, os portões e os pormenores diferem da referência. O número na fachada e os veículos não são dados verificados; a imagem é uma interpretação, não uma fotografia do local.',
 specs:[['Câmara pedida','Lado oposto do edifício'],['Referência comparada','Fachada de acesso · PDF, p. 2'],['Contexto herdado','PDF e blue hour']], refs:[['pdf-05','PDF · página 5']]
}
];
