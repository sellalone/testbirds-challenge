#!/bin/sh

export NODE_ENV=production

webpack --config=./config/webpack/webpack.prod.js

cp build/index.html build/404.html