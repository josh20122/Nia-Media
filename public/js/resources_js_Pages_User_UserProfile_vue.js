"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_UserProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["title", "shared", "filter"],
  data: function data() {
    return {
      drawer: false,
      dialog: false,
      search: this.filter,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      socialLinks: [{
        icon: "mdi-facebook",
        link: "https://www.facebook.com/Flojournalism.diaries/"
      }, {
        icon: "mdi-twitter",
        link: "https://twitter.com/FlorentinahHiza?t=5YiEpFJawlc7bPQY5quE6A&s=08"
      }, {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/florentinah-hiza-a45ba8109"
      }, {
        icon: "mdi-youtube",
        link: "https://youtube.com/channel/UCk0IYz5ANiia2xQahL0Dgmg"
      }]
    };
  },
  watch: {
    search: lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (value) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get("/", {
        search: value
      }, {
        replace: true,
        preserveScroll: true
      });
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/UserProfile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/UserProfile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/Navigation.vue */ "./resources/js/Pages/Layouts/Navigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["errors", "user", "imagePath", "role"],
  layout: _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      form: {
        name: this.user.name,
        email: this.user.email,
        image: null,
        old_password: null,
        password: null,
        password_confirmation: null
      },
      processing: false,
      color: null,
      timeout: null,
      loading: null,
      redirect: false,
      text: null
    };
  },
  methods: {
    update: function update() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/user/profile/update", this.form, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: function onStart() {
          _this.loading = true;
          _this.processing = true;
          _this.color = "yellow darken-1";
          _this.timeout = 100003663;
          _this.text = "Update in progress, please wait..";
        },
        onSuccess: function onSuccess() {
          _this.loading = false;
          _this.text = "Update Success";
          _this.processing = false;
          _this.color = "green darken-1";
          _this.timeout = 4000;
          _this.redirect = true;
        },
        onError: function onError() {
          _this.loading = false;
          _this.timeout = 3000;
          _this.color = "error";
          _this.text = "Failed, please check for any errors";
          _this.processing = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_bg_7_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/images/bg-7.jpg */ "./public/images/bg-7.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_images_bg_7_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image[data-v-706ae5e3] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/images/bg-7.jpg":
/*!********************************!*\
  !*** ./public/images/bg-7.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/bg-7.jpg?b9b5f30bc68276636761e0785d52c234");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "706ae5e3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layouts/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User/UserProfile.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/User/UserProfile.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserProfile_vue_vue_type_template_id_b255c8ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=b255c8ba& */ "./resources/js/Pages/User/UserProfile.vue?vue&type=template&id=b255c8ba&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User/UserProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_b255c8ba___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserProfile_vue_vue_type_template_id_b255c8ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User/UserProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/User/UserProfile.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/User/UserProfile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/UserProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/User/UserProfile.vue?vue&type=template&id=b255c8ba&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/User/UserProfile.vue?vue&type=template&id=b255c8ba& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_b255c8ba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_b255c8ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_b255c8ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserProfile.vue?vue&type=template&id=b255c8ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/UserProfile.vue?vue&type=template&id=b255c8ba&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            app: "",
            color: "drawer",
            temporary: "",
            hidden: _vm.$vuetify.breakpoint.smAndUp,
          },
          model: {
            value: _vm.drawer,
            callback: function ($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer",
          },
        },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                {},
                [
                  _c(
                    "v-list-item-avatar",
                    [
                      _c(
                        "v-avatar",
                        [_c("v-img", { attrs: { src: "/images/logo.jpg" } })],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _c(
                          "span",
                          { staticClass: "white--text font-semibold text-xl" },
                          [_vm._v(" Nia Media ")]
                        ),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "px-2 pb-4 grid space-y-2" },
                [
                  !_vm.shared.user.auth
                    ? _c(
                        "Link",
                        {
                          staticClass: "no-underline",
                          attrs: { href: "/auth/register" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "no-underlne",
                              attrs: {
                                small: "",
                                elevation: "",
                                outlined: "",
                                rounded: "",
                                color: "white",
                                block: "",
                              },
                            },
                            [
                              _c("span", { staticClass: "no-underline" }, [
                                _vm._v("sign up"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.shared.user.auth
                    ? _c(
                        "Link",
                        {
                          staticClass: "no-underline",
                          attrs: { href: "/auth/login" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "no-underlne",
                              attrs: {
                                small: "",
                                elevation: "",
                                outlined: "",
                                rounded: "",
                                color: "white",
                                block: "",
                              },
                            },
                            [
                              _c("span", { staticClass: "no-underline" }, [
                                _vm._v("sign in"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.shared.user.auth
                    ? _c(
                        "Link",
                        {
                          staticClass: "no-underline",
                          attrs: { href: "/auth/logout" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "no-underlne",
                              attrs: {
                                small: "",
                                elevation: "",
                                outlined: "",
                                rounded: "",
                                color: "white",
                                block: "",
                              },
                            },
                            [
                              _c("span", { staticClass: "no-underline" }, [
                                _vm._v("logout"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.shared.user.auth
                    ? _c(
                        "Link",
                        {
                          staticClass: "no-underline",
                          attrs: { href: "/user/my-profile" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "no-underlne",
                              attrs: {
                                small: "",
                                elevation: "",
                                outlined: "",
                                rounded: "",
                                color: "white",
                                block: "",
                              },
                            },
                            [
                              _c("span", { staticClass: "no-underline" }, [
                                _vm._v("my account"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "Link",
                    {
                      staticClass: "no-underline",
                      attrs: { href: "/contact" },
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "no-underlne",
                          attrs: {
                            small: "",
                            elevation: "",
                            outlined: "",
                            rounded: "",
                            color: "white",
                            block: "",
                          },
                        },
                        [
                          _c("span", { staticClass: "no-underline" }, [
                            _vm._v("contact us"),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Link",
                    { staticClass: "no-underline", attrs: { href: "/tv" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "no-underlne",
                          attrs: {
                            small: "",
                            elevation: "",
                            outlined: "",
                            rounded: "",
                            color: "white",
                            block: "",
                          },
                        },
                        [
                          _c("span", { staticClass: "no-underline" }, [
                            _vm._v("Podcast"),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "white mb-10" }),
              _vm._v(" "),
              _c("v-subheader", [
                _c(
                  "span",
                  { staticClass: "text-white text-lg font-semibold" },
                  [_vm._v("Tags")]
                ),
              ]),
              _vm._v(" "),
              _vm._l(_vm.shared.tags, function (tag, index) {
                return _c(
                  "div",
                  { key: index },
                  [
                    _c(
                      "v-list-item",
                      [
                        _c(
                          "v-list-item-content",
                          [
                            _c(
                              "Link",
                              {
                                staticClass: "no-underline",
                                attrs: { href: "/tag/" + tag.slug },
                              },
                              [
                                _c("v-list-item-title", {
                                  staticClass: "grey--text text--lighten-4",
                                  domProps: { textContent: _vm._s(tag.name) },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider", {}),
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "v-list-group",
                {
                  staticClass: "white--text",
                  attrs: { color: "white", "no-action": "", "sub-group": "" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function () {
                        return [
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", {
                                domProps: { textContent: _vm._s("Others") },
                              }),
                            ],
                            1
                          ),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _vm._l(_vm.shared.otherTags, function (tag, index) {
                    return _c(
                      "div",
                      { key: index, attrs: { "active-class": "" } },
                      [
                        _c(
                          "v-list-item",
                          [
                            _c(
                              "v-list-item-content",
                              [
                                _c(
                                  "Link",
                                  {
                                    staticClass: "text-white no-underline",
                                    attrs: { href: "/tag/" + tag.slug },
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _c("span", {
                                        staticClass: "text-white",
                                        domProps: {
                                          textContent: _vm._s(tag.name),
                                        },
                                      }),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  }),
                ],
                2
              ),
            ],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            app: "",
            color: "nav",
            flat: "",
            dense: "",
            height: _vm.$vuetify.breakpoint.mdAndUp ? 80 : "",
          },
        },
        [
          _c(
            "v-container",
            { staticClass: "pa-0 fill-height" },
            [
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _vm.$vuetify.breakpoint.smAndDown
                      ? _c(
                          "div",
                          { staticClass: "flex justify-between" },
                          [
                            _c("v-app-bar-nav-icon", {
                              staticClass: "white--text",
                              on: {
                                click: function ($event) {
                                  _vm.drawer = !_vm.drawer
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "v-toolbar-title",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "white--text",
                                    attrs: {
                                      elevation: "",
                                      depressed: "",
                                      color: "transparent",
                                    },
                                  },
                                  [_vm._v("nia media")]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      elevation: "",
                                      icon: "",
                                      color: "",
                                    },
                                    on: {
                                      click: function ($event) {
                                        _vm.dialog = !_vm.dialog
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "white" } },
                                      [_vm._v("mdi-magnify")]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.$page.url !== "/"
                                  ? _c(
                                      "Link",
                                      { attrs: { href: "/" } },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              icon: "",
                                              elevation: "",
                                              color: "",
                                            },
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "white" } },
                                              [_vm._v("mdi-home")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$vuetify.breakpoint.mdAndUp
                      ? _c("div", { staticClass: "flex justify-between" }, [
                          _c(
                            "div",
                            { staticClass: "inline-flex white--text" },
                            [
                              _c("v-avatar", [
                                _c("img", {
                                  attrs: { src: "/images/logo.jpg", alt: "" },
                                }),
                              ]),
                              _vm._v(" "),
                              _c("v-divider", {
                                staticClass: "white mx-3",
                                attrs: { vertical: "" },
                              }),
                              _vm._v(" "),
                              _vm.$vuetify.breakpoint.mdAndUp
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "flex space-x-4 justify-end mt-3",
                                    },
                                    [
                                      _vm._l(
                                        _vm.shared.tags,
                                        function (tag, index) {
                                          return _c(
                                            "Link",
                                            {
                                              key: index,
                                              staticClass:
                                                "capitalize grey--text no-underline",
                                              attrs: {
                                                href: "/tag/" + tag.slug,
                                              },
                                            },
                                            [
                                              _c("span", {
                                                staticClass: "text-white",
                                                domProps: {
                                                  textContent: _vm._s(tag.name),
                                                },
                                              }),
                                            ]
                                          )
                                        }
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "Link",
                                        {
                                          staticClass:
                                            "capitalize grey--text no-underline",
                                          attrs: { href: "/tv" },
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "text-white" },
                                            [_vm._v("Podcast ")]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        [
                                          _c(
                                            "v-menu",
                                            {
                                              staticClass:
                                                "capitalize white--text",
                                              attrs: {
                                                "open-on-hover": "",
                                                top: "",
                                                "offset-y": "",
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "activator",
                                                    fn: function (ref) {
                                                      var on = ref.on
                                                      var attrs = ref.attrs
                                                      return [
                                                        _c(
                                                          "v-btn",
                                                          _vm._g(
                                                            _vm._b(
                                                              {
                                                                staticClass:
                                                                  "capitalize white--text",
                                                                attrs: {
                                                                  depressed: "",
                                                                  color:
                                                                    "transparent",
                                                                },
                                                              },
                                                              "v-btn",
                                                              attrs,
                                                              false
                                                            ),
                                                            on
                                                          ),
                                                          [
                                                            _c("span", [
                                                              _vm._v("others"),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  color: "",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "mdi-menu-down"
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ]
                                                    },
                                                  },
                                                ],
                                                null,
                                                false,
                                                2172999707
                                              ),
                                            },
                                            [
                                              _vm._v(" "),
                                              _c(
                                                "v-list",
                                                { attrs: { color: "nav" } },
                                                _vm._l(
                                                  _vm.shared.otherTags,
                                                  function (item, index) {
                                                    return _c(
                                                      "v-list-item",
                                                      { key: index },
                                                      [
                                                        _c(
                                                          "Link",
                                                          {
                                                            staticClass:
                                                              "no-underline text-white",
                                                            attrs: {
                                                              href:
                                                                "/tag/" +
                                                                item.slug,
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item-title",
                                                              [
                                                                _c("span", {
                                                                  staticClass:
                                                                    "no-underline text-white",
                                                                  domProps: {
                                                                    textContent:
                                                                      _vm._s(
                                                                        item.name
                                                                      ),
                                                                  },
                                                                }),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  }
                                                ),
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    2
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.$vuetify.breakpoint.mdAndUp
                            ? _c(
                                "div",
                                { staticClass: "inline-flex justify-end" },
                                [
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            elevation: "",
                                            icon: "",
                                            color: "",
                                          },
                                          on: {
                                            click: function ($event) {
                                              _vm.dialog = !_vm.dialog
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "white" } },
                                            [_vm._v("mdi-magnify")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.$page.url !== "/"
                                    ? _c(
                                        "Link",
                                        { attrs: { href: "/" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                elevation: "",
                                                icon: "",
                                                color: "",
                                              },
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "white" } },
                                                [_vm._v("mdi-home")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.shared.user.auth
                                    ? _c(
                                        "Link",
                                        { attrs: { href: "/user/my-profile" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                elevation: "",
                                                icon: "",
                                                color: "",
                                              },
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "white" } },
                                                [_vm._v("mdi-account")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "Link",
                                    { attrs: { href: "/contact" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            elevation: "",
                                            icon: "",
                                            color: "",
                                          },
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "white" } },
                                            [_vm._v("mdi-phone")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  !_vm.shared.user.auth
                                    ? _c(
                                        "Link",
                                        {
                                          staticClass:
                                            "no-underline text-white mr-3 mt-3",
                                          attrs: { href: "/auth/register" },
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "text-white" },
                                            [_vm._v(" Sign Up")]
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.shared.user.auth
                                    ? _c(
                                        "Link",
                                        {
                                          staticClass:
                                            "no-underline text-white mt-3",
                                          attrs: { href: "/auth/login" },
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "text-white" },
                                            [_vm._v("Log In")]
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.shared.user.auth
                                    ? _c(
                                        "Link",
                                        { attrs: { href: "/auth/logout" } },
                                        [
                                          _c(
                                            "v-btn",
                                            { attrs: { icon: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "white" } },
                                                [_vm._v("mdi-logout")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                ],
                                1
                              )
                            : _vm._e(),
                        ])
                      : _vm._e(),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "400" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "v-card",
            {},
            [
              _c("v-card-title", [_vm._v(" Search ")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: {
                      placeholder: "Search...",
                      outlined: "",
                      dense: "",
                    },
                    model: {
                      value: _vm.search,
                      callback: function ($$v) {
                        _vm.search = $$v
                      },
                      expression: "search",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex justify-end" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            small: "",
                            elevation: "",
                            outlined: "",
                            color: "error",
                          },
                          on: {
                            click: function ($event) {
                              _vm.dialog = false
                            },
                          },
                        },
                        [_vm._v("cancel")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        { staticClass: "background pb-6" },
        [
          _vm.filter
            ? _c(
                "v-container",
                {},
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("div", { staticClass: "title" }, [
                          _vm._v("Search results for " + _vm._s(_vm.filter)),
                        ]),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._t("default"),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        { attrs: { dark: "", padless: "" } },
        [
          _c(
            "v-card",
            {
              staticClass: "image indigo lighten-1 white--text text-center",
              attrs: { flat: "", tile: "", width: "100%", "max-width": "100%" },
            },
            [
              _c(
                "v-card-text",
                _vm._l(_vm.socialLinks, function (social, index) {
                  return _c(
                    "v-btn",
                    {
                      key: index,
                      staticClass: "mx-4 white--text",
                      attrs: { href: social.link, icon: "" },
                    },
                    [
                      _c("v-icon", { attrs: { size: "24px" } }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(social.icon) +
                            "\n          "
                        ),
                      ]),
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "white--text" }, [
                _vm._v("\n        " + _vm._s(new Date().getFullYear()) + " — "),
                _c("strong", [_vm._v("Nia Media")]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/UserProfile.vue?vue&type=template&id=b255c8ba&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/UserProfile.vue?vue&type=template&id=b255c8ba& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "fill-height pb-12" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "mx-auto",
                  attrs: { outlined: "", "max-width": "500" },
                },
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        [
                          _c(
                            "v-row",
                            { attrs: { dense: "" } },
                            [
                              _c("v-col", { attrs: { cols: "12" } }, [
                                _c(
                                  "div",
                                  { staticClass: "grid justify-center" },
                                  [
                                    _c(
                                      "v-avatar",
                                      {
                                        staticClass: "mx-auto",
                                        attrs: { size: "170" },
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: _vm.imagePath,
                                            alt: "",
                                          },
                                        }),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Full Name"),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      placeholder: "Enter name",
                                      "error-messages": _vm.errors.name,
                                      outlined: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.form.name,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "name", $$v)
                                      },
                                      expression: "form.name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Email"),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      placeholder: "Enter email",
                                      "error-messages": _vm.errors.email,
                                      outlined: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.form.email,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "email", $$v)
                                      },
                                      expression: "form.email",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Edit Avatar"),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-file-input", {
                                    attrs: {
                                      placeholder: "Click Here",
                                      "error-messages": _vm.errors.image,
                                      outlined: "",
                                      "show-size": true,
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.form.image,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "image", $$v)
                                      },
                                      expression: "form.image",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        elevation: "",
                                        color: "primary",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.update()
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Update\n                "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6" } },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [_vm._v(" Personal Details ")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        [
                          _c(
                            "v-row",
                            { attrs: { dense: "" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Old Password"),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      dense: "",
                                      "error-messages": _vm.errors.old_password,
                                      placeholder: "Enter Old password",
                                      outlined: "",
                                    },
                                    model: {
                                      value: _vm.form.old_password,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "old_password", $$v)
                                      },
                                      expression: "form.old_password",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("New Password"),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      dense: "",
                                      "error-messages": _vm.errors.password,
                                      placeholder: "Enter new password",
                                      outlined: "",
                                    },
                                    model: {
                                      value: _vm.form.password,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "password", $$v)
                                      },
                                      expression: "form.password",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Confirm Password"),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      dense: "",
                                      "error-messages":
                                        _vm.errors.password_confirmation,
                                      placeholder: "Enter new password",
                                      outlined: "",
                                    },
                                    model: {
                                      value: _vm.form.password_confirmation,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "password_confirmation",
                                          $$v
                                        )
                                      },
                                      expression: "form.password_confirmation",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        small: "",
                                        elevation: "",
                                        color: "primary",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.update()
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Update Password\n                "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-snackbar",
            {
              staticClass: "white--text",
              attrs: {
                timeout: _vm.timeout,
                color: _vm.color,
                tile: "",
                absolute: "",
                right: "",
                transition: "slide-x-reverse-transition",
              },
              model: {
                value: _vm.processing,
                callback: function ($$v) {
                  _vm.processing = $$v
                },
                expression: "processing",
              },
            },
            [
              _c("div", {
                staticClass: "font-sembold text-lg",
                domProps: { textContent: _vm._s(_vm.text) },
              }),
            ]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);