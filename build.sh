#!/bin/bash
set -e

# build SRH image
srh/build.sh 

# build ai chatbot image
docker compose build

##
