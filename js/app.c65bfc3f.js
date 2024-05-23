(function(){"use strict";var t={9448:function(t,n,a){var r=a(6848),e=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[t._m(0),n("main",{staticClass:"container"},[n("section",[n("h2",[t._v("Tabla usuarios.")]),t.usuarios.length?n("div",[n("table",{staticClass:"table listaUsuariosTable"},[t._m(1),n("tbody",t._l(t.usuarios,(function(a){return n("tr",{key:a.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(a.id))]),n("td",[n("img",{attrs:{src:a.avatar,alt:a.first_name+" "+a.last_name}})]),n("td",[t._v(t._s(a.first_name))]),n("td",[t._v(t._s(a.last_name))]),n("td",[t._v(t._s(a.email))])])})),0)]),n("div",{staticClass:"py-3"},[n("nav",{staticClass:"d-flex justify-content-center"},[n("ul",{staticClass:"pagination pagination-lg"},t._l(t.paginas,(function(a,r){return n("li",{key:r,staticClass:"page-item",attrs:{"aria-current":"page"}},[n("span",{staticClass:"page-link",class:{active:t.numeroPagina==r+1},on:{click:function(n){return t.cambiarPagina(r+1)}}},[t._v(t._s(r+1))])])})),0)])])]):n("div",[n("p",[t._v("No se han encontrado registros de usuarios.")])])])])])},s=[function(){var t=this,n=t._self._c;return n("header",[n("h1",{staticClass:"text-center"},[t._v("Listado de usuarios.")])])},function(){var t=this,n=t._self._c;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("ID")]),n("th",{attrs:{scope:"col"}},[t._v("Foto")]),n("th",{attrs:{scope:"col"}},[t._v("Nombre")]),n("th",{attrs:{scope:"col"}},[t._v("Apellido")]),n("th",{attrs:{scope:"col"}},[t._v("Email")])])])}],i={name:"App",components:{},data(){return{usuarios:[],urlBase:"https://reqres.in/api/users",numeroPagina:1,paginas:[]}},created(){fetch(`${this.urlBase}?page=1`).then((t=>t.json())).then((t=>{this.usuarios=t.data,this.paginas.length=t.total_pages})).catch((t=>{alert("Ha ocurrido un error."),console.log(t)}))},methods:{cambiarPagina:function(t){fetch(`${this.urlBase}?page=${t}`).then((t=>t.json())).then((n=>{this.usuarios=n.data,this.paginas.length=n.total_pages,this.numeroPagina=t})).catch((t=>{alert("Ha ocurrido un error."),console.log(t)}))}}},o=i,u=a(1656),c=(0,u.A)(o,e,s,!1,null,null,null),l=c.exports;r.Ay.config.productionTip=!1,new r.Ay({render:t=>t(l)}).$mount("#app")}},n={};function a(r){var e=n[r];if(void 0!==e)return e.exports;var s=n[r]={exports:{}};return t[r].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(n,r,e,s){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],e=t[l][1],s=t[l][2];for(var o=!0,u=0;u<r.length;u++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[u])}))?r.splice(u--,1):(o=!1,s<i&&(i=s));if(o){t.splice(l--,1);var c=e();void 0!==c&&(n=c)}}return n}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[r,e,s]}}(),function(){a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,{a:n}),n}}(),function(){a.d=function(t,n){for(var r in n)a.o(n,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};a.O.j=function(n){return 0===t[n]};var n=function(n,r){var e,s,i=r[0],o=r[1],u=r[2],c=0;if(i.some((function(n){return 0!==t[n]}))){for(e in o)a.o(o,e)&&(a.m[e]=o[e]);if(u)var l=u(a)}for(n&&n(r);c<i.length;c++)s=i[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(l)},r=self["webpackChunkm6_s4_d13"]=self["webpackChunkm6_s4_d13"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(9448)}));r=a.O(r)})();
//# sourceMappingURL=app.c65bfc3f.js.map