exports.ids = [21];
exports.modules = {

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4c883ce9", content, true, context)
};

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_5ec6b7d2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_5ec6b7d2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_5ec6b7d2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_5ec6b7d2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_5ec6b7d2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".home,a:hover{align-items:center;background:#f5f3ff;border-radius:6px;display:flex;height:34px;padding-left:10px;width:174px}.come{height:50em;margin-top:3em}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Sidebar.vue?vue&type=template&id=5ec6b7d2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "relative flex min-h-screen"
  }, [_vm._ssrNode("<div class=\"bg-bermuda w-[276px] items-center flex flex-col\"><div class=\"logo mt-10\"><a href=\"/\"><img" + _vm._ssrAttr("src", __webpack_require__(47)) + " alt></a></div> <nav class=\"flex flex-col items-center justify-between come\"><div><a href=\"/Sidebar\" class=\"home\"><img" + _vm._ssrAttr("src", __webpack_require__(87)) + " alt></a> <a href=\"/Sidebar/booking\"><img" + _vm._ssrAttr("src", __webpack_require__(86)) + " alt></a> <a href=\"/Sidebar/Services\"><img" + _vm._ssrAttr("src", __webpack_require__(90)) + " alt></a> <a href=\"/Sidebar/Messages\"><img" + _vm._ssrAttr("src", __webpack_require__(89)) + " alt></a></div> <div class=\"justify-end\"><a href=\"/Sidebar/Messages\"><img" + _vm._ssrAttr("src", __webpack_require__(91)) + " alt></a> <a href=\"/Sidebar/Services\"><img" + _vm._ssrAttr("src", __webpack_require__(84)) + " alt></a></div></nav></div> "), _c('nuxt-child')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/Sidebar.vue?vue&type=template&id=5ec6b7d2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Sidebar.vue?vue&type=script&lang=js&
/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/Sidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(211)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6ab15057"
  
)

/* harmony default export */ var Sidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Mask group.3619536.png";

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAiCAYAAADGfuJNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANKSURBVHgB7ZuNddowEMePvg7gToC7ARuUTFA6QdwJkkyAO0GyAWQC0gkgEySdwO4EpBOod+GED0UG8+ECzf/33j3Z1kknm5N0kg0RAAAAAAAAAAAAAAAAgFOmQwfCOZdy4kUoNX3udDovBMCpwU576+qZs1xuWV/KkrH0CIAIe4+47FwDTiYsM5b7IDthuZKUR91P1BBxWk5GLD+4XE7/GXx/d5Lwvd0Q2ImPtD9+VLzhH+I5zNQQ4orTLuf/JiB81RSOuyMfaH8STec1+aWmnwmAA7H1iKtx55Dluy66vOP+qSnS2sKM2yK2+yxf9NIjt+mhRlf0/Ej3i/XGGpK81JUJ7Ihut86OhkwSEo2D60sb+uxEEpNXct6MQHvIg9fF1lxDgOVCak2ZTBdpA2qIKZOv0RG7RWQxWPi2Gd1RRG/q9WnzPRc15ROj91pfpPzShtxPrB4C7RE4bePVvnHCbIcy+RqdQnUm0ilY+nq84gx8PDQOnalepvex1nHFMY2dO7UzsLaN7rSB40p9vsMVepwSaAd9wP6HnpsHH5Mn69htOK46n/AUyZtqXk/PCz1PA72BdaoN7RgF1xPzPBJrN1LHGxv+WRHYmaaLs4SaI7ptv3BINb2P5D1q2lOnEl2JI8tAb0Y72tHY/qe3Q+Cf02hxJttc7AQXfOin4G+xra8jkEau+QWU7TyxjtekM75saed1NPZvCp2JgcFhabwdpo56oadTM0WuXZwZSjocfkV/aUMAPe7rqX/VPGORqX0Y1HFLm/GdcxjY6aud0nRg78B2BN7qjSFoEbdYpE1ctaswtrFeRN/HiX1qiClTaOxoJVOd3FVIe0Ym7sxNXX2jNw303sSfkbaMTVsmroqhne2wps0uoocY99Rwi9W20K3Jv97DcWPkRi93q1tV4pDXkfoGMT093rgdpXZWnN1FtvfMswhtwHFPDVeNfL0N+V1qCddwW8nqucXMITxQQ5rYcdWWF+LbU8ZVU/FER0or18ceXVwQ2pjrI213RuB9EkyRIfNjOodbjXHFgeUTzGlsCgfnQxsfkidU7eWKHP1Dco1HZRchNZdntPjeoiRwdhzMcc8B7VzSqUr8KwMAAAAAAAAAAAAAAHAm/AVqe9swoiAQbQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/booking.2921af2.png";

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dashboard.f7baf46.png";

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/messages.f493a45.png";

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/services.5213a03.png";

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/settings2.6783f70.png";

/***/ })

};;
//# sourceMappingURL=Sidebar.js.map