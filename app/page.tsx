'use client';
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const content = {
    it: {
      boxes: [
        { id: 1, title: "Ciao", sub: "FRANCESCA RESTELLI", emoji: "👋", color: "card-navy", 
          text: "Ciao, sono Francesca. Il mio percorso nel mondo tech non è stato lineare, ed è proprio questo il mio punto di forza. Contestualmente al mio lavoro e alla mia esperienza nel settore HR, ho deciso di assecondare la mia vocazione analitica e creativa studiando sviluppo web. Oggi unisco la capacità di comprendere i bisogni delle persone con la precisione tecnica del codice, creando interfacce che non siano solo belle, ma fatte per essere usate. E siccome '3 is a magic number', ho aggiunto un terzo pilastro alla mia identità: sono una Content Creator — o, come amo definirmi, una Bikefluencer — nel panorama motociclistico. Melius abundare quam deficere!" },
        { id: 2, title: "Moto", sub: "DUCATI MONSTER 696", emoji: "🏍️", color: "card-rose", 
          text: "La mia Ducati Monster 696 rappresenta il mio equilibrio. Guidare richiede concentrazione, rapidità decisionale e una costante ricerca di armonia tra meccanica e movimento. Porto questa stessa mentalità nel mio lavoro: affrontare le sfide con grinta, risolvere i problemi in tempo reale e non smettere mai di esplorare nuove strade." },
        { id: 3, title: "Progetti", sub: "SELECTED PROJECTS", emoji: "→", color: "card-projects", 
          text: "Dallo sviluppo frontend con React e Next.js alla gestione di database e API. In questa sezione troverai una raccolta di progetti focalizzati su performance ed esperienza utente.",
          projects: [
            { name: "Ridescape", url: "https://github.com/francescarestelli96-bit/ridescape" },
            { name: "Alberto Chines Site", url: "https://github.com/francescarestelli96-bit/albertochines-site" },
            { name: "Relax Room", url: "https://github.com/francescarestelli96-bit/relax-room" }
          ]
        },
        { id: 4, title: "Tech+HR", sub: "HR TO DEVELOPER", emoji: "👩‍💻", color: "card-forest", 
          text: "Per anni ho lavorato con le persone, selezionando talenti e comprendendo le dinamiche aziendali. Questo mi ha dato una prospettiva unica: so che dietro ogni software c'è un utente con una necessità. Skill principali: JavaScript (ES6+), React, Next.js, Tailwind CSS e Git." },
        { id: 5, title: "Contact", sub: "AVAILABLE NOW", emoji: "💌", color: "card-purple", 
          text: "Sono attualmente disponibile per nuove opportunità o collaborazioni freelance. Puoi trovarmi qui:",
          socials: [
            { name: "Email", url: "mailto:francesres@icloud.com" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/francesca-restelli-413b6376" },
            { name: "Instagram", url: "https://www.instagram.com/francescarestelli" },
            { name: "GitHub", url: "https://github.com/francescarestelli96-bit" }
          ]
        },
        { id: 6, title: "About", sub: "MILAN, ITALY", emoji: "🇮🇹", color: "card-petrol", 
          text: "Credo nel 'less is more'. Il mio approccio al design e allo sviluppo si basa sulla sottrazione del superfluo per far emergere l'essenziale. Vivo a Milano, una città che mi ispira continuamente con il suo mix di design storico e innovazione tecnologica." }
      ]
    },
    en: {
      boxes: [
        { id: 1, title: "Hello", sub: "FRANCESCA RESTELLI", emoji: "👋", color: "card-navy", 
          text: "Hi, I’m Francesca. My path into tech hasn't been linear, and that’s exactly my strength. Alongside my HR background, I followed my analytical and creative calling by studying web development. Today, I bridge the gap between human needs and technical precision, creating interfaces that aren't just beautiful, but built to be used. And since '3 is a magic number', I’ve added a third pillar to my identity: I’m a Content Creator — or as I like to call it, a Bikefluencer — in the motorcycling world. Melius abundare quam deficere!" },
        { id: 2, title: "Bike", sub: "DUCATI MONSTER 696", emoji: "🏍️", color: "card-rose", 
          text: "My Ducati Monster 696 represents my balance. Riding requires focus, quick decision-making, and a constant search for harmony. I bring this same mindset to my work: tackling challenges with grit and solving problems in real-time." },
        { id: 3, title: "Works", sub: "SELECTED PROJECTS", emoji: "→", color: "card-projects", 
          text: "From frontend development to API management. Here's a collection of projects focused on performance and user experience.",
          projects: [
            { name: "Ridescape", url: "https://github.com/francescarestelli96-bit/ridescape" },
            { name: "Alberto Chines Site", url: "https://github.com/francescarestelli96-bit/albertochines-site" },
            { name: "Relax Room", url: "https://github.com/francescarestelli96-bit/relax-room" }
          ]
        },
        { id: 4, title: "Tech+HR", sub: "HR TO DEVELOPER", emoji: "👩‍💻", color: "card-forest", 
          text: "Years of HR experience gave me a unique perspective: I know there's a user with a need behind every software. Core skills: JS, React, Next.js, Tailwind." },
        { id: 5, title: "Contact", sub: "AVAILABLE NOW", emoji: "💌", color: "card-purple", 
          text: "Currently available for new opportunities or freelance collaborations. Let's talk!",
          socials: [
            { name: "Email", url: "mailto:francesres@icloud.com" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/francesca-restelli-413b6376" },
            { name: "Instagram", url: "https://www.instagram.com/francescarestelli" },
            { name: "GitHub", url: "https://github.com/francescarestelli96-bit" }
          ]
        },
        { id: 6, title: "About", sub: "MILAN, ITALY", emoji: "🇮🇹", color: "card-petrol", 
          text: "I believe in 'less is more'. My approach is based on removing the superfluous to let the essential shine. Based in Milan, inspired by design and innovation." }
      ]
    }
  };

  const currentBoxes = content[lang].boxes;
  const activeBox = currentBoxes.find(b => b.id === selectedBox);

  return (
    <main className="min-h-screen w-screen flex flex-col items-center justify-center p-6 md:p-16 relative">
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20">
        <button onClick={() => setLang(lang === 'it' ? 'en' : 'it')} className="lang-switch">
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr md:h-[600px] mt-12 md:mt-0">
        {currentBoxes.map((box) => (
          <div key={box.id} onClick={() => setSelectedBox(box.id)}
            className={`${box.id === 1 || box.id === 3 ? 'md:col-span-1 md:row-span-2' : 'md:col-span-1 md:row-span-1'} 
              ${box.id === 5 || box.id === 6 ? 'md:col-span-2' : ''}
              ${box.color} bento-card rounded-[3rem] p-10 flex flex-col justify-between cursor-pointer group`}
          >
            <h2 className="text-3xl font-black tracking-tighter uppercase text-white drop-shadow-md">{box.title}</h2>
            <div className="text-5xl group-hover:scale-125 transition-all duration-700 drop-shadow-2xl">{box.emoji}</div>
            <p className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">{box.sub}</p>
          </div>
        ))}
      </div>

      {selectedBox && activeBox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-3xl" onClick={() => setSelectedBox(null)}>
          <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[4rem] p-12 md:p-16 max-w-3xl w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedBox(null)} className="absolute top-10 right-10 text-white/30 hover:text-white text-3xl">✕</button>
            <div className="mb-10">
                <span className="text-6xl mb-4 block">{activeBox.emoji}</span>
                <h3 className="text-5xl font-black tracking-tighter text-white uppercase">{activeBox.title}</h3>
                <p className="text-[12px] font-black tracking-[0.4em] text-white/40 uppercase mt-2">{activeBox.sub}</p>
            </div>
            <p className="text-white/90 leading-relaxed mb-12 text-2xl font-light">{activeBox.text}</p>
            {activeBox.projects && (
              <div className="grid gap-4">{activeBox.projects.map((p, i) => <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="project-link">/ {p.name}</a>)}</div>
            )}
            {activeBox.socials && (
              <div className="flex flex-wrap gap-4">{activeBox.socials.map((s, i) => <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">{s.name}</a>)}</div>
            )}
          </div>
        </div>
      )}

      <footer className="mt-20 border-t border-white/10 pt-10 w-full max-w-6xl flex justify-center">
        <p className="text-[10px] tracking-[2.5em] uppercase font-black text-white/40 ml-[2.5em]">FR / 2026</p>
      </footer>
    </main>
  );
}