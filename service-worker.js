if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const n=e=>a(e,r),b={module:{uri:r},exports:d,require:n};i[r]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(s(...e),d)))}}define(["./workbox-2214a077"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/main.css",revision:"7d6d29df18411568c1ae622605bc1907"},{url:"icons/128.png",revision:"375571427b866e32e2d7a9525272a488"},{url:"icons/144.png",revision:"a84f4fe235872bb9be14ebc801f5e4f4"},{url:"icons/192.png",revision:"e0236ca23ccfa319f4b9a698e56ab2e2"},{url:"icons/256.png",revision:"20eb0091d61f49caba3cd63c9ac00a7e"},{url:"icons/512.png",revision:"2c8af612559477d53b8e2dbce84b724c"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/image-1.png",revision:"4d772ced566ade339ca6718c7ed38674"},{url:"img/image-2.png",revision:"dcfafd0cc238b0a63a733edd1a70bcfe"},{url:"img/image-3.png",revision:"5ba9885de31a8d1e8df04a1d915b1069"},{url:"img/image-4.png",revision:"3d2983fa8549bb6a93b7b905a6baea9c"},{url:"img/image-5.png",revision:"55692e23130e9504505085798384e43e"},{url:"img/image.png",revision:"18a13cfe951c406bbb4da3a7e7bc8ca2"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"js/boot.js",revision:"7683fab2fc9d03a3a659aa956b3a54e8"},{url:"js/color-schema.js",revision:"605f587be2ab3d36472bb03ac27ede65"},{url:"js/events.js",revision:"7fa076a71a5559d89af6b0c6dfd3a0d2"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"9dc47a0b7b6bacfd16541c9b2b5b6bc5"},{url:"js/plugins.js",revision:"6c10bee3f659ca91b534bf4a81d62f1e"},{url:"js/progressbar_done.js",revision:"bc2f15d100bdd8e7ecbaf2ca670a714f"},{url:"js/utils.js",revision:"f7ce9014de1cd7358eeb3aba81c8efe2"}],{}),e.registerRoute(/^https:\/\/lib\.baomitu\.com\/.*/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com\/.*/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https:\/\/blog\.cxzlw\.top\/.*/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
