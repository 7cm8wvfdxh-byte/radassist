import { useState, useMemo } from 'react';
import { DISEASE_SIGNATURES } from '@/data/disease-signatures';
import { USG_FINDINGS, CT_FINDINGS, MRI_FINDINGS, FindingOption, Modality } from '@/data/lexicon';
import { ScoredPathology } from '@/types';

// Combine all findings for lookup
const ALL_FINDINGS = [...USG_FINDINGS, ...CT_FINDINGS, ...MRI_FINDINGS];
const FINDING_MAP = new Map<string, FindingOption>();
ALL_FINDINGS.forEach(f => FINDING_MAP.set(f.id, f));

export function useDiagnosticEngine(selectedFindingIds: string[], selectedOrgan: "Brain" | "Spine" | "Liver" | "Kidney" | "Lung") {
    const results = useMemo(() => {
        if (selectedFindingIds.length === 0) return [];

        // Filter rules by Organ
        const activeDiseases = DISEASE_SIGNATURES.filter(d => d.organ === selectedOrgan);

        const scoredPathologies: ScoredPathology[] = activeDiseases.map(disease => {
            let score = disease.baseProbability || 0;
            const matchedFindings: string[] = [];

            // Iterate over all modalities defined for this disease
            // We sum up scores from all modalities since user might have selected findings from mixed modalities
            const modalities = Object.keys(disease.signatures) as Modality[];

            modalities.forEach(mod => {
                const signature = disease.signatures[mod];
                if (!signature) return;

                // Check Strong Findings
                signature.strongFindings.forEach(fId => {
                    if (selectedFindingIds.includes(fId)) {
                        const findingDef = FINDING_MAP.get(fId);
                        const weight = findingDef?.weight || 5;
                        score += weight * 3;
                        if (!matchedFindings.includes(fId)) matchedFindings.push(fId);
                    }
                });

                // Check Weak Findings
                if (signature.weakFindings) {
                    signature.weakFindings.forEach(fId => {
                        if (selectedFindingIds.includes(fId)) {
                            const findingDef = FINDING_MAP.get(fId);
                            const weight = findingDef?.weight || 5;
                            score += weight * 1;
                            if (!matchedFindings.includes(fId)) matchedFindings.push(fId);
                        }
                    });
                }
            });

            // Determine Probability Label
            let probabilityLabel: "Yüksek Olasılık" | "Orta Olasılık" | "Düşük Olasılık" = "Düşük Olasılık";
            if (score > 50) probabilityLabel = "Yüksek Olasılık";
            else if (score > 20) probabilityLabel = "Orta Olasılık";

            return {
                pathologyId: disease.id,
                pathologyName: disease.name,
                score,
                matchedFindings,
                missingFindings: [], // Deprecated in this new logic or needs complex calculation per modality
                probabilityLabel
            };
        });

        return scoredPathologies
            .filter(p => p.score > 10 && p.matchedFindings.length > 0)
            .sort((a, b) => b.score - a.score);

    }, [selectedFindingIds, selectedOrgan]); // Re-run when findings or organ change

    return results;
}
