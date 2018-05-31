#!/usr/bin/env bash

set -e -u -x

cd dev/client
npm install
npm test
