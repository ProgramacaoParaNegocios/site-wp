import is from"./is";export function getYoutubeId(e){var t;const r=(e||"").match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return r&&11===(null===(t=null==r?void 0:r[2])||void 0===t?void 0:t.length)?r[2]:null}export function getVimeoId(e){const t=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/.exec(e||"");return(null==t?void 0:t[5])||""}export function determineVideoUrlType(e){const t=getVimeoId(e);if(t)return{video_id:t,type:"vimeo"};const r=getYoutubeId(e);return r?{video_id:r,type:"youtube"}:{$video_id:0,$type:"none"}}export function isHLS(e){return"string"==typeof e&&e.includes(".m3u8")}export function isNotEmptyObject(e){return"object"==typeof e&&Object.keys(e).length}export function isNotEmptyArray(e){return Array.isArray(e)&&e.length>0}export function timePassed({current:e,duration:t,showAfter:r}){if(e===r)return!0;let n=e/t*100;return 99.9<n&&(n=100),n>=r}export function getParents(e){for(var t=[];e.parentNode&&"body"!=e.parentNode.nodeName.toLowerCase();)e=e.parentNode,t.push(e);return t}export function setAttributes(e,t){is.element(e)&&!is.empty(t)&&Object.entries(t).filter((([,e])=>!is.nullOrUndefined(e))).forEach((([t,r])=>e.setAttribute(t,r)))}export function createElement(e,t,r){const n=document.createElement(e);return is.object(t)&&setAttributes(n,t),is.string(r)&&(n.innerText=r),n}export function toggleClass(e,t,r){if(is.nodeList(e))return Array.from(e).map((e=>toggleClass(e,t,r)));if(is.element(e)){let n="toggle";return void 0!==r&&(n=r?"add":"remove"),e.classList[n](t),e.classList.contains(t)}return!1}