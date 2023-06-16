exports.ids = [2];
exports.modules = {

/***/ 118:
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

/***/ 123:
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

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_style_index_0_id_b16694b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_style_index_0_id_b16694b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_style_index_0_id_b16694b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_style_index_0_id_b16694b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_style_index_0_id_b16694b4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 126:
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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Mask group.3619536.png";

/***/ })

};;
//# sourceMappingURL=desktop-nav.js.map