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

const urls = [{"revision":"76505fe8a452660c6deb6974da1ed4fc","url":"2023/07/05/trace-of-line-01/index.html"},{"revision":"f99d8cf1f75e3a4b7d52ec9370f5c6f9","url":"2023/07/05/zhihu-aac-old/index.html"},{"revision":"d8d03b732d180244ffece8d4f9321e8e","url":"2023/07/06/zerotier-planet-convert/index.html"},{"revision":"b1d01776e54152b0f6885bac6793df3a","url":"2023/07/10/trace-of-line-02/index.html"},{"revision":"fc04b878859324dc197ebfcdc28142b6","url":"2023/08/04/permission-system-design-share/index.html"},{"revision":"f87d7838f65115481599d44454617b75","url":"2023/08/04/test-latex/index.html"},{"revision":"ddd41062ae43452df8d0a35f9991a915","url":"2023/08/31/cell-structure/index.html"},{"revision":"31ecf90f4d73b5a6db5143a4d462ff93","url":"2023/10/03/busuanzi-bug/index.html"},{"revision":"f5dd01b13fbf195a514a0bb359d64726","url":"404.html"},{"revision":"4d47cd27ba199fc5f8677ca5889d5162","url":"about/index.html"},{"revision":"f38f86b8c7e887c05d0631bd2873b270","url":"archives/2023/07/index.html"},{"revision":"2989e4544a822cb379c9749c6125709c","url":"archives/2023/08/index.html"},{"revision":"cca3094b1571897c7a3a2924fc310fb7","url":"archives/2023/10/index.html"},{"revision":"7fbc380e6f61fdec41844ccc3688a71b","url":"archives/2023/index.html"},{"revision":"eb55733a8c95ad8fdff88c1193d54858","url":"archives/index.html"},{"revision":"242837d47be8b7c244eb3b8bfc38e027","url":"baidu_verify_codeva-0rhRRODu4H.html"},{"revision":"62b328640af6af42478c54f90e3b245b","url":"BingSiteAuth.xml"},{"revision":"9cc849b15eeb3a992de3f602e4aa422b","url":"categories/index.html"},{"revision":"5ce280d86637a41c57fdc51fd463237a","url":"css/gitalk.css"},{"revision":"be3af4b8abf2074e66acb737867c43dc","url":"css/highlight-dark.css"},{"revision":"fdd56de5edd1e833674574fdc74bbfe7","url":"css/highlight.css"},{"revision":"7d6d29df18411568c1ae622605bc1907","url":"css/main.css"},{"revision":"71cb12d00310a7852b853744c41d9a34","url":"favicon.ico"},{"revision":"ea11c930cb20962f72c29f0e2931bfbd","url":"img/animal.jpg"},{"revision":"2d9aa61e592b26e2745f3c161c48c397","url":"img/avatar.png"},{"revision":"beb05a6b5b201044b6d80cacdf29f905","url":"img/default.png"},{"revision":"5603316bb5bc54a9d5cab14fddd4c510","url":"img/fluid.png"},{"revision":"4d772ced566ade339ca6718c7ed38674","url":"img/image-1.png"},{"revision":"dcfafd0cc238b0a63a733edd1a70bcfe","url":"img/image-2.png"},{"revision":"5ba9885de31a8d1e8df04a1d915b1069","url":"img/image-3.png"},{"revision":"3d2983fa8549bb6a93b7b905a6baea9c","url":"img/image-4.png"},{"revision":"55692e23130e9504505085798384e43e","url":"img/image-5.png"},{"revision":"88c5e4fa4dec4b514a5d0d53b72d75c7","url":"img/image-6.png"},{"revision":"e52801ec8fe9abad24f24c8d96402fb3","url":"img/image-7.png"},{"revision":"3f940453e65f4635917f162b9a1d1432","url":"img/image-8.png"},{"revision":"47c43a3db8dca516e147f6f38324c1eb","url":"img/image-9.png"},{"revision":"18a13cfe951c406bbb4da3a7e7bc8ca2","url":"img/image.png"},{"revision":"a88a6883f6f27cd7b95a3ae753f91a40","url":"img/img-20231004-chrome-busuanzi.png"},{"revision":"f6f63a28b80c91ec49153f37df82f42d","url":"img/img-20231004-safari-busuanzi.png"},{"revision":"15657539044e11a19a1c6c7e3073d1b3","url":"img/loading.gif"},{"revision":"1b164cde9b70a49e2f3831d211be9f66","url":"img/plant.jpg"},{"revision":"b769e8dfde5660239317ed60758dba13","url":"img/police_beian.png"},{"revision":"74669a1c8e0c10b60ff13c2430adae44","url":"img/prokaryotic.jpg"},{"revision":"72fcd8207f2960faa4bbecbc1f82d425","url":"index.html"},{"revision":"7683fab2fc9d03a3a659aa956b3a54e8","url":"js/boot.js"},{"revision":"605f587be2ab3d36472bb03ac27ede65","url":"js/color-schema.js"},{"revision":"7fa076a71a5559d89af6b0c6dfd3a0d2","url":"js/events.js"},{"revision":"a62feede0189fe66290e8959528b674f","url":"js/image-ng.js"},{"revision":"fab30a410e5f490fce3f977a6936a714","url":"js/img-lazyload.js"},{"revision":"fb4a815ccdb5d851d00561dbb62251c4","url":"js/leancloud.js"},{"revision":"9dc47a0b7b6bacfd16541c9b2b5b6bc5","url":"js/local-search.js"},{"revision":"6c10bee3f659ca91b534bf4a81d62f1e","url":"js/plugins.js"},{"revision":"bc2f15d100bdd8e7ecbaf2ca670a714f","url":"js/progressbar-done.js"},{"revision":"8a36a7c42b0d15eb06cbdef6c03dd803","url":"js/statistics.js"},{"revision":"f7ce9014de1cd7358eeb3aba81c8efe2","url":"js/utils.js"},{"revision":"a038b5e4ef22f5d2f93a8a29c86401a2","url":"links/index.html"},{"revision":"7a1606e5a9dc6b0dd0a540d1edd7a120","url":"local-search.xml"},{"revision":"5ed0183c328d1c371716fa40572252f0","url":"sitemap.xml"},{"revision":"a7c8d0e028a8acc5bffa05a897a12a8e","url":"tags/busuanzi/index.html"},{"revision":"d8cc84293201c30217c31bba9d93a45c","url":"tags/cxzlw/index.html"},{"revision":"024851ce740d92782304d15fec5dc75c","url":"tags/Fluid/index.html"},{"revision":"302daac8674ab62523f9feee59fde1b3","url":"tags/Hexo/index.html"},{"revision":"d60c34e2cfbe323f7a800b84e7971d8f","url":"tags/index.html"},{"revision":"1ce874cf3db707767b4f3caf13a652ab","url":"tags/Python/index.html"},{"revision":"d501d716ed2626f4cca4db8dc3893bd1","url":"tags/Zerotier/index.html"},{"revision":"db19d5d8697107869aa8657a72960815","url":"tags/不蒜子/index.html"},{"revision":"f050acc3ca2fb954b8fe34069f2fdb5a","url":"tags/反爬/index.html"},{"revision":"41aa759144f2a988356005e23a8e18dc","url":"tags/小说/index.html"},{"revision":"a94d4b1a4fb83d4a6c5e049526553876","url":"tags/权限系统/index.html"},{"revision":"18070374c83792ba4ccfbc1a56e13713","url":"tags/知乎/index.html"},{"revision":"7300f8bb9209f284c85a4ad6adc8cb31","url":"tags/离谱网文/index.html"},{"revision":"8fea0799829e9b3bc612a4c9df75e7b0","url":"tags/自建-Planet/index.html"},{"revision":"64da681ee0bb7765af4ccbba09f20fc4","url":"tags/路过的某个学渣/index.html"},{"revision":"368e0f9e914f21692dee01c8da9a2ed7","url":"tags/飞石/index.html"},{"revision":"decd4b8f6af7e1c9d8ae97249ac786fa","url":"xml/local-search.xml"}].map(element => element["url"]);
const index_urls = urls.filter(url => url.endsWith("index.html")).map(url => url.substring(0, url.length - 10)); 

warmStrategyCache({urls:urls, strategy:staleWhileRevalidate}); 
warmStrategyCache({urls:index_urls, strategy:staleWhileRevalidate}); 

skipWaiting()
clientsClaim()
