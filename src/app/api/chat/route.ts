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

// All organ databases with labels
const ALL_DATABASES: { data: Pathology[]; label: string; icon: string }[] = [
    { data: brainPathologies, label: 'Beyin', icon: '🧠' },
    { data: spinePathologies, label: 'Omurga', icon: '🦴' },
    { data: liverPathologies, label: 'Karaciğer', icon: '🟤' },
    { data: kidneyPathologies, label: 'Böbrek', icon: '🫘' },
    { data: lungPathologies, label: 'Akciğer', icon: '🫁' },
    { data: breastPathologies, label: 'Meme', icon: '🩺' },
    { data: mskPathologies, label: 'Kas-İskelet', icon: '💪' },
    { data: gastroPathologies, label: 'GIS', icon: '🍽️' },
    { data: gynecologyPathologies, label: 'Jinekoloji', icon: '♀️' },
];

export async function POST(req: Request) {
    // Input validation
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return new Response(
            JSON.stringify({ error: 'Geçersiz istek formatı.' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const { messages } = body as { messages?: Array<{ role: string; content: string }> };

    if (!Array.isArray(messages) || messages.length === 0) {
        return new Response(
            JSON.stringify({ error: 'Mesaj listesi boş veya geçersiz.' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const lastMessage = messages[messages.length - 1]?.content;
    if (typeof lastMessage !== 'string' || !lastMessage.trim()) {
        return new Response(
            JSON.stringify({ error: 'Mesaj içeriği boş.' }),
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

    // 3. GENERATE RESPONSE
    let responseText = "";

    if (foundPathology) {
        responseText = `## ${icon} ${foundPathology.name} (${category})\n\n`;

        // Mechanism
        if (foundPathology.mechanism) {
            responseText += `**Mekanizma:** ${foundPathology.mechanism}\n\n`;
        }

        // Etiology
        if (foundPathology.etiology) {
            responseText += `**Etiyoloji:** ${foundPathology.etiology}\n\n`;
        }

        // Format findings
        if (foundPathology.findings) {
            responseText += `**Görüntüleme Bulguları:**\n`;
            const f = foundPathology.findings as Record<string, Record<string, string | undefined>>;

            // MRI findings
            if (f.mri) {
                responseText += `\n*MR Bulguları:*\n`;
                if (f.mri.t1) responseText += `- **T1:** ${f.mri.t1}\n`;
                if (f.mri.t2) responseText += `- **T2:** ${f.mri.t2}\n`;
                if (f.mri.t2_flair) responseText += `- **FLAIR:** ${f.mri.t2_flair}\n`;
                if (f.mri.dwi) responseText += `- **DWI:** ${f.mri.dwi}\n`;
                if (f.mri.adc) responseText += `- **ADC:** ${f.mri.adc}\n`;
                if (f.mri.t1_c) responseText += `- **T1+K:** ${f.mri.t1_c}\n`;
                if (f.mri.swi) responseText += `- **SWI:** ${f.mri.swi}\n`;
                if (f.mri.stir) responseText += `- **STIR:** ${f.mri.stir}\n`;
                if (f.mri.perfusion) responseText += `- **Perfüzyon:** ${f.mri.perfusion}\n`;
                if (f.mri.spectroscopy) responseText += `- **Spektroskopi:** ${f.mri.spectroscopy}\n`;
                if (f.mri.mra) responseText += `- **MRA:** ${f.mri.mra}\n`;
                if (f.mri.t1_c_dynamic) responseText += `- **Dinamik T1+K:** ${f.mri.t1_c_dynamic}\n`;
            }

            // CT findings
            if (f.ct) {
                responseText += `\n*BT Bulguları:*\n`;
                if (f.ct.non_contrast) responseText += `- **Kontrastsız:** ${f.ct.non_contrast}\n`;
                if (f.ct.contrast) responseText += `- **Kontrastlı:** ${f.ct.contrast}\n`;
                if (f.ct.cta) responseText += `- **BT Anjiyo:** ${f.ct.cta}\n`;
                if (f.ct.bone_window) responseText += `- **Kemik Pencere:** ${f.ct.bone_window}\n`;
            }

            // USG findings
            if (f.ultrasound || f.usg) {
                const usg = f.ultrasound || f.usg;
                responseText += `\n*USG Bulguları:*\n`;
                if (usg?.description) responseText += `- ${usg.description}\n`;
                if ((usg as Record<string, string>)?.doppler) responseText += `- **Doppler:** ${(usg as Record<string, string>).doppler}\n`;
            }

            // Mammography
            if (f.mammography) {
                responseText += `\n*Mamografi Bulguları:*\n`;
                if (f.mammography.description) responseText += `- ${f.mammography.description}\n`;
                if (f.mammography.cc_view) responseText += `- **CC:** ${f.mammography.cc_view}\n`;
                if (f.mammography.mlo_view) responseText += `- **MLO:** ${f.mammography.mlo_view}\n`;
            }

            // X-Ray
            if (f.xray) {
                responseText += `\n*X-Ray Bulguları:*\n`;
                if (f.xray.description) responseText += `- ${f.xray.description}\n`;
            }

            // PET
            if (f.pet) {
                responseText += `\n*PET Bulguları:*\n`;
                if (f.pet.description) responseText += `- ${f.pet.description}\n`;
                if (f.pet.suv_max) responseText += `- **SUV Max:** ${f.pet.suv_max}\n`;
            }
        }

        // Key Points
        if (foundPathology.keyPoints && foundPathology.keyPoints.length > 0) {
            responseText += `\n**Önemli Noktalar:**\n`;
            foundPathology.keyPoints.forEach(kp => responseText += `- ${kp}\n`);
        }

        // Clinical Pearl
        if (foundPathology.clinicalPearl) {
            responseText += `\n**Klinik İpucu:** ${foundPathology.clinicalPearl}\n`;
        }

        // Gold Standard
        if (foundPathology.goldStandard) {
            responseText += `\n**Altın Standart:** ${foundPathology.goldStandard}\n`;
        }

        // Differential Diagnosis
        if (foundPathology.differentialDiagnosis && foundPathology.differentialDiagnosis.length > 0) {
            responseText += `\n**Ayırıcı Tanı:**\n`;
            foundPathology.differentialDiagnosis.forEach(dd => responseText += `- ${dd}\n`);
        }

        responseText += `\n\n*(RadAsist: 9 organ veritabanından getirildi — ${category} modülü)*`;

    } else {
        // List all available pathologies count
        const totalCount = ALL_DATABASES.reduce((sum, db) => sum + db.data.length, 0);

        if (query.includes('merhaba') || query.includes('selam') || query.includes('hello') || query.includes('hi')) {
            responseText = `Merhaba! Ben RadAsist Patoloji Arama Asistanıyım. 👋\n\n`;
            responseText += `**9 organ sistemi** ve **${totalCount}+ patoloji** veritabanından bilgi sağlayabilirim:\n\n`;
            ALL_DATABASES.forEach(db => {
                responseText += `${db.icon} **${db.label}** — ${db.data.length} patoloji\n`;
            });
            responseText += `\nBir hastalık adı, bulgu veya tanı yazarak arama yapabilirsiniz.\n`;
            responseText += `Örnek: "Glioblastom", "HCC", "Pulmoner Emboli", "Disk Hernisi", "Rotator Cuff"`;
        } else if (query.includes('listele') || query.includes('hangi') || query.includes('neler var')) {
            responseText = `**RadAsist Veritabanı İçeriği:**\n\n`;
            ALL_DATABASES.forEach(db => {
                responseText += `${db.icon} **${db.label}:**\n`;
                db.data.forEach(p => responseText += `  - ${p.name}\n`);
                responseText += `\n`;
            });
        } else {
            responseText = `Veritabanında **"${trimmedMessage}"** ile ilgili bir kayıt bulunamadı.\n\n`;
            responseText += `${totalCount}+ patoloji arasından arama yapabilirsiniz. Lütfen hastalık adı veya bulgu yazarak tekrar deneyin.\n\n`;
            responseText += `**Örnek sorgular:**\n`;
            responseText += `- Glioblastom\n- Hepatosellüler karsinom\n- Pulmoner emboli\n- Menisküs yırtığı\n- Disk hernisi\n- Meme kanseri\n- Endometriozis\n- Apandisit`;
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
