# B2C Abonelik Fikri — Ücretsiz Yığın, Ödeyen Kullanıcı (8 Ağustos 2026)

Kriterler değişti: **doğrudan son kullanıcıya**, **self-servis abonelik**,
**ticari kullanıma açık lisanslı** açık kaynak üstüne.

Bu, önceki iki raporun tamamen dışında bir arama demek. B2C'de kurumsal satış
yok — ürün kendini satmalı, ve **birim maliyet aboneliğin altında kalmalı.**
Kritik soru şu: *Hangi yeni repo, daha önce imkânsız olan bir birim maliyeti
mümkün kıldı?*

---

## Bulunan Kilit Repo: `katipally/openlive`

**238 ⭐ · 9 Temmuz 2026 · MIT · macOS/Windows/Linux + tarayıcı**

Kendi tanımı: "ElevenLabs Agents, Gemini Live ve OpenAI Realtime'a açık
alternatif." Ama asıl önemli olan **neyin nerede çalıştığı:**

| Bileşen | Nerede çalışıyor | Sana maliyeti |
|---|---|---|
| VAD (Silero) — konuşma algılama | Kullanıcının cihazı | **0 ₺** |
| STT (Whisper) — sesi yazıya | Kullanıcının cihazı | **0 ₺** |
| TTS (Kokoro / Supertonic) — yazıyı sese | Kullanıcının cihazı | **0 ₺** |
| Barge-in — sözünü kesebilme | Kullanıcının cihazı | **0 ₺** |
| Ses klonlama (ZipVoice) | Kullanıcının cihazı | **0 ₺** |
| LLM "beyin" | Senin sunucun / API | sadece metin token'ı |

WebGPU üstünde çalışıyor, ~200 MB indirme. Sunucuna giden tek şey
**metin transkripti.**

### Neden bu her şeyi değiştiriyor

Gerçek zamanlı sesli ürünlerin B2C'de hiç tutmamasının tek sebebi maliyetti:

| | Dakika başı | 400 dk/ay kullanan bir abone |
|---|---|---|
| OpenAI Realtime / ElevenLabs | ~0,10 $ | **~40 $/ay maliyet** |
| openlive + ucuz metin LLM | ~0 $ | **~0,5–2 $/ay maliyet** |

400 dakika = günde 20 dk, ayda 20 gün. Yani normalde 40 $ maliyeti olan
kullanıcı sana **1 dolara** mal oluyor. 249 ₺'lik abonelikte brüt marj **%90+.**

Ve asıl silah bu: **ücretsiz katman sana gerçekten bedava.**
Rakiplerin ücretsiz katmanı her dakika para yakıyor, o yüzden cimri olmak
zorundalar. Sen cömert olabilirsin. Bu bir pazarlama tercihi değil,
**yapısal bir avantaj** — kopyalamak için tüm altyapılarını değiştirmeleri gerekir.

---

## Ürün: Türkler için İngilizce Konuşma Antrenörü

### Neden bu pazar
"İngilizcem var ama konuşamıyorum" Türkiye'de kişisel bir sorun değil,
**ulusal bir refleks.** Milyonlarca insan yıllarca gramer çalışmış ve
ağzını açamıyor. Ödeme isteği zaten kanıtlanmış: Cambly 1.000–2.000 ₺/ay,
Preply benzeri, ve insanlar ödüyor.

Sen 249 ₺'ye aynı şeyin daha iyisini veriyorsun — çünkü maliyet yapın farklı.

### Farklılaşma 1: Türk hata modeli

Speak, ELSA, Cambly herkese aynı genel geri bildirimi veriyor. Oysa bir Türk'ün
İngilizce hataları **önceden tahmin edilebilir** ve dilbilimsel olarak nettir:

| Hata | Sebep |
|---|---|
| **he / she karıştırma** | Türkçede gramatik cinsiyet yok — "o" tek kelime |
| **a / an / the** hataları | Türkçede artikel yok |
| Cümle kurarken donma | Türkçe SOV, İngilizce SVO |
| "think" → *tink/sink*, "the" → *ze/de* | /θ/ ve /ð/ Türkçede yok |
| "west" → *vest* | /w/ ve /v/ birleşiyor |
| "sport" → *sıport*, "train" → *tıren* | Türkçe kelime başı ünsüz kümesi kabul etmez, araya ünlü sokar |
| İngilizce ünlülerin kayması | ünlü uyumu baskısı |

Bu liste ürünün kalbi. Ajan bu 20–30 hatayı **önceden biliyor**, özellikle
onları dinliyor, hedefli alıştırma veriyor ve **açıklamayı Türkçe yapıyor.**
Genel bir tutor'dan somut olarak daha iyi — ve büyük oyuncular için bu pazar
bu emeği harcayacak kadar büyük değil. Senin için tam ölçüsünde.

### Farklılaşma 2: Utanma faktörü
Türkiye'de konuşma pratiğinin önündeki bir numaralı engel gramer değil,
**rezil olma korkusu.** Ve openlive mimarisi tam olarak buna cevap veriyor:

> "Sesin cihazından hiç çıkmıyor. Kimse duymuyor. Sunucuya sadece metin gidiyor."

Bu bir pazarlama cümlesi değil — **teknik olarak doğru.** Mimari ile duygusal
satış argümanı birebir örtüşüyor. Bu çok nadir bir hizalanma.

---

## Teknik yığın (hepsi ticari kullanıma açık)

| Katman | Repo / model | Lisans |
|---|---|---|
| Ses döngüsü (VAD/STT/TTS/barge-in) | `katipally/openlive` | MIT |
| Telaffuz puanlama (GOP) | `YuanGongND/gopt`, `jimbozhang/kaldi-gop` | açık |
| Telaffuz veri seti (yerli olmayan konuşmacı) | `jimbozhang/speechocean762` | açık |
| Fonem sözlüğü | `open-dict-data/ipa-dict`, `CUNY-CL/wikipron` | açık |
| Referans uygulama | `Thiagohgl/ai-pronunciation-trainer` (512 ⭐) | açık |
| Beyin | herhangi bir ucuz metin LLM (kendi barındırdığın da olur) | — |

Yedek ses yığını: `QwenAudio/qwen-audio-agent` (Apache-2.0, full-duplex,
1.990 ⭐) — ama DashScope'a bağımlı, yani maliyet avantajını kaybedersin.
openlive'ın tüm değeri cihazda çalışmasında.

---

## Fiyatlandırma

| Katman | Fiyat | İçerik |
|---|---|---|
| **Ücretsiz** | 0 ₺ | 15 dk/gün, 3 senaryo, temel geri bildirim |
| **Pro** | 249 ₺/ay | Sınırsız, tüm senaryolar, telaffuz raporu, hata takibi, mülakat modu |
| **Yıllık** | 1.990 ₺ | ~%33 indirim, nakit akışını öne çeker |

Ücretsiz katman cömert olmalı — sana maliyeti yok ve **tek büyüme motorun o.**

---

## Dağıtım (B2C'de asıl zor kısım burası)

Ürün değil, dağıtım öldürür. Şansın şu: **farklılaştırıcın ile içeriğin aynı şey.**

- **TikTok / Reels:** "Türklerin en çok yaptığı İngilizce hatalar" formatı
  Türkçe'de kanıtlanmış viral. Ve bu tam olarak ürününün hata modeli.
  Her video hem içerik hem ürün demosu. Maliyet: sıfır.
- **Hazırlık öğrencileri:** yoğun, birbirine bağlı, çaresiz ve bedava katmanı
  gerçekten kullanacak bir kitle. Kampüs kampüs gidilir.
- **Ücretsiz katmanın kendisi huni.** Rakip bunu bu cömertlikte yapamaz.

---

## İlk 30 gün

| Gün | İş | Ölçülecek tek şey |
|---|---|---|
| 1–7 | openlive fork'u + tek senaryo (iş mülakatı) + Türk hata listesi v1 (20 madde). Web/masaüstü. | Çalışıyor mu |
| 8–15 | 20 kişiye ücretsiz ver (hazırlık öğrencisi + beyaz yakalı karışık) | **7 gün sonra kaçı hâlâ kullanıyor** |
| 16–22 | Ödeme duvarı, 249 ₺ | **ücretsiz → ücretli dönüşüm** |
| 23–30 | 3 TikTok videosu | **kullanıcı edinme maliyeti** |

### Durma kriterleri
- **7. gün tutundurma < %20** → ürün tutmuyor. Özellik ekleme, dur ve düşün.
- **Ücretsiz → ücretli < %2** → değer önerisi ya da fiyat yanlış.
- **Mobil tarayıcıda cihaz-içi ses çalışmıyorsa** → aşağıyı oku, bu en büyük risk.

---

## Dürüst riskler

**1. Mobil — bir numaralı risk.**
openlive masaüstü (macOS/Windows/Linux) + tarayıcı geliştirme modu.
Türk tüketicisi ise **ezici çoğunlukla mobil.** iOS Safari'de WebGPU desteği
yeni ve kırılgan; cihaz-içi Whisper/Kokoro mobil tarayıcıda sallantılı olabilir.
- Doğrulama: **daha ilk hafta** kendi telefonunda tarayıcı modunu dene.
- Çalışmıyorsa iki yol var: (a) web/masaüstü ile ödeme isteğini doğrula,
  sonra native mobile geç (whisper.cpp + Core ML / ONNX Runtime Mobile —
  haftalarca iş), ya da (b) mobilde STT'yi geçici olarak kendi sunucunda çalıştır
  — Realtime API'den yine 10–50 kat ucuz, ama "ses cihazından çıkmıyor"
  argümanını o platformda kullanamazsın.
- Bunu planla, sonra keşfetme.

**2. Kaskad boru hattı, gerçek full-duplex değil.**
Konuş → yazıya çevir → model → sese çevir. GPT Realtime gibi aynı anda
konuşup dinleyemiyor. Dil öğrencisi için bu aslında sorun değil (öğrenenin
düşünme süresine ihtiyacı var), ama "insanla konuşur gibi" diye satma.

**3. Telaffuz puanlama ayrı bir mühendislik işi.**
Whisper yazıya çevirir, **fonem doğruluğu puanlamaz.** Gerçek telaffuz puanı
için GOP (goodness-of-pronunciation) gerekiyor: `gopt` / `kaldi-gop`,
`speechocean762` üstünde doğrulanmış. Araçlar olgun ama eski ve Kaldi tabanlı —
kurulumu keyifsiz. Bunu MVP'ye koyma, v2'ye bırak. MVP'de LLM'in metin
üzerinden verdiği gramer/kelime geri bildirimi yeterli.

**4. Rakipler fonlu.**
Speak (~1 milyar $ değerleme), ELSA, Cambly, Duolingo Max. Onları özellikle
yenemezsin. Yenebileceğin üç şey var: **fiyat** (yapısal, ses yığını bedava
olduğu için), **Türkçeye özel kalite** (onların umursamayacağı kadar dar),
ve **dağıtım** (Türkçe içerikte sen yerlisin, onlar değil).

---

## Neden bu fikir kriterlere uyuyor

| Senin şartın | Karşılığı |
|---|---|
| Doğrudan son kullanıcıya | Evet — kurumsal satış yok, kredi kartı ile self-servis |
| Abonelik | Evet — 249 ₺/ay, freemium huni |
| Ücretsiz kullanabileyim | Evet — openlive MIT, Whisper/Silero/Kokoro hepsi ticari kullanıma açık |
| Para basma makinesi | %90+ brüt marj, sıfır maliyetli ücretsiz katman, kanıtlanmış ödeme isteği |

Tek gerçek engeli mobil. Onu ilk hafta test et — gerisi yürür.
