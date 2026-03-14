-- ============================================
-- RadAssist Community - Yeni Özellikler Migration
-- Supabase SQL Editor'de çalıştırın
-- ============================================

-- 1) posts tablosuna yeni kolonlar
ALTER TABLE posts
  ADD COLUMN IF NOT EXISTS image_url TEXT,
  ADD COLUMN IF NOT EXISTS is_pinned BOOLEAN DEFAULT false;

-- 2) comments tablosuna likes kolonu
ALTER TABLE comments
  ADD COLUMN IF NOT EXISTS likes INTEGER DEFAULT 0;

-- 3) Post Bookmarks tablosu
CREATE TABLE IF NOT EXISTS post_bookmarks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(post_id, user_id)
);

-- 4) Comment Likes tablosu
CREATE TABLE IF NOT EXISTS comment_likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  comment_id UUID NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(comment_id, user_id)
);

-- 5) Notifications tablosu
CREATE TABLE IF NOT EXISTS notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('like', 'comment', 'pin')),
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  post_title TEXT NOT NULL,
  actor_name TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 6) İndeksler (performans)
CREATE INDEX IF NOT EXISTS idx_bookmarks_user ON post_bookmarks(user_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_post ON post_bookmarks(post_id);
CREATE INDEX IF NOT EXISTS idx_comment_likes_comment ON comment_likes(comment_id);
CREATE INDEX IF NOT EXISTS idx_comment_likes_user ON comment_likes(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id, is_read);
CREATE INDEX IF NOT EXISTS idx_posts_pinned ON posts(is_pinned) WHERE is_pinned = true;

-- 7) RLS (Row Level Security) Policies
ALTER TABLE post_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE comment_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Bookmarks: herkes okuyabilir, kendi bookmark'unu yönetebilir
CREATE POLICY "Bookmarks select" ON post_bookmarks FOR SELECT USING (true);
CREATE POLICY "Bookmarks insert" ON post_bookmarks FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Bookmarks delete" ON post_bookmarks FOR DELETE USING (auth.uid() = user_id);

-- Comment likes: herkes okuyabilir, kendi like'ını yönetebilir
CREATE POLICY "Comment likes select" ON comment_likes FOR SELECT USING (true);
CREATE POLICY "Comment likes insert" ON comment_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Comment likes delete" ON comment_likes FOR DELETE USING (auth.uid() = user_id);

-- Notifications: sadece kendi bildirimlerini görebilir/güncelleyebilir
CREATE POLICY "Notifications select" ON notifications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Notifications update" ON notifications FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Notifications insert" ON notifications FOR INSERT WITH CHECK (true);

-- 8) Supabase Storage bucket (görsel yükleme için)
-- Dashboard > Storage > New Bucket > "images" (Public)
-- Veya SQL ile:
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policy: herkes okuyabilir, giriş yapan yükleyebilir
CREATE POLICY "Public read images" ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "Auth upload images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');
