import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Cat, Flame, Twitter, Instagram, Disc3, Rocket, ExternalLink, Copy, CheckCircle2, PlayCircle, Coins, MessageSquareText, Mail } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="mb-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
    {children}
  </section>
);

const TokenomicsChart = () => {
  const data = [
    { name: "Liquidity", value: 40 },
    { name: "Airdrop / Community", value: 25 },
    { name: "Marketing", value: 15 },
    { name: "Team (vested)", value: 10 },
    { name: "Treasury", value: 10 },
  ];
  const colors = ["#22c55e", "#a78bfa", "#38bdf8", "#f59e0b", "#ef4444"];
  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
            {data.map((_, idx) => (
              <Cell key={idx} fill={colors[idx % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default function App() {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "So1RAPTHECATxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; // replace when live

  const copyAddr = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
      alert("Copy failed. Address: " + tokenAddress);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100 selection:bg-emerald-500/30">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-emerald-500/20 border border-emerald-400/40 shadow">
              <Cat className="h-5 w-5" />
            </div>
            <span className="font-extrabold tracking-tight text-lg">Rap the Cat</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-emerald-400">About</a>
            <a href="#music" className="hover:text-emerald-400">Music</a>
            <a href="#token" className="hover:text-emerald-400">Token</a>
            <a href="#roadmap" className="hover:text-emerald-400">Roadmap</a>
            <a href="#faq" className="hover:text-emerald-400">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#mint" className="px-4 py-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold shadow">Mint / Buy</a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(16,185,129,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Il primo <span className="text-emerald-400">rapper</span> su Solana.
            </h1>
            <p className="mt-4 text-lg text-zinc-300 max-w-xl">
              Meme coin, musica e cultura degen. Ascolta i bangers, unisciti alla community, e porta Rap the Cat in cima alle chart.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#music" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-black font-semibold shadow">
                <PlayCircle className="h-5 w-5" /> Ascolta ora
              </a>
              <a href="#token" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/20 hover:border-emerald-400/60">
                <Coins className="h-5 w-5" /> Scopri il token
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-zinc-400">
              <a href="https://twitter.com/" target="_blank" className="hover:text-emerald-400 inline-flex items-center gap-1" rel="noreferrer"><Twitter className="h-4 w-4"/> Twitter</a>
              <a href="https://instagram.com/" target="_blank" className="hover:text-emerald-400 inline-flex items-center gap-1" rel="noreferrer"><Instagram className="h-4 w-4"/> Instagram</a>
              <a href="#" className="hover:text-emerald-400 inline-flex items-center gap-1"><Disc3 className="h-4 w-4"/> Discord</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent border border-white/10 shadow-2xl p-1">
              <div className="w-full h-full rounded-3xl bg-[url('https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 flex items-center gap-3">
              <Flame className="h-6 w-6 text-emerald-400"/>
              <div>
                <p className="font-bold">Community on fire</p>
                <p className="text-sm text-zinc-400">Drop settimanali & contest</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="Chi è Rap the Cat" subtitle="Gatto con swag, barre affilate, cuore degen. Niente promesse, solo cultura e divertimento.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Music, title: "Music First", desc: "Brani originali pronti per Suno/Spotify, performance live e video meme." },
            { icon: Rocket, title: "Meme Coin", desc: "Token su Solana pensato per la community: airdrop, utility social e merch." },
            { icon: MessageSquareText, title: "Community", desc: "Twitter, Discord e micro‑missioni: buildiamo il progetto tutti insieme." },
          ].map((c, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
              <c.icon className="h-6 w-6" />
              <h3 className="mt-4 font-bold text-lg">{c.title}</h3>
              <p className="text-sm text-zinc-300 mt-2">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="music" title="Ascolta i brani" subtitle="Bangers per la degen life. (Demo) Sostituisci i link con le tue tracce.">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Daily Routine (Solana)", url: "https://cdn.pixabay.com/download/audio/2023/03/13/audio_7c2d.mp3?filename=hip-hop-140061.mp3" },
            { title: "Airdrop to Zero", url: "https://cdn.pixabay.com/download/audio/2021/10/26/audio_5f5b0d9ef2.mp3?filename=hip-hop-02-105-bpm-10013.mp3" },
          ].map((track, i) => (
            <div key={i} className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <Music className="h-5 w-5" />
                <h3 className="font-semibold">{track.title}</h3>
              </div>
              <audio controls preload="none" src={track.url} className="w-full mt-4" />
            </div>
          ))}
        </div>
      </Section>

      <Section id="token" title="$RAP — Token su Solana" subtitle="Distribuzione trasparente, focus community. (Esempio, aggiornabile al launch)">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="font-semibold text-lg">Dettagli</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li><span className="font-semibold text-zinc-200">Ticker:</span> RAP</li>
              <li><span className="font-semibold text-zinc-200">Chain:</span> Solana</li>
              <li className="flex items-center gap-2"><span className="font-semibold text-zinc-200">Address:</span> <code className="text-emerald-300 break-all">{tokenAddress}</code>
                <button onClick={copyAddr} className="inline-flex items-center gap-1 rounded-xl px-2 py-1 border border-white/20 hover:border-emerald-400/60 ml-2">
                  {copied ? <CheckCircle2 className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                  <span className="text-xs">{copied ? "Copiato" : "Copia"}</span>
                </button>
              </li>
              <li><span className="font-semibold text-zinc-200">Supply:</span> 1,000,000,000 (esempio)</li>
              <li><span className="font-semibold text-zinc-200">DEX:</span> presto su Jupiter/Raydium</li>
            </ul>
            <div className="mt-6">
              <a href="#mint" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500 text-black font-semibold">
                <ExternalLink className="h-4 w-4"/> Mint / Buy
              </a>
            </div>
          </div>
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="font-semibold text-lg">Distribuzione</h3>
            <TokenomicsChart />
            <p className="text-xs text-zinc-400 mt-2">*Esempio illustrativo. Aggiorna percentuali e vesting al lancio.</p>
          </div>
        </div>
      </Section>

      <Section id="roadmap" title="Roadmap" subtitle="Costruiamo in pubblico. Aggiorna questi step man mano che procediamo.">
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "Q3 2025", title: "Canzone Ufficiale", desc: "Drop su piattaforme, lyric video, contest meme." },
            { step: "Q3 2025", title: "Launch $RAP", desc: "Mint fair‑launch su Solana, liquidity lock, airdrop." },
            { step: "Q4 2025", title: "Merch & Sticker Pack", desc: "Sticker Telegram, pack creator, shop." },
            { step: "Q4 2025", title: "Live + Collab", desc: "Mini tour Web3, feat con artisti/creators." },
          ].map((r, i) => (
            <li key={i} className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <p className="text-xs uppercase tracking-wider text-zinc-400">{r.step}</p>
              <p className="font-semibold mt-1">{r.title}</p>
              <p className="text-sm text-zinc-300 mt-2">{r.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="mint" title="Mint / Buy $RAP" subtitle="Sostituisci questi link con il tuo smart link (Jupiter) e la pagina mint.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="font-semibold">Compra su DEX</h3>
            <p className="text-sm text-zinc-300 mt-2">Link rapido con pair pre‑selezionata.</p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white text-black font-semibold"><ExternalLink className="h-4 w-4"/> Apri Jupiter</a>
          </div>
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="font-semibold">Pagina Mint</h3>
            <p className="text-sm text-zinc-300 mt-2">Per eventuale NFT/collezione legata ai brani.</p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/20 hover:border-emerald-400/60"><ExternalLink className="h-4 w-4"/> Vai al mint</a>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Resta aggiornato" subtitle="Lascia la mail e ti scriviamo quando esce il drop. (Form statico da collegare) ">
        <form className="max-w-xl mx-auto p-2 rounded-2xl border border-white/10 bg-white/5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <Mail className="h-5 w-5 self-center ml-2"/>
          <input className="flex-1 bg-transparent outline-none placeholder:text-zinc-500 px-2" placeholder="la-tua@email.com" type="email" />
          <button type="button" className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-semibold">Iscrivimi</button>
        </form>
        <p className="text-center text-xs text-zinc-500 mt-3">Collega questo form al tuo provider (es. Brevo, Mailchimp, Beehiiv).</p>
      </Section>

      <Section id="faq" title="FAQ" subtitle="Domande frequenti">
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Quando esce il token?", a: "Finestra Q3 2025. Annuncio ufficiale su Twitter e Discord." },
            { q: "Dove ascolto la musica?", a: "Carichiamo snippet su Twitter e full track su Spotify/YouTube quando pronte." },
            { q: "Come posso contribuire?", a: "Entra su Discord, partecipa ai meme contest e condividi il progetto." },
          ].map((f, i) => (
            <details key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                {f.q}
                <span className="text-zinc-400 group-open:rotate-45 transition">＋</span>
              </summary>
              <p className="mt-2 text-sm text-zinc-300">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Rap the Cat. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <a href="#" className="hover:text-emerald-400 inline-flex items-center gap-1"><Twitter className="h-4 w-4"/> Twitter</a>
            <a href="#" className="hover:text-emerald-400 inline-flex items-center gap-1"><Instagram className="h-4 w-4"/> Instagram</a>
            <a href="#" className="hover:text-emerald-400 inline-flex items-center gap-1"><Disc3 className="h-4 w-4"/> Discord</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
