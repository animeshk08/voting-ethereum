#!/usr/bin/env bash
sudo kill -9 $(sudo lsof -t -i:8545)
rm -rf build/
