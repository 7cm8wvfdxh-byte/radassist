import { describe, it, expect } from 'vitest';
import { cn } from '../utils';

describe('cn (className merge utility)', () => {
    it('tek bir sınıfı döndürmeli', () => {
        expect(cn('text-red-500')).toBe('text-red-500');
    });

    it('birden fazla sınıfı birleştirmeli', () => {
        expect(cn('text-red-500', 'bg-blue-500')).toBe('text-red-500 bg-blue-500');
    });

    it('koşullu sınıfları desteklemeli', () => {
        expect(cn('base', false && 'hidden', true && 'visible')).toBe('base visible');
    });

    it('tailwind çakışmalarını çözmeli', () => {
        const result = cn('px-4', 'px-6');
        expect(result).toBe('px-6');
    });

    it('undefined/null değerleri göz ardı etmeli', () => {
        expect(cn('base', undefined, null, 'extra')).toBe('base extra');
    });

    it('boş çağrıda boş string döndürmeli', () => {
        expect(cn()).toBe('');
    });
});
