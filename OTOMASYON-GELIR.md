# Kendi Çalıştıracağın Gelir Otomasyonları (8 Ağustos 2026)

Bu rapor öncekilerden farklı: **yazılım satmıyorsun.** Otomasyonu sen çalıştırıyorsun,
çıktıyı bir platforma koyuyorsun, platform sana ödüyor. Fish Audio → podcast → Spotify
zincirinin daha iyi versiyonlarını arıyoruz.

---

## Önce iki gerçek — bunlar her fikri belirliyor

### 1. Hacim-spam öldü, otomasyon ölmedi

YouTube Temmuz 2025'te "repetitious content" politikasını **"inauthentic content"**
olarak yeniden yazdı. Hedefi şu: *"seri üretilmiş veya tekrarlayan içerik — şablonla
yapılmış görünen, videolar arası çok az farklılık olan, ölçekte kolayca kopyalanabilen."*

Sonuç sert oldu: toplam **4,7 milyar izlenmeli 16 kanal kalıcı olarak kapatıldı**,
aylık on binlerce dolar kazanan kanallar bir gecede gelirsiz kaldı.

**Ama** politika yapay zekâyı yasaklamadı. Beyan edilmiş AI içerik, aynı nişteki
AI olmayan içerikle **karşılaştırılabilir RPM** kazanıyor. Özgün senaryosu, gerçek
küratörlüğü ve tutarlı stili olan faceless kanallar tamamen uygun durumda —
ve faceless kanallar yeni gelir girişimlerinin **%38'ini** oluşturuyor.

> **Kural: emeği otomatikleştir, özgünlüğü değil.**
> Her fikri şu testten geçir: *"Bin kişi bu şablonu birebir çalıştırabilir mi?"*
> Cevap evetse o iş 6 ay içinde temizlenir.

### 2. Reklam geliri en zayıf halka

Senin şu anki zincirinin (podcast → Spotify) sorunu bu. Podcast ve YouTube
**dikkat** satıyor: algoritmaya, izlenme saatine, reklam piyasasına bağımlısın.
Aşağıdaki fikirlerin çoğu **birim** satıyor: bir kez üret, kataloğunda sonsuza
kadar kalsın, her satışta para gelsin. Algoritma seni silemez.

Bu yüzden fikirler birim-satışı olanlardan başlıyor.

---

# Fikir 1 — Sesli Kitap Fabrikası ⭐ En güçlü

### Neden en üstte
Platform şartları **doğrulandı ve olağanüstü iyi:**

| | |
|---|---|
| Platform | Spotify for Authors / Voices by INaudio (eski Findaway) |
| Kurulum ücreti | **Yok** |
| Dağıtım ücreti | **Yok** |
| Telif payın | **%80 net** |
| AI seslendirme | **Kabul ediliyor** — beyan etmek şartıyla |
| Dağıtım | Audible, Google Play, Apple Books, Spotify |

Peşin maliyet sıfır, komisyon %20, ve AI seslendirme açıkça serbest.
Bu, tüm listedeki en cömert platform ekonomisi.

### Ama saf haliyle yapma
"Kamu malı İngilizce klasikleri seslendirip yükle" fikri **doymuş** —
LibriVox aynısını 20 yıldır **ücretsiz** dağıtıyor. Rekabetin bedava.

### Kama: arzın olmadığı dil
Asıl boşluk çeviride ve az hizmet alan dillerde:

- **Türkçe kamu malı edebiyat.** Ömer Seyfettin (ö. 1920), Namık Kemal,
  Ahmet Haşim, Ziya Gökalp — hepsi kamu malı. Türkiye'de sesli kitap arzı
  hâlâ çok zayıf, talep ise artıyor.
- **Türkçeye çevrilmiş kamu malı dünya klasikleri.** Kaynak metin kamu malı,
  çeviriyi sen üretiyorsun — yani çeviri de senin eserin.
- Aynı mantık Arapça, Farsça, Endonezce için de geçerli ve o pazarlar daha büyük.

⚠️ **Telif kontrolü şart:** Türkiye'de eser, yazarın ölümünden **70 yıl** sonra
kamu malı oluyor. Ömer Seyfettin ✅ (1920). Reşat Nuri ✅ (1956 → 2026).
Halide Edip ❌ (1964 → 2034). Sabahattin Ali ❌ (1948 → 2018 ✅ aslında).
**Her kitap için tek tek doğrula, listeye güvenme.**

### Boru hattı
```
Kamu malı metin (Gutenberg / açık arşivler)
   ↓  (opsiyonel) çeviri
   ↓  bölüm ayrımı, telaffuz sözlüğü, isim düzeltme    ← asıl emek burada
Fish Audio / TTS  →  bölüm bölüm ses
   ↓  ses normalizasyonu, sessizlik temizleme, ACX ses standardı
Kapak görseli
   ↓
Voices by INaudio → Spotify + Audible + Apple + Google
```

Fish Audio'yu zaten kullanıyorsun. Değişen tek şey **çıktının nereye gittiği** —
podcast beslemesine değil, satılan bir ürüne.

### Ekonomi
Sesli kitap perakende 10–20 $. %80 senin. **Satış başına 8–16 $ net.**
Bir kitap bir kez üretiliyor ve kataloğunda **kalıcı** kalıyor.
50 kitaplık katalog, kitap başına ayda 3 satış → aylık ~1.200–2.400 $ pasif.

### Riskler
- **Telaffuz kalitesi ürünün kendisi.** Türkçe TTS özel isimlerde, Osmanlıca
  kelimelerde ve şiirsel metinde tökezler. Bölüm bölüm dinlemeden yayınlama.
- Kapak ve metadata satışın yarısı. Otomatikleştirme, elle yap.
- İlk 3 kitapta **kalite > hız.** Kötü yorum kataloğun tamamını öldürür.

---

# Fikir 2 — Oyun Varlığı Paketi Kataloğu

Bir önceki raporun tam tersi: **aracı satmıyorsun, çıktısını satıyorsun.**

### Platform ekonomisi (doğrulandı)

| Platform | Senin payın | Ücret |
|---|---|---|
| Unity Asset Store | **%70** | Yayın ücreti yok, min. 4,99 $ |
| itch.io | **%90** (komisyonu sen belirliyorsun, varsayılan %10) | Yok |

Araştırma net: *"Varlık paketleri, ilk üretim emeğinden sonra düşük bakımla
istikrarlı pasif gelir üretebiliyor."* Oyunlardan farklı — oyunların %70'i
başarısız oluyor, varlık paketi ise raf ömrü uzun bir ürün.

### Yığın
`aldegad/sprite-gen` (644 ⭐, **Apache-2.0, CPU'da çalışıyor, GPU yok**) →
durum satırları, chroma alpha, kare çıkarma, atlas + manifest.
`Hugo-Dz/spritefusion-pixel-snapper` (2.769 ⭐) → ızgara hizalama.

### Neden iyi
- Telif sorunu **yok** — ürettiğin senin
- Katalog kalıcı, algoritma bağımlılığı yok
- Bir paket = bir tema (örn. "16-bit zindan canavarları, 20 karakter, 6 durum")
- Nişleş: herkes fantasy yapıyor. Sen tarım, tıp, uzay istasyonu, Osmanlı-Selçuklu
  temaları yap — arz yok

### Riskler
- **Unity Asset Store'un AI içerik politikasını yüklemeden önce oku.** Değişiyor.
- Oyun geliştirici topluluğunda AI sanat tepkisi sert — ürünü dürüstçe etiketle
- Kalite eşiği gerçek: elle rötuş gerekiyorsa süreyi buna göre planla

---

# Fikir 3 — Niş Açıklayıcı Video Kanalı

### Yığın
| Repo | ⭐ | Ne yapar |
|---|---|---|
| `Agents365-ai/video-podcast-maker` | **1.525** | Konu → 4K anlatımlı video. 11 TTS platformu, ses klonlama, kelime seviyesi altyazı senkronu, Remotion, **maliyet kapılı üretim** |
| `Alisa0808/vox-director` | 1.184 | Konu → Vox tarzı kâğıt kolaj açıklayıcı video |
| `nexu-io/html-video` | 4.287 | HTML/CSS → MP4, Apache-2.0, **render başına ücret yok** |

`video-podcast-maker`'daki "maliyet kapılı üretim" özelliği ciddiye alınmalı —
bu boru hattını kuranlar API faturasının işi öldürdüğünü görmüş ve önlem koymuş.

### YouTube politikasına uyum şartı
Bu fikir **ancak** şu üçü varsa çalışır:
1. **Özgün senaryo** — makale okuyan TTS değil, senin kurduğun anlatı
2. **Tutarlı görsel kimlik** — stok slayt gösterisi değil
3. **Gerçek küratörlük** — konu seçiminde insan yargısı

Bunlar yoksa üç ihtarla programdan atılırsın. Politika metni birebir bunu tarif ediyor.

### Dürüst uyarı
Türkçe YouTube RPM'i düşük (~1–3 $/1000 izlenme). İngilizce niş kanal (finans,
sağlık, teknoloji) 8–20 $ RPM alabiliyor ama rekabet de orada. Bu fikir üçüncü
sırada çünkü **reklam gelirine ve algoritmaya bağımlı** — ilk ikisi değil.

---

# Fikir 4 — Podcast'çiler için Shorts Üretimi (hizmet, ama otomatik)

### Yığın
`OStudi/short-video-generator-AI` (771 ⭐, **MIT**):
video indir → **faster-whisper ile yerel** transkripsiyon → LLM ile içerik sınıflama →
0–100 viralite skoruyla öne çıkan bölüm sıralama → tekrar eleme → dikey shorts render.

Maliyet yapısı iyi: Whisper **yerelde** (bedava), LLM tarafında Gemini'nin
ücretsiz katmanı yeterli (günlük limitli).

### ⚠️ Yanlış yol
Başkasının videosunu kesip kendi kanalına yüklemek = telif ihlali **ve** YouTube'un
"reused content" politikası. Bu yol kapalı, denemeyin.

### Doğru yol
Podcast yapımcılarıyla anlaş. Onların 2 saatlik bölümlerinden haftalık 20 shorts
üret. Podcast'çiler bunu istiyor ama yapacak zamanları yok. Aylık ücret veya
kanal büyümesinden pay.

Saf pasif gelir değil — ama **ilk günden nakit** getiriyor ve diğer fikirleri
finanse ediyor. Ayrıca senin zaten podcast dünyasında olman burada avantaj.

---

# Fikir 5 — Çok Platformlu İçerik Dağıtımı

`OrangeViolin/content-pipeline` (213 ⭐): *"Tek prompt → çok platformlu yayın."*

Tek bir özgün içeriği (senin yazdığın) platform platform doğru formata çevirip
dağıtıyor. Bu tek başına iş değil — **yukarıdaki her fikrin çarpanı.**
Aynı emeği 5 kanala dağıtınca gelir 5'e katlanmıyor ama 2–3'e katlanıyor.

---

## Sıralama ve neden

| # | Fikir | Gelir tipi | Peşin emek | Kalıcılık |
|---|---|---|---|---|
| 1 | **Sesli kitap** | Birim satışı, %80 | Orta | **Kalıcı katalog** |
| 2 | **Varlık paketi** | Birim satışı, %70–90 | Orta | **Kalıcı katalog** |
| 3 | Açıklayıcı video | Reklam | Yüksek | Algoritmaya bağlı |
| 4 | Shorts hizmeti | Hizmet bedeli | Düşük | Müşteriye bağlı |
| 5 | Dağıtım | Çarpan | Düşük | — |

**Öneri: 1 ve 4'ü birlikte başlat.** 4 ilk aydan nakit getirir ve senin mevcut
podcast ağını kullanır; 1 ise kalıcı katalog kurar. 4 numara 1 numarayı finanse eder.

---

## İlk 30 gün

| Gün | İş | Ölçülecek |
|---|---|---|
| 1–3 | **Tek bir kamu malı Türkçe kitap seç, telifini avukat/mevzuatla doğrula** | Kamu malı mı, kesin mi |
| 4–10 | Tek bölümü Fish Audio ile üret. Telaffuz sözlüğü kur. Baştan sona dinle. | **Dinlenebilir mi** |
| 11–20 | Tam kitabı üret, kapak yaptır, INaudio'ya yükle | Yayına girdi mi |
| 21–30 | Paralelde 3 podcast'çiye shorts teklifi götür | **Biri ödüyor mu** |

### Durma kriterleri
- **İlk bölümü baştan sona dinlemeye katlanamıyorsan dur.** Dinleyici de katlanmaz.
  Sesli kitapta kalite eşiği geçilmesi zorunlu, esnetilemez.
- 90 günde ilk kitap 10 satış yapmadıysa → kitap seçimi ya da metadata yanlış,
  katalog büyütmeden önce düzelt.
- Hiçbir podcast'çi shorts'a ödemiyorsa → o kanalı kapat, sesli kitaba odaklan.

---

## Hepsi için geçerli üç kural

1. **AI kullanımını beyan et.** Her platform (YouTube, INaudio, Audible, Apple)
   beyanı kabul ediyor ve beyan edilmiş içerik cezalandırılmıyor. Gizlemek
   kalıcı kapanma sebebi. Gizleyerek kazanılan kısa vadeli avantaj, kaybedilen
   hesabın yanında hiçbir şey.
2. **Şablon değil, katalog kur.** "Aynı şeyin 500 varyantı" temizleniyor.
   "500 farklı iyi ürün" temizlenmiyor.
3. **Telifi baştan çöz.** Kamu malı doğrulaması, çeviri hakları, üretilen
   görselin ticari kullanım hakkı. Bu iş modelinde tek gerçek varoluşsal risk bu.

---

## Kaynaklar
- [YouTube inauthentic content politikası](https://scalelab.com/en/why-youtube-is-cracking-down-on-ai-generated-content-in-2026)
- [YouTube AI monetizasyon kuralları](https://ytgrowth.io/blog/youtube-ai-policy)
- [Spotify sesli kitap yayıncılığı](https://narratory.co/blog/publish-audiobook-on-spotify/)
- [ACX vs Findaway/INaudio telif oranları](https://narrationbox.com/blog/which-audiobook-platform-pays-more-acx-vs-findaway)
- [Unity Asset Store satıcı geliri](https://generalistprogrammer.com/tutorials/unity-asset-store-selling-guide-revenue)
- [itch.io gelir rehberi](https://generalistprogrammer.com/tutorials/how-to-make-money-on-itchio-indie-game-guide)
