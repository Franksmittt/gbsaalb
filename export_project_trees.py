# export_project_trees.py
# -*- coding: utf-8 -*-
"""
Exports a single text file to the project root named 'project_summary.txt'.

This file contains:
  1) The full tree and contents of the /src directory.
  2) The full tree and contents of the /public directory.
  3) The contents of selected files from the project root.

Safe for Windows paths (raw strings), skips obvious binaries and very large files.
"""

import os
from pathlib import Path

# --- PATHS (raw strings to avoid \U Unicode escape issues) ---
PROJECT_ROOT = Path(r"C:\Users\shop\Desktop\global-batteries-alberton")
SRC_DIR = PROJECT_ROOT / "src"
PUBLIC_DIR = PROJECT_ROOT / "public"

# The single output file for the combined project summary
OUT_FILE = PROJECT_ROOT / "project_summary.txt"

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

    # Try common encodings first
    for enc in ("utf-8", "utf-8-sig", "cp1252", "latin-1"):
        try:
            with path.open("r", encoding=enc, errors="strict") as f:
                return f.read()
        except Exception:
            continue

    # Fallback to a lossy read if all else fails
    try:
        with path.open("r", encoding="utf-8", errors="replace") as f:
            return f.read()
    except Exception as e:
        return f"[Error reading file: {e}]"


def build_tree_lines(root_dir: Path) -> list[str]:
    """Return ASCII tree lines for root_dir, skipping IGNORE_DIRS."""
    lines = [f"{root_dir.name}/"]
    for current_root, dirs, files in os.walk(root_dir):
        # Prune and sort directories and files
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        dirs.sort(key=lambda s: s.lower())
        files.sort(key=lambda s: s.lower())

        root_path = Path(current_root)
        if root_path == root_dir:
            rel_parts = []
        else:
            rel_parts = list(root_path.relative_to(root_dir).parts)

        depth = len(rel_parts)

        def prefix_for(depth_level: int) -> str:
            # Indent by 4 spaces per depth level for a clean tree
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


def append_folder_dump(folder: Path, out_stream) -> None:
    """Appends the tree and contents of a folder to the given file stream."""
    # 1) Write the directory tree structure
    out_stream.write(f"# Tree for: {folder}\r\n\r\n")
    for line in build_tree_lines(folder):
        out_stream.write(line + "\r\n")

    # 2) Write the contents of each file
    out_stream.write("\r\n\r\n# File contents\r\n")
    for current_root, dirs, files in os.walk(folder):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        dirs.sort(key=lambda s: s.lower())
        files.sort(key=lambda s: s.lower())

        for f in files:
            path = Path(current_root) / f
            out_stream.write("\r\n" + "=" * 80 + "\r\n")
            out_stream.write(f"PATH: {path}\r\n")
            try:
                size = path.stat().st_size
                out_stream.write(f"SIZE: {size} bytes\r\n")
            except Exception:
                pass  # Ignore if stat fails
            out_stream.write("-" * 80 + "\r\n")
            out_stream.write(safe_read_text(path) + "\r\n")


def append_root_selected_files(selected_files: list[Path], out_stream) -> None:
    """Appends the contents of selected root files to the given file stream."""
    out_stream.write("# Selected root files (content)\r\n")
    for p in selected_files:
        out_stream.write("\r\n" + "=" * 80 + "\r\n")
        out_stream.write(f"PATH: {p}\r\n")
        if not p.exists():
            out_stream.write("[Missing]\r\n")
            continue
        try:
            size = p.stat().st_size
            out_stream.write(f"SIZE: {size} bytes\r\n")
        except Exception:
            pass  # Ignore if stat fails
        out_stream.write("-" * 80 + "\r\n")
        out_stream.write(safe_read_text(p) + "\r\n")


def main():
    """Main function to orchestrate the project export."""
    problems = []
    if not SRC_DIR.exists():
        problems.append(f"Missing folder: {SRC_DIR}")
    if not PUBLIC_DIR.exists():
        problems.append(f"Missing folder: {PUBLIC_DIR}")

    if problems:
        print("Warnings:")
        for p in problems:
            print(f" - {p}")

    print(f"Writing combined project summary to: {OUT_FILE}")
    
    # Ensure the parent directory for the output file exists
    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    # Open the single output file and write all sections to it
    with OUT_FILE.open("w", encoding="utf-8", newline="\r\n") as out:
        # Section 1: Source Directory
        print("Processing /src directory...")
        append_folder_dump(SRC_DIR, out)

        # Section 2: Public Directory
        print("Processing /public directory...")
        out.write("\r\n\r\n" + "#" * 80 + "\r\n")
        out.write("### END OF SRC / START OF PUBLIC ###\r\n")
        out.write("#" * 80 + "\r\n\r\n")
        append_folder_dump(PUBLIC_DIR, out)

        # Section 3: Root Files
        print("Processing root configuration files...")
        out.write("\r\n\r\n" + "#" * 80 + "\r\n")
        out.write("### END OF PUBLIC / START OF ROOT FILES ###\r\n")
        out.write("#" * 80 + "\r\n\r\n")
        append_root_selected_files(ROOT_SELECTED_FILES, out)

    print("Done.")


if __name__ == "__main__":
    main()
