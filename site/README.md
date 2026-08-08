# Water Ripple Portfolio Site

Next.js 16 + TypeScript + Tailwind v4 + shadcn yapısı. Açılışta tam ekran bir
WebGL su dalgası efektiyle karşılayan portfolyo sitesi.

## Çalıştırma

```bash
cd site
npm install
npm run dev      # http://localhost:3000
```

## Kendi fotoğrafını koymak

Fotoğrafını `public/` klasörüne **`hero.jpg`** adıyla koy. Başka bir şey
yapmana gerek yok — sayfa otomatik bulur.

```
site/public/hero.jpg     ← fotoğrafın buraya
```

Desteklenen adlar: `hero.jpg`, `hero.jpeg`, `hero.png`, `hero.webp`
(sırayla aranır, ilk bulunan kullanılır).

Hiçbiri yoksa `public/hero-placeholder.png` kullanılır — bu, `npm run dev`'in
ilk çalıştırmada bir şey göstermesi için üretilmiş geçici bir görsel.
İstersen yeniden üret: `node scripts/make-placeholder.mjs`

> **Not:** Fotoğraf `next build` sırasında tespit edilir. Production build
> aldıysan, fotoğrafı ekledikten sonra tekrar `npm run build` çalıştır.

## Metinleri değiştirmek

`app/page.tsx` dosyasının en üstündeki `SITE`, `WORKS` ve `EXHIBITIONS`
sabitlerini düzenle. Hepsi tek yerde toplandı.

## Bileşen

`components/ui/water-ripple-image.tsx`

```tsx
<WaterRippleImage
  src="/hero.jpg"
  fit="cover"          // "cover" (tam ekran) | "contain" (kenarları solan çerçeve)
  zoom={0.94}          // <1 yaklaştırır, >1 uzaklaştırır
  blueish={0.4}
  scale={7}
  illumination={0.15}
  surfaceDistortion={0.03}
  waterDistortion={0.02}
  showControls        // sağ altta canlı ayar paneli + görsel değiştirme
/>
```

| Prop | Varsayılan | Ne yapar |
|---|---|---|
| `src` | Unsplash görseli | Kaynak görsel |
| `fit` | `'cover'` | `cover` ekranı doldurur, `contain` görselin tamamını gösterir |
| `zoom` | `0.94` / `1.4` | Yakınlaştırma çarpanı (`fit`'e göre varsayılan değişir) |
| `blueish` | `0.6` | Işıltının mavilik oranı |
| `scale` | `7` | Dalga sıklığı |
| `illumination` | `0.15` | Su kostiklerinin parlaklığı |
| `surfaceDistortion` | `0.07` | Yüzey kırılması |
| `waterDistortion` | `0.03` | Genel su kırılması |
| `showControls` | `false` | Canlı ayar paneli |

Canvas `position: fixed` — hero'nun arkasında sabit durur, sonraki bölümler
üzerine kayar. Bu yüzden hero sonrası bölümlerin `relative z-20 bg-background`
sınıflarına sahip olması gerekir.

## Orijinal koda göre yapılan düzeltmeler

1. **`showControls` tipte yoktu** — `WaterRippleImageProps` içinde tanımlı
   olmadığı halde destructure ediliyordu, TypeScript derlemesini kırıyordu.
   Tipe eklendi ve gerçekten bir ayar paneli olarak uygulandı.
2. **Prop değişiklikleri yok sayılıyordu** — `params` mount anında state'e
   kopyalanıyor, sonrasında `src` veya diğer proplar değişince güncellenmiyordu.
   Artık proplar doğrudan kaynak, panel yalnızca üzerine override ekliyor.
3. **`fit` / `zoom` eklendi** — shader sabit "contain" mantığıyla çalışıyordu;
   dikey bir fotoğraf yatay ekranda ortada kutulanıyor, kenarlarda siyah
   kalıyordu. Hero için `cover` gerekiyordu.
4. **Canvas yüksekliği** — `w-screen` vardı ama `h-screen` yoktu.
5. **WebGL context loss** — sekme GPU bağlamını kaybettiğinde animasyon
   döngüsü sessizce ölüyordu; artık yakalanıyor.
6. **Buffer temizliği** — `vbo` cleanup'ta siliniyor.
