if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const b=e=>a(e,r),n={module:{uri:r},exports:s,require:b};i[r]=Promise.all(d.map((e=>n[e]||b(e)))).then((e=>(c(...e),s)))}}define(["./workbox-58282441"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/07/05/trace-of-line-01/index.html",revision:"d9ccfff3f45ed5a8be16e7a09aabe4de"},{url:"2023/07/05/zhihu-aac-old/index.html",revision:"bf3643edd20b7b5a73344f57c5942dae"},{url:"2023/07/06/zerotier-planet-convert/index.html",revision:"133595cfc2e4e8f54ff7344ddbde9780"},{url:"2023/07/10/trace-of-line-02/index.html",revision:"ade7d448c8f0cc71fcaab4dc4a32d2ea"},{url:"2023/08/04/permission-system-design-share/index.html",revision:"18ce946169fbe91743d45e3734002c7e"},{url:"2023/08/04/test-latex/index.html",revision:"7a15b2bd4b441a83a436faf3e93afa0b"},{url:"404.html",revision:"38b83bd9d834ac8149f55d12f72a5952"},{url:"about/index.html",revision:"77909276536a7ea6198da417f6780110"},{url:"archives/2023/07/index.html",revision:"2068090a2586b97b7ada6fd52cad6e5c"},{url:"archives/2023/08/index.html",revision:"a2c0f37a8707ea7653d4654d3c0f4c32"},{url:"archives/2023/index.html",revision:"76d61387382704eab15bd089eee29bac"},{url:"archives/index.html",revision:"8923705a77ee2aed763e098684817568"},{url:"baidu_verify_codeva-0rhRRODu4H.html",revision:"242837d47be8b7c244eb3b8bfc38e027"},{url:"categories/index.html",revision:"c3b017460b0a946c627dce862d938d27"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/main.css",revision:"7d6d29df18411568c1ae622605bc1907"},{url:"icons/128.png",revision:"375571427b866e32e2d7a9525272a488"},{url:"icons/144.png",revision:"a84f4fe235872bb9be14ebc801f5e4f4"},{url:"icons/192.png",revision:"e0236ca23ccfa319f4b9a698e56ab2e2"},{url:"icons/256.png",revision:"20eb0091d61f49caba3cd63c9ac00a7e"},{url:"icons/512.png",revision:"2c8af612559477d53b8e2dbce84b724c"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/image-1.png",revision:"4d772ced566ade339ca6718c7ed38674"},{url:"img/image-2.png",revision:"dcfafd0cc238b0a63a733edd1a70bcfe"},{url:"img/image-3.png",revision:"5ba9885de31a8d1e8df04a1d915b1069"},{url:"img/image-4.png",revision:"3d2983fa8549bb6a93b7b905a6baea9c"},{url:"img/image-5.png",revision:"55692e23130e9504505085798384e43e"},{url:"img/image.png",revision:"18a13cfe951c406bbb4da3a7e7bc8ca2"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"dadc0319a2de549dc6ce7668b05294b7"},{url:"js/boot.js",revision:"7683fab2fc9d03a3a659aa956b3a54e8"},{url:"js/color-schema.js",revision:"605f587be2ab3d36472bb03ac27ede65"},{url:"js/events.js",revision:"7fa076a71a5559d89af6b0c6dfd3a0d2"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"9dc47a0b7b6bacfd16541c9b2b5b6bc5"},{url:"js/plugins.js",revision:"6c10bee3f659ca91b534bf4a81d62f1e"},{url:"js/progressbar_done.js",revision:"bc2f15d100bdd8e7ecbaf2ca670a714f"},{url:"js/utils.js",revision:"f7ce9014de1cd7358eeb3aba81c8efe2"},{url:"links/index.html",revision:"1036b79acbb496c8d80318254116e272"},{url:"tags/cxzlw/index.html",revision:"730d507e3637a19c13b6e6b98d64f045"},{url:"tags/index.html",revision:"ec8991bb93e2e0a60b621e7b1e0d1274"},{url:"tags/Zerotier/index.html",revision:"c3e3952b7ca2458968cba37189fc43d0"},{url:"tags/反爬/index.html",revision:"19ada05344dc79d1030077b6c6e308ed"},{url:"tags/小说/index.html",revision:"2bdcbb9b7bbcd1af876936965f5571b5"},{url:"tags/知乎/index.html",revision:"2da0fc66255a7251f7b6abe56b78e0e9"},{url:"tags/离谱网文/index.html",revision:"4d12145fa5b068da9f4e2a4616dcb131"},{url:"tags/自建Planet/index.html",revision:"b3d47cbafd2ba9617be4fcb78c45c8db"},{url:"tags/路过的某个学渣/index.html",revision:"96e6ba476e890774b93ae6bb70976170"},{url:"tags/飞石/index.html",revision:"de18f108df661672ff185d9c84351f18"}],{}),e.registerRoute(/^https:\/\/lib\.baomitu\.com\/.*/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com\/.*/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https:\/\/blog\.cxzlw\.top\/.*/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
