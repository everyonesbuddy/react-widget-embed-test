!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports.MyWidget=t(require("React"),require("ReactDOM")):e.MyWidget=t(e.React,e.ReactDOM)}(self,((e,t)=>(()=>{"use strict";var r={883:t=>{t.exports=e},845:e=>{e.exports=t}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={exports:{}};return r[e](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var c=n(883),a=n.n(c),i=n(845),l=n.n(i);const d=e=>{let{message:t="Hello, World!"}=e;return a().createElement("div",{style:{border:"1px solid black",padding:"10px",textAlign:"center"}},a().createElement("h2",null,"My React Widget"),a().createElement("p",null,t))};return window.MyWidget={init:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=document.querySelector(e);r&&l().render(a().createElement(d,t),r)}},{}})()));