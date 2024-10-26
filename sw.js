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

const urls = [{"revision":"9b22d6d03e47b7f9a5d7c570148bae66","url":"2023/07/05/zhihu-aac-old/index.html"},{"revision":"9cb08dfbc763c50442877bdf3c59740f","url":"2023/07/06/zerotier-planet-convert/index.html"},{"revision":"8c326ecf21f26c5ceafc86af0846f05b","url":"2023/08/04/permission-system-design-share/index.html"},{"revision":"c66dd2c72b1b4e0aee7f3af2dcd379fc","url":"2023/08/31/cell-structure/index.html"},{"revision":"c165e4ecd82a48a0ba21f827ee867a5b","url":"2023/10/03/busuanzi-bug/index.html"},{"revision":"b76e0caae2f7fcf524e22027a8eb65db","url":"2024/07/11/json-format/index.html"},{"revision":"6309d3e0ff4cf6b3a8f146043197c49a","url":"2024/09/06/htb-rsaiseasy/index.html"},{"revision":"c4cb36af288a59600a0148b97fa8ba05","url":"2024/10/22/jetbrains-202423/index.html"},{"revision":"3ae539b73373e9f607fd3459384a44d9","url":"404.html"},{"revision":"b60b126a9a18d50de9cc0b42bd96540b","url":"about/index.html"},{"revision":"d88e9e2e06f9db3b532ad0eddf89140c","url":"archives/2023/07/index.html"},{"revision":"abc1e94b4a82dbf2ed0301ffaf6e4a3d","url":"archives/2023/08/index.html"},{"revision":"77624179c790f6167a628dbd6a12ba3f","url":"archives/2023/10/index.html"},{"revision":"ffee51f0ebff930f6f220d959e1d9084","url":"archives/2023/index.html"},{"revision":"1c81d5de4977d596d66e9b283a5c058f","url":"archives/2024/07/index.html"},{"revision":"41d43a3b6b189e6fd0ce8ab4a47a94f8","url":"archives/2024/09/index.html"},{"revision":"134efd75e53be5142d17ae208f310175","url":"archives/2024/10/index.html"},{"revision":"c38faed6050a0b23c39d761feae4b305","url":"archives/2024/index.html"},{"revision":"4d9576a8df2ebd24df4b4dedab1bdea8","url":"archives/index.html"},{"revision":"242837d47be8b7c244eb3b8bfc38e027","url":"baidu_verify_codeva-0rhRRODu4H.html"},{"revision":"62b328640af6af42478c54f90e3b245b","url":"BingSiteAuth.xml"},{"revision":"58b204564f78a5b53e686aecb1251d68","url":"css/custom.css"},{"revision":"5ce280d86637a41c57fdc51fd463237a","url":"css/gitalk.css"},{"revision":"5efb63f1d0dfda0ed2a9388e0f97b029","url":"css/highlight-dark.css"},{"revision":"b922bdf053b930ff85184f5d60ab4614","url":"css/highlight.css"},{"revision":"d12c1662a51ca28291f46b906ec1f825","url":"css/main.css"},{"revision":"cf4a66f578f018d39f73676ff265dfb5","url":"css/transbg.css"},{"revision":"71cb12d00310a7852b853744c41d9a34","url":"favicon.ico"},{"revision":"ea11c930cb20962f72c29f0e2931bfbd","url":"img/animal.jpg"},{"revision":"2d9aa61e592b26e2745f3c161c48c397","url":"img/avatar.png"},{"revision":"beb05a6b5b201044b6d80cacdf29f905","url":"img/default.png"},{"revision":"5603316bb5bc54a9d5cab14fddd4c510","url":"img/fluid.png"},{"revision":"4d772ced566ade339ca6718c7ed38674","url":"img/image-1.png"},{"revision":"da72f7f7ab077659b259ff719bdd69cf","url":"img/image-10.png"},{"revision":"79c537611a196ae3d28a9d8e3ab2cc9b","url":"img/image-11.png"},{"revision":"992207d6ac18d3d30fa8bb8170f3d872","url":"img/image-12.png"},{"revision":"137ea73c630245985c0948597c940e3d","url":"img/image-13.png"},{"revision":"14a1ff2a02af5876f5747408ed899168","url":"img/image-14.png"},{"revision":"e9053a1c78a56adba4f44a1f2d853db6","url":"img/image-15.png"},{"revision":"ce12369f62702b5f2a0132757efe8ec3","url":"img/image-16.png"},{"revision":"f21d5dfc06c85736fb9730f3bd3a82c3","url":"img/image-17.png"},{"revision":"db98ae6079ec85d5109465b234acf650","url":"img/image-18.png"},{"revision":"adbffd666c7b027db214bf68b916ccb0","url":"img/image-19.png"},{"revision":"dcfafd0cc238b0a63a733edd1a70bcfe","url":"img/image-2.png"},{"revision":"a9f3f14b38d37ef5188f174360252cf2","url":"img/image-20.png"},{"revision":"20c0e2dea1ac2f8981580371ab291dcd","url":"img/image-21.png"},{"revision":"747e962e9fe0f84a7b11c6807f35bff2","url":"img/image-22.png"},{"revision":"2246b552616dcc328a53cd151d7f925e","url":"img/image-23.png"},{"revision":"20e4a34be4e20f2b7ab301273c877930","url":"img/image-24.png"},{"revision":"87a60ec3ad94aa34042adaf4d040e2cc","url":"img/image-25.png"},{"revision":"d0e5221c38ddce53198adf6e9bc2af81","url":"img/image-26.png"},{"revision":"49be186bbe7b39b973001179db92a01c","url":"img/image-27.png"},{"revision":"704cf8ae121192771df62fde0f5d713d","url":"img/image-28.png"},{"revision":"5ba9885de31a8d1e8df04a1d915b1069","url":"img/image-3.png"},{"revision":"a7ccb4c45029a7dd412c588a8d7cf27f","url":"img/image-30.png"},{"revision":"3d2983fa8549bb6a93b7b905a6baea9c","url":"img/image-4.png"},{"revision":"55692e23130e9504505085798384e43e","url":"img/image-5.png"},{"revision":"88c5e4fa4dec4b514a5d0d53b72d75c7","url":"img/image-6.png"},{"revision":"e52801ec8fe9abad24f24c8d96402fb3","url":"img/image-7.png"},{"revision":"3f940453e65f4635917f162b9a1d1432","url":"img/image-8.png"},{"revision":"47c43a3db8dca516e147f6f38324c1eb","url":"img/image-9.png"},{"revision":"a88a6883f6f27cd7b95a3ae753f91a40","url":"img/img-20231004-chrome-busuanzi.png"},{"revision":"f6f63a28b80c91ec49153f37df82f42d","url":"img/img-20231004-safari-busuanzi.png"},{"revision":"15657539044e11a19a1c6c7e3073d1b3","url":"img/loading.gif"},{"revision":"1b164cde9b70a49e2f3831d211be9f66","url":"img/plant.jpg"},{"revision":"b769e8dfde5660239317ed60758dba13","url":"img/police_beian.png"},{"revision":"74669a1c8e0c10b60ff13c2430adae44","url":"img/prokaryotic.jpg"},{"revision":"239cfc41c170dbf4b8609adba863b5ac","url":"index.html"},{"revision":"7683fab2fc9d03a3a659aa956b3a54e8","url":"js/boot.js"},{"revision":"20dbc6cdfd5e041dcb6e1a6224b77da1","url":"js/color-schema.js"},{"revision":"ca8f7191123f224f46f93c90eb186d73","url":"js/events.js"},{"revision":"a62feede0189fe66290e8959528b674f","url":"js/image-ng.js"},{"revision":"fab30a410e5f490fce3f977a6936a714","url":"js/img-lazyload.js"},{"revision":"fb4a815ccdb5d851d00561dbb62251c4","url":"js/leancloud.js"},{"revision":"9dc47a0b7b6bacfd16541c9b2b5b6bc5","url":"js/local-search.js"},{"revision":"6c10bee3f659ca91b534bf4a81d62f1e","url":"js/plugins.js"},{"revision":"bc2f15d100bdd8e7ecbaf2ca670a714f","url":"js/progressbar-done.js"},{"revision":"9f1a1e6018111c353d39a35e49bb2594","url":"js/statistics.js"},{"revision":"c5ea612e1b9a9a905ee8ad080813b2ce","url":"js/umami-view.js"},{"revision":"f7ce9014de1cd7358eeb3aba81c8efe2","url":"js/utils.js"},{"revision":"8c0d68157fd292e6872581b74d6cb1cf","url":"links/index.html"},{"revision":"bcf3a7131b654d2450a1fdae685b50c0","url":"local-search.xml"},{"revision":"45387f679795210b6dfa2e48c068c21b","url":"sitemap.xml"},{"revision":"d2aa84b4cc99db4441f7a68fb88d97e1","url":"tags/busuanzi/index.html"},{"revision":"94b8464dbf380aabd3865bc37c7812b1","url":"tags/Crypto/index.html"},{"revision":"d4bd84e9b6f8acf3d9a38193120a356c","url":"tags/CTF/index.html"},{"revision":"78f1f0656a555eb1e0f5bf76137580e4","url":"tags/cxzlw/index.html"},{"revision":"f4c2ddd95eff235ebfac4147f3cccc6b","url":"tags/Fluid/index.html"},{"revision":"5f20bcb306876f1d7d9ce3c85e1bc522","url":"tags/HackTheBox/index.html"},{"revision":"a3af76445b09529cdb19a5620d38bff3","url":"tags/Hexo/index.html"},{"revision":"b046f68a95961047e500f505bdbf3eee","url":"tags/index.html"},{"revision":"212dc0608536b04277a73943663c2db6","url":"tags/Python/index.html"},{"revision":"2b3bf37fcdfca67beb3162110abd83ba","url":"tags/RSA/index.html"},{"revision":"14b255cd653b325e040c565b9926d54c","url":"tags/Writeup/index.html"},{"revision":"20505dafac7e9edf09a9cded7ceb60f5","url":"tags/Zerotier/index.html"},{"revision":"7ded05f35100a0b5058b9c0f441f3b66","url":"tags/不蒜子/index.html"},{"revision":"182d08ae4e437b8c1ef3c89285eb591a","url":"tags/反爬/index.html"},{"revision":"5696b5b8721b4b4f619d003ad21d2e16","url":"tags/权限系统/index.html"},{"revision":"4ffb9983113f55f612b89b66eaae3d45","url":"tags/爬虫/index.html"},{"revision":"7783b0398e3191e8b6924aee220eabda","url":"tags/知乎/index.html"},{"revision":"797cb09ae8c3b665b5a749ff0832467b","url":"tags/自建-Planet/index.html"},{"revision":"2257017a33d231bd8db9600290ee9090","url":"tags/逆向/index.html"},{"revision":"decd4b8f6af7e1c9d8ae97249ac786fa","url":"xml/local-search.xml"}].map(element => element["url"]);
const index_urls = urls.filter(url => url.endsWith("index.html")).map(url => url.substring(0, url.length - 10)); 

warmStrategyCache({urls:urls, strategy:networkFirst}); 
warmStrategyCache({urls:index_urls, strategy:networkFirst}); 

skipWaiting()
clientsClaim()
