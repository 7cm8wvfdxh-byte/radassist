-- ============================================================
-- Admin Role Migration
-- Supabase Dashboard > SQL Editor'de çalıştır
-- ============================================================

-- 1. profiles tablosuna is_admin kolonu ekle
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS is_admin BOOLEAN NOT NULL DEFAULT FALSE;

-- 2. thnshn@icloud.com kullanıcısını admin yap
--    (Kullanıcının önce siteye kayıt olmuş olması gerekir)
UPDATE profiles
SET is_admin = TRUE
WHERE email = 'thnshn@icloud.com';

-- 3. Doğrulama — admin kullanıcıları listele
SELECT id, name, email, specialty, is_admin
FROM profiles
WHERE is_admin = TRUE;
