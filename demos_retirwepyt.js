(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{L3s7:function(e,t,n){"use strict";n.r(t);var r,c=n("q1tI"),a=n.n(c),s=n("9og8"),u=n("tJVT"),i=n("WmNS"),l=n.n(i),o="typewriter";(function(e){e[e["TYPING"]=0]="TYPING",e[e["DELETE"]=1]="DELETE"})(r||(r={}));var b=e=>new Promise((t=>setTimeout((()=>t()),e))),p=e=>{var t=e.content,n=e.cycleNum,i=void 0===n?1:n,p=e.speed,f=void 0===p?100:p,w=e.className,E=Object(c["useState"])(""),h=Object(u["a"])(E,2),j=h[0],m=h[1],O=Object(c["useState"])(0),d=Object(u["a"])(O,2),v=d[0],k=d[1],x=Object(c["useReducer"])(((e,n)=>(n===r.TYPING?m((()=>t.substring(0,j.length+1))):m((()=>j.substring(0,j.length-1))),n)),r.TYPING),N=Object(u["a"])(x,2),T=N[0],g=N[1],I=i>=v||-1===v,P=function(){var e=Object(s["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b(1500);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=Object(c["useRef"])(!1),Y=Object(c["useCallback"])(Object(s["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.length!==j.length){e.next=6;break}return e.next=3,P();case 3:I&&g(r.DELETE),e.next=15;break;case 6:if(0!==j.length){e.next=14;break}if(!I){e.next=12;break}return e.next=10,P();case 10:g(r.TYPING),k((()=>v+1));case 12:e.next=15;break;case 14:g(T);case 15:case"end":return e.stop()}}),e)}))),[j]);return Object(c["useEffect"])((()=>{if(G.current=!0,I&&G.current){var e=setInterval((()=>Y()),f);return()=>{clearInterval(e),G.current=!1}}return()=>{G.current=!1}}),[j]),Object(c["useEffect"])((()=>(G.current=!0,Y().then((()=>{})),()=>{G.current=!1})),[]),a.a.createElement("span",{className:"".concat(o," ").concat(w||"")},j,a.a.createElement("span",null,"|"))},f=p;t["default"]=()=>a.a.createElement(f,{content:"Hello world",cycleNum:3,speed:100})}}]);