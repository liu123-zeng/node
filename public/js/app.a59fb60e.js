(function(t){function n(n){for(var o,i,c=n[0],u=n[1],s=n[2],d=0,f=[];d<c.length;d++)i=c[d],a[i]&&f.push(a[i][0]),a[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(n);while(f.length)f.shift()();return r.push.apply(r,s||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],o=!0,c=1;c<e.length;c++){var u=e[c];0!==a[u]&&(o=!1)}o&&(r.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},a={app:0},r=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0a8d":function(t,n,e){},"0f6e":function(t,n,e){"use strict";var o=e("839a"),a=e.n(o);a.a},"3aff":function(t,n,e){},"3cb7":function(t,n,e){"use strict";var o=e("6a9d"),a=e.n(o);a.a},4441:function(t,n,e){"use strict";var o=e("0a8d"),a=e.n(o);a.a},"4f60":function(t,n,e){t.exports=e.p+"img/3.1a07a4db.png"},"54f2":function(t,n,e){t.exports=e.p+"img/2.487a13ab.png"},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var o=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view",[e("Search")],1)],1)},r=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Search"}},[e("van-search",{attrs:{shape:"round",background:"#4fc08d",placeholder:"请输入搜索关键词","show-action":"true"},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}}),e("Footer")],1)},c=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Footer"}},[e("router-view"),e("van-tabbar",{attrs:{route:""}},[e("van-tabbar-item",{attrs:{replace:"",to:"/home",icon:"location-o"}},[t._v("\n    标签\n  ")]),e("van-tabbar-item",{attrs:{replace:"",to:"/search",icon:"search"}},[t._v("\n    标签\n  ")]),e("van-tabbar-item",{attrs:{replace:"",to:"/Detail",icon:"like-o"}},[t._v("\n    标签\n  ")]),e("van-tabbar-item",{attrs:{replace:"",to:"/user",icon:"friends-o"}},[t._v("\n    标签\n  ")])],1)],1)},s=[],l={name:"Footer",props:{},data:function(){return{active:0}},components:{},mounted:function(){},updated:function(){},methods:{}},d=l,f=(e("3cb7"),e("2877")),p=Object(f["a"])(d,u,s,!1,null,"47a65d29",null),m=p.exports,v={name:"Search",props:{},data:function(){return{value:""}},components:{Footer:m},mounted:function(){},updated:function(){},methods:{}},h=v,b=Object(f["a"])(h,i,c,!1,null,null,null),_=b.exports,g={name:"app",props:{},data:function(){return{}},components:{Search:_},mounted:function(){},updated:function(){},methods:{}},x=g,y=Object(f["a"])(x,a,r,!1,null,null,null),w=y.exports,E=e("8c4f"),j=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Goods"}},[e("h3",[t._v("Goods")])])}],$={name:"Goods",props:{},data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{}},L=$,k=Object(f["a"])(L,j,O,!1,null,null,null),S=k.exports,C=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Login"}},[e("h3",[t._v("Login")])])}],F={name:"Login",props:{},data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{}},z=F,J=Object(f["a"])(z,C,D,!1,null,null,null),P=J.exports,U=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Reg"}},[e("h3",[t._v("Reg")])])}],G={name:"Reg",props:{},data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{}},N=G,R=Object(f["a"])(N,U,M,!1,null,null,null),T=R.exports,H=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Detail"}},[e("Nav"),e("DJ",{attrs:{data:t.data}}),e("Footer")],1)},B=[],I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Nav"}},[e("van-nav-bar",{attrs:{"left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}})],1)},W=[],q=e("d399"),A={name:"Nav",props:{},data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{onClickLeft:function(){Object(q["a"])("返回")}}},K=A,Q=(e("dda2"),Object(f["a"])(K,I,W,!1,null,"8eb42834",null)),V=Q.exports,X=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"DJ"}},[e("div",{staticClass:"zx",staticStyle:{height:".3rem","font-weight":"bolder","border-left":"3px solid red","font-size":".25rem"}},[t._v("\n\t  \t\t\t 最新音乐\t\t \n\t  ")]),e("van-cell-group"),t._l(t.data,function(n){return e("van-cell",{key:n.id,attrs:{size:"large",title:n.songList[0].singername,label:n.songList[0].songname}},[e("h2",[t._v(t._s(n.topTitle))]),e("p",[t._v(t._s(n.listenCount))]),e("img",{attrs:{src:n.picUrl}})])})],2)},Y=[],Z={name:"DJ",props:{data:""},data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{}},tt=Z,nt=(e("5868"),Object(f["a"])(tt,X,Y,!1,null,"f2a9dbf0",null)),et=nt.exports,ot={name:"Detail",props:{},data:function(){return{data:""}},components:{DJ:et,Footer:m,Nav:V},mounted:function(){var t=this;this.$axios({url:"http://localhost:80/raking"}).then(function(n){t.data=n.data.data.topList})},computed:{},updated:function(){},methods:{}},at=ot,rt=Object(f["a"])(at,H,B,!1,null,"b2c958fe",null),it=rt.exports,ct=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Err"}},[e("h3",[t._v("404")])])}],st={name:"Err",props:{},data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{}},lt=st,dt=Object(f["a"])(lt,ct,ut,!1,null,null,null),ft=(dt.exports,function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),pt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"User"}},[e("h3",[t._v("User")])])}],mt={name:"User",props:{},data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{}},vt=mt,ht=Object(f["a"])(vt,ft,pt,!1,null,null,null),bt=ht.exports,_t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Home"}},[e("Ucinput"),e("Banner"),e("List",{attrs:{data:t.pic}}),e("Footer")],1)},gt=[],xt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Input"}},[e("van-search",{attrs:{shape:"round",background:"red",placeholder:"搜索"},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}})],1)},yt=[],wt={name:"Input",props:{},data:function(){return{value:""}},components:{},mounted:function(){},updated:function(){},methods:{}},Et=wt,jt=(e("b1bd"),Object(f["a"])(Et,xt,yt,!1,null,"0b329db4",null)),Ot=jt.exports,$t=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"banner"},[o("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},[o("van-swipe-item",[o("img",{attrs:{src:e("b899")}})]),o("van-swipe-item",[o("img",{attrs:{src:e("54f2")}})]),o("van-swipe-item",[o("img",{attrs:{src:e("4f60")}})])],1)],1)},Lt=[],kt={name:"banner",props:{},data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{}},St=kt,Ct=(e("0f6e"),Object(f["a"])(St,$t,Lt,!1,null,"48ed5ee1",null)),Dt=Ct.exports,Ft=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"List"}},[e("div",{staticClass:"zx",staticStyle:{height:".3rem","font-weight":"bolder","border-left":"3px solid red","font-size":".25rem"}},[t._v("\n\t\t\t\t  推荐歌单\n\t\t\t\t \n\t")]),e("van-grid",{attrs:{border:!1,"column-num":3}},t._l(t.data,function(n){return e("van-grid-item",{key:n.id,staticClass:"ys"},[e("img",{attrs:{src:n.cover_pic_url}}),e("p",[t._v(t._s(n.description))]),e("h4",[t._v(t._s(n.score))])])}),1)],1)},zt=[],Jt={name:"List",props:{data:""},data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{}},Pt=Jt,Ut=(e("4441"),Object(f["a"])(Pt,Ft,zt,!1,null,"47be83d6",null)),Mt=Ut.exports,Gt={name:"Home",props:{},data:function(){return{pic:""}},components:{Ucinput:Ot,Banner:Dt,Footer:m,List:Mt},mounted:function(){var t=this;this.$axios({url:"http://localhost:80/recommend"}).then(function(n){t.pic=n.data.homeData.hotList})},updated:function(){},methods:{}},Nt=Gt,Rt=Object(f["a"])(Nt,_t,gt,!1,null,null,null),Tt=Rt.exports;o["a"].use(E["a"]);var Ht=[{path:"/user",component:bt},{path:"/Detail",component:it},{path:"/Search",component:_},{path:"/goods",component:S,children:[{path:":detail",component:it,name:"dt"}]},{path:"/Login",component:P},{path:"/Home",component:Tt,name:"home"},{path:"/Reg",component:T},{path:"*",component:Tt}],Bt=new E["a"]({routes:Ht,mode:"history"});Bt.beforeEach(function(t,n,e){console.log("跳转成功"),e()}),Bt.afterEach(function(t,n){console.log("即将跳转")});var It=Bt,Wt=e("2f62"),qt={count:0},At=qt,Kt=e("bc3a"),Qt=e.n(Kt),Vt={jia:function(t,n){var e=t.commit;e({type:"imt",payload:n})},jian:function(t,n){var e=t.commit;console.log("-"),e("dmt",n)},odd:function(t,n){var e=t.commit,o=t.state;console.log("odd"),o.count%2===0&&e({type:"imt",payload:n})},async:function(t,n){var e=t.commit;t.state;Qt()({url:"/data/user.json"}).then(function(t){return e({type:"imt",payload:t.data.num})})}},Xt=Vt,Yt={imt:function(t,n){console.log("mutations",t,n),console.log("+"),t.count+=n.payload},dmt:function(t,n){t.count-=n}},Zt=Yt,tn={GetCount:function(t,n){return t.count+"个鸡蛋"}},nn=tn;o["a"].use(Wt["a"]);var en=new Wt["a"].Store({state:At,mutations:Zt,getters:nn,actions:Xt}),on=en,an=e("b970");e("157a");o["a"].use(an["a"]),o["a"].prototype.$axios=Qt.a,window.axios=Qt.a;Qt.a,e("3aff"),e("bfc7");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(w)},router:It,store:on}).$mount("#app")},5868:function(t,n,e){"use strict";var o=e("8b8d"),a=e.n(o);a.a},"655b":function(t,n,e){},"6a9d":function(t,n,e){},"839a":function(t,n,e){},"8b8d":function(t,n,e){},a8b8:function(t,n,e){},b1bd:function(t,n,e){"use strict";var o=e("655b"),a=e.n(o);a.a},b899:function(t,n,e){t.exports=e.p+"img/1.d1e187a7.png"},bfc7:function(t,n){(function(t,n){var e=t.documentElement,o="orientationchange"in window?"orientationchange":"resize",a=function(){var t=e.clientWidth;t>=640&&(t=640),t&&(e.style.fontSize=t/640*100+"px")};t.addEventListener&&(n.addEventListener(o,a,!1),t.addEventListener("DOMContentLoaded",a,!1))})(document,window)},dda2:function(t,n,e){"use strict";var o=e("a8b8"),a=e.n(o);a.a}});
//# sourceMappingURL=app.a59fb60e.js.map