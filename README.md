# gasr for Japanese on Linux

## usage
1. make
2. npm install
3. mpv static/60s.wav
4. ./bin/ecasound -f:16,1,16000 -i alsa -o:stdout | node src/gasr_outer.js

## snapshot

![](./static/2023-07-22-16-49-55.png)