"use strict";(()=>{function t(t,e){return t.querySelector(e)}function e(t,e){return t.querySelectorAll(e)}var a=document,n=()=>{var t,e="(-ms-heartz)";return window.matchMedia&&window.matchMedia(e).matches};if(("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch||n())&&a.body.classList.add("toque-act"),t(a,".tel-b")){var i,a=document,s=t(a,".tel-b"),c=s.classList,r=t(a,".m-t").classList,d=t(a,".menu-p"),o=e(d,"a"),l=e(d,"button"),u=l.length,b=t(a,"#buscador"),m=t(a,".b-buscar");if(t(a,".pan"))var v=e(t(a,".pan"),"a"),f=v.length;if(t(a,".pan li.br"))var L=t(a,".pan li.br");function $(t){for(let e=0;e<f;e++)t?(v[e].setAttribute("tabindex",-1),L&&L.setAttribute("tabindex",-1)):(v[e].removeAttribute("tabindex"),L&&L.setAttribute("tabindex",0))}function _(){window.innerWidth<1024&&(r.contains("si")||r.contains("act")?r.contains("si")&&r.contains("act")&&(r.remove("act"),c.remove("activo"),x(s,!1),setTimeout(()=>{r.remove("si"),b.disabled=!1,m.disabled=!1,v&&$(!1)},375)):(r.add("si"),b.disabled=!0,m.disabled=!0,v&&$(!0),setTimeout(()=>{r.add("act"),c.add("activo"),x(s,!0)},50)))}function h(t){t.classList.contains("act")?(t.classList.remove("act"),t.nextSibling.classList.remove("act"),x(t,!1)):(t.classList.add("act"),t.nextSibling.classList.add("act"),x(t,!0))}s.addEventListener("click",()=>_()),a.addEventListener("keydown",t=>{"Escape"===t.key&&window.innerWidth<1024&&(t.preventDefault(),_(),setTimeout(()=>{r.contains("act")?o[0].focus():s.focus()},50))});for(let p=0;p<u;p++)l[p].addEventListener("click",()=>h(l[p]));function x(t,e){t.setAttribute("aria-expanded",e)}if(t(d,".m-actual")){var E,g=t(d,".m-actual").children[0];g.classList.contains("fam-b")&&h(g)}var A=e(t(a,".m-p"),".menu-p li > a"),y=A.length;for(let k=0;k<y;k++)A[k].addEventListener("focus",()=>S(A[k],!0)),A[k].addEventListener("blur",()=>S(A[k],!1));function S(t,e){for(;-1===t.className.indexOf("menu-p");)"LI"===t.tagName&&(e?t.classList.add("enf"):t.classList.remove("enf")),t=t.parentElement}window.addEventListener("resize",()=>{window.innerWidth>=1024&&r.contains("si")&&(r.remove("act","si"),c.remove("activo"),x(s,!1),b.disabled=!1,m.disabled=!1,v&&$(!1))})}})();
