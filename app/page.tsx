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
    <main className="min-h-screen w-screen flex flex-col items-center justify-center p-6 md:p-12 relative">
      <div className="absolute top-8 right-8 z-20">
        <button onClick={() => setLang(lang === 'it' ? 'en' : 'it')} className="lang-switch">
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr md:h-[550px]">
        {currentBoxes.map((box) => (
          <div key={box.id} onClick={() => setSelectedBox(box.id)}
            className={`${box.id === 1 || box.id === 3 ? 'md:col-span-1 md:row-span-2' : 'md:col-span-1 md:row-span-1'} 
              ${box.id === 5 || box.id === 6 ? 'md:col-span-2' : ''}
              ${box.color} bento-card rounded-[2.5rem] p-8 flex flex-col justify-between cursor-pointer group`}
          >
            <h2 className="text-xl font-light tracking-widest uppercase text-white">{box.title}</h2>
            <div className="text-4xl group-hover:scale-110 transition-all duration-500 opacity-80">{box.emoji}</div>
            <p className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase leading-none">{box.sub}</p>
          </div>
        ))}
      </div>

      {selectedBox && activeBox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl" onClick={() => setSelectedBox(null)}>
          <div className="bg-[#112240]/80 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-10 md:p-14 max-w-3xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedBox(null)} className="absolute top-8 right-8 text-white/20 hover:text-white text-3xl">✕</button>
            <div className="mb-8">
                <span className="text-5xl mb-4 block">{activeBox.emoji}</span>
                <h3 className="text-3xl font-light tracking-widest text-white uppercase">{activeBox.title}</h3>
                <p className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase mt-2">{activeBox.sub}</p>
            </div>
            <p className="text-white/80 leading-relaxed mb-10 text-xl font-light">{activeBox.text}</p>
            {activeBox.projects && (
              <div className="grid gap-3">{activeBox.projects.map((p, i) => <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="project-link">/ {p.name}</a>)}</div>
            )}
            {activeBox.socials && (
              <div className="flex flex-wrap gap-4">{activeBox.socials.map((s, i) => <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">{s.name}</a>)}</div>
            )}
          </div>
        </div>
      )}

      <footer className="mt-16 border-t border-white/5 pt-8 w-full max-w-5xl flex justify-center">
        <p className="text-[9px] tracking-[2em] uppercase font-bold text-white/10 ml-[2em]">FR / 2026</p>
      </footer>
    </main>
  );
}