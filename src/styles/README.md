# 📁 Struttura CSS del Progetto

Tutti i file CSS sono organizzati in questa cartella per una migliore manutenibilità e organizzazione del codice.

## 🗂️ Organizzazione

```
src/styles/
├── index.css                 # Stili globali e reset
├── App.css                   # Stili del componente principale
├── pages/                    # CSS delle pagine
│   ├── Home.css             # Pagina Home + About Me
│   ├── Contact.css          # Pagina Contatti (tema Cyan)
│   ├── WebDeveloper.css     # Pagina Web Developer (tema Green)
│   ├── Blender.css          # Pagina Blender (tema Orange)
│   ├── ChristoferPhotography.css  # Pagina Photography (tema Green)
│   ├── Videodrone.css       # Pagina Videodrone (tema Cyan)
│   └── Stampa.css           # Pagina Stampa 3D (tema Magenta)
└── components/              # CSS dei componenti riutilizzabili
    ├── InfiniteHorizontalCarousel.css
    └── InfinitePhotoGrid.css
```

## 🎨 Temi Colore per Pagina

Ogni pagina ha un colore tematico distintivo:

- **Home**: Viola `#6654ccff` - Minimalista ed elegante
- **Contact**: Cyan `#22afb6` - Professionale e tecnologico
- **Web Developer**: Verde `#61dca3` - Sviluppo e crescita
- **Blender**: Arancione `#EE9133` - Creatività e calore
- **Photography**: Verde `#4CAF50` - Natura e autenticità
- **Videodrone**: Cyan `#22afb6` - Cielo e tecnologia
- **Stampa 3D**: Magenta `#bb13bb` - Innovazione e industria

## 📝 Convenzioni di Codice

### Commenti
- Ogni file inizia con un header descrittivo
- Sezioni divise con commenti `/* ============ */`
- Commenti inline per spiegare logiche complesse

### Naming
- Classi BEM-like: `.component-element--modifier`
- Classi semantiche e descrittive
- Prefissi per namespace (es. `contact-`, `home-`, etc.)

### Struttura
1. **Variabili e reset** (se presenti)
2. **Layout principale**
3. **Componenti**
4. **Utility classes**
5. **Media queries** (alla fine)

### Responsive Breakpoints
- Desktop: > 768px
- Tablet: 768px
- Mobile: 480px

## 🔗 Import nei Componenti

### Per le Pagine (in `src/pages/`)
```jsx
import '../styles/pages/NomeFile.css';
```

### Per i Componenti (in `src/components/`)
```jsx
import '../styles/components/NomeFile.css';
```

### Per App e Main
```jsx
import './styles/App.css';
import './styles/index.css';
```

## ✨ Best Practices

1. **Mantieni i CSS modulari** - Un file per pagina/componente
2. **Usa commenti chiari** - Spiega il "perché", non solo il "cosa"
3. **Consistenza nei colori** - Usa le variabili del tema
4. **Mobile-first** - Parti dal mobile e usa `@media` per desktop
5. **Performance** - Minimizza selettori complessi e ridondanze
6. **Glassmorphism** - Usa `backdrop-filter: blur()` per effetti vetro
7. **Animazioni fluide** - `transition: all 0.3s ease` per smooth UX

## 🛠️ Manutenzione

Quando aggiungi una nuova pagina o componente:
1. Crea il file CSS in `pages/` o `components/`
2. Aggiungi l'intestazione con commenti
3. Segui la struttura organizzativa standard
4. Importa il CSS nel file JSX corrispondente
5. Documenta eventuali variabili o logiche complesse

---

**Ultima modifica**: 5 Novembre 2025  
**Autore**: Christofer Tamburini
