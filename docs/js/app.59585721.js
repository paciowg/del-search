(function(e){function t(t){for(var n,i,u=t[0],c=t[1],o=t[2],p=0,f=[];p<u.length;p++)i=u[p],a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,o||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/del-search/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1468:function(e,t,r){"use strict";var n=r("3d68"),a=r.n(n);a.a},"3d68":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("div",{staticClass:"max-w-5xl mx-auto"},[r("router-view")],1)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"bg-blue-700 text-white text-xl p-3"},[r("h1",[e._v("DEL FHIR Search")])])}],i=(r("713e"),r("1468"),r("2877")),u={},c=Object(i["a"])(u,a,s,!1,null,null,null),o=c.exports,l=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("section",{staticClass:"text-center"},[r("i",{staticClass:"text-gray-500 fas fa-spinner fa-spin fa-4x"})]):r("form",{staticClass:"text-center",on:{submit:function(t){return t.preventDefault(),e.formSubmit(t)}}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.library,expression:"library"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.library=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("All Forms")]),e._l(e.libraries,function(t){return r("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.text))])})],2),r("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{placeholder:"Search by ID or Text",type:"text"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),r("button",{staticClass:"w-24",attrs:{type:"submit",disabled:e.searching}},[e.searching?r("i",{staticClass:"fas fa-spinner fa-spin"}):[e._v("Search")]],2)]),e.searching?r("section",{staticClass:"text-center"},[e._v("Found "+e._s(e.total)+" results so far...")]):e._e(),e.searched&&e.results.length?r("section",[r("table",[e._m(0),e._l(e.results,function(t){return r("tr",{key:t.id},[r("td",{staticClass:"whitespace-no-wrap"},[r("router-link",{attrs:{to:{name:"detail",params:{id:t.id}}}},[e._v(e._s(t.id))])],1),r("td",[e._v(e._s(t.title))]),r("td",e._l(t.libraries,function(t){return r("span",{key:t.id},[e._v("\n            "+e._s(t.name)+" "+e._s(t.version)+"\n            "),r("br")])}),0)])})],2)]):e._e(),e.searched&&!e.results.length?r("section",{staticClass:"text-center"},[e._v("No results found.")]):e._e()])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("th",{staticClass:"desktop:w-56"},[e._v("ID")]),r("th",[e._v("Title")]),r("th",{staticClass:"desktop:w-56"},[e._v("Forms")])])}],h=(r("7f7f"),r("386d"),r("96cf"),r("3b8d")),d=r("768b"),m=(r("ffc1"),r("f559"),r("75fc")),v=(r("7514"),r("b54a"),r("5df3"),r("ac6a"),r("d225")),b=r("b0b4"),y=r("bc3a"),g=r.n(y),_=r("faa1"),x=r.n(_),w=r("e831"),k=r.n(w),O=r("b71a"),j=r.n(O),R=Object({NODE_ENV:"production",BASE_URL:"/del-search/"}).FHIR_URL||"https://api.logicahealth.org/PACIO/open/",C={data:{},get:function(e){var t=e.resourceType&&e.id?"".concat(e.resourceType,"/").concat(e.id):e;return C.data[t]},put:function(e){var t=e.resourceType&&e.id?"".concat(e.resourceType,"/").concat(e.id):e;C.data[t]=e},clear:function(){C.data={}}},T=function(){function e(t,r){Object(v["a"])(this,e),this.resourceType=t,this.transformer=r,this.emitter=new x.a}return Object(b["a"])(e,[{key:"getResourcesFromBundle",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,s,i,u,c=this,o=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,g.a.get(t,{params:r});case 3:if(n=e.sent,a=n.data,!a||"Bundle"!==a.resourceType||!a.entry){e.next=20;break}return e.next=8,a.entry.forEach(function(e){return C.put(c.transformer(e.resource))});case 8:return e.next=10,Promise.all(a.entry.filter(function(e){return e.resource.resourceType===c.resourceType}).map(function(e){return c.transformer(e.resource)}));case 10:if(s=e.sent,this.emitter.emit("count",s.length),!a.link){e.next=19;break}if(i=a.link.find(function(e){return"next"===e.relation}),!i){e.next=19;break}return e.next=17,this.getResourcesFromBundle(i.url);case 17:u=e.sent,s.push.apply(s,Object(m["a"])(u));case 19:return e.abrupt("return",s);case 20:return e.abrupt("return",[]);case 21:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"search",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,r,n,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},r=t,r._count=50,r._include="*",e.next=6,this.getResourcesFromBundle("".concat(R,"/").concat(this.resourceType),r);case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getById",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r="".concat(this.resourceType,"/"),n=t,n.startsWith(r)&&(n=n.slice(r.length)),a=C.get("".concat(this.resourceType,"/").concat(n)),!a){e.next=6;break}return e.abrupt("return",a);case 6:return e.next=8,g.a.get("".concat(R,"/").concat(this.resourceType,"/").concat(n));case 8:return s=e.sent,e.next=11,this.transformer(s.data);case 11:return a=e.sent,C.put(a),e.abrupt("return",a);case 14:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),S={library:new T("Library",function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",{resourceType:t.resourceType,id:t.id,name:t.name,title:t.title,status:t.status,version:t.version});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),measure:new T("Measure",function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=function(){return n=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=(t||[]).filter(function(e){return"documentation"===e.type&&e.resource&&e.resource.startsWith("Library/Questionnaire")}),n=k()(r,"resource"),e.abrupt("return",Promise.all(Object.entries(n).map(function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(d["a"])(t,2),n=r[0],a=r[1],e.next=3,S.library.getById(n);case 3:return e.t0=e.sent,e.t1=a.map(function(e){return{label:e.label,display:e.display,url:e.url}}),e.abrupt("return",{library:e.t0,answers:e.t1});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())));case 3:case"end":return e.stop()}},e)})),n.apply(this,arguments)},r=function(e){return n.apply(this,arguments)},a={resourceType:t.resourceType,id:t.id,status:t.status,description:t.description,title:t.title,libraries:[],answerSets:[]},!t.library){e.next=7;break}return e.next=6,Promise.all(j()(t.library).map(function(e){return S.library.getById(e)}));case 6:a.libraries=e.sent;case 7:if(!t.relatedArtifact){e.next=11;break}return e.next=10,r(t.relatedArtifact);case 10:a.answerSets=e.sent;case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},I=S,P={text:"",loading:!0,searched:!1,searching:!1,total:0,library:"",libraries:[],results:[]},E={data:function(){return P},created:function(){this.fetchLibraryOptions()},methods:{fetchLibraryOptions:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,I.library.search();case 3:t=e.sent,this.libraries=t.map(function(e){return{key:"Library/".concat(e.id),text:"".concat(e.name," ").concat(e.version)}}),this.loading=!1;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getFormNames:function(e){return e.libraries.map(function(e){return"".concat(e.name," ").concat(e.version)}).join(", ")},formSubmit:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,r,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.searching){e.next=2;break}return e.abrupt("return");case 2:return this.searching=!0,this.searched=!1,this.total=0,I.measure.emitter.on("count",function(e){n.total+=e}),t={"description:contains":this.text},this.library&&(t["depends-on"]=this.library),e.next=10,I.measure.search(t);case 10:r=e.sent,this.results=r,this.searching=!1,this.searched=!0;case 14:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},B=E,L=Object(i["a"])(B,p,f,!1,null,null,null),F=L.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",[r("router-link",{attrs:{to:{name:"search"}}},[r("i",{staticClass:"fas fa-chevron-left"}),e._v("\n      Back to Search\n    ")])],1),e.loading?r("section",{staticClass:"text-center"},[r("i",{staticClass:"text-gray-500 fas fa-spinner fa-spin fa-4x"})]):[r("section",[r("table",[r("tr",[r("th",{staticClass:"w-32"},[e._v("Item ID")]),r("td",[e._v(e._s(e.measure.id))])]),r("tr",[r("th",[e._v("Short Name")]),r("td",[e._v(e._s(e.measure.title))])]),r("tr",[r("th",[e._v("Text")]),r("td",[e._v(e._s(e.measure.description))])]),r("tr",[r("th",[e._v("Status")]),r("td",[e._v(e._s(e._f("startCase")(e.measure.status)))])])])]),e._l(e.measure.answerSets,function(t){return r("section",{key:t.library.id},[r("h2",{staticClass:"text-lg font-bold"},[e._v(e._s(t.library.name)+" "+e._s(t.library.version)+" ("+e._s(e._f("startCase")(t.library.status))+")")]),r("table",[e._m(0,!0),e._l(t.answers,function(t){return r("tr",{key:t.label},[r("td",{staticClass:"w-32"},[e._v(e._s(t.label))]),r("td",[e._v(e._s(t.display))]),r("td",[t.url?r("a",{attrs:{href:t.url,target:"loinc"}},[e._v(e._s(t.url))]):e._e()])])})],2)])})]],2)},D=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("th",{staticClass:"w-48"},[e._v("Label")]),r("th",[e._v("Display")]),r("th",{staticClass:"w-64"},[e._v("LOINC")])])}],M=r("5b0d"),$=r.n(M),A={props:{id:{type:String,required:!0}},data:function(){return{loading:!0,measure:null}},created:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getMeasure();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),filters:{startCase:$.a},methods:{getMeasure:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,I.measure.getById(this.id);case 3:t=e.sent,this.measure=t,this.loading=!1;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},H=A,J=Object(i["a"])(H,N,D,!1,null,null,null),U=J.exports;n["a"].use(l["a"]);var W=new l["a"]({routes:[{path:"/",name:"search",component:F},{path:"/:id",name:"detail",component:U,props:!0}]});n["a"].config.productionTip=!1,new n["a"]({router:W,render:function(e){return e(o)}}).$mount("#app")}});
//# sourceMappingURL=app.59585721.js.map