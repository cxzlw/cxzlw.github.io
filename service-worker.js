if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const n=e=>a(e,r),b={module:{uri:r},exports:s,require:n};i[r]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(d(...e),s)))}}define(["./workbox-58282441"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/07/05/trace-of-line-01/index.html",revision:"e8dc6e8cd7b23a54a74adbb2067e0683"},{url:"2023/07/05/zhihu-aac-old/index.html",revision:"c5efb4fd4ca6ff3f4836f6af6591c9dc"},{url:"2023/07/06/zerotier-planet-convert/index.html",revision:"8683325bc20aaf4f20125734908b12c2"},{url:"2023/07/10/trace-of-line-02/index.html",revision:"bf49d82877ae18903e55be76433405e8"},{url:"2023/08/04/permission-system-design-share/index.html",revision:"5d6b94278aad09a0f8d4a93e95960fc7"},{url:"2023/08/04/test-latex/index.html",revision:"6c8984e8c06092aceaabc7a020bff932"},{url:"2023/08/08/python-to-windows-service/index.html",revision:"3e6750cd1f313172987820f0d665eb75"},{url:"404.html",revision:"38b83bd9d834ac8149f55d12f72a5952"},{url:"about/index.html",revision:"bf207f7a0efc923cc431f089968ac4a1"},{url:"archives/2023/07/index.html",revision:"6be4abc8d29ff5c0abd8c890eddaf15b"},{url:"archives/2023/08/index.html",revision:"72380e89f75382da176c02079d0e6cc8"},{url:"archives/2023/index.html",revision:"e2772f5aa94fd9f4f39e68462896e044"},{url:"archives/index.html",revision:"5769e191f4d96ec38e70aaeababb80ce"},{url:"baidu_verify_codeva-0rhRRODu4H.html",revision:"242837d47be8b7c244eb3b8bfc38e027"},{url:"categories/index.html",revision:"c3b017460b0a946c627dce862d938d27"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/main.css",revision:"7d6d29df18411568c1ae622605bc1907"},{url:"icons/128.png",revision:"375571427b866e32e2d7a9525272a488"},{url:"icons/144.png",revision:"a84f4fe235872bb9be14ebc801f5e4f4"},{url:"icons/192.png",revision:"e0236ca23ccfa319f4b9a698e56ab2e2"},{url:"icons/256.png",revision:"20eb0091d61f49caba3cd63c9ac00a7e"},{url:"icons/512.png",revision:"2c8af612559477d53b8e2dbce84b724c"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/image-1.png",revision:"4d772ced566ade339ca6718c7ed38674"},{url:"img/image-2.png",revision:"dcfafd0cc238b0a63a733edd1a70bcfe"},{url:"img/image-3.png",revision:"5ba9885de31a8d1e8df04a1d915b1069"},{url:"img/image-4.png",revision:"3d2983fa8549bb6a93b7b905a6baea9c"},{url:"img/image-5.png",revision:"55692e23130e9504505085798384e43e"},{url:"img/image.png",revision:"18a13cfe951c406bbb4da3a7e7bc8ca2"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"1421aa8cffc1ffeb26f015f90d9c7f08"},{url:"js/boot.js",revision:"7683fab2fc9d03a3a659aa956b3a54e8"},{url:"js/color-schema.js",revision:"605f587be2ab3d36472bb03ac27ede65"},{url:"js/events.js",revision:"7fa076a71a5559d89af6b0c6dfd3a0d2"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"9dc47a0b7b6bacfd16541c9b2b5b6bc5"},{url:"js/plugins.js",revision:"6c10bee3f659ca91b534bf4a81d62f1e"},{url:"js/progressbar_done.js",revision:"bc2f15d100bdd8e7ecbaf2ca670a714f"},{url:"js/utils.js",revision:"f7ce9014de1cd7358eeb3aba81c8efe2"},{url:"links/index.html",revision:"1036b79acbb496c8d80318254116e272"},{url:"tags/cxzlw/index.html",revision:"39bdb311758ae609ed51506cf9058702"},{url:"tags/index.html",revision:"93674b95d74d6d50c7233ce576fc634e"},{url:"tags/Nuitka/index.html",revision:"1c4c5f37152eff36cf5a1369eaefb40f"},{url:"tags/Python/index.html",revision:"cfa3294b16ad018734447ed85ce09669"},{url:"tags/Windows-service/index.html",revision:"2907f4c4a7995dccbc3b6730410edbfc"},{url:"tags/Zerotier/index.html",revision:"c3e3952b7ca2458968cba37189fc43d0"},{url:"tags/反爬/index.html",revision:"19ada05344dc79d1030077b6c6e308ed"},{url:"tags/小说/index.html",revision:"2bdcbb9b7bbcd1af876936965f5571b5"},{url:"tags/权限系统/index.html",revision:"0133efb66a93cba0f9fb195b9724ce2b"},{url:"tags/知乎/index.html",revision:"2da0fc66255a7251f7b6abe56b78e0e9"},{url:"tags/离谱网文/index.html",revision:"4d12145fa5b068da9f4e2a4616dcb131"},{url:"tags/自建-Planet/index.html",revision:"ca256993cf464bdc878e16c56221e457"},{url:"tags/路过的某个学渣/index.html",revision:"96e6ba476e890774b93ae6bb70976170"},{url:"tags/飞石/index.html",revision:"de18f108df661672ff185d9c84351f18"}],{}),e.registerRoute(/^https:\/\/lib\.baomitu\.com\/.*/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com\/.*/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https:\/\/blog\.cxzlw\.top\/.*/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
