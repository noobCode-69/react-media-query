import{useState as n,useEffect as i}from"react";const t=(t,e)=>{const o=()=>{if(!t)return!0;const{maxWidth:n,minWidth:i,orientation:e}=t,o=void 0===window.orientation?"unknown":90===Math.abs(window.orientation)?"landscape":"portrait";return!n&&!i||(n||(n=1/0),i||(i=-1/0),r<=n&&r>=i&&(!e||e==o))},[r,d]=n(window.innerWidth),[a,s]=n(o());return i((()=>{const n=()=>{d(window.innerWidth)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[]),i((()=>{s(o),e&&e(r)}),[r]),[a,r]};function e(){const n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),i=/iPad|Android/i.test(navigator.userAgent);return n?"mobile":i?"tablet":n||i?void 0:"desktop"}export{t as MediaQuery,e as MediaType};
