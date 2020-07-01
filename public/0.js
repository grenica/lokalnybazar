(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['product'],
  // data() {
  //     return {
  //         card:{},
  //     }
  // },
  computed: {
    getproductCard: function getproductCard() {
      var _this = this;

      var count = 0; // console.log('Add Card' + this.product.id);
      // szukam w state.cart czy mam już towar w koszyku, towar przekazany przez props

      var prod = this.$store.state.cart.find(function (item) {
        return item.id === _this.product.id;
      });

      if (prod) {
        //console.log('Mam towar w koszyku');
        count = prod.quantity;
      } // } else {
      //     console.log('Nie mam go w koszyku');
      // }


      return count; // console.log('w koszyku mam: '+prod.quantity);
      //    return this.$store.getters.getProductCard(this.product.id);
    }
  },
  methods: {
    addProductToCart: function addProductToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
    removeProductItem: function removeProductItem(product) {
      this.$store.dispatch('decrementProductItem', product);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CartItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CartItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AddCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AddCard.vue */ "./resources/js/components/AddCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['item'],
  data: function data() {
    return {
      itemId: this.item.id
    };
  },
  components: {
    AddCard: _components_AddCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    defaultImage: function defaultImage() {
      // return this.$store.getters.getDefaultImageByProductId(id);
      var products = this.$store.getters.getProductId(this.itemId);
      var defImage = products.images.find(function (element) {
        return element.isdefault === 1;
      });
      return defImage; // return this.$store.getters.getProductId(this.item.id);
    },
    farmer: function farmer() {
      var products = this.$store.getters.getProductId(this.itemId);

      if (typeof products.FarmerName == "undefined") {
        return products.farmer.name;
      } else {
        return products.FarmerName;
      }
    },
    unit: function unit() {
      var products = this.$store.getters.getProductId(this.itemId);

      if (typeof products.UnitName == "undefined") {
        return products.unit.name;
      } else {
        return products.UnitName;
      }
    }
  },
  methods: {
    addProductToCart: function addProductToCart(product) {
      this.$store.dispatch('addToCart', product);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewsMain.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewsMain.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CartItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/CartItem */ "./resources/js/components/CartItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      m: null
    };
  },
  components: {
    CartItem: _components_CartItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  // created() {
  //     // alert('Created'+this.$store.getters.getMarketID);
  //     this.m=this.$store.getters.getMarketID;
  // },
  mounted: function mounted() {
    //     this.$data.m = this.$store.getters.getMarketID;
    //     alert("mounted "+a);
    this.$store.dispatch('fetchProductsNews');
  },
  computed: {
    products: function products() {
      return this.$store.state.products;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Start.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Start.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_NewsMain_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/NewsMain.vue */ "./resources/js/views/NewsMain.vue");
//
//
//
//
//
//
//
//
//
//
// import News from '../components/News.vue';

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // News,    
    NewsMain: _views_NewsMain_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  } // data() {
  //     return {
  //         categories: null,
  //     }
  // },
  // methods: {
  // },
  // mounted: function(){
  //     axios.get('http://localhost/api/category')
  //         .then(response => this.categories = response.data);
  // },

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCard.vue?vue&type=template&id=c6256f94&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddCard.vue?vue&type=template&id=c6256f94&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "addtoCard" }, [
    _vm.getproductCard == 0
      ? _c(
          "div",
          {
            staticClass: "card_button",
            on: {
              click: function($event) {
                return _vm.addProductToCart(_vm.product)
              }
            }
          },
          [_c("i", { staticClass: "icofont-cart" }), _vm._v("Dodaj do koszyka")]
        )
      : _c("div", { staticClass: "counterItemCard" }, [
          _c(
            "div",
            {
              staticClass: "card_button_icon",
              on: {
                click: function($event) {
                  return _vm.removeProductItem(_vm.product)
                }
              }
            },
            [_c("i", { staticClass: "icofont-ui-remove" })]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "cardCount" }, [
            _vm._v(_vm._s(_vm.getproductCard))
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "card_button_icon",
              on: {
                click: function($event) {
                  return _vm.addProductToCart(_vm.product)
                }
              }
            },
            [_c("i", { staticClass: "icofont-ui-add" })]
          )
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CartItem.vue?vue&type=template&id=7f6ae384&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CartItem.vue?vue&type=template&id=7f6ae384& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cartitem" },
    [
      _c(
        "router-link",
        {
          staticClass: "img_link",
          attrs: {
            exact: "",
            to: { name: "product", params: { id: _vm.item.id } }
          }
        },
        [
          !_vm.item.image
            ? _c("img", {
                staticClass: "card_img",
                attrs: { src: "/articles/" + _vm.defaultImage.image }
              })
            : _c("img", {
                staticClass: "card_img",
                attrs: { src: "/articles/" + _vm.item.image }
              })
        ]
      ),
      _vm._v(" "),
      _c("p", { staticClass: "frm" }, [_vm._v(_vm._s(_vm.farmer))]),
      _vm._v(" "),
      _c(
        "router-link",
        { attrs: { to: { name: "product", params: { id: _vm.item.id } } } },
        [
          !_vm.item.name
            ? _c("h2", { staticClass: "product_title" }, [
                _vm._v(_vm._s(_vm.item.ArticleName))
              ])
            : _c("h2", { staticClass: "product_title" }, [
                _vm._v(_vm._s(_vm.item.name))
              ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "price_block" }, [
        _c("span", { staticClass: "strong" }, [
          _vm._v(_vm._s(_vm.item.price) + " zł ")
        ]),
        _vm._v("/\n        ")
      ]),
      _vm._v(" "),
      _c("AddCard", { attrs: { product: _vm.item } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewsMain.vue?vue&type=template&id=f83a1d6a&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewsMain.vue?vue&type=template&id=f83a1d6a& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "article-list" },
    [
      _c(
        "div",
        { staticClass: "main_category_title" },
        [
          _c("h3", [_vm._v("Nowości \n            ")]),
          _vm._v(" "),
          _c("router-link", { attrs: { to: { name: "news" } } }, [
            _vm._v("Wiecej nowości")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.products, function(item) {
        return _c("CartItem", { key: item.id, attrs: { item: item } })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Start.vue?vue&type=template&id=0af62c5a&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Start.vue?vue&type=template&id=0af62c5a& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main_product_wrapper" }, [_c("NewsMain")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AddCard.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/AddCard.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCard_vue_vue_type_template_id_c6256f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCard.vue?vue&type=template&id=c6256f94&scoped=true& */ "./resources/js/components/AddCard.vue?vue&type=template&id=c6256f94&scoped=true&");
/* harmony import */ var _AddCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCard.vue?vue&type=script&lang=js& */ "./resources/js/components/AddCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCard_vue_vue_type_template_id_c6256f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCard_vue_vue_type_template_id_c6256f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c6256f94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/AddCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddCard.vue?vue&type=template&id=c6256f94&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/AddCard.vue?vue&type=template&id=c6256f94&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCard_vue_vue_type_template_id_c6256f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddCard.vue?vue&type=template&id=c6256f94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCard.vue?vue&type=template&id=c6256f94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCard_vue_vue_type_template_id_c6256f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCard_vue_vue_type_template_id_c6256f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CartItem.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/CartItem.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartItem_vue_vue_type_template_id_7f6ae384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartItem.vue?vue&type=template&id=7f6ae384& */ "./resources/js/components/CartItem.vue?vue&type=template&id=7f6ae384&");
/* harmony import */ var _CartItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem.vue?vue&type=script&lang=js& */ "./resources/js/components/CartItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CartItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartItem_vue_vue_type_template_id_7f6ae384___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CartItem_vue_vue_type_template_id_7f6ae384___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CartItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CartItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/CartItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CartItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CartItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CartItem.vue?vue&type=template&id=7f6ae384&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/CartItem.vue?vue&type=template&id=7f6ae384& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_template_id_7f6ae384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CartItem.vue?vue&type=template&id=7f6ae384& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CartItem.vue?vue&type=template&id=7f6ae384&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_template_id_7f6ae384___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_template_id_7f6ae384___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/NewsMain.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/NewsMain.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewsMain_vue_vue_type_template_id_f83a1d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsMain.vue?vue&type=template&id=f83a1d6a& */ "./resources/js/views/NewsMain.vue?vue&type=template&id=f83a1d6a&");
/* harmony import */ var _NewsMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsMain.vue?vue&type=script&lang=js& */ "./resources/js/views/NewsMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _NewsMain_vue_vue_type_custom_index_0_blockType_router_link_3Ato_7B_20name_3A_product_2C_20params_3A_7Bid_3Aitem_id_7D_7D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsMain.vue?vue&type=custom&index=0&blockType=router-link&%3Ato=%7B%20name%3A'product'%2C%20params%3A%7Bid%3Aitem.id%7D%7D */ "./resources/js/views/NewsMain.vue?vue&type=custom&index=0&blockType=router-link&%3Ato=%7B%20name%3A'product'%2C%20params%3A%7Bid%3Aitem.id%7D%7D");
/* harmony import */ var _NewsMain_vue_vue_type_custom_index_0_blockType_router_link_3Ato_7B_20name_3A_product_2C_20params_3A_7Bid_3Aitem_id_7D_7D__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NewsMain_vue_vue_type_custom_index_0_blockType_router_link_3Ato_7B_20name_3A_product_2C_20params_3A_7Bid_3Aitem_id_7D_7D__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NewsMain_vue_vue_type_custom_index_1_blockType_p_class_farmer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewsMain.vue?vue&type=custom&index=1&blockType=p&class=farmer */ "./resources/js/views/NewsMain.vue?vue&type=custom&index=1&blockType=p&class=farmer");
/* harmony import */ var _NewsMain_vue_vue_type_custom_index_1_blockType_p_class_farmer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NewsMain_vue_vue_type_custom_index_1_blockType_p_class_farmer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NewsMain_vue_vue_type_custom_index_2_blockType_h2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewsMain.vue?vue&type=custom&index=2&blockType=h2 */ "./resources/js/views/NewsMain.vue?vue&type=custom&index=2&blockType=h2");
/* harmony import */ var _NewsMain_vue_vue_type_custom_index_2_blockType_h2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NewsMain_vue_vue_type_custom_index_2_blockType_h2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NewsMain_vue_vue_type_custom_index_3_blockType_div_class_price_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NewsMain.vue?vue&type=custom&index=3&blockType=div&class=price_block */ "./resources/js/views/NewsMain.vue?vue&type=custom&index=3&blockType=div&class=price_block");
/* harmony import */ var _NewsMain_vue_vue_type_custom_index_3_blockType_div_class_price_block__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_NewsMain_vue_vue_type_custom_index_3_blockType_div_class_price_block__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _NewsMain_vue_vue_type_custom_index_4_blockType_AddCard_3Aproduct_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NewsMain.vue?vue&type=custom&index=4&blockType=AddCard&%3Aproduct=item */ "./resources/js/views/NewsMain.vue?vue&type=custom&index=4&blockType=AddCard&%3Aproduct=item");
/* harmony import */ var _NewsMain_vue_vue_type_custom_index_4_blockType_AddCard_3Aproduct_item__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_NewsMain_vue_vue_type_custom_index_4_blockType_AddCard_3Aproduct_item__WEBPACK_IMPORTED_MODULE_7__);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewsMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewsMain_vue_vue_type_template_id_f83a1d6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewsMain_vue_vue_type_template_id_f83a1d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _NewsMain_vue_vue_type_custom_index_0_blockType_router_link_3Ato_7B_20name_3A_product_2C_20params_3A_7Bid_3Aitem_id_7D_7D__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') _NewsMain_vue_vue_type_custom_index_0_blockType_router_link_3Ato_7B_20name_3A_product_2C_20params_3A_7Bid_3Aitem_id_7D_7D__WEBPACK_IMPORTED_MODULE_3___default()(component)

if (typeof _NewsMain_vue_vue_type_custom_index_1_blockType_p_class_farmer__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') _NewsMain_vue_vue_type_custom_index_1_blockType_p_class_farmer__WEBPACK_IMPORTED_MODULE_4___default()(component)

if (typeof _NewsMain_vue_vue_type_custom_index_2_blockType_h2__WEBPACK_IMPORTED_MODULE_5___default.a === 'function') _NewsMain_vue_vue_type_custom_index_2_blockType_h2__WEBPACK_IMPORTED_MODULE_5___default()(component)

if (typeof _NewsMain_vue_vue_type_custom_index_3_blockType_div_class_price_block__WEBPACK_IMPORTED_MODULE_6___default.a === 'function') _NewsMain_vue_vue_type_custom_index_3_blockType_div_class_price_block__WEBPACK_IMPORTED_MODULE_6___default()(component)

if (typeof _NewsMain_vue_vue_type_custom_index_4_blockType_AddCard_3Aproduct_item__WEBPACK_IMPORTED_MODULE_7___default.a === 'function') _NewsMain_vue_vue_type_custom_index_4_blockType_AddCard_3Aproduct_item__WEBPACK_IMPORTED_MODULE_7___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/NewsMain.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/NewsMain.vue?vue&type=custom&index=0&blockType=router-link&%3Ato=%7B%20name%3A'product'%2C%20params%3A%7Bid%3Aitem.id%7D%7D":
/*!********************************************************************************************************************************************************!*\
  !*** ./resources/js/views/NewsMain.vue?vue&type=custom&index=0&blockType=router-link&%3Ato=%7B%20name%3A'product'%2C%20params%3A%7Bid%3Aitem.id%7D%7D ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/views/NewsMain.vue?vue&type=custom&index=1&blockType=p&class=farmer":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/NewsMain.vue?vue&type=custom&index=1&blockType=p&class=farmer ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/views/NewsMain.vue?vue&type=custom&index=2&blockType=h2":
/*!******************************************************************************!*\
  !*** ./resources/js/views/NewsMain.vue?vue&type=custom&index=2&blockType=h2 ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/views/NewsMain.vue?vue&type=custom&index=3&blockType=div&class=price_block":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/NewsMain.vue?vue&type=custom&index=3&blockType=div&class=price_block ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/views/NewsMain.vue?vue&type=custom&index=4&blockType=AddCard&%3Aproduct=item":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/NewsMain.vue?vue&type=custom&index=4&blockType=AddCard&%3Aproduct=item ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/views/NewsMain.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/NewsMain.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NewsMain.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewsMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/NewsMain.vue?vue&type=template&id=f83a1d6a&":
/*!************************************************************************!*\
  !*** ./resources/js/views/NewsMain.vue?vue&type=template&id=f83a1d6a& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsMain_vue_vue_type_template_id_f83a1d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NewsMain.vue?vue&type=template&id=f83a1d6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewsMain.vue?vue&type=template&id=f83a1d6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsMain_vue_vue_type_template_id_f83a1d6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsMain_vue_vue_type_template_id_f83a1d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Start.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Start.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Start_vue_vue_type_template_id_0af62c5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Start.vue?vue&type=template&id=0af62c5a& */ "./resources/js/views/Start.vue?vue&type=template&id=0af62c5a&");
/* harmony import */ var _Start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Start.vue?vue&type=script&lang=js& */ "./resources/js/views/Start.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Start_vue_vue_type_template_id_0af62c5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Start_vue_vue_type_template_id_0af62c5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Start.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Start.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Start.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Start.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Start.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Start.vue?vue&type=template&id=0af62c5a&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Start.vue?vue&type=template&id=0af62c5a& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_template_id_0af62c5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Start.vue?vue&type=template&id=0af62c5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Start.vue?vue&type=template&id=0af62c5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_template_id_0af62c5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Start_vue_vue_type_template_id_0af62c5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);