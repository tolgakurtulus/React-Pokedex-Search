(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),o=c(13),a=c.n(o),i=(c(19),c(4)),r=(c(20),c(21),c(0)),u=function(e){var t=e.setInputText,c=e.inputText;return Object(r.jsx)("form",{className:"c-form",children:Object(r.jsx)("input",{type:"text",className:"form-control c-todo-input",id:"InputName","aria-describedby":"pokemon",placeholder:"Pokemon Name",value:c,onChange:function(e){t(e.target.value)}})})},p=function(e){var t=e.items,c=e.inputText,n=t.filter((function(e){return""===c||e.name.toString().toLowerCase().includes(c.toString().toLowerCase())?e:void 0})).map((function(e,t){return Object(r.jsxs)("div",{className:"c-card-item",children:[Object(r.jsx)("div",{className:"c-card-title",children:Object(r.jsx)("h2",{children:e.name})}),Object(r.jsx)("div",{className:"c-card-img",children:Object(r.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png"),alt:""})})]},t.toString())}));return Object(r.jsx)("div",{className:"c-card",children:n})},d=c(14),j=c.n(d);var l=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],o=Object(n.useState)([]),a=Object(i.a)(o,2),d=a[0],l=a[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){j.a.get("https://pokeapi.co/api/v2/pokemon/?limit=898").then((function(e){console.log("~ response",e),l(e.data.results)})).catch((function(e){console.log(e)}))};return Object(r.jsxs)("div",{className:"App c-app",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Pokemon Find"})}),Object(r.jsx)(u,{inputText:c,setInputText:s}),Object(r.jsx)(p,{items:d,inputText:c})]})};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.19506d47.chunk.js.map