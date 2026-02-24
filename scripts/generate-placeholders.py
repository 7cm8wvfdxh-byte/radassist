#!/usr/bin/env python3
"""Generate placeholder medical images for RadAssist categories."""

from PIL import Image, ImageDraw, ImageFont
import math
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
SIZE = 512
BG_COLOR = (10, 10, 15)
ACCENT = (220, 160, 50)  # Gold/orange accent
ACCENT_DIM = (120, 85, 25)
ACCENT_GLOW = (255, 200, 80)
GRID_COLOR = (30, 30, 40)

def draw_grid(draw):
    """Draw subtle background grid."""
    for x in range(0, SIZE, 32):
        draw.line([(x, 0), (x, SIZE)], fill=GRID_COLOR, width=1)
    for y in range(0, SIZE, 32):
        draw.line([(0, y), (SIZE, y)], fill=GRID_COLOR, width=1)

def draw_border(draw):
    """Draw tech-style border."""
    draw.rectangle([(8, 8), (SIZE-9, SIZE-9)], outline=ACCENT_DIM, width=1)
    # Corner accents
    for cx, cy in [(8, 8), (SIZE-9, 8), (8, SIZE-9), (SIZE-9, SIZE-9)]:
        draw.rectangle([(cx-3, cy-3), (cx+3, cy+3)], fill=ACCENT)

def draw_text_centered(draw, text, y, color=ACCENT_GLOW, size_hint="large"):
    """Draw centered text."""
    try:
        if size_hint == "large":
            font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 28)
        elif size_hint == "medium":
            font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18)
        else:
            font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 14)
    except OSError:
        font = ImageFont.load_default()

    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    x = (SIZE - tw) // 2
    draw.text((x, y), text, fill=color, font=font)

def draw_crosshair(draw, cx, cy, r):
    """Draw targeting crosshair."""
    draw.ellipse([(cx-r, cy-r), (cx+r, cy+r)], outline=ACCENT, width=2)
    draw.ellipse([(cx-r//2, cy-r//2), (cx+r//2, cy+r//2)], outline=ACCENT_DIM, width=1)
    draw.line([(cx-r-15, cy), (cx-r+10, cy)], fill=ACCENT, width=1)
    draw.line([(cx+r-10, cy), (cx+r+15, cy)], fill=ACCENT, width=1)
    draw.line([(cx, cy-r-15), (cx, cy-r+10)], fill=ACCENT, width=1)
    draw.line([(cx, cy+r-10), (cx, cy+r+15)], fill=ACCENT, width=1)

# --- Category-specific drawings ---

def draw_brain_icon(draw):
    """Stylized brain outline."""
    cx, cy = SIZE//2, SIZE//2 - 20
    # Brain outer shape (simplified ellipse)
    draw.ellipse([(cx-90, cy-80), (cx+90, cy+80)], outline=ACCENT, width=3)
    # Midline
    draw.line([(cx, cy-80), (cx, cy+80)], fill=ACCENT_DIM, width=2)
    # Gyri lines (left)
    for i, offset in enumerate([-50, -20, 15, 45]):
        y = cy + offset
        draw.arc([(cx-85, y-15), (cx-10, y+15)], 0, 180, fill=ACCENT, width=2)
    # Gyri lines (right)
    for i, offset in enumerate([-45, -15, 20, 50]):
        y = cy + offset
        draw.arc([(cx+10, y-15), (cx+85, y+15)], 180, 360, fill=ACCENT, width=2)
    # Brain stem
    draw.line([(cx, cy+80), (cx, cy+110)], fill=ACCENT, width=3)
    draw_crosshair(draw, cx, cy, 110)

def draw_liver_icon(draw):
    """Stylized liver outline."""
    cx, cy = SIZE//2, SIZE//2 - 10
    # Liver shape (bean-like)
    points = []
    for angle in range(0, 360, 5):
        rad = math.radians(angle)
        r = 90 + 30 * math.cos(rad * 2) + 15 * math.sin(rad * 3)
        if 90 < angle < 180:
            r -= 25
        x = cx + int(r * math.cos(rad))
        y = cy + int(r * 0.65 * math.sin(rad))
        points.append((x, y))
    draw.polygon(points, outline=ACCENT, fill=None)
    # Portal vein branching
    draw.line([(cx-10, cy-10), (cx+30, cy-40)], fill=ACCENT_DIM, width=2)
    draw.line([(cx+30, cy-40), (cx+60, cy-55)], fill=ACCENT_DIM, width=1)
    draw.line([(cx+30, cy-40), (cx+50, cy-25)], fill=ACCENT_DIM, width=1)
    draw.line([(cx-10, cy-10), (cx-40, cy+15)], fill=ACCENT_DIM, width=2)
    draw_crosshair(draw, cx, cy, 120)

def draw_lung_icon(draw):
    """Stylized lungs outline."""
    cx, cy = SIZE//2, SIZE//2 - 10
    # Trachea
    draw.rectangle([(cx-8, cy-100), (cx+8, cy-40)], outline=ACCENT, width=2)
    # Left lung
    draw.ellipse([(cx-110, cy-50), (cx-15, cy+90)], outline=ACCENT, width=2)
    # Right lung
    draw.ellipse([(cx+15, cy-50), (cx+110, cy+90)], outline=ACCENT, width=2)
    # Bronchi
    draw.line([(cx, cy-40), (cx-50, cy+10)], fill=ACCENT_DIM, width=2)
    draw.line([(cx, cy-40), (cx+50, cy+10)], fill=ACCENT_DIM, width=2)
    # Branch lines
    draw.line([(cx-50, cy+10), (cx-75, cy+40)], fill=ACCENT_DIM, width=1)
    draw.line([(cx-50, cy+10), (cx-35, cy+40)], fill=ACCENT_DIM, width=1)
    draw.line([(cx+50, cy+10), (cx+75, cy+40)], fill=ACCENT_DIM, width=1)
    draw.line([(cx+50, cy+10), (cx+35, cy+40)], fill=ACCENT_DIM, width=1)
    draw_crosshair(draw, cx, cy, 130)

def draw_breast_icon(draw):
    """Stylized mammography view."""
    cx, cy = SIZE//2, SIZE//2 - 10
    # Breast outline (MLO view approximation)
    draw.ellipse([(cx-80, cy-90), (cx+80, cy+90)], outline=ACCENT, width=2)
    # Internal structure lines (Cooper ligaments)
    for offset in [-40, 0, 40]:
        draw.arc([(cx-60, cy+offset-20), (cx+60, cy+offset+20)], 10, 170, fill=ACCENT_DIM, width=1)
    # Pectoral muscle line
    draw.line([(cx-80, cy-90), (cx-60, cy+50)], fill=ACCENT, width=2)
    # Nipple
    draw.ellipse([(cx+75, cy-5), (cx+85, cy+5)], fill=ACCENT)
    draw_crosshair(draw, cx, cy, 110)

def draw_kidney_icon(draw):
    """Stylized kidney outline."""
    cx, cy = SIZE//2, SIZE//2 - 10
    # Kidney shape (bean)
    points = []
    for angle in range(0, 360, 5):
        rad = math.radians(angle)
        r = 80 + 20 * math.cos(rad)
        if 60 < angle < 120:
            r -= 30
        x = cx + int(r * 0.6 * math.cos(rad))
        y = cy + int(r * math.sin(rad))
        points.append((x, y))
    draw.polygon(points, outline=ACCENT, fill=None)
    # Hilum/pelvis
    draw.ellipse([(cx-20, cy-15), (cx+10, cy+15)], outline=ACCENT_DIM, width=1)
    # Calyces
    for y_off in [-30, 0, 30]:
        draw.line([(cx-5, cy+y_off), (cx+25, cy+y_off)], fill=ACCENT_DIM, width=1)
    # Ureter
    draw.line([(cx-5, cy+15), (cx-5, cy+100)], fill=ACCENT_DIM, width=2)
    draw_crosshair(draw, cx, cy, 110)

def draw_msk_icon(draw):
    """Stylized knee joint."""
    cx, cy = SIZE//2, SIZE//2 - 10
    # Femur (upper bone)
    draw.rectangle([(cx-15, cy-120), (cx+15, cy-20)], outline=ACCENT, width=2)
    # Femoral condyles
    draw.ellipse([(cx-40, cy-40), (cx, cy+10)], outline=ACCENT, width=2)
    draw.ellipse([(cx, cy-40), (cx+40, cy+10)], outline=ACCENT, width=2)
    # Tibia (lower bone)
    draw.rectangle([(cx-15, cy+30), (cx+15, cy+120)], outline=ACCENT, width=2)
    # Tibial plateau
    draw.line([(cx-40, cy+30), (cx+40, cy+30)], fill=ACCENT, width=2)
    # Joint space
    draw.line([(cx-35, cy+10), (cx+35, cy+10)], fill=ACCENT_DIM, width=1)
    # Meniscus
    draw.arc([(cx-35, cy), (cx-5, cy+25)], 0, 180, fill=ACCENT_GLOW, width=2)
    draw.arc([(cx+5, cy), (cx+35, cy+25)], 0, 180, fill=ACCENT_GLOW, width=2)
    # Patella
    draw.ellipse([(cx-12, cy-15), (cx+12, cy+15)], outline=ACCENT_DIM, width=1)
    draw_crosshair(draw, cx, cy, 130)

def draw_gi_icon(draw):
    """Stylized GI tract."""
    cx, cy = SIZE//2, SIZE//2 - 20
    # Stomach
    draw.ellipse([(cx-60, cy-60), (cx+30, cy+10)], outline=ACCENT, width=2)
    # Duodenum C-loop
    draw.arc([(cx+20, cy-30), (cx+70, cy+40)], -90, 90, fill=ACCENT, width=2)
    # Small bowel loops
    for i, y_off in enumerate([50, 70, 90]):
        x_shift = 10 * (i % 2)
        draw.arc([(cx-50+x_shift, cy+y_off-10), (cx+50+x_shift, cy+y_off+10)],
                 0, 180, fill=ACCENT_DIM, width=1)
    # Large bowel (ascending, transverse, descending)
    draw.line([(cx+70, cy+40), (cx+70, cy+100)], fill=ACCENT, width=2)  # Ascending
    draw.line([(cx+70, cy+100), (cx-70, cy+100)], fill=ACCENT, width=2)  # Transverse
    draw.line([(cx-70, cy+100), (cx-70, cy+40)], fill=ACCENT, width=2)  # Descending
    # Esophagus
    draw.line([(cx-15, cy-80), (cx-15, cy-60)], fill=ACCENT, width=2)
    draw_crosshair(draw, cx, cy+20, 120)

def draw_gyn_icon(draw):
    """Stylized uterus/adnexa."""
    cx, cy = SIZE//2, SIZE//2 - 10
    # Uterus body
    points = [
        (cx, cy-50),       # Fundus
        (cx-40, cy-30),    # Left cornu
        (cx-35, cy+40),    # Left lower body
        (cx-15, cy+60),    # Cervix left
        (cx+15, cy+60),    # Cervix right
        (cx+35, cy+40),    # Right lower body
        (cx+40, cy-30),    # Right cornu
    ]
    draw.polygon(points, outline=ACCENT, width=2)
    # Endometrial cavity
    draw.line([(cx, cy-40), (cx, cy+50)], fill=ACCENT_DIM, width=1)
    # Fallopian tubes
    draw.arc([(cx-100, cy-60), (cx-30, cy-10)], 180, 360, fill=ACCENT, width=2)
    draw.arc([(cx+30, cy-60), (cx+100, cy-10)], 180, 360, fill=ACCENT, width=2)
    # Ovaries
    draw.ellipse([(cx-100, cy-40), (cx-70, cy-10)], outline=ACCENT, width=2)
    draw.ellipse([(cx+70, cy-40), (cx+100, cy-10)], outline=ACCENT, width=2)
    # Vaginal canal
    draw.line([(cx-8, cy+60), (cx-8, cy+90)], fill=ACCENT_DIM, width=1)
    draw.line([(cx+8, cy+60), (cx+8, cy+90)], fill=ACCENT_DIM, width=1)
    draw_crosshair(draw, cx, cy, 120)


CATEGORIES = {
    "placeholder-brain": ("BEYIN", "Brain Imaging", draw_brain_icon),
    "placeholder-liver": ("KARACİĞER", "Liver Imaging", draw_liver_icon),
    "placeholder-lung": ("AKCİĞER", "Lung Imaging", draw_lung_icon),
    "placeholder-breast": ("MEME", "Breast Imaging", draw_breast_icon),
    "placeholder-kidney": ("BÖBREK", "Kidney Imaging", draw_kidney_icon),
    "placeholder-msk": ("KAS-İSKELET", "MSK Imaging", draw_msk_icon),
    "placeholder-gi": ("GASTROİNTESTİNAL", "GI Imaging", draw_gi_icon),
    "placeholder-gyn": ("JİNEKOLOJİ", "GYN Imaging", draw_gyn_icon),
}


def generate_placeholder(name, title_tr, title_en, draw_fn):
    """Generate a single placeholder image."""
    img = Image.new('RGB', (SIZE, SIZE), BG_COLOR)
    draw = ImageDraw.Draw(img)

    draw_grid(draw)
    draw_border(draw)
    draw_fn(draw)

    # Title at top
    draw_text_centered(draw, title_tr, 25, ACCENT_GLOW, "large")
    draw_text_centered(draw, title_en, 58, ACCENT_DIM, "medium")

    # "RADASSIST" badge at bottom
    draw_text_centered(draw, "RADASSIST", SIZE - 55, ACCENT_DIM, "small")
    draw_text_centered(draw, "Vaka Çalışması", SIZE - 38, ACCENT_DIM, "small")

    filepath = os.path.join(OUTPUT_DIR, f"{name}.png")
    img.save(filepath, "PNG", optimize=True)
    print(f"Created: {filepath} ({os.path.getsize(filepath)} bytes)")


if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for name, (title_tr, title_en, draw_fn) in CATEGORIES.items():
        generate_placeholder(name, title_tr, title_en, draw_fn)
    print(f"\nDone! Generated {len(CATEGORIES)} placeholder images.")
