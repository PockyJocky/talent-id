#!/usr/bin/env bash

set -e -u -x

cd talent_id/client
npm install
npm start &
cd talent_id/testing
codeceptjs run