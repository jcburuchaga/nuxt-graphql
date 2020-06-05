#!/usr/bin/env bash

#get name of the current directory
NAME=$(basename "$PWD")

#run the docker
docker run -p 3000:3000 $NAME