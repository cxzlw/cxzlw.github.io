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

const urls = [{"revision":"5833fb83888fcbf01295b05fe2fcb0e1","url":"2023/07/05/zhihu-aac-old/index.html"},{"revision":"dce22296c194979dda1888e655171dc4","url":"2023/07/06/zerotier-planet-convert/index.html"},{"revision":"aa8a6e268e531eff8aed4bb03196074b","url":"2023/08/04/permission-system-design-share/index.html"},{"revision":"6a1252da0a8a1b33eaf31b04356fa624","url":"2023/08/31/cell-structure/index.html"},{"revision":"5d635dbde3e647384b7db59e270a4cb1","url":"2023/10/03/busuanzi-bug/index.html"},{"revision":"7a52877c8d6fb878f39c004965726a0e","url":"2024/07/11/json-format/index.html"},{"revision":"463e80c60458e8bb91e625a5a08dba32","url":"2024/09/06/htb-rsaiseasy/index.html"},{"revision":"588103b5ef9b240b76384765cb106167","url":"404.html"},{"revision":"4d77d86c5cb24a6ea9762eb473ac9d05","url":"about/index.html"},{"revision":"32cc56cc0b9309a5b484b4475180e39b","url":"archives/2023/07/index.html"},{"revision":"a6c3610b4cd2bd4eacaad96fcbcf0e34","url":"archives/2023/08/index.html"},{"revision":"a7346dc2bedb9e38bc0667a4a7ee0081","url":"archives/2023/10/index.html"},{"revision":"cf98e48a2f9148087a38e539a2873761","url":"archives/2023/index.html"},{"revision":"3f39322e3da7a0991b7ad19ccaa53be3","url":"archives/2024/07/index.html"},{"revision":"fcc837e9518d615a3e272d98f0c1e9ce","url":"archives/2024/09/index.html"},{"revision":"ff3861348949e7d5001c246fa34f087a","url":"archives/2024/index.html"},{"revision":"085a32f27932da6cbe0bac700e855c1c","url":"archives/index.html"},{"revision":"242837d47be8b7c244eb3b8bfc38e027","url":"baidu_verify_codeva-0rhRRODu4H.html"},{"revision":"62b328640af6af42478c54f90e3b245b","url":"BingSiteAuth.xml"},{"revision":"35ef0ce323b8dc24630b7424696f879a","url":"categories/index.html"},{"revision":"5ce280d86637a41c57fdc51fd463237a","url":"css/gitalk.css"},{"revision":"5efb63f1d0dfda0ed2a9388e0f97b029","url":"css/highlight-dark.css"},{"revision":"b922bdf053b930ff85184f5d60ab4614","url":"css/highlight.css"},{"revision":"d543d34baf355f2632c4f10b1bda4991","url":"css/main.css"},{"revision":"71cb12d00310a7852b853744c41d9a34","url":"favicon.ico"},{"revision":"ea11c930cb20962f72c29f0e2931bfbd","url":"img/animal.jpg"},{"revision":"2d9aa61e592b26e2745f3c161c48c397","url":"img/avatar.png"},{"revision":"beb05a6b5b201044b6d80cacdf29f905","url":"img/default.png"},{"revision":"5603316bb5bc54a9d5cab14fddd4c510","url":"img/fluid.png"},{"revision":"4d772ced566ade339ca6718c7ed38674","url":"img/image-1.png"},{"revision":"da72f7f7ab077659b259ff719bdd69cf","url":"img/image-10.png"},{"revision":"79c537611a196ae3d28a9d8e3ab2cc9b","url":"img/image-11.png"},{"revision":"992207d6ac18d3d30fa8bb8170f3d872","url":"img/image-12.png"},{"revision":"137ea73c630245985c0948597c940e3d","url":"img/image-13.png"},{"revision":"14a1ff2a02af5876f5747408ed899168","url":"img/image-14.png"},{"revision":"e9053a1c78a56adba4f44a1f2d853db6","url":"img/image-15.png"},{"revision":"ce12369f62702b5f2a0132757efe8ec3","url":"img/image-16.png"},{"revision":"f21d5dfc06c85736fb9730f3bd3a82c3","url":"img/image-17.png"},{"revision":"db98ae6079ec85d5109465b234acf650","url":"img/image-18.png"},{"revision":"adbffd666c7b027db214bf68b916ccb0","url":"img/image-19.png"},{"revision":"dcfafd0cc238b0a63a733edd1a70bcfe","url":"img/image-2.png"},{"revision":"5ba9885de31a8d1e8df04a1d915b1069","url":"img/image-3.png"},{"revision":"3d2983fa8549bb6a93b7b905a6baea9c","url":"img/image-4.png"},{"revision":"55692e23130e9504505085798384e43e","url":"img/image-5.png"},{"revision":"88c5e4fa4dec4b514a5d0d53b72d75c7","url":"img/image-6.png"},{"revision":"e52801ec8fe9abad24f24c8d96402fb3","url":"img/image-7.png"},{"revision":"3f940453e65f4635917f162b9a1d1432","url":"img/image-8.png"},{"revision":"47c43a3db8dca516e147f6f38324c1eb","url":"img/image-9.png"},{"revision":"18a13cfe951c406bbb4da3a7e7bc8ca2","url":"img/image.png"},{"revision":"a88a6883f6f27cd7b95a3ae753f91a40","url":"img/img-20231004-chrome-busuanzi.png"},{"revision":"f6f63a28b80c91ec49153f37df82f42d","url":"img/img-20231004-safari-busuanzi.png"},{"revision":"15657539044e11a19a1c6c7e3073d1b3","url":"img/loading.gif"},{"revision":"1b164cde9b70a49e2f3831d211be9f66","url":"img/plant.jpg"},{"revision":"b769e8dfde5660239317ed60758dba13","url":"img/police_beian.png"},{"revision":"74669a1c8e0c10b60ff13c2430adae44","url":"img/prokaryotic.jpg"},{"revision":"b3f192bfcaf3f1ecbef84e50647699b6","url":"index.html"},{"revision":"7683fab2fc9d03a3a659aa956b3a54e8","url":"js/boot.js"},{"revision":"20dbc6cdfd5e041dcb6e1a6224b77da1","url":"js/color-schema.js"},{"revision":"ca8f7191123f224f46f93c90eb186d73","url":"js/events.js"},{"revision":"a62feede0189fe66290e8959528b674f","url":"js/image-ng.js"},{"revision":"fab30a410e5f490fce3f977a6936a714","url":"js/img-lazyload.js"},{"revision":"fb4a815ccdb5d851d00561dbb62251c4","url":"js/leancloud.js"},{"revision":"9dc47a0b7b6bacfd16541c9b2b5b6bc5","url":"js/local-search.js"},{"revision":"6c10bee3f659ca91b534bf4a81d62f1e","url":"js/plugins.js"},{"revision":"bc2f15d100bdd8e7ecbaf2ca670a714f","url":"js/progressbar-done.js"},{"revision":"8a36a7c42b0d15eb06cbdef6c03dd803","url":"js/statistics.js"},{"revision":"c5ea612e1b9a9a905ee8ad080813b2ce","url":"js/umami-view.js"},{"revision":"f7ce9014de1cd7358eeb3aba81c8efe2","url":"js/utils.js"},{"revision":"a23b37da5201c785a30bb7ead90db1e7","url":"links/index.html"},{"revision":"36ccdbfa9c5e57e7baa9574ba5c52c4b","url":"local-search.xml"},{"revision":"07ec70183bf2c3f1bf64d841c23bf5ca","url":"sitemap.xml"},{"revision":"277d0a5d13d14a73990a133213b8d495","url":"tags/busuanzi/index.html"},{"revision":"5ef3ead0baa5821dde8f0cc70dc3253f","url":"tags/Crypto/index.html"},{"revision":"8c45c553ba3cac0c1e8091850cfe4d4d","url":"tags/CTF/index.html"},{"revision":"58d829f87501b3f89cef2a7b23fd3ba9","url":"tags/cxzlw/index.html"},{"revision":"5fa28921567b86812ad80bae526eba39","url":"tags/Fluid/index.html"},{"revision":"c99754d6329fec5ce323f20bf4af0ceb","url":"tags/HackTheBox/index.html"},{"revision":"60093b9b58fd3e5bcb6e8289804f9a8d","url":"tags/Hexo/index.html"},{"revision":"0cf4dad62a4aac176f09b26cc2e2b9db","url":"tags/index.html"},{"revision":"2f6b923bbcee1f84478ba83459bf3a26","url":"tags/Python/index.html"},{"revision":"41e264f2bf1e48ebb415889e11061c29","url":"tags/RSA/index.html"},{"revision":"afd46adb9ac85e23f2a1d18c9e7e81b7","url":"tags/Writeup/index.html"},{"revision":"199b3b2c11ba56974639c81cb86bfc6f","url":"tags/Zerotier/index.html"},{"revision":"08af0e0057ea32dea12aa055e7572ffd","url":"tags/不蒜子/index.html"},{"revision":"0512ea3a31942c4348c96c0fd288b100","url":"tags/反爬/index.html"},{"revision":"7f80a1b189abcc5204d93df856e2abf2","url":"tags/权限系统/index.html"},{"revision":"3ea9b42ade339047b5b1ebe28c1d99d4","url":"tags/爬虫/index.html"},{"revision":"bce1424bb1ac0de4f574ed94273c196a","url":"tags/知乎/index.html"},{"revision":"5829a4eca195f77daa8e823b080d2ceb","url":"tags/自建-Planet/index.html"},{"revision":"92c35109d5cc6abc97327fa8dd37d9df","url":"tags/逆向/index.html"},{"revision":"decd4b8f6af7e1c9d8ae97249ac786fa","url":"xml/local-search.xml"}].map(element => element["url"]);
const index_urls = urls.filter(url => url.endsWith("index.html")).map(url => url.substring(0, url.length - 10)); 

warmStrategyCache({urls:urls, strategy:staleWhileRevalidate}); 
warmStrategyCache({urls:index_urls, strategy:networkFirst}); 

skipWaiting()
clientsClaim()
