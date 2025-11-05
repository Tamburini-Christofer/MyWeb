# 🌐 MyWeb - Portfolio Personale

Portfolio professionale multi-sezione costruito con React, Vite e animazioni moderne.

## 📋 Descrizione

Applicazione web single-page che showcase diverse competenze professionali attraverso pagine tematiche interattive con effetti visuali avanzati.

## ✨ Features

### Pagine Principali

- **🏠 Home** - Landing page con testo rotante animato e cambio colore sfondo
- **💻 Web Developer** - Showcase tecnologie con effetto Matrix glitch
- **📸 Photography** - Galleria fotografica infinita con lightbox e navigazione
- **🎨 Blender** - Portfolio progetti 3D
- **🚁 Videodrone** - Lavori video e riprese aeree
- **🖨️ Stampa 3D** - Progetti di stampa tridimensionale

### Componenti Chiave

#### LetterGlitch
Effetto Matrix-style con caratteri glitch animati
- Transizioni smooth dei colori
- Vignette personalizzabili (center/outer)
- Performance ottimizzate con Canvas API
- Supporto schermi retina (devicePixelRatio)

#### InfinitePhotoGrid
Griglia fotografica con scorrimento infinito verticale
- Lightbox fullscreen con navigazione
- Controlli tastiera (frecce, ESC)
- Pausa automatica durante visualizzazione
- Transizioni e animazioni CSS

#### LogoLoop
Carosello infinito di loghi/tecnologie
- Scorrimento automatico
- Hover pause e scale effect
- Fade out edges per effetto continuo

#### RotatingText & SplashCursor
Animazioni testo e cursore interattivo per la home

## 🛠️ Tecnologie Utilizzate

- **React 18** - Libreria UI
- **React Router DOM** - Routing SPA
- **Vite** - Build tool ultra-veloce
- **Framer Motion** - Animazioni avanzate
- **React Icons** - Icone tecnologie
- **Tailwind CSS** - Utility-first CSS

## 📁 Struttura Progetto

```
MyWeb/
├── src/
│   ├── components/      # Componenti riutilizzabili
│   │   ├── LetterGlitch.jsx
│   │   ├── InfinitePhotoGrid.jsx
│   │   ├── LogoLoop.jsx
│   │   ├── NavBar.jsx
│   │   ├── Footer.jsx
│   │   ├── RotatingText.jsx
│   │   └── SplashCursor.jsx
│   ├── pages/          # Pagine principali
│   │   ├── Home.jsx
│   │   ├── WebDeveloper.jsx
│   │   ├── ChristoferPhotography.jsx
│   │   ├── Blender.jsx
│   │   ├── Videodrone.jsx
│   │   └── Stampa.jsx
│   ├── layout/         # Layout app
│   │   └── Layout.jsx
│   ├── App.jsx         # App principale
│   ├── App.css         # Stili globali
│   └── main.jsx        # Entry point
├── public/             # Asset statici
├── package.json
└── vite.config.js
```

## 🚀 Installazione

```bash
# Clona il repository
git clone <url-repo>

# Installa le dipendenze
npm install

# Avvia il dev server
npm run dev

# Build per produzione
npm run build
```

## 🎨 Personalizzazione

### Colori Glitch
Modifica i colori dell'effetto Matrix in `WebDeveloper.jsx`:
```jsx
glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
```

### Foto Portfolio
Sostituisci le foto d'esempio in `ChristoferPhotography.jsx`:
```jsx
const samplePhotos = [
  { src: '/path/to/your/photo.jpg', alt: 'Descrizione' },
  // ...
];
```

### Tecnologie Logo Loop
Aggiorna i loghi in `WebDeveloper.jsx`:
```jsx
const techLogos = [
  { node: <SiReact />, title: "React", href: "..." },
  // ...
];
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚙️ Ottimizzazioni

✅ Lazy loading immagini
✅ Debounced resize handlers
✅ RequestAnimationFrame per animazioni
✅ CSS will-change per GPU acceleration
✅ Prefissi vendor per compatibilità cross-browser

## 📄 License

MIT License - sentiti libero di usare questo codice per i tuoi progetti!

## 👤 Autore

**Christofer Tamburini**

---

*Costruito con ❤️ usando React e Vite*

