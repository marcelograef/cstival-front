if(!self.define){let e,c={};const a=(a,b)=>(a=new URL(a+".js",b).href,c[a]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=c,document.head.appendChild(e)}else e=a,importScripts(a),c()})).then((()=>{let e=c[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(b,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(c[d])return;let s={};const n=e=>a(e,d),f={module:{uri:d},exports:s,require:n};c[d]=Promise.all(b.map((e=>f[e]||n(e)))).then((e=>(i(...e),s)))}}define(["./workbox-3e98e12a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"20eb4f55200cfcd685ca.ico",revision:"fd73a6eb26a08ee46e7fd3cc34e7f6bf"},{url:"assets/favicon.ico",revision:"fd73a6eb26a08ee46e7fd3cc34e7f6bf"},{url:"assets/icon-512x512.png",revision:"41bd3e26fbd328a4359edc60dad2fa9c"},{url:"assets/locale/de.json",revision:"0aabe7375d630a94392a6abceb47e593"},{url:"assets/locale/translations.json",revision:"7ed71c2d45faaf1292fca64aba111ff5"},{url:"assets/Logo-transparente.svg",revision:"cc94d5ce4c98c311334bd796185c81d8"},{url:"assets/react.svg",revision:"9f2dfaf04b82c3c172671986cf81e0b4"},{url:"assets/Solo-Letras.svg",revision:"2e527ec4235471aa9ccc4c691896ad22"},{url:"assets/SoloLogo.png",revision:"3562530284b92e7f3d20cab7953372b1"},{url:"assets/SoloLogo.svg",revision:"cd816a3157038eecbccfae2b078c0f3e"},{url:"icon_120x120.9ce4fa726e9da8c6b296d6d05f0f9270.png",revision:"9ce4fa726e9da8c6b296d6d05f0f9270"},{url:"icon_128x128.4953e29df46fb8fa960b8e528bcbc36a.png",revision:"4953e29df46fb8fa960b8e528bcbc36a"},{url:"icon_144x144.d3a84a28d10c7970b9de58dab9df3a38.png",revision:"d3a84a28d10c7970b9de58dab9df3a38"},{url:"icon_152x152.e088e866c8474fd66397521b3a14886d.png",revision:"e088e866c8474fd66397521b3a14886d"},{url:"icon_167x167.1c391c117523c79cea288c9ad2372ff5.png",revision:"1c391c117523c79cea288c9ad2372ff5"},{url:"icon_180x180.896b17e643e41e045380a5b77bc2d83b.png",revision:"896b17e643e41e045380a5b77bc2d83b"},{url:"icon_192x192.1a355a8df4937c782336dbd70cbfad80.png",revision:"1a355a8df4937c782336dbd70cbfad80"},{url:"icon_384x384.2b05e075b208cc858e86ebfb4a2a74bc.png",revision:"2b05e075b208cc858e86ebfb4a2a74bc"},{url:"icon_512x512.ccd1a1c2ab613768719d82cebaf05f6a.png",revision:"ccd1a1c2ab613768719d82cebaf05f6a"},{url:"icon_72x72.accb330e03d6190096eda5e8aacbdc7c.png",revision:"accb330e03d6190096eda5e8aacbdc7c"},{url:"icon_96x96.c5bbfa8507548d3f1312f001a805b0f0.png",revision:"c5bbfa8507548d3f1312f001a805b0f0"},{url:"loadable-stats.json",revision:"be851acfa04812f9d6a3a09316754275"},{url:"main.3f730c64e8078b61b74c.bundle.js",revision:"ad14ef50c88421eed83aa7e2b9f99be5"},{url:"main.4f131827e5037a0e574e.css",revision:"673524b95e3beba37db1274238e975a0"},{url:"manifest.e90d67713176566310bad28b3ecab1cc.json",revision:"e90d67713176566310bad28b3ecab1cc"},{url:"runtime~main.64f7824a08751c9bbeca.bundle.js",revision:"51b9960dd9f8d748a01e1f9812e08526"}],{})}));
