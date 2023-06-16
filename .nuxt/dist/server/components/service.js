exports.ids = [10];
exports.modules = {

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(170);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5ebcecda", content, true, context)
};

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_style_index_0_id_1f2df889_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_style_index_0_id_1f2df889_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_style_index_0_id_1f2df889_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_style_index_0_id_1f2df889_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_style_index_0_id_1f2df889_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Fruktur&family=Inter:wght@100;200;300;400;600;700;800&family=Licorice&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(http://fonts.cdnfonts.com/css/sofia-pro);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h2[data-v-1f2df889]{font-size:70px;line-height:70px}h2[data-v-1f2df889],h4[data-v-1f2df889]{color:#1f1f1f;font-family:\"Sofia Pro\";font-style:normal;font-weight:500}h4[data-v-1f2df889]{align-items:center;font-size:30px;letter-spacing:.01em;line-height:24px}p[data-v-1f2df889]{color:#7c7c7c;font-family:\"Sofia Pro\";font-size:18px;font-weight:400;line-height:28px;margin-top:20px}h1[data-v-1f2df889],p[data-v-1f2df889]{font-style:normal;width:100%}h1[data-v-1f2df889]{color:#350b89;font-family:\"Inter\";font-size:48px;font-weight:600;line-height:58px;padding-bottom:40px;text-align:left}img[data-v-1f2df889]{border-radius:1rem;display:block;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.contain1[data-v-1f2df889]{align-items:center;display:grid;justify-items:center;padding:2rem;place-items:center;position:relative;top:2rem}.container[data-v-1f2df889]{grid-gap:1.5rem;gap:1.5rem;grid-template-columns:1fr .5fr}.container[data-v-1f2df889],.services[data-v-1f2df889]{display:grid;max-width:100%}.services[data-v-1f2df889]{align-items:start;grid-template-columns:.8fr 1fr;grid-template-rows:400px 1fr;height:100%;justify-items:start;margin:auto auto 1.5rem;place-items:start}.right-grid[data-v-1f2df889],.services[data-v-1f2df889]{grid-gap:1.5rem;gap:1.5rem}.right-grid[data-v-1f2df889]{display:grid;grid-template-rows:550px 1fr}.article[data-v-1f2df889]{background:#f4f2fe;border:1px solid #a594fe;border-radius:20px;display:flex;flex-direction:column;gap:1rem;padding:30px;position:relative}.article[data-v-1f2df889],.article>div[data-v-1f2df889]:last-child{height:100%;width:100%}.article1[data-v-1f2df889]{align-items:center;background:#350b89;flex-direction:row;gap:2.5rem;grid-column:1/3;padding:2.5rem 1.9rem}.article1 h2[data-v-1f2df889],.article1 h4[data-v-1f2df889],.article1 p[data-v-1f2df889]{color:#fff;padding-bottom:1.5rem}.article1 div[data-v-1f2df889]{flex-basis:50%}.article1 div[data-v-1f2df889]:first-child{max-width:350px}.article5[data-v-1f2df889]{background:#ffcc6c}@media only screen and (max-width:900px){.contain1[data-v-1f2df889]{padding:1rem}.services[data-v-1f2df889]{grid-template-columns:1fr 1fr}.article1[data-v-1f2df889]{gap:1rem}.article1 img[data-v-1f2df889]{-o-object-fit:fill;object-fit:fill}h1[data-v-1f2df889]{padding-bottom:0}}@media only screen and (max-width:800px){.contain1[data-v-1f2df889]{margin-bottom:4rem}.container[data-v-1f2df889],.right-grid[data-v-1f2df889],.services[data-v-1f2df889]{grid-template-columns:1fr;grid-template-rows:1fr}.article1[data-v-1f2df889]{flex-direction:column;grid-column:1/2;text-align:left}.article1 div[data-v-1f2df889]:first-child{max-width:100%}.article1 h2[data-v-1f2df889],.article1 h4[data-v-1f2df889],.article1 p[data-v-1f2df889]{padding-bottom:inherit}h1[data-v-1f2df889]{text-align:center}.right-grid[data-v-1f2df889],.services[data-v-1f2df889]{margin-top:4rem}.right-grid[data-v-1f2df889]{position:relative}.article4 div[data-v-1f2df889]:first-child{order:2}}@media only screen and (max-width:600px){h1[data-v-1f2df889]{font-size:30px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Service.vue?vue&type=template&id=1f2df889&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "contain1"
  }, [_vm._ssrNode("<h1 data-v-1f2df889>Who can use Shopmeco?</h1> <div class=\"container\" data-v-1f2df889><div class=\"services\" data-v-1f2df889><div class=\"article article1\" data-v-1f2df889><div data-v-1f2df889><h2 data-v-1f2df889>01.</h2> <h4 style=\"color:#fff;\" data-v-1f2df889>Car Owners</h4> <p data-v-1f2df889>\n                        Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.\n                    </p></div> <div data-v-1f2df889><img" + _vm._ssrAttr("src", __webpack_require__(67)) + " alt data-v-1f2df889></div></div> <div class=\"article article2\" data-v-1f2df889><div data-v-1f2df889><h2 data-v-1f2df889>02.</h2> <h4 data-v-1f2df889>Auto Part Sellers</h4> <p data-v-1f2df889>\n                        Give your car the right service it needs with a unique automechanic shop that \n                        links you with the best, \n                        competent and effective tecnicians.\n                    </p></div> <div data-v-1f2df889><img" + _vm._ssrAttr("src", __webpack_require__(71)) + " alt data-v-1f2df889></div></div> <div class=\"article article3\" data-v-1f2df889><div data-v-1f2df889><h2 data-v-1f2df889>03.</h2> <h4 data-v-1f2df889>Auto-Service Provider</h4> <p data-v-1f2df889>\n                        Give your car the right service it needs with a unique automechanic shop that \n                        links you with the best, \n                        competent and effective tecnicians\n                    </p></div> <div data-v-1f2df889><img" + _vm._ssrAttr("src", __webpack_require__(72)) + " alt data-v-1f2df889></div></div></div> <div class=\"right-grid\" data-v-1f2df889><div class=\"article4 article\" data-v-1f2df889><div data-v-1f2df889><img" + _vm._ssrAttr("src", __webpack_require__(69)) + " alt data-v-1f2df889></div> <div data-v-1f2df889><h2 style=\"color:#1F1F1F;\" data-v-1f2df889>04.</h2> <h4 data-v-1f2df889>Auto Repair Shops</h4> <p data-v-1f2df889>\n                        Give your car the right service it needs with a unique automechanic shop that \n                        links you with the best, \n                        competent and effective tecnicians.\n                    </p></div></div> <div class=\"article5 article\" data-v-1f2df889><div data-v-1f2df889><h2 style=\"color:#1F1F1F;\" data-v-1f2df889>05.</h2> <h4 data-v-1f2df889>Auto Washing Center</h4> <p data-v-1f2df889>\n                        Give your car the right service it needs with a unique automechanic shop that \n                        links you with the best, \n                        competent and effective tecnicians.\n                    </p></div> <div data-v-1f2df889><img" + _vm._ssrAttr("src", __webpack_require__(70)) + " alt data-v-1f2df889></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Service.vue?vue&type=template&id=1f2df889&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Service.vue?vue&type=script&lang=js&
/* harmony default export */ var Servicevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Service.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Servicevue_type_script_lang_js_ = (Servicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Service.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(169)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Servicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f2df889",
  "633ac72c"
  
)

/* harmony default export */ var Service = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 79.80abf7e.png";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 80.1ff8542.png";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 81.1d70b21.png";

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 82.2665912.png";

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 83.2160b84.png";

/***/ })

};;
//# sourceMappingURL=service.js.map