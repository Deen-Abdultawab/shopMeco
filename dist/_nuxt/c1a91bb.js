(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{347:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},361:function(t,e,n){t.exports=n.p+"img/Group 1000004166.af07c8c.png"},380:function(t,e,n){t.exports=n.p+"img/mask1.1e5c74c.png"},419:function(t,e,n){var content=n(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("5cdfc193",content,!0,{sourceMap:!1})},428:function(t,e,n){t.exports=function(t){"use strict";var e,n=(e="Function",function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}),i={__countup__:t.CountUp,name:"VueCountUp",props:{delay:{type:Number,required:!1,default:0},endVal:{type:Number,required:!0},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(t){this.instance&&n(this.instance.update)&&this.instance.update(t)},deep:!1}},methods:{create:function(){var e=this;if(!e.instance){var n=e.$el,i=new t.CountUp(n,e.endVal,e.options);i.error||(e.instance=i,e.delay<0?e.$emit("ready",i,t.CountUp):setTimeout((function(){return i.start((function(){return e.$emit("ready",i,t.CountUp)}))}),e.delay))}},destroy:function(){this.instance=null},printValue:function(t){if(this.instance&&n(this.instance.printValue))return this.instance.printValue(t)},start:function(t){if(this.instance&&n(this.instance.start))return this.instance.start(t)},pauseResume:function(){if(this.instance&&n(this.instance.pauseResume))return this.instance.pauseResume()},reset:function(){if(this.instance&&n(this.instance.reset))return this.instance.reset()},update:function(t){if(this.instance&&n(this.instance.update))return this.instance.update(t)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}};return function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(""),function(t,e,n,i,s,o,r,a,u,l){"boolean"!=typeof r&&(u=a,a=r,r=!1);var c,d="function"==typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),i&&(d._scopeId=i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=c):e&&(c=r?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),c)if(d.functional){var p=d.render;d.render=function(t,e){return c.call(e),p(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,c):[c]}return n}({render:function(){var t=this.$createElement;return(this._self._c||t)("span")},staticRenderFns:[]},void 0,i,"data-v-0abbdf5a",!1,void 0,void 0,void 0)}(n(429))},429:function(t,e,n){"use strict";n.r(e),n.d(e,"CountUp",(function(){return r}));var o=function(){return(o=Object.assign||function(t){for(var i,e=1,s=arguments.length;e<s;e++)for(var a in i=arguments[e])Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);return t}).apply(this,arguments)},r=function(){function t(t,i,e){var s=this;this.endVal=i,this.options=e,this.version="2.6.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration);var e=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=e?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(t){var i,e,a,n,o=t<0?"-":"";i=Math.abs(t).toFixed(s.options.decimalPlaces);var r=(i+="").split(".");if(e=r[0],a=r.length>1?s.options.decimal+r[1]:"",s.options.useGrouping){n="";for(var l=3,c=0,u=0,p=e.length;u<p;++u)s.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(n=s.options.separator+n),c++,n=e[p-u-1]+n;e=n}return s.options.numerals&&s.options.numerals.length&&(e=e.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),a=a.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),o+s.options.prefix+e+a+s.options.suffix},this.easeOutExpo=function(t,i,e,s){return e*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=o(o({},this.defaults),e),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,e=t.el.getBoundingClientRect(),s=e.top+window.pageYOffset,a=e.top+e.height+window.pageYOffset;a<i&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||s>i)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i;if(this.el){var e=this.formattingFn(t);null!==(i=this.options.plugin)&&void 0!==i&&i.render?this.options.plugin.render(this.el,e):"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},430:function(t,e,n){"use strict";n(419)},431:function(t,e,n){var o=n(59),r=n(347),l=n(380),c=o((function(i){return i[1]})),d=r(l);c.push([t.i,'*[data-v-5b97f9c8],[data-v-5b97f9c8]:after,[data-v-5b97f9c8]:before{box-sizing:border-box;margin:0;padding:0}.all[data-v-5b97f9c8]{grid-gap:2rem;align-items:center;display:grid;gap:2rem;grid-template-columns:repeat(2,1fr);justify-items:center;padding:1rem 2.8rem;place-items:center}.mission[data-v-5b97f9c8]{display:flex;gap:1.5rem;justify-content:center}.all p[data-v-5b97f9c8]{text-align:justify;text-justify:inter-word}p[data-v-5b97f9c8]{color:#7c7c7c;font-family:"Sofia Pro";font-size:24px;font-style:normal;font-weight:400;line-height:26px;margin:0;width:100%}img[data-v-5b97f9c8]{height:65px;width:65px}.cover[data-v-5b97f9c8]{align-items:center;display:flex;flex-direction:column;justify-content:space-around;margin:50px auto auto;max-width:1200px}.cover h2[data-v-5b97f9c8]{font-family:"Inter";font-size:32px;height:39px;line-height:39px;margin-bottom:32px}.cover h2[data-v-5b97f9c8],.iCountUp[data-v-5b97f9c8]{color:#350b89;font-style:normal;font-weight:600;text-align:center}.iCountUp[data-v-5b97f9c8]{display:flex;flex-direction:column;font-size:60px;justify-content:center;padding:3rem 0}.iCountUp[data-v-5b97f9c8],.iCountUp p[data-v-5b97f9c8]{font-family:"Sofia Pro";line-height:35px}.iCountUp p[data-v-5b97f9c8]{color:#5007e0;font-size:26px;font-style:normal;font-weight:400;height:35px;padding-top:17px;text-align:center}.control[data-v-5b97f9c8]{align-items:center;background:#f5f3ff url('+d+');background-position:100%;background-repeat:no-repeat;display:flex;gap:3rem;justify-content:center;margin-top:40px;padding:2rem;width:100%}.control img[data-v-5b97f9c8]{height:128px;width:126px}h4[data-v-5b97f9c8]{color:#7c7c7c;font-family:"Sofia Pro";font-size:26px;font-style:normal;font-weight:400;line-height:35px;margin-top:110px;text-align:center}@media only screen and (max-width:900px){.all[data-v-5b97f9c8]{gap:3rem;grid-template-columns:1fr}.all .mission-icon2[data-v-5b97f9c8]{order:2}h4[data-v-5b97f9c8]{margin:50px auto 90px;padding:1rem}.control[data-v-5b97f9c8]{flex-direction:column;gap:0}.border-btm[data-v-5b97f9c8]{border-bottom:1px solid #fff;-o-border-image:linear-gradient(90deg,#f5f3ff,#26046a,#f5f3ff);border-image:linear-gradient(90deg,#f5f3ff,#26046a,#f5f3ff);border-image-slice:1;padding-bottom:4rem;width:100%}}@media only screen and (max-width:600px){.mission[data-v-5b97f9c8]{align-items:center}.mission p[data-v-5b97f9c8]{font-size:20px}}',""]),c.locals={},t.exports=c},466:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"cover container"},[e("h2",[t._v("Our Mission & Vision")]),t._v(" "),e("div",{staticClass:"all"},[e("div",{staticClass:"mission"},[e("img",{staticClass:"mission-icon1",attrs:{src:n(361),alt:""}}),t._v(" "),e("p",[t._v("\n              Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.\n            ")])]),t._v(" "),e("div",{staticClass:"mission"},[e("img",{staticClass:"mission-icon2",attrs:{src:n(361),alt:""}}),t._v(" "),e("p",[t._v("\n              Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.\n            ")])])])])}],r=n(428),l={components:{ICountUp:n.n(r).a},data:function(){return{delay:1e3,endVal:50,endValy:30,endValue:70,options:{suffix:"+"}}},methods:{onReady:function(t,e){t.update(this.endVal)},andReady:function(t,e){t.update(this.endValy)},weReady:function(t,e){t.update(this.endValue)}}},c=(n(430),n(69)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",[e("h4",[t._v("We connect customers with expert technicians.")]),t._v(" "),e("div",{staticClass:"control"},[e("div",{staticClass:"iCountUp border-btm"},[e("ICountUp",{attrs:{delay:t.delay,endVal:t.endVal,options:t.options},on:{ready:t.onReady}}),t._v(" "),e("p",[t._v("registered technicians")])],1),t._v(" "),e("div",{staticClass:"iCountUp border-btm"},[e("ICountUp",{attrs:{delay:t.delay,endVal:t.endValy,options:t.options},on:{ready:t.andReady}}),t._v(" "),e("p",[t._v("registered companies")])],1),t._v(" "),e("div",{staticClass:"iCountUp"},[e("ICountUp",{attrs:{delay:t.delay,endVal:t.endValue,options:t.options},on:{ready:t.weReady}}),t._v(" "),e("p",[t._v("registered customers")])],1)])])])}),o,!1,null,"5b97f9c8",null);e.default=component.exports}}]);