#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules talent_id
cd talent_id/client && npm test
