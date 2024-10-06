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

const urls = [{"revision":"23f45e0348fa239899e908f6f9adbea4","url":"2023/07/05/zhihu-aac-old/index.html"},{"revision":"8ff856d7f31dfe6a19b7ecea3d08d527","url":"2023/07/06/zerotier-planet-convert/index.html"},{"revision":"18c0232cc2896822cd96ae324084d114","url":"2023/08/04/permission-system-design-share/index.html"},{"revision":"2be64175b5a6379c3fbd0e858e0b4205","url":"2023/08/31/cell-structure/index.html"},{"revision":"f8eae161bb260ec9ef803526d1caf743","url":"2023/10/03/busuanzi-bug/index.html"},{"revision":"e35210bccbb9b97b5cc26032f8689ad9","url":"2024/07/11/json-format/index.html"},{"revision":"ca3e89b3d30504d369e1a0f61044523f","url":"2024/09/06/htb-rsaiseasy/index.html"},{"revision":"a1cc13a2869969583f95fc16bc962a53","url":"404.html"},{"revision":"0066f2773395f1ffa30f8f3ca6a3f99e","url":"about/index.html"},{"revision":"9d70c665640ca8f53979d38ab83f0fdb","url":"archives/2023/07/index.html"},{"revision":"b6c5e3c01867e2d968739c29f046d09f","url":"archives/2023/08/index.html"},{"revision":"961f5ac1b0bd3fbf084aa01baa95d64c","url":"archives/2023/10/index.html"},{"revision":"66f327690492b0befde4aac47bbd94ef","url":"archives/2023/index.html"},{"revision":"281d1b3f0857dd0d06601fcc787bd73b","url":"archives/2024/07/index.html"},{"revision":"9a1a0853c1ac3014052772e87029e7b1","url":"archives/2024/09/index.html"},{"revision":"0265dfecee86d19555dee043b77445e7","url":"archives/2024/index.html"},{"revision":"6fa748ec96d8c9344712f28f867f3c60","url":"archives/index.html"},{"revision":"242837d47be8b7c244eb3b8bfc38e027","url":"baidu_verify_codeva-0rhRRODu4H.html"},{"revision":"62b328640af6af42478c54f90e3b245b","url":"BingSiteAuth.xml"},{"revision":"5ce280d86637a41c57fdc51fd463237a","url":"css/gitalk.css"},{"revision":"5efb63f1d0dfda0ed2a9388e0f97b029","url":"css/highlight-dark.css"},{"revision":"b922bdf053b930ff85184f5d60ab4614","url":"css/highlight.css"},{"revision":"d12c1662a51ca28291f46b906ec1f825","url":"css/main.css"},{"revision":"cf4a66f578f018d39f73676ff265dfb5","url":"css/transbg.css"},{"revision":"71cb12d00310a7852b853744c41d9a34","url":"favicon.ico"},{"revision":"ea11c930cb20962f72c29f0e2931bfbd","url":"img/animal.jpg"},{"revision":"2d9aa61e592b26e2745f3c161c48c397","url":"img/avatar.png"},{"revision":"beb05a6b5b201044b6d80cacdf29f905","url":"img/default.png"},{"revision":"5603316bb5bc54a9d5cab14fddd4c510","url":"img/fluid.png"},{"revision":"4d772ced566ade339ca6718c7ed38674","url":"img/image-1.png"},{"revision":"da72f7f7ab077659b259ff719bdd69cf","url":"img/image-10.png"},{"revision":"79c537611a196ae3d28a9d8e3ab2cc9b","url":"img/image-11.png"},{"revision":"992207d6ac18d3d30fa8bb8170f3d872","url":"img/image-12.png"},{"revision":"137ea73c630245985c0948597c940e3d","url":"img/image-13.png"},{"revision":"14a1ff2a02af5876f5747408ed899168","url":"img/image-14.png"},{"revision":"e9053a1c78a56adba4f44a1f2d853db6","url":"img/image-15.png"},{"revision":"ce12369f62702b5f2a0132757efe8ec3","url":"img/image-16.png"},{"revision":"f21d5dfc06c85736fb9730f3bd3a82c3","url":"img/image-17.png"},{"revision":"db98ae6079ec85d5109465b234acf650","url":"img/image-18.png"},{"revision":"adbffd666c7b027db214bf68b916ccb0","url":"img/image-19.png"},{"revision":"dcfafd0cc238b0a63a733edd1a70bcfe","url":"img/image-2.png"},{"revision":"5ba9885de31a8d1e8df04a1d915b1069","url":"img/image-3.png"},{"revision":"3d2983fa8549bb6a93b7b905a6baea9c","url":"img/image-4.png"},{"revision":"55692e23130e9504505085798384e43e","url":"img/image-5.png"},{"revision":"88c5e4fa4dec4b514a5d0d53b72d75c7","url":"img/image-6.png"},{"revision":"e52801ec8fe9abad24f24c8d96402fb3","url":"img/image-7.png"},{"revision":"3f940453e65f4635917f162b9a1d1432","url":"img/image-8.png"},{"revision":"47c43a3db8dca516e147f6f38324c1eb","url":"img/image-9.png"},{"revision":"18a13cfe951c406bbb4da3a7e7bc8ca2","url":"img/image.png"},{"revision":"a88a6883f6f27cd7b95a3ae753f91a40","url":"img/img-20231004-chrome-busuanzi.png"},{"revision":"f6f63a28b80c91ec49153f37df82f42d","url":"img/img-20231004-safari-busuanzi.png"},{"revision":"15657539044e11a19a1c6c7e3073d1b3","url":"img/loading.gif"},{"revision":"1b164cde9b70a49e2f3831d211be9f66","url":"img/plant.jpg"},{"revision":"b769e8dfde5660239317ed60758dba13","url":"img/police_beian.png"},{"revision":"74669a1c8e0c10b60ff13c2430adae44","url":"img/prokaryotic.jpg"},{"revision":"64e98c58d08d45cac4d831028076c6c6","url":"index.html"},{"revision":"7683fab2fc9d03a3a659aa956b3a54e8","url":"js/boot.js"},{"revision":"20dbc6cdfd5e041dcb6e1a6224b77da1","url":"js/color-schema.js"},{"revision":"ca8f7191123f224f46f93c90eb186d73","url":"js/events.js"},{"revision":"a62feede0189fe66290e8959528b674f","url":"js/image-ng.js"},{"revision":"fab30a410e5f490fce3f977a6936a714","url":"js/img-lazyload.js"},{"revision":"fb4a815ccdb5d851d00561dbb62251c4","url":"js/leancloud.js"},{"revision":"9dc47a0b7b6bacfd16541c9b2b5b6bc5","url":"js/local-search.js"},{"revision":"6c10bee3f659ca91b534bf4a81d62f1e","url":"js/plugins.js"},{"revision":"bc2f15d100bdd8e7ecbaf2ca670a714f","url":"js/progressbar-done.js"},{"revision":"8a36a7c42b0d15eb06cbdef6c03dd803","url":"js/statistics.js"},{"revision":"c5ea612e1b9a9a905ee8ad080813b2ce","url":"js/umami-view.js"},{"revision":"f7ce9014de1cd7358eeb3aba81c8efe2","url":"js/utils.js"},{"revision":"d95b630428a74f36aee423eca8d399b4","url":"links/index.html"},{"revision":"36ccdbfa9c5e57e7baa9574ba5c52c4b","url":"local-search.xml"},{"revision":"ad9e77e5bcd4484713224ad60cb1f3ec","url":"sitemap.xml"},{"revision":"b09fa986aec615f4b3468ac535d7e014","url":"tags/busuanzi/index.html"},{"revision":"1ec998d27ae3df70919022e08859c7de","url":"tags/Crypto/index.html"},{"revision":"b96995acf251e3dfbfef7103271d2021","url":"tags/CTF/index.html"},{"revision":"8d23294addb69c8f3979997e85dd0893","url":"tags/cxzlw/index.html"},{"revision":"bdb197180022688ccc51c04fc4491e93","url":"tags/Fluid/index.html"},{"revision":"f62537238f22ffaf0d876adefb988b97","url":"tags/HackTheBox/index.html"},{"revision":"1835a875dc66bf1f3ccd2096b219f595","url":"tags/Hexo/index.html"},{"revision":"bf4c8f48545fc3a9d7826b5bac5f0aa6","url":"tags/index.html"},{"revision":"4c31ad3679098ac286fce111a4bcb23a","url":"tags/Python/index.html"},{"revision":"44d54e2c5b61c7ed1c8b4489286171a9","url":"tags/RSA/index.html"},{"revision":"5abbe89d6f1106786296aac56a2d3c52","url":"tags/Writeup/index.html"},{"revision":"525189b97cc0b601c79b70d55b658d10","url":"tags/Zerotier/index.html"},{"revision":"f723402689c1bc58efe0b41bd8a987d8","url":"tags/不蒜子/index.html"},{"revision":"6a6de0171ba9378ac5ed7b8fcf29a85f","url":"tags/反爬/index.html"},{"revision":"33cde17c90412826f87b4d978b718391","url":"tags/权限系统/index.html"},{"revision":"2281dfa10bef181290da51e2d0f0fd42","url":"tags/爬虫/index.html"},{"revision":"8956ad436bfb1349c9e0d1e96c49cec4","url":"tags/知乎/index.html"},{"revision":"07cd8b6f2408bc84150380e547e57d7e","url":"tags/自建-Planet/index.html"},{"revision":"9484abe9e5173341a12a72deda249892","url":"tags/逆向/index.html"},{"revision":"decd4b8f6af7e1c9d8ae97249ac786fa","url":"xml/local-search.xml"}].map(element => element["url"]);
const index_urls = urls.filter(url => url.endsWith("index.html")).map(url => url.substring(0, url.length - 10)); 

warmStrategyCache({urls:urls, strategy:staleWhileRevalidate}); 
warmStrategyCache({urls:index_urls, strategy:networkFirst}); 

skipWaiting()
clientsClaim()
