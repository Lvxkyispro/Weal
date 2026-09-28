"""Convert the original photos into web-ready WebP files.

Usage:
    pip install pillow
    python3 scripts/prepare_photos.py /path/to/original/photos

Reads the source files in the curated order below, applies EXIF rotation,
and writes:
    assets/photos/NN.webp      full image (long side capped at 1600px)
    assets/photos/NN-t.webp    thumbnail used by the finale ring (480px)
"""

import sys
from pathlib import Path

from PIL import Image, ImageOps

# Curated story order. IMG_20250211_184459_0995.jpg is omitted because it is a
# byte-for-byte duplicate of IMG_20250122_213129_0903.jpg.
ORDER = [
    "Snapchat-1830950065.jpg",
    "IMG_20250211_184447_0406.jpg",
    "IMG_20250122_213128_0836.jpg",
    "IMG_20250211_184449_0915.jpg",
    "IMG_20250122_213113_0138.jpg",
    "IMG_20250211_184456_0794.jpg",
    "Snapchat-1371323869.jpg",
    "IMG_20250211_184446_0215.jpg",
    "IMG_20250122_213129_0903.jpg",
    "IMG_20250222_092643_0119.jpg",
    "IMG_20250222_092646_0072.jpg",
    "IMG_20250226_215246_0794.jpg",
    "Snapchat-1948560920.jpg",
    "IMG_20250412_202302_0994.jpg",
    "IMG_20250615_105524_0138.jpg",
    "IMG_20250615_105539_0537.jpg",
    "IMG_20250615_111455_0339.jpg",
    "IMG_20250615_105542_0020.jpg",
    "Snapchat-1581009428.jpg",
    "Snapchat-1518935037.jpg",
    "IMG_20250828_220607_0979.jpg",
    "IMG_20250830_125316_0724.jpg",
    "Snapchat-2043318014.jpg",
]

FULL_MAX = 1600
THUMB_MAX = 480


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1])
    out = Path(__file__).resolve().parent.parent / "assets" / "photos"
    out.mkdir(parents=True, exist_ok=True)

    for i, name in enumerate(ORDER, start=1):
        img = ImageOps.exif_transpose(Image.open(src / name)).convert("RGB")
        stem = f"{i:02d}"

        full = img.copy()
        full.thumbnail((FULL_MAX, FULL_MAX), Image.LANCZOS)
        full.save(out / f"{stem}.webp", "WEBP", quality=84, method=6)

        thumb = img.copy()
        thumb.thumbnail((THUMB_MAX, THUMB_MAX), Image.LANCZOS)
        thumb.save(out / f"{stem}-t.webp", "WEBP", quality=78, method=6)

        print(f"{stem}  {name}  {full.size[0]}x{full.size[1]}")


if __name__ == "__main__":
    main()
