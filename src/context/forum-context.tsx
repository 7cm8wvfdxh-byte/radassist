"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "./auth-context";

export interface Comment {
    id: string;
    author: {
        name: string;
        specialty: string;
    };
    content: string;
    createdAt: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
        specialty: string;
    };
    tags: string[]; // e.g. "Brain", "MRI", "Question"
    likes: number;
    comments: Comment[];
    createdAt: string;
    viewCount: number;
}

interface ForumContextType {
    posts: Post[];
    addPost: (title: string, content: string, tags: string[], user: User) => void;
    addComment: (postId: string, content: string, user: User) => void;
    toggleLike: (postId: string) => void;
    getPost: (id: string) => Post | undefined;
}

const ForumContext = createContext<ForumContextType | undefined>(undefined);

// Mock Initial Data
const INITIAL_POSTS: Post[] = [
    {
        id: "1",
        title: "T2 FLAIR'de Hiperintensite: Artefakt mı Patoloji mi?",
        content: "35 yaşında erkek hasta, baş ağrısı şikayetiyle geldi. Sol frontal lobda subkortikal yerleşimli, T2 ve FLAIR'de hiperintens, T1'de izointens 5mm'lik odak izlendi. Kontrast tutulumu yok. Sizce non-spesifik gliotik odak mı yoksa demyelinizan plak başlangıcı mı? Görüşlerinizi bekliyorum.",
        author: { name: "Dr. Ayşe Yılmaz", specialty: "Radyoloji Uzmanı" },
        tags: ["Brain", "MRI", "Diagnosis"],
        likes: 12,
        comments: [
            { id: "c1", author: { name: "Dr. Mehmet Öz", specialty: "Nöroradyoloji" }, content: "Hastanın yaşı genç, sagittal kesitlerde korpus kallozum tutulumuna (Dawson fingers) bakmak lazım. Yoksa non-spesifik deyip geçebiliriz.", createdAt: new Date(Date.now() - 86400000).toISOString() }
        ],
        createdAt: new Date(Date.now() - 172800000).toISOString(),
        viewCount: 145
    },
    {
        id: "2",
        title: "Apandisit Şüphesinde USG vs BT",
        content: "Çocuk hastalarda (6-10 yaş) şüpheli apandisit vakalarında USG negatif ise, düşük doz BT mi tercih ediyorsunuz yoksa klinik izlem mi? Bizim klinikte protokol tartışmalı.",
        author: { name: "Stj. Dr. Can", specialty: "Tıp Öğrencisi" },
        tags: ["Gastro", "Pediatric", "Protocol"],
        likes: 8,
        comments: [],
        createdAt: new Date(Date.now() - 43200000).toISOString(),
        viewCount: 89
    },
    {
        id: "3",
        title: "Bu kitleye biyopsi yapılır mı? (Karaciğer)",
        content: "Segment 6'da 2cm, arteriyel fazda periferik nodüler boyanan, geç fazda santrale dolan lezyon. Tipik hemanjiyom gibi duruyor ama onkoloji biyopsi istiyor. Kanama riski nedeniyle reddetmek doğru mu?",
        author: { name: "Dr. Zeynep", specialty: "Radyoloji Asistanı" },
        tags: ["Liver", "Intervention", "Question"],
        likes: 24,
        comments: [
            { id: "c2", author: { name: "Prof. Dr. Kaya", specialty: "Girişimsel Radyoloji" }, content: "Tipik hemanjiyom bulguları varsa biyopsi KONTRENDİKEDİR. Israr ederlerse dinamik MR ile teyit edin.", createdAt: new Date().toISOString() }
        ],
        createdAt: new Date().toISOString(),
        viewCount: 230
    }
];

export function ForumProvider({ children }: { children: React.ReactNode }) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const storedPosts = localStorage.getItem("radassist-forum-posts");
        if (storedPosts) {
            setPosts(JSON.parse(storedPosts));
        } else {
            setPosts(INITIAL_POSTS);
            localStorage.setItem("radassist-forum-posts", JSON.stringify(INITIAL_POSTS));
        }
    }, []);

    const savePosts = (newPosts: Post[]) => {
        setPosts(newPosts);
        localStorage.setItem("radassist-forum-posts", JSON.stringify(newPosts));
    };

    const addPost = (title: string, content: string, tags: string[], user: User) => {
        const newPost: Post = {
            id: Math.random().toString(36).substr(2, 9),
            title,
            content,
            author: { name: user.name, specialty: user.specialty },
            tags,
            likes: 0,
            comments: [],
            createdAt: new Date().toISOString(),
            viewCount: 0
        };
        savePosts([newPost, ...posts]);
    };

    const addComment = (postId: string, content: string, user: User) => {
        const newPosts = posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: [
                        ...post.comments,
                        {
                            id: Math.random().toString(36).substr(2, 9),
                            author: { name: user.name, specialty: user.specialty },
                            content,
                            createdAt: new Date().toISOString()
                        }
                    ]
                };
            }
            return post;
        });
        savePosts(newPosts);
    };

    const toggleLike = (postId: string) => {
        // Basic like toggle (increment/decrement logic can be complex without user ID tracking for likes, simplifying for demo)
        const newPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, likes: post.likes + 1 };
            }
            return post;
        });
        savePosts(newPosts);
    };

    const getPost = (id: string) => {
        return posts.find(p => p.id === id);
    }

    return (
        <ForumContext.Provider value={{ posts, addPost, addComment, toggleLike, getPost }}>
            {children}
        </ForumContext.Provider>
    );
}

export function useForum() {
    const context = useContext(ForumContext);
    if (context === undefined) {
        throw new Error("useForum must be used within a ForumProvider");
    }
    return context;
}
