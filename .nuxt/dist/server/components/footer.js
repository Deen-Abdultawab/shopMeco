exports.ids = [4];
exports.modules = {

/***/ 119:
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_8b421026_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_8b421026_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_8b421026_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_8b421026_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_8b421026_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 128:
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

/***/ 130:
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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Mask group.3619536.png";

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAYCAYAAAAh8HdUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADxSURBVHgB7ZExDoJAEEVnZROMa6GNtVpYWCjcQG/CDbyCnsB4Ar2JR4BYaoFWJjZQmEAiyzhbYAA3EuxM/AkZ5u+83ZldBhq5rt9p8/YCEWcMmIWAHeXTfygRVlwHCC72BFgqJ+C1pmBGX6MMCUOsadWCDypAvhuoNhyoUKG9BGI6wSgUpJhuojRa2vYg1J6EhtEv75qkyS4PvEE6tUwRlL1KSCd+cq+zLKHLnZYLHom0qWaQ5XeIPXY83BBqSEo5r92eaTb92tBw3L3UgxA8Ffho0mOZR/M5FLb5OjUDhXPe41AhNYNqKe999U5/6DegJ0vmUEeoVyxtAAAAAElFTkSuQmCC"

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAWCAYAAAAxSueLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI7SURBVHgBrVVBctNAEJzRilQRc3AuBk4olwQuifUC5BckeQHiBeQHhBcYXmD7B/YLEC+wYw4hcLA4uUgu4pQD2h1mtsoqxZJsJXZXSatdraa3Z0YzCBvi1/fbgIhO+LHJV0JA3w6Png/ze8bjWdP39xNcLPyc3oQHR60+1IQYaDxpdMFAWPI61lp3XNf1+PmtNnrv9fGLc9eebjwPCKB3fXlDh8etQQ0uaKhKIoGnlJqxYuArJkMdWXTkph23LSMi9NktH2ENrqd/TnkIoQaYbsTEPfGEU3hJdMEu7V2N516VAQQ8gZpw0PnAw0BiZsnIpJOlPaG4oZIUwYOakNgtciFLEI7XDKuNRIZwpPhQHOQ4VW6X3XMKNcBEGYebHdbAGSr8ykaaJd8EDlJASsE/OyWoiSQ/sW78cXl7Dgq6hswItgmCOD+1ymzMlOoiImwTBszv/Nwqe+O/jDh6EWwZhDQskAl0qt/TkuyNoe8LyMhYXWyM7vA/NITtoC82S8nsRDltzsaEXTqBDcH/16flNTc/2dE7UarSHleRJmyGgirBPWX7/l5CmsSVCTwSUnjLVBXIBAd+a5Lq1OePBo9ImAQNnpWpEqz8saTHscpuRVUpEHH2deSwVRsKZNIKnjrPQi5PUtkDqAFxnShaRWTJbMeVRsgNjyuex+wePABc4r7cmbsLaSHr9mbKrqbzUKF6x/UsgPVImGTAHfhzVXxWki0gSndhN+DUaXOtfLVYZ+N/eYgd40Tr3FWF/7tHAubj4b8qAAAAAElFTkSuQmCC"

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAWCAYAAAA4oUfxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGbSURBVHgBvZZPUsIwFMa/JHVklEVXKCvLRmTDnxvgUTyBegLkBMoJ9CZygzq6wwVx5Qwu6IYZGUyfL4ViF4K0U/tbNE0nyZf3+t5LBLYw9t89234BUUtKefgDYYyOxu6pYLaY6U6nFmwcG7+M/EkbCpf8pU0EV6wE84AAzetpftXGmH6jU9Vr8deXjy4RPaIgeAPnvIGhXPVvUSBKqZ5tI3G2uo1i6dqHGPtTd6EWUxSM4+x5coGZh5Swp/rIASmgXKSk3jq64aCpcVZoZGQ+/6xJZMSmS71VqWX1Ainpyl0KxzayesGBcDNbniSrF3IRXy8m5RDY3QMOcsD3x25ZlXts+VWaeQ6BAvFT4lOzKs33vI6XZh7HiXakCQMOOqQlq7VJ2HLDR1468azWJjGs6xioIK3deZyAB/uH0+hnj54nhII5bVZEnGoaRUJ4sk0kHlI4QIEYYQZr8bPW8R0HwEW8o//CXqfY0OtGs/pg+78muE2jEkrLCwbXfkEh3+lEdPoJIU42Lk70thShgIQMpIlqiLaRHd/bknwD9/+7f5IA7EQAAAAASUVORK5CYII="

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtVZLTgJBEH3Vg3tc+NvBwg8LgTmB4wmIN5AToCcQTiCeQLwBnABuAMrCBBewM9EY2bDBdLdVo5DRyDDCzEs6PdM1qdf9qrpqCAE89V89Y01FQXkWNo3/Y8Sjo7Wu5dy90WyRAgRX1toqYgIRVfePt2pzkkH/rQKr64gZrMbZYX6nqYbd9zQTXCABEOhaZjV1ph7PGawBlnk00ZNNjkXWWj8uM2Qeu8+e4jMVsT7uXDc7lmCz/q2ggRQVU4gB7KjEO258vaD0wwZKqyhORA5O7UuR5CC/TSKLhi7PpWE1HMcZysAf0i89iU9gzGkw77+fG7z7jlJOmyg8pktP8psgCFk3RpeX+QglYYlaiwgCRB0WvoNVSThoPUSBwT1WJYkL4SchOkE0L4Vwczg8zqBM2Ae+3cLDGiTg3G8vIpJ1sS/zESUmvqPBw8v5jGzIs7SGlJPqIkLdi1pWMjxumQxMhg9Z4eseFYlnF/eUseIMGiFBWGN7akNvNPnSjZEApO5JRVBZd3Osra4hARgyvl8/JkeF3TqzxkokrSGX32vIMwUNkqJKqSrHSRrPKr9EInsTGjcH7va87n0CpLLCQaZzzSsAAAAASUVORK5CYII="

/***/ })

};;
//# sourceMappingURL=footer.js.map