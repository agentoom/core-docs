#!/usr/bin/env bash
set -e

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET_REPO="git@github.com:agentoom/core-docs.git"
TEMP_DIR="/tmp/core-docs-push-$(date +%s)"
COMMIT_MSG="${1:-docs: update documentation, guides and assets}"

echo "==> Cloning $TARGET_REPO into $TEMP_DIR..."
git clone --depth 1 "$TARGET_REPO" "$TEMP_DIR"

echo "==> Syncing files from $REPO_DIR..."
rsync -av --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='.astro' \
  "$REPO_DIR/" "$TEMP_DIR/"

cd "$TEMP_DIR"
git add -A

if git diff-index --quiet HEAD --; then
  echo "==> Remote repository is already up to date. Nothing to push."
else
  git commit -m "$COMMIT_MSG"
  git push origin main
  echo "==> Successfully pushed updates to $TARGET_REPO (main branch)!"
fi

rm -rf "$TEMP_DIR"
echo "==> Completed successfully."
