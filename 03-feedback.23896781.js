!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var i,o,a,u,l,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,l=setTimeout(O,t),s?p(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function O(){var e=g();if(S(e))return h(e);l=setTimeout(O,function(e){var n=t-(e-f);return d?y(n,a-(e-c)):n}(e))}function h(e){return l=void 0,v&&i?p(e):(i=o=void 0,u)}function z(){var e=g(),n=S(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return j(f);if(d)return l=setTimeout(O,t),p(f)}return void 0===l&&(l=setTimeout(O,t)),u}return t=w(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(w(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),z.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=o=l=void 0},z.flush=function(){return void 0===l?u:h(g())},z}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),S=j.querySelector('input[name="email"]'),O=j.querySelector('textarea[name="message"]'),h="feedback-form-state",z=function(){var e={email:S.value,message:O.value};localStorage.setItem(h,JSON.stringify(e))};S.addEventListener("input",e(t)(z,500)),O.addEventListener("input",e(t)(z,500)),window.addEventListener("load",(function(){var e=localStorage.getItem(h);if(e){var t=JSON.parse(e);S.value=t.email,O.value=t.message}})),j.addEventListener("submit",(function(e){if(e.preventDefault(),""!==S.value.trim()&&""!==O.value.trim()){var t={email:S.value,message:O.value};console.log("Dane z formularza zostały wysłane:"),console.log("Email:",t.email),console.log("Message:",t.message),alert("Dane z formularza zostały wysłane:"),localStorage.removeItem(h),S.value="",O.value=""}else alert("Proszę wypełnić wszystkie pola formularza.")}))}();
//# sourceMappingURL=03-feedback.23896781.js.map