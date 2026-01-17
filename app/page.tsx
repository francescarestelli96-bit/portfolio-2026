'use client';
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const content = {
    it: {
      boxes: [
        { id: 1, title: "Profilo", sub: "FRANCESCA RESTELLI", emoji: "👤", color: "card-navy", 
          text: "Professionista HR con la passione per il Web Development. Unisco sensibilità umana e precisione tecnica per creare soluzioni digitali human-centered." },
        { id: 2, title: "Passione", sub: "DUCATI MONSTER 696", emoji: "🏍️", color: "card-rose", 
          text: "Equilibrio, rapidità e focus. La mentalità che porto in sella è la stessa che applico al codice: risolvere problemi complessi con determinazione." },
        { id: 3, title: "Portfolio", sub: "SELECTED WORKS", emoji: "→", color: "card-white", 
          text: "Una selezione di progetti focalizzati su performance ed estetica minimale.",
          projects: [
            { name: "Ridescape", url: "https://github.com/francescarestelli96-bit/ridescape" },
            { name: "Alberto Chines Site", url: "https://github.com/francescarestelli96-bit/albertochines-site" },
            { name: "Relax Room", url: "https://github.com/francescarestelli96-bit/relax-room" }
          ]
        },
        { id: 4, title: "Tech Stack", sub: "DEVELOPMENT", emoji: "💻", color: "card-forest", 
          text: "JavaScript, React, Next.js, Tailwind CSS. Costruisco interfacce moderne e scalabili." },
        { id: 5, title: "Contatti", sub: "GET IN TOUCH", emoji: "📩", color: "card-purple", 
          text: "Disponibile per collaborazioni e progetti innovativi.",
          socials: [
            { name: "Email", url: "mailto:francesres@icloud.com" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/francesca-restelli-413b6376" },
            { name: "GitHub", url: "https://github.com/francescarestelli96-bit" }
          ]
        },
        { id: 6, title: "Vision", sub: "MILAN, IT", emoji: "✨", color: "card-petrol", 
          text: "Credo nel design invisibile: quello che funziona così bene da non farsi notare. Less is more." }
      ]
    },
    en: {
      boxes: [
        { id: 1, title: "Profile", sub: "FRANCESCA RESTELLI", emoji: "👤", color: "card-navy", 
          text: "HR Professional with a passion for Web Development. Combining human insight with technical precision." },
        { id: 2, title: "Passion", sub: "DUCATI MONSTER 696", emoji: "🏍️", color: "card-rose", 
          text: "Balance and focus. The same mindset I use on my bike is what I apply to my code." },
        { id: 3, title: "Portfolio", sub: "SELECTED WORKS", emoji: "→", color: "card-white", 
          text: "Selected projects focused on performance and minimalist aesthetics.",
          projects: [
            { name: "Ridescape", url: "https://github.com/francescarestelli96-bit/ridescape" },
            { name: "Alberto Chines Site", url: "https://github.com/francescarestelli96-bit/albertochines-site" },
            { name: "Relax Room", url: "https://github.com/francescarestelli96-bit/relax-room" }
          ]
        },
        { id: 4, title: "Tech Stack", sub: "DEVELOPMENT", emoji: "💻", color: "card-forest", 
          text: "JavaScript, React, Next.js, Tailwind CSS. Building modern and scalable interfaces." },
        { id: 5, title: "Contact", sub: "GET IN TOUCH", emoji: "📩", color: "card-purple", 
          text: "Available for collaborations and innovative projects.",
          socials: [
            { name: "Email", url: "mailto:francesres@icloud.com" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/francesca-restelli-413b6376" },
            { name: "GitHub", url: "https://github.com/francescarestelli96-bit" }
          ]
        },
        { id: 6, title: "Vision", sub: "MILAN, IT", emoji: "✨", color: "card-petrol", 
          text: "I believe in invisible design: what works so well it goes unnoticed. Less is more." }
      ]
    }
  };

  const currentBoxes = content[lang].boxes;
  const activeBox = currentBoxes.find(b => b.id === selectedBox);

  return (
    <main className="min-h-screen w-screen flex flex-col items-center justify-center p-6 md:p-16">
      <div className="absolute top-10 right-10 z-10">
        <button onClick={() => setLang(lang === 'it' ? 'en' : 'it')} className="text-[10px] tracking-[0.3em] text-white/30 hover:text-white transition-colors">
          {lang === 'it' ? 'ENGLISH' : 'ITALIANO'}
        </button>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr md:h-[500px]">
        {currentBoxes.map((box) => (
          <div key={box.id} onClick={() => setSelectedBox(box.id)}
            className={`${box.id <= 4 ? 'md:col-span-1 md:row-span-2' : 'md:col-span-2 md:row-span-1'} 
              ${box.color} bento-card rounded-[2.5rem] p-8 flex flex-col justify-between cursor-pointer group shadow-2xl`}
          >
            <h2 className="text-xl font-light tracking-[0.15em] uppercase">{box.title}</h2>
            <div className="text-3xl opacity-20 group-hover:opacity-100 transition-opacity duration-700">{box.emoji}</div>
            <p className="text-[8px] font-bold tracking-[0.4em] opacity-20 uppercase">{box.sub}</p>
          </div>
        ))}
      </div>

      {selectedBox && activeBox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedBox(null)}>
          <div className="bg-[#112240] border border-white/5 rounded-[3rem] p-12 max-w-xl w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedBox(null)} className="absolute top-8 right-8 text-white/10 hover:text-white">✕</button>
            <h3 className="text-3xl font-light mb-2 tracking-tight">{activeBox.title}</h3>
            <p className="text-white/40 leading-relaxed mb-10 text-lg font-light">{activeBox.text}</p>
            {activeBox.projects && (
              <div className="grid gap-3">{activeBox.projects.map((p, i) => <a key={i} href={p.url} className="project-link">/ {p.name}</a>)}</div>
            )}
            {activeBox.socials && (
              <div className="flex flex-wrap gap-3">{activeBox.socials.map((s, i) => <a key={i} href={s.url} className="social-link">{s.name}</a>)}</div>
            )}
          </div>
        </div>
      )}

      <footer className="mt-16 opacity-10">
        <p className="text-[7px] tracking-[2.5em] uppercase font-bold text-white">FR / PORTFOLIO 2026</p>
      </footer>
    </main>
  );
}