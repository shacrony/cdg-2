/* Created: 2024/09/11 08:53:08 UTC version: latest */(()=>{"use strict";var e={648:(e,r,t)=>{t.d(r,{FF:()=>c,NI:()=>s,SW:()=>i,fH:()=>u,vV:()=>d});const a={info:"info::",error:"error::",warning:"warning::",verbose:"verbose::",success:"success::"},o={allowed:document.cookie.indexOf("abTastyDebug=")>=0};function n(e,r,t){if(function(){const e=!window.abTastyStopLog;return(o.allowed||window.abTastyDebug)&&e}()){for(var a=arguments.length,n=new Array(a>3?a-3:0),i=3;i<a;i++)n[i-3]=arguments[i];r(`%c [AB Tasty Debug mode] %c ${e}`,"background: #222; color: #bada55; padding: 3px; border-radius: 5px 0px 0px 5px;",`${t} padding: 3px; border-radius: 0px 5px 5px 0px;`,...n)}}function i(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];n(a.success,console.info,"background: green; color: white;",...r)}function c(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];n(a.warning,console.warn,"background: orange; color: white;",...r)}function s(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];n(a.verbose,console.debug,"background: pink; color: white;",...r)}function d(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];n(a.error,console.error,"background: red; color: white;",...r)}function u(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];n(a.info,console.info,"background: blue; color: white;",...r)}},6883:(e,r,t)=>{t.d(r,{r:()=>a});const a=e=>{if(window.abTastyNoRandomHit)return!0;if(0===e)return!1;return 1===Math.floor(Math.random()*e)+1}},6361:(e,r,t)=>{t.d(r,{_:()=>o});var a=t(648);async function o(e){try{return await e()}catch(r){try{return(0,a.FF)("Chunk failed to be loaded asynchronously. Retrying...",r),await e()}catch(e){throw(0,a.vV)("Chunk failed to be loaded asynchronously. Retry failed.",e),e}}}},7795:(e,r,t)=>{t.d(r,{Rh:()=>n,iU:()=>i,lK:()=>c});var a=t(648),o=t(6883);const n="abtasty-execution-started",i=()=>window.performance.getEntriesByName(n).length>0,c=()=>{try{if(!(0,o.r)(1e3)||i())return;window.performance.mark(n)}catch(e){(0,a.FF)("Can't start execution time performance measure due to:",e.message)}}}},r={};function t(a){var o=r[a];if(void 0!==o)return o.exports;var n=r[a]={exports:{}};return e[a].call(n.exports,n,n.exports,t),n.exports}t.m=e,t.H={},t.G=e=>{Object.keys(t.H).map((r=>{t.H[r](e)}))},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.f={},t.e=(e,r)=>Promise.all(Object.keys(t.f).reduce(((a,o)=>(t.f[o](e,a,r),a)),[])),t.u=e=>223===e?"shared/commons.9b20dd57c6f12e1beb80.js":792===e?"3268190f86be4abbfa5adb3432b12a47/main.a3ec5dc74c34ddb99730.js":153===e?"shared/analytics.f99b076116377090ad7a.js":693===e?"shared/me.3be17e89a86b43ce8259.js":void 0,t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="tag:";t.l=(a,o,n,i,c)=>{if(e[a])e[a].push(o);else{var s,d;if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==a||f.getAttribute("data-webpack")==r+n){s=f;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+n),c&&s.setAttribute("fetchpriority",c),s.src=a),e[a]=[o];var p=(r,t)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(t))),r)return r(t)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var a=r.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e={190:0};t.f.j=(r,a,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)a.push(n[2]);else{var i=new Promise(((t,a)=>n=e[r]=[t,a]));a.push(n[2]=i);var c=t.p+t.u(r),s=new Error;t.l(c,(a=>{if(t.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}}),"chunk-"+r,r,o)}},t.H.j=r=>{if(!t.o(e,r)||void 0===e[r]){e[r]=null;var a=document.createElement("link");a.charset="utf-8",t.nc&&a.setAttribute("nonce",t.nc),a.rel="preload",a.as="script",a.href=t.p+t.u(r),document.head.appendChild(a)}};var r=(r,a)=>{var o,n,i=a[0],c=a[1],s=a[2],d=0;if(i.some((r=>0!==e[r]))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(s)s(t)}for(r&&r(a);d<i.length;d++)n=i[d],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0},a=self.webpackChunktag=self.webpackChunktag||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))})(),(()=>{var e={792:[223,693]};t.f.preload=r=>{var a=e[r];Array.isArray(a)&&a.map(t.G)}})();var a=t(648),o=t(6361),n=t(7795);(async()=>((0,n.lK)(),(window.ABTastyTagPerforming||window.ABTasty?.started)&&(0,a.FF)("AB Tasty's Tag is already performing or started. If you think that's an issue, please check your tag implementation."),window.ABTastyTagPerforming=!0,await(0,o._)((()=>Promise.all([t.e(223,"high"),t.e(792,"high")]).then(t.bind(t,602))))))().then((e=>e.mainTag())).catch((e=>{(0,a.vV)("AB Tasty's Tag can't be loaded. Caused by:",e)}))})();