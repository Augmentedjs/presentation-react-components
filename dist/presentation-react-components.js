!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("presentation-react-components",["react"],t):"object"==typeof exports?exports["presentation-react-components"]=t(require("react")):e["presentation-react-components"]=t(e.react)}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);class s extends o.a.Component{constructor(e){super(e)}render(){return"1"===this.props.level?o.a.createElement("h1",{className:this.props.className},this.props.text):"2"===this.props.level?o.a.createElement("h2",{className:this.props.className},this.props.text):"3"===this.props.level?o.a.createElement("h3",{className:this.props.className},this.props.text):"4"===this.props.level?o.a.createElement("h4",{className:this.props.className},this.props.text):"5"===this.props.level?o.a.createElement("h5",{className:this.props.className},this.props.text):o.a.createElement("h6",{className:this.props.className},this.props.text)}}var a=s;r.d(t,"Title",(function(){return a}))}])}));
//# sourceMappingURL=presentation-react-components.js.map