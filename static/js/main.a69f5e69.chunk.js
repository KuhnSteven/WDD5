(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},18:function(e,t,n){e.exports=n(28)},24:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(15),r=n.n(c),i=(n(24),n(3)),l=n(4),u=n(6),s=n(5),h=n(7),p=(n(11),n(30)),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",null,o.a.createElement(p.a,{to:"/Pg1"},"Link 1"),o.a.createElement(p.a,{to:"/Pg2"},"Link 2"),o.a.createElement(p.a,{to:"/Pg3"},"Link 3"))}}]),t}(a.Component),m=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"myHeader"},o.a.createElement("h3",null,"Title"),o.a.createElement(f,null))}}]),t}(a.Component),b=n(17),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={picofDay:[],cameraGallery:[],spaceWeather:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy",n="https://api.nasa.gov/planetary/apod?api_key=".concat(t);fetch(n).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({picofDay:t})});var a="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=".concat("fhaz","&api_key=").concat(t);fetch(a).then(function(e){return e.json()}).then(function(t){console.log(t.photos),e.setState({cameraGallery:t.photos})});var o="https://api.nasa.gov/DONKI/".concat("CMEAnalysis","?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=").concat(t);fetch(o).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({spaceWeather:t})})}},{key:"render",value:function(){return o.a.createElement("section",null,"Link 1 ")}}]),t}(a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("section",null,"Link 2")}}]),t}(a.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("section",null,"Link 3")}}]),t}(a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement(b.a,{exact:!0,path:"/",component:j}),o.a.createElement(b.a,{exact:!0,path:"/Pg1",component:j}),o.a.createElement(b.a,{exact:!0,path:"/Pg2",component:O}),o.a.createElement(b.a,{exact:!0,path:"/Pg3",component:d}))}}]),t}(a.Component),g=n(10),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement(p.a,{to:"/Pg1"},o.a.createElement(g.c,null)),o.a.createElement(p.a,{to:"/Pg2"},o.a.createElement(g.b,null)),o.a.createElement(p.a,{to:"/Pg3"},o.a.createElement(g.a,null)))}}]),t}(a.Component),E=n(29),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(E.a,null,o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement(v,null),o.a.createElement(y,null)))}}]),t}(a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/WDD5",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/WDD5","/service-worker.js");w?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.a69f5e69.chunk.js.map