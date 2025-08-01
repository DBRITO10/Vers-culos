
const versiculos = [
  {
    texto: "Bem-aventurados os que choram, porque eles serão consolados.",
    referencia: "📖 Mateus 5:4",
    explicacao: "Deus vê suas lágrimas e promete consolo aos que sofrem."
  },
  {
    texto: "Lança o teu cuidado sobre o Senhor, e ele te susterá.",
    referencia: "📖 Salmos 55:22",
    explicacao: "Entregue suas preocupações a Deus. Ele cuidará de tudo."
  },
  {
    texto: "No amor não há temor, antes o perfeito amor lança fora o temor.",
    referencia: "📖 1 João 4:18",
    explicacao: "O amor de Deus elimina o medo. Nele há segurança."
  },
  {
    texto: "O meu socorro vem do Senhor, que fez o céu e a terra.",
    referencia: "📖 Salmos 121:2",
    explicacao: "Confie naquele que criou tudo. Ele é seu ajudador."
  },
  {
    texto: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.",
    referencia: "📖 Provérbios 3:5",
    explicacao: "Dependa de Deus, não da sua lógica. Ele sabe o melhor caminho."
  },
  {
    texto: "O Senhor é bom, uma fortaleza no dia da angústia.",
    referencia: "📖 Naum 1:7",
    explicacao: "Mesmo nos dias difíceis, Deus é sua proteção e bondade."
  },
  {
    texto: "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum.",
    referencia: "📖 Salmos 23:4",
    explicacao: "Deus caminha com você até nos momentos mais escuros."
  },
  {
    texto: "Sede fortes e revigorem o vosso coração, vós todos que esperais no Senhor.",
    referencia: "📖 Salmos 31:24",
    explicacao: "A esperança em Deus fortalece e renova a alma."
  },
  {
    texto: "Em paz me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.",
    referencia: "📖 Salmos 4:8",
    explicacao: "A verdadeira paz e segurança vêm do Senhor."
  },
  {
    texto: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    referencia: "📖 Salmos 46:1",
    explicacao: "Nos momentos de angústia, Deus está com você e é seu abrigo."
  },
  {
    texto: "Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.",
    referencia: "📖 Salmos 103:2",
    explicacao: "Lembre-se das bênçãos de Deus. Gratidão renova o coração."
  },
  {
    texto: "Elevo os meus olhos para os montes; de onde me virá o socorro?",
    referencia: "📖 Salmos 121:1",
    explicacao: "Olhe para cima. Seu socorro vem de Deus."
  },
  {
    texto: "Tudo posso naquele que me fortalece.",
    referencia: "📖 Filipenses 4:13",
    explicacao: "Com a força de Deus, nada é impossível para você."
  },
  {
    texto: "Guia-me na tua verdade, e ensina-me, pois tu és o Deus da minha salvação.",
    referencia: "📖 Salmos 25:5",
    explicacao: "Deus é seu mestre e salvador. Siga os caminhos dEle."
  },
  {
    texto: "O Senhor é a minha luz e a minha salvação; a quem temerei?",
    referencia: "📖 Salmos 27:1",
    explicacao: "Não há motivo para medo. Deus é sua segurança."
  },
  {
    texto: "Espera no Senhor, anima-te, e ele fortalecerá o teu coração.",
    referencia: "📖 Salmos 27:14",
    explicacao: "A espera em Deus traz força e coragem para seguir."
  },
  {
    texto: "Porque eu bem sei os pensamentos que penso de vós, diz o Senhor.",
    referencia: "📖 Jeremias 29:11",
    explicacao: "Deus tem planos de paz e esperança para o seu futuro."
  },
  {
    texto: "O Senhor te abençoe e te guarde.",
    referencia: "📖 Números 6:24",
    explicacao: "A proteção e a bênção de Deus estão sobre sua vida."
  },
  {
    texto: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
    referencia: "📖 Salmos 91:1",
    explicacao: "Há descanso e segurança para quem vive perto de Deus."
  },
  {
    texto: "Sabei que o Senhor é Deus; foi ele, e não nós, que nos fez.",
    referencia: "📖 Salmos 100:3",
    explicacao: "Reconheça que você pertence a Deus. Ele cuida de você."
  },
  {
    texto: "E Deus limpará de seus olhos toda lágrima.",
    referencia: "📖 Apocalipse 21:4",
    explicacao: "Não haverá mais dor, tristeza ou morte. Deus enxugará todas as lágrimas com Seu amor eterno."
  },
  {
    texto: "Eis que faço novas todas as coisas.",
    referencia: "📖 Apocalipse 21:5",
    explicacao: "Deus transforma o velho em novo. Há sempre esperança de recomeço em Cristo."
  },
  {
    texto: "Eis que estou à porta, e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa.",
    referencia: "📖 Apocalipse 3:20",
    explicacao: "Jesus deseja entrar no seu coração. Basta abrir a porta."
  },
  {
    texto: "Sê fiel até a morte, e dar-te-ei a coroa da vida.",
    referencia: "📖 Apocalipse 2:10",
    explicacao: "A fidelidade a Deus traz recompensa eterna. Não desista!"
  },
  {
    texto: "Ao que vencer, concederei que se assente comigo no meu trono.",
    referencia: "📖 Apocalipse 3:21",
    explicacao: "Os que perseveram com fé reinarão com Cristo. Há glória reservada para você."
  },
  {
    texto: "Eu sou o Alfa e o Ômega, o princípio e o fim.",
    referencia: "📖 Apocalipse 22:13",
    explicacao: "Deus está no controle do começo ao fim. Confie n’Ele."
  },
  {
    texto: "O Senhor Deus Todo-Poderoso é o seu templo, e o Cordeiro.",
    referencia: "📖 Apocalipse 21:22",
    explicacao: "Deus é a presença constante, não limitada a lugares. Ele habita em você."
  },
  {
    texto: "Bem-aventurados aqueles que guardam as palavras desta profecia.",
    referencia: "📖 Apocalipse 22:7",
    explicacao: "A obediência à Palavra traz bênçãos eternas."
  },
  {
    texto: "E não haverá mais noite, porque o Senhor Deus os iluminará.",
    referencia: "📖 Apocalipse 22:5",
    explicacao: "Deus é a luz eterna. Com Ele, não há escuridão."
  },
  {
    texto: "Eles o venceram pelo sangue do Cordeiro e pela palavra do seu testemunho.",
    referencia: "📖 Apocalipse 12:11",
    explicacao: "A vitória é sua por meio de Jesus e pela fé que você vive."
  },
  {
    texto: "E o mar já não existia.",
    referencia: "📖 Apocalipse 21:1",
    explicacao: "Deus fará novas todas as coisas, inclusive a criação. Um novo começo está por vir."
  },
  {
    texto: "E ele enxugará dos olhos toda lágrima; e não haverá mais morte, nem pranto, nem clamor, nem dor.",
    referencia: "📖 Apocalipse 21:4",
    explicacao: "A promessa de um futuro sem sofrimento traz consolo para hoje."
  },
  {
    texto: "O Senhor Deus lhes dará luz, e reinarão pelos séculos dos séculos.",
    referencia: "📖 Apocalipse 22:5",
    explicacao: "A luz de Deus nunca se apaga. Com Ele, reinamos para sempre."
  },
  {
    texto: "E cantavam um cântico novo diante do trono.",
    referencia: "📖 Apocalipse 14:3",
    explicacao: "Deus sempre traz novos motivos para louvar. Cante ao Senhor com alegria!"
  },
  {
    texto: "E abriram-se os livros; e outro livro foi aberto, que é o da vida.",
    referencia: "📖 Apocalipse 20:12",
    explicacao: "Deus vê e registra todas as coisas. Viva com fé e amor, pois seu nome está em Suas mãos."
  },
  {
    texto: "Bem-aventurado aquele que lê e ouve as palavras desta profecia.",
    referencia: "📖 Apocalipse 1:3",
    explicacao: "Ler a Palavra de Deus é ser abençoado com sabedoria e esperança."
  },
  {
    texto: "Santo, santo, santo é o Senhor Deus, o Todo-Poderoso.",
    referencia: "📖 Apocalipse 4:8",
    explicacao: "A santidade de Deus é eterna. Adore Aquele que reina para sempre."
  },
  {
    texto: "E Deus enxugará de seus olhos toda lágrima; não haverá mais morte.",
    referencia: "📖 Apocalipse 7:17",
    explicacao: "Deus é consolo em tempos difíceis e esperança para a eternidade."
  },
  {
    texto: "Não temas das coisas que hás de padecer.",
    referencia: "📖 Apocalipse 2:10",
    explicacao: "A fidelidade em tempos difíceis será recompensada com vida eterna."
  },
  {
    texto: "E vi um novo céu e uma nova terra.",
    referencia: "📖 Apocalipse 21:1",
    explicacao: "Deus está preparando algo glorioso. O melhor ainda está por vir."
  }
];
