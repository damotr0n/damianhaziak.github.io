(this["webpackJsonppers-portfolio"]=this["webpackJsonppers-portfolio"]||[]).push([[0],{10:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(3),r=n.n(i),o=n(2),s=(n(10),n(1));var l=function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"navbar-item",onClick:function(){return e.callback(e.title)},children:e.title})})},j=n(21);var d=function(e){var t="topnav",n=Object(c.useState)(!1),a=Object(o.a)(n,2),i=a[0],r=a[1],d=Object(c.useState)(""),b=Object(o.a)(d,2),h=b[0],u=b[1],f=Object(c.useState)(t),p=Object(o.a)(f,2),m=p[0],O=p[1],x=function(){i?(r(!1),u(""),O(t)):(r(!0),u("mobile-open"),O("topnav responsive"))},v=function(t){e.callback(t),x()},g=e.menuItems.map((function(e){return Object(s.jsx)(l,{title:e,callback:v})}));return Object(s.jsx)("div",{id:"navbar",className:h,children:Object(s.jsxs)("div",{id:"navbar-ul-wrapper",children:[Object(s.jsx)("ul",{id:"navbar-item-wrapper",className:m,children:g}),Object(s.jsx)(j.a,{toggled:i,toggle:x,color:"#fff"})]})})},b=n(20);var h=function(e){var t={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0},unmounted:{opacity:0}};return Object(s.jsx)(b.a,{in:e.inProp,timeout:500,unmountOnExit:!0,children:function(n){return Object(s.jsx)("div",{style:t[n],id:e.id,className:"content",children:e.content})}})},u=n(5);var f=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"fall-down-animation",children:"Damian Haziak"}),Object(s.jsx)("p",{className:"fall-down-animation",children:"Graduate Developer and Consultant looking for jobs in web development."}),Object(s.jsx)("div",{id:"home-image",className:"fall-down-animation",children:Object(s.jsx)(u.a,{accessory:"shades",body:"chest",circleColor:"blue",clothing:"shirt",clothingColor:"white",eyebrows:"raised",eyes:"happy",faceMask:!1,faceMaskColor:"red",facialHair:"none3",graphic:"react",hair:"short",hairColor:"black",hat:"none",hatColor:"red",lashes:!0,lipColor:"pink",mask:!0,mouth:"openSmile",skinTone:"light"})})]})};var p=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:"main-title",children:e.mainTitle}),Object(s.jsx)("p",{className:"subtitle",children:e.subtitle}),Object(s.jsx)("div",{className:"card-container",children:e.children})]})};var m=function(e){return Object(s.jsx)("a",{className:"contact-card-container-anchor",href:e.href,target:"_blank",rel:"noreferrer",children:Object(s.jsxs)("div",{className:"card-contact",children:[Object(s.jsx)("svg",{enableBackground:"new "+e.view_box,height:"512",viewBox:e.view_box,width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:e.svg_path})}),Object(s.jsx)("h3",{className:"card-title",children:e.card_title})]})})};var O=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("data/contact.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(s.jsx)(m,{href:e.href,svg_path:e.svg_path,view_box:e.view_box,card_title:e.card_title},e.href)}));a(t)}))}),[]),Object(s.jsx)(p,{mainTitle:"Contact",subtitle:"Click on each icon to be sent to that webpage.",children:n})};var x=function(e){return Object(s.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{className:"card-img",src:e.imgSrc,alt:e.imgAlt}),Object(s.jsx)("h3",{className:"card-title",children:e.title}),Object(s.jsx)("p",{className:"card-description",children:e.desc})]})})};var v=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("data/projects.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(s.jsx)(x,{href:e.href,imgSrc:e.img.src,imgAlt:e.img.alt,title:e["card-title"],desc:e["card-desc"]},e.href)}));a(t)}))}),[]),Object(s.jsx)(p,{mainTitle:"Projects",subtitle:"Click on a card to be sent to a project related page",children:n})};var g=function(){var e=[{id:"home",content:Object(s.jsx)(f,{},"home")},{id:"projects",content:Object(s.jsx)(v,{},"proj")},{id:"contact",content:Object(s.jsx)(O,{},"cont")}],t=e.map((function(e){return e.id})),n=Object(c.useState)(e[0]),a=Object(o.a)(n,2),i=a[0],r=a[1],l=Object(c.useState)(!0),j=Object(o.a)(l,2),b=j[0],u=j[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{menuItems:t,callback:function(t){var n=e.find((function(e){return e.id===t}));if(void 0===n)throw new TypeError("Lookup did not find this type of content");n.id!==i.id&&(u(!1),setTimeout((function(){r(n),u(!0)}),250))}}),Object(s.jsx)(h,{id:i.id,content:i.content,inProp:b})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};n(15);r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),w()}},[[16,1,2]]]);
//# sourceMappingURL=main.63a453cb.chunk.js.map