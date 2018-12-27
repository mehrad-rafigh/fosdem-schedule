#!/usr/bin/env bash

set -euo
set -x

declare -r GIT_TAG=$(git describe --tags $(git rev-list --tags --max-count=1))

docker build -t mehrad-rafigh/fosdem19:${GIT_TAG} -f Dockerfile.fosdem19 .
