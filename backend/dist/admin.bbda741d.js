!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequirecffb;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequirecffb=o);var r=o("dIxxU").default;const d=document.getElementById("login-form"),a=document.getElementById("username"),l=document.getElementById("password"),i=document.getElementById("err-msg");d.addEventListener("submit",(async e=>{e.preventDefault();try{const{data:e}=await r.post("/api/v1/admin/login",{username:a.value,password:l.value},{withCredentials:!0});localStorage.setItem("token",e.token),location.href="/admin/dashboard.html"}catch(e){e.response?i.innerText=e.response.data.msg:console.log(e)}})),a.addEventListener("keydown",(()=>{i.textContent=""})),l.addEventListener("keydown",(()=>{i.textContent=""}))}();
//# sourceMappingURL=admin.bbda741d.js.map
