# gasr for Japanese on Linux

## usage
1. npm install
2. mpv static/60s.wav
3. ./bin/ecasound -f:16,1,16000 -i alsa -o:stdout | node src/gasr_outer.js

## snapshot

![](./static/2023-07-22-16-49-55.png)