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

const urls = [{"revision":"11afe0e820b9753ca5a6ab18c5359ebf","url":"2023/07/05/trace-of-line-01/index.html"},{"revision":"cec9988dac99ebe0a3df81b31d0b64f0","url":"2023/07/05/zhihu-aac-old/index.html"},{"revision":"2cac40a6ec9139064c811cdd898c0438","url":"2023/07/06/zerotier-planet-convert/index.html"},{"revision":"0f0fc2350b6ece323af5f31262a0f6cc","url":"2023/07/10/trace-of-line-02/index.html"},{"revision":"392f8df9bfa8e7d87879193da742bcdf","url":"2023/08/04/permission-system-design-share/index.html"},{"revision":"b9c0b0876df9656a29e3d7a0af52ee70","url":"2023/08/04/test-latex/index.html"},{"revision":"dc925cbbdc04e8dc7a1e512377fc82ff","url":"2023/08/31/cell-structure/index.html"},{"revision":"2b866be1e2638408ec9a4ed1e9ad5ff1","url":"404.html"},{"revision":"4048f6a53234d7c5efeb7ce3fbcbd6e1","url":"about/index.html"},{"revision":"775db764e0eea43a4031b2d36114085a","url":"archives/2023/07/index.html"},{"revision":"e10a3aba9393e59b98380a0f3a505de5","url":"archives/2023/08/index.html"},{"revision":"fc0ec632f5e5fab78bf96c2994c2662e","url":"archives/2023/index.html"},{"revision":"2fb0b20dea9f767f9f3611000444e77f","url":"archives/index.html"},{"revision":"242837d47be8b7c244eb3b8bfc38e027","url":"baidu_verify_codeva-0rhRRODu4H.html"},{"revision":"62b328640af6af42478c54f90e3b245b","url":"BingSiteAuth.xml"},{"revision":"fe54388e41b231cb11310f7268b1c028","url":"categories/index.html"},{"revision":"5ce280d86637a41c57fdc51fd463237a","url":"css/gitalk.css"},{"revision":"be3af4b8abf2074e66acb737867c43dc","url":"css/highlight-dark.css"},{"revision":"fdd56de5edd1e833674574fdc74bbfe7","url":"css/highlight.css"},{"revision":"7d6d29df18411568c1ae622605bc1907","url":"css/main.css"},{"revision":"71cb12d00310a7852b853744c41d9a34","url":"favicon.ico"},{"revision":"ea11c930cb20962f72c29f0e2931bfbd","url":"img/animal.jpg"},{"revision":"2d9aa61e592b26e2745f3c161c48c397","url":"img/avatar.png"},{"revision":"beb05a6b5b201044b6d80cacdf29f905","url":"img/default.png"},{"revision":"5603316bb5bc54a9d5cab14fddd4c510","url":"img/fluid.png"},{"revision":"4d772ced566ade339ca6718c7ed38674","url":"img/image-1.png"},{"revision":"dcfafd0cc238b0a63a733edd1a70bcfe","url":"img/image-2.png"},{"revision":"5ba9885de31a8d1e8df04a1d915b1069","url":"img/image-3.png"},{"revision":"3d2983fa8549bb6a93b7b905a6baea9c","url":"img/image-4.png"},{"revision":"55692e23130e9504505085798384e43e","url":"img/image-5.png"},{"revision":"18a13cfe951c406bbb4da3a7e7bc8ca2","url":"img/image.png"},{"revision":"15657539044e11a19a1c6c7e3073d1b3","url":"img/loading.gif"},{"revision":"1b164cde9b70a49e2f3831d211be9f66","url":"img/plant.jpg"},{"revision":"b769e8dfde5660239317ed60758dba13","url":"img/police_beian.png"},{"revision":"74669a1c8e0c10b60ff13c2430adae44","url":"img/prokaryotic.jpg"},{"revision":"53bc458d72f09cdb8560b24617bfe76d","url":"index.html"},{"revision":"7683fab2fc9d03a3a659aa956b3a54e8","url":"js/boot.js"},{"revision":"605f587be2ab3d36472bb03ac27ede65","url":"js/color-schema.js"},{"revision":"7fa076a71a5559d89af6b0c6dfd3a0d2","url":"js/events.js"},{"revision":"fab30a410e5f490fce3f977a6936a714","url":"js/img-lazyload.js"},{"revision":"fb4a815ccdb5d851d00561dbb62251c4","url":"js/leancloud.js"},{"revision":"9dc47a0b7b6bacfd16541c9b2b5b6bc5","url":"js/local-search.js"},{"revision":"6c10bee3f659ca91b534bf4a81d62f1e","url":"js/plugins.js"},{"revision":"bc2f15d100bdd8e7ecbaf2ca670a714f","url":"js/progressbar_done.js"},{"revision":"9a3939e6e13a11be286af20a9237bafe","url":"js/statistics.js"},{"revision":"f7ce9014de1cd7358eeb3aba81c8efe2","url":"js/utils.js"},{"revision":"e795db68589c548c33a0cf88c0d7b604","url":"links/index.html"},{"revision":"b16ec044015d222a59ee6f9a6645b1da","url":"local-search.xml"},{"revision":"0ff2f27b564a732c3568030fa69291d2","url":"sitemap.xml"},{"revision":"f96ec481c06bea77c7907278b822f6d2","url":"tags/cxzlw/index.html"},{"revision":"f104d82d4ad55edb0deb7b10b15fdcfc","url":"tags/index.html"},{"revision":"16c48958a850e4f022f605518158a13f","url":"tags/Python/index.html"},{"revision":"5a10eafab150ce92b930726bc318e126","url":"tags/Zerotier/index.html"},{"revision":"6356dc81ef16e7bea5c11f57090a7ee0","url":"tags/反爬/index.html"},{"revision":"51e18049b5974e19ce9d6c2a0d4b4d93","url":"tags/小说/index.html"},{"revision":"48734385f12366ebb6b1ed6077f48b61","url":"tags/权限系统/index.html"},{"revision":"90ed6f8df540ea9d90b289d21022c364","url":"tags/知乎/index.html"},{"revision":"3c941558e7e1753369e15e663085bc21","url":"tags/离谱网文/index.html"},{"revision":"07642ef4e937ebd74f0ff53ce53865c4","url":"tags/自建-Planet/index.html"},{"revision":"ea357e0658347c0f1df73a8c4c0541a4","url":"tags/路过的某个学渣/index.html"},{"revision":"2dde01b95c21982f1bb70b6d28a75894","url":"tags/飞石/index.html"},{"revision":"decd4b8f6af7e1c9d8ae97249ac786fa","url":"xml/local-search.xml"}].map(element => element["url"]);
const index_urls = urls.filter(url => url.endsWith("index.html")).map(url => url.substring(0, url.length - 10)); 

warmStrategyCache({urls:urls, strategy:staleWhileRevalidate}); 
warmStrategyCache({urls:index_urls, strategy:staleWhileRevalidate}); 

skipWaiting()
clientsClaim()
