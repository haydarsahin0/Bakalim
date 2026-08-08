# Radar Altı Repolar — "Para Basma Makinesi" Adayları (8 Ağustos 2026)

İlk raporda trend listesinin tepesine baktık. Bu raporda tam tersi: **25–600 yıldız
bandındaki, son 4–8 haftada açılmış, kimsenin konuşmadığı ama çok pahalı bir işi
otomatikleştiren** repolar.

Filtreleme kriteri şuydu: *Bu repo, bugün insanların saat başı 100–200 $ ödediği
bir işi yapabiliyor mu?*

---

## Bulunan Cevherler

| Repo | ⭐ | Açılış | Neden önemli |
|---|---|---|---|
| **Pan-Chera/Multi-Agent-CAD** | 478 | 30 Tem | Metinden **gerçek, parametrik, üretilebilir STEP/STL** üretiyor. Oyuncak mesh değil — build123d + OpenCascade ile katı model. MIT. |
| **baidu/Unlimited-OCR** | 22.5k | 18 Haz | "One-shot long-horizon parsing" — çok sayfalı teknik dokümanı tek seferde, bağlamı kaybetmeden çözüyor. MIT. Trend listesine hiç girmedi çünkü OCR "sıkıcı". |
| **armpro24-blip/cad-cae-copilot** | 46 | 26 May | Text-to-CAE. CalculiX ile simülasyon, topoloji optimizasyonu, MCP sunucusu. 46 yıldız — neredeyse görünmez. |
| **nossa-y/activity-frames** | 551 | 4 Tem | İş gününü ajanın çalıştırabileceği yapılandırılmış iş akışlarına çeviriyor. %100 yerel, MCP. |
| **AMAP-ML/LongHorizon-Harness** | 410 | 4 Ağu | Masaüstü uygulamalarında **saatlerce** çalışan, durumunu kaybetmeyen, denetlenebilir ajan. Eski/legacy yazılım otomasyonunun kilidi. |
| **mrpulor-gh/nuphus-mcp** | 174 | 1 Ağu | Rust ile masaüstü otomasyon MCP sunucusu — ekran, pencere, fare/klavye, Chrome. |
| **ugarchance/record-and-replay-skill** | 28 | 7 Tem | Kullanıcı işi bir kez yapıyor, skill'e dönüşüyor. 28 yıldız. |
| **Anionex/agent-vision-toolkit** | 359 | 1 Ağu | Ucuz/yerel **metin-only** modellere görme yetisi veriyor: uzun ekran görüntüsü OCR'ı, GUI otomasyonu. Maliyeti 10'a bölen ara katman. |

---

## 1. Numaralı Fikir: Teklif Fabrikası (RFQ → Teklif Otomasyonu)

### Hedef müşteri
Türkiye'deki CNC talaşlı imalat, sac metal, kalıp ve OEM tedarikçisi atölyeler.
OSTİM, İkitelli, Bursa, Konya. Bu sektör Türkiye'nin ihracat omurgası ve
tamamen 1995 usulü çalışıyor.

### Otomatikleştirilen iş
Bir atölyeye müşteriden e-posta gelir: PDF teknik resim ya da STEP dosyası,
"şundan 500 adet, fiyat verin." Sonra ne olur:

1. Teklif mühendisi resmi açar, okur
2. Delikleri, toleransları, malzemeyi, yüzey işlemini çıkarır
3. Kaç dakika tezgâh süresi tutacağını tahmin eder
4. Malzeme + işçilik + kâr marjı hesaplar
5. Teklifi yazar, gönderir

**Bu iş RFQ başına 30–90 dakika sürüyor.** Bir atölye ayda 100–500 RFQ alıyor.
Yani ayda 2–3 tam zamanlı mühendis, sadece teklif yazıyor. Ve en acısı:
**atölyeler işi kalitesizlikten değil, geç teklif verdiklerinden kaybediyor.**
İlk 24 saatte cevap veren kazanıyor.

### Sistem 5 dakikada aynı işi yapıyor

```
E-posta / PDF / DWG / STEP
        ↓
  Unlimited-OCR        → teknik resmi tek seferde çöz: ölçü, tolerans,
                          malzeme, yüzey işlemi, adet, notlar
        ↓
  Multi-Agent-CAD      → geometriyi build123d/OpenCascade ile yeniden kur,
  + build123d             hacim/yüzey/delik sayısını DOĞRULA
                          (LLM tahmin etmiyor, geometri motoru ölçüyor)
        ↓
  Maliyet modeli       → malzeme fiyatı × hacim + tezgâh dakikası × süre
  (senin yazacağın)      + işlem sayısı + kurulum + marj
        ↓
  Teklif PDF'i         → 5 dakikada, mühendisin onayına düşer
```

### Bu fikri diğerlerinden ayıran şey
Buradaki kritik nokta **Multi-Agent-CAD'in doğrulayıcı mimarisi.** LLM'e
"bu parça kaç saat sürer" diye sormuyorsun — o zaten uydurur. LLM geometriyi
kod olarak kuruyor, **OpenCascade gerçekten ölçüyor**, ölçüm maliyet modeline
giriyor. Yani çıktı halüsinasyon değil, hesap. Ticari ürün ile demo arasındaki
fark tam olarak bu.

### Neden şimdi ve neden kimse yapmıyor
- Multi-Agent-CAD **10 gün önce** açıldı. Unlimited-OCR 7 hafta önce.
  Bu boru hattı Haziran'da mümkün değildi.
- Global rakipler (Paperless Parts, Xometry) sadece ABD pazarında, aylık
  1.500–5.000 $, ve Türk atölyesine hiç satmıyorlar.
- Türkiye'de bu alanda **hiç kimse yok.** Bir tane bile yerel ürün yok.
- Bu müşteri kitlesi yazılım satın almayı sevmez ama **kazanılan işe para öder.**

### Para modeli — asıl güzellik burada
Aylık SaaS satmak yerine **kazanılan teklif başına başarı primi:**

| Model | Fiyat |
|---|---|
| Kurulum + maliyet modeli kalibrasyonu | 150.000–300.000 ₺ tek seferlik |
| Aylık taban | 25.000–50.000 ₺ |
| **Kazanılan iş başına prim** | **İş bedelinin %0,5–1'i** |

Atölye ayda 3 milyon ₺'lik iş kazanıyorsa, tek başına prim 15–30 bin ₺.
Sen müşterinin bastığı paradan pay alıyorsun — o yüzden "para basma makinesi."
Ve müşteri asla iptal etmez, çünkü kesmek doğrudan ciro kaybı demek.

### İlk 30 gün — dar başla
**Sac metal ile başla, talaşlı imalata sonra geç.** Sebep: sac metalde
maliyet modeli neredeyse deterministik — kesim uzunluğu + büküm sayısı +
malzeme alanı. Doğruluğu ilk haftada %90'a çıkarırsın. CNC talaşlı imalatta
takım yolu tahmini çok daha zor, orada boğulursun.

1. **Gün 1–5:** Bir atölyeden **geçmiş 50 RFQ + verdikleri gerçek teklifleri**
   al. En değerli varlık bu. Karşılığında ücretsiz pilot teklif et.
2. **Gün 6–15:** Unlimited-OCR + build123d boru hattını kur. Sadece DXF/PDF
   sac parça. Çıktı: malzeme, alan, kesim uzunluğu, büküm sayısı, delik sayısı.
3. **Gün 16–25:** Maliyet modelini o 50 teklife **geri-uydur (backtest).**
   Ölçülecek tek metrik: **senin fiyatın ile mühendisin verdiği fiyat
   arasındaki sapma.**
4. **Gün 26–30:** Sapma **±%10'un altındaysa** iş var, satışa çık.
   **±%25'in üstündeyse** ya veri yetersiz ya sektör yanlış — dur, düşün.

### Dürüst riskler
- **Multi-Agent-CAD'in %99,3 başarı iddiası sadece 10 parçalık bir benchmark'tan.**
  Gerçek atölye resimleri çok daha kirli: elle çizilmiş notlar, taranmış
  faks kalitesi, eksik ölçü. İlk gün bunu kendi verinle test et.
- **Unlimited-OCR NVIDIA GPU istiyor** ve yayınlanmış doğruluk metriği yok.
  Bulutta bir GPU kirala, kendi teknik resimlerinle ölç. Kötüyse alternatifi var
  (`firecrawl/anydoc` + ticari OCR), mimari değişmez.
- **Maliyet modeli senin gerçek işin.** Repolar sana geometriyi verir; parayı
  o geometriyi doğru fiyata çeviren model kazandırır. Kopyalanması zor olan
  kısım da bu — ve her müşteride derinleşiyor.
- **Yanlış cevap pahalı.** Teklif düşük çıkarsa atölye zarar eder. O yüzden
  ürün **insanı değiştirmiyor, mühendisin önüne hazır teklif koyuyor.**
  Onay her zaman insanda. Bunu satış argümanı yap, gizleme.

---

## 2. Numaralı Fikir: Gösterip Öğreten Ajan (RPA'nın Yerine)

`activity-frames` + `record-and-replay-skill` + `LongHorizon-Harness` +
`nuphus-mcp` birlikte şunu mümkün kılıyor: **bir çalışan işi bir kez yapar,
sistem izler, o iş tekrar edilebilir bir ajan iş akışına dönüşür** — ve
`LongHorizon-Harness` sayesinde saatlerce, durumunu kaybetmeden,
denetlenebilir şekilde çalışır.

Bu, UiPath'in yaptığı işin ta kendisi. Fark: UiPath kurulumu 6 hafta ve
yüz binlerce dolar; bu yığın bir gün. Türkiye'de bankalar, sigortalar ve
lojistik şirketleri hâlâ RPA lisansına milyonlar ödüyor.

**Neden 1 numara değil:** Microsoft `skill-recorder`'ı tam olarak bunun için
yayınladı ve bu pazara doğrudan giriyor. Ayrıca kurumsal satış döngüsü uzun,
tek kişilik ekibi öldürür. Ekiplisen ve kurumsal satış ağın varsa bu daha büyük.

---

## 3. Sessiz Sleeper: `agent-vision-toolkit`

359 yıldız, kimse konuşmuyor, ama yaptığı şey şu: **metin-only modellere görme
yetisi veriyor.** Yani pahalı multimodal API yerine ucuz/yerel bir modelle
ekran okuyabiliyorsun.

Bu kendi başına bir iş değil — ama yukarıdaki iki fikrin de **birim maliyetini
çarpan bir kaldıraç.** Marj burada kazanılıyor. Kullan, satma.

---

## Karar

Tek başınaysan veya 2–3 kişilik ekipsen: **1 numara.**
Somut acı, ölçülebilir sonuç, kısa satış döngüsü, ilk aydan nakit,
kimsenin olmadığı bir pazar, ve müşterinin kazandığı paradan pay alan bir model.

Ölçüt basit: 30 günün sonunda teklif sapman ±%10'un altındaysa devam et.
Değilse durdur.
