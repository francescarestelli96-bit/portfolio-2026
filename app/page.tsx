'use client';
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const content = {
    it: {
      boxes: [
        { id: 1, title: "Ciao", sub: "FRANCESCA RESTELLI", emoji: "👋", color: "bg-pastel-blue", 
          text: "Ciao, sono Francesca. Il mio percorso nel mondo tech non è stato lineare, ed è proprio questo il mio punto di forza. Dopo un'esperienza nel settore HR, ho deciso di assecondare la mia vocazione analitica e creativa studiando sviluppo web. Oggi unisco la capacità di comprendere i bisogni delle persone con la precisione tecnica del codice." },
        { id: 2, title: "Moto", sub: "DUCATI MONSTER 696", emoji: "🏍️", color: "bg-pastel-green", image: "/moto.jpg",
          text: "La mia Ducati Monster 696 rappresenta il mio equilibrio. Guidare richiede concentrazione e rapidità decisionale. Porto questa stessa mentalità nel mio lavoro: affrontare le sfide con grinta e risolvere i problemi in tempo reale." },
        { id: 3, title: "Progetti", sub: "SELECTED PROJECTS", emoji: "→", color: "bg-slate-900", 
          text: "Clicca sui progetti per vedere il codice su GitHub.",
          projects: [
            { name: "Ridescape", url: "https://github.com/francescarestelli96-bit/ridescape" },
            { name: "Alberto Chines Site", url: "https://github.com/francescarestelli96-bit/albertochines-site" },
            { name: "Relax Room", url: "https://github.com/francescarestelli96-bit/relax-room" },
            { name: "Merry Xmas Dave", url: "https://github.com/francescarestelli96-bit/merry-xmas-dave" }
          ]
        },
        { id: 4, title: "Tech+HR", sub: "HR TO DEVELOPER", emoji: "👩‍💻", color: "bg-pastel-yellow", 
          text: "Skill principali: JavaScript (ES6+), React, Next.js, Tailwind CSS e Git. La mia transizione è stata guidata dalla voglia di costruire strumenti che facilitano la vita delle persone." },
        { id: 5, title: "Contact", sub: "AVAILABLE NOW", emoji: "💌", color: "bg-pastel-pink", 
          text: "Sono disponibile per nuove opportunità. Scrivimi o cercami sui social:",
          socials: [
            { name: "Email", url: "mailto:francesres@icloud.com" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/francesca-restelli-413b6376?originalSubdomain=it" },
            { name: "Instagram", url: "https://www.instagram.com/francescarestelli_webiker/" },
            { name: "GitHub", url: "https://github.com/francescarestelli96-bit" }
          ]
        },
        { id: 6, title: "About", sub: "MILAN, ITALY", emoji: "🇮🇹", color: "bg-white/80", 
          text: "Credo nel 'less is more'. Vivo a Milano, una città che mi ispira continuamente con il suo mix di design storico e innovazione tecnologica." }
      ]
    },
    en: {
      boxes: [
        { id: 1, title: "Hello", sub: "FRANCESCA RESTELLI", emoji: "👋", color: "bg-pastel-blue", 
          text: "Hi, I’m Francesca. My journey into tech hasn't been linear. I combine human needs with technical coding precision." },
        { id: 2, title: "Bike", sub: "DUCATI MONSTER 696", emoji: "🏍️", color: "bg-pastel-green", image: "/moto.jpg",
          text: "My Ducati Monster 696 represents my balance. I bring this same mindset to my work: grit and real-time problem solving." },
        { id: 3, title: "Works", sub: "SELECTED PROJECTS", emoji: "→", color: "bg-slate-900", 
          text: "Click on projects to view the source code on GitHub.",
          projects: [
            { name: "Ridescape", url: "https://github.com/francescarestelli96-bit/ridescape" },
            { name: "Alberto Chines Site", url: "https://github.com/francescarestelli96-bit/albertochines-site" },
            { name: "Relax Room", url: "https://github.com/francescarestelli96-bit/relax-room" },
            { name: "Merry Xmas Dave", url: "https://github.com/francescarestelli96-bit/merry-xmas-dave" }
          ]
        },
        { id: 4, title: "Tech+HR", sub: "HR TO DEVELOPER", emoji: "👩‍💻", color: "bg-pastel-yellow", 
          text: "Core skills: JavaScript (ES6+), React, Next.js, Tailwind CSS, and Git." },
        { id: 5, title: "Contact", sub: "AVAILABLE NOW", emoji: "💌", color: "bg-pastel-pink", 
          text: "Currently available for new opportunities. Reach me here:",
          socials: [
            { name: "Email", url: "mailto:francesres@icloud.com" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/francesca-restelli-413b6376?originalSubdomain=it" },
            { name: "Instagram", url: "https://www.instagram.com/francescarestelli_webiker/" },
            { name: "GitHub", url: "https://github.com/francescarestelli96-bit" }
          ]
        },
        { id: 6, title: "About", sub: "MILAN, ITALY", emoji: "🇮🇹", color: "bg-white/80", 
          text: "I believe in 'less is more'. I live in Milan, a city that inspires me with its mix of design and technology." }
      ]
    }
  };

  const currentBoxes = content[lang].boxes;
  const activeBox = currentBoxes.find(b => b.id === selectedBox);

  return (
    <main className="min-h-screen w-screen flex flex-col items-center justify-start md:justify-center p-6 md:p-16 overflow-y-auto">
      
      {/* Switch Lingua */}
      <div className="w-full flex justify-end mb-6 md:absolute md:top-10 md:right-10 z-10">
        <button 
          onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
          className="bg-white/90 border border-white px-5 py-2 rounded-full font-bold text-[10px] tracking-[0.2em] shadow-lg cursor-pointer active:scale-95 transition-all"
        >
          {lang === 'it' ? 'ENGLISH' : 'ITALIANO'}
        </button>
      </div>

      {/* Grid Bento */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
        {currentBoxes.map((box) => (
          <div 
            key={box.id}
            onClick={() => setSelectedBox(box.id)}
            className={`
              ${box.id <= 4 ? 'md:col-span-1 md:row-span-2' : 'md:col-span-2 md:row-span-1'} 
              ${box.color} rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between border border-white/40 
              bento-card hover:scale-[1.02] hover:shadow-2xl cursor-pointer group min-h-[160px] md:h-auto`}
          >
            <h2 className={`text-2xl lg:text-3xl font-light tracking-tight ${box.id === 3 ? 'text-white' : 'text-slate-950'}`}>{box.title}</h2>
            <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-500 my-4">{box.emoji}</div>
            <p className={`text-[8px] font-bold tracking-[0.2em] uppercase ${box.id === 3 ? 'text-slate-500' : 'text-slate-900/40'}`}>{box.sub}</p>
          </div>
        ))}
      </div>

      {/* MODALE CON FOTO PICCOLA AFFIANCATA */}
      {selectedBox && activeBox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xl" onClick={() => setSelectedBox(null)}>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl modal-enter relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedBox(null)} className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 text-2xl">✕</button>
            
            <div className="flex items-center gap-6 mb-8">
               {/* Se c'è l'immagine, la mettiamo qui a sinistra del titolo */}
               {activeBox.image ? (
                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm flex-shrink-0">
                    <img src={activeBox.image} alt="Avatar" className="w-full h-full object-cover" />
                 </div>
               ) : (
                 <span className="text-5xl flex-shrink-0">{activeBox.emoji}</span>
               )}

               <div>
                  <h3 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 leading-tight">{activeBox.title}</h3>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-1">{activeBox.sub}</p>
               </div>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-base font-light mb-8">{activeBox.text}</p>
            
            {activeBox.projects && (
              <div className="grid grid-cols-1 gap-3">
                {activeBox.projects.map((proj, idx) => (
                  <a key={idx} href={proj.url} target="_blank" rel="noopener noreferrer" className="project-link">• {proj.name}</a>
                ))}
              </div>
            )}

            {activeBox.socials && (
              <div className="flex flex-wrap gap-3 mt-2">
                {activeBox.socials.map((social, idx) => (
                  <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">{social.name}</a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="py-8 opacity-20 text-center w-full">
        <p className="text-[8px] tracking-[1.5em] uppercase font-bold text-slate-900">Fra Portfolio 2026</p>
      </footer>
    </main>
  );
}