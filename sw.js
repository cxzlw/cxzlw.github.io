// import {precacheAndRoute} from 'workbox-precaching';

importScripts(
    'https://lib.baomitu.com/workbox-sw/7.0.0/workbox-sw.min.js'
);

const {StaleWhileRevalidate, NetworkFirst} = workbox.strategies; 
const {registerRoute} = workbox.routing; 
const {warmStrategyCache} = workbox.recipes;
const {clientsClaim} = workbox.core;

const staleWhileRevalidate = new StaleWhileRevalidate(); 
const networkFirst = new NetworkFirst(); 

registerRoute(/^https:\/\/lib\.baomitu\.com\/.*/, staleWhileRevalidate, "GET"); 
registerRoute(/^https:\/\/at\.alicdn\.com\/.*/, staleWhileRevalidate, "GET"); 
registerRoute(/^https:\/\/v1\.hitokoto\.cn\/.*/, staleWhileRevalidate, "GET"); 
registerRoute(/^https:\/\/blog\.cxzlw\.top\/.*/, networkFirst, "GET"); 
registerRoute(/^http:\/\/localhost:8000\/.*\.html/, networkFirst, "GET"); 
// registerRoute(/^http:\/\/localhost:8000\/.*/, staleWhileRevalidate, "GET"); 

const urls = [{"revision":"fd6edf49e95e7261af8f94277d0a95f6","url":"2023/07/05/trace-of-line-01/index.html"},{"revision":"15451e9c7484e7b0c8b728cd8e5ae1a0","url":"2023/07/05/zhihu-aac-old/index.html"},{"revision":"dd0109dc1e45af3570dac1752f87c8a7","url":"2023/07/06/zerotier-planet-convert/index.html"},{"revision":"ab7d237ed6229a271f3e4bb012ace4cf","url":"2023/07/10/trace-of-line-02/index.html"},{"revision":"bcb59058fb8cf22da4c18d86009cfbe2","url":"2023/08/04/permission-system-design-share/index.html"},{"revision":"95a84f17443d64b678d17431612cfdf4","url":"2023/08/04/test-latex/index.html"},{"revision":"1813cd6416d6f52f254e2a6d508d50a6","url":"2023/08/31/cell-structure/index.html"},{"revision":"5012864bf26d1ca6ef8439491e2c9af6","url":"404.html"},{"revision":"a90310dfa44eb34e367f323d5c611ee4","url":"about/index.html"},{"revision":"2fe3e6581efae8e9e24bd4df34064ec0","url":"archives/2023/07/index.html"},{"revision":"b512c48b5a6a6247bfb6a7825ee1e971","url":"archives/2023/08/index.html"},{"revision":"1b6177863747118f6691e7c32830b4ba","url":"archives/2023/index.html"},{"revision":"0082863683b7debb4f39b43346d721da","url":"archives/index.html"},{"revision":"242837d47be8b7c244eb3b8bfc38e027","url":"baidu_verify_codeva-0rhRRODu4H.html"},{"revision":"5622aa23aa7f4d1ed62a9424d9ec66fe","url":"categories/index.html"},{"revision":"5ce280d86637a41c57fdc51fd463237a","url":"css/gitalk.css"},{"revision":"be3af4b8abf2074e66acb737867c43dc","url":"css/highlight-dark.css"},{"revision":"fdd56de5edd1e833674574fdc74bbfe7","url":"css/highlight.css"},{"revision":"7d6d29df18411568c1ae622605bc1907","url":"css/main.css"},{"revision":"71cb12d00310a7852b853744c41d9a34","url":"favicon.ico"},{"revision":"2d9aa61e592b26e2745f3c161c48c397","url":"img/avatar.png"},{"revision":"beb05a6b5b201044b6d80cacdf29f905","url":"img/default.png"},{"revision":"5603316bb5bc54a9d5cab14fddd4c510","url":"img/fluid.png"},{"revision":"4d772ced566ade339ca6718c7ed38674","url":"img/image-1.png"},{"revision":"dcfafd0cc238b0a63a733edd1a70bcfe","url":"img/image-2.png"},{"revision":"5ba9885de31a8d1e8df04a1d915b1069","url":"img/image-3.png"},{"revision":"3d2983fa8549bb6a93b7b905a6baea9c","url":"img/image-4.png"},{"revision":"55692e23130e9504505085798384e43e","url":"img/image-5.png"},{"revision":"18a13cfe951c406bbb4da3a7e7bc8ca2","url":"img/image.png"},{"revision":"15657539044e11a19a1c6c7e3073d1b3","url":"img/loading.gif"},{"revision":"b769e8dfde5660239317ed60758dba13","url":"img/police_beian.png"},{"revision":"e9deed8c49a006748f68fe0631d9bd0c","url":"index.html"},{"revision":"7683fab2fc9d03a3a659aa956b3a54e8","url":"js/boot.js"},{"revision":"605f587be2ab3d36472bb03ac27ede65","url":"js/color-schema.js"},{"revision":"7fa076a71a5559d89af6b0c6dfd3a0d2","url":"js/events.js"},{"revision":"fab30a410e5f490fce3f977a6936a714","url":"js/img-lazyload.js"},{"revision":"fb4a815ccdb5d851d00561dbb62251c4","url":"js/leancloud.js"},{"revision":"9dc47a0b7b6bacfd16541c9b2b5b6bc5","url":"js/local-search.js"},{"revision":"6c10bee3f659ca91b534bf4a81d62f1e","url":"js/plugins.js"},{"revision":"bc2f15d100bdd8e7ecbaf2ca670a714f","url":"js/progressbar_done.js"},{"revision":"f7ce9014de1cd7358eeb3aba81c8efe2","url":"js/utils.js"},{"revision":"46c8c37021139acd1fe28e7eac496b86","url":"links/index.html"},{"revision":"fc02c267c88bc02c67b152b274490892","url":"tags/cxzlw/index.html"},{"revision":"602e157df7edb46d5a62da059f1b2e3a","url":"tags/index.html"},{"revision":"ac3a3512658056fa9acb4791d3c6e104","url":"tags/Python/index.html"},{"revision":"3592f5dae386e45aba0aa7dfa8eda6b9","url":"tags/Zerotier/index.html"},{"revision":"73e61ce776c42cc01ea342ba20c760c6","url":"tags/反爬/index.html"},{"revision":"f0144c7af123078899c97deb2dbdd5dc","url":"tags/小说/index.html"},{"revision":"81e178d872a3f25e38a5405e46c7b922","url":"tags/权限系统/index.html"},{"revision":"5ddd12ded26d2b5631fcc29ff1605902","url":"tags/知乎/index.html"},{"revision":"cb56ebfcf788e9707272e85aa1915ae7","url":"tags/离谱网文/index.html"},{"revision":"655974d360e9d2d5636bdca761fabc92","url":"tags/自建-Planet/index.html"},{"revision":"0a152327fbfbf20499413a1ef68e8608","url":"tags/路过的某个学渣/index.html"},{"revision":"5bed3c2a233408a3763eae2021cf1133","url":"tags/飞石/index.html"}].map(element => element["url"]);

warmStrategyCache({urls:urls, strategy:staleWhileRevalidate}); 

skipWaiting()
clientsClaim()
