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
        className: "jsx-3397961740"
      }, "Series"), __jsx("ul", {
        className: "jsx-3397961740" + " " + "series-list-container"
      }, arr.map(function (item) {
        return __jsx("li", {
          className: "jsx-3397961740" + " " + "series-list-item"
        }, __jsx("div", {
          className: "jsx-3397961740" + " " + "li-conatiner"
        }, __jsx("img", {
          src: item.urls.image,
          alt: "",
          className: "jsx-3397961740" + " " + "item-image"
        }), __jsx("p", {
          className: "jsx-3397961740"
        }, __jsx("strong", {
          className: "jsx-3397961740"
        }, " ", item.title, " "), Math.ceil(item.duration / 60), " Minutes")), __jsx("button", {
          onClick: function onClick(event) {
            return onClickPodcast(event, item);
          },
          className: "jsx-3397961740"
        }, " Play "));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3397961740"
      }, "header.jsx-3397961740{color:#fff;background:#8756ca;padding:15px;font-size:1.5em;font-weight:bold;text-align:center;}h2.jsx-3397961740{padding:5px;font-size:1.9em;font-weight:600;margin:0;color:whitesmoke;text-align:center;}h4.jsx-3397961740{color:black;}.item-image.jsx-3397961740{height:55px;width:85px;margin-right:15px;}.series-list-container.jsx-3397961740{display:grid;grid-template-columns:750px;grid-row-gap:12px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.series-list-item.jsx-3397961740{height:55px;font-size:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:whitesmoke;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.series-list-item.jsx-3397961740 p.jsx-3397961740{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}.li-conatiner.jsx-3397961740{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}li.jsx-3397961740{vertical-align:center;border-bottom:1px solid black;width:auto;}button.jsx-3397961740{cursor:pointer;background-color:red;padding:15px;border:0;border-radius:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFybG9uXFxEb3dubG9hZHNcXENvZGluZ1xcanNfcHJvamVjdHNcXHBvZGNhc3RcXGNvbXBvbmVudFxcU2VyaWVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnNCLEFBRzBCLEFBUUMsQUFRQSxBQUdBLEFBS0MsQUFNSCxBQU9HLEFBS0EsQUFHUyxBQUtQLFdBakRJLENBUUgsQUFRbEIsQUFHYSxBQVdFLENBTmUsRUEwQlAsT0FMUyxDQXpCWixJQVdQLENBdEJLLEVBUkgsTUFrREEsS0E5QmYsQUFJb0IsRUF2QkYsQ0FRUCxLQTBDQSxHQU5FLENBbkNNLEtBMENDLENBbERELEFBdUJNLElBcUJ6QixPQW5Db0IsSUF5QkksQUFLeEIsRUF0Q29CLEFBa0RwQixZQXpDQSxNQVJBLE9BMkJpQixpQkFDRSxrQ0FLUixNQVhYLEdBWUEsa0RBTEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXJsb25cXERvd25sb2Fkc1xcQ29kaW5nXFxqc19wcm9qZWN0c1xccG9kY2FzdFxcY29tcG9uZW50XFxTZXJpZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VyaWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhcnIsIG9uQ2xpY2tQb2RjYXN0IH0gPSB0aGlzLnByb3BzXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxoMj5TZXJpZXM8L2gyPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzZXJpZXMtbGlzdC1jb250YWluZXJcIj5cclxuICAgICAgICAgIHthcnIubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzZXJpZXMtbGlzdC1pdGVtXCIgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGktY29uYXRpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpdGVtLWltYWdlXCIgc3JjPXtpdGVtLnVybHMuaW1hZ2V9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPiB7IGl0ZW0udGl0bGUgfSA8LyBzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIHsgTWF0aC5jZWlsKGl0ZW0uZHVyYXRpb24gLyA2MCkgfSBNaW51dGVzXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgZXZlbnQgPT4gb25DbGlja1BvZGNhc3QoZXZlbnQsIGl0ZW0pIH0gPiBQbGF5IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBoZWFkZXJ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjllbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pdGVtLWltYWdlIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXJpZXMtbGlzdC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1MHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMTJweDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VyaWVzLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VyaWVzLWxpc3QtaXRlbSBwIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saS1jb25hdGluZXJ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Marlon\\\\Downloads\\\\Coding\\\\js_projects\\\\podcast\\\\component\\\\Series.jsx */"));
    }
  }]);

  return Series;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.67f61087f3373090e762.hot-update.js.map