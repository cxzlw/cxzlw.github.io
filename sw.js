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

const urls = [{"revision":"d1bd24cf33ca4e88d530bc8c2590d55a","url":"2023/07/05/trace-of-line-01/index.html"},{"revision":"d1f0865d98a31f7121a4180b50f9dc48","url":"2023/07/05/zhihu-aac-old/index.html"},{"revision":"ffef5e939c95a7f6ec9dcc8b0156bf96","url":"2023/07/06/zerotier-planet-convert/index.html"},{"revision":"d8e98d670bec555edba51297e14e8d64","url":"2023/07/08/mc-server-optimization-dev-01/index.html"},{"revision":"37752bfe7d5a94fa14a890142206e564","url":"2023/07/10/trace-of-line-02/index.html"},{"revision":"42fc6c416316db14cf22cafe82d6e2dd","url":"2023/08/04/permission-system-design-share/index.html"},{"revision":"32f60c2a0970bc3f0bf9e018aa8dd41a","url":"2023/08/04/test-latex/index.html"},{"revision":"ea31ddab9e2918131c6dc0518b15e19d","url":"2023/08/08/python-to-windows-service/index.html"},{"revision":"8188220228f1c12b09b10dd20767f112","url":"2023/08/22/eca-i-am-interested-in/index.html"},{"revision":"e21bb37c074342d0d5a6738905fb947d","url":"2023/08/31/cell-structure/index.html"},{"revision":"5012864bf26d1ca6ef8439491e2c9af6","url":"404.html"},{"revision":"155e1f41f41dda0b3e7da9f0bcea9943","url":"about/index.html"},{"revision":"3fb6fd16d16e00956bfefa06d2e78075","url":"archives/2023/07/index.html"},{"revision":"e46184c9651e175d20ed237410199c82","url":"archives/2023/08/index.html"},{"revision":"2f11f3927701e6e05d12792d9c6162ba","url":"archives/2023/index.html"},{"revision":"116c7f1a38731c8a917d04f28ed4a269","url":"archives/index.html"},{"revision":"242837d47be8b7c244eb3b8bfc38e027","url":"baidu_verify_codeva-0rhRRODu4H.html"},{"revision":"5622aa23aa7f4d1ed62a9424d9ec66fe","url":"categories/index.html"},{"revision":"5ce280d86637a41c57fdc51fd463237a","url":"css/gitalk.css"},{"revision":"be3af4b8abf2074e66acb737867c43dc","url":"css/highlight-dark.css"},{"revision":"fdd56de5edd1e833674574fdc74bbfe7","url":"css/highlight.css"},{"revision":"7d6d29df18411568c1ae622605bc1907","url":"css/main.css"},{"revision":"71cb12d00310a7852b853744c41d9a34","url":"favicon.ico"},{"revision":"2d9aa61e592b26e2745f3c161c48c397","url":"img/avatar.png"},{"revision":"beb05a6b5b201044b6d80cacdf29f905","url":"img/default.png"},{"revision":"5603316bb5bc54a9d5cab14fddd4c510","url":"img/fluid.png"},{"revision":"4d772ced566ade339ca6718c7ed38674","url":"img/image-1.png"},{"revision":"dcfafd0cc238b0a63a733edd1a70bcfe","url":"img/image-2.png"},{"revision":"5ba9885de31a8d1e8df04a1d915b1069","url":"img/image-3.png"},{"revision":"3d2983fa8549bb6a93b7b905a6baea9c","url":"img/image-4.png"},{"revision":"55692e23130e9504505085798384e43e","url":"img/image-5.png"},{"revision":"18a13cfe951c406bbb4da3a7e7bc8ca2","url":"img/image.png"},{"revision":"15657539044e11a19a1c6c7e3073d1b3","url":"img/loading.gif"},{"revision":"b769e8dfde5660239317ed60758dba13","url":"img/police_beian.png"},{"revision":"563d298f5e79209a55ae2728362c70db","url":"index.html"},{"revision":"7683fab2fc9d03a3a659aa956b3a54e8","url":"js/boot.js"},{"revision":"605f587be2ab3d36472bb03ac27ede65","url":"js/color-schema.js"},{"revision":"7fa076a71a5559d89af6b0c6dfd3a0d2","url":"js/events.js"},{"revision":"fab30a410e5f490fce3f977a6936a714","url":"js/img-lazyload.js"},{"revision":"fb4a815ccdb5d851d00561dbb62251c4","url":"js/leancloud.js"},{"revision":"9dc47a0b7b6bacfd16541c9b2b5b6bc5","url":"js/local-search.js"},{"revision":"6c10bee3f659ca91b534bf4a81d62f1e","url":"js/plugins.js"},{"revision":"bc2f15d100bdd8e7ecbaf2ca670a714f","url":"js/progressbar_done.js"},{"revision":"f7ce9014de1cd7358eeb3aba81c8efe2","url":"js/utils.js"},{"revision":"46c8c37021139acd1fe28e7eac496b86","url":"links/index.html"},{"revision":"2167366b4588289a013ac94bb260e526","url":"tags/cxzlw/index.html"},{"revision":"9e188002b370aee757e3a3ea4efccaba","url":"tags/index.html"},{"revision":"35458e83f1e7e15d703d79253ad0a04e","url":"tags/Nuitka/index.html"},{"revision":"22fda76d6403486cfe3db25c01580d91","url":"tags/Python/index.html"},{"revision":"06dd81f0541ad3c9f22d551d48b68573","url":"tags/Windows-service/index.html"},{"revision":"1415f1888a36285bc2e32c52fbdc9632","url":"tags/Zerotier/index.html"},{"revision":"73e61ce776c42cc01ea342ba20c760c6","url":"tags/反爬/index.html"},{"revision":"f0144c7af123078899c97deb2dbdd5dc","url":"tags/小说/index.html"},{"revision":"81e178d872a3f25e38a5405e46c7b922","url":"tags/权限系统/index.html"},{"revision":"5ddd12ded26d2b5631fcc29ff1605902","url":"tags/知乎/index.html"},{"revision":"cb56ebfcf788e9707272e85aa1915ae7","url":"tags/离谱网文/index.html"},{"revision":"655974d360e9d2d5636bdca761fabc92","url":"tags/自建-Planet/index.html"},{"revision":"4cda51ab07a945104732bfee9c98e3cd","url":"tags/自建Planet/index.html"},{"revision":"0a152327fbfbf20499413a1ef68e8608","url":"tags/路过的某个学渣/index.html"},{"revision":"5bed3c2a233408a3763eae2021cf1133","url":"tags/飞石/index.html"}].map(element => element["url"]);

warmStrategyCache({urls:urls, strategy:staleWhileRevalidate}); 

skipWaiting()
clientsClaim()
