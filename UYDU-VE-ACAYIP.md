# Acayip Repolar — Uydu, Ajan Ekonomisi, Tahmin Piyasaları (8 Ağustos 2026)

GitHub'ın hiç bakmadığım köşeleri: yörünge, makineler arası ticaret, tahmin piyasaları.

---

# Ana Bulgu: Dünyanın tamamı, bedava, 5 günde bir güncelleniyor

Bu iş modelinin temeli tek bir gerçek:

> **Sentinel-2 verisi tamamen ücretsiz.** 10 metre çözünürlük, 5 günde bir tekrar
> geçiş, tüm dünya, 2015'ten bugüne kesintisiz arşiv. ESA Copernicus veriyor,
> AWS Open Data ve Microsoft Planetary Computer üzerinden bedava çekiliyor.
> Landsat aynı şekilde USGS'ten bedava. Sentinel-1 radar da dahil — bulut delip geçiyor.

Yani: **gezegenin tamamının, sürekli güncellenen, ücretsiz bir zaman serisi var**
ve neredeyse kimse ticari olarak kullanmıyor çünkü işlemek uzmanlık istiyordu.
2026'da o uzmanlık gereksinimi çöktü.

### Olgun ve bedava yığın

| Repo | ⭐ | Ne yapar | Lisans |
|---|---|---|---|
| **`ucam-eo/tessera`** | **689** | Cambridge'in **uydu zaman serisi foundation modeli** (CVPR26). Piksel seviyesi gömme üretiyor; az etiketli veriyle ekin sınıflama, kanopi yüksekliği, karbon muhasebesi | **Kod MIT, ağırlıklar CC0** |
| `wgcban/ChangeFormer` | 615 | İki tarih arası **değişim tespiti** (Transformer/Siamese) | açık |
| `torchgeo/torchgeo` | 4.138 | Coğrafi veri için hazır model, veri seti, örnekleyici | MIT |
| `sentinel-hub/sentinelhub-py` | 908 | Sentinel görüntüsü indirme/işleme | MIT |
| `awesome-spectral-indices` | 1.157 | Hazır spektral indeks kütüphanesi (NDVI, NDWI, NDBI...) | açık |
| `PolyX-Research/Awesome-Remote-Sensing-Agents` | 575 | Uzaktan algılama **ajanları** derlemesi (Şub 2026) — alan yeni ajanlaşıyor | — |

`tessera`'nın ağırlıklarının **CC0** olması önemli: kamu malı, ticari kullanım
tamamen serbest, atıf zorunluluğu bile yok. Cambridge petabaytlarca veriyi
sıkıştırıp bedavaya bırakmış.

---

# Fikir 1 — Arazi Geçmişi Raporu ⭐ En güçlü

### Çözdüğü dolandırıcılık
Türkiye'de "yatırımlık tarla/arsa" perakende satışı devasa ve alıcı kör.
İnsanlar hayatlarının birikimini görmedikleri bir parsele yatırıyor ve
düzenli olarak kandırılıyor:

- Tarla diye satılan **kayalık** arazi
- **Su basan** taşkın yatağı
- **Hiç ekilmemiş**, ekilemez toprak
- Yolu olmayan, ulaşılamayan parsel
- "Yanında imar geliyor" yalanı

### Uydu bunların hepsini görüyor — geriye dönük 10 yıl
```
Parsel no / koordinat gir
        ↓
Sentinel-2 arşivi çek (2015 → bugün, ~700 görüntü)
        ↓
NDVI zaman serisi   → Bu tarla hiç ekildi mi? Her yıl mı, hiç mi?
                       Yeşilleniyor mu, yoksa çıplak kaya mı?
NDWI                → Su var mı? Hangi aylarda su basıyor?
NDBI + değişim      → Çevrede inşaat başlamış mı? (imar sinyali gerçek mi)
Eğim/yükseklik      → Kuzey yamacı mı, kaç derece eğimli
        ↓
5 dakikada PDF rapor: 10 yıllık uydu şeridi + grafikler + net yargı
```

### Neden para basma makinesi
- **Ham madde bedava** — Sentinel-2, sonsuza kadar
- **Marjinal maliyet ~0** — birkaç kuruşluk hesaplama
- **Fiyat 300–500 ₺** — alıcı 500.000 ₺'lik karar veriyor, bu rakam yuvarlama hatası
- **Tam otomatik** — koordinat gir, rapor çıkar, insan dokunmuyor
- **Türkiye'de kimse yapmıyor**, ve global versiyonu da açık

### Abonelik versiyonu (Fikir 1b): Değişim alarmı
Aynı yığın, farklı ürün. `ChangeFormer` ile: **"şu poligonda bir şey değişirse
bana haber ver."**

Kime satılır:
- **Arazi sahibi** — tarlasına kaçak yapı dikilmiş mi, işgal var mı (gurbetçiler için altın)
- **Şantiye takibi** — müteahhit gerçekten ilerliyor mu
- **Maden/ocak sahası** — faaliyet var mı
- **Zeytinlik/orman** — kesim olmuş mu

Poligon başına aylık abonelik. Rapor satışı nakit getirir, alarm aboneliği yığar.

### Riskler
- **Parsel sınırı verisi.** TKGM/Parsel Sorgu verisine erişim gerekiyor.
  Koordinatla da çalışır ama parsel numarasıyla çalışması ürünü 10 kat kolaylaştırır.
  **İlk hafta bunu çöz** — çözülmezse ürün elle koordinat girmeye düşer.
- **10m çözünürlük sınırı.** Sentinel-2 ile bir binayı görürsün, bir çiti göremezsin.
  Küçük parsellerde (1 dönüm altı) hassasiyet düşük. Bunu açıkça söyle, abartma.
- **Bulut.** Optik görüntü bulutta kör. Sentinel-1 radar bunu telafi ediyor
  ama işlemesi daha zor. v1'de bulut maskeleme yeterli.
- **Hukuki dil.** "Bu arazi kötüdür" deme. "Uydu verisine göre son 10 yılda
  şu gözlendi" de. Yargıyı veriye bağla, sorumluluğu üstlenme.

### ⚠️ TESSERA hakkında dürüst uyarı
Foundation model cazip ama **donanımı ağır**: ön işlem için 128 GB RAM,
NVIDIA A30 GPU, 110×110 km alan ~10 saat, yıllık 100 km² başına 1 TB depolama.

**v1'de TESSERA'ya ihtiyacın yok.** NDVI/NDWI/NDBI zaman serisi düz matematik,
dizüstünde çalışır. TESSERA'yı v2'de, zor sınıflandırma (ekin türü tespiti,
kanopi yüksekliği) gerektiğinde devreye al — ve önce **önceden hesaplanmış
gömmelerin senin bölgeni kapsayıp kapsamadığını kontrol et.** Kapsıyorsa
pahalı kısmı atlarsın; kapsamıyorsa maliyet ciddi.

---

# Fikir 2 — Makinelere Satış: Ücretli MCP Sunucusu (acayip olan bu)

### Ortaya çıkan şey
Ajanlar birbirine **para ödemeye** başladı. Altyapı hazır:

| Repo | ⭐ | Ne yapar |
|---|---|---|
| `internet-court-skill` | **1.611** | Ajanlar arası ticaret için güven katmanı: doğal dil vekaletnameleri, ERC-7710 yetkilendirme, **x402 ödemeleri**, emanet (escrow), uyuşmazlık çözümü |
| `daydreamsai/lucid-agents` | 193 | "60 saniyede ödeme yapabilen ve satabilen ajan" — x402, AP2, A2A, ERC-8004 için hazır adaptörler |
| `codespar/mcp-dev-latam` | 267 | Latin Amerika ticareti için MCP sunucuları (Pix, NF-e, bankacılık) — MIT, npm'de |

### Fikir
Bir yeteneği veya veriyi **MCP sunucusu** olarak yayınla, her çağrıda x402 ile
**mikro ödeme** al. Müşterin insan değil, **başka ajanlar.**

Ne satılır: ajanların ihtiyacı olan ama kendilerinin yapamadığı şeyler —
gerçek zamanlı niş veri, doğrulama, özel hesaplama. Örneğin Fikir 1'in uydu
motorunu MCP olarak açarsın: bir ajan "şu koordinatın NDVI geçmişi" diye sorar,
çağrı başına 0,01 $ öder.

### Neden acayip ve neden dikkatli ol
Bu, insanlara pazarlama yapmadan gelir üreten bir kanal — reklam yok, SEO yok,
sosyal medya yok. Sadece bir uç nokta ve bir fiyat.

⚠️ **Ama hacim henüz yok.** Bu ekonomi 2026'da kuruluyor, işlem hacmi küçük.
Bunu **birincil gelir olarak planlama.** Fikir 1'i kur, motorunu MCP olarak da
aç, ajan ekonomisi büyürse hazır olursun. Bedava opsiyon, ana bahis değil.

---

# Fikir 3 — Tahmin Piyasası Arbitrajı (dürüst uyarıyla)

`realfishsam/prediction-market-arbitrage-bot` (172 ⭐, Oca 2026):
Polymarket ile Kalshi arasındaki fiyat farkını yakalayıp otomatik alıp satıyor.

**Neden listede:** Teorik olarak piyasa-nötr — aynı olayın iki borsadaki fiyat
farkından kazanıyorsun, olayın sonucundan değil.

**Neden en altta ve neden tavsiye etmiyorum:**
- Bu bir **iş değil, sermaye riski.** Ürün yok, müşteri yok, varlık birikmiyor.
- Arbitraj fırsatları saniyeler içinde kapanıyor — bu bir **gecikme yarışı** ve
  karşındakiler kurumsal altyapıya sahip.
- **Türkiye'den bu platformlara yasal erişim sorunlu.** Kumar mevzuatı ve
  5651 engelleri var. Girmeden önce hukuki durumu netleştir.
- Kaybedeceğin para gerçek para.

Bilgi olsun diye koyuyorum, plan olarak değil.

---

## Karşılaştırma

| # | Fikir | Ham madde | Marjinal maliyet | Gelir tipi | Risk |
|---|---|---|---|---|---|
| 1 | **Arazi raporu** | Sentinel-2, **bedava** | ~0 | Rapor başına 300–500 ₺ | Düşük |
| 1b | **Değişim alarmı** | Aynı | ~0 | Poligon başına abonelik | Düşük |
| 2 | Ücretli MCP | Fikir 1'in motoru | ~0 | Çağrı başına mikro ödeme | Hacim yok |
| 3 | Arbitraj botu | Sermaye | — | Alım-satım farkı | **Yüksek** |

**Öneri: 1 ve 1b.** Aynı yığın, iki ürün. Rapor satışı ilk günden nakit,
alarm aboneliği kalıcı gelir. Motor bir kez yazılıyor.

---

## İlk 30 gün

| Gün | İş | Ölçülecek tek şey |
|---|---|---|
| 1–5 | **Önce en büyük riski çöz:** parsel numarasından sınır poligonu alabiliyor musun? | Parsel verisine erişim var mı |
| 6–12 | Sentinel-2 arşivinden tek parsel için 10 yıllık NDVI/NDWI serisi çek, grafikle | Veri boru hattı çalışıyor mu |
| 13–20 | **Bildiğin 5 araziyi test et** — 2'si iyi, 2'si kötü, 1'i su basan olsun | **Rapor gerçeği söylüyor mu** |
| 21–30 | 10 emlakçı/arsa alıcısına raporu göster, 500 ₺ iste | **Ödeyen çıkıyor mu** |

### Durma kriterleri
- **Sonucunu bildiğin arazilerde rapor yanılıyorsa dur.** 13–20. gün testi
  bu işin tamamı. Kendi tarlanı, akrabanın tarlasını, su bastığını bildiğin
  yeri koy — sistem bunları bilmiyorsa kimse için bilmez.
- 10 kişiden hiçbiri 500 ₺ ödemiyorsa → fiyat değil, güven sorunu.
  Rapor yeterince net yargı vermiyor demektir.
- Parsel sınırı verisine erişemiyorsan → ürün elle koordinat girmeye düşer,
  bu da satılabilirliği ciddi düşürür. Buna göre karar ver.

---

## Kaynaklar
- [TESSERA (Cambridge, CVPR26)](https://github.com/ucam-eo/tessera) — MIT kod, CC0 ağırlıklar
- [ChangeFormer](https://github.com/wgcban/ChangeFormer)
- [TorchGeo](https://github.com/torchgeo/torchgeo)
- [Awesome Spectral Indices](https://github.com/awesome-spectral-indices/awesome-spectral-indices)
- [Awesome Remote Sensing Agents](https://github.com/PolyX-Research/Awesome-Remote-Sensing-Agents)
- [internet-court-skill](https://github.com/internet-court/internet-court-skill)
- [lucid-agents](https://github.com/daydreamsai/lucid-agents)
