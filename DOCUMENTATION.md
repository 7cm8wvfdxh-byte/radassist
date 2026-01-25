# RAD ASIST - PROJE DOKÜMANTASYONU

## 1. PROJE ÖZET

**RadAsist**, radyoloji asistanları için yapay zeka destekli bir eğitim ve tanı platformudur.

- **Hedef Kitle:** Radyoloji asistanları, tıp öğrencileri, pratisyen radyologlar
- **Dil:** Türkçe
- **Platform:** Web (PWA - Progressive Web App)

---

## 2. TEKNOLOJİ YIĞINI

| Kategori | Teknoloji | Versiyon |
|----------|-----------|----------|
| Framework | Next.js | 16.1.3 |
| UI Library | React | 19.2.3 |
| Dil | TypeScript | 5 |
| Styling | Tailwind CSS | 4 |
| Animasyon | Framer Motion | 12.29.0 |
| İkonlar | Lucide React | 0.562.0 |
| Backend | Supabase | 2.91.1 |
| AI | Google Gemini Flash | @ai-sdk/google 3.0.10 |
| Güvenlik | DOMPurify | 3.3.1 |

---

## 3. ORGAN MODÜLLERİ (9 Adet)

| # | Modül | Açıklama |
|---|-------|----------|
| 1 | Beyin (Brain) | Kranyal patolojiler |
| 2 | Omurga (Spine) | Spinal patolojiler |
| 3 | Karaciğer (Liver) | Hepatik lezyonlar |
| 4 | Böbrek (Kidney) | Renal patolojiler |
| 5 | Akciğer (Lung) | Pulmoner hastalıklar |
| 6 | Meme (Breast) | Mamografi bulguları |
| 7 | Kas-İskelet (MSK) | Muskuloskeletal radyoloji |
| 8 | Gastrointestinal (GI) | GI sistem patolojileri |
| 9 | Jinekoloji (Gynecology) | Jinekolojik görüntüleme |

---

## 4. ÖĞRENME MODLARI (8 Adet)

| Mod | Açıklama |
|-----|----------|
| **Grid View** | Kartlar halinde patolojileri görüntüle, flip animasyonu ile detay |
| **List View** | Liste formatında hızlı tarama, modal ile detay |
| **Quiz Mode** | Çoktan seçmeli sorularla bilgi testi, puan sistemi |
| **Case Study** | Adım adım vaka çözümü (Grand Rounds formatı) |
| **Tanı Sihirbazı** | Bulgu seçerek diferansiyel tanı listesi ve rapor taslağı |
| **AI Asistan** | Google Gemini ile sohbet, streaming yanıtlar |
| **Swipe Mode** | Tinder-benzeri kart öğrenme, sağa/sola kaydır |
| **Toolbox** | Radyoloji ölçümleri ve hesaplayıcılar |

---

## 5. SAYFA YAPISI

| Sayfa | Rota | Açıklama |
|-------|------|----------|
| Ana Sayfa | `/` | Tüm öğrenme modları ve patoloji tarama |
| Giriş | `/login` | Kullanıcı girişi |
| Kayıt | `/register` | Yeni üyelik oluşturma |
| RadRoom | `/community` | Topluluk forumu |
| Post Detay | `/community/[id]` | Gönderi detayı ve yorumlar |
| Duyurular | `/announcements` | Platform haberleri |
| Chat API | `/api/chat` | AI asistan endpoint |

---

## 6. DOSYA YAPISI

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Ana sayfa
│   ├── api/chat/route.ts        # AI chat endpoint
│   ├── login/page.tsx           # Giriş sayfası
│   ├── register/page.tsx        # Kayıt sayfası
│   ├── community/               # Forum sayfaları
│   └── announcements/           # Duyurular
│
├── components/                   # React bileşenleri
│   ├── auth/                    # Kimlik doğrulama
│   ├── community/               # Forum bileşenleri
│   ├── ui/                      # UI bileşenleri
│   ├── ai-assistant.tsx         # AI sohbet arayüzü
│   ├── pathology-card.tsx       # Patoloji kartı
│   ├── quiz-mode.tsx            # Quiz motoru
│   ├── case-study-mode.tsx      # Vaka çalışması
│   ├── diagnosis-wizard.tsx     # Tanı sihirbazı
│   ├── swipe-mode.tsx           # Swipe öğrenme
│   └── toolbox-mode.tsx         # Hesaplayıcılar
│
├── context/                      # React Context
│   ├── auth-context.tsx         # Kimlik doğrulama state
│   └── forum-context.tsx        # Forum state
│
├── hooks/                        # Custom hooks
│   └── use-diagnostic-engine.ts # Tanı motoru
│
├── lib/                          # Yardımcı fonksiyonlar
│   ├── supabase.ts              # Supabase client
│   ├── utils.ts                 # Utility fonksiyonları
│   └── search-utils.ts          # Akıllı arama
│
├── types/                        # TypeScript tipleri
│   └── index.ts                 # Tip tanımları
│
└── data/                         # Tıbbi veriler
    ├── brain-pathologies.ts     # Beyin patolojileri
    ├── spine-pathologies.ts     # Omurga patolojileri
    ├── liver-pathologies.ts     # Karaciğer patolojileri
    ├── kidney-pathologies.ts    # Böbrek patolojileri
    ├── lung-pathologies.ts      # Akciğer patolojileri
    ├── breast-pathologies.ts    # Meme patolojileri
    ├── msk-pathologies.ts       # MSK patolojileri
    ├── gastro-pathologies.ts    # GI patolojileri
    ├── gynecology-pathologies.ts# Jinekoloji patolojileri
    ├── case-studies.ts          # Klinik vakalar
    ├── lexicon.ts               # Bulgu sözlüğü
    ├── disease-signatures.ts    # Hastalık imzaları
    ├── diagnostic-engine.ts     # Tanı kuralları
    ├── report-templates.ts      # Rapor şablonları
    └── toolbox-data.ts          # Ölçüm verileri
```

---

## 7. VERİTABANI YAPISI (Supabase)

### Tablolar

#### profiles
| Kolon | Tip | Açıklama |
|-------|-----|----------|
| id | UUID | Primary key (auth.users FK) |
| name | TEXT | Kullanıcı adı |
| specialty | TEXT | Uzmanlık alanı |
| created_at | TIMESTAMPTZ | Oluşturulma tarihi |

#### posts
| Kolon | Tip | Açıklama |
|-------|-----|----------|
| id | UUID | Primary key |
| title | TEXT | Gönderi başlığı |
| content | TEXT | Gönderi içeriği |
| tags | TEXT[] | Etiketler |
| likes | INTEGER | Beğeni sayısı |
| view_count | INTEGER | Görüntülenme sayısı |
| author_id | UUID | Yazar (profiles FK) |
| created_at | TIMESTAMPTZ | Oluşturulma tarihi |

#### comments
| Kolon | Tip | Açıklama |
|-------|-----|----------|
| id | UUID | Primary key |
| post_id | UUID | Gönderi (posts FK) |
| content | TEXT | Yorum içeriği |
| author_id | UUID | Yazar (profiles FK) |
| created_at | TIMESTAMPTZ | Oluşturulma tarihi |

#### post_likes
| Kolon | Tip | Açıklama |
|-------|-----|----------|
| id | UUID | Primary key |
| post_id | UUID | Gönderi (posts FK) |
| user_id | UUID | Kullanıcı (profiles FK) |
| created_at | TIMESTAMPTZ | Oluşturulma tarihi |

---

## 8. ÖZELLİKLER

### Akıllı Arama
- Radyoloji eş anlamlıları sözlüğü
- "parlak" → "hiperintens, hiperdens" eşleştirmesi
- Tüm modüllerde simultane arama

### Favoriler
- LocalStorage'da kalıcı depolama
- Her patoloji favorilere eklenebilir
- Hızlı erişim butonu

### AI Asistan
- Google Gemini Flash modeli
- Streaming (gerçek zamanlı) yanıtlar
- Hızlı soru şablonları
- Markdown formatında çıktı

### Tanı Sihirbazı
- 70+ radyolojik bulgu
- Ağırlıklı scoring algoritması
- Otomatik rapor taslağı oluşturma
- Probability labels (Yüksek/Orta/Düşük)

### Hesaplayıcılar (Toolbox)
- Adrenal Washout (APW/RPW)
- Volüm hesaplama (0.52 formülü)
- NASCET stenoz hesaplama
- RECIST tedavi yanıtı değerlendirmesi
- 30+ standart ölçüm referansı

### PWA Özellikleri
- Ana ekrana eklenebilir
- Standalone mod (tam ekran)
- iOS uyumlu kurulum promptu
- Offline desteği (planlanıyor)

---

## 9. ENVIRONMENT DEĞİŞKENLERİ

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...

# Google AI (opsiyonel)
GOOGLE_GENERATIVE_AI_API_KEY=...
```

---

## 10. GELİŞTİRME KOMUTLARI

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm run start

# Kod kontrolü (ESLint)
npm run lint
```

---

## 11. VERİ MODELLERİ

### Pathology
```typescript
interface Pathology {
  id: string;
  name: string;
  organ?: string;
  category: string;
  findings: {
    ct?: { non_contrast, contrast, cta, ... };
    mri?: { t1, t2, t2_flair, dwi, adc, ... };
    usg?: { description, doppler };
    xray?: { description };
    pet?: { description, suv_max };
  };
  keyPoints: string[];
  differentialDiagnosis?: string[];
  goldStandard?: string;
  clinicalPearl?: string;
  gallery?: { url, caption, modality }[];
}
```

### Post (Forum)
```typescript
interface Post {
  id: string;
  title: string;
  content: string;
  tags: string[];
  likes: number;
  view_count: number;
  author_id: string;
  created_at: string;
  comments?: Comment[];
}
```

---

## 12. GÜVENLİK

- **DOMPurify:** XSS saldırılarına karşı HTML sanitizasyonu
- **Supabase RLS:** Row Level Security ile veri erişim kontrolü
- **Environment Variables:** Hassas bilgilerin güvenli saklanması
- **Input Validation:** Kullanıcı girişlerinin doğrulanması

---

## 13. PERFORMANS

- **Next.js Image:** Otomatik görüntü optimizasyonu
- **Lazy Loading:** Gerektiğinde yükleme
- **Memoization:** useMemo ile hesaplama optimizasyonu
- **Real-time Updates:** Supabase subscriptions

---

## 14. DEPLOYMENT

### Vercel (Önerilen)
1. GitHub repo'yu Vercel'e bağla
2. Environment variables'ları ekle
3. Deploy

### Self-hosted
```bash
npm run build
npm run start
```

---

## 15. LİSANS

Bu proje özel kullanım içindir.

---

*Dokümantasyon Son Güncelleme: Ocak 2026*
