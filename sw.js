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

const urls = [{"revision":"bcf8a7da3c6399bc674173437b9f0942","url":"2023/07/05/zhihu-aac-old/index.html"},{"revision":"42f1fe07fe4ab4e5336a63a184963625","url":"2023/07/06/zerotier-planet-convert/index.html"},{"revision":"5b8e825a4c001a7609a8461c6bf2269f","url":"2023/08/04/permission-system-design-share/index.html"},{"revision":"85a06ae5769eb3d1891904214d05dfb2","url":"2023/08/31/cell-structure/index.html"},{"revision":"03e6f4e2ac175ea13151f9078ffc3b8c","url":"2023/10/03/busuanzi-bug/index.html"},{"revision":"09cf67359d44ed949725eee906ac3e94","url":"2024/07/11/json-format/index.html"},{"revision":"5e8d6541f0011642c2d6bfd776bd304d","url":"2024/09/06/htb-rsaiseasy/index.html"},{"revision":"f7033892fdf25ac0146778087841ed82","url":"404.html"},{"revision":"be36db58b9e3e326806f9d847d28535b","url":"about/index.html"},{"revision":"f54940120af5d9509700e5fd5736bca5","url":"archives/2023/07/index.html"},{"revision":"6a9b66ba952e5bfe6bac20640461d37f","url":"archives/2023/08/index.html"},{"revision":"e6f88fd2543ea9fc9df68de72025abd2","url":"archives/2023/10/index.html"},{"revision":"072fec79e9ddbbca45fdde4d75f728db","url":"archives/2023/index.html"},{"revision":"a1657cff9c3feeb1b01fd08feba3d5c0","url":"archives/2024/07/index.html"},{"revision":"68d87c495914b9ca546844923cb59267","url":"archives/2024/09/index.html"},{"revision":"c3fb2bb9456d10626b8b36f0f6838693","url":"archives/2024/index.html"},{"revision":"c95e8d7d08357928297b821389cef064","url":"archives/index.html"},{"revision":"242837d47be8b7c244eb3b8bfc38e027","url":"baidu_verify_codeva-0rhRRODu4H.html"},{"revision":"62b328640af6af42478c54f90e3b245b","url":"BingSiteAuth.xml"},{"revision":"5ce280d86637a41c57fdc51fd463237a","url":"css/gitalk.css"},{"revision":"5efb63f1d0dfda0ed2a9388e0f97b029","url":"css/highlight-dark.css"},{"revision":"b922bdf053b930ff85184f5d60ab4614","url":"css/highlight.css"},{"revision":"3f40ad491da0542334723509372dec47","url":"css/main.css"},{"revision":"f3e367bfc8e0a47e31fbffd49717fe40","url":"css/transbg.css"},{"revision":"71cb12d00310a7852b853744c41d9a34","url":"favicon.ico"},{"revision":"ea11c930cb20962f72c29f0e2931bfbd","url":"img/animal.jpg"},{"revision":"2d9aa61e592b26e2745f3c161c48c397","url":"img/avatar.png"},{"revision":"beb05a6b5b201044b6d80cacdf29f905","url":"img/default.png"},{"revision":"5603316bb5bc54a9d5cab14fddd4c510","url":"img/fluid.png"},{"revision":"4d772ced566ade339ca6718c7ed38674","url":"img/image-1.png"},{"revision":"da72f7f7ab077659b259ff719bdd69cf","url":"img/image-10.png"},{"revision":"79c537611a196ae3d28a9d8e3ab2cc9b","url":"img/image-11.png"},{"revision":"992207d6ac18d3d30fa8bb8170f3d872","url":"img/image-12.png"},{"revision":"137ea73c630245985c0948597c940e3d","url":"img/image-13.png"},{"revision":"14a1ff2a02af5876f5747408ed899168","url":"img/image-14.png"},{"revision":"e9053a1c78a56adba4f44a1f2d853db6","url":"img/image-15.png"},{"revision":"ce12369f62702b5f2a0132757efe8ec3","url":"img/image-16.png"},{"revision":"f21d5dfc06c85736fb9730f3bd3a82c3","url":"img/image-17.png"},{"revision":"db98ae6079ec85d5109465b234acf650","url":"img/image-18.png"},{"revision":"adbffd666c7b027db214bf68b916ccb0","url":"img/image-19.png"},{"revision":"dcfafd0cc238b0a63a733edd1a70bcfe","url":"img/image-2.png"},{"revision":"5ba9885de31a8d1e8df04a1d915b1069","url":"img/image-3.png"},{"revision":"3d2983fa8549bb6a93b7b905a6baea9c","url":"img/image-4.png"},{"revision":"55692e23130e9504505085798384e43e","url":"img/image-5.png"},{"revision":"88c5e4fa4dec4b514a5d0d53b72d75c7","url":"img/image-6.png"},{"revision":"e52801ec8fe9abad24f24c8d96402fb3","url":"img/image-7.png"},{"revision":"3f940453e65f4635917f162b9a1d1432","url":"img/image-8.png"},{"revision":"47c43a3db8dca516e147f6f38324c1eb","url":"img/image-9.png"},{"revision":"18a13cfe951c406bbb4da3a7e7bc8ca2","url":"img/image.png"},{"revision":"a88a6883f6f27cd7b95a3ae753f91a40","url":"img/img-20231004-chrome-busuanzi.png"},{"revision":"f6f63a28b80c91ec49153f37df82f42d","url":"img/img-20231004-safari-busuanzi.png"},{"revision":"15657539044e11a19a1c6c7e3073d1b3","url":"img/loading.gif"},{"revision":"1b164cde9b70a49e2f3831d211be9f66","url":"img/plant.jpg"},{"revision":"b769e8dfde5660239317ed60758dba13","url":"img/police_beian.png"},{"revision":"74669a1c8e0c10b60ff13c2430adae44","url":"img/prokaryotic.jpg"},{"revision":"9453b8c10d996ba4719a8a82c87499bf","url":"index.html"},{"revision":"7683fab2fc9d03a3a659aa956b3a54e8","url":"js/boot.js"},{"revision":"20dbc6cdfd5e041dcb6e1a6224b77da1","url":"js/color-schema.js"},{"revision":"ca8f7191123f224f46f93c90eb186d73","url":"js/events.js"},{"revision":"a62feede0189fe66290e8959528b674f","url":"js/image-ng.js"},{"revision":"fab30a410e5f490fce3f977a6936a714","url":"js/img-lazyload.js"},{"revision":"fb4a815ccdb5d851d00561dbb62251c4","url":"js/leancloud.js"},{"revision":"9dc47a0b7b6bacfd16541c9b2b5b6bc5","url":"js/local-search.js"},{"revision":"6c10bee3f659ca91b534bf4a81d62f1e","url":"js/plugins.js"},{"revision":"bc2f15d100bdd8e7ecbaf2ca670a714f","url":"js/progressbar-done.js"},{"revision":"8a36a7c42b0d15eb06cbdef6c03dd803","url":"js/statistics.js"},{"revision":"c5ea612e1b9a9a905ee8ad080813b2ce","url":"js/umami-view.js"},{"revision":"f7ce9014de1cd7358eeb3aba81c8efe2","url":"js/utils.js"},{"revision":"02a2cf6e54125c645a89af94adf463be","url":"links/index.html"},{"revision":"36ccdbfa9c5e57e7baa9574ba5c52c4b","url":"local-search.xml"},{"revision":"8b69a6a5897b1964222d9a839d5dc5d9","url":"sitemap.xml"},{"revision":"ffc102a390823518756160c7d47667cd","url":"tags/busuanzi/index.html"},{"revision":"3304f45df866519f79ffad90434686c3","url":"tags/Crypto/index.html"},{"revision":"eb7230bb848a211dd354a68ec65113d2","url":"tags/CTF/index.html"},{"revision":"02179e1a96ae5168308a4ef462db4f7b","url":"tags/cxzlw/index.html"},{"revision":"fae903a67ab188059b06b8ba9c3f7373","url":"tags/Fluid/index.html"},{"revision":"ffbce9b89bdc80cb45dcf1bf71dd9a43","url":"tags/HackTheBox/index.html"},{"revision":"de7dc01790eb7ac5d406b9cec48900bd","url":"tags/Hexo/index.html"},{"revision":"274164404fa2f73e52cace37394c3fe2","url":"tags/index.html"},{"revision":"8415d6a446163f39cf00827a524abcc4","url":"tags/Python/index.html"},{"revision":"c6eb9455c55afce5a854498276e14621","url":"tags/RSA/index.html"},{"revision":"a8151220ec1e98268e426b28d199a138","url":"tags/Writeup/index.html"},{"revision":"d4cb7031e07c4a65cd23e3ee4da6f5e9","url":"tags/Zerotier/index.html"},{"revision":"4ac438b803065e9fda4c9f81025b5236","url":"tags/不蒜子/index.html"},{"revision":"e36a0bbd7b87e4dd0432f1098bb0b2a9","url":"tags/反爬/index.html"},{"revision":"1acfda8f872e0abea8c87ef263efdf12","url":"tags/权限系统/index.html"},{"revision":"9aa076c4075860d07cdc00d57dbaa646","url":"tags/爬虫/index.html"},{"revision":"c33251cd231f1d09e44afd67e73a4729","url":"tags/知乎/index.html"},{"revision":"abc4d611ca561b4e97fd806896b4463c","url":"tags/自建-Planet/index.html"},{"revision":"1f9354c3505ade6f63ffb1d893d07010","url":"tags/逆向/index.html"},{"revision":"decd4b8f6af7e1c9d8ae97249ac786fa","url":"xml/local-search.xml"}].map(element => element["url"]);
const index_urls = urls.filter(url => url.endsWith("index.html")).map(url => url.substring(0, url.length - 10)); 

warmStrategyCache({urls:urls, strategy:staleWhileRevalidate}); 
warmStrategyCache({urls:index_urls, strategy:networkFirst}); 

skipWaiting()
clientsClaim()
