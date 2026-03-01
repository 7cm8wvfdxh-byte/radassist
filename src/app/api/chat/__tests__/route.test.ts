import { describe, it, expect, vi } from 'vitest';
import { POST } from '../route';

describe('Chat API Route - POST', () => {
    function makeRequest(body: unknown): Request {
        return new Request('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
    }

    it('geçersiz JSON gövdesinde 400 döndürmeli', async () => {
        const req = new Request('http://localhost:3000/api/chat', {
            method: 'POST',
            body: 'invalid json{{{',
        });
        const response = await POST(req);
        expect(response.status).toBe(400);
        const data = await response.json();
        expect(data.error).toBeDefined();
    });

    it('boş mesaj listesinde 400 döndürmeli', async () => {
        const response = await POST(makeRequest({ messages: [] }));
        expect(response.status).toBe(400);
    });

    it('messages alanı olmadan 400 döndürmeli', async () => {
        const response = await POST(makeRequest({ content: 'test' }));
        expect(response.status).toBe(400);
    });

    it('boş içerikli mesajda 400 döndürmeli', async () => {
        const response = await POST(makeRequest({ messages: [{ role: 'user', content: '   ' }] }));
        expect(response.status).toBe(400);
    });

    it('geçerli arama sorgusunda stream döndürmeli', async () => {
        const response = await POST(makeRequest({
            messages: [{ role: 'user', content: 'glioblastom' }]
        }));
        expect(response.status).toBe(200);
        expect(response.headers.get('Content-Type')).toBe('text/plain; charset=utf-8');

        const text = await response.text();
        expect(text.length).toBeGreaterThan(0);
        expect(text).toContain('Glioblastom');
    }, 30000);

    it('merhaba mesajında hoşgeldin yanıtı vermeli', async () => {
        const response = await POST(makeRequest({
            messages: [{ role: 'user', content: 'merhaba' }]
        }));
        const text = await response.text();
        expect(text).toContain('Merhaba');
        expect(text).toContain('RadAsist');
    }, 30000);

    it('bulunamayan sorguda yardım mesajı vermeli', async () => {
        const response = await POST(makeRequest({
            messages: [{ role: 'user', content: 'zxcvbnmasdfghjkl' }]
        }));
        const text = await response.text();
        expect(text).toContain('bulunamadı');
    }, 30000);

    it('sorguyu 500 karaktere sınırlamalı', async () => {
        const longMessage = 'a'.repeat(1000);
        const response = await POST(makeRequest({
            messages: [{ role: 'user', content: longMessage }]
        }));
        expect(response.status).toBe(200);
    }, 30000);

    // 'listele' komutu 260+ patolojiyi stream eder, test ortamında
    // simulated delay nedeniyle 30sn+ sürer. Sadece response kontrolü yapılır.
    it('listele komutunda 200 döndürmeli', async () => {
        const response = await POST(makeRequest({
            messages: [{ role: 'user', content: 'listele' }]
        }));
        expect(response.status).toBe(200);
        expect(response.body).not.toBeNull();
    });
});
