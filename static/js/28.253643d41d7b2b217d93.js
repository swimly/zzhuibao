webpackJsonp([28],{1028:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page gray"},[i("swiper",{staticClass:"w",attrs:{"aspect-ratio":315/712,"dots-position":"center",auto:""}},t._l(t.recommend,function(t,e){return i("swiper-item",{key:e,staticClass:"swiper-demo-img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.url,expression:"item.url"}],staticClass:"w"})])})),t._v(" "),i("div",{staticClass:"p-1 white sub-line"},[i("div",{staticClass:"row w d-line fs-1"},[i("router-link",{staticClass:"col v-m t-c c-6",attrs:{to:"/detail/"+t.userId}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"static/img/score.png",expression:"'static/img/score.png'"}],staticClass:"v-m",staticStyle:{width:"2rem"},attrs:{alt:""}}),t._v(" "),i("span",{staticClass:"v-m"},[t._v("积分：")]),t._v(" "),i("span",{staticClass:"c-red v-m"},[t._v(t._s(t.score))])]),t._v(" "),i("router-link",{staticClass:"col v-m t-c c-6",attrs:{to:"/exchange/"+t.userId}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"static/img/jilu.png",expression:"'static/img/jilu.png'"}],staticClass:"v-m ",staticStyle:{width:"2rem"},attrs:{alt:""}}),t._v(" "),i("span",{staticClass:"v-m"},[t._v("兑换记录")])])],1)]),t._v(" "),i("div",{staticClass:"grid t-l white mt-5 click top-line sub-line quick"},[t._v("\n    "+t._s(t.nav)+"\n    "),t._l(t.nav,function(e,n){return i("router-link",{key:n,staticClass:"col col-6 t-c",attrs:{to:"/mall/"+e.id}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"static/img/index1.png",expression:"'static/img/index1.png'"}],staticClass:"icon",attrs:{alt:""}}),t._v(" "),i("b",{staticClass:"block fs-1 c-n"},[t._v(t._s(e.name))])])})],2),t._v(" "),t.advert.length>0?i("swiper",{staticClass:"w",attrs:{"aspect-ratio":83/360,"dots-position":"center",auto:""}},t._l(t.advert,function(t,e){return i("swiper-item",{key:e,staticClass:"swiper-demo-img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.url,expression:"item.url"}],staticClass:"w"})])})):t._e(),t._v(" "),i("h2",{staticClass:"title"},[t._v("新品推荐")]),t._v(" "),i("ul",{staticClass:"grid goods-list"},t._l(t.list,function(e,n){return i("li",{key:n,staticClass:"col col-12"},[i("router-link",{staticClass:"goods",attrs:{to:"/goods/"+e.id},nativeOn:{click:function(i){t.handleSaveData(e)}}},[i("span",{staticClass:"cover"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.listPic,error:"static/img/err1.png",loading:"static/img/loading1.gif"},expression:"{src: item.listPic, error: 'static/img/err1.png', loading: 'static/img/loading1.gif'}"}]})]),t._v(" "),i("b",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),i("span",{staticClass:"c-red"},[t._v("积分"),i("b",{staticClass:"score"},[t._v(t._s(e.score))])])])],1)}))],1)},staticRenderFns:[]}},143:function(t,e,i){i(960);var n=i(16)(i(541),i(1028),"data-v-fdd0f85a",null);t.exports=n.exports},179:function(t,e,i){"use strict";function n(t,e){if(!/^javas/.test(t)&&t){"object"===(void 0===t?"undefined":s()(t))||e&&"string"==typeof t&&!/http/.test(t)?"BACK"===t?e.go(-1):e.push(t):window.location.href=t}}e.a=n;var o=i(32),s=i.n(o)},207:function(t,e,i){"use strict";e.a={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},250:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},251:function(t,e,i){"use strict";e.__esModule=!0;var n=i(263),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,o.default)(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}()},257:function(t,e,i){t.exports="function"==typeof Array.from?Array.from:i(258)},258:function(t,e){t.exports=function(){var t=function(t){return"function"==typeof t},e=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e},i=Math.pow(2,53)-1,n=function(t){var n=e(t);return Math.min(Math.max(n,0),i)},o=function(t){if(null!=t){if(["string","number","boolean","symbol"].indexOf(typeof t)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in t)return Symbol.iterator;if("@@iterator"in t)return"@@iterator"}},s=function(e,i){if(null!=e&&null!=i){var n=e[i];if(null==n)return;if(!t(n))throw new TypeError(n+" is not a function");return n}},r=function(t){var e=t.next();return!Boolean(e.done)&&e};return function(e){"use strict";var i,a=this,c=arguments.length>1?arguments[1]:void 0;if(void 0!==c){if(!t(c))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}var l,u,d=s(e,o(e));if(void 0!==d){l=t(a)?Object(new a):[];var h=d.call(e);if(null==h)throw new TypeError("Array.from requires an array-like or iterable object");u=0;for(var v,p;;){if(!(v=r(h)))return l.length=u,l;p=v.value,l[u]=c?c.call(i,p,u):p,u++}}else{var f=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var A=n(f.length);l=t(a)?Object(new a(A)):new Array(A),u=0;for(var m;u<A;)m=f[u],l[u]=c?c.call(i,m,u):m,u++;l.length=A}return l}}()},259:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}}},260:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(33),o=i.n(n),s=i(262),r=i(179);e.default={created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight()})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop&&(this.listTwoLoopItem=this.list)},clickListItem:function(t){i.i(r.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(o()(t)))},buildBackgroundUrl:function(t){return"url("+t+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new s.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:{type:Boolean,default:!1},loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{list:function(t){this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}},262:function(t,e,i){"use strict";var n=i(250),o=i.n(n),s=i(251),r=i.n(s),a=i(257),c=i.n(a),l=i(61),u=i.n(l),d=function(){function t(e){if(o()(this,t),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=u()(this._default,e),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return r()(t,[{key:"_auto",value:function(){var t=this;t.stop(),t._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout(function(){t.updateItemWidth(),t._setOffset(),t._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var t=0;t<this.realCount;t++)this._position.push(t)}},{key:"_movePosition",value:function(t){var e=this;if(t>0){var i=e._position.splice(0,1);e._position.push(i[0])}else if(t<0){var n=e._position.pop();e._position.unshift(n)}}},{key:"_setOffset",value:function(){var t=this,e=t._position.indexOf(t._current);t._offset=[],c()(t.$items).forEach(function(i,n){t._offset.push((n-e)*t._distance)})}},{key:"_setTransition",value:function(t){t=t||this._options.duration||"none";var e="none"===t?"none":t+"ms";c()(this.$items).forEach(function(t,i){t.style.webkitTransition=e,t.style.transition=e})}},{key:"_setTransform",value:function(t){var e=this;t=t||0,c()(e.$items).forEach(function(i,n){var o=e._offset[n]+t,s="translate3d("+o+"px, 0, 0)";"vertical"===e._options.direction&&(s="translate3d(0, "+o+"px, 0)"),i.style.webkitTransform=s,i.style.transform=s})}},{key:"_bind",value:function(){var t=this;t.touchstartHandler=function(e){t.stop(),t._start.x=e.changedTouches[0].pageX,t._start.y=e.changedTouches[0].pageY,t._setTransition("none")},t.touchmoveHandler=function(e){t._move.x=e.changedTouches[0].pageX,t._move.y=e.changedTouches[0].pageY;var i=t._move.x-t._start.x,n=t._move.y-t._start.y,o=n,s=Math.abs(i)>Math.abs(n);"horizontal"===t._options.direction&&s&&(o=i),(t._options.minMovingDistance&&Math.abs(o)>=t._options.minMovingDistance||!t._options.minMovingDistance)&&s&&t._setTransform(o),s&&e.preventDefault()},t.touchendHandler=function(e){t._end.x=e.changedTouches[0].pageX,t._end.y=e.changedTouches[0].pageY;var i=t._end.y-t._start.y;"horizontal"===t._options.direction&&(i=t._end.x-t._start.x),0!==(i=t.getDistance(i))&&t._options.minMovingDistance&&Math.abs(i)<t._options.minMovingDistance||(i>t._options.threshold?t.move(-1):i<-t._options.threshold?t.move(1):t.move(0),t._loopRender())},t.transitionEndHandler=function(e){t._activate(t._current);var i=t._eventHandlers.swiped;i&&i.apply(t,[t._prev%t.count,t._current%t.count]),t._auto(),t._loopRender(),e.preventDefault()},t.$container.addEventListener("touchstart",t.touchstartHandler,!1),t.$container.addEventListener("touchmove",t.touchmoveHandler,!1),t.$container.addEventListener("touchend",t.touchendHandler,!1),t.$items[1]&&t.$items[1].addEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var t=this;t._loop()&&(0===t._offset[t._offset.length-1]?(t.$container.appendChild(t.$items[0]),t._loopEvent(1)):0===t._offset[0]&&(t.$container.insertBefore(t.$items[t.$items.length-1],t.$container.firstChild),t._loopEvent(-1)))}},{key:"_loopEvent",value:function(t){var e=this;e._itemDestoy(),e.$items=e.$container.querySelectorAll(e._options.item),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1),e._movePosition(t),e._setOffset(),e._setTransform()}},{key:"getDistance",value:function(t){return this._loop()?t:t>0&&0===this._current?0:t<0&&this._current===this.realCount-1?0:t}},{key:"_moveIndex",value:function(t){0!==t&&(this._prev=this._current,this._current+=this.realCount,this._current+=t,this._current%=this.realCount)}},{key:"_activate",value:function(t){var e=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(i,n){i.classList.remove(e),t===Number(i.dataset.index)&&i.classList.add(e)})}},{key:"go",value:function(t){var e=this;return e.stop(),t=t||0,t+=this.realCount,t%=this.realCount,t=this._position.indexOf(t)-this._position.indexOf(this._current),e._moveIndex(t),e._setOffset(),e._setTransition(),e._setTransform(),e._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(t){return this.go(this._current+t),this}},{key:"on",value:function(t,e){return this._eventHandlers[t]&&console.error("[swiper] event "+t+" is already register"),"function"!=typeof e&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[t]=e,this}},{key:"_itemDestoy",value:function(){var t=this;this.$items.length&&c()(this.$items).forEach(function(e){e.removeEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var t=this.$container.querySelector(this._options.item+"-clone");t&&this.$container.removeChild(t),t=this.$container.querySelector(this._options.item+"-clone"),t&&this.$container.removeChild(t)}}}]),t}();e.a=d},263:function(t,e,i){t.exports={default:i(264),__esModule:!0}},264:function(t,e,i){i(265);var n=i(7).Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},265:function(t,e,i){var n=i(18);n(n.S+n.F*!i(3),"Object",{defineProperty:i(4).f})},267:function(t,e,i){e=t.exports=i(58)(),e.push([t.i,".vux-slider{overflow:hidden;position:relative}.vux-slider .vux-indicator-right,.vux-slider>.vux-indicator{position:absolute;right:15px;bottom:10px}.vux-slider .vux-indicator-right>a,.vux-slider>.vux-indicator>a{float:left;margin-left:6px}.vux-slider .vux-indicator-right>a>.vux-icon-dot,.vux-slider>.vux-indicator>a>.vux-icon-dot{display:inline-block;vertical-align:middle;width:6px;height:6px;border-radius:3px;background-color:#d0cdd1}.vux-slider .vux-indicator-right>a>.vux-icon-dot.active,.vux-slider>.vux-indicator>a>.vux-icon-dot.active{background-color:#eb3d00}.vux-slider>.vux-indicator-center{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vux-slider>.vux-indicator-left{left:15px;right:auto}.vux-slider>.vux-swiper{overflow:hidden;position:relative}.vux-slider>.vux-swiper>.vux-swiper-item{position:absolute;top:0;left:0;width:100%;height:100%}.vux-slider>.vux-swiper>.vux-swiper-item>a{display:block;width:100%;height:100%}.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-img{display:block;width:100%;height:100%;background:50% no-repeat;background-size:cover}.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-swiper-desc{position:absolute;left:0;right:0;bottom:0;height:1.4em;font-size:16px;padding:20px 50px 12px 13px;margin:0;background-image:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.7));background-image:linear-gradient(180deg,transparent 0,rgba(0,0,0,.7));color:#fff;text-shadow:0 1px 0 rgba(0,0,0,.5);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}","",{version:3,sources:["E:/User/Documents/Projects/zzbao-wx/node_modules/vux/src/components/swiper/swiper.vue"],names:[],mappings:"AAoGA,YACE,gBAAiB,AACjB,iBAAmB,CACpB,AACD,4DAEE,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd,AACD,gEAEE,WAAY,AACZ,eAAiB,CAClB,AACD,4FAEE,qBAAsB,AACtB,sBAAuB,AACvB,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,wBAA0B,CAC3B,AACD,0GAEE,wBAA0B,CAC3B,AACD,kCACE,UAAW,AACX,kCAAmC,AAC3B,yBAA2B,CACpC,AACD,gCACE,UAAW,AACX,UAAY,CACb,AACD,wBACE,gBAAiB,AACjB,iBAAmB,CACpB,AACD,yCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,WAAa,CACd,AACD,2CACE,cAAe,AACf,WAAY,AACZ,WAAa,CACd,AACD,oDACE,cAAe,AACf,WAAY,AACZ,YAAa,AACb,yBAAoC,AACpC,qBAAuB,CACxB,AACD,4DACE,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,SAAU,AACV,aAAc,AACd,eAAgB,AAChB,4BAA6B,AAC7B,SAAU,AACV,yEAA4F,AAC5F,sEAA0F,AAC1F,WAAY,AACZ,mCAAwC,AACxC,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,gBAAkB,CACnB",file:"swiper.vue",sourcesContent:["/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n.vux-slider {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-indicator,\n.vux-slider .vux-indicator-right {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n}\n.vux-slider > .vux-indicator > a,\n.vux-slider .vux-indicator-right > a {\n  float: left;\n  margin-left: 6px;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot {\n  display: inline-block;\n  vertical-align: middle;\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #d0cdd1;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot.active,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {\n  background-color: #EB3D00;\n}\n.vux-slider > .vux-indicator-center {\n  right: 50%;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}\n.vux-slider > .vux-indicator-left {\n  left: 15px;\n  right: auto;\n}\n.vux-slider > .vux-swiper {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: center center no-repeat;\n  background-size: cover;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.4em;\n  font-size: 16px;\n  padding: 20px 50px 12px 13px;\n  margin: 0;\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n"],sourceRoot:""}])},269:function(t,e,i){var n=i(267);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(129)("57cb6a5a",n,!0)},273:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-swiper-item"},[t._t("default")],2)},staticRenderFns:[]}},274:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,n){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e.img)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,n){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e.img)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},staticRenderFns:[]}},276:function(t,e,i){var n=i(16)(i(259),i(273),null,null);t.exports=n.exports},277:function(t,e,i){i(269);var n=i(16)(i(260),i(274),null,null);t.exports=n.exports},281:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(294),o=i.n(n),s=i(298),r=i.n(s),a=i(207);e.default={mixins:[a.a],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){var e=t,i="vux-ximg-"+t.uuid;t.$el.setAttribute("id",i),t.blazy=new o.a({scroller:t.scroller,container:t.container,selector:"#"+i,offset:e.offset,errorClass:e.errorClass,successClass:e.successClass,success:function(t){e.$emit("on-success",e.src,t)},error:function(t,i){e.$emit("on-error",e.src,t,i)}})},t.delay)})},computed:{currentSrc:function(){return r()()&&this.webpSrc?this.webpSrc:this.src}},props:{src:String,webpSrc:String,defaultSrc:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},errorClass:String,successClass:String,offset:{type:Number,defaut:100},scroller:Object,container:String,delay:{type:Number,default:100}},beforeDestroy:function(){this.blazy&&this.blazy.destroy()}}},285:function(t,e,i){e=t.exports=i(58)(),e.push([t.i,".b-lazy{-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out;max-width:100%;opacity:0}.b-lazy.b-loaded{opacity:1}","",{version:3,sources:["E:/User/Documents/Projects/zzbao-wx/node_modules/vux/src/components/x-img/index.vue"],names:[],mappings:"AACA,QACE,2CAA8C,AAC9C,mCAAsC,AACtC,eAAgB,AAChB,SAAW,CACZ,AACD,iBACE,SAAW,CACZ",file:"index.vue",sourcesContent:["\n.b-lazy {\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n  max-width: 100%;\n  opacity: 0;\n}\n.b-lazy.b-loaded {\n  opacity: 1;\n}\n"],sourceRoot:""}])},288:function(t,e,i){var n=i(285);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(129)("080522ee",n,!0)},293:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"vux-x-img",attrs:{src:t.defaultSrc,"data-src":t.currentSrc}})},staticRenderFns:[]}},294:function(t,e,i){var n,o;!function(s,r){n=r,void 0!==(o="function"==typeof n?n.call(e,i,e,t):n)&&(t.exports=o)}(0,function(){"use strict";function t(t){var i=t._util;if(i.elements=u(t.options.selector),i.count=i.elements.length,i.destroyed&&(i.destroyed=!1,t.options.container&&p(t.options.container,function(t){h(t,"scroll",i.validateT)}),h(window,"resize",i.saveViewportOffsetT),h(window,"resize",i.validateT),h(window,"scroll",i.validateT),t.options.scroller)){var n=t.options.scroller._xscroll,o=n.userConfig.useOriginScroll?"scroll":"scrollend";n.on("afterrender",i.validateT,t),n.on(o,i.validateT,t)}e(t)}function e(t){for(var e=t._util,n=0;n<e.count;n++){var o=e.elements[n];(i(o)||c(o,t.options.successClass))&&(t.load(o),e.elements.splice(n,1),e.count--,n--)}0===e.count&&t.destroy()}function i(t){var e=t.getBoundingClientRect();return e.right>=m.left&&e.bottom>=m.top&&e.left<=m.right&&e.top<=m.bottom}function n(t,e,i){if(!c(t,i.successClass)&&(e||i.loadInvisible||t.offsetWidth>0&&t.offsetHeight>0)){var n=t.getAttribute(A)||t.getAttribute(i.src);if(n){var u=n.split(i.separator),d=u[g&&u.length>1?1:0],f=a(t,"img");if(f||void 0===t.src){var m=new Image,w=function(){i.error&&i.error(t,"invalid"),l(t,i.errorClass),v(m,"error",w),v(m,"load",C)},C=function(){if(f){s(t,d),r(t,_,i.srcset);var e=t.parentNode;e&&a(e,"picture")&&p(e.getElementsByTagName("source"),function(t){r(t,_,i.srcset)}),i.scroller&&i.scroller.reset()}else t.style.backgroundImage='url("'+d+'")';o(t,i),v(m,"load",C),v(m,"error",w)};h(m,"error",w),h(m,"load",C),s(m,d)}else s(t,d),o(t,i)}else a(t,"video")?(p(t.getElementsByTagName("source"),function(t){r(t,x,i.src)}),t.load(),o(t,i)):(i.error&&i.error(t,"missing"),l(t,i.errorClass))}}function o(t,e){l(t,e.successClass),e.success&&e.success(t),t.removeAttribute(e.src),p(e.breakpoints,function(e){t.removeAttribute(e.src)})}function s(t,e){t[x]=e}function r(t,e,i){var n=t.getAttribute(i);n&&(t[e]=n,t.removeAttribute(i))}function a(t,e){return t.nodeName.toLowerCase()===e}function c(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")}function l(t,e){c(t,e)||(t.className+=" "+e)}function u(t){for(var e=[],i=document.querySelectorAll(t),n=i.length;n--;e.unshift(i[n]));return e}function d(t){m.bottom=(window.innerHeight||document.documentElement.clientHeight)+t,m.right=(window.innerWidth||document.documentElement.clientWidth)+t}function h(t,e,i){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,i):t.addEventListener(e,i,!1)}function v(t,e,i){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,i):t.removeEventListener(e,i,!1)}function p(t,e){if(t&&e)for(var i=t.length,n=0;n<i&&!1!==e(t[n],n);n++);}function f(t,e,i){var n=0;return function(){var o=+new Date;o-n<e||(n=o,t.apply(i,arguments))}}var A,m,g,x="src",_="srcset";return function(i){if(!document.querySelectorAll){var o=document.createStyleSheet();document.querySelectorAll=function(t,e,i,n,s){for(s=document.all,e=[],t=t.replace(/\[for\b/gi,"[htmlFor").split(","),i=t.length;i--;){for(o.addRule(t[i],"k:v"),n=s.length;n--;)s[n].currentStyle.k&&e.push(s[n]);o.removeRule(0)}return e}}var s=this,r=s._util={};r.elements=[],r.destroyed=!0,s.options=i||{},s.options.error=s.options.error||!1,s.options.offset=s.options.offset||100,s.options.success=s.options.success||!1,s.options.selector=s.options.selector||".b-lazy",s.options.separator=s.options.separator||"|",s.options.container=!!s.options.container&&document.querySelectorAll(s.options.container),s.options.errorClass=s.options.errorClass||"b-error",s.options.breakpoints=s.options.breakpoints||!1,s.options.loadInvisible=s.options.loadInvisible||!1,s.options.successClass=s.options.successClass||"b-loaded",s.options.validateDelay=s.options.validateDelay||25,s.options.saveViewportOffsetDelay=s.options.saveViewportOffsetDelay||50,s.options.srcset=s.options.srcset||"data-srcset",s.options.src=A=s.options.src||"data-src",g=window.devicePixelRatio>1,m={},m.top=0-s.options.offset,m.left=0-s.options.offset,s.revalidate=function(){t(this)},s.load=function(t,e){var i=this.options;void 0===t.length?n(t,e,i):p(t,function(t){n(t,e,i)})},s.destroy=function(){var t=this,e=t._util;t.options.container&&p(t.options.container,function(t){v(t,"scroll",e.validateT)}),v(window,"scroll",e.validateT),v(window,"resize",e.validateT),v(window,"resize",e.saveViewportOffsetT),t.scroller&&t.scroller._xscroll&&t.scroller._xscroll.off("scroll scrollend afterrender",e.validateT,t.scroller._xscroll),e.count=0,e.elements.length=0,e.destroyed=!0},r.validateT=f(function(){e(s)},s.options.validateDelay,s),r.saveViewportOffsetT=f(function(){d(s.options.offset)},s.options.saveViewportOffsetDelay,s),d(s.options.offset),p(s.options.breakpoints,function(t){if(t.width>=window.screen.width)return A=t.src,!1}),setTimeout(function(){t(s)})}})},297:function(t,e,i){i(288);var n=i(16)(i(281),i(293),null,null);t.exports=n.exports},298:function(t,e){var i="can_use_webp";!function(){if(window.localStorage&&"object"==typeof localStorage&&(!localStorage.getItem(i)||"available"!==localStorage.getItem(i)&&"disable"!==localStorage.getItem(i))){var t=document.createElement("img");t.onload=function(){try{localStorage.setItem(i,"available")}catch(t){}},t.onerror=function(){try{localStorage.setItem(i,"disable")}catch(t){}},t.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA=="}}(),t.exports=function(){return!!window.localStorage&&"available"===window.localStorage.getItem(i)}},541:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(33),o=i.n(n),s=i(59),r=i.n(s),a=i(277),c=i.n(a),l=i(276),u=i.n(l),d=i(297),h=i.n(d),v=i(34);e.default={name:"mall",head:{title:{inner:"积分商城"}},data:function(){return{score:0,userId:"null",list:[],recommend:[],advert:[],product:{type:0,timeOrder:0,priceOrder:0,defaultOrder:0,limit:8,pageIndex:0}}},created:function(){this.getProduct(this),"true"===this.$localStorage.get("logined")&&(this.userId=JSON.parse(this.$localStorage.get("userInfo")).userId)},computed:r()({},i.i(v.a)({nav:"getMallNav"})),methods:r()({},i.i(v.b)({getProduct:"getProduct"}),{handleSaveData:function(t){this.$localStorage.set("goods",o()(t))}}),components:{Swiper:c.a,SwiperItem:u.a,XImg:h.a}}},640:function(t,e,i){e=t.exports=i(58)(),e.push([t.i,".icon[data-v-fdd0f85a]{width:3rem}.quick[data-v-fdd0f85a]{padding:.5rem 0}.quick a[data-v-fdd0f85a]{padding:.5rem 0;line-height:2}","",{version:3,sources:["E:/User/Documents/Projects/zzbao-wx/src/views/Mall.vue"],names:[],mappings:"AACA,uBAAuB,UAAW,CACjC,AACD,wBAAwB,eAAiB,CACxC,AACD,0BAA0B,gBAAiB,aAAc,CACxD",file:"Mall.vue",sourcesContent:["\n.icon[data-v-fdd0f85a]{width:3rem;\n}\n.quick[data-v-fdd0f85a]{padding:0.5rem 0;\n}\n.quick a[data-v-fdd0f85a]{padding:0.5rem 0;line-height:2;\n}\n"],sourceRoot:""}])},960:function(t,e,i){var n=i(640);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(129)("53ac5bb8",n,!0)}});
//# sourceMappingURL=28.253643d41d7b2b217d93.js.map