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
        className: "jsx-748434085"
      }, "Series"), __jsx("ul", {
        className: "jsx-748434085" + " " + "series-list-container"
      }, arr.map(function (item) {
        return __jsx("li", {
          className: "jsx-748434085" + " " + "series-list-item"
        }, __jsx("div", {
          className: "jsx-748434085" + " " + "li-conatiner"
        }, __jsx("img", {
          src: item.urls.image,
          alt: "",
          className: "jsx-748434085" + " " + "item-image"
        }), __jsx("p", {
          className: "jsx-748434085"
        }, __jsx("strong", {
          className: "jsx-748434085"
        }, " ", item.title, " "), Math.ceil(item.duration / 60), " Minutes")), __jsx("button", {
          onClick: function onClick(event) {
            return onClickPodcast(event, item);
          },
          className: "jsx-748434085"
        }, " Play "));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "748434085"
      }, "header.jsx-748434085{color:#fff;background:#8756ca;padding:15px;font-size:1.5em;font-weight:bold;text-align:center;}h2.jsx-748434085{padding:5px;font-size:1.9em;font-weight:600;margin:0;color:whitesmoke;text-align:center;}h4.jsx-748434085{color:black;}.item-image.jsx-748434085{height:55px;width:85px;margin-right:15px;}.series-list-container.jsx-748434085{display:grid;grid-template-columns:450px;grid-row-gap:12px;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.series-list-item.jsx-748434085{height:55px;font-size:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:whitesmoke;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.series-list-item.jsx-748434085 p.jsx-748434085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}.li-conatiner.jsx-748434085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}li.jsx-748434085{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid black;width:auto;}button.jsx-748434085{cursor:pointer;background-color:red;padding:15px;border:0;border-radius:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFybG9uXFxEb3dubG9hZHNcXENvZGluZ1xcanNfcHJvamVjdHNcXHBvZGNhc3RcXGNvbXBvbmVudFxcU2VyaWVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnNCLEFBRzBCLEFBUUMsQUFRQSxBQUdBLEFBS0wsQUFDTSxBQU1ILEFBT0csQUFLQSxBQUdpQixBQUtmLFdBbERJLENBUUgsQUFRbEIsQUFHYSxBQVlFLENBTmUsRUEwQlAsUUEvQkgsSUFZUCxDQXZCSyxFQVJILE1BbURBLEtBL0JmLEFBS29CLEVBeEJGLENBUVAsS0EyQ0EsSUExQ1EsS0EyQ0MsQ0FuREQsQUF3QlUsV0FmVCxJQTBCSSxBQUt4QixFQXZDb0IsQUFtRHBCLFlBMUNBLE1BUkEsT0E0QmlCLGNBYWUsR0FaYiwyQkFhTixPQVJGLElBU1gsS0FSQSxHQVpBLCtDQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFybG9uXFxEb3dubG9hZHNcXENvZGluZ1xcanNfcHJvamVjdHNcXHBvZGNhc3RcXGNvbXBvbmVudFxcU2VyaWVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcmllcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYXJyLCBvbkNsaWNrUG9kY2FzdCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8aDI+U2VyaWVzPC9oMj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2VyaWVzLWxpc3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7YXJyLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2VyaWVzLWxpc3QtaXRlbVwiID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpLWNvbmF0aW5lclwiID5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaXRlbS1pbWFnZVwiIHNyYz17aXRlbS51cmxzLmltYWdlfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz4geyBpdGVtLnRpdGxlIH0gPC8gc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICB7IE1hdGguY2VpbChpdGVtLmR1cmF0aW9uIC8gNjApIH0gTWludXRlc1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17IGV2ZW50ID0+IG9uQ2xpY2tQb2RjYXN0KGV2ZW50LCBpdGVtKSB9ID4gUGxheSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45ZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbS1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VyaWVzLWxpc3QtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMTJweDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcmllcy1saXN0LWl0ZW0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcmllcy1saXN0LWl0ZW0gcCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGktY29uYXRpbmVye1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Marlon\\\\Downloads\\\\Coding\\\\js_projects\\\\podcast\\\\component\\\\Series.jsx */"));
    }
  }]);

  return Series;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.cfeccdb8191d69535164.hot-update.js.map