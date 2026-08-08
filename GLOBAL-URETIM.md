# Global B2C Üretim Aracı — Oyun Varlığı Üretimi (8 Ağustos 2026)

Yeni kriterler:
- **Global**, İngilizce, ilk günden dünyaya satılabilir (Türkiye'ye sıkışmasın)
- **Üretim** şeklinde bir iş — "bir şeyi analiz eden uygulama" değil
- **Uygulama geliştirici seviyesi** — model eğitmek, sinyal işleme yazmak yok
- Abonelik, ticari kullanıma açık lisans

---

## Kanıt: repolar bir sorunu bağıra bağıra söylüyor

| Repo | ⭐ | Açılış | Ne diyor |
|---|---|---|---|
| `0x0funky/agent-sprite-forge` | **3.666** | 23 Nis | Prompt'tan sprite sheet, şeffaf PNG, animasyonlu GIF |
| `Hugo-Dz/spritefusion-pixel-snapper` | **2.769** | Kas 2025 | "Pikselleri kusursuz ızgaraya oturtur. **AI'ın ürettiği dağınık ve tutarsız pixel art'ı düzeltmek için tasarlandı.**" |
| `aldegad/sprite-gen` | 644 | 12 May | Apache-2.0, CPU, gerçek alpha kanallı atlas + manifest |
| `worldwonderer/novel-to-game` | 599 | 18 Tem | Romandan oynanabilir oyun |
| `gamedev-skills/awesome-gamedev-agent-skills` | 437 | 24 Haz | Godot/Unity/Unreal için 66 skill |
| `r1n7aro/Locus` | 697 | 22 Nis | Açık kaynak Unity geliştirme ajanı |

İkinci satır kritik. **2.769 kişi, "AI'ın ürettiği oyun sanatını düzeltmek için" bir araca yıldız vermiş.**
Bir düzeltme aracının bu kadar ilgi görmesi tek bir şey anlamına gelir:
**AI oyun sanatı üretiyor ama üretilen şey kullanılabilir değil.**

---

## Pazar zaten para akıtıyor

| Ürün | Fiyat | Kime |
|---|---|---|
| Scenario | 15–100 $/ay | Oyun stüdyoları, indie |
| Layer.ai | 30 $/ay (ücretsiz katman 600 üretim) | Oyun stüdyoları |

Yani "oyun geliştiricisi AI sanat için abonelik öder mi?" sorusu **zaten cevaplanmış.**
Doğrulanacak bir varsayım değil, ölçülmüş bir gerçek. Senin sorun farklı bir yerde.

---

## Boşluk: onlar **görsel** üretiyor, oyunun ihtiyacı **varlık**

Scenario ve Layer'ın odağı **stil tutarlılığı** — kendi sanatınla özel model eğitiyorlar.
Bu ML işi ve zaten iyi yapıyorlar.

Bıraktıkları boşluk şu: güzel bir resim ile **motora sürüklenip bırakılabilen bir varlık**
arasındaki mesafe. Indie geliştirici haftalarını tam olarak burada kaybediyor:

| AI'ın verdiği | Oyunun istediği |
|---|---|
| Güzel tek bir karakter resmi | Aynı karakter, 6 durumda (idle/saldırı/hasar/zıplama/ölüm/büyü), tutarlı |
| JPEG, beyaz arka plan | Gerçek alpha kanalı, temiz kenar |
| Rastgele piksel ızgarası | Izgaraya oturmuş, tutarlı piksel boyutu |
| 8 ayrı dosya | Paketlenmiş atlas + `manifest.json` kare koordinatları |
| — | Godot/Unity/Phaser'a içe aktarınca **çalışan** bir şey |

`sprite-gen` bu boru hattının tamamını zaten yapıyor: durum satırları → chroma alpha →
bağlı bileşen analizi → şeffaf kareler → `sprite-sheet-alpha.png` + `manifest.json`.
**Apache-2.0, CPU'da çalışıyor, GPU istemiyor.**

Senin işin: görsel API'lerini çağırmak, bu boru hattını sarmalamak, üstüne web arayüzü
ve ödeme koymak. **Model eğitme yok. Sinyal işleme yok.** Tam senin seviyende.

---

## Ürün

> **Prompt gir → motoruna içe aktarılmaya hazır sprite sheet çıksın.**

```
"pixel art knight, 32x32, side view"
        ↓
Görsel API (Codex / Grok / GPT-Image — sağlayıcı değiştirilebilir)
        ↓
sprite-gen boru hattı: durum satırları → alpha temizleme → kare çıkarma
        ↓
pixel-snapper mantığı: ızgara hizalama, tutarlı piksel boyutu
        ↓
Atlas paketleme + manifest
        ↓
Godot .tres / Unity .meta / Phaser JSON — hazır indir
```

Ayırt edici özellik teknik zekâ değil, **bitmiş iş.** Rakip sana resim veriyor;
sen çalışan varlık veriyorsun.

---

## Beachhead: game jam'ler

Bu en iyi kısım. **Game jam** = 48 saatte oyun yapma yarışması. Ludum Dare, GMTK Jam,
itch.io'da sürekli onlarca tane. Global, İngilizce, binlerce katılımcı.

Jam geliştiricisinin durumu tam senin ürünün profili:
- **Süre yok** — 48 saat
- **Sanatçı yok** — çoğu solo
- **Çizemiyor** — programcı
- **Mükemmel sanat istemiyor** — tutarlı ve çalışan sanat istiyor

Acı burada maksimum ve zaman kutulu. Jam'de kullanan kişi indie geliştiriciye dönüşüyor.
Dağıtım: jam sponsorluğu, itch.io, Godot/Unity Discord sunucuları, r/gamedev (dikkatli).

---

## Fiyatlandırma — burada öncekilerden ayrılıyoruz

⚠️ **Önemli fark:** Önceki fikirlerde marjinal maliyet sıfırdı (cihazda çalışıyordu).
**Burada değil.** Her sprite sheet çok sayıda görsel API çağrısı demek. Bu gerçek para.

Yani **sınırsız abonelik satamazsın.** Kredi tabanlı olmak zorunda:

| Katman | Fiyat | Kredi |
|---|---|---|
| Ücretsiz | 0 $ | 30 kredi/ay (jam'de tadına baksın) |
| Indie | 19 $/ay | 500 kredi |
| Pro | 49 $/ay | 1.500 kredi + ticari lisans + toplu üretim |

Kullanılabilir sheet başına görsel API maliyetini **ilk hafta ölç.** 0,50 $'ı geçiyorsa
19 $ katmanı tutmaz, fiyatı ya da boru hattını değiştir.

---

## İlk 30 gün

| Gün | İş | Ölçülecek tek şey |
|---|---|---|
| 1–7 | `sprite-gen` fork'u, tek karakter tipi, 6 **statik** durum, basit web arayüzü | **Çıktı Godot'a elle düzeltme olmadan giriyor mu** |
| 8–14 | 20 farklı karakter üret, hepsini motora sok | **Kaç tanesi elle düzeltme istedi** |
| 15–22 | Bir game jam sırasında ücretsiz yayınla, Discord'larda duyur | **Kaç kişi ikinci kez kullandı** |
| 23–30 | Kredi duvarı, 19 $ | **Ücretsiz → ücretli dönüşüm** |

### Durma kriterleri
- **Üretilen sheet'lerin %50'sinden fazlası editörde elle düzeltme istiyorsa dur.**
  O zaman zaman kazandırmıyorsun, sadece yeni bir iş yaratıyorsun — ki
  `pixel-snapper`'ın var olma sebebi tam olarak bu.
- Jam geliştiricisi bir kez kullanıp dönmüyorsa → ürün değil, oyuncak.
- Kullanılabilir sheet başına API maliyeti > 0,50 $ → bu fiyatla marj çıkmaz.

---

## Dürüst riskler

**1. Kareler arası karakter tutarlılığı — bir numaralı teknik risk.**
Aynı şövalyenin 6 durumda da *aynı şövalye* görünmesi, AI görsel üretiminin
en zor problemi. `sprite-gen` bu konuda dürüst: yürüme/koşma döngülerini
"deneysel" olarak işaretliyor ve **sadece hareket QA'sı geçerse** gönderiyor.
- **v1'de animasyon döngüsü vaat etme.** 6 statik duruş zaten çok değerli
  ve belirgin şekilde daha kolay.
- Yürüme döngüsü v2. Sözünü ürüne yazma.

**2. Marjinal maliyet sıfır değil.**
Önceki fikirlerin cazibesi cihazda çalışmasıydı. Bu öyle değil — her üretim
para yakıyor. Kredi modeli şart, "sınırsız" deme. Bu iş modelini daha zayıf
yapıyor ama yine de sağlıklı: 19 $ abonelikte kredi maliyetin ~5 $ ise marj %70.

**3. Rakipler fonlu ve bu katmanı ekleyebilir.**
Scenario ve Layer boru hattı katmanını yarın ekleyebilir. Onların odağı şu an
stüdyo tarafında ve stil eğitiminde. Senin avantajın hız ve odak: **jam ve solo
geliştirici**, onların umursamadığı segment. Kalıcı hendek değil, **zaman avantajı.**
Buna göre plan yap — 12 ay içinde ya bir topluluk kur ya da sat.

**4. Oyun geliştirici topluluğunda AI sanat tepkisi gerçek ve sert.**
Steam AI beyanı zorunlu tutuyor, itch.io'da güçlü bir karşıtlık var.
r/gamedev'e "sanatçının yerini alıyoruz" diye girersen linç yersin.
- Doğru çerçeve: **"çizemeyen solo geliştirici için prototip ve yer tutucu sanat."**
  Sanatçının yerine değil, sanatçısı olmayanın yerine.
- Bu sadece pazarlama değil, dürüst konumlandırma — jam'de kimse sanatçı tutmuyor.

**5. Lisans netliği ürünün parçası.**
Kullanıcı ürettiği varlığı ticari oyununda kullanacak. Hangi görsel API'yi
çağırdığın ticari kullanım hakkını belirliyor. Sağlayıcı şartlarını **ürünü
kurmadan önce** oku ve kullanıcıya net söyle. `sprite-gen` Apache-2.0, orada
sorun yok — risk çağırdığın görsel modelde.

---

## Kriterlere uygunluk

| Şartın | Karşılığı |
|---|---|
| Global, Türkiye'ye sıkışmasın | itch.io, Discord, r/gamedev — ilk günden İngilizce ve dünya |
| "Analiz eden uygulama" olmasın | Üretim aracı — girdi prompt, çıktı çalışan dosya |
| Uygulama geliştirici seviyesi | API orkestrasyonu + web arayüzü + Stripe. `sprite-gen` CPU'da, GPU ve ML eğitimi yok |
| Abonelik | Kredi tabanlı, 19/49 $ |
| Ücretsiz lisans | `sprite-gen` Apache-2.0, `pixel-snapper` açık |
| Talep kanıtlı | Scenario 15–100 $/ay, Layer 30 $/ay — pazar zaten ödüyor |

Birinci hafta cevaplanan tek soru: **çıktı gerçekten Godot'a elle düzeltmesiz giriyor mu?**
Giriyorsa iş var. Girmiyorsa `pixel-snapper`'ın 2.769 yıldızına bir tane daha eklemiş olursun.

---

## Kaynaklar
- [Scenario fiyatlandırma](https://aigearbase.com/tool/scenario)
- [Layer AI fiyatlandırma](https://usethisai.com/tool/layer-ai/)
- [Layer vs Scenario karşılaştırma](https://www.layer.ai/vs/scenario)
