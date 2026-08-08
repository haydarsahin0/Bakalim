# Bakalım — GitHub Trend Analizi & İş Fikri (8 Ağustos 2026)

Son 2 günün / son haftanın en çok yıldız alan GitHub projeleri taranarak çıkarılan
pazar sinyalleri ve bunlardan türetilen somut bir iş fikri.

---

## 1. Ham Veri

### Günlük trend (8 Ağustos 2026)

| Repo | Ne yapıyor | Bugün ⭐ | Toplam ⭐ |
|---|---|---|---|
| PrimeIntellect-ai/prime-agent | Kendini geliştiren RLM kodlama ajanı | +2.483 | 8.6k |
| mattpocock/skills | Mühendisler için agent skill seti | +1.354 | 209k |
| addyosmani/agent-skills | Production-grade agent skill'leri | +778 | 84k |
| google/skills | Google ürünleri için agent skill'leri | +481 | 16k |
| goauthentik/authentik | Kimlik doğrulama | +467 | 24k |
| denoland/celld | Self-hosted dağıtık Durable Objects | +432 | 2.5k |

### Haftalık trend

| Repo | Ne yapıyor | Bu hafta ⭐ |
|---|---|---|
| zhaoxuya520/reverse-skill | Tersine mühendislik / pentest skill router | +10.400 |
| TencentCloud/TencentDB-Agent-Memory | Ajanlar için takım seviyesi hafıza merkezi | +7.501 |
| lyogavin/airllm | 70B modeli tek 4GB GPU'da çalıştırma | +5.521 |
| virgiliojr94/book-to-skill | Teknik kitap PDF'ini skill'e çeviriyor | +3.957 |
| esengine/DeepSeek-Reasonix | Terminal içi DeepSeek kodlama ajanı | +4.739 |

### Son 10 günde açılmış, en hızlı yıldızlanan yeni repolar

| Repo | Ne yapıyor | ⭐ | Açılış |
|---|---|---|---|
| yc-software/qm | Çok oyunculu (multiplayer) agent harness | 12.5k | 29 Tem |
| firecrawl/anydoc | Rust ile her formatı temiz Markdown'a çeviriyor | 12.0k | 3 Ağu |
| MoonshotAI/Kimi-K3 | 2.8T parametreli açık frontier model | 8.2k | 27 Tem |
| trycompai/crm | "Agentic-first" açık kaynak CRM | 7.7k | 31 Tem |
| FareedKhan-dev/kimi-k3-in-c | K3'ü 8.24 GB RAM'de saf C99 ile CPU'da çalıştırma | 3.7k | 1 Ağu |
| microsoft/skill-recorder | Ekran kaydından otomatik skill üretimi | 2.5k | 29 Tem |
| genspark-ai/genoffice | AI-native masaüstü ofis paketi | 2.2k | 31 Tem |
| sqliteai/waste | K3'ü NVMe'den stream ederek RAM üstünde çalıştırma | 1.9k | 28 Tem |
| onetoken-oss/K3Flight | K3'ü ~55GB RAM ile CPU'da tek dosya sunucu | 784 | 30 Tem |
| talivia-group/talivia | Self-hosted gelir odaklı analytics | 1.3k | 29 Tem |

---

## 2. Üç Ana Dalga

**A) Agent Skills bir paket ekosistemine dönüştü.**
obra/superpowers 269k, mattpocock/skills 210k, anthropics/skills 167k,
sickn33/agentic-awesome-skills 2.005 skill'lik katalog. Dikey paketler para
kazandırmaya başladı: scientific-agent-skills 170.000 bilim insanı,
marketingskills 43k ⭐, obsidian-skills 44k ⭐. Bu, npm'in 2010'daki hâli.

**B) Frontier model artık GPU'suz, yerelde çalışıyor.**
2.8 trilyon parametreli Kimi K3 (104B aktif, 16/896 MoE, 1M context, çok modlu),
tek CPU'da 8–55 GB RAM ile çalışıyor. `waste` uzman ağırlıkları NVMe'den
stream ediyor. airllm 70B'yi 4GB GPU'ya sığdırıyor. Yani: veri hiç dışarı
çıkmadan, bulut faturası olmadan, on binlerce dolarlık GPU olmadan frontier
kalitede AI.

**C) Yazılım artık birincil kullanıcısı insan değil ajan olacak şekilde yazılıyor.**
trycompai/crm ("agentic-first CRM"), genoffice, qm (multiplayer agent harness),
TencentDB-Agent-Memory.

---

## 3. Elenen Fikirler (ve neden)

| Fikir | Neden hayır |
|---|---|
| Skill güvenlik tarayıcısı | NVIDIA/SkillSpector 14k ⭐, Snyk ToxicSkills araştırması, HiddenLayer, Orca zaten burada. Ücretsiz komoditeleşiyor. |
| Genel skill marketplace / registry | ClawHub + Anthropic + GitHub + 2.000'lik açık kataloglar var. Ağ etkisi zaten kapandı. |
| Bir başka kodlama ajanı | prime-agent, Reasonix, qm, sol-advisor... haftada 3 tane çıkıyor, hepsi ücretsiz. |
| Genel amaçlı İngilizce skill paketi | Ücretsiz, 200k ⭐'lı repolarla rekabet, monetizasyon yok. |

---

## 4. Önerilen İş: "Gece Çalışan Kasa" — Veri Dışarı Çıkmayan Yerel AI İş İstasyonu

### Tek cümle
KVKK/GDPR nedeniyle verisini buluta veremeyen Türk hukuk büroları, mali
müşavirler, hastaneler, sigorta ve savunma sanayii tedarikçileri için;
internete hiç çıkmayan, sektöre özel skill paketleriyle gelen, toplu belge
işini gece boyunca yapan yerel AI kutusu.

### Neden şimdi
- **Teknoloji yeni yetişti:** K3/airllm sınıfı işler GPU olmadan çalışıyor.
  6 ay önce bu kutu 40.000 $ GPU istiyordu, bugün 3.000–6.000 $'lık
  CPU + 64–128 GB RAM + 2 TB NVMe yeterli.
- **Rakiplerin teşviki ters:** NVIDIA, OpenAI, hyperscaler'lar tam olarak
  bunun satılmasını istemiyor. Yerel entegratör boşluğu açık.
- **Regülasyon rüzgârı:** KVKK + GDPR + EU AI Act. "Veri binadan çıkmıyor"
  cümlesi bu müşteri kitlesinde tek başına satış argümanı.
- **Yerel avantaj:** Türkçe mevzuat, Türkçe destek, yerinde kurulum —
  global bir SaaS'ın kopyalayamayacağı tek şey bu.

### Kritik teknik gerçek (fikrin kalbi)
`waste` ile Kimi K3, 64 GB MacBook'ta **~0,6 token/sn** üretiyor. Bu bir
sohbet ürünü için kullanılamaz. Ama **asenkron toplu iş için fazlasıyla
yeterli** — ve zaten en hassas veri tam olarak orada:

- 200 sayfalık sözleşme setinin gece boyunca risk taraması
- 10 yıllık arşivin OCR + sınıflandırma + özetleme
- Fatura/beyanname tutarlılık kontrolü
- Hasta dosyası anonimleştirme ve kodlama
- İhale şartnamesi ↔ teklif uyum kontrolü

Ürünün konumlandırması bu yüzden "yerel ChatGPT" değil,
**"gece çalışan, sabah rapor bırakan AI mesai arkadaşı."** Rakiplerin
gözden kaçırdığı niş tam olarak burası: latency umurunda olmayan,
gizliliği pazarlık dışı olan iş yükleri.

Anlık cevap gereken hafif işler için aynı kutuda Kimi-Linear /
MiniMax-H3 sınıfı küçük model (~10+ tok/sn) ikinci vites olarak çalışır.

### Teknik yığın (hepsi hazır, hepsi trendde)
| Katman | Kullanılacak repo |
|---|---|
| Ağır model motoru | `sqliteai/waste` (Apache-2.0) veya `onetoken-oss/K3Flight` |
| Hafif/anlık model | Kimi-Linear, `MiniMax-AI/MiniMax-H3` |
| Belge → Markdown | `firecrawl/anydoc` (Rust, PDF/DOCX/XLSX/EPUB) |
| Ajan iskeleti + iş kuyruğu | `yc-software/qm` veya kendi ince katmanın |
| Dikey uzmanlık | Kendi yazacağın Türkçe skill paketleri |
| Ofis çıktısı | `genspark-ai/genoffice` yaklaşımı (DOCX/XLSX üretimi) |
| Güvenlik kapısı | `NVIDIA/SkillSpector` (ücretsiz, entegre et — yazma) |

⚠️ **Lisans kontrolü şart:** Kimi K3 kendi "Kimi K3 License"ı ile geliyor.
Ticari kullanım şartları satıştan **önce** avukatla okunmalı. `waste` ve
`anydoc` permissive (Apache-2.0 / açık), sorun yok. Gerekirse ağır model
Qwen/DeepSeek/Llama sınıfı Apache-2.0 bir modelle değiştirilebilir —
mimari aynı kalır.

### İş modeli
| Kalem | Fiyat | Not |
|---|---|---|
| Kutu + kurulum (tek seferlik) | 250.000–500.000 ₺ | Donanım maliyeti ~120–200k ₺, kalanı entegrasyon |
| Yıllık bakım + skill güncellemesi | Kutu bedelinin %20–25'i | Asıl gelir burada |
| Sektörel skill paketi (aylık) | 15.000–40.000 ₺ | Mevzuat değiştikçe güncelleniyor = bırakılamaz |
| Özel skill geliştirme | Günlük danışmanlık | Yüksek marjlı, ilk gelir kaynağı |

Nakit akışı ilk günden pozitif — SaaS gibi 18 ay yakıt yakmıyorsun.

### Neden savunulabilir
Kod moat değil (hepsi açık kaynak). Moat şunlar:
1. Sektörel skill kütüphanesi — her müşteride derinleşiyor
2. Türkçe mevzuat bilgisi ve güncel tutma yükümlülüğü
3. Yerinde destek + referans müşteri (bu sektörlerde satış referansla olur)
4. Donanım/kurulum tedarik zinciri

### İlk 30 gün (MVP)
1. **Gün 1–3:** Tek bir dikey seç. Öneri: **hukuk (sözleşme incelemesi)** —
   acı en net, ödeme gücü var, veri hassasiyeti tartışmasız.
2. **Gün 4–10:** Kendi makinende `anydoc` + `waste`/K3Flight ile boru hattı
   kur: PDF sözleşme klasörü → gece işlem → sabah risk raporu (DOCX).
3. **Gün 11–20:** 3 tanıdık avukatla gerçek (anonimleştirilmiş) sözleşme
   üzerinde çalıştır. Ölçülecek tek şey: **avukatın kaç saatini kurtardı.**
4. **Gün 21–30:** Bu 3 kişiye pilot teklifi götür: ilk kutu maliyetine,
   karşılığında referans + 6 ay geri bildirim. 1 tanesi evet derse iş var.

### Doğrulama sinyalleri (bunlar olmazsa vazgeç)
- ✅ İş var: Avukat "bunu bulutta kullanır mıydın?" sorusuna "hayır" diyor
  **ve** gece işleyen rapor için para ödemeye razı.
- ❌ İş yok: Müşteri "ChatGPT'ye atıyorum zaten" diyorsa — gizlilik acısı
  yeterince gerçek değil demektir, o dikeyi bırak.
- ❌ İş yok: Kutu 200 sayfayı 8 saatte bitiremiyorsa — donanım bütçesini
  yükselt ya da model sınıfını küçült.

---

## 5. Yedek Fikirler

**B) Türkçe dikey skill paketleri (düşük sermaye, düşük risk)**
scientific-agent-skills 170k bilim insanına ulaştı, marketingskills 43k ⭐.
Türkçe mevzuat dikeyinde (e-fatura, KDV, SGK, KVKK, ihale mevzuatı) hiç kimse
yok. Tek başına iş değil, ama **yukarıdaki kutunun içeriği** ve pazara giriş
kancası. Ücretsiz yayınla, dikkat çek, kutuyu sat.

**C) "Agent-first" iç araçlar (orta risk)**
trycompai/crm ve genoffice, birincil kullanıcısı insan değil ajan olan
yazılımın geldiğini gösteriyor. Türkiye'de KOBİ ERP/ön muhasebe tarafında
ajan-uyumlu arayüz (MCP + skill) sunan yok. Ama bu alan fonlanmış
startup'larla dolu — A'ya göre çok daha rekabetçi.

---

## Kaynaklar

- [GitHub Trending](https://github.com/trending)
- [Snyk — ToxicSkills araştırması](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/)
- [Cloud Security Alliance — SKILL.md Agent Context Poisoning](https://labs.cloudsecurityalliance.org/research/briefing-csa-research-note-skill-md-agent-context-poisoning/)
- [HiddenLayer — Malicious Skills in Agentic AI](https://www.hiddenlayer.com/research/the-next-ai-supply-chain-risk-malicious-skills-in-agentic-ai)
- [Orca Security — AI Agent Skill Supply Chain](https://orca.security/resources/blog/ai-agent-skill-supply-chain-security/)
