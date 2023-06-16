exports.ids = [7];
exports.modules = {

/***/ 132:
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

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_style_index_0_id_771f17cf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_style_index_0_id_771f17cf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_style_index_0_id_771f17cf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_style_index_0_id_771f17cf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_style_index_0_id_771f17cf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 144:
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

/***/ 191:
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

/***/ 50:
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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 1000004166.af07c8c.png";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mask1.1e5c74c.png";

/***/ })

};;
//# sourceMappingURL=mission.js.map