#!/bin/bash
# Buld SRH image

set -eux

REPO_ROOT="$(git rev-parse --show-toplevel)"
SRH_ROOT="serverless-redis-http"
REPO_URL="https://github.com/hiett/serverless-redis-http.git"

##
cd "$REPO_ROOT/srh"

if [ ! -d "$SRH_ROOT" ]; then
  git clone "$REPO_URL" "$SRH_ROOT"
else
  echo "directory already exists."
fi

cd "$SRH_ROOT"

git pull

docker build -t local/srh:latest .

##
