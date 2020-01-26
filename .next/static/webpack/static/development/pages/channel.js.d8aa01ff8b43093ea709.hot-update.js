webpackHotUpdate("static\\development\\pages\\channel.js",{

/***/ "./component/Series.jsx":
/*!******************************!*\
  !*** ./component/Series.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Series; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var Series =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Series, _React$Component);

  function Series() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Series);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Series).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Series, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          arr = _this$props.arr,
          onClickPodcast = _this$props.onClickPodcast;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("h2", {
        className: "jsx-3004003032"
      }, "Series"), __jsx("ul", {
        className: "jsx-3004003032" + " " + "series-list-container"
      }, arr.map(function (item) {
        return __jsx("li", {
          className: "jsx-3004003032" + " " + "series-list-item"
        }, __jsx("div", {
          className: "jsx-3004003032" + " " + "li-conatiner"
        }, __jsx("img", {
          src: item.urls.image,
          alt: "",
          className: "jsx-3004003032" + " " + "item-image"
        }), __jsx("p", {
          className: "jsx-3004003032"
        }, __jsx("strong", {
          className: "jsx-3004003032"
        }, " ", item.title, " "), Math.ceil(item.duration / 60), " Minutes")), __jsx("button", {
          onClick: function onClick(event) {
            return onClickPodcast(event, item);
          },
          className: "jsx-3004003032"
        }, " Play "));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3004003032"
      }, "header.jsx-3004003032{color:#fff;background:#8756ca;padding:15px;font-size:1.5em;font-weight:bold;text-align:center;}h2.jsx-3004003032{padding:5px;font-size:1.9em;font-weight:600;margin:0;color:whitesmoke;text-align:center;}h4.jsx-3004003032{color:black;}.item-image.jsx-3004003032{height:55px;width:85px;margin-right:15px;}.series-list-container.jsx-3004003032{display:grid;grid-template-columns:750px;grid-row-gap:12px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.series-list-item.jsx-3004003032{height:55px;font-size:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:whitesmoke;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.series-list-item.jsx-3004003032 p.jsx-3004003032{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}.li-conatiner.jsx-3004003032{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}li.jsx-3004003032{vertical-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-bottom:1px solid black;width:auto;}button.jsx-3004003032{cursor:pointer;background-color:red;padding:15px;border:0;border-radius:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFybG9uXFxEb3dubG9hZHNcXENvZGluZ1xcanNfcHJvamVjdHNcXHBvZGNhc3RcXGNvbXBvbmVudFxcU2VyaWVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnNCLEFBRzBCLEFBUUMsQUFRQSxBQUdBLEFBS0MsQUFNSCxBQU9HLEFBS0EsQUFHUyxBQU1QLFdBbERJLENBUUgsQUFRbEIsQUFHYSxBQVdFLENBTmUsRUEyQlAsT0FORSxDQXpCTCxJQVdQLENBdEJLLEVBUkgsTUFtREEsS0EvQmYsQUFJb0IsRUF2QkYsQ0FRUCxLQTJDQSxJQTFDUSxLQTJDQyxDQW5ERCxBQXVCTSxXQWRMLElBeUJJLEFBS3hCLEVBdENvQixBQW1EcEIsWUExQ0EsTUFSQSxPQTJCaUIsaUJBQ0UsR0FhYSw4QkFDbkIsQ0FURixNQVhYLEdBWUEsQ0FTQSxpREFkQSIsImZpbGUiOiJDOlxcVXNlcnNcXE1hcmxvblxcRG93bmxvYWRzXFxDb2RpbmdcXGpzX3Byb2plY3RzXFxwb2RjYXN0XFxjb21wb25lbnRcXFNlcmllcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJpZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGFyciwgb25DbGlja1BvZGNhc3QgfSA9IHRoaXMucHJvcHNcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGgyPlNlcmllczwvaDI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNlcmllcy1saXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge2Fyci5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNlcmllcy1saXN0LWl0ZW1cIiA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaS1jb25hdGluZXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIml0ZW0taW1hZ2VcIiBzcmM9e2l0ZW0udXJscy5pbWFnZX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+IHsgaXRlbS50aXRsZSB9IDwvIHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgeyBNYXRoLmNlaWwoaXRlbS5kdXJhdGlvbiAvIDYwKSB9IE1pbnV0ZXNcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyBldmVudCA9PiBvbkNsaWNrUG9kY2FzdChldmVudCwgaXRlbSkgfSA+IFBsYXkgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGhlYWRlcntcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuOWVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0taW1hZ2Uge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcmllcy1saXN0LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzUwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXJpZXMtbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXJpZXMtbGlzdC1pdGVtIHAge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpLWNvbmF0aW5lcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Marlon\\\\Downloads\\\\Coding\\\\js_projects\\\\podcast\\\\component\\\\Series.jsx */"));
    }
  }]);

  return Series;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.d8aa01ff8b43093ea709.hot-update.js.map