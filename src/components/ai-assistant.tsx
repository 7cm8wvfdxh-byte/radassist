'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { Send, Search, User, Database, Loader2, Trash2 } from 'lucide-react';
import DOMPurify from 'dompurify';
import { useLanguage } from '@/context/language-context';

interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

const QUICK_PROMPTS_TR = [
    { icon: '🧠', text: 'Glioblastom' },
    { icon: '🩺', text: 'Multiple Skleroz' },
    { icon: '🦴', text: 'Disk hernisi' },
    { icon: '🫁', text: 'Pulmoner emboli' },
];

const QUICK_PROMPTS_EN = [
    { icon: '🧠', text: 'Glioblastoma' },
    { icon: '🩺', text: 'Multiple Sclerosis' },
    { icon: '🦴', text: 'Disc herniation' },
    { icon: '🫁', text: 'Pulmonary embolism' },
];

export function AIAssistant() {
    const { t, language } = useLanguage();
    const QUICK_PROMPTS = language === 'tr' ? QUICK_PROMPTS_TR : QUICK_PROMPTS_EN;
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [showWelcome, setShowWelcome] = useState(true);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
        if (messages.length > 0) {
            setShowWelcome(false);
        }
    }, [messages]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: inputValue,
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(m => ({
                        role: m.role,
                        content: m.content,
                    })),
                }),
            });

            if (!response.ok) throw new Error('API error');

            const reader = response.body?.getReader();
            if (!reader) throw new Error('No reader');

            const decoder = new TextDecoder();
            let assistantContent = '';
            const assistantId = (Date.now() + 1).toString();

            // Add empty assistant message
            setMessages(prev => [...prev, { id: assistantId, role: 'assistant', content: '' }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                assistantContent += chunk;

                // Update assistant message
                setMessages(prev =>
                    prev.map(m =>
                        m.id === assistantId ? { ...m, content: assistantContent } : m
                    )
                );
            }
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: language === 'tr' ? '⚠️ Bir hata oluştu. Lütfen tekrar deneyin.' : '⚠️ An error occurred. Please try again.',
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleQuickPrompt = (prompt: string) => {
        setInputValue(prompt);
        setTimeout(() => {
            const form = document.getElementById('chat-form') as HTMLFormElement;
            form?.requestSubmit();
        }, 100);
    };

    const clearChat = () => {
        setMessages([]);
        setShowWelcome(true);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-200px)] max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                        <Database className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white">{t("ai.title")}</h2>
                        <p className="text-xs text-gray-400">{t("ai.subtitle")}</p>
                    </div>
                </div>
                {messages.length > 0 && (
                    <button
                        onClick={clearChat}
                        className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                        title={language === 'tr' ? "Sohbeti temizle" : "Clear chat"}
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {showWelcome && messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                            <Database className="w-12 h-12 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {language === 'tr' ? 'Patoloji Arama Asistanı' : 'Pathology Search Assistant'}
                            </h3>
                            <p className="text-gray-400 max-w-md">
                                {language === 'tr'
                                    ? '9 organ sistemindeki patoloji veritabanından arama yapabilirsiniz. Hastalık adı, bulgu veya anahtar kelime yazın.'
                                    : 'Search across 9 organ system pathology databases. Type a disease name, finding, or keyword.'}
                            </p>
                        </div>

                        {/* Quick Prompts */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg mt-4">
                            {QUICK_PROMPTS.map((prompt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleQuickPrompt(prompt.text)}
                                    className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 
                                               hover:bg-white/10 hover:border-purple-500/30 transition-all text-left text-sm"
                                >
                                    <span className="text-lg">{prompt.icon}</span>
                                    <span className="text-gray-300 line-clamp-1">{prompt.text}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {message.role === 'assistant' && (
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                                            border border-purple-500/30 flex items-center justify-center">
                                <Search className="w-4 h-4 text-purple-400" />
                            </div>
                        )}
                        <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.role === 'user'
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                : 'bg-white/5 border border-white/10 text-gray-200'
                                }`}
                        >
                            <div className="prose prose-invert prose-sm max-w-none whitespace-pre-wrap">
                                {message.role === 'assistant' ? (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                message.content
                                                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                    .replace(/\n/g, '<br />')
                                                    .replace(/^- /gm, '• '),
                                                { ALLOWED_TAGS: ['strong', 'br', 'em', 'b', 'i', 'p', 'span'] }
                                            )
                                        }}
                                    />
                                ) : (
                                    message.content
                                )}
                            </div>
                        </div>
                        {message.role === 'user' && (
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 
                                            border border-blue-500/30 flex items-center justify-center">
                                <User className="w-4 h-4 text-blue-400" />
                            </div>
                        )}
                    </div>
                ))}

                {isLoading && messages[messages.length - 1]?.role === 'user' && (
                    <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                                        border border-purple-500/30 flex items-center justify-center">
                            <Search className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span className="text-sm">{t("ai.thinking")}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
                id="chat-form"
                onSubmit={handleSubmit}
                className="p-4 border-t border-white/10"
            >
                <div className="flex gap-2">
                    <input
                        type="text"
                        name="prompt"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={t("ai.placeholder")}
                        className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10
                                   text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50
                                   focus:ring-2 focus:ring-purple-500/20 transition-all"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !inputValue.trim()}
                        className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600
                                   text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed
                                   hover:from-purple-500 hover:to-blue-500 transition-all
                                   flex items-center gap-2"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                    {language === 'tr'
                        ? '⚠️ Yanıtlar veritabanı aramasına dayalıdır ve bilgilendirme amaçlıdır. Kesin tanı için klinik korelasyon gereklidir.'
                        : '⚠️ Responses are based on database search and are for informational purposes only. Clinical correlation is required for definitive diagnosis.'}
                </p>
            </form>
        </div>
    );
}
