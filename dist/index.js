"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");exports.MediaQuery=(t,i)=>{const n=()=>{if(!t)return!0;const{maxWidth:e,minWidth:i,orientation:n}=t,o=void 0===window.orientation?"unknown":90===Math.abs(window.orientation)?"landscape":"portrait";return!e&&!i||(e||(e=1/0),i||(i=-1/0),r<=e&&r>=i&&(!n||n==o))},[r,o]=e.useState(window.innerWidth),[d,a]=e.useState(n());return e.useEffect((()=>{const e=()=>{o(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),e.useEffect((()=>{a(n),i&&i(r)}),[r]),[d,r]},exports.MediaType=function(){const e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),t=/iPad|Android/i.test(navigator.userAgent);return e?"mobile":t?"tablet":e||t?void 0:"desktop"};