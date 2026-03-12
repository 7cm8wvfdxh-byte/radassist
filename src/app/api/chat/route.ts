import { brainPathologies } from '@/data/brain-pathologies';
import { spinePathologies } from '@/data/spine-pathologies';
import { liverPathologies } from '@/data/liver-pathologies';
import { kidneyPathologies } from '@/data/kidney-pathologies';
import { lungPathologies } from '@/data/lung-pathologies';
import { breastPathologies } from '@/data/breast-pathologies';
import { mskPathologies } from '@/data/msk-pathologies';
import { gastroPathologies } from '@/data/gastro-pathologies';
import { gynecologyPathologies } from '@/data/gynecology-pathologies';
import { Pathology, ModalityFindings } from '@/types';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Helper to simulate delay for "typing" effect
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper to clean text for search
const normalize = (text: string) => text.toLowerCase().replace(/['",.]/g, '');

// Helper to safely search findings
const searchFindings = (findings: ModalityFindings | null | undefined, query: string): boolean => {
    if (!findings) return false;
    return Object.values(findings as Record<string, Record<string, unknown>>).some((modalityFindings: Record<string, unknown>) => {
        if (!modalityFindings) return false;
        return Object.values(modalityFindings).some((val: unknown) =>
            typeof val === 'string' && normalize(val).includes(query)
        );
    });
};

// Localized labels
const i18n = {
    tr: {
        labels: ['Beyin', 'Omurga', 'Karaciğer', 'Böbrek', 'Akciğer', 'Meme', 'Kas-İskelet', 'GIS', 'Jinekoloji'],
        mechanism: 'Mekanizma',
        etiology: 'Etiyoloji',
        imagingFindings: 'Görüntüleme Bulguları',
        mriFindings: 'MR Bulguları',
        ctFindings: 'BT Bulguları',
        usgFindings: 'USG Bulguları',
        mammoFindings: 'Mamografi Bulguları',
        xrayFindings: 'X-Ray Bulguları',
        petFindings: 'PET Bulguları',
        nonContrast: 'Kontrastsız',
        contrast: 'Kontrastlı',
        ctAngio: 'BT Anjiyo',
        boneWindow: 'Kemik Pencere',
        perfusion: 'Perfüzyon',
        spectroscopy: 'Spektroskopi',
        dynamicT1C: 'Dinamik T1+K',
        keyPoints: 'Önemli Noktalar',
        clinicalPearl: 'Klinik İpucu',
        goldStandard: 'Altın Standart',
        ddx: 'Ayırıcı Tanı',
        sourceNote: (cat: string) => `*(RadAsist: 9 organ veritabanından getirildi — ${cat} modülü)*`,
        greeting: 'Merhaba! Ben RadAsist Patoloji Arama Asistanıyım. 👋',
        greetingDesc: (count: number) => `**9 organ sistemi** ve **${count}+ patoloji** veritabanından bilgi sağlayabilirim:\n\n`,
        pathologyCount: 'patoloji',
        searchHint: 'Bir hastalık adı, bulgu veya tanı yazarak arama yapabilirsiniz.',
        searchExamples: 'Örnek: "Glioblastom", "HCC", "Pulmoner Emboli", "Disk Hernisi", "Rotator Cuff"',
        dbContent: 'RadAsist Veritabanı İçeriği',
        notFound: (q: string) => `Veritabanında **"${q}"** ile ilgili bir kayıt bulunamadı.`,
        notFoundHint: (count: number) => `${count}+ patoloji arasından arama yapabilirsiniz. Lütfen hastalık adı veya bulgu yazarak tekrar deneyin.`,
        exampleQueries: 'Örnek sorgular',
        examples: '- Glioblastom\n- Hepatosellüler karsinom\n- Pulmoner emboli\n- Menisküs yırtığı\n- Disk hernisi\n- Meme kanseri\n- Endometriozis\n- Apandisit',
        invalidFormat: 'Geçersiz istek formatı.',
        emptyMessages: 'Mesaj listesi boş veya geçersiz.',
        emptyContent: 'Mesaj içeriği boş.',
        greetingKeywords: ['merhaba', 'selam'],
        listKeywords: ['listele', 'hangi', 'neler var'],
    },
    en: {
        labels: ['Brain', 'Spine', 'Liver', 'Kidney', 'Lung', 'Breast', 'MSK', 'GI', 'Gynecology'],
        mechanism: 'Mechanism',
        etiology: 'Etiology',
        imagingFindings: 'Imaging Findings',
        mriFindings: 'MRI Findings',
        ctFindings: 'CT Findings',
        usgFindings: 'US Findings',
        mammoFindings: 'Mammography Findings',
        xrayFindings: 'X-Ray Findings',
        petFindings: 'PET Findings',
        nonContrast: 'Non-contrast',
        contrast: 'Contrast',
        ctAngio: 'CT Angiography',
        boneWindow: 'Bone Window',
        perfusion: 'Perfusion',
        spectroscopy: 'Spectroscopy',
        dynamicT1C: 'Dynamic T1+C',
        keyPoints: 'Key Points',
        clinicalPearl: 'Clinical Pearl',
        goldStandard: 'Gold Standard',
        ddx: 'Differential Diagnosis',
        sourceNote: (cat: string) => `*(RadAsist: Retrieved from 9 organ databases — ${cat} module)*`,
        greeting: 'Hello! I\'m the RadAsist Pathology Search Assistant. 👋',
        greetingDesc: (count: number) => `I can provide information from **9 organ systems** and **${count}+ pathologies**:\n\n`,
        pathologyCount: 'pathologies',
        searchHint: 'Search by typing a disease name, finding, or diagnosis.',
        searchExamples: 'Examples: "Glioblastoma", "HCC", "Pulmonary Embolism", "Disc Herniation", "Rotator Cuff"',
        dbContent: 'RadAsist Database Contents',
        notFound: (q: string) => `No results found for **"${q}"** in the database.`,
        notFoundHint: (count: number) => `You can search among ${count}+ pathologies. Please try again with a disease name or finding.`,
        exampleQueries: 'Example queries',
        examples: '- Glioblastoma\n- Hepatocellular carcinoma\n- Pulmonary embolism\n- Meniscal tear\n- Disc herniation\n- Breast cancer\n- Endometriosis\n- Appendicitis',
        invalidFormat: 'Invalid request format.',
        emptyMessages: 'Message list is empty or invalid.',
        emptyContent: 'Message content is empty.',
        greetingKeywords: ['hello', 'hi'],
        listKeywords: ['list', 'which', 'what'],
    },
};

// All organ databases
const ALL_DATABASES_RAW: { data: Pathology[]; icon: string }[] = [
    { data: brainPathologies, icon: '🧠' },
    { data: spinePathologies, icon: '🦴' },
    { data: liverPathologies, icon: '🟤' },
    { data: kidneyPathologies, icon: '🫘' },
    { data: lungPathologies, icon: '🫁' },
    { data: breastPathologies, icon: '🩺' },
    { data: mskPathologies, icon: '💪' },
    { data: gastroPathologies, icon: '🍽️' },
    { data: gynecologyPathologies, icon: '♀️' },
];

function getLocalizedDatabases(lang: 'tr' | 'en') {
    const labels = i18n[lang].labels;
    return ALL_DATABASES_RAW.map((db, idx) => ({
        ...db,
        label: labels[idx],
    }));
}

export async function POST(req: Request) {
    // Input validation
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return new Response(
            JSON.stringify({ error: i18n.tr.invalidFormat }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const { messages, language: reqLang } = body as {
        messages?: Array<{ role: string; content: string }>;
        language?: string;
    };
    const lang: 'tr' | 'en' = reqLang === 'en' ? 'en' : 'tr';
    const t = i18n[lang];
    const ALL_DATABASES = getLocalizedDatabases(lang);

    if (!Array.isArray(messages) || messages.length === 0) {
        return new Response(
            JSON.stringify({ error: t.emptyMessages }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const lastMessage = messages[messages.length - 1]?.content;
    if (typeof lastMessage !== 'string' || !lastMessage.trim()) {
        return new Response(
            JSON.stringify({ error: t.emptyContent }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    // Limit query length to prevent abuse
    const trimmedMessage = lastMessage.trim().slice(0, 500);
    const query = normalize(trimmedMessage);

    // 1. SEARCH ALL ORGAN DATABASES
    let foundPathology: Pathology | undefined;
    let category = '';
    let icon = '';

    for (const db of ALL_DATABASES) {
        if (foundPathology) break;
        foundPathology = db.data.find(p =>
            normalize(p.name).includes(query) ||
            normalize(p.id).includes(query.replace(/\s+/g, '_')) ||
            searchFindings(p.findings, query) ||
            (p.keyPoints && p.keyPoints.some(kp => normalize(kp).includes(query))) ||
            (p.differentialDiagnosis && p.differentialDiagnosis.some(dd => normalize(dd).includes(query)))
        );
        if (foundPathology) {
            category = db.label;
            icon = db.icon;
        }
    }

    // 2. If not found by exact match, try fuzzy search (partial word matching)
    if (!foundPathology) {
        const queryWords = query.split(/\s+/).filter(w => w.length > 2);
        for (const db of ALL_DATABASES) {
            if (foundPathology) break;
            foundPathology = db.data.find(p => {
                const searchTarget = normalize(p.name + ' ' + p.category + ' ' + (p.etiology || '') + ' ' + (p.mechanism || ''));
                return queryWords.every(word => searchTarget.includes(word));
            });
            if (foundPathology) {
                category = db.label;
                icon = db.icon;
            }
        }
    }

    // Helper for language-aware field access
    const isEn = lang === 'en';
    const getField = (tr: string | undefined, en: string | undefined) =>
        isEn ? (en || tr || '') : (tr || '');

    // 3. GENERATE RESPONSE
    let responseText = "";

    if (foundPathology) {
        const name = isEn ? (foundPathology.nameEn || foundPathology.name) : foundPathology.name;
        responseText = `## ${icon} ${name} (${category})\n\n`;

        // Mechanism
        const mechanism = getField(foundPathology.mechanism, foundPathology.mechanismEn);
        if (mechanism) {
            responseText += `**${t.mechanism}:** ${mechanism}\n\n`;
        }

        // Etiology
        const etiology = getField(foundPathology.etiology, foundPathology.etiologyEn);
        if (etiology) {
            responseText += `**${t.etiology}:** ${etiology}\n\n`;
        }

        // Format findings
        if (foundPathology.findings) {
            responseText += `**${t.imagingFindings}:**\n`;
            const f = foundPathology.findings as Record<string, Record<string, string | undefined>>;

            // MRI findings
            if (f.mri) {
                responseText += `\n*${t.mriFindings}:*\n`;
                if (f.mri.t1) responseText += `- **T1:** ${f.mri.t1}\n`;
                if (f.mri.t2) responseText += `- **T2:** ${f.mri.t2}\n`;
                if (f.mri.t2_flair) responseText += `- **FLAIR:** ${f.mri.t2_flair}\n`;
                if (f.mri.dwi) responseText += `- **DWI:** ${f.mri.dwi}\n`;
                if (f.mri.adc) responseText += `- **ADC:** ${f.mri.adc}\n`;
                if (f.mri.t1_c) responseText += `- **T1+C:** ${f.mri.t1_c}\n`;
                if (f.mri.swi) responseText += `- **SWI:** ${f.mri.swi}\n`;
                if (f.mri.stir) responseText += `- **STIR:** ${f.mri.stir}\n`;
                if (f.mri.perfusion) responseText += `- **${t.perfusion}:** ${f.mri.perfusion}\n`;
                if (f.mri.spectroscopy) responseText += `- **${t.spectroscopy}:** ${f.mri.spectroscopy}\n`;
                if (f.mri.mra) responseText += `- **MRA:** ${f.mri.mra}\n`;
                if (f.mri.t1_c_dynamic) responseText += `- **${t.dynamicT1C}:** ${f.mri.t1_c_dynamic}\n`;
            }

            // CT findings
            if (f.ct) {
                responseText += `\n*${t.ctFindings}:*\n`;
                if (f.ct.non_contrast) responseText += `- **${t.nonContrast}:** ${f.ct.non_contrast}\n`;
                if (f.ct.contrast) responseText += `- **${t.contrast}:** ${f.ct.contrast}\n`;
                if (f.ct.cta) responseText += `- **${t.ctAngio}:** ${f.ct.cta}\n`;
                if (f.ct.bone_window) responseText += `- **${t.boneWindow}:** ${f.ct.bone_window}\n`;
            }

            // USG findings
            if (f.ultrasound || f.usg) {
                const usg = f.ultrasound || f.usg;
                responseText += `\n*${t.usgFindings}:*\n`;
                if (usg?.description) responseText += `- ${usg.description}\n`;
                if ((usg as Record<string, string>)?.doppler) responseText += `- **Doppler:** ${(usg as Record<string, string>).doppler}\n`;
            }

            // Mammography
            if (f.mammography) {
                responseText += `\n*${t.mammoFindings}:*\n`;
                if (f.mammography.description) responseText += `- ${f.mammography.description}\n`;
                if (f.mammography.cc_view) responseText += `- **CC:** ${f.mammography.cc_view}\n`;
                if (f.mammography.mlo_view) responseText += `- **MLO:** ${f.mammography.mlo_view}\n`;
            }

            // X-Ray
            if (f.xray) {
                responseText += `\n*${t.xrayFindings}:*\n`;
                if (f.xray.description) responseText += `- ${f.xray.description}\n`;
            }

            // PET
            if (f.pet) {
                responseText += `\n*${t.petFindings}:*\n`;
                if (f.pet.description) responseText += `- ${f.pet.description}\n`;
                if (f.pet.suv_max) responseText += `- **SUV Max:** ${f.pet.suv_max}\n`;
            }
        }

        // Key Points
        const keyPoints = isEn ? (foundPathology.keyPointsEn || foundPathology.keyPoints) : foundPathology.keyPoints;
        if (keyPoints && keyPoints.length > 0) {
            responseText += `\n**${t.keyPoints}:**\n`;
            keyPoints.forEach(kp => responseText += `- ${kp}\n`);
        }

        // Clinical Pearl
        const clinicalPearl = getField(foundPathology.clinicalPearl, foundPathology.clinicalPearlEn);
        if (clinicalPearl) {
            responseText += `\n**${t.clinicalPearl}:** ${clinicalPearl}\n`;
        }

        // Gold Standard
        const goldStandard = getField(foundPathology.goldStandard, foundPathology.goldStandardEn);
        if (goldStandard) {
            responseText += `\n**${t.goldStandard}:** ${goldStandard}\n`;
        }

        // Differential Diagnosis
        if (foundPathology.differentialDiagnosis && foundPathology.differentialDiagnosis.length > 0) {
            responseText += `\n**${t.ddx}:**\n`;
            foundPathology.differentialDiagnosis.forEach(dd => responseText += `- ${dd}\n`);
        }

        responseText += `\n\n${t.sourceNote(category)}`;

    } else {
        // List all available pathologies count
        const totalCount = ALL_DATABASES.reduce((sum, db) => sum + db.data.length, 0);

        const allGreetings = [...i18n.tr.greetingKeywords, ...i18n.en.greetingKeywords];
        const allListKeywords = [...i18n.tr.listKeywords, ...i18n.en.listKeywords];

        if (allGreetings.some(kw => query.includes(kw))) {
            responseText = `${t.greeting}\n\n`;
            responseText += t.greetingDesc(totalCount);
            ALL_DATABASES.forEach(db => {
                responseText += `${db.icon} **${db.label}** — ${db.data.length} ${t.pathologyCount}\n`;
            });
            responseText += `\n${t.searchHint}\n`;
            responseText += t.searchExamples;
        } else if (allListKeywords.some(kw => query.includes(kw))) {
            responseText = `**${t.dbContent}:**\n\n`;
            ALL_DATABASES.forEach(db => {
                responseText += `${db.icon} **${db.label}:**\n`;
                db.data.forEach(p => {
                    const name = isEn ? (p.nameEn || p.name) : p.name;
                    responseText += `  - ${name}\n`;
                });
                responseText += `\n`;
            });
        } else {
            responseText = `${t.notFound(trimmedMessage)}\n\n`;
            responseText += `${t.notFoundHint(totalCount)}\n\n`;
            responseText += `**${t.exampleQueries}:**\n`;
            responseText += t.examples;
        }
    }

    // 4. STREAM RESPONSE
    const encoder = new TextEncoder();
    const customStream = new ReadableStream({
        async start(controller) {
            const chunks = responseText.split(/(?=[ ,.\n])/g);
            for (const chunk of chunks) {
                await delay(Math.random() * 30 + 8);
                controller.enqueue(encoder.encode(chunk));
            }
            controller.close();
        },
    });

    return new Response(customStream, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
