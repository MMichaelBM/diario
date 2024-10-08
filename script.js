// Função para obter e exibir a data atual formatada
function showCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Formato: dia, mês por extenso, ano
    const formattedDate = now.toLocaleDateString('pt-BR', options);
    document.getElementById('currentDate').textContent = formattedDate;
}

// Mensagens motivacionais
const motivationalMessages = [
    "Acredite em você mesmo!",
    "Cada dia é uma nova oportunidade.",
    "O sucesso é a soma de pequenos esforços repetidos.",
    "Cada novo dia é uma chance para começar de novo.",
"O sucesso começa com a decisão de tentar.",
"A força de vontade supera qualquer obstáculo.",
"Nunca é tarde para ser aquilo que você poderia ter sido.",
"Grandes sonhos começam com pequenos passos.",
"Sua determinação hoje define seu sucesso amanhã.",
"Transforme seus desafios em oportunidades.",
"Tudo o que você precisa para vencer está dentro de você.",
"O fracasso é apenas o ponto de partida para o sucesso.",
"Faça hoje o que vai te deixar orgulhoso amanhã.",
"Pequenas vitórias constroem grandes conquistas.",
"Não é o destino, mas a jornada que importa.",
"O sucesso é a soma de pequenos esforços diários.",
"Seja a melhor versão de você mesmo, todos os dias.",
"O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
"Desafie-se a ser melhor a cada dia.",
"A única limitação é aquela que você impõe a si mesmo.",
"Enfrente seus medos e descubra sua verdadeira força.",
"Os melhores guerreiros são forjados nas batalhas mais difíceis.",
"Persistência é a chave para transformar sonhos em realidade.",
"A coragem é a resistência ao medo, não a ausência dele.",
"Não deixe que o medo de errar impeça você de tentar.",
"Grandes realizações exigem grandes sacrifícios.",
"Quando tudo parecer difícil, continue em frente.",
"Sua atitude determina sua altitude.",
"A vida começa onde sua zona de conforto termina.",
"Todo esforço será recompensado com o tempo.",
"Mantenha seus olhos nas estrelas e seus pés no chão.",
"Sucesso é a habilidade de ir de fracasso em fracasso sem perder o entusiasmo.",
"A disciplina é a ponte entre metas e realizações.",
"As dificuldades preparam pessoas comuns para destinos extraordinários.",
"Não espere o momento perfeito, faça o momento perfeito.",
"Todo grande sonho começa com um sonhador.",
"Você é mais forte do que pensa e mais capaz do que imagina.",
"Cada passo para frente é um passo mais perto de seus sonhos.",
"Acredite no poder do agora.",
"O que você faz hoje pode mudar todos os seus amanhãs.",
"O que você planta hoje, colhe amanhã.",
"O sucesso é construído com persistência e paciência.",
"Não se trata de ser perfeito, mas de progredir.",
"O único limite para a nossa realização de amanhã são as nossas dúvidas de hoje.",
"A vitória pertence aos mais perseverantes.",
"A vida recompensa aqueles que não desistem.",
"Você é capaz de coisas incríveis.",
"A determinação é o primeiro passo para a conquista.",
"Sua mente é poderosa. Quando você a enche de pensamentos positivos, sua vida começa a mudar.",
"Nunca subestime o poder de uma mente tranquila.",
"Grandes coisas nunca vêm de zonas de conforto.",
"O esforço de hoje será a sua conquista de amanhã.",
"Não pare até se orgulhar de si mesmo.",
"Com foco e determinação, você alcança qualquer coisa.",
"Se você pode sonhar, você pode realizar.",
"As dificuldades são o combustível do sucesso.",
"Nunca pare de aprender, pois a vida nunca para de ensinar.",
"Lembre-se: grandes coisas levam tempo.",
"A cada passo, você está mais perto do que imagina.",
"A felicidade não é um destino, mas uma maneira de viajar.",
"Quando você acredita em si mesmo, coisas incríveis acontecem.",
"Sucesso é a soma de pequenos esforços repetidos diariamente.",
"Persistir é o caminho para a vitória.",
"A coragem não é ausência de medo, é seguir em frente apesar dele.",
"Transforme seus sonhos em metas e suas metas em conquistas.",
"Cada dificuldade é uma oportunidade para crescer.",
"As maiores batalhas são vencidas com paciência e perseverança.",
"Não deixe que o medo te impeça de ser feliz.",
"Acredite que você pode, e você estará no meio do caminho.",
"Cada conquista começa com a decisão de tentar.",
"Nunca subestime o poder de uma mente determinada.",
"O sucesso é resultado de preparação, trabalho duro e aprendizado com o fracasso.",
"A força não vem da capacidade física, mas de uma vontade indomável.",
"O impossível é apenas uma opinião.",
"Tudo aquilo que você busca também está te buscando.",
"Se você quer resultados diferentes, faça algo diferente.",
"Você é capaz de mais do que imagina.",
"Seja ousado o suficiente para falhar e aprender.",
"O sucesso está a um passo da persistência.",
"O esforço de hoje é o resultado de amanhã.",
"O segredo da mudança é concentrar toda sua energia, não na luta contra o velho, mas na construção do novo.",
"Não desista, o início é sempre o mais difícil.",
    "Acredite no seu potencial e vá além dos seus limites",
"O sucesso começa quando você decide nunca desistir",
"Seja a mudança que você quer ver no mundo",
"A disciplina é o caminho mais curto para os seus sonhos",
"Toda jornada começa com o primeiro passo",
"Você é mais forte do que imagina",
"O esforço de hoje é o sucesso de amanhã",
"Grandes coisas nunca vêm de zonas de conforto",
"A persistência é o combustível dos vencedores",
"Cada falha é uma oportunidade para aprender e crescer",
"O único limite é aquele que você impõe a si mesmo",
"Não espere pela oportunidade, crie-a",
"Pequenos progressos diários resultam em grandes conquistas",
"O sucesso é a soma de pequenos esforços repetidos dia após dia",
"Você é o autor da sua própria história",
"Os melhores sonhos acontecem quando você está acordado",
"A coragem é a chave para transformar sonhos em realidade",
"Acredite em si mesmo e tudo será possível",
"O fracasso é uma curva no caminho, não um fim",
"Concentre-se no que você pode controlar, e deixe o resto ir",
"Seus sonhos são válidos, não importa o quão grandes ou pequenos",
"O impossível é apenas uma questão de opinião",
"O primeiro passo para conquistar é acreditar que você pode",
"A força não vem da capacidade física, mas de uma vontade inabalável",
"Sua única competição é quem você era ontem",
"Sucesso é a soma da preparação e da oportunidade",
"Seja grato pelo que tem, enquanto trabalha pelo que deseja",
"O otimismo é o ímã que atrai o sucesso",
"As melhores coisas da vida são conquistadas com persistência",
"O caminho para o sucesso é construído com determinação e foco",
"O amanhã é uma nova chance para ser ainda melhor",
"As dificuldades preparam pessoas comuns para destinos extraordinários",
"A chave do sucesso é começar antes de estar pronto",
"A verdadeira força está em não desistir, mesmo quando é difícil",
"Você não precisa ver a escada inteira, apenas dê o primeiro passo",
"Sonhe grande, trabalhe duro e nunca pare de acreditar",
"A vitória pertence aos que acreditam nela",
"A única maneira de fazer um grande trabalho é amar o que você faz",
"Quem olha para fora sonha, quem olha para dentro desperta",
"A ação é a chave fundamental para todo o sucesso",
    // Adicione mais 362 mensagens aqui...
];

// Trechos da Bíblia
const bibleVerses = [
    "João 14:6 – Eu sou o caminho, a verdade e a vida.",
    "Salmo 23:1 – O Senhor é o meu pastor; nada me faltará.",
    "Filipenses 4:13 – Tudo posso naquele que me fortalece.",
    "Acredite em você mesmo e tudo será possível.",
    "João 14:6 – Eu sou o caminho, a verdade e a vida.",
"Salmo 23:1 – O Senhor é o meu pastor; nada me faltará.",
"Filipenses 4:13 – Tudo posso naquele que me fortalece.",
"Mateus 11:28 – Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
"Jeremias 29:11 – Porque eu bem sei os pensamentos que penso de vós, diz o Senhor, pensamentos de paz, e não de mal, para vos dar o fim que esperais.",
"Romanos 8:28 – E sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus.",
"Provérbios 3:5-6 – Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.",
"Salmo 46:1 – Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
"Isaías 40:31 – Mas os que esperam no Senhor renovarão as suas forças.",
"Salmo 37:5 – Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",
"Isaías 41:10 – Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus.",
"Josué 1:9 – Não to mandei eu? Esforça-te, e tem bom ânimo; não temas, nem te espantes.",
"Salmo 91:1 – Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
"Mateus 6:33 – Mas buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.",
"Romanos 12:12 – Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração.",
"Salmo 121:1-2 – Elevo os meus olhos para os montes; de onde vem o meu socorro? O meu socorro vem do Senhor, que fez o céu e a terra.",
"1 Coríntios 16:13 – Vigiai, estai firmes na fé; portai-vos varonilmente, e fortalecei-vos.",
"Tiago 1:12 – Bem-aventurado o homem que suporta a provação, porque depois de aprovado receberá a coroa da vida.",
"Romanos 8:31 – Se Deus é por nós, quem será contra nós?",
"Salmo 34:8 – Provai, e vede que o Senhor é bom; bem-aventurado o homem que nele confia.",
"Salmo 27:1 – O Senhor é a minha luz e a minha salvação; a quem temerei?",
"Jeremias 33:3 – Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes, que não sabes.",
"Isaías 43:2 – Quando passares pelas águas estarei contigo, e quando pelos rios, eles não te submergirão.",
"Mateus 5:16 – Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras.",
"Hebreus 11:1 – Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem.",
"Salmo 55:22 – Lança o teu cuidado sobre o Senhor, e ele te susterá.",
"João 16:33 – No mundo tereis aflições, mas tende bom ânimo; eu venci o mundo.",
"Romanos 15:13 – Ora, o Deus de esperança vos encha de todo o gozo e paz em crença.",
"1 João 4:18 – No amor não há medo; antes, o perfeito amor lança fora o medo.",
"Efésios 6:10 – No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder.",
"Salmo 139:23-24 – Sonda-me, ó Deus, e conhece o meu coração; prova-me, e conhece os meus pensamentos.",
"Hebreus 13:8 – Jesus Cristo é o mesmo ontem, hoje e eternamente.",
"1 Pedro 5:7 – Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
"Salmo 56:3 – Em qualquer tempo em que eu temer, confiarei em ti.",
"João 3:16 – Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito.",
"Tiago 1:5 – E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente.",
"2 Coríntios 12:9 – A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.",
"1 João 5:14 – E esta é a confiança que temos nele, que, se pedirmos alguma coisa segundo a sua vontade, ele nos ouve.",
"Provérbios 16:3 – Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos.",
"Hebreus 10:23 – Retenhamos firmes a confissão da nossa esperança, porque fiel é o que prometeu.",
"Salmo 28:7 – O Senhor é a minha força e o meu escudo; nele confiou o meu coração.",
"Mateus 18:20 – Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles.",
"Provérbios 18:10 – Torre forte é o nome do Senhor; a ela correrá o justo, e estará em alto refúgio.",
"Salmo 119:105 – Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.",
"2 Timóteo 1:7 – Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.",
"Isaías 54:17 – Toda a ferramenta preparada contra ti não prosperará.",
"Tiago 4:7 – Sujeitai-vos, pois, a Deus; resisti ao diabo, e ele fugirá de vós.",
"Romanos 10:17 – De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus.",
"Salmo 118:24 – Este é o dia que fez o Senhor; regozijemo-nos e alegremo-nos nele.",
"1 Tessalonicenses 5:16-18 – Regozijai-vos sempre. Orai sem cessar. Em tudo dai graças.",
"Mateus 7:7 – Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á.",
"Filipenses 2:14 – Fazei todas as coisas sem murmurações nem contendas.",
"Efésios 3:20 – Ora, àquele que é poderoso para fazer tudo muito mais abundantemente além daquilo que pedimos ou pensamos.",
"Romanos 5:8 – Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores.",
"Mateus 19:26 – A Jesus, olhando para eles, disse-lhes: Aos homens é isso impossível, mas a Deus tudo é possível.",
"2 Coríntios 5:7 – Porque andamos por fé, e não por vista.",
"Lucas 1:37 – Porque para Deus nada é impossível.",
"1 Coríntios 10:13 – Não veio sobre vós tentação, senão humana; mas fiel é Deus, que não vos deixará tentar acima do que podeis.",
"Hebreus 4:16 – Cheguemo-nos, pois, com confiança ao trono da graça, para que possamos alcançar misericórdia.",
"Salmo 103:1 – Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o seu santo nome.",
"Isaías 26:3 – Tu conservarás em paz aquele cuja mente está firme em ti, porque ele confia em ti.",
"Salmo 16:8 – Tenho posto o Senhor continuamente diante de mim; por isso que ele está à minha mão direita, nunca vacilarei.",
"Mateus 6:34 – Não vos inquieteis, pois, pelo dia de amanhã, porque o dia de amanhã cuidará de si mesmo.",
"1 Pedro 2:24 – Pelas suas pisaduras fostes sarados.",
"Colossenses 3:23 – E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor, e não aos homens.",
"Mateus 5:9 – Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus.",
"Salmo 145:18 – Perto está o Senhor de",
"Salmo 91:11 – Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.",
"Efésios 2:8 – Porque pela graça sois salvos, por meio da fé; e isso não vem de vós, é dom de Deus.",
"2 Coríntios 5:17 – Assim que, se alguém está em Cristo, nova criatura é.",
"Provérbios 3:6 – Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
"Salmo 62:1 – A minha alma espera somente em Deus; dele vem a minha salvação.",
"João 8:12 – Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida.",
"Isaías 40:29 – Dá força ao cansado, e multiplica as forças ao que não tem nenhum vigor.",
"Mateus 28:20 – E eis que eu estou convosco todos os dias, até a consumação dos séculos.",
"Salmo 34:19 – Muitas são as aflições do justo, mas o Senhor o livra de todas.",
"1 Coríntios 2:9 – As coisas que o olho não viu, e o ouvido não ouviu, e não subiram ao coração do homem, são as que Deus preparou para os que o amam.",
"Romanos 8:1 – Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus.",
"Tiago 4:10 – Humilhai-vos perante o Senhor, e ele vos exaltará.",
"Isaías 53:5 – Mas ele foi ferido pelas nossas transgressões, e moído pelas nossas iniquidades.",
"Hebreus 13:5 – Não te deixarei, nem te desampararei.",
"1 Tessalonicenses 5:24 – Fiel é o que vos chama, o qual também o fará.",
"1 Coríntios 13:13 – Agora, pois, permanecem a fé, a esperança e o amor, estes três; mas o maior destes é o amor.",
"Romanos 8:18 – Porque para mim tenho por certo que as aflições deste tempo presente não são para comparar com a glória que em nós há de ser revelada.",
"Gálatas 6:9 – E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido.",
"Salmo 18:2 – O Senhor é o meu rochedo, a minha fortaleza, e o meu libertador.",
"Mateus 7:12 – Tudo o que vós quereis que os homens vos façam, fazei-lho também vós.",
"João 14:27 – Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá.",
"Provérbios 4:23 – Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.",
"Filipenses 4:19 – O meu Deus, segundo as suas riquezas, suprirá todas as vossas necessidades em glória, por Cristo Jesus.",
"Salmo 46:10 – Aquietai-vos, e sabei que eu sou Deus.",
"João 6:35 – Eu sou o pão da vida; aquele que vem a mim não terá fome.",
"Colossenses 3:15 – E a paz de Deus, para a qual também fostes chamados em um corpo, domine em vossos corações.",
"1 Coríntios 15:58 – Portanto, meus amados irmãos, sede firmes e constantes, sempre abundantes na obra do Senhor.",
"2 Timóteo 3:16 – Toda a Escritura é divinamente inspirada, e é proveitosa para ensinar, para redarguir, para corrigir.",
"Salmo 119:11 – Escondi a tua palavra no meu coração, para eu não pecar contra ti.",
"Salmo 18:30 – O caminho de Deus é perfeito; a palavra do Senhor é provada.",
"Tiago 1:17 – Toda a boa dádiva e todo o dom perfeito vêm do alto, descendo do Pai das luzes.",
"1 Coríntios 1:9 – Fiel é Deus, pelo qual fostes chamados para a comunhão de seu Filho Jesus Cristo.",
"Salmo 40:1 – Esperei com paciência pelo Senhor, e ele se inclinou para mim, e ouviu o meu clamor.",
"Mateus 6:21 – Porque onde estiver o vosso tesouro, aí estará também o vosso coração.",
"Lucas 11:9 – Pedi, e dar-se-vos-á; buscai, e achareis; batei, e abrir-se-vos-á.",
"Gálatas 2:20 – Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim.",
"Romanos 12:2 – Não vos conformeis com este mundo, mas transformai-vos pela renovação da vossa mente.",
"Isaías 30:21 – E os teus ouvidos ouvirão a palavra do que está por detrás de ti, dizendo: Este é o caminho; andai nele.",
"Salmo 37:4 – Deleita-te também no Senhor, e ele te concederá o que deseja o teu coração.",
"1 João 1:9 – Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda injustiça.",
    "Salmos 23:1, O Senhor é meu pastor, nada me faltará",
"Filipenses 4:13, Tudo posso naquele que me fortalece",
"Provérbios 3:5, Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento",
"Salmos 37:5, Entrega o teu caminho ao Senhor; confia nele, e ele o fará",
"Jeremias 29:11, Pois eu bem sei os planos que tenho para vós, diz o Senhor, planos de paz e não de mal, para vos dar o fim que desejais",
"Salmos 91:1, Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará",
"Salmos 37:4, Deleita-te também no Senhor, e ele te concederá o que deseja o teu coração",
"Mateus 6:33, Buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas",
"Romanos 8:28, E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus",
"Mateus 5:4, Bem-aventurados os que choram, porque eles serão consolados",
"Filipenses 4:7, A paz que excede todo o entendimento guardará os vossos corações e as vossas mentes em Cristo Jesus",
"Hebreus 11:1, Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que não se veem",
"Salmos 27:1, O Senhor é a minha luz e a minha salvação; a quem temerei?",
"Deuteronômio 31:6, Sede fortes e corajosos; não temais, nem vos atemorizeis, pois o Senhor vosso Deus vai convosco; ele não vos deixará, nem vos desamparará",
"Jeremias 33:3, Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes",
"2 Coríntios 4:17, Porque a nossa leve e momentânea tribulação produz para nós um peso eterno de glória",
"Filipenses 4:19, E o meu Deus suprirá todas as vossas necessidades, segundo a sua gloriosa riqueza em Cristo Jesus",
"Tiago 4:7, Sujeitai-vos, pois, a Deus; resisti ao diabo, e ele fugirá de vós",
"Filipenses 4:6, Não andeis ansiosos por coisa alguma; antes, em tudo, sejam os vossos pedidos conhecidos diante de Deus pela oração e súplica, com ação de graças",
"Salmos 27:14, Espera no Senhor, anima-te, e ele fortalecerá o teu coração",
"Mateus 5:9, Bem-aventurados os pacificadores, porque serão chamados filhos de Deus",
"Salmos 46:10, Aquietai-vos, e sabei que eu sou Deus; serei exaltado entre as nações, serei exaltado sobre a terra",
"Romanos 15:13, Ora, o Deus de esperança vos encha de todo o gozo e paz no vosso crer, para que sejais ricos de esperança no poder do Espírito Santo",
"Isaías 41:13, Porque eu sou o Senhor teu Deus, que te toma pela tua mão direita e te diz: Não temas, eu te ajudarei",
"Josué 1:6, Esforça-te e tem bom ânimo, porque tu farás a este povo herdar a terra que jurei a seus pais lhes dar",
"Lamentações 3:25, O Senhor é bom para os que nele esperam, para a alma que o busca",
"Salmos 121:7, O Senhor te guardará de todo mal; ele guardará a tua vida",
"Mateus 5:6, Bem-aventurados os que têm fome e sede de justiça, porque serão fartos",
"Salmos 126:3, Com efeito, grandes coisas fez o Senhor por nós; por isso estamos alegres",
"Isaías 40:31, Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão",


    
    // Adicione mais 362 trechos aqui...
];

// Função para obter o número do dia no ano (1 a 365)
function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Função para exibir as mensagens do dia
function showMessages() {
    const dayOfYear = getDayOfYear();
    const motivationalMessage = motivationalMessages[dayOfYear % motivationalMessages.length];
    const bibleVerse = bibleVerses[dayOfYear % bibleVerses.length];

    document.getElementById('motivational').textContent = motivationalMessage;
    document.getElementById('bibleVerse').textContent = bibleVerse;
}

// Chama as funções ao carregar a página
window.onload = function() {
    showMessages();
    showCurrentDate(); // Exibe a data atual
};
