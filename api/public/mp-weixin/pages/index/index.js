(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0fc9":function(e,t,n){"use strict";n.r(t);var a=n("a8b1"),i=n("ef81");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("5bcf");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=u.exports},"302d":function(e,t,n){"use strict";(function(e){n("ebeb");a(n("66fd"));var t=a(n("0fc9"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"5bcf":function(e,t,n){"use strict";var a=n("8c4e"),i=n.n(a);i.a},"8c4e":function(e,t,n){},"97ea":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("a34a")),i=r(n("4a8c")),o=r(n("f0be"));function r(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,a,i,o,r){try{var c=e[o](r),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(a,i)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function r(e){c(o,a,i,r,u,"next",e)}function u(e){c(o,a,i,r,u,"throw",e)}r(void 0)}))}}var s={data:function(){return{modalName:null,wechat:null,guidanceMy:!1,titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:[],goodsList:[],adData:{},ctegory:[{id:1,fid:1,sid:3,tid:20,image:this.configURL.DomainName+"/storage/image/category/nQNqh1606374465_80.png",name:"男士T恤"},{id:2,fid:49,sid:51,tid:60,image:this.configURL.DomainName+"/storage/image/category/gSh0W1606375215_80.png",name:"女士T恤"},{id:3,fid:49,sid:69,tid:73,image:this.configURL.DomainName+"/storage/image/category/h6OZV1606375632_80.png",name:"高根鞋"},{id:4,fid:49,sid:50,tid:53,image:this.configURL.DomainName+"/storage/image/category/Ncdvt1606375053_80.png",name:"半身裙"},{id:5,fid:49,sid:50,tid:65,image:this.configURL.DomainName+"/storage/image/category/rpuxK1606375087_80.png",name:"打底裙"}]}},onLoad:function(){this.loadData(),this.wechat=e.getStorageSync("dsshopUserInfo").wechat,e.getStorageSync("applyDsshopGuidanceMy")||(this.guidanceMy=!0)},methods:{loadData:function(){var e=this;return u(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,o.default.getList({limit:10,type:0},(function(e){n.carouselList=e.data,n.swiperLength=e.data.length}));case 3:return t.next=5,o.default.getAdvertising({type:1},(function(e){n.adData=e}));case 5:return t.next=7,i.default.getList({limit:10,is_recommend:1},(function(e){n.goodsList=e.data}));case 7:return t.next=9,i.default.getCategoryShow({is_recommend:1},(function(e){console.log("res",e),n.ctegory=e}));case 9:case"end":return t.stop()}}),t)})))()},swiperChange:function(e){var t=e.detail.current;this.swiperCurrent=t},navToWwiperPage:function(e){console.log(e)},navToDetailPage:function(t){var n=t.id;e.navigateTo({url:"/pages/product/product?id=".concat(n)})},navTo:function(t){t&&e.navigateTo({url:t})},popupBoot:function(){this.modalName="guidanceMy",this.guidanceMy=!1,e.setStorageSync("applyDsshopGuidanceMy",!0)},setGuidanceMy:function(){this.guidanceMy=!1,e.setStorageSync("applyDsshopGuidanceMy",!0)}}};t.default=s}).call(this,n("543d")["default"])},a8b1:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.ctegory,(function(t,n){var a=e.__get_orig(t),i=t.resources?e._f("smallImage")(t.resources.img,80):null;return{$orig:a,f0:i}}))),a=e.__map(e.goodsList,(function(t,n){var a=e.__get_orig(t),i=e._f("smallImage")(t.resources.img,250),o=e._f("1000")(t.order_price);return{$orig:a,f1:i,f2:o}}));e._isMounted||(e.e0=function(t){e.modalName=null}),e.$mp.data=Object.assign({},{$root:{l0:n,l1:a}})},o=[]},ef81:function(e,t,n){"use strict";n.r(t);var a=n("97ea"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a}},[["302d","common/runtime","common/vendor"]]]);