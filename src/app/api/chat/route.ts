import { brainPathologies } from '@/data/brain-pathologies';
import { spinePathologies } from '@/data/spine-pathologies';
import { Pathology } from '@/types';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Helper to simulate delay for "typing" effect
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper to clean text for search
const normalize = (text: string) => text.toLowerCase().replace(/['",.]/g, '');

// Helper to safely search findings
const searchFindings = (findings: any, query: string): boolean => {
    if (!findings) return false;
    // Iterate over modality keys (ct, mri, etc.)
    return Object.values(findings).some((modalityFindings: any) => {
        if (!modalityFindings) return false;
        // Iterate over finding keys (t1, t2, etc.) or just check values if it's a flat object
        return Object.values(modalityFindings).some((val: any) =>
            typeof val === 'string' && normalize(val).includes(query)
        );
    });
};

export async function POST(req: Request) {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;
    const query = normalize(lastMessage);

    // 1. SEARCH LOGIC
    let foundPathology: Pathology | undefined;
    let category = '';

    // Search Brain
    if (!foundPathology) {
        foundPathology = brainPathologies.find(p =>
            normalize(p.name).includes(query) ||
            searchFindings(p.findings, query)
        );
        if (foundPathology) category = 'Beyin';
    }

    // Search Spine
    if (!foundPathology) {
        foundPathology = spinePathologies.find(p =>
            normalize(p.name).includes(query) ||
            normalize(p.id).includes(query)
        );
        if (foundPathology) category = 'Omurga';
    }

    // 2. GENERATE RESPONSE
    let responseText = "";

    if (foundPathology) {
        responseText = `## 🧠 ${foundPathology.name} (${category})\n\n`;
        // Use name as diagnosis fallback since diagnosis field is missing in type
        responseText += `**Tanı:** ${foundPathology.name}\n\n`;

        // Format findings significantly better
        if (foundPathology.findings) {
            responseText += `**Bulgular:**\n`;
            // Extract relevant findings based on available keys
            const f = foundPathology.findings as any;
            if (f.mri) {
                if (f.mri.t1) responseText += `- **MRI T1:** ${f.mri.t1}\n`;
                if (f.mri.t2) responseText += `- **MRI T2:** ${f.mri.t2}\n`;
                if (f.mri.t2_flair) responseText += `- **MRI FLAIR:** ${f.mri.t2_flair}\n`;
                if (f.mri.dwi) responseText += `- **MRI DWI:** ${f.mri.dwi}\n`;
                if (f.mri.t1_c) responseText += `- **MRI T1+C:** ${f.mri.t1_c}\n`;
            }
            if (f.ct && f.ct.non_contrast) {
                responseText += `- **BT:** ${f.ct.non_contrast}\n`;
            }
        }

        if (foundPathology.keyPoints && foundPathology.keyPoints.length > 0) {
            responseText += `\n**💡 Önemli Noktalar:**\n`;
            foundPathology.keyPoints.forEach(kp => responseText += `- ${kp}\n`);
        }

        responseText += `\n\n*(Bot: Çevrimdışı modda yerel veritabanından getirildi.)*`;

    } else {
        // Fallback for greetings or unknown queries
        if (query.includes('merhaba') || query.includes('selam')) {
            responseText = "Merhaba! Ben RadAssist Çevrimdışı Asistanıyım. 👋\n\nİnternet bağlantısı veya API anahtarı olmadan yerel veritabanındaki patolojileri senin için bulabilirim. Bana bir hastalık adı sormayı dene. (Örn: 'Glioblastom' veya 'Disk Hernisi')";
        } else {
            responseText = `Üzgünüm, yerel veritabanımda **"${lastMessage}"** ile ilgili bir kayıt bulamadım. 😔\n\nÇevrimdışı modda sadece sistemde kayıtlı olan Beyin ve Omurga patolojilerini arayabilirim. Lütfen geçerli bir patoloji adı yazmayı dene.`;
        }
    }

    // 3. STREAM RESPONSE (Simulated)
    const encoder = new TextEncoder();
    const customStream = new ReadableStream({
        async start(controller) {
            // Split into chunks to simulate typing (word by word)
            const chunks = responseText.split(/(?=[ ,.\n])/g);

            for (const chunk of chunks) {
                // Random typing speed simulation (10ms - 50ms)
                await delay(Math.random() * 40 + 10);
                controller.enqueue(encoder.encode(chunk));
            }
            controller.close();
        },
    });

    return new Response(customStream, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
