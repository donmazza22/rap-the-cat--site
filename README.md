# Rap the Cat — One‑Page Site (Vite + React + Tailwind)

Questo è il sito ufficiale one‑page per Rap the Cat. È pronto per Vercel/Netlify.

## Come avviare in locale
1. Installa **Node.js** (v18+ consigliato).
2. Apri terminale nella cartella e lancia:
```bash
npm install
npm run dev
```
3. Apri `http://localhost:5173`.

## Deploy su Vercel (consigliato)
1. Crea una repo su GitHub e carica questi file.
2. Vai su [vercel.com](https://vercel.com), **New Project** → importa la repo.
3. Vercel rileverà Vite automaticamente. Build command: `vite build` (predefinito). Output: `dist`.
4. Clicca Deploy: otterrai un URL pubblico.

## Dove modificare
- Testi/sezioni: `src/App.jsx`
- Stili: `src/index.css` (usa classi Tailwind dentro i componenti)
- Token address: cerca `tokenAddress` in `App.jsx`
- Tracce audio demo: sezione **Music** in `App.jsx`
