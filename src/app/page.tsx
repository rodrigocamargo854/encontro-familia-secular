'use client'
import { useState } from 'react'

const sections = [
  { title: 'Canto de Entrada', content: '— letra aqui —' },
  { title: 'Ato Penitencial', content: '— letra aqui —' },
  { title: 'Glória', content: '— letra aqui —' },
  { title: 'Salmo', content: '— letra aqui —' },
  { title: 'Aclamação ao Evangelho', content: '— letra aqui —' },
  { title: 'Ofertório', content: '— letra aqui —' },
  { title: 'Comunhão', content: '— letra aqui —' },
  { title: 'Canto Final', content: '— letra aqui —' },
]

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
<main className="bg-white min-h-screen max-w-2xl mx-auto py-10 px-4">    
<h1 className="text-2xl font-bold text-center mb-2 text-purple-800 drop-shadow-sm">
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
            className="w-full text-left px-4 py-2 bg-purple-600 text-white font-semibold"
          >
            {section.title}
          </button>
          {openIndex === index && (
            <div className="px-4 py-2 bg-white text-gray-800">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </main>
  )
}
