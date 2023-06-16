exports.ids = [15,2,4,7,8,13];
exports.modules = Array(47).concat([
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Mask group.3619536.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 5751.46f9976.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg2.743e4b9.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3721.b08a413.png";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgBzdQxDsIgFAbgB1079CgeoG08gjcw3qAzA8GEcI4eRWFx9AbGG+hOQNgaQylQY/pPL++9fCwvAGwhwzA0czMMmaGUHuu6fhBCdqtBjxljRlc2GONDaAdBYiaYz5lzzorBVCwJzMEWwVwsCpZgs2Ap5hM8G6319CELGalCTaXUvW3bJ0LI39q+73uQUl6hFFyDVrFhCRoFS9BFMBdNAkNo13Vv17t972X9NkKI0d3nyZUva+0FfhXGWAP/ygenaYKWi5dY1QAAAABJRU5ErkJggg=="

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f0429690", content, true, context)
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3707.6f01025.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3720.7eb590d.png";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAYCAYAAAAh8HdUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADxSURBVHgB7ZExDoJAEEVnZROMa6GNtVpYWCjcQG/CDbyCnsB4Ar2JR4BYaoFWJjZQmEAiyzhbYAA3EuxM/AkZ5u+83ZldBhq5rt9p8/YCEWcMmIWAHeXTfygRVlwHCC72BFgqJ+C1pmBGX6MMCUOsadWCDypAvhuoNhyoUKG9BGI6wSgUpJhuojRa2vYg1J6EhtEv75qkyS4PvEE6tUwRlL1KSCd+cq+zLKHLnZYLHom0qWaQ5XeIPXY83BBqSEo5r92eaTb92tBw3L3UgxA8Ffho0mOZR/M5FLb5OjUDhXPe41AhNYNqKe999U5/6DegJ0vmUEeoVyxtAAAAAElFTkSuQmCC"

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAWCAYAAAAxSueLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI7SURBVHgBrVVBctNAEJzRilQRc3AuBk4olwQuifUC5BckeQHiBeQHhBcYXmD7B/YLEC+wYw4hcLA4uUgu4pQD2h1mtsoqxZJsJXZXSatdraa3Z0YzCBvi1/fbgIhO+LHJV0JA3w6Png/ze8bjWdP39xNcLPyc3oQHR60+1IQYaDxpdMFAWPI61lp3XNf1+PmtNnrv9fGLc9eebjwPCKB3fXlDh8etQQ0uaKhKIoGnlJqxYuArJkMdWXTkph23LSMi9NktH2ENrqd/TnkIoQaYbsTEPfGEU3hJdMEu7V2N516VAQQ8gZpw0PnAw0BiZsnIpJOlPaG4oZIUwYOakNgtciFLEI7XDKuNRIZwpPhQHOQ4VW6X3XMKNcBEGYebHdbAGSr8ykaaJd8EDlJASsE/OyWoiSQ/sW78cXl7Dgq6hswItgmCOD+1ymzMlOoiImwTBszv/Nwqe+O/jDh6EWwZhDQskAl0qt/TkuyNoe8LyMhYXWyM7vA/NITtoC82S8nsRDltzsaEXTqBDcH/16flNTc/2dE7UarSHleRJmyGgirBPWX7/l5CmsSVCTwSUnjLVBXIBAd+a5Lq1OePBo9ImAQNnpWpEqz8saTHscpuRVUpEHH2deSwVRsKZNIKnjrPQi5PUtkDqAFxnShaRWTJbMeVRsgNjyuex+wePABc4r7cmbsLaSHr9mbKrqbzUKF6x/UsgPVImGTAHfhzVXxWki0gSndhN+DUaXOtfLVYZ+N/eYgd40Tr3FWF/7tHAubj4b8qAAAAAElFTkSuQmCC"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAWCAYAAAA4oUfxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGbSURBVHgBvZZPUsIwFMa/JHVklEVXKCvLRmTDnxvgUTyBegLkBMoJ9CZygzq6wwVx5Qwu6IYZGUyfL4ViF4K0U/tbNE0nyZf3+t5LBLYw9t89234BUUtKefgDYYyOxu6pYLaY6U6nFmwcG7+M/EkbCpf8pU0EV6wE84AAzetpftXGmH6jU9Vr8deXjy4RPaIgeAPnvIGhXPVvUSBKqZ5tI3G2uo1i6dqHGPtTd6EWUxSM4+x5coGZh5Swp/rIASmgXKSk3jq64aCpcVZoZGQ+/6xJZMSmS71VqWX1Ainpyl0KxzayesGBcDNbniSrF3IRXy8m5RDY3QMOcsD3x25ZlXts+VWaeQ6BAvFT4lOzKs33vI6XZh7HiXakCQMOOqQlq7VJ2HLDR1468azWJjGs6xioIK3deZyAB/uH0+hnj54nhII5bVZEnGoaRUJ4sk0kHlI4QIEYYQZr8bPW8R0HwEW8o//CXqfY0OtGs/pg+78muE2jEkrLCwbXfkEh3+lEdPoJIU42Lk70thShgIQMpIlqiLaRHd/bknwD9/+7f5IA7EQAAAAASUVORK5CYII="

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtVZLTgJBEH3Vg3tc+NvBwg8LgTmB4wmIN5AToCcQTiCeQLwBnABuAMrCBBewM9EY2bDBdLdVo5DRyDDCzEs6PdM1qdf9qrpqCAE89V89Y01FQXkWNo3/Y8Sjo7Wu5dy90WyRAgRX1toqYgIRVfePt2pzkkH/rQKr64gZrMbZYX6nqYbd9zQTXCABEOhaZjV1ph7PGawBlnk00ZNNjkXWWj8uM2Qeu8+e4jMVsT7uXDc7lmCz/q2ggRQVU4gB7KjEO258vaD0wwZKqyhORA5O7UuR5CC/TSKLhi7PpWE1HMcZysAf0i89iU9gzGkw77+fG7z7jlJOmyg8pktP8psgCFk3RpeX+QglYYlaiwgCRB0WvoNVSThoPUSBwT1WJYkL4SchOkE0L4Vwczg8zqBM2Ae+3cLDGiTg3G8vIpJ1sS/zESUmvqPBw8v5jGzIs7SGlJPqIkLdi1pWMjxumQxMhg9Z4eseFYlnF/eUseIMGiFBWGN7akNvNPnSjZEApO5JRVBZd3Osra4hARgyvl8/JkeF3TqzxkokrSGX32vIMwUNkqJKqSrHSRrPKr9EInsTGjcH7va87n0CpLLCQaZzzSsAAAAASUVORK5CYII="

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 1000004166.af07c8c.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 25.34df5ab.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 27.9a4b3d2.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/background.345fb5f.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Car icons.png": 96,
	"./Group 1000004166.png": 60,
	"./Group 1000004167.png": 97,
	"./Group 3678.png": 75,
	"./Group 3679.png": 76,
	"./Group 3680.png": 77,
	"./Group 3681.png": 78,
	"./Group 3682.png": 79,
	"./Group 3683.png": 80,
	"./Group 3699.png": 81,
	"./Group 3702.png": 82,
	"./Group 3707.png": 54,
	"./Group 3719.png": 98,
	"./Group 3720.png": 55,
	"./Group 3721.png": 51,
	"./Group 5.png": 83,
	"./Kia.png": 99,
	"./Logout.png": 100,
	"./Logout2.png": 84,
	"./Mask group.png": 47,
	"./Mecedes-benz.png": 101,
	"./Path (1).png": 56,
	"./Path.png": 57,
	"./Rectangle 25.png": 61,
	"./Rectangle 27 (1).png": 74,
	"./Rectangle 27.png": 62,
	"./Rectangle 5.png": 102,
	"./Rectangle 5751.png": 48,
	"./Rectangle 6.png": 103,
	"./Rectangle 7.png": 104,
	"./Rectangle 79.png": 67,
	"./Rectangle 8.png": 68,
	"./Rectangle 80.png": 69,
	"./Rectangle 81.png": 70,
	"./Rectangle 82.png": 71,
	"./Rectangle 83.png": 72,
	"./Rectangle25(1).png": 94,
	"./Rectangle25.png": 95,
	"./Rectangle27.png": 73,
	"./Shape (1).png": 58,
	"./Shape.png": 59,
	"./Toyota.png": 105,
	"./Union.png": 85,
	"./Vector.png": 106,
	"./background.png": 63,
	"./bg.png": 107,
	"./bg2.png": 49,
	"./booking.png": 86,
	"./dashboard.png": 87,
	"./frame.png": 108,
	"./honda-automobiels-1.png": 109,
	"./icon.png": 52,
	"./lady.png": 110,
	"./man.png": 92,
	"./mask.png": 88,
	"./mask1.png": 66,
	"./messages.png": 89,
	"./services.png": 90,
	"./settings.png": 111,
	"./settings2.png": 91,
	"./tech1.png": 112,
	"./tech2.png": 113,
	"./tech3.png": 114,
	"./tech4.png": 115,
	"./woman.png": 93
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 64;

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=template&id=256598b3&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "nav"
  }, [_vm._ssrNode("<div class=\"mobile-navBar\" data-v-256598b3><div class=\"logo\" data-v-256598b3><img" + _vm._ssrAttr("src", __webpack_require__(47)) + " alt data-v-256598b3></div> <div" + _vm._ssrClass("hamburger", {
    show: _vm.showNav
  }) + " data-v-256598b3><span class=\"hamburger-top\" data-v-256598b3></span> <span class=\"hamburger-middle\" data-v-256598b3></span> <span class=\"hamburger-bottom\" data-v-256598b3></span></div></div> "), _vm._ssrNode("<section" + _vm._ssrClass("overlay", {
    show: _vm.showNav
  }) + " data-v-256598b3>", "</section>", [_vm._ssrNode("<div class=\"sidebar\" data-v-256598b3>", "</div>", [_vm._ssrNode("<ul class=\"nav-links\" data-v-256598b3>", "</ul>", [_vm._ssrNode("<li data-v-256598b3>", "</li>", [_c('router-link', {
    attrs: {
      "to": {
        name: 'index'
      }
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-256598b3>", "</li>", [_c('router-link', {
    attrs: {
      "to": {
        name: 'About'
      }
    }
  }, [_vm._v("About")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-256598b3>", "</li>", [_c('router-link', {
    attrs: {
      "to": {
        name: 'Contact'
      }
    }
  }, [_vm._v("Contact")])], 1)], 2), _vm._ssrNode(" <div class=\"user-btns\" data-v-256598b3><button class=\"login-btn btn\" data-v-256598b3><a href=\"/login\" data-v-256598b3> Sign in</a></button> <button class=\"signUp-btn btn\" data-v-256598b3><a href=\"/started\" data-v-256598b3> Sign up</a></button></div>")], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=template&id=256598b3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=script&lang=js&
/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  data() {
    return {
      showNav: false
    };
  }
});
// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Navbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(116)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "256598b3",
  "f2cce32e"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mask1.1e5c74c.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 79.80abf7e.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 8.53c4c01.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 80.1ff8542.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 81.1d70b21.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 82.2665912.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 83.2160b84.png";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle27.1db9da9.png";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 27 (1).8b4075b.png";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3678.ef3476d.png";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3679.ae6f6c8.png";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3680.34d1346.png";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3681.3d35e3a.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3682.77bf1e3.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3683.fa4ede5.png";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3699.119ada0.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3702.188e9fa.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 5.009bb78.png";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAiCAYAAADGfuJNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANKSURBVHgB7ZuNddowEMePvg7gToC7ARuUTFA6QdwJkkyAO0GyAWQC0gkgEySdwO4EpBOod+GED0UG8+ECzf/33j3Z1kknm5N0kg0RAAAAAAAAAAAAAAAAgFOmQwfCOZdy4kUoNX3udDovBMCpwU576+qZs1xuWV/KkrH0CIAIe4+47FwDTiYsM5b7IDthuZKUR91P1BBxWk5GLD+4XE7/GXx/d5Lwvd0Q2ImPtD9+VLzhH+I5zNQQ4orTLuf/JiB81RSOuyMfaH8STec1+aWmnwmAA7H1iKtx55Dluy66vOP+qSnS2sKM2yK2+yxf9NIjt+mhRlf0/Ej3i/XGGpK81JUJ7Ihut86OhkwSEo2D60sb+uxEEpNXct6MQHvIg9fF1lxDgOVCak2ZTBdpA2qIKZOv0RG7RWQxWPi2Gd1RRG/q9WnzPRc15ROj91pfpPzShtxPrB4C7RE4bePVvnHCbIcy+RqdQnUm0ilY+nq84gx8PDQOnalepvex1nHFMY2dO7UzsLaN7rSB40p9vsMVepwSaAd9wP6HnpsHH5Mn69htOK46n/AUyZtqXk/PCz1PA72BdaoN7RgF1xPzPBJrN1LHGxv+WRHYmaaLs4SaI7ptv3BINb2P5D1q2lOnEl2JI8tAb0Y72tHY/qe3Q+Cf02hxJttc7AQXfOin4G+xra8jkEau+QWU7TyxjtekM75saed1NPZvCp2JgcFhabwdpo56oadTM0WuXZwZSjocfkV/aUMAPe7rqX/VPGORqX0Y1HFLm/GdcxjY6aud0nRg78B2BN7qjSFoEbdYpE1ctaswtrFeRN/HiX1qiClTaOxoJVOd3FVIe0Ym7sxNXX2jNw303sSfkbaMTVsmroqhne2wps0uoocY99Rwi9W20K3Jv97DcWPkRi93q1tV4pDXkfoGMT093rgdpXZWnN1FtvfMswhtwHFPDVeNfL0N+V1qCddwW8nqucXMITxQQ5rYcdWWF+LbU8ZVU/FER0or18ceXVwQ2pjrI213RuB9EkyRIfNjOodbjXHFgeUTzGlsCgfnQxsfkidU7eWKHP1Dco1HZRchNZdntPjeoiRwdhzMcc8B7VzSqUr8KwMAAAAAAAAAAAAAAHAm/AVqe9swoiAQbQAAAABJRU5ErkJggg=="

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgBpZPBEYAgDAQTP1oGlmIHlGoHlkLK8IcQfTmai2YfDA9uGThgMsijFJ1wXdZ9lqc1A2ESVd7yVNJ3Qdu5jWJJmAAaamGVdNntOFCAJC6BJXEL3iR8VZXoH+Kp0SR+hEjYfYmhGkMPCYU7dgsgjAUnYn3nA+OXX9o/Zn04AAAAAElFTkSuQmCC"

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/booking.2921af2.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dashboard.f7baf46.png";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mask.926b64c.png";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/messages.f493a45.png";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/services.5213a03.png";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/settings2.6783f70.png";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/man.2452f84.png";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/woman.9970120.png";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle25(1).9fd2a34.png";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle25.b34bf32.png";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Car icons.498789a.png";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 1000004167.96c3493.png";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 3719.593955f.png";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Kia.47cee4e.png";

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAiCAYAAADGfuJNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANNSURBVHgB7ZuNddowEMePvg7gToC7ARuUTlA6QdwJkkyAO0GyAWQC0gkgEySdwO4EpBOod+EUXxQZxIcbaP+/9+7Jtk462Zykk2yIAAAAAAAAAAAAAAAAABwzPToQzrmcEy9CrelDr9d7JACODXbaK9fOkuVsy/pyloJlQABE2HvEZecacTJjWbDcBNkZy7mkPOp+oETEaTmZsHznciX9Y/D9XUvC93ZJYCfe0/74UfGSf4iHMFNDiHNO+5z/i4DwRVM47o68o/3JNF225NeafiQADsTWI67GnWOWb7ro8o77u6VIZwszbovYHrJ80kt33KbbFl3R8yPdT9abakjy2FYmsCO6/TY7GjJJSDQNrj/b0Gcnkpm8mvMWBLpDHrwutpYaAjwvpNaUKXSRNqJETJlyjY7YrSKLwcq3zehOInpzr0+b77lqKZ8Zvaf6IuWfbcj9xOoh0B2B0yav9o0TFjuUKdfoVKozk07BMtTjF87Ax2Pj0IXqFXofax1XHNPYuVY7I2vb6M4THFfq8x2u0uOcQDfoA/Y/9NI8+JjcW8fuwnHV+YT7SN5c8wZ6Xul5HuiNrFNtaMckuJ6Z55FZu5E6Xtnwz4rAzqQuzjJKR3S7fuGQa3oTybvTdKBOJboSR9aB3oJ2tKOx/Q9vh8BfJ2lxJttc7ASf+dBPwV9jW19vQB655hdQtvPEOl5KZ3zc0s7TaOzfFDoTA4PDkrwdpo76WU/nZopcuzgz1HQ4/Ir+zIYAejzUU/+qecEiU/s4qOOKNuM75ziwM1Q7tenA3oHtCLzVG0PQIW61SJu5ZldhamO9iL6PE4eUiClTaexopVCd0jVIeyYm7ixNXUOjNw/0XsWfkbZMTVtmromhne2wps0uoocY99hwq9W20G/Jv9jDcWOURq90L7eqxCEvIvWNYnp6vHE7Su28cHYX2d4zzyK0Acc9Nlwz8g025PepI1zitpLVc6uZQ7ilRFLsuGbLC/HtMeOaqXimI6WVi7ceXVwQ2pjrE213QeD/JJgiQ5Zui7dmHbTNxrjiwPIJ5jw2hYPToYsPyTNq9nJF3vxDcu04souQm8sLWn1vURM4OQ7muKeAdi7pVDX+lQEAAAAAAAAAAAAAADgR/gC9PdsgdHepOgAAAABJRU5ErkJggg=="

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Mecedes-benz.3e3bc8c.png";

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 5.d9aa778.png";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 6.ecb105b.png";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 7.4d0555d.png";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Toyota.ab332af.png";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Vector.8d70491.png";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.08bd9eb.png";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/frame.3846c43.png";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/honda-automobiels-1.50b59a6.png";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lady.52470f4.png";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/settings.f7a8392.png";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tech1.f979eb9.png";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tech2.78f27fb.png";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tech3.324e166.png";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tech4.b2f4af7.png";

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_256598b3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_256598b3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_256598b3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_256598b3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_256598b3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav[data-v-256598b3]{z-index:99999}.logo[data-v-256598b3]{width:200px}.mobile-navBar[data-v-256598b3]{justify-content:space-between;margin:0 auto;padding:1.5rem 0;width:92vw}.hamburger[data-v-256598b3],.mobile-navBar[data-v-256598b3]{align-items:center;display:flex}.hamburger[data-v-256598b3]{background:none;cursor:pointer;flex-direction:column;gap:.35rem;height:35px;justify-content:center;position:relative;transition:all .3s linear;width:35px;z-index:99999}.hamburger[data-v-256598b3]:hover{transform:scale(1.1)}.hamburger-bottom[data-v-256598b3],.hamburger-middle[data-v-256598b3],.hamburger-top[data-v-256598b3]{background:#ffb74c;display:block;height:3px;transform:rotate(0);transition:all .5s;width:100%}.overlay[data-v-256598b3]{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.5);height:100%;left:0;opacity:0;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:-1}.overlay.show[data-v-256598b3]{opacity:1;z-index:999}.sidebar[data-v-256598b3]{background:#26046a;display:grid;grid-template-rows:1fr auto;height:100%;max-width:500px;position:fixed;right:0;top:0;transform:translateX(100%);transition:all .5s linear;width:90vw}.show .sidebar[data-v-256598b3]{transform:translateX(0)}.nav-links[data-v-256598b3]{display:flex;flex-direction:column;gap:2rem;margin-top:7rem;padding-left:3rem}.nav-links li[data-v-256598b3]{border-radius:.5rem;box-shadow:0 5px 15px rgba(0,0,0,.1);cursor:pointer;max-width:200px;padding:.3rem;transition:all .3s linear}.nav-links li[data-v-256598b3]:hover{margin-left:5px}li a[data-v-256598b3]{color:#fff;font-size:1.5rem;font-weight:700;letter-spacing:1px}.user-btns[data-v-256598b3]{display:flex;flex-direction:column;gap:2rem;justify-content:center;margin-bottom:2rem}.btn[data-v-256598b3],.user-btns[data-v-256598b3]{align-items:center}.btn[data-v-256598b3]{background:#ffb74c;border-radius:30px 0 30px 30px;box-shadow:0 5px 15px rgba(0,0,0,.2);color:#fff;font-family:\"Sofia Pro\";font-size:21px;font-style:normal;font-weight:400;height:50px;line-height:21px;margin:0 auto;transition:all .3s linear;width:90%}.btn[data-v-256598b3]:hover{background:#865203}.signUp-btn[data-v-256598b3]{border-radius:0 30px 30px 30px}.btn a[data-v-256598b3]{color:#fff;font-size:1.5rem}.show .hamburger-top[data-v-256598b3]{transform:rotate(45deg) translateX(12px)}.show .hamburger-middle[data-v-256598b3]{display:none}.show .hamburger-bottom[data-v-256598b3]{transform:rotate(-45deg) translateX(6px) translateY(6px)}@media only screen and (max-width:600px){.logo[data-v-256598b3]{width:150px}.hamburger[data-v-256598b3]{width:25px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5b0f801c", content, true, context)
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f484e856", content, true, context)
};

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DesktopNav.vue?vue&type=template&id=b16694b4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('nav', {
    staticClass: "nav"
  }, [_vm._ssrNode("<div class=\"logo\" data-v-b16694b4><img" + _vm._ssrAttr("src", __webpack_require__(47)) + " alt data-v-b16694b4></div> "), _vm._ssrNode("<ul class=\"nav-links\" data-v-b16694b4>", "</ul>", [_vm._ssrNode("<li data-v-b16694b4>", "</li>", [_c('router-link', {
    attrs: {
      "to": {
        name: 'index'
      }
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-b16694b4>", "</li>", [_c('router-link', {
    attrs: {
      "to": {
        name: 'About'
      }
    }
  }, [_vm._v("About")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-b16694b4>", "</li>", [_c('router-link', {
    attrs: {
      "to": {
        name: 'Contact'
      }
    }
  }, [_vm._v("Contact")])], 1)], 2), _vm._ssrNode(" <div class=\"nav-btns\" data-v-b16694b4><a href=\"/login\" data-v-b16694b4><button class=\"btn\" data-v-b16694b4>Sign in</button></a> <a href=\"/started\" data-v-b16694b4><button class=\"btn2\" data-v-b16694b4>Sign Up</button></a></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DesktopNav.vue?vue&type=template&id=b16694b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DesktopNav.vue?vue&type=script&lang=js&
/* harmony default export */ var DesktopNavvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/DesktopNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DesktopNavvue_type_script_lang_js_ = (DesktopNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/DesktopNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(125)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DesktopNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b16694b4",
  "3ce181c0"
  
)

/* harmony default export */ var DesktopNav = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 124 */,
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_style_index_0_id_b16694b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_style_index_0_id_b16694b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_style_index_0_id_b16694b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_style_index_0_id_b16694b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_style_index_0_id_b16694b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-b16694b4],[data-v-b16694b4]:after,[data-v-b16694b4]:before{box-sizing:border-box;margin:0;padding:0}.nav[data-v-b16694b4]{align-items:center;display:flex;justify-content:space-between;padding:1.5rem 2rem;z-index:9999}.nav-links a[data-v-b16694b4]{color:#fff;font-family:\"Sofia Pro\";font-size:21px;font-style:normal;font-weight:400;line-height:21px;transition:all .3s linear}.btn[data-v-b16694b4]:hover,.nav-links a[data-v-b16694b4]:hover{color:#ffb74c}.btn2[data-v-b16694b4]{align-items:center;background:#ffb74c;border-radius:20px 0 20px 20px;height:45px;width:135px}.btn[data-v-b16694b4],.btn2[data-v-b16694b4]{color:#fff;font-family:\"Sofia Pro\";font-size:21px;font-style:normal;font-weight:400;line-height:21px}.btn[data-v-b16694b4],.btn2[data-v-b16694b4]{transition:all .3s linear}.btn2[data-v-b16694b4]:hover{background:#865203}.nav-btns[data-v-b16694b4],.nav-links[data-v-b16694b4]{align-items:center;display:flex;gap:2.5rem;justify-content:center}@media only screen and (max-width:900px){.nav[data-v-b16694b4]{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_8b421026_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_8b421026_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_8b421026_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_8b421026_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_8b421026_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(http://fonts.cdnfonts.com/css/sofia-pro);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-8b421026]{box-sizing:border-box}h4[data-v-8b421026],li[data-v-8b421026],p[data-v-8b421026]{font-size:inherit}.contain3[data-v-8b421026]{background:#26046a;color:#dad2ea;display:flex;flex-wrap:nowrap;justify-content:space-between;margin-top:10rem;padding:60px 80px}.footer-article[data-v-8b421026]{flex-basis:30%}.menu-links[data-v-8b421026]{align-items:center;display:flex;flex-basis:10%;flex-direction:column}.contact[data-v-8b421026]{flex-basis:20%}.newsletter[data-v-8b421026]{flex-basis:25%}h4[data-v-8b421026]{font-family:\"Sofia Pro\";font-size:20px;padding-bottom:31px}.text[data-v-8b421026],h4[data-v-8b421026]{font-style:normal;font-weight:400}.text[data-v-8b421026]{font-size:18px;line-height:24px;padding-top:20px}ul[data-v-8b421026]{padding:0}li[data-v-8b421026]{padding-bottom:10px}.contact p[data-v-8b421026]{margin:0;padding-bottom:15px}input[data-v-8b421026]{background:#fff;border:1px solid #b5b5b5;border-radius:30px;color:#26046a;height:40px;padding-left:20px;transition:all .3s linear;width:100%}input[data-v-8b421026]:focus,input[data-v-8b421026]:hover{border-color:#865203}input[data-v-8b421026]:focus{outline:none}.social[data-v-8b421026]:hover{cursor:pointer}@media only screen and (max-width:900px){.menu-links[data-v-8b421026]{display:none}.contain3[data-v-8b421026]{grid-column-gap:2rem;align-items:center;-moz-column-gap:2rem;column-gap:2rem;display:grid;grid-template-columns:1fr;justify-items:center;place-items:center;text-align:center}.col[data-v-8b421026]{border-bottom:1px solid #fff;-o-border-image:linear-gradient(90deg,#26046a,#ffb74c,#26046a);border-image:linear-gradient(90deg,#26046a,#ffb74c,#26046a);border-image-slice:1;margin-bottom:4rem;padding-bottom:4rem;padding-top:0}.footer-article[data-v-8b421026]{align-items:center;display:flex;flex-direction:column}h4[data-v-8b421026]{font-size:30px;font-weight:700;letter-spacing:2px}}@media only screen and (max-width:600px){.contain3[data-v-8b421026]{padding:40px 10px}.newsletter[data-v-8b421026]{padding:0 5px}.contact p[data-v-8b421026]{font-size:20px}.text[data-v-8b421026]{line-height:2}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 129 */,
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=8b421026&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "contain3"
  }, [_vm._ssrNode("<div class=\"footer-article col\" data-v-8b421026><img" + _vm._ssrAttr("src", __webpack_require__(47)) + " alt data-v-8b421026> <p class=\"text\" data-v-8b421026>\n            Give your car the right service it needs with a unique automechanic shop \n            that links you with the best, competent and effective tecnicians.\n        </p> <div class=\"social-links\" style=\"display: flex; justify-content: space-between; width: 150px; margin-top: 40px\" data-v-8b421026><img" + _vm._ssrAttr("src", __webpack_require__(56)) + " alt class=\"social\" data-v-8b421026> <img" + _vm._ssrAttr("src", __webpack_require__(59)) + " alt class=\"social\" data-v-8b421026> <img" + _vm._ssrAttr("src", __webpack_require__(57)) + " alt class=\"social\" data-v-8b421026> <img" + _vm._ssrAttr("src", __webpack_require__(58)) + " alt class=\"social\" data-v-8b421026></div></div> <div class=\"menu-links col\" data-v-8b421026><div style=\"text-align: left;\" data-v-8b421026><h4 data-v-8b421026>Menu</h4> <ul data-v-8b421026><li data-v-8b421026>Home</li> <li data-v-8b421026>About Us</li> <li data-v-8b421026>Contact</li></ul></div></div> <div class=\"contact col\" data-v-8b421026><h4 data-v-8b421026>Contact us</h4> <p data-v-8b421026>08160071243</p> <p data-v-8b421026>shopmeco@gmail.com</p> <p data-v-8b421026>\n            No 12, Abike Street, Tando, Lagos state, Nigeria\n        </p></div> <div class=\"newsletter\" data-v-8b421026><h4 data-v-8b421026>Suscribe to our Newsletter</h4> <input type=\"text\" placeholder=\"Your email\" data-v-8b421026></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=8b421026&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
/* harmony default export */ var Footervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(127)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8b421026",
  "30312b18"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 131 */,
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6a90771e", content, true, context)
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("9ac2f632", content, true, context)
};

/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_style_index_0_id_771f17cf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_style_index_0_id_771f17cf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_style_index_0_id_771f17cf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_style_index_0_id_771f17cf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_style_index_0_id_771f17cf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(50);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(66);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".all[data-v-771f17cf]{grid-gap:2rem;align-items:center;display:grid;gap:2rem;grid-template-columns:repeat(2,1fr);justify-items:center;padding:1rem 2.8rem;place-items:center}.mission[data-v-771f17cf]{display:flex;gap:1.5rem;justify-content:center}.all p[data-v-771f17cf]{text-align:justify;text-justify:inter-word}p[data-v-771f17cf]{color:#7c7c7c;font-family:\"Sofia Pro\";font-size:24px;font-style:normal;font-weight:400;line-height:26px;margin:0;width:100%}img[data-v-771f17cf]{height:65px;width:65px}.cover[data-v-771f17cf]{align-items:center;display:flex;flex-direction:column;justify-content:space-around;margin:50px auto auto;max-width:1200px}.cover h2[data-v-771f17cf]{font-family:\"Inter\";font-size:32px;height:39px;line-height:39px;margin-bottom:32px}.cover h2[data-v-771f17cf],.iCountUp[data-v-771f17cf]{color:#350b89;font-style:normal;font-weight:600;text-align:center}.iCountUp[data-v-771f17cf]{display:flex;flex-direction:column;font-size:60px;justify-content:center;padding:3rem 0}.iCountUp[data-v-771f17cf],.iCountUp p[data-v-771f17cf]{font-family:\"Sofia Pro\";line-height:35px}.iCountUp p[data-v-771f17cf]{color:#5007e0;font-size:26px;font-style:normal;font-weight:400;height:35px;padding-top:17px;text-align:center;text-transform:capitalize}.control[data-v-771f17cf]{align-items:center;background:#f5f3ff url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:100%;background-repeat:no-repeat;display:flex;gap:3rem;justify-content:center;margin-top:40px;padding:2rem;width:100%}.control img[data-v-771f17cf]{height:128px;width:126px}h4[data-v-771f17cf]{color:#7c7c7c;font-family:\"Sofia Pro\";font-size:26px;font-style:normal;font-weight:400;line-height:35px;margin-top:110px;text-align:center}@media only screen and (max-width:900px){.all[data-v-771f17cf]{gap:3rem;grid-template-columns:1fr;padding:1rem 1.4rem}.all .mission-icon2[data-v-771f17cf]{order:2}h4[data-v-771f17cf]{margin:50px auto 90px;padding:1rem}.control[data-v-771f17cf]{flex-direction:column;gap:0}.border-btm[data-v-771f17cf]{border-bottom:1px solid #fff;-o-border-image:linear-gradient(90deg,#f5f3ff,#26046a,#f5f3ff);border-image:linear-gradient(90deg,#f5f3ff,#26046a,#f5f3ff);border-image-slice:1;padding-bottom:4rem;width:100%}.cover[data-v-771f17cf]{margin-top:0}}@media only screen and (max-width:600px){.mission[data-v-771f17cf]{align-items:center}.mission p[data-v-771f17cf]{font-size:1.1rem}.cover h2[data-v-771f17cf]{font-size:1.63rem}.all[data-v-771f17cf]{padding:2px}.iCountUp p[data-v-771f17cf]{font-size:1.2rem}h4[data-v-771f17cf]{margin:50px auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Technisians_vue_vue_type_style_index_0_id_5be549af_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Technisians_vue_vue_type_style_index_0_id_5be549af_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Technisians_vue_vue_type_style_index_0_id_5be549af_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Technisians_vue_vue_type_style_index_0_id_5be549af_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Technisians_vue_vue_type_style_index_0_id_5be549af_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(50);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(88);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Fruktur&family=Inter:wght@100;200;300;400;600;700;800&family=Licorice&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(http://fonts.cdnfonts.com/css/sofia-pro);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-5be549af],[data-v-5be549af]:after,[data-v-5be549af]:before{box-sizing:border-box;margin:0;padding:0}.mission-container[data-v-5be549af]{padding:0 2rem}.cover[data-v-5be549af]{margin-bottom:120px;margin-top:120px}.cover h2[data-v-5be549af]{color:#350b89;font-family:\"Inter\";font-size:32px;font-style:normal;font-weight:600;line-height:39px;padding-bottom:60px;text-transform:capitalize}.cover h2[data-v-5be549af],.tech[data-v-5be549af]{align-items:center;text-align:center}.tech[data-v-5be549af]{display:flex;justify-content:center}.tech img[data-v-5be549af]{display:block;-o-object-fit:cover;object-fit:cover;width:100%}.trust[data-v-5be549af]{align-items:center;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),#7029ff;border-radius:20px;display:flex;justify-content:space-around;margin:auto auto 100px;max-width:95%;padding:2rem}h3[data-v-5be549af]{font-family:\"Inter\";font-size:32px;font-style:normal;font-weight:600;line-height:39px;width:100%}button[data-v-5be549af],h3[data-v-5be549af]{color:#fff}button[data-v-5be549af]{align-items:center;background:#ffb74c;border-radius:30px 0 30px 30px;display:flex;height:60px;justify-content:center;padding:18px 40px 17px;transition:all .3s linear;width:208px}button[data-v-5be549af]:hover{background:#865203}@media only screen and (max-width:900px){.trust[data-v-5be549af]{flex-direction:column;gap:2rem;text-align:center}button[data-v-5be549af]{width:100%}.cover h2[data-v-5be549af]{margin-bottom:1.2rem;padding:0}.tech[data-v-5be549af]{flex-direction:column}.mission-container[data-v-5be549af]{padding:0 1rem}}@media only screen and (max-width:600px){h3[data-v-5be549af]{font-size:1.2rem;line-height:20px}.cover[data-v-5be549af]{margin-top:3rem}.cover h2[data-v-5be549af]{font-size:1.63rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("08f9c48c", content, true, context)
};

/***/ }),
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Mission.vue?vue&type=template&id=771f17cf&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"cover container\" data-v-771f17cf><h2 data-v-771f17cf>Our Mission &amp; Vision</h2> <div class=\"all\" data-v-771f17cf><div class=\"mission\" data-v-771f17cf><img" + _vm._ssrAttr("src", __webpack_require__(60)) + " alt class=\"mission-icon1\" data-v-771f17cf> <p data-v-771f17cf>\n              Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.\n            </p></div> <div class=\"mission\" data-v-771f17cf><img" + _vm._ssrAttr("src", __webpack_require__(60)) + " alt class=\"mission-icon2\" data-v-771f17cf> <p data-v-771f17cf>\n              Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.\n            </p></div></div></div> "), _vm._ssrNode("<div data-v-771f17cf>", "</div>", [_vm._ssrNode("<h4 data-v-771f17cf>We connect customers with expert technicians.</h4> "), _vm._ssrNode("<div class=\"control\" data-v-771f17cf>", "</div>", [_vm._ssrNode("<div class=\"iCountUp border-btm\" data-v-771f17cf>", "</div>", [_c('ICountUp', {
    attrs: {
      "delay": _vm.delay,
      "endVal": _vm.endVal,
      "options": _vm.options
    },
    on: {
      "ready": _vm.onReady
    }
  }), _vm._ssrNode(" <p data-v-771f17cf>registered technicians</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"iCountUp border-btm\" data-v-771f17cf>", "</div>", [_c('ICountUp', {
    attrs: {
      "delay": _vm.delay,
      "endVal": _vm.endValy,
      "options": _vm.options
    },
    on: {
      "ready": _vm.andReady
    }
  }), _vm._ssrNode(" <p data-v-771f17cf>registered companies</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"iCountUp\" data-v-771f17cf>", "</div>", [_c('ICountUp', {
    attrs: {
      "delay": _vm.delay,
      "endVal": _vm.endValue,
      "options": _vm.options
    },
    on: {
      "ready": _vm.weReady
    }
  }), _vm._ssrNode(" <p data-v-771f17cf>registered customers</p>")], 2)], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Mission.vue?vue&type=template&id=771f17cf&scoped=true&

// EXTERNAL MODULE: external "vue-countup-v2"
var external_vue_countup_v2_ = __webpack_require__(42);
var external_vue_countup_v2_default = /*#__PURE__*/__webpack_require__.n(external_vue_countup_v2_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Mission.vue?vue&type=script&lang=js&

/* harmony default export */ var Missionvue_type_script_lang_js_ = ({
  components: {
    ICountUp: external_vue_countup_v2_default.a
  },
  data() {
    return {
      delay: 1000,
      endVal: 50,
      endValy: 30,
      endValue: 70,
      options: {
        //   useEasing: true,
        //   useGrouping: true,
        //   separator: ',',
        //   decimal: '.',
        //   prefix: 'nb',
        suffix: '+'
      }
    };
  },
  methods: {
    onReady: function (instance, CountUp) {
      // const that = this;
      // instance.update(this.endVal);
      instance.update(this.endVal);
    },
    andReady: function (instance, CountUp) {
      // const that = this;
      // instance.update(this.endVal);
      instance.update(this.endValy);
    },
    weReady: function (instance, CountUp) {
      // const that = this;
      // instance.update(this.endVal);
      instance.update(this.endValue);
    }
  }
});
// CONCATENATED MODULE: ./components/Mission.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Missionvue_type_script_lang_js_ = (Missionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Mission.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(143)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Missionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "771f17cf",
  "289e3e83"
  
)

/* harmony default export */ var Mission = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Technisians.vue?vue&type=template&id=5be549af&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mission-container"
  }, [_vm._ssrNode("<div class=\"cover\" data-v-5be549af><h2 data-v-5be549af>Meet Some of Our registered Technicians</h2> <div class=\"tech\" data-v-5be549af>" + _vm._ssrList(_vm.technician, function (doc, index) {
    return "<div class=\"single\" data-v-5be549af><img" + _vm._ssrAttr("src", __webpack_require__(64)("./" + doc.img)) + " alt data-v-5be549af> <div class=\"avatar_name\" data-v-5be549af>" + _vm._ssrEscape(_vm._s(doc.name)) + "</div> <div class=\"avatar_skills\" data-v-5be549af>" + _vm._ssrEscape(_vm._s(doc.work)) + "</div></div>";
  }) + "</div></div> <div class=\"trust\" data-v-5be549af><h3 data-v-5be549af>\n        Want to fix your car at an affordable price and with trusted technicians?\n    </h3> <button data-v-5be549af>\n        Sign me up\n    </button></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Technisians.vue?vue&type=template&id=5be549af&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Technisians.vue?vue&type=script&lang=js&
/* harmony default export */ var Technisiansvue_type_script_lang_js_ = ({
  data() {
    return {
      technician: [{
        img: 'Rectangle 5.png',
        name: 'Jacob Jones',
        work: 'CEO at CleanMech'
      }, {
        img: 'Rectangle 6.png',
        name: 'Jenny Wilson',
        work: 'Technician at safeDrive'
      }, {
        img: 'Rectangle 7.png',
        name: 'Annette Black',
        work: 'Manager at mechatronics '
      }, {
        img: 'lady.png',
        name: 'Esther Howard',
        work: 'Automechanic at BayWork'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Technisians.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Technisiansvue_type_script_lang_js_ = (Technisiansvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Technisians.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(145)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Technisiansvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5be549af",
  "6e3d0f96"
  
)

/* harmony default export */ var Technisians = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0395e981_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0395e981_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0395e981_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0395e981_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0395e981_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(50);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(63);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(49);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Fruktur&family=Inter:wght@100;200;300;400;600;700;800&family=Licorice&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(http://fonts.cdnfonts.com/css/sofia-pro);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".mobile-nav[data-v-0395e981]{display:none}header[data-v-0395e981]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-size:cover}.main-container[data-v-0395e981]{margin-bottom:100px;padding:15px 70px 0}.btn3[data-v-0395e981]{align-items:center;background:#ffb74c;border-radius:30px 0 30px 30px;color:#fff;font-family:\"Sofia Pro\";font-size:21px;font-style:normal;font-weight:400;height:60px;line-height:21px;margin-top:30px;transition:all .3s linear;width:212px}.btn3[data-v-0395e981]:hover{background:#865203}ul[data-v-0395e981]{color:#fff;display:flex;justify-content:space-between}li[data-v-0395e981]{font-family:\"Sofia Pro\";font-size:21px;font-style:normal;font-weight:400;line-height:21px;padding-left:32px}.body[data-v-0395e981]{grid-gap:3rem;align-items:start;display:grid;gap:3rem;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));justify-content:center;padding-top:90px}.img-box1[data-v-0395e981],.img-box2[data-v-0395e981]{position:relative}.img-box1 img[data-v-0395e981],.img-box2 img[data-v-0395e981]{max-width:100%}.about-img[data-v-0395e981]{display:grid;grid-template-columns:repeat(2,1fr);justify-content:center}.overlay1[data-v-0395e981],.overlay2[data-v-0395e981]{max-width:100%;position:absolute}.img2[data-v-0395e981]{margin-left:1rem;margin-top:15rem}.overlay1[data-v-0395e981]{top:-1.3rem}.overlay1[data-v-0395e981],.overlay2[data-v-0395e981]{left:-1.3rem;z-index:99}.overlay2[data-v-0395e981]{right:0;top:13rem}h1[data-v-0395e981]{color:#fff;font-family:\"Inter\";font-size:52px;font-weight:600;line-height:63px}.body p[data-v-0395e981],h1[data-v-0395e981]{font-style:normal}.body p[data-v-0395e981]{color:#dad2ea;font-family:\"Sofia Pro\";font-size:26px;font-weight:400;line-height:31px;padding-top:20px;width:100%}@media only screen and (max-width:1000px){.main-container[data-v-0395e981]{padding:15px 50px 0}}@media only screen and (max-width:900px){header[data-v-0395e981]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.mobile-nav[data-v-0395e981]{display:block}.body[data-v-0395e981]{align-items:center;gap:2rem;grid-template-columns:1fr;justify-items:center;place-items:center}.about-article[data-v-0395e981]{margin-bottom:3.5rem;text-align:center}.about-img[data-v-0395e981]{gap:2rem}.img2[data-v-0395e981]{margin-top:0}.overlay2[data-v-0395e981]{top:-1.3rem}}@media only screen and (max-width:600px){.body[data-v-0395e981]{padding-top:30px}.main-container[data-v-0395e981]{margin-bottom:2rem;padding:0 30px}.about-article[data-v-0395e981]{padding-top:0}.about-article h1[data-v-0395e981]{font-size:2.2rem;line-height:40px}.about-article p[data-v-0395e981]{font-size:1.2rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/About.vue?vue&type=template&id=0395e981&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<header data-v-0395e981>", "</header>", [_vm._ssrNode("<div class=\"navbars\" data-v-0395e981>", "</div>", [_c('DesktopNav'), _vm._ssrNode(" "), _c('Navbar', {
    staticClass: "mobile-nav"
  })], 2), _vm._ssrNode(" <div class=\"main-container\" data-v-0395e981><div data-v-0395e981><div class=\"body\" data-v-0395e981><div class=\"about-article\" data-v-0395e981><h1 data-v-0395e981>Our Story</h1> <p data-v-0395e981>\n              Give your car the right service it needs with a unique\n              automechanic shop that links you with the best, competent and\n              effective tecnicians.\n            </p> <a href=\"/started\" data-v-0395e981><button class=\"btn3\" data-v-0395e981>Get Started</button></a></div> <div class=\"about-img\" data-v-0395e981><div class=\"img-box1\" data-v-0395e981><img" + _vm._ssrAttr("src", __webpack_require__(73)) + " alt class=\"overlay1\" data-v-0395e981> <img" + _vm._ssrAttr("src", __webpack_require__(92)) + " alt class=\"img1\" data-v-0395e981></div> <div class=\"img-box2\" data-v-0395e981><div data-v-0395e981><img" + _vm._ssrAttr("src", __webpack_require__(74)) + " alt class=\"overlay2\" data-v-0395e981> <img" + _vm._ssrAttr("src", __webpack_require__(93)) + " alt class=\"img2\" data-v-0395e981></div></div></div></div></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"other-containers\" data-v-0395e981>", "</div>", [_c('Mission'), _vm._ssrNode(" "), _c('Technisians'), _vm._ssrNode(" "), _c('Footer')], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/About.vue?vue&type=template&id=0395e981&scoped=true&

// EXTERNAL MODULE: ./components/DesktopNav.vue + 4 modules
var DesktopNav = __webpack_require__(123);

// EXTERNAL MODULE: ./components/Navbar.vue + 4 modules
var Navbar = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/About.vue?vue&type=script&lang=js&


/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  components: {
    DesktopNav: DesktopNav["default"],
    Navbar: Navbar["default"]
  }
});
// CONCATENATED MODULE: ./pages/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/About.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(199)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0395e981",
  "29f5a4c8"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DesktopNav: __webpack_require__(123).default,Navbar: __webpack_require__(65).default,Mission: __webpack_require__(191).default,Technisians: __webpack_require__(192).default,Footer: __webpack_require__(130).default})


/***/ })
]);;
//# sourceMappingURL=About.js.map