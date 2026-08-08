# Alternatif B2C Fikri — Enstrüman Pratik Koçu (8 Ağustos 2026)

Öncekilerden tamamen farklı bir alan. Ne kurumsal satış, ne imalat, ne dil öğrenimi.
Aynı kriterler geçerli: **doğrudan son kullanıcı, abonelik, ücretsiz lisanslı yığın.**

---

## Taranan ve elenen alanlar

Karar vermeden önce beş ayrı bölgeye baktım:

| Alan | En iyi bulgu | Neden elendi |
|---|---|---|
| Video üretimi | `nexu-io/html-video` (4.3k ⭐, Apache-2.0, render başına ücret yok) | Tüketici tarafı aşırı kalabalık — Opus Clip, Submagic, CapCut |
| Görsel düzenleme | `bytedance/Lance`, `Bernini` | Aynı — ve model ağırlıkları GPU maliyeti demek |
| Kişisel podcast | `zarazhangrui/personalized-podcast` (411 ⭐) | NotebookLM aynısını bedava yapıyor |
| 3D üretim | `RareSense/Nova3D` (499 ⭐) | Tüketici ödeme isteği belirsiz |
| Kişisel hafıza | `trace-cortex/cortex-app` (714 ⭐) | Aboneliğe dönüşmüyor, herkes bedava bekliyor |

Kalan ve seçilen alan: **müzik pratiği.**

---

## Kilit bulgu ve önemli bir uyarı

**`Oh-Sheet-Team/oh-sheet`** (332 ⭐ · 6 Nisan) — "Herhangi bir şarkıyı çalınabilir
piyano notasına çevir. YouTube linki yapıştır, PDF partisyon al."

Boru hattı öğretici: Basic Pitch (ONNX) ile nota tespiti → Demucs ile enstrüman
ayrıştırma → iki el düzenleme → music21 + LilyPond ile nota dizgisi.

⚠️ **Ama bu repoyu doğrudan kullanma.** README'de "Proprietary" rozeti var,
uzak dizgi servisi ("oh-sheet-ml-pipeline") kapalı kaynak. Lisans durumu net değil.

**Doğrusu: malzemeleri doğrudan kullan.** Hepsi ticari kullanıma açık:

| Bileşen | Ne yapar | Lisans |
|---|---|---|
| **Basic Pitch** (Spotify) | Sesten nota tespiti, ONNX, CPU'da çalışıyor | Apache-2.0 |
| **Demucs** (Meta) | Enstrüman ayrıştırma | MIT |
| **music21** (MIT) | Nota verisi işleme | BSD/MIT |
| **Verovio** | Nota görselleştirme (tarayıcıda) | LGPL |
| **IMSLP** | 200.000+ kamu malı partisyon | kamu malı |
| `Mocha-Yuan/MoChord` (165 ⭐) | Gitar akort/akor UX referansı | açık |

---

## Ama ürün "nota üretme" DEĞİL — ve bu ayrım kritik

"Herhangi bir şarkının notasını ver" fikrinin ortasında bir **hukuki mayın** var:
telifli bir bestenin notasını çıkarıp abonelikle satmak, türev eser üretip
para kazanmak demek. MuseScore bunun için lisans ödüyor. Gitar tab siteleri
2005'te yayıncı birliklerinden dava yedi. Türkiye'de MESAM/MSG kapını çalar.

O yüzden ürünü ters çeviriyoruz:

> **Sen çal, uygulama dinlesin ve neyi yanlış çaldığını söylesin.**

Telifli hiçbir içerik dağıtmıyorsun. Kullanıcının **kendi sesini** analiz
ediyorsun. Hukuken temiz, ve dahası — asıl acı zaten burada.

---

## Ürün: Piyano Öğrencisi için Pratik Koçu

### Çözdüğü somut acı
Her piyano öğretmeninin aynı şikâyeti var:

> "Öğrenci hafta boyunca evde **yanlış** çalışıyor. Derse geliyor, ilk yirmi
> dakikam öğrendiği yanlışı söküp atmakla geçiyor. Bir hafta boşa gidiyor."

Veli ayda 1.500–3.000 ₺ ders parası ödüyor ve **arasındaki 6 gün çöpe gidiyor.**
199 ₺/ay bu haftayı kurtarıyorsa, bu satış konuşması değil, aritmetik.

### Nasıl çalışıyor
```
Telefon mikrofonu (çocuk piyanoda çalıyor)
        ↓
Basic Pitch — cihazda, notaları tespit et      → sunucu maliyeti: 0 ₺
        ↓
Partisyon hizalama — parçanın neresindesin?
        ↓
Geri bildirim: hangi notayı kaçırdın, nerede
tempo kaydı, hangi ölçü sürekli hatalı
        ↓
Hedefli alıştırma: o 4 ölçüyü yavaş tempoda 10 kez
        ↓
Haftalık rapor → veliye ve öğretmene
```

### Repertuvar sorunu kendiliğinden çözülüyor
Piyano öğrencisi ne çalar? Bach, Czerny, Burgmüller, Clementi, Beethoven,
Chopin. **Hepsi kamu malı.** IMSLP'de 200.000'den fazla partisyon bedava.

Bu tesadüf değil, **yapısal avantaj:** Yousician ve Simply Piano'nun en büyük
gider kalemi pop şarkı lisansı. Senin lisans maliyetin **sıfır** — çünkü
hedef kitlenin çaldığı repertuvar zaten telifsiz.

### Birim ekonomi
Ses analizi kullanıcının cihazında (Basic Pitch ONNX, CPU'da ~10 sn/parça).
LLM sadece haftalık plan ve açıklama üretiminde devrede — nota başına değil.

| | Aylık maliyet/kullanıcı |
|---|---|
| Ses analizi | ~0 ₺ |
| LLM (haftalık plan/açıklama) | birkaç kuruş |
| **199 ₺ abonelikte brüt marj** | **~%95** |

---

## Dağıtım: öğretmen kanalı

B2C'de asıl zor kısım dağıtım. Buradaki çözüm zarif:

**Öğretmene ücretsiz panel ver.** Öğrencilerinin hafta içinde kaç dakika,
hangi ölçüde takıldığını görsün. Öğretmen bundan gerçek fayda görüyor —
derse hazırlıklı giriyor. Karşılığında bir öğretmen sana **20 öğrenci**
getiriyor.

Bu kurumsal satış değil, tek tek bireylere bedava araç vermek. Ve müzik
öğretmenleri birbirini tanıyan, küçük ve konuşkan bir topluluk.

---

## v2: Asıl savunulabilir hendek — bağlama ve makam

Batılı uygulamalar sesi **12 eşit aralıklı** batı sistemine yuvarlar.
Türk müziği ise tam sesi **9 komaya** böler. Yani bir bağlama öğrencisi
segah perdesini **doğru** bastığında, Yousician onu **hatalı** olarak işaretler.

Bu sadece bir yerelleştirme değil, **teknik olarak kopyalanması zor bir fark:**
Yousician'ın bunu desteklemesi için perde tespit motorunu baştan yazması
gerekir — ve bu pazar onların radarında bile değil.

Bağlama Türkiye'de en yaygın çalınan enstrümanlardan biri. Halk eğitim
merkezlerinde, belediye kurslarında binlerce öğrenci. Ud, kanun, ney aynı
mantıkla ekleniyor. Bu alanda **tek bir uygulama bile yok.**

Ama **v1'i piyano ile yap.** Bağlama hendeğin, piyano nakit akışın.

---

## Fiyatlandırma

| Katman | Fiyat |
|---|---|
| Ücretsiz | Günde 1 parça, temel geri bildirim |
| Pro | 199 ₺/ay — sınırsız, alıştırma planı, haftalık rapor |
| Aile | 299 ₺/ay — 3 çocuk |
| Öğretmen paneli | Ücretsiz (dağıtım kanalı, gelir kalemi değil) |

---

## İlk 30 gün

| Gün | İş | Ölçülecek tek şey |
|---|---|---|
| 1–5 | **Önce en büyük riski test et.** Ucuz bir duvar piyanosunda, telefon mikrofonuyla, oda gürültüsünde 20 kayıt al. Basic Pitch'e ver. | **Nota tespit doğruluğu** |
| 6–15 | Tek seviye: başlangıç repertuvarı (sağ el melodi + basit sol el). Partisyon hizalama + hata raporu. | Çalışıyor mu |
| 16–23 | 3 piyano öğretmeni, 15 öğrenci, ücretsiz | **Öğrenci 7 gün sonra hâlâ kullanıyor mu** |
| 24–30 | Veliye 199 ₺ ödeme duvarı | **Veli ödüyor mu** |

### Durma kriterleri
- **1. hafta: gerçek piyano kaydında nota doğruluğu %85'in altındaysa dur.**
  Ürünün tamamı bu sayının üstünde duruyor. Kötüyse gerisini yapma.
- 7. gün öğrenci tutundurma < %30 → çocuk kullanmıyor, veli de yenilemez.
- Veli dönüşümü < %5 → acı gerçek değil ya da fiyat yanlış.

---

## Dürüst riskler

**1. Çok sesli nota tespiti zor — bir numaralı risk.**
Basic Pitch tek çizgili melodide iyi, iki el aynı anda çalarken (polifoni),
pedal basılıyken ve akortsuz bir duvar piyanosunda belirgin şekilde zayıflıyor.
- Bunu **birinci hafta** test et, altıncı ayda değil.
- Şansın şu: **başlangıç repertuvarı en kolay vakadır** (sağ el melodi,
  sol el basit eşlik) ve pazar da tam orada. Zorlukla pazar aynı yerde
  değil — bu senin lehine.

**2. Partisyon takibi ayrı bir mühendislik işi.**
Notayı tespit etmek ile "öğrenci parçanın neresinde" sorusuna cevap vermek
farklı şeyler. Öğrenci durur, tekrar eder, yavaşlar. Buna "score following"
deniyor; DTW tabanlı çözümleri olgun ama hazır kütüphane gelmiyor. Gerçek iş.

**3. Mobil doğrulaması şart.**
Basic Pitch ONNX telefonda gerçek zamanlıya yakın çalışmalı. İlk hafta
kendi telefonunda ölç. Çalışmazsa parça-parça (çaldıktan sonra analiz)
moduna geç — pedagojik olarak yine işe yarar, sadece daha az büyüleyici.

**4. Rakipler var ve iyi.**
Yousician (~140 $/yıl), Simply Piano, Flowkey. Onları özellikte yenemezsin.
Yenebileceğin yerler: **fiyat**, **kamu malı klasik repertuvar** (onlar pop
lisansına para yakıyor), **Türkçe**, **öğretmen entegrasyonu**, ve sonra **makam**.

**5. LilyPond GPL'dir.**
Nota dizgisi için kullanacaksan ayrı bir çalıştırılabilir olarak çağır,
koduna bağlama. Ya da tarayıcıda **Verovio** kullan (LGPL) — zaten daha uygun.

**6. Telif konusunda disiplinli ol.**
Ürünün cazibesi "her şarkıyı çal" demeye zorlayacak. Direnç göster.
Kamu malı repertuvar + kullanıcının kendi sesi = temiz. Telifli notayı
dağıtmaya başladığın gün iş modeli değil, hukuk davası konuşuyorsun.

---

## Kriterlere uygunluk

| Şartın | Karşılığı |
|---|---|
| Doğrudan son kullanıcıya | Veli kredi kartıyla abone oluyor |
| Abonelik | 199 ₺/ay, aile ve öğretmen katmanlı |
| Ücretsiz kullanabileyim | Basic Pitch Apache-2.0, Demucs MIT, music21 MIT, Verovio LGPL, IMSLP kamu malı |
| Para basma makinesi | ~%95 brüt marj, sıfır lisans maliyeti, sıfır maliyetli ücretsiz katman |
| Öncekilerden farklı | Tamamen — ne kurumsal, ne imalat, ne dil |

Tek gerçek soru birinci haftada cevaplanıyor: **gerçek bir piyanoda,
telefon mikrofonuyla, nota tespiti yeterince doğru mu?**
Evetse iş var. Hayırsa hiç başlama.
