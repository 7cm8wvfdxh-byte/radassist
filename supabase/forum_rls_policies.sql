-- Forum tablolarında silme (DELETE) policy'leri
-- Admin kullanıcılar tüm gönderileri silebilir
-- Normal kullanıcılar sadece kendi gönderilerini silebilir

-- POSTS tablosu
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Herkes okuyabilir
CREATE POLICY IF NOT EXISTS "Posts herkes tarafından okunabilir"
ON posts FOR SELECT USING (true);

-- Kullanıcılar kendi gönderilerini oluşturabilir
CREATE POLICY IF NOT EXISTS "Kullanıcılar gönderi oluşturabilir"
ON posts FOR INSERT WITH CHECK (auth.uid() = author_id);

-- Kullanıcılar kendi gönderilerini güncelleyebilir
CREATE POLICY IF NOT EXISTS "Kullanıcılar kendi gönderilerini güncelleyebilir"
ON posts FOR UPDATE USING (auth.uid() = author_id);

-- Adminler tüm gönderileri silebilir, kullanıcılar kendi gönderilerini silebilir
CREATE POLICY IF NOT EXISTS "Admin veya sahip gönderi silebilir"
ON posts FOR DELETE USING (
    auth.uid() = author_id
    OR EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.is_admin = true)
);


-- COMMENTS tablosu
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Herkes okuyabilir
CREATE POLICY IF NOT EXISTS "Yorumlar herkes tarafından okunabilir"
ON comments FOR SELECT USING (true);

-- Kullanıcılar yorum ekleyebilir
CREATE POLICY IF NOT EXISTS "Kullanıcılar yorum ekleyebilir"
ON comments FOR INSERT WITH CHECK (auth.uid() = author_id);

-- Adminler tüm yorumları silebilir, kullanıcılar kendi yorumlarını silebilir
CREATE POLICY IF NOT EXISTS "Admin veya sahip yorum silebilir"
ON comments FOR DELETE USING (
    auth.uid() = author_id
    OR EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.is_admin = true)
);


-- POST_LIKES tablosu
ALTER TABLE post_likes ENABLE ROW LEVEL SECURITY;

-- Herkes okuyabilir
CREATE POLICY IF NOT EXISTS "Beğeniler okunabilir"
ON post_likes FOR SELECT USING (true);

-- Kullanıcılar beğeni ekleyebilir
CREATE POLICY IF NOT EXISTS "Kullanıcılar beğeni ekleyebilir"
ON post_likes FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Kullanıcılar kendi beğenilerini kaldırabilir, Adminler hepsini silebilir
CREATE POLICY IF NOT EXISTS "Admin veya sahip beğeni silebilir"
ON post_likes FOR DELETE USING (
    auth.uid() = user_id
    OR EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.is_admin = true)
);
