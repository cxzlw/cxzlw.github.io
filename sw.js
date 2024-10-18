// import {precacheAndRoute} from 'workbox-precaching';

importScripts(
    'https://unpkg.com/workbox-sw@7.1.0/build/workbox-sw.js'
);

const {StaleWhileRevalidate, NetworkFirst, CacheFirst} = workbox.strategies; 
const {registerRoute} = workbox.routing; 
const {warmStrategyCache} = workbox.recipes;
const {clientsClaim} = workbox.core;

const staleWhileRevalidate = new StaleWhileRevalidate(); 
const networkFirst = new NetworkFirst(); 
const cacheFirst = new CacheFirst(); 

registerRoute(/^https:\/\/lib\.baomitu\.com\/.*/, cacheFirst, "GET"); 
registerRoute(/^https:\/\/at\.alicdn\.com\/.*/, cacheFirst, "GET"); 
registerRoute(/^https:\/\/unpkg\.com\/.*/, cacheFirst, "GET"); 

// cdnjs 由于不透明响应需要使用 staleWhileRevalidate
registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/.*/, staleWhileRevalidate, "GET"); 

registerRoute(/^https:\/\/v1\.hitokoto\.cn\/.*/, staleWhileRevalidate, "GET"); 

registerRoute(/^https:\/\/blog\.cxzlw\.top\/.*/, networkFirst, "GET"); 
registerRoute(/^https:\/\/blog-api\.cxzlw\.top\/.*/, networkFirst, "GET"); 
registerRoute(/^http:\/\/localhost:8000\/.*\.html/, networkFirst, "GET"); 
// registerRoute(/^http:\/\/localhost:8000\/.*/, staleWhileRevalidate, "GET"); 

const urls = [{"revision":"26e70f2da82a9a369c283e00d162e8bd","url":"2023/07/05/zhihu-aac-old/index.html"},{"revision":"1f10775256c29cd6f80482f9ba04b866","url":"2023/07/06/zerotier-planet-convert/index.html"},{"revision":"c349ce3fe1bb1a61e2dd2b3fdd067fe5","url":"2023/08/04/permission-system-design-share/index.html"},{"revision":"83918ae3283692d4ef1053c73b70c073","url":"2023/08/31/cell-structure/index.html"},{"revision":"4668ff44a02743842ed833f6887c3c5c","url":"2023/10/03/busuanzi-bug/index.html"},{"revision":"cd59b44642fe046b65f02c9644fc9693","url":"2024/07/11/json-format/index.html"},{"revision":"a196dd453157ac3bf2bbea1a88f2ed4b","url":"2024/09/06/htb-rsaiseasy/index.html"},{"revision":"3ae539b73373e9f607fd3459384a44d9","url":"404.html"},{"revision":"b836243ff6c7bec106c9ffec14508503","url":"about/index.html"},{"revision":"85595ca9cf406136f046d3ea1afe0f6f","url":"archives/2023/07/index.html"},{"revision":"16c43decc07a66db2967ac236ed63a9a","url":"archives/2023/08/index.html"},{"revision":"181bc64cc007428ef387779dd3aa1612","url":"archives/2023/10/index.html"},{"revision":"3460ecfeb40cb3f1efade1454da486e7","url":"archives/2023/index.html"},{"revision":"c7da101135cf69cee691acd594e7b204","url":"archives/2024/07/index.html"},{"revision":"0f7b4f7e096b4fe5d53f08a06462d64a","url":"archives/2024/09/index.html"},{"revision":"ab00768bd8aff1f9c0dfe8546fccf023","url":"archives/2024/index.html"},{"revision":"b8ce9f4d9e2c898c71a3eaa1fbf8ceb0","url":"archives/index.html"},{"revision":"242837d47be8b7c244eb3b8bfc38e027","url":"baidu_verify_codeva-0rhRRODu4H.html"},{"revision":"62b328640af6af42478c54f90e3b245b","url":"BingSiteAuth.xml"},{"revision":"58b204564f78a5b53e686aecb1251d68","url":"css/custom.css"},{"revision":"5ce280d86637a41c57fdc51fd463237a","url":"css/gitalk.css"},{"revision":"5efb63f1d0dfda0ed2a9388e0f97b029","url":"css/highlight-dark.css"},{"revision":"b922bdf053b930ff85184f5d60ab4614","url":"css/highlight.css"},{"revision":"d12c1662a51ca28291f46b906ec1f825","url":"css/main.css"},{"revision":"cf4a66f578f018d39f73676ff265dfb5","url":"css/transbg.css"},{"revision":"71cb12d00310a7852b853744c41d9a34","url":"favicon.ico"},{"revision":"ea11c930cb20962f72c29f0e2931bfbd","url":"img/animal.jpg"},{"revision":"2d9aa61e592b26e2745f3c161c48c397","url":"img/avatar.png"},{"revision":"beb05a6b5b201044b6d80cacdf29f905","url":"img/default.png"},{"revision":"5603316bb5bc54a9d5cab14fddd4c510","url":"img/fluid.png"},{"revision":"4d772ced566ade339ca6718c7ed38674","url":"img/image-1.png"},{"revision":"da72f7f7ab077659b259ff719bdd69cf","url":"img/image-10.png"},{"revision":"79c537611a196ae3d28a9d8e3ab2cc9b","url":"img/image-11.png"},{"revision":"992207d6ac18d3d30fa8bb8170f3d872","url":"img/image-12.png"},{"revision":"137ea73c630245985c0948597c940e3d","url":"img/image-13.png"},{"revision":"14a1ff2a02af5876f5747408ed899168","url":"img/image-14.png"},{"revision":"e9053a1c78a56adba4f44a1f2d853db6","url":"img/image-15.png"},{"revision":"ce12369f62702b5f2a0132757efe8ec3","url":"img/image-16.png"},{"revision":"f21d5dfc06c85736fb9730f3bd3a82c3","url":"img/image-17.png"},{"revision":"db98ae6079ec85d5109465b234acf650","url":"img/image-18.png"},{"revision":"adbffd666c7b027db214bf68b916ccb0","url":"img/image-19.png"},{"revision":"dcfafd0cc238b0a63a733edd1a70bcfe","url":"img/image-2.png"},{"revision":"5ba9885de31a8d1e8df04a1d915b1069","url":"img/image-3.png"},{"revision":"3d2983fa8549bb6a93b7b905a6baea9c","url":"img/image-4.png"},{"revision":"55692e23130e9504505085798384e43e","url":"img/image-5.png"},{"revision":"88c5e4fa4dec4b514a5d0d53b72d75c7","url":"img/image-6.png"},{"revision":"e52801ec8fe9abad24f24c8d96402fb3","url":"img/image-7.png"},{"revision":"3f940453e65f4635917f162b9a1d1432","url":"img/image-8.png"},{"revision":"47c43a3db8dca516e147f6f38324c1eb","url":"img/image-9.png"},{"revision":"a88a6883f6f27cd7b95a3ae753f91a40","url":"img/img-20231004-chrome-busuanzi.png"},{"revision":"f6f63a28b80c91ec49153f37df82f42d","url":"img/img-20231004-safari-busuanzi.png"},{"revision":"15657539044e11a19a1c6c7e3073d1b3","url":"img/loading.gif"},{"revision":"1b164cde9b70a49e2f3831d211be9f66","url":"img/plant.jpg"},{"revision":"b769e8dfde5660239317ed60758dba13","url":"img/police_beian.png"},{"revision":"74669a1c8e0c10b60ff13c2430adae44","url":"img/prokaryotic.jpg"},{"revision":"b142ec44dddb56671ef1162af7fc7d39","url":"index.html"},{"revision":"7683fab2fc9d03a3a659aa956b3a54e8","url":"js/boot.js"},{"revision":"20dbc6cdfd5e041dcb6e1a6224b77da1","url":"js/color-schema.js"},{"revision":"ca8f7191123f224f46f93c90eb186d73","url":"js/events.js"},{"revision":"a62feede0189fe66290e8959528b674f","url":"js/image-ng.js"},{"revision":"fab30a410e5f490fce3f977a6936a714","url":"js/img-lazyload.js"},{"revision":"fb4a815ccdb5d851d00561dbb62251c4","url":"js/leancloud.js"},{"revision":"9dc47a0b7b6bacfd16541c9b2b5b6bc5","url":"js/local-search.js"},{"revision":"6c10bee3f659ca91b534bf4a81d62f1e","url":"js/plugins.js"},{"revision":"bc2f15d100bdd8e7ecbaf2ca670a714f","url":"js/progressbar-done.js"},{"revision":"9f1a1e6018111c353d39a35e49bb2594","url":"js/statistics.js"},{"revision":"c5ea612e1b9a9a905ee8ad080813b2ce","url":"js/umami-view.js"},{"revision":"f7ce9014de1cd7358eeb3aba81c8efe2","url":"js/utils.js"},{"revision":"8c0d68157fd292e6872581b74d6cb1cf","url":"links/index.html"},{"revision":"277f6576ee3d1f0ae4497c902da5d9d5","url":"local-search.xml"},{"revision":"7428dd92b3c35ea0e52d65266caf369b","url":"sitemap.xml"},{"revision":"d2aa84b4cc99db4441f7a68fb88d97e1","url":"tags/busuanzi/index.html"},{"revision":"94b8464dbf380aabd3865bc37c7812b1","url":"tags/Crypto/index.html"},{"revision":"d4bd84e9b6f8acf3d9a38193120a356c","url":"tags/CTF/index.html"},{"revision":"78f1f0656a555eb1e0f5bf76137580e4","url":"tags/cxzlw/index.html"},{"revision":"f4c2ddd95eff235ebfac4147f3cccc6b","url":"tags/Fluid/index.html"},{"revision":"5f20bcb306876f1d7d9ce3c85e1bc522","url":"tags/HackTheBox/index.html"},{"revision":"a3af76445b09529cdb19a5620d38bff3","url":"tags/Hexo/index.html"},{"revision":"b046f68a95961047e500f505bdbf3eee","url":"tags/index.html"},{"revision":"212dc0608536b04277a73943663c2db6","url":"tags/Python/index.html"},{"revision":"2b3bf37fcdfca67beb3162110abd83ba","url":"tags/RSA/index.html"},{"revision":"14b255cd653b325e040c565b9926d54c","url":"tags/Writeup/index.html"},{"revision":"20505dafac7e9edf09a9cded7ceb60f5","url":"tags/Zerotier/index.html"},{"revision":"7ded05f35100a0b5058b9c0f441f3b66","url":"tags/不蒜子/index.html"},{"revision":"182d08ae4e437b8c1ef3c89285eb591a","url":"tags/反爬/index.html"},{"revision":"5696b5b8721b4b4f619d003ad21d2e16","url":"tags/权限系统/index.html"},{"revision":"4ffb9983113f55f612b89b66eaae3d45","url":"tags/爬虫/index.html"},{"revision":"7783b0398e3191e8b6924aee220eabda","url":"tags/知乎/index.html"},{"revision":"797cb09ae8c3b665b5a749ff0832467b","url":"tags/自建-Planet/index.html"},{"revision":"2257017a33d231bd8db9600290ee9090","url":"tags/逆向/index.html"},{"revision":"decd4b8f6af7e1c9d8ae97249ac786fa","url":"xml/local-search.xml"}].map(element => element["url"]);
const index_urls = urls.filter(url => url.endsWith("index.html")).map(url => url.substring(0, url.length - 10)); 

warmStrategyCache({urls:urls, strategy:networkFirst}); 
warmStrategyCache({urls:index_urls, strategy:networkFirst}); 

skipWaiting()
clientsClaim()
