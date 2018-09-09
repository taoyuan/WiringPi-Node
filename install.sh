#!/bin/bash

rm ./install.log 2>/dev/null 1>&2

echo "Building wirio ... "
node-gyp clean 2>&1 | tee -a ./install.log
node-gyp configure build 2>&1 | tee -a ./install.log
