#!/usr/bin/env bash

set -e -u -x

cd talent_id/testing
npm install
npm run
codeceptjs run