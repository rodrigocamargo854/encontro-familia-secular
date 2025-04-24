'use client'
import { useState } from 'react'

const sections = [
  {
    title: 'Canto de Entrada', content: `
    <p><strong>Porque Ele Vive</strong></p>
    
    <p>Deus enviou Seu Filho amado<br />
    Pra me salvar e perdoar<br />
    Na cruz morreu por meus pecados<br />
    Mas ressurgiu e vivo com o Pai está</p>
    
    <p><strong>Porque Ele vive, posso crer no amanhã<br />
    Porque Ele vive, temor não há<br />
    Mas eu bem sei, eu sei que a minha vida<br />
    Está nas mãos do meu Jesus que vivo está</strong></p>
    
    <p>Um dia, eu vou cruzar os rios<br />
    E verei então, um céu de luz<br />
    E verei que enfim, a minha alma<br />
    Terá descanso em Cristo, o Rei Jesus</p>
    `},
  {
    title: 'Ato Penitencial',
    content: `
  <p><strong>Senhor que viestes salvar</strong><br />
  <em>(Ato Penitencial)</em></p>
  
  <p>Senhor que viestes salvar<br />
  Os corações arrependidos<br />
  <strong>Piedade, Piedade<br />
  Piedade de nós (2x)</strong></p>
  
  <p>Ó Cristo que viestes chamar<br />
  Os pecadores humilhados<br />
  <strong>Piedade, Piedade<br />
  Piedade de nós (2x)</strong></p>
  
  <p>Senhor que intercedeis por nós<br />
  Junto a Deus Pai que nos perdoa<br />
  <strong>Piedade, Piedade<br />
  Piedade de nós (2x)</strong></p>
  `},
  { title: 'Glória',
    content: `
  <p><strong>Glória a Deus nas alturas</strong><br />
  E paz na terra aos homens por Ele amados</p>
  
  <p>Senhor Deus, Rei dos céus, Deus Pai, Todo-Poderoso<br />
  Nós Vos louvamos, Vos bendizemos<br />
  Vos adoramos, Vos glorificamos<br />
  Nós Vos damos graças por Vossa imensa glória</p>
  
  <p>Senhor Jesus Cristo, Filho unigênito<br />
  Senhor Deus, Cordeiro de Deus, Filho de Deus Pai<br />
  Vós que tirais o pecado do mundo, tende piedade de nós<br />
  Vós que tirais o pecado do mundo, acolhei a nossa súplica<br />
  Vós que estais à direita do Pai, tende piedade de nós</p>
  
  <p>Só Vós sois o Santo, só Vós o Senhor<br />
  Só Vós o Altíssimo, Jesus Cristo<br />
  Com o Espírito Santo, na glória de Deus Pai</p>
  
  <p><strong>Amém!</strong></p>
  `},

  {
    title: '1ª Leitura',
    content: `
<p><strong>📖 Primeira Leitura (At 5,12-16)</strong><br />
<em>Leitura dos Atos dos Apóstolos</em></p>
<p>12 Muitos sinais e maravilhas eram realizados entre o povo pelas mãos dos apóstolos. Todos os fiéis se reuniam, com muita união, no Pórtico de Salomão, 13 Nenhum dos outros ousava juntar-se a eles, mas o povo estimava-os muito. 14 Crescia sempre mais o número dos que aderiam ao Senhor pela fé; era uma multidão de homens e mulheres. 15 Chegavam a transportar para as praças os doentes em camas e macas, a fim de que, quando Pedro passasse, pelo menos a sua sombra tocasse alguns deles. 16 A multidão vinha até das cidades vizinhas de Jerusalém, trazendo doentes e pessoas atormentadas por maus espíritos. E todos eram curados.</p>
<p><strong>— Palavra do Senhor.</strong><br />— Graças a Deus.</p>
    `
  },
  {
    title: 'Salmo Responsorial',
    content: `
<p><strong>🎶 Salmo Responsorial Sl 117(118),2-4.22-24.25-27a (R. 1)</strong></p>
<p><strong>R:</strong> Dai graças ao Senhor, porque Ele é bom! "Eterna é a sua misericórdia!"</p>
<p>A casa de Israel agora o diga: "Eterna é a sua misericórdia!"<br />
A casa de Aarão agora o diga: "Eterna é a sua misericórdia!"<br />
Os que temem o Senhor agora o digam: "Eterna é a sua misericórdia!"</p>
<p>"A pedra que os pedreiros rejeitaram, tornou-se agora a pedra angular.<br />
Pelo Senhor é que foi feito tudo isso: Que maravilhas ele fez a nossos olhos!<br />
Este é o dia que o Senhor fez para nós, alegremo-nos e nele exultemos!"</p>
<p>"Ó Senhor, dai-nos a vossa salvação, ó Senhor, dai-nos também prosperidade!"<br />
Bendito seja, em nome do Senhor, aquele que em seus átrios vai entrando!<br />
Desta casa do Senhor vos bendizemos. Que o Senhor e nosso Deus nos ilumine!</p>
    `
  },
  {
    title: '2ª Leitura',
    content: `
<p><strong>📖 Segunda Leitura (Ap 1,9-11a.12-13.17-19)</strong><br />
<em>Leitura do Livro do Apocalipse de São João</em></p>
<p>9 Eu, João, vosso irmão e companheiro na tribulação, e também no reino e na perseverança em Jesus, fui levado à ilha de Patmos, por causa da Palavra de Deus e do testemunho que eu dava de Jesus. 10 No dia do Senhor, fui arrebatado pelo Espírito e ouvi atrás de mim uma voz forte, como de trombeta, 11a a qual dizia: "O que vais ver, escreve-o num livro." 12 Então voltei-me para ver quem estava falando; e ao voltar-me, vi sete candelabros de ouro. 13 No meio dos candelabros havia alguém semelhante a um "filho de homem", vestido com uma túnica comprida e com uma faixa de ouro em volta do peito. 17 Ao vê-lo, caí como morto a seus pés, mas ele colocou sobre mim sua mão direita e disse: "Não tenhas medo. Eu sou o Primeiro e o Último, 18 aquele que vive. Estive morto, mas agora estou vivo para sempre. Eu tenho a chave da morte e da região dos mortos. 19 Escreve, pois, o que viste, aquilo que está acontecendo e que vai acontecer depois."</p>
<p><strong>— Palavra do Senhor.</strong><br />— Graças a Deus.</p>
    `
  },
  {title: 'Aclamação',
    content: ``},

  {
    title: 'Evangelho',
    content: `
<p><strong>✝️ Evangelho (Jo 20,19-31)</strong><br />
<em>Evangelho de Jesus Cristo + segundo João</em></p>
<p><strong>— Aleluia, Aleluia, Aleluia.</strong><br />
"Acreditaste, Tomé, porque me viste. Felizes os que creram sem ter visto!"</p>
<p>19 Ao anoitecer daquele dia, o primeiro da semana, estando fechadas, por medo dos judeus, as portas do lugar onde os discípulos se encontravam, Jesus entrou e pondo-se no meio deles, disse: "A paz esteja convosco". 20 Depois destas palavras, mostrou-lhes as mãos e o lado. Então os discípulos se alegraram por verem o Senhor. 21 Novamente, Jesus disse: "A paz esteja convosco. Como o Pai me enviou, também eu vos envio". 22 E depois de ter dito isto, soprou sobre eles e disse: "Recebei o Espírito Santo. 23 A quem perdoardes os pecados eles lhes serão perdoados; a quem os não perdoardes, eles lhes serão retidos".</p>
<p>24 Tomé, chamado Dídimo, que era um dos doze, não estava com eles quando Jesus veio. 25 Os outros discípulos contaram-lhe depois: "Vimos o Senhor!". Mas Tomé disse-lhes: "Se eu não vir a marca dos pregos em suas mãos, se eu não puser o dedo nas marcas dos pregos e não puser a mão no seu lado, não acreditarei".</p>
<p>26 Oito dias depois, encontravam-se os discípulos novamente reunidos em casa, e Tomé estava com eles. Estando fechadas as portas, Jesus entrou, pôs-se no meio deles e disse: "A paz esteja convosco". 27 Depois disse a Tomé: "Põe o teu dedo aqui e olha as minhas mãos. Estende a tua mão e coloca-a no meu lado. E não sejas incrédulo, mas fiel".</p>
<p>28 Tomé respondeu: "Meu Senhor e meu Deus!" 29 Jesus lhe disse: "Acreditaste, porque me viste? Bem-aventurados os que creram sem terem visto!"</p>
<p>30 Jesus realizou muitos outros sinais diante dos discípulos, que não estão escritos neste livro. 31 Mas estes foram escritos para que acrediteis que Jesus é o Cristo, o Filho de Deus, e para que, crendo, tenhais a vida em seu nome.</p>
<p><strong>— Palavra da Salvação.</strong><br />— Glória a vós, Senhor.</p>`
  },

  { title: 'Ofertório', content: '— letra aqui —' },
  { title: 'Comunhão',
    content: `
  <p><strong>Na Comunhão, Jesus se dá no Pão</strong></p>
  
  <p>Na comunhão, Jesus se dá no pão,<br />
  O Cordeiro imolado é refeição.<br />
  Nosso alimento de amor e salvação,<br />
  Em torno deste altar somos irmãos.</p>
  
  <p><strong>O Pão da Vida és Tu, Jesus, o Pão do Céu.<br />
  O Caminho, a Verdade, via de amor,<br />
  Dom de Deus, nosso Redentor.</strong></p>
  
  <p>Toma e come, isto é o Meu Corpo<br />
  Que do trigo se faz pão, é refeição.<br />
  Na Eucaristia, o vinho se torna sangue,<br />
  Verdadeira bebida, nossa alegria.</p>
  ` },
  { title: 'Canto Final', content: '— letra aqui —' },
]



export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="bg-white min-h-screen max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl text-black font-bold text-center mb-2">
        Encontro Família Secular Missa de Domingo
      </h1>
      <h2 className="text-lg text-center text-gray-600 mb-4">
        2º Domingo da Páscoa - Ano C
      </h2>

      <div className="bg-gray-100 p-4 rounded-lg shadow mb-8">
        <h3 className="font-semibold mb-1">Antífona de Entrada</h3>
        <p className="italic text-gray-700">
          Como crianças recém-nascidas, desejai o puro leite espiritual para crescerdes na salvação, aleluia! <br />
          <span className="block mt-2 text-sm text-right text-gray-500">(1Pd 2,2)</span>
        </p>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="mb-4 border rounded-lg overflow-hidden shadow">
          <button
            onClick={() => toggle(index)}
            className="w-full text-center px-4 py-2 bg-amber-50 text-black font-semibold"
          >
            {section.title}
          </button>
          {openIndex === index && (
            <div className="px-4 py-2 bg-white text-gray-800">
              <div dangerouslySetInnerHTML={{ __html: section.content }} />

            </div>
          )}
        </div>
      ))}
    </main>
  )
}
