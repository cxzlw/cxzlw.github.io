if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const n=e=>a(e,r),b={module:{uri:r},exports:s,require:n};i[r]=Promise.all(d.map((e=>b[e]||n(e)))).then((e=>(c(...e),s)))}}define(["./workbox-58282441"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/07/05/trace-of-line-01/index.html",revision:"16f262b28dd524d77a8cf9984d69586a"},{url:"2023/07/05/zhihu-aac-old/index.html",revision:"4effb63bd70aa735db847aff446311e1"},{url:"2023/07/06/zerotier-planet-convert/index.html",revision:"e9ea124ddc3816a2824dae0c61ff69e5"},{url:"2023/07/10/trace-of-line-02/index.html",revision:"69b890c98ddaeafb81f061df65d99bb3"},{url:"2023/08/04/permission-system-design-share/index.html",revision:"3e4e1098dd6c240a02872e4d582bba26"},{url:"2023/08/04/test-latex/index.html",revision:"bd7cb69bc4bc9668b705b12b195e54b2"},{url:"404.html",revision:"76574a7c44c7fc51cc41e1f2989f32e9"},{url:"about/index.html",revision:"47f7b73d69277e4fdcac7911d18b85df"},{url:"archives/2023/07/index.html",revision:"f4a6300899b3192a174f52e6792e7c11"},{url:"archives/2023/08/index.html",revision:"1ed4990ac0fdc0cbab8cc992ab00dc72"},{url:"archives/2023/index.html",revision:"6f858cc0ac256f326752ec240fd5c940"},{url:"archives/index.html",revision:"3baddcc8190fe2eb525a32ac503d26d9"},{url:"baidu_verify_codeva-0rhRRODu4H.html",revision:"242837d47be8b7c244eb3b8bfc38e027"},{url:"categories/index.html",revision:"d9cf92fff99e60355e2192d4f79ea84a"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/main.css",revision:"7d6d29df18411568c1ae622605bc1907"},{url:"icons/128.png",revision:"375571427b866e32e2d7a9525272a488"},{url:"icons/144.png",revision:"a84f4fe235872bb9be14ebc801f5e4f4"},{url:"icons/192.png",revision:"e0236ca23ccfa319f4b9a698e56ab2e2"},{url:"icons/256.png",revision:"20eb0091d61f49caba3cd63c9ac00a7e"},{url:"icons/512.png",revision:"2c8af612559477d53b8e2dbce84b724c"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/image-1.png",revision:"4d772ced566ade339ca6718c7ed38674"},{url:"img/image-2.png",revision:"dcfafd0cc238b0a63a733edd1a70bcfe"},{url:"img/image-3.png",revision:"5ba9885de31a8d1e8df04a1d915b1069"},{url:"img/image-4.png",revision:"3d2983fa8549bb6a93b7b905a6baea9c"},{url:"img/image-5.png",revision:"55692e23130e9504505085798384e43e"},{url:"img/image.png",revision:"18a13cfe951c406bbb4da3a7e7bc8ca2"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"1d9fba42d94fa5e630bfed062a8bf244"},{url:"js/boot.js",revision:"7683fab2fc9d03a3a659aa956b3a54e8"},{url:"js/color-schema.js",revision:"605f587be2ab3d36472bb03ac27ede65"},{url:"js/events.js",revision:"7fa076a71a5559d89af6b0c6dfd3a0d2"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"9dc47a0b7b6bacfd16541c9b2b5b6bc5"},{url:"js/plugins.js",revision:"6c10bee3f659ca91b534bf4a81d62f1e"},{url:"js/utils.js",revision:"f7ce9014de1cd7358eeb3aba81c8efe2"},{url:"links/index.html",revision:"d4d7a01004a55c1837a7f85c8dc5ebde"},{url:"tags/cxzlw/index.html",revision:"1aa2389fcf6b0aedb0b5713131368df4"},{url:"tags/index.html",revision:"e54b95772ec74d3591f5f2bdd7d09305"},{url:"tags/Zerotier/index.html",revision:"438595addf53c9863592eff9657e0d0e"},{url:"tags/反爬/index.html",revision:"f48e356602c710b08058f200c12f1f1e"},{url:"tags/小说/index.html",revision:"0c21302da4e4508a153e36ab7591efe5"},{url:"tags/知乎/index.html",revision:"f332e50dfb9c21caf6532151f03fa13b"},{url:"tags/离谱网文/index.html",revision:"6bdf9d905b275a4817145eb2c1aac997"},{url:"tags/自建Planet/index.html",revision:"46426c0df5e6c6b74266a6f2eef41f3e"},{url:"tags/路过的某个学渣/index.html",revision:"5bac00ff0bf3c331155e8fa96e562946"},{url:"tags/飞石/index.html",revision:"833957a9774a4f5ed488c3feeda00af0"}],{}),e.registerRoute(/^https:\/\/lib\.baomitu\.com\/.*/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https:\/\/at\.alicdn\.com\/.*/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https:\/\/blog\.cxzlw\.top\/.*/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
