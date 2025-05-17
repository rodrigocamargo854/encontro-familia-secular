'use client'
import { useState } from 'react'

const sections = [
  {
    title: '🎵 Canto de Entrada 1', content: `
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
    title: '🎵 Canto de Entrada 2',
    content: `
    <p><strong>Jesus Ressuscitou</strong></p>

    <p>Por Sua morte, a morte viu o fim<br />
    Do sangue derramado a vida renasceu<br />
    Seu pé ferido, nova estrada abriu<br />
    E, Neste Homem, o homem, enfim se descobriu</p>

    <p><strong>Meu coração me diz: o amor me amou<br />
    E se entregou por mim! Jesus ressuscitou!<br />
    Passou a escuridão, o Sol nasceu<br />
    A vida triunfou: Jesus ressuscitou!</strong></p>

    <p>Jesus me amou e se entregou por mim!<br />
    Os homens todos podem o mesmo repetir<br />
    Não temeremos mais a morte e a dor<br />
    O coração humano em Cristo descansou</p>

    <p><strong>Meu coração me diz: o amor me amou<br />
    E se entregou por mim! Jesus ressuscitou!<br />
    Passou a escuridão, o Sol nasceu<br />
    A vida triunfou: Jesus ressuscitou!</strong></p>
    `
  }
  ,

 
  {
    title: '🎵 Ato Penitencial',
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
  {
    title: '🎵 Glória',
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
    title: '📖 1ª Leitura',
    content: `
<p><strong>📖 Primeira Leitura (At 14,21b-27)</strong><br />
<em>Leitura dos Atos dos Apóstolos</em></p>
<p>Naqueles dias: Paulo e Barnabé,<br />
21b. voltaram para as cidades de Listra, Icônio e Antioquia.<br />
22. Encorajando os discípulos, eles os exortavam a permanecerem firmes na fé,<br />
dizendo-lhes: "É preciso que passemos por muitos sofrimentos para entrar no Reino de Deus".<br />
23. Os apóstolos designaram presbíteros para cada comunidade.<br />
Com orações e jejuns, eles os confiavam ao Senhor, em quem haviam acreditado.<br />
24. Em seguida, atravessando a Pisídia, chegaram à Panfília.<br />
25. Anunciaram a palavra em Perge, e depois desceram para Atália.<br />
26. Dali embarcaram para Antioquia, de onde tinham saído, entregues à graça de Deus,<br />
para o trabalho que haviam realizado.<br />
27. Chegando ali, reuniram a comunidade.<br />
Contaram-lhe tudo o que Deus fizera por meio deles e como havia aberto a porta da fé para os pagãos.</p>
<p><strong>— Palavra do Senhor.</strong><br />— Graças a Deus.</p>`
  },
  {
    title: '🎵 Salmo Responsorial',
    content: `
<p><strong>🎶 Salmo Responsorial Sl 144(145)</strong></p>
<p><strong>R:</strong> Bendirei o vosso nome, ó meu Deus, meu Senhor e meu Rei para sempre!</p>
<p>Misericórdia e piedade é o Senhor,<br />
Ele é amor, é paciência, é compaixão.<br />
O Senhor é muito bom para com todos,<br />
Sua ternura abraça toda criatura.</p>
<p>Que vossas obras, ó Senhor, vos glorifiquem,<br />
E os vossos santos com louvores vos bendigam!<br />
Narrem a glória e o esplendor do vosso reino<br />
E saibam proclamar vosso poder!</p>
<p>Para espalhar vossos prodígios entre os homens<br />
E o fulgor de vosso reino esplendoroso.<br />
O vosso reino é um reino para sempre,<br />
Vosso poder, de geração em geração.</p>`
  },
  {
    title: '📖 2ª Leitura',
    content: `
<p><strong>📖 Segunda Leitura (Ap 21,1-5a)</strong><br />
<em>Leitura do Livro do Apocalipse de São João</em></p>
<p>Eu, João,<br />
1. Vi um novo céu e uma nova terra.<br />
Pois o primeiro céu e a primeira terra passaram,<br />
e o mar já não existe.<br />
2. Vi a cidade santa, a nova Jerusalém,<br />
que descia do céu, de junto de Deus,<br />
vestida qual esposa enfeitada para o seu marido.<br />
3. Então, ouvi uma voz forte que saía do trono e dizia:<br />
"Esta é a morada de Deus entre os homens.<br />
Deus vai morar no meio deles.<br />
Eles serão o seu povo,<br />
e o próprio Deus estará com eles.<br />
4. Deus enxugará toda lágrima dos seus olhos.<br />
A morte não existirá mais,<br />
e não haverá mais luto, nem choro, nem dor,<br />
porque passou o que havia antes."<br />
5. Aquele que está sentado no trono disse:<br />
"Eis que faço novas todas as coisas."<br />
Depois, ele me disse: "Escreve,<br />
porque estas palavras são dignas de fé e verdadeiras."</p>
<p><strong>— Palavra do Senhor.</strong><br />— Graças a Deus.</p>`
  },
  {
    title: '🎵 Aclamação',
    content: `
<p><strong>Aleluia, Aleluia, Aleluia (2x)</strong></p>

<p><em>Acreditaste, Tomé, porque me viste.<br />
Felizes os que creram sem ter visto!</em></p>
`
  },

  {
    title: '📖 Evangelho',
    content: `
<p><strong>✝️ Evangelho (Jo 13,31-33a.34-35)</strong><br />
<em>Evangelho de Jesus Cristo + segundo João</em></p>
<p>31. Depois que Judas saiu do cenáculo, disse Jesus:<br />
"Agora foi glorificado o Filho do Homem, e Deus foi glorificado nele.<br />
32. Se Deus foi glorificado nele, também Deus o glorificará em si mesmo, e o glorificará logo.<br />
33a. Filhinhos, por pouco tempo estou ainda convosco.<br />
34. Eu vos dou um novo mandamento: amai-vos uns aos outros.<br />
Como eu vos amei, assim também vós deveis amar-vos uns aos outros.<br />
35. Nisto todos conhecerão que sois meus discípulos, se tiverdes amor uns aos outros."</p>
<p><strong>— Palavra da Salvação.</strong><br />— Glória a vós, Senhor.</p>`
  },

  {
    title: '🎵 Ofertório',
    content: `
  <p><strong>Pão e Vinho</strong><br />
  <em>(Milagre de Amor)</em></p>
  
  <p>Pão e vinho te apresentamos nesse altar,<br />
  Como sinal que Tu recolhes nossa oferta,<br />
  Tudo o que somos deixamos aqui. (2x)</p>
  
  <p>É um milagre que se dá:<br />
  O pão e o vinho em corpo e sangue,<br />
  Vão se transformar.</p>
  
  <p>Não há limites para o amor!<br />
  Vem transformar também minha vida,<br />
  Ó Senhor, é Teu esse milagre de amor.</p>
  `
  },
  {
    title: '🎵 Comunhão 1',
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
  {
    title: '🎵 Comunhão 2',
    content: `
  <p><strong>Senhor, quando te vejo no sacramento da comunhão</strong></p>
  
  <p>Senhor, quando te vejo no sacramento da comunhão,<br />
  Sinto o céu se abrir e uma luz a me atingir,<br />
  Esfriando minha cabeça e esquentando o meu coração.</p>
  
  <p>Senhor, graças e louvores sejam dadas a todo momento!<br />
  Quero te louvar na dor, na alegria e no sofrimento,<br />
  E se em meio à tribulação, eu me esquecer de Ti,<br />
  Ilumina minhas trevas com Tua luz.</p>
  
  <p><strong>Jesus, fonte de misericórdia que jorra do templo,<br />
  Jesus, o Filho da Rainha,<br />
  Jesus, rosto divino do homem,<br />
  Jesus, rosto humano de Deus.</strong></p>
  
  <p>Chego muitas vezes em Tua casa, meu Senhor,<br />
  Triste, abatido, precisando de amor.<br />
  Mas depois da comunhão, Tua casa é meu coração,<br />
  Então sinto o céu dentro de mim.</p>
  
  <p>Não comungo porque mereço, isso eu sei, ó meu Senhor,<br />
  Comungo pois preciso de Ti.<br />
  Quando faltei à missa, eu fugia de mim e de Ti,<br />
  Mas agora eu voltei, por favor aceita-me.</p>
  `
  },

  {
    title: '🎵 Canto Final-1',
    content: `
  <p><strong>Ressuscitou</strong></p>
  
  <p>Novo dia surgiu e o povo<br />
  Que andava nas trevas viu<br />
  Uma intensa luz, teu clarão<br />
  Tua glória a resplandecer</p>
  
  <p>Novo povo a trilhar um caminho<br />
  Aberto por tuas mãos<br />
  Obra nova enfim já podemos ver<br />
  Nova criação</p>
  
  <p><strong>Somos nós este povo<br />
  Alcançado por tua luz<br />
  Fruto da tua obra na cruz</strong></p>
  
  <p><strong>O Senhor nosso Deus<br />
  Que merece o louvor<br />
  Todo nosso amor<br />
  É o Rei que venceu<br />
  Ao Cordeiro, a vitória<br />
  Ao poder, honra e glória</strong></p>
  
  <p><strong>Ressuscitou!<br />
  Ressuscitou!</strong></p>
  
  <p>Um só povo, um só corpo<br />
  Um só canto pra teu louvor<br />
  Tua Igreja, tua esposa<br />
  Celebra o teu amor</p>
  
  <p>Soberano, majestoso<br />
  Glorioso, vencedor<br />
  Todos juntos, povo em festa<br />
  Num banquete que não findará!</p>
  
  <p><strong>O Senhor nosso Deus<br />
  Que merece o louvor<br />
  Todo nosso amor<br />
  É o Rei que venceu<br />
  Ao Cordeiro, a vitória<br />
  Ao poder, honra e glória</strong></p>
  
  <p><strong>Ressuscitou!<br />
  Ressuscitou!<br />
  Ressuscitou!</strong></p>
  `
  }
  ,
  {
    title: '🎵 Canto Final 2',
    content: `
  <p><strong>O Elevador</strong><br />
  
  <p>Uma pequena via me levará<br />
  Para os Teus altares, ó meu Rei<br />
  Pequeno serei, então encontrarei<br />
  Um lugar em Tuas mãos</p>
  
  <p>O Elevador que me fará subir até os céus<br />
  São os Teus braços, ó Jesus</p>
  
  <p>Uma pequena via me levará<br />
  Para os Teus altares, ó meu Rei<br />
  Pequeno serei, então encontrarei<br />
  Um lugar em Tuas mãos</p>
  
  <p>O Elevador que me fará subir até os céus<br />
  São os Teus braços, ó Jesus</p>
  
  <p>Crescer me é impossível<br />
  Devo suportar-me como sou<br />
  Não quero ser grande, mas sim<br />
  Teu pequenino</p>
  
  <p>Como pássaro livre a voar<br />
  Como a rosa no campo a nascer<br />
  Assim são os Teus pequenos</p>
  
  <p>Como a criança a correr<br />
  Para os Teus braços eu irei também<br />
  Para os Teus braços eu irei</p>
  `
  }

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
      <img
        src="/santatereza.png"
        alt="Santa Teresinha"
        className="mx-auto mb-8 w-40 "
      />


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
            <div className="px-4 py-2 bg-white text-gray-800 text-justify text-[17px] leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: section.content }} />

            </div>
          )}
        </div>
      ))}
    </main>
  )
}
