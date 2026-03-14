"use client";

import React from "react";

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
    const rendered = React.useMemo(() => parseMarkdown(content), [content]);
    return (
        <div
            className={`prose prose-invert prose-sm max-w-none ${className}`}
            dangerouslySetInnerHTML={{ __html: rendered }}
        />
    );
}

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function parseMarkdown(text: string): string {
    if (!text) return "";

    // Escape HTML first
    let html = escapeHtml(text);

    // Code blocks (``` ... ```)
    html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (_match, _lang, code) => {
        return `<pre class="bg-zinc-800 rounded-lg p-3 overflow-x-auto my-2"><code class="text-xs text-green-300">${code.trim()}</code></pre>`;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-zinc-800 px-1.5 py-0.5 rounded text-xs text-cyan-300">$1</code>');

    // Images (from post attachments)
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-xl max-w-full my-2 border border-white/10" loading="lazy" />');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">$1</a>');

    // Headings
    html = html.replace(/^### (.+)$/gm, '<h4 class="text-base font-bold text-white mt-4 mb-1">$1</h4>');
    html = html.replace(/^## (.+)$/gm, '<h3 class="text-lg font-bold text-white mt-4 mb-1">$1</h3>');
    html = html.replace(/^# (.+)$/gm, '<h2 class="text-xl font-bold text-white mt-4 mb-2">$1</h2>');

    // Bold and Italic
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong class="font-bold"><em>$1</em></strong>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em class="italic text-zinc-300">$1</em>');

    // Blockquotes
    html = html.replace(/^&gt; (.+)$/gm, '<blockquote class="border-l-2 border-cyan-500/30 pl-3 my-2 text-zinc-400 italic">$1</blockquote>');

    // Unordered lists
    html = html.replace(/^[-*] (.+)$/gm, '<li class="ml-4 list-disc text-zinc-300">$1</li>');

    // Ordered lists
    html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal text-zinc-300">$1</li>');

    // Horizontal rule
    html = html.replace(/^---$/gm, '<hr class="border-white/10 my-4" />');

    // Paragraphs (double newlines)
    html = html.replace(/\n\n/g, '</p><p class="my-2">');

    // Single newlines to <br>
    html = html.replace(/\n/g, "<br />");

    return `<p class="my-2">${html}</p>`;
}
