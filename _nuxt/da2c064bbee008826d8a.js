(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{239:function(t,e,i){var n=i(248);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(9).default)("9006e9be",n,!0,{sourceMap:!1})},240:function(t,e,i){var n=i(256);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(9).default)("089d7275",n,!0,{sourceMap:!1})},242:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i(0);function a(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.default.extend({mixins:t})}},244:function(t,e,i){"use strict";var n=i(0).default.extend({transition:{css:!1,enter:function(t,e){e()},leave:function(t,e){this.$dispatch("global/setIsMenuOpen",!1),e()}}}),a=i(2),s=Object(a.a)(n,void 0,void 0,!1,null,null,null);e.a=s.exports},245:function(t,e,i){"use strict";i(255);var n=i(2),a=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("main",{staticClass:"main",attrs:{id:"main"}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},246:function(t,e,i){"use strict";var n=i(0),a="your title",s="your desc",r="word",o="default/ogp.png",l="your-root-url",c="article",p=n.default.extend({data:function(){return{title:"",keywords:"",desc:"",ogImg:"",ogType:"",url:""}},head:function(){return{title:this.title||a,meta:[{hid:"keywords",name:"keywords",content:this.keywords||r},{hid:"description",name:"description",content:this.desc||s},{hid:"og:title",property:"og:title",content:this.title||a},{hid:"og:description",property:"og:description",content:this.desc||s},{hid:"og:locale",property:"og:locale",content:"ja_JP"},{hid:"og:type",property:"og:type",content:this.ogType||c},{hid:"og:url",property:"og:url",content:this.url||l},{hid:"og:image",property:"og:image",content:this.ogImg||o},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:this.title||a},{hid:"twitter:description",name:"twitter:description",content:this.desc||s},{hid:"twitter:image",name:"twitter:image",content:o},{hid:"twitter:site",name:"twitter:site",content:"@voguejp"}]}}}),d=i(2),u=Object(d.a)(p,void 0,void 0,!1,null,null,null);e.a=u.exports},247:function(t,e,i){"use strict";var n=i(239);i.n(n).a},248:function(t,e,i){(e=i(8)(!1)).push([t.i,".ph__title[data-v-848ad47c]{font-family:Montserrat,sans-serif;font-size:5vw;text-transform:capitalize;opacity:.2}",""]),t.exports=e},249:function(t,e,i){"use strict";var n=i(0),a=i(109),s=n.default.extend({name:"Heading1",props:{text:{type:String,default:""}},mounted:function(){this.animation()},methods:{animation:function(){a.a.to(this.$el,{duration:1.1,scale:2,repeat:-1,yoyo:!0,text:"Is this new text ?",ease:"none"})}}}),r=(i(247),i(2)),o=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticClass:"ph__title",domProps:{textContent:this._s(this.text)}})}),[],!1,null,"848ad47c",null);e.a=o.exports},255:function(t,e,i){"use strict";var n=i(240);i.n(n).a},256:function(t,e,i){(e=i(8)(!1)).push([t.i,".main{width:100%;padding-top:5vw;padding-bottom:5vw;overflow:hidden}@media screen and (min-width:980px){.main{padding-top:165px}}",""]),t.exports=e},276:function(t,e,i){t.exports=i.p+"img/2d3367d.jpg"},277:function(t,e,i){var n=i(319);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(9).default)("2097b971",n,!0,{sourceMap:!1})},278:function(t,e,i){var n=i(321);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(9).default)("6d95d78d",n,!0,{sourceMap:!1})},318:function(t,e,i){"use strict";var n=i(277);i.n(n).a},319:function(t,e,i){(e=i(8)(!1)).push([t.i,"[lazy=loading][data-v-b6e18dee]{opacity:0}[lazy=loaded][data-v-b6e18dee]{opacity:1}",""]),t.exports=e},320:function(t,e,i){"use strict";var n=i(278);i.n(n).a},321:function(t,e,i){(e=i(8)(!1)).push([t.i,".ps__inner[data-v-065a960a]{padding-right:10vw;padding-left:10vw}",""]),t.exports=e},364:function(t,e,i){"use strict";i.r(e);var n=i(242),a=i(245),s={props:{src:{type:String,default:""},alt:{type:String,default:""}}},r=(i(318),i(2)),o=Object(r.a)(s,(function(t,e){return(0,e._c)("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.src,expression:"src"}],attrs:{alt:e.alt,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="}})}),[],!0,null,"b6e18dee",null).exports,l=i(249),c=i(246),p=i(244),d=Object(n.a)(c.a,p.a).extend({components:{Wrapper:a.a,LazyImage:o,Heading1:l.a},data:function(){return{swiperOption:{loop:!1,speed:450,pagination:{el:".swiper-pagination",clickable:!0,bulletElement:"a"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,centeredSlides:!0,on:{transitionEnd:function(){}},preloadImages:!1,watchSlidesProgress:!0,lazy:{loadPrevNext:!0,loadPrevNextAmount:1,loadOnTransitionStart:!0}}}},computed:{swiper:function(){var t=this.$refs.mySwiper;return t.swiper}},mounted:function(){this.$dispatch("global/setIsPageReady",!0)},updated:function(){},beforeDestroy:function(){this.$dispatch("global/setIsPageReady",!1)}}),u=(i(320),Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("Wrapper",{staticClass:"page-sub"},[e("Heading1",{attrs:{text:"this is sub"}}),this._v(" "),e("div",{staticClass:"ps__inner"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:this.swiperOption,expression:"swiperOption",arg:"mySwiper"}],ref:"mySwiper",staticClass:"sl__items"},[e("div",{staticClass:"swiper-wrapper"},this._l(5,(function(t){return e("div",{key:"figure"+t,staticClass:"swiper-slide"},[e("figure",{staticClass:"ph__figure"},[e("img",{staticClass:"swiper-lazy",attrs:{src:i(276),alt:""}})])])})),0),this._v(" "),e("a",{staticClass:"swiper-button-prev",attrs:{href:"#"}}),this._v(" "),e("a",{staticClass:"swiper-button-next",attrs:{href:"#"}}),this._v(" "),e("div",{staticClass:"swiper-pagination"})])])],1)}),[],!1,null,"065a960a",null));e.default=u.exports}}]);