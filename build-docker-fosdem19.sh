#!/usr/bin/env bash

set -euo
set -x
# GIT_TAG=$(git describe --tags $(git rev-list --tags --max-count=1))
docker build -t mehradrafigh/fosdem-2019-schedule:latest -f Dockerfile.fosdem19 .
docker push mehradrafigh/fosdem-2019-schedule:latest
