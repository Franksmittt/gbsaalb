# export_project_trees.py
# -*- coding: utf-8 -*-
"""
Exports three text files to the project root:

  1) src_tree_with_code.txt
     - Full tree of /src and the contents of each readable file.

  2) public_tree_with_code.txt
     - Full tree of /public and the contents of each readable file.

  3) project_root_selected_files.txt
     - Contents of selected files in the project root.

Safe for Windows paths (raw strings), skips obvious binaries and very large files.
"""

import os
from pathlib import Path

# --- PATHS (raw strings to avoid \U Unicode escape issues) ---
PROJECT_ROOT = Path(r"C:\Users\shop\Desktop\global-batteries-alberton")
SRC_DIR = PROJECT_ROOT / "src"
PUBLIC_DIR = PROJECT_ROOT / "public"

# Include all requested root files (now including .env.local)
ROOT_SELECTED_FILES = [
    PROJECT_ROOT / "tailwind.config.ts",
    PROJECT_ROOT / "tsconfig.json",
    PROJECT_ROOT / ".env.local",
    PROJECT_ROOT / "eslint.config.mjs",
    PROJECT_ROOT / "next.config.js",
    PROJECT_ROOT / "next.config.ts",
    PROJECT_ROOT / "next-env.d.ts",
    PROJECT_ROOT / "package.json",
    PROJECT_ROOT / "package-lock.json",
    PROJECT_ROOT / "postcss.config.mjs",
]

OUT_SRC = PROJECT_ROOT / "src_tree_with_code.txt"
OUT_PUBLIC = PROJECT_ROOT / "public_tree_with_code.txt"
OUT_ROOT = PROJECT_ROOT / "project_root_selected_files.txt"

# --- SETTINGS ---
IGNORE_DIRS = {
    ".git", ".github", ".next", "node_modules", "dist", "build", ".turbo", ".vercel",
}

BINARY_EXTS = {
    ".png", ".jpg", ".jpeg", ".gif", ".webp", ".bmp", ".ico",
    ".ttf", ".otf", ".woff", ".woff2", ".eot",
    ".pdf", ".zip", ".7z", ".rar", ".gz", ".tar",
    ".mp4", ".mov", ".avi", ".mkv", ".mp3", ".wav",
}

MAX_TEXT_BYTES = 5 * 1024 * 1024  # 5 MB cap to avoid dumping massive files


def is_probably_binary(path: Path) -> bool:
    """Heuristic: extension check + null-byte sniff."""
    if path.suffix.lower() in BINARY_EXTS:
        return True
    try:
        with path.open("rb") as f:
            chunk = f.read(4096)
        if b"\x00" in chunk:
            return True
    except Exception:
        # If unreadable, treat as binary to be safe
        return True
    return False


def safe_read_text(path: Path) -> str:
    """Read text robustly; skip huge/binary files; fall back encodings."""
    try:
        size = path.stat().st_size
    except Exception as e:
        return f"[Error getting file size: {e}]"

    if size > MAX_TEXT_BYTES:
        return f"[Skipped: file too large to display content ({size} bytes)]"

    if is_probably_binary(path):
        return "[Skipped: binary file]"

    for enc in ("utf-8", "utf-8-sig", "cp1252", "latin-1"):
        try:
            with path.open("r", encoding=enc, errors="strict") as f:
                return f.read()
        except Exception:
            continue

    try:
        with path.open("r", encoding="utf-8", errors="replace") as f:
            return f.read()
    except Exception as e:
        return f"[Error reading file: {e}]"


def build_tree_lines(root_dir: Path) -> list[str]:
    """Return ASCII tree lines for root_dir, skipping IGNORE_DIRS."""
    lines = [f"{root_dir.name}/"]
    for current_root, dirs, files in os.walk(root_dir):
        # prune and sort
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        dirs.sort(key=lambda s: s.lower())
        files.sort(key=lambda s: s.lower())

        root_path = Path(current_root)
        if root_path == root_dir:
            rel_parts = []
        else:
            rel_parts = list(root_path.relative_to(root_dir).parts)

        depth = len(rel_parts)

        # Compose prefix with vertical guides for depth-1 levels
        def prefix_for(depth_level: int) -> str:
            # For a clean simple tree we’ll just indent by 4*depth spaces
            return "    " * depth_level

        # List directories
        for i, d in enumerate(dirs):
            is_last_dir = (i == len(dirs) - 1) and (len(files) == 0)
            branch = "└── " if is_last_dir else "├── "
            lines.append(f"{prefix_for(depth)}{branch}{d}/")

        # List files
        for j, f in enumerate(files):
            is_last_file = (j == len(files) - 1)
            branch = "└── " if is_last_file else "├── "
            lines.append(f"{prefix_for(depth)}{branch}{f}")

    return lines


def write_folder_dump(folder: Path, out_file: Path) -> None:
    out_file.parent.mkdir(parents=True, exist_ok=True)
    with out_file.open("w", encoding="utf-8", newline="\r\n") as out:
        # 1) Tree
        out.write(f"# Tree for: {folder}\r\n\r\n")
        for line in build_tree_lines(folder):
            out.write(line + "\r\n")

        # 2) File contents
        out.write("\r\n\r\n# File contents\r\n")
        for current_root, dirs, files in os.walk(folder):
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
            dirs.sort(key=lambda s: s.lower())
            files.sort(key=lambda s: s.lower())

            for f in files:
                path = Path(current_root) / f
                out.write("\r\n" + "=" * 80 + "\r\n")
                out.write(f"PATH: {path}\r\n")
                try:
                    size = path.stat().st_size
                    out.write(f"SIZE: {size} bytes\r\n")
                except Exception:
                    pass
                out.write("-" * 80 + "\r\n")
                out.write(safe_read_text(path) + "\r\n")


def write_root_selected_files(selected_files: list[Path], out_file: Path) -> None:
    out_file.parent.mkdir(parents=True, exist_ok=True)
    with out_file.open("w", encoding="utf-8", newline="\r\n") as out:
        out.write("# Selected root files (content)\r\n")
        for p in selected_files:
            out.write("\r\n" + "=" * 80 + "\r\n")
            out.write(f"PATH: {p}\r\n")
            if not p.exists():
                out.write("[Missing]\r\n")
                continue
            try:
                size = p.stat().st_size
                out.write(f"SIZE: {size} bytes\r\n")
            except Exception:
                pass
            out.write("-" * 80 + "\r\n")
            out.write(safe_read_text(p) + "\r\n")


def main():
    problems = []
    if not SRC_DIR.exists():
        problems.append(f"Missing folder: {SRC_DIR}")
    if not PUBLIC_DIR.exists():
        problems.append(f"Missing folder: {PUBLIC_DIR}")

    if problems:
        print("Warnings:")
        for p in problems:
            print(" - " + p)

    print(f"Writing: {OUT_SRC}")
    write_folder_dump(SRC_DIR, OUT_SRC)

    print(f"Writing: {OUT_PUBLIC}")
    write_folder_dump(PUBLIC_DIR, OUT_PUBLIC)

    print(f"Writing: {OUT_ROOT}")
    write_root_selected_files(ROOT_SELECTED_FILES, OUT_ROOT)

    print("Done.")


if __name__ == "__main__":
    main()
