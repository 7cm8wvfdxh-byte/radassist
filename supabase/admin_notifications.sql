-- ============================================================
-- Admin Bildirim Sistemi
-- Supabase Dashboard > SQL Editor'de çalıştır
-- ============================================================

-- 1. Bildirim tablosunu oluştur
CREATE TABLE IF NOT EXISTS admin_notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    type TEXT NOT NULL,          -- 'new_user', 'new_post', 'new_comment'
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    metadata JSONB DEFAULT '{}', -- ek bilgiler (user_id, post_id vs.)
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. RLS aktif et
ALTER TABLE admin_notifications ENABLE ROW LEVEL SECURITY;

-- 3. Sadece admin'ler okuyabilsin
CREATE POLICY "Admins can read notifications"
    ON admin_notifications FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid()
            AND profiles.is_admin = TRUE
        )
    );

-- 4. Sadece admin'ler güncelleyebilsin (okundu işareti)
CREATE POLICY "Admins can update notifications"
    ON admin_notifications FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid()
            AND profiles.is_admin = TRUE
        )
    );

-- 5. Service role (API) insert yapabilsin
CREATE POLICY "Service can insert notifications"
    ON admin_notifications FOR INSERT
    WITH CHECK (TRUE);

-- 6. Yeni kullanıcı kaydında otomatik bildirim tetikleyicisi
CREATE OR REPLACE FUNCTION notify_admin_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO admin_notifications (type, title, message, metadata)
    VALUES (
        'new_user',
        'Yeni Kullanıcı Kaydı',
        NEW.name || ' (' || COALESCE(NEW.email, '') || ') siteye kayıt oldu. Uzmanlık: ' || COALESCE(NEW.specialty, 'Belirtilmedi'),
        jsonb_build_object('user_id', NEW.id, 'email', NEW.email, 'name', NEW.name, 'specialty', NEW.specialty)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_new_user_notify
    AFTER INSERT ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION notify_admin_new_user();

-- 7. Yeni gönderi oluşturulduğunda otomatik bildirim tetikleyicisi
CREATE OR REPLACE FUNCTION notify_admin_new_post()
RETURNS TRIGGER AS $$
DECLARE
    author_name TEXT;
    author_email TEXT;
BEGIN
    SELECT name, email INTO author_name, author_email
    FROM profiles WHERE id = NEW.author_id;

    INSERT INTO admin_notifications (type, title, message, metadata)
    VALUES (
        'new_post',
        'Yeni Forum Gönderisi',
        COALESCE(author_name, 'Anonim') || ' yeni bir gönderi paylaştı: "' || LEFT(NEW.title, 100) || '"',
        jsonb_build_object('post_id', NEW.id, 'author_id', NEW.author_id, 'author_name', author_name, 'author_email', author_email, 'title', NEW.title)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_new_post_notify
    AFTER INSERT ON posts
    FOR EACH ROW
    EXECUTE FUNCTION notify_admin_new_post();

-- 8. Yeni yorum eklendiğinde bildirim
CREATE OR REPLACE FUNCTION notify_admin_new_comment()
RETURNS TRIGGER AS $$
DECLARE
    author_name TEXT;
    post_title TEXT;
BEGIN
    SELECT name INTO author_name FROM profiles WHERE id = NEW.author_id;
    SELECT title INTO post_title FROM posts WHERE id = NEW.post_id;

    INSERT INTO admin_notifications (type, title, message, metadata)
    VALUES (
        'new_comment',
        'Yeni Yorum',
        COALESCE(author_name, 'Anonim') || ' "' || LEFT(COALESCE(post_title, ''), 80) || '" başlığına yorum yaptı.',
        jsonb_build_object('comment_id', NEW.id, 'post_id', NEW.post_id, 'author_id', NEW.author_id, 'author_name', author_name)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_new_comment_notify
    AFTER INSERT ON comments
    FOR EACH ROW
    EXECUTE FUNCTION notify_admin_new_comment();

-- 9. Doğrulama
SELECT 'Admin bildirim sistemi başarıyla kuruldu!' AS status;
