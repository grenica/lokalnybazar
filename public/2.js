(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    AddCard: _components_AddCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      prodID: this.$route.params.id,
      ActiveItem: null
    };
  },
  //  mounted: function(){
  //      console.log('jestem w Products');
  //     axios.get('http://localhost/api/product/')
  //         .then(response => this.product = response.data);
  // }
  created: function created() {
    //let param = this.$route.params.id;
    console.log("Product - fetchProduct" + this.prodID);
    this.$store.dispatch('fetchProduct', this.prodID);
    this.ActiveItem = this.prodID;
  },
  computed: {
    product: function product() {
      return this.$store.getters.getProductId(this.prodID);
    },
    // defaultImage() {
    //     let wynik = '';
    //     let products = this.$store.getters.getProductId(this.prodID);
    //     // console.log(products.images);
    //     //szukam image z tablicy "images" gdzie jest default=1
    //     products.images.forEach(element => {
    //         if(element.isdefault) {
    //             console.log(element.image);
    //             wynik = element.image;
    //         }
    //     });
    //     return wynik;
    // },
    // nondefaultImage() {
    //     let products = this.$store.getters.getProductId(this.prodID);
    //     // const def = products.images.find(element => element.isdefault === 1 );
    //     // console.log('tablica obrazków:'+ JSON.stringify(products.images)  );
    //     // wszystkie elementy z tablicy products gdzie w obiekcie nie ma w polu default 1
    //     let arr = products.images.filter(item => item.isdefault !== 1);
    //     return arr;
    // },
    sortedProductImages: function sortedProductImages() {
      //this.$store.dispatch('fetchProduct',this.prodID);
      var products = this.$store.getters.getProductId(this.prodID); // wszystkie elementy z tablicy products gdzie w obiekcie nie ma w polu default 1

      var arr = products.images.filter(function (item) {
        return item.isdefault !== 1;
      }); // szukam elementu gdzie jest zaznaczony domyślny obraz (isdefault = 1)

      var def = products.images.find(function (element) {
        return element.isdefault === 1;
      }); // dodaje znaleziony element na początku tablicy arr

      arr.unshift(def);
      console.log(arr);
      return arr;
    }
  },
  methods: {
    // hover(index) {
    //     this.ActiveItem = index;
    //     console.log("hover: "+index);
    // }
    setActive: function setActive(index) {
      this.ActiveItem = index;
    },
    update: function update() {
      this.$forceUpdate();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product_preview {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n}\n.product_preview .active {\n  z-index: 10;\n}\n.product_preview img {\n  width: 100%;\n  grid-row: 1;\n  grid-column: 1/2;\n}\n@media screen and (min-width: 768px) {\n.product_container .product_info {\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 1fr auto 1fr;\n    grid-column-gap: 5px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "product_container" }, [
      _vm.product
        ? _c("div", { staticClass: "product_info" }, [
            _vm.product.images && _vm.sortedProductImages.length > 1
              ? _c(
                  "div",
                  { staticClass: "product_images" },
                  _vm._l(_vm.sortedProductImages, function(p, index) {
                    return _c("img", {
                      key: index,
                      class: { active: index === _vm.ActiveItem },
                      attrs: { src: "/articles/thumbnail/" + p.image },
                      on: {
                        click: function($event) {
                          return _vm.setActive(index)
                        }
                      }
                    })
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.product.images
              ? _c(
                  "div",
                  { staticClass: "product_preview" },
                  _vm._l(_vm.sortedProductImages, function(p, index) {
                    return _c("img", {
                      key: index,
                      class: { active: index === _vm.ActiveItem },
                      attrs: { src: "/articles/" + p.image }
                    })
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "product_title" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "store_link",
                    attrs: { to: { name: "welcome" } }
                  },
                  [_vm._v(_vm._s(_vm.product.FarmerName))]
                ),
                _vm._v(" "),
                _vm.product
                  ? _c("h2", { staticClass: "product_title_head" }, [
                      _vm._v(_vm._s(_vm.product.name))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "price_info" }, [
                  _c("span", [_vm._v(_vm._s(_vm.product.price) + " zł")]),
                  _vm._v("/" + _vm._s(_vm.product.Unit) + "\n            ")
                ]),
                _vm._v(" "),
                _c("AddCard", { attrs: { product: _vm.product } })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "product_desc" }, [
              _c("h2", [_vm._v("Opis")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.product.desc))])
            ]),
            _vm._v(" "),
            _c("button", { on: { click: _vm.update } }, [
              _vm._v("Force Update")
            ])
          ])
        : _vm._e()
    ])
  ])
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

/***/ "./resources/js/views/Product.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Product.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7b8d5cc0& */ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/views/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Product.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=7b8d5cc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);