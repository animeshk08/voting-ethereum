#!/usr/bin/env bash
ganache-cli --networkId 7 &
rm -rf build/
truffle migrate --network ganache