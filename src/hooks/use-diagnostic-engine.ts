import { useState, useMemo } from 'react';
import { DIAGNOSTIC_RULES } from '@/data/diagnostic-engine';
import { USG_FINDINGS, CT_FINDINGS, MRI_FINDINGS, FindingOption } from '@/data/lexicon';
import { ScoredPathology } from '@/types';

// Combine all findings for lookup
const ALL_FINDINGS = [...USG_FINDINGS, ...CT_FINDINGS, ...MRI_FINDINGS];
const FINDING_MAP = new Map<string, FindingOption>();
ALL_FINDINGS.forEach(f => FINDING_MAP.set(f.id, f));

export function useDiagnosticEngine(selectedFindingIds: string[], selectedOrgan: "Brain" | "Spine") {
    const results = useMemo(() => {
        if (selectedFindingIds.length === 0) return [];

        // Filter rules by Organ FIRST
        const activeRules = DIAGNOSTIC_RULES.filter(rule => rule.organ === selectedOrgan);

        const scoredPathologies: ScoredPathology[] = activeRules.map(rule => {
            let score = rule.baseProbability || 0;
            const matchedFindings: string[] = [];
            const missingFindings: string[] = [];

            // Check Strong Findings
            rule.strongFindings.forEach(fId => {
                if (selectedFindingIds.includes(fId)) {
                    const findingDef = FINDING_MAP.get(fId);
                    const weight = findingDef?.weight || 5;
                    score += weight * 3; // 3x multiplier for strong matches
                    matchedFindings.push(fId);
                } else {
                    missingFindings.push(fId);
                }
            });

            // Check Weak Findings
            if (rule.weakFindings) {
                rule.weakFindings.forEach(fId => {
                    if (selectedFindingIds.includes(fId)) {
                        const findingDef = FINDING_MAP.get(fId);
                        const weight = findingDef?.weight || 5;
                        score += weight * 1; // 1x multiplier for weak matches
                        matchedFindings.push(fId);
                    }
                });
            }

            // Determine Probability Label
            let probabilityLabel: "Yüksek Olasılık" | "Orta Olasılık" | "Düşük Olasılık" = "Düşük Olasılık";
            if (score > 50) probabilityLabel = "Yüksek Olasılık";
            else if (score > 20) probabilityLabel = "Orta Olasılık";

            return {
                pathologyId: rule.pathologyId,
                pathologyName: rule.pathologyName,
                score,
                matchedFindings,
                missingFindings,
                probabilityLabel
            };
        });

        // Filter out zero matching results? 
        // Or at least those with VERY low scores compared to top?
        // Let's filter those with score > 15 (Base probabilities start around 5-15)
        // And sort descending
        return scoredPathologies
            .filter(p => p.score > 10 && p.matchedFindings.length > 0) // Must match at least one finding
            .sort((a, b) => b.score - a.score);

    }, [selectedFindingIds]);

    return results;
}
