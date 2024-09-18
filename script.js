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
    // Adicione mais 362 mensagens aqui...
];

// Trechos da Bíblia
const bibleVerses = [
    "João 14:6 – Eu sou o caminho, a verdade e a vida.",
    "Salmo 23:1 – O Senhor é o meu pastor; nada me faltará.",
    "Filipenses 4:13 – Tudo posso naquele que me fortalece.",
    "Acredite em você mesmo e tudo será possível.",

    
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
