export interface Announcement {
    id: string;
    title: string;
    type: 'congress' | 'seminar' | 'news' | 'update';
    date: string; // ISO string or simple date string
    content: string;
    location?: string;
    url?: string;
    imageUrl?: string;
}

export const announcements: Announcement[] = [
    {
        id: "1",
        title: "46. Ulusal Radyoloji Kongresi (TURKRAD 2026)",
        type: "congress",
        date: "2026-10-28",
        content: "Radyolojinin kalbi Antalya'da atıyor! Yapay zeka, girişimsel radyoloji ve yeni MR sekanslarının tartışılacağı yılın en büyük buluşması için kayıtlar başladı.",
        location: "Antalya, Türkiye",
        url: "https://turkrad.org.tr"
    },
    {
        id: "2",
        title: "RSNA 2026: The Future is Now",
        type: "congress",
        date: "2026-11-29",
        content: "Dünyanın en büyük radyoloji kongresi Chicago'da. Erken kayıt avantajları için son 1 hafta. Bu yılın ana teması: 'Human-AI Collaboration'.",
        location: "Chicago, IL, USA",
        url: "https://rsna.org"
    },
    {
        id: "3",
        title: "Webinar: Prostat MRI'da PI-RADS v2.2 Pratiği",
        type: "seminar",
        date: "2026-02-15",
        content: "Prof. Dr. Ahmet Yılmaz moderatörlüğünde, güncellenen PI-RADS kriterlerinin vaka bazlı değerlendirmesi. Zoom üzerinden ücretsiz katılım.",
        location: "Online (Zoom)",
        url: "#"
    },
    {
        id: "4",
        title: "RadAsist v2.0 Yayında!",
        type: "update",
        date: "2026-01-24",
        content: "Gastrointestinal, Jinekoloji modülleri ve herkesin beklediği 'RadRoom' forum özelliği eklendi. Hemen keşfedin!",
        location: "Versiyon Notları",
        url: "/walkthrough"
    },
    {
        id: "5",
        title: "Makale Özeti: COVID-19 Sonrası Akciğer Fibrozisi",
        type: "news",
        date: "2026-01-20",
        content: "Radiology dergisinde yayınlanan yeni çalışma, post-COVID fibrozisin 5 yıllık takibinde BT bulgularının evrimini inceliyor. Buzlu cam alanlarının %40 azaldığı saptandı.",
        location: "Literatür Kulübü",
        url: "#"
    }
];
