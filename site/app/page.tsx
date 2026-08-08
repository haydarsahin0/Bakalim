import { ArrowDown, ArrowUpRight } from 'lucide-react';

import { WaterRippleImage } from '@/components/ui/water-ripple-image';
import { getHeroImage } from '@/lib/hero-image';

// ─── Buradaki metinleri kendine göre değiştir ────────────────────────────────
const SITE = {
  name: 'AD SOYAD',
  role: 'Painter & Image-maker',
  location: 'İstanbul / Berlin',
  year: '2026',
  intro:
    'Boya, yüzey ve figür arasındaki gerilimle çalışıyorum. Tuval, çoğu zaman bir sahne: figürler birbirine yaslanıyor, renk onları yutuyor, kompozisyon son anda dağılıyor.',
  email: 'merhaba@ornek.com',
};

const WORKS = [
  { title: 'Untitled (Divers)', meta: 'Akrilik, sprey ve yağlı boya · 180 × 140 cm', year: '2026' },
  { title: 'Green Room', meta: 'Tuval üzerine karışık teknik · 160 × 120 cm', year: '2025' },
  { title: 'Two Figures Falling', meta: 'Akrilik ve pigment · 200 × 150 cm', year: '2025' },
  { title: 'Shallow Water', meta: 'Kağıt üzerine guaj · 70 × 50 cm', year: '2024' },
];

const EXHIBITIONS = [
  { year: '2026', title: 'Surface Tension', venue: 'Kişisel sergi · Galeri Adı, İstanbul' },
  { year: '2025', title: 'Bodies of Water', venue: 'Karma · Kunstverein, Berlin' },
  { year: '2025', title: 'Yeni Yüzeyler', venue: 'Karma · Çağdaş Sanat Merkezi, Ankara' },
  { year: '2024', title: 'Studio Show', venue: 'Açık atölye · Kreuzberg, Berlin' },
];
// ────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const heroSrc = getHeroImage();

  return (
    <main className="flex flex-col">
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full">
        <WaterRippleImage
          src={heroSrc}
          blueish={0.4}
          scale={7}
          illumination={0.15}
          surfaceDistortion={0.03}
          waterDistortion={0.02}
          showControls
        />

        {/* readability wash over the canvas */}
        <div className="pointer-events-none fixed inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
            {SITE.name}
          </span>
          <nav className="hidden gap-8 font-mono text-xs uppercase tracking-[0.2em] text-white/70 md:flex">
            <a className="transition hover:text-white" href="#works">
              Works
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-16 md:px-12 md:pb-20">
          <div className="animate-rise max-w-4xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/60">
              {SITE.role} — {SITE.location}
            </p>
            <h1 className="text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
              Selected
              <br />
              Works
              <span className="ml-3 align-super font-mono text-base text-white/50 md:text-xl">
                {SITE.year}
              </span>
            </h1>
          </div>

          <a
            href="#works"
            className="mt-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
          >
            <ArrowDown className="size-4 animate-bounce" />
            Aşağı kaydır
          </a>
        </div>
      </section>

      {/* ── Works ──────────────────────────────────────────────────────── */}
      <section
        id="works"
        className="relative z-20 border-t border-white/10 bg-background px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex items-baseline justify-between border-b border-white/10 pb-6">
            <h2 className="text-2xl font-medium tracking-tight md:text-4xl">Works</h2>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {WORKS.length} parça
            </span>
          </div>

          <ul className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {WORKS.map((work) => (
              <li key={work.title} className="group">
                {/* Replace this block with <Image /> once you have work photos */}
                <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
                      görsel eklenecek
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-white/0 transition duration-500 group-hover:bg-white/5" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium tracking-tight">{work.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{work.meta}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{work.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="relative z-20 border-t border-white/10 bg-background px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-medium tracking-tight md:text-4xl">About</h2>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {SITE.location}
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">{SITE.intro}</p>

            <h3 className="mt-14 mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Sergiler
            </h3>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {EXHIBITIONS.map((ex) => (
                <li key={`${ex.year}-${ex.title}`} className="flex gap-6 py-4">
                  <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">
                    {ex.year}
                  </span>
                  <div>
                    <p className="font-medium">{ex.title}</p>
                    <p className="text-sm text-muted-foreground">{ex.venue}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative z-20 border-t border-white/10 bg-background px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-medium tracking-tight md:text-4xl">Contact</h2>
          <a
            href={`mailto:${SITE.email}`}
            className="group mt-8 inline-flex items-baseline gap-3 text-3xl font-medium tracking-tight transition hover:text-muted-foreground md:text-6xl"
          >
            {SITE.email}
            <ArrowUpRight className="size-6 transition group-hover:-translate-y-1 group-hover:translate-x-1 md:size-10" />
          </a>

          <div className="mt-16 flex gap-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <a className="transition hover:text-foreground" href="#">
              Instagram
            </a>
            <a className="transition hover:text-foreground" href="#">
              CV (PDF)
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-20 border-t border-white/10 bg-background px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:justify-between">
          <span>
            © {SITE.year} {SITE.name}
          </span>
          <span>Tüm hakları saklıdır</span>
        </div>
      </footer>
    </main>
  );
}
